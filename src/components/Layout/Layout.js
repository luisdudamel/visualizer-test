import Image from 'next/image'
import { useEffect, useState } from 'react'
import Fingerprint from '../Fingerprint/Fingerprint'
import MaterialLayer from '../MaterialLayer/MaterialLayer'
import MaterialSample from '../MaterialSample/MaterialSample'

const Layout = ({ data, backgroundImageSrc }) => {
  const [currentData, setCurrentData] = useState()
  const [floorLayer, setFloorLayer] = useState('')

  useEffect(() => {
    setCurrentData(currentData)
  }, [])
  console.log(data)
  return (
    <div className='bg-layout-container bg-center w-full h-screen 2xl:h-auto '>
      <div className='backdrop-blur-lg flex flex-col items-center justify-center w-full h-full 2xl:h-auto '>
        <div className='flex flex-col 2xl:h-auto w-[1240px] h-full items-center justify-center relative'>
          <Image
            className='aspect-auto w-full h-full'
            src={backgroundImageSrc}
            alt='Kitchen with a table, 2 chairs and a window'
            width={1240}
            height={873}
            priority
          />
          <Fingerprint buttonClass='z-10 absolute 2xl:fixed left-[40%] top-[86%]' />
          <Fingerprint buttonClass='z-10 absolute 2xl:fixed left-[71%] top-[38%]' />
          <Fingerprint buttonClass='z-10 absolute 2xl:fixed left-[52%] top-[55%]' />
          <Fingerprint buttonClass='z-10 absolute 2xl:fixed left-[61%] top-[47%]' />
          <MaterialLayer layerData={floorLayer} />
          {/* <MaterialSample material={floorLayer} /> */}
        </div>
      </div>
    </div>
  )
}

export default Layout
