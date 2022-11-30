import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef } from 'react'

import MaterialSample from '../MaterialSample/MaterialSample'

const MaterialSelector = ({
  materialPreviewList,
  closeSelectorAction,
  setLayers,
  currentActiveLayers
}) => {
  const selectorRef = useRef(null)

  const setNewLayer = newLayerToSet => {
    const newLayerToAdd = materialPreviewList.materials.find(
      material => material.id === newLayerToSet
    )
    console.log('ME HAN CERRADOOOOOOOOOOOOO')
    setLayers(newLayerToAdd)
  }

  const scroll = (ref, scrollOffset) => {
    try {
      ref.current.scrollLeft += scrollOffset
    } catch {}
  }

  return (
    <>
      <div
        onClick={() => closeSelectorAction()}
        className='fixed top-0 left-0 w-screen h-screen'
        data-testid='selector-close-area'
      >
        <button
          type='button'
          className='w-[0px] focus-visible:overflow-visible overflow-hidden'
        >
          Close material selector
        </button>
      </div>
      <div className='xl:ml-[10px] xl: py-[30px] xl:items-end justify-center top-[110%] h-[80px] xl:h-full w-full xl:w-[150px] items-center flex xl:flex-col h-full absolute xl:top-auto xl:left-[100%]'>
        <button
          onClick={() => scroll(selectorRef, -80)}
          type='button'
          className='z-2 h-[30px] w-[100px] flex-2 text-start xl:text-end overflow-hidden text-[12px] focus-visible:overflow-visible'
        >
          <div className='pl-[15px] lg:pr-[10px]'>
            <FontAwesomeIcon
              className='text-white text-center text-2xl xl:rotate-0 -rotate-90'
              icon={faChevronUp}
            />
          </div>
          Previous
        </button>

        <ul
          ref={selectorRef}
          className={`py-10 xl:flex-1 w-[500px] xl:w-[150px] xl:overflow-visible flex xl:flex-col gap-[10px] no-scrollbar scroll-smooth xl:justify-start overflow-x-scroll ${
            materialPreviewList.materials.length > 2
              ? 'sm:justify-center  justify-between'
              : 'justify-center'
          }`}
          tor
        >
          {materialPreviewList.materials.map(material => {
            return (
              <li
                key={material.id}
                className='drop-shadow justify-end lg:w-[150px] sm:max-xl:w-auto text-neutral-600 flex h-[70px] flex-row '
              >
                {currentActiveLayers.includes(material.name) ? (
                  <div
                    onClick={() => setNewLayer(material.id)}
                    className='relative transition-all duration-100 w-[100px] left-[3px] lg:w-[80px] text-[9px] w-full flex justify-center items-center flex h-full bg-gray-100 rounded-l border-gray-100'
                  >
                    {material.name}
                  </div>
                ) : (
                  <div className='hidden transition-all duration-100 xl:block relative px-2 w-[80px] lg:w-[80px] left-[3px] text-[9px] w-full flex justify-center items-center flex h-full rounded-l border-gray-100' />
                )}

                <MaterialSample
                  setLayerFunction={setNewLayer}
                  material={material}
                />
              </li>
            )
          })}
        </ul>

        <button
          onClick={() => scroll(selectorRef, 80)}
          type='button'
          className='z-2 h-[30px] flex-2 w-[100px] text-end overflow-hidden text-[12px] focus-visible:overflow-visible'
        >
          <div className='pr-[15px] lg:pr-[10px]'>
            <FontAwesomeIcon
              className='text-white text-center text-2xl xl:rotate-0 -rotate-90'
              icon={faChevronDown}
            />
          </div>
          Next
        </button>
      </div>
    </>
  )
}

export default MaterialSelector
