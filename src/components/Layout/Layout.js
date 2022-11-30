import Image from 'next/image'
import { useEffect, useState } from 'react'
import selectNewLayers from '../../utils/selectNewLayers/selectNewLayers'
import Fingerprint from '../Fingerprint/Fingerprint'
import MaterialLayer from '../MaterialLayer/MaterialLayer'
import MaterialSelector from '../MaterialSelector/MaterialSelector'
import Spinner from '../Spinner/Spinner'

const Layout = ({ data: currentData, backgroundImageSrc }) => {
  const [isSelectorOpen, setIsSelectorOpen] = useState(false)
  const [materialPreview, setMaterialPreview] = useState('')
  const [hasLoaded, setHasloaded] = useState(true)
  const [activeLayersData, setActiveLayersData] = useState([])
  const [activeLayers, setActiveLayers] = useState([])

  const toggleSelector = place => {
    const materialsPlaceToShow = currentData.find(
      material => material.place === place
    )

    setMaterialPreview(materialsPlaceToShow)
    setIsSelectorOpen(!isSelectorOpen)
  }

  const setNewLayer = async newLayer => {
    setHasloaded(false)
    const newLayerList = await selectNewLayers(activeLayersData, newLayer)
    setActiveLayersData(newLayerList)
    setActiveLayers(newLayerList.map(layerData => layerData.name))
    setHasloaded(true)
  }

  return (
    <div className='font-sans bg-layout-container bg-center w-screen h-screen  '>
      {!hasLoaded && <Spinner />}
      <div className='backdrop-blur-2xl flex flex-row items-center justify-center w-full h-full xl:px-[180px]  '>
        <div className='flex w-full h-full items-center flex-row'>
          <div className='flex xl:flex-row w-full h-[50%] lg:h-full flex-col items-center justify-center relative'>
            <Image
              className='aspect-auto'
              src={backgroundImageSrc}
              alt='Kitchen with a table, 2 chairs and a window'
              fill
              sizes='(max-width: 768px) 100%,
              (max-width: 1200px) 50%,
              33%
              
              '
              quality={100}
              priority
            />
            {hasLoaded && !isSelectorOpen && (
              <>
                {currentData.map(data => {
                  return (
                    <Fingerprint
                      action={toggleSelector}
                      place={data.place}
                      buttonClass={`z-[1] absolute left-[${data.point.coordX}%] text-s top-[${data.point.coordY}%] overflow-hidden focus-visible:overflow-visible xl:w-[40px] xl:h-[40px] w-[30px] h-[30px]`}
                    />
                  )
                })}
              </>
            )}
            {activeLayersData.length > 0 &&
              activeLayersData.map(layer => {
                return <MaterialLayer key={layer.id} layerData={layer} />
              })}
            {isSelectorOpen && (
              <MaterialSelector
                closeSelectorAction={toggleSelector}
                materialPreviewList={materialPreview}
                setLayers={setNewLayer}
                currentActiveLayers={activeLayers}
                currentActiveLayersData={activeLayersData}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
