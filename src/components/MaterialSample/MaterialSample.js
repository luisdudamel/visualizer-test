import Image from 'next/image'

const MaterialSample = ({ material }) => {
  return (
    <button
      type='button'
      className='overflow-hidden focus:overflow-visible h-[80px] w-[80px]'
    >
      <Image
        className='rounded'
        height={80}
        width={80}
        alt={`${material}material sample`}
        src={material}
      />
      Seleccionar el material {material}
    </button>
  )
}

export default MaterialSample
