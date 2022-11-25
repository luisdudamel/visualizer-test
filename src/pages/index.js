import Head from 'next/head'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import Spinner from '../components/Spinner/Spinner'

import getData from '../utils/getData/getData'

const Home = ({ data }) => {
  const [currentData, setCurrentData] = useState()
  const [hasLoaded, setHasLoaded] = useState(false)
  console.log(currentData)

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
  const data = await getData('materials')

  return {
    props: {
      data
    }
  }
}

export default Home
