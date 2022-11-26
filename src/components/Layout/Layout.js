import Image from 'next/image'
import { useEffect, useState } from 'react'
import Fingerprint from '../Fingerprint/Fingerprint'
import MaterialLayer from '../MaterialLayer/MaterialLayer'
import MaterialSelector from '../MaterialSelector/MaterialSelector'

const Layout = ({ data, backgroundImageSrc }) => {
  const [currentData, setCurrentData] = useState()
  const [floorLayers, setFloorLayers] = useState('')

  useEffect(() => {
    setCurrentData(currentData)
  }, [])
  console.log(data)
  return (
    <div className='font-sans bg-layout-container bg-center w-screen h-screen  '>
      <div className='backdrop-blur-2xl flex flex-row items-center justify-center w-full h-full xl:px-[180px]  '>
        <div className='flex flex-row'>
          <div className='flex flex-row items-center justify-center relative'>
            <Image
              className='aspect-auto'
              src={backgroundImageSrc}
              alt='Kitchen with a table, 2 chairs and a window'
              width={1240}
              height={873}
              priority
            />
            <Fingerprint buttonClass='z-1 absolute left-[40%] text-s top-[86%] overflow-hidden focus-visible:overflow-visible w-[30px] h-[30px]' />
            <Fingerprint buttonClass='z-1 absolute left-[52%] text-s top-[55%] overflow-hidden focus-visible:overflow-visible w-[30px] h-[30px]' />
            <Fingerprint buttonClass='z-1 absolute left-[61%] text-s top-[47%] overflow-hidden focus-visible:overflow-visible w-[30px] h-[30px]' />
            <Fingerprint buttonClass='z-1 absolute left-[71%] text-s top-[38%] overflow-hidden focus-visible:overflow-visible w-[30px] h-[30px]' />
            {/* <MaterialLayer layerData={floorLayers} /> */}
            <MaterialSelector />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
