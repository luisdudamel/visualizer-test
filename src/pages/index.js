import Head from 'next/head'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import Spinner from '../components/Spinner/Spinner'
import getData from '../utils/getData/getData'

const Home = ({ data }) => {
  const [hasLoaded, setHasLoaded] = useState(false)
  const [spinnerText, setSpinnerText] = useState('')
  const backgroundSrc = process.env.NEXT_PUBLIC_BACKGROUND_URL

  useEffect(() => {
    if (typeof data === 'string') {
      setSpinnerText(data)
    } else {
      setHasLoaded(!hasLoaded)
    }
  }, [])

  return (
    <>
      <Head>
        <link rel='shortcut icon' href='/img/logo-estudio-cactus.svg' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, minimum-scale=1'
        />
        <meta
          name='description'
          content='Customize your room, with our 3D Room configurator'
          key='desc'
        />
        <title>3D Room Configurator</title>
      </Head>
      <section className='flex flex-col items-center justify-center w-screen h-screen'>
        {!hasLoaded && <Spinner messageText={spinnerText} />}
        {hasLoaded && <Layout data={data} backgroundImageSrc={backgroundSrc} />}
      </section>
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
