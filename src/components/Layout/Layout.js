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
    <div className='bg-layout-container bg-center w-screen h-screen  '>
      <div className='backdrop-blur-2xl flex flex-col items-center justify-center w-full h-full xl:px-[180px] py-[130px]  '>
        <div className='flex flex-col items-center justify-center relative'>
          <Image
            className='aspect-auto'
            src={backgroundImageSrc}
            alt='Kitchen with a table, 2 chairs and a window'
            width={1240}
            height={873}
            priority
          />
          <Fingerprint buttonClass='z-1 absolute left-[40%] top-[86%]' />
          <Fingerprint buttonClass='z-1 absolute left-[71%] top-[38%]' />
          <Fingerprint buttonClass='z-1 absolute left-[52%] top-[55%]' />
          <Fingerprint buttonClass='z-1 absolute left-[61%] top-[47%]' />
          {/* <MaterialLayer layerData={floorLayers} />
          <MaterialSelector /> */}
        </div>
      </div>
    </div>
  )
}

export default Layout
