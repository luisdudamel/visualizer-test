import { collection } from 'firebase/firestore'
import Head from 'next/head'
import { useEffect } from 'react'
import Fingerprint from '../components/Fingerprint/Fingerprint'
import Layout from '../components/Layout/Layout'
import collections from '../utils/collections'
import getData from '../utils/getData'

const Home = () => {
  useEffect(() => {
    ;(async () => {
      for (const dbCollection of collections) {
        const collectionData = await getData(dbCollection)
      }
    })()
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
        <Layout />
        <Fingerprint />
      </div>
    </>
  )
}

export default Home
