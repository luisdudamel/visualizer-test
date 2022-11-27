import Image from 'next/image'
import { useEffect, useState } from 'react'
import selectNewLayers from '../../utils/selectNewLayers/selectNewLayers'
import Fingerprint from '../Fingerprint/Fingerprint'
import MaterialLayer from '../MaterialLayer/MaterialLayer'
import MaterialSelector from '../MaterialSelector/MaterialSelector'

const Layout = ({ data, backgroundImageSrc }) => {
  const [currentData, setCurrentData] = useState([])
  const [isSelectorOpen, setIsSelectorOpen] = useState(false)
  const [materialPreview, setMaterialPreview] = useState()
  const [hasLoaded, setHasloaded] = useState(false)
  const [activeLayers, setActiveLayers] = useState([])

  console.log(activeLayers)

  const toggleSelector = place => {
    const materialsPlaceToShow = currentData.find(
      material => material.place === place
    )

    setMaterialPreview(materialsPlaceToShow)
    setIsSelectorOpen(!isSelectorOpen)
  }
  useEffect(() => {
    setCurrentData(data)
    setHasloaded(!hasLoaded)
  }, [])

  const setNewLayer = newLayer => {
    const newLayerList = selectNewLayers(activeLayers, newLayer)
    setActiveLayers(newLayerList)
  }

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
            {hasLoaded && !isSelectorOpen && (
              <>
                <Fingerprint
                  action={toggleSelector}
                  place={currentData[0].place}
                  buttonClass='z-[1] absolute left-[40%] text-s top-[86%] overflow-hidden focus-visible:overflow-visible w-[30px] h-[30px]'
                />
                <Fingerprint
                  action={toggleSelector}
                  place={currentData[1].place}
                  buttonClass='z-[1] absolute left-[61%] text-s top-[47%] overflow-hidden focus-visible:overflow-visible w-[30px] h-[30px]'
                />
                <Fingerprint
                  action={toggleSelector}
                  place={currentData[2].place}
                  buttonClass='z-[1] absolute left-[71%] text-s top-[38%] overflow-hidden focus-visible:overflow-visible w-[30px] h-[30px]'
                />
                <Fingerprint
                  action={toggleSelector}
                  place={currentData[3].place}
                  buttonClass='z-[1] absolute left-[52%] text-s top-[55%] overflow-hidden focus-visible:overflow-visible w-[30px] h-[30px]'
                />
              </>
            )}
            {activeLayers.length > 0 &&
              activeLayers.map(layer => {
                return <MaterialLayer key={layer.id} layerData={layer} />
              })}
            {isSelectorOpen && (
              <MaterialSelector
                closeSelectorAction={toggleSelector}
                materialPreviewList={materialPreview}
                setLayers={setNewLayer}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
