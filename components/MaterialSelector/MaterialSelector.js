import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import MaterialSample from '../MaterialSample/MaterialSample'

const MaterialSelector = ({
  materialPreviewList,
  currentActiveLayers,
  closeSelectorAction,
  setLayers
}) => {
  debugger
  const setNewLayer = newLayerToSet => {
    const newLayerToAdd = materialPreviewList.materials.find(
      material => material.id === newLayerToSet
    )

    setLayers(newLayerToAdd)
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
      <div className='pl-[10px] items-center flex xl:flex-col h-full absolute xl:top-auto top-[70%] xl:left-[100%]'>
        <button
          type='button'
          className='z-2 h-[30px] w-[30px] overflow-hidden text-[12px] focus-visible:overflow-visible'
        >
          <FontAwesomeIcon
            className='text-white text-center text-2xl xl:rotate-0 -rotate-90'
            icon={faChevronUp}
          />
          Go up
        </button>
        <ul className='py-10 flex-1 flex xl:flex-col gap-[10px]'>
          {materialPreviewList.materials.map(material => {
            return (
              <li
                key={material.id}
                className='justify-end text-neutral-600 flex h-[70px] flex-row '
              >
                {currentActiveLayers.includes(material.name) && (
                  <div className='relative px-2 w-[80px] left-[3px] text-[10px] w-full flex justify-center items-center flex h-full bg-white rounded-l border-white'>
                    {material.name}
                  </div>
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
          type='button'
          className='z-2 h-[30px] w-[30px] overflow-hidden text-[12px] focus-visible:overflow-visible'
        >
          <FontAwesomeIcon
            className='text-white text-center text-2xl xl:rotate-0 -rotate-90'
            icon={faChevronDown}
          />
          Go down
        </button>
      </div>
    </>
  )
}

export default MaterialSelector
