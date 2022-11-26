import MaterialSample from '../MaterialSample/MaterialSample'

const MaterialSelector = ({ materialPreviewList }) => {
  return (
    <div className='flex flex-row relative'>
      <ul className='flex flex-col gap-[10px]'>
        <li className='flex flex-row bg-white rounded-md border-4 border-white'>
          <span className='flex h-full'>Materialcito</span>
          <MaterialSample
            material={
              'https://firebasestorage.googleapis.com/v0/b/visualizer-new-devs-test.appspot.com/o/materials_1565617496107_preview.jpeg?alt=media&token=f6030af0-f889-45b7-a2bd-2f4d959c6b70'
            }
          />
        </li>
        <li className='flex flex-row bg-white rounded-md border-4 border-white'>
          <div>Materialcito</div>
          <MaterialSample
            material={
              'https://firebasestorage.googleapis.com/v0/b/visualizer-new-devs-test.appspot.com/o/materials_1565617496107_preview.jpeg?alt=media&token=f6030af0-f889-45b7-a2bd-2f4d959c6b70'
            }
          />
        </li>
      </ul>
    </div>
  )
}

export default MaterialSelector
