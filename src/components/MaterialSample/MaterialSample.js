import Image from 'next/image'

const MaterialSample = material => {
  return (
    <button>
      <Image
        height={80}
        width={80}
        alt={`${material}material sample`}
        src={material}
      />
    </button>
  )
}

export default MaterialSample
