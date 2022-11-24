import Head from 'next/head'
import { useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import getData from '../utils/getData'

const Home = () => {
  useEffect(() => {
    ;(async () => {
      const points = await getData('points')
      console.log(points)
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
      </div>
    </>
  )
}

export default Home
