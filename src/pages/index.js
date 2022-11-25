import {
  collection,
  documentId,
  getDocs,
  query,
  where
} from 'firebase/firestore'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import Spinner from '../components/Spinner/Spinner'
import database from '../firebase/config'
import collections from '../utils/collections'
import getCollectionData from '../utils/getCollectionData/getCollectionData'
import getData from '../utils/getData/getData'

const Home = ({ data }) => {
  const [currentData, setCurrentData] = useState()
  const [hasLoaded, setHasLoaded] = useState(false)
  console.log(currentData)
  useEffect(() => {
    ;(async () => {
      const pointsQuery = query(
        collection(database, 'points'),
        where(documentId(), '==', 'EnRd7hAaNydVdVJ06qgF')
      )

      const pointsresult = await getDocs(pointsQuery)
      const materialsresult = await getData('materials')

      console.log(pointsresult)
      console.log(materialsresult)
    })()
    setCurrentData(data)
    setHasLoaded(true)
  }, [])

  return (
    <>
      <Head>
        <link rel='shortcut icon' href='/img/logo-estudio-cactus.svg' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, minimum-scale=1'
        />
        <title>Visualizer</title>
      </Head>
      <div className='flex flex-col items-center justify-center w-screen h-screen'>
        {!hasLoaded && <Spinner />}
        {hasLoaded && (
          <Layout
            data={{
              src: 'https://firebasestorage.googleapis.com/image.png'
            }}
          />
        )}
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const collectionList = []

  for (const dbCollection of collections) {
    const currentCollection = collection(database, dbCollection)

    const collectionData = await getCollectionData(currentCollection)
    collectionList.push(collectionData)
  }

  return {
    props: {
      data: { collectionList }
    }
  }
}

export default Home
