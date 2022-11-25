import Image from 'next/image'

const MaterialSample = ({ material }) => {
  console.log(material)
  return (
    <button>
      <Image
        height={80}
        width={80}
        alt={`${material}material sample`}
        src={material[0].materials[0].materialPreview}
      />
    </button>
  )
}

export default MaterialSample
