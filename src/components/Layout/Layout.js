import Image from 'next/image'
import Fingerprint from '../Fingerprint/Fingerprint'

const Layout = ({ coordinates }) => {
  const src = process.env.NEXT_PUBLIC_BACKGROUND_URL

  console.log(coordinates)

  return (
    <div className='flex flex-col items-center justify-center bg-layout-container bg-center w-full h-full 2xl:h-auto '>
      <div className='flex backdrop-blur-lg flex-col 2xl:h-auto md:w-full w-[1240px] h-full items-center justify-center relative'>
        <Image
          className='aspect-auto h-full'
          src={src}
          alt='Kitchen with a table, 2 chairs and a window'
          width={1240}
          height={873}
          priority
        />
        <Fingerprint top={86} left={40} />
      </div>
    </div>
  )
}

export default Layout
