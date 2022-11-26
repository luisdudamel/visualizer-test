import MaterialSample from '../MaterialSample/MaterialSample'

const MaterialSelector = ({ materialPreviewList }) => {
  return (
    <div className='pl-[10px] flex flex-row relative'>
      <ul className='flex flex-col gap-[10px]'>
        <li className='justify-end text-neutral-600 flex w-[200px] flex-row '>
          <div className='relative left-[3px] text-xs w-full flex justify-center items-center flex h-full bg-white rounded-l border-4 border-white'>
            Example material
          </div>
          <MaterialSample material='https://firebasestorage.googleapis.com/v0/b/visualizer-new-devs-test.appspot.com/o/materials_1565617496107_preview.jpeg?alt=media&token=f6030af0-f889-45b7-a2bd-2f4d959c6b70' />
        </li>

        <li className='justify-end text-neutral-600 flex w-[200px] flex-row '>
          <div className='relative left-[3px] text-xs w-full flex justify-center items-center flex h-full bg-white rounded-l border-4 border-white'>
            Example material
          </div>
          <MaterialSample material='https://firebasestorage.googleapis.com/v0/b/visualizer-new-devs-test.appspot.com/o/materials_1565617496107_preview.jpeg?alt=media&token=f6030af0-f889-45b7-a2bd-2f4d959c6b70' />
        </li>
      </ul>
    </div>
  )
}

export default MaterialSelector
