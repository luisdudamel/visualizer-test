import Head from 'next/head'
import Layout from '../components/Layout/Layout'

const Home = () => {
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
