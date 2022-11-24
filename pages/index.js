import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <link rel='shortcut icon' href='/img/logo-estudio-cactus.svg' />
      </Head>
      <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        ESTUDIO CACTUS VISUALIZER TEST
      </div>
    </>
  )
}

export default Home
