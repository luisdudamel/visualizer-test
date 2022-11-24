import Head from 'next/head'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import collections from '../utils/collections'
import getData from '../utils/getData'

const Home = () => {
  const [currentData, setCurrentData] = useState()
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    const collectionList = []

    ;(async () => {
      for (const dbCollection of collections) {
        const collectionData = await getData(dbCollection)
        collectionList.push(collectionData)
      }
      setCurrentData(collectionList)
      setHasLoaded(true)
    })()
  }, [])

  console.log(currentData)

  return (
    <>
      <Head>
        <link rel='shortcut icon' href='./img/logo-estudio-cactus.svg' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, minimum-scale=1'
        />
        <title>Visualizer</title>
      </Head>
      <div className='flex flex-col items-center justify-center w-screen h-screen'>
        {hasLoaded && <Layout coordinates={currentData[0]} />}
      </div>
    </>
  )
}

export default Home
