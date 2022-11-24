import Head from 'next/head'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import Spinner from '../components/Spinner/Spinner'
import collections from '../utils/collections'
import getData from '../utils/getData'

const Home = ({ data }) => {
  const [currentData, setCurrentData] = useState()
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
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
        {hasLoaded && <Layout coordinates={currentData} />}
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const collectionList = []

  for (const dbCollection of collections) {
    const collectionData = await getData(dbCollection)
    collectionList.push(collectionData)
  }

  return {
    props: {
      data: { collectionList }
    }
  }
}

export default Home
