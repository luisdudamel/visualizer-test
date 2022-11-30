import Image from 'next/image'

const MaterialLayer = ({ layerData }) => {
  const layerPointReference = layerData.points[0]

  return (
    <div className='flex flex-col 2xl:h-full xl:w-full h-full w-full items-center justify-center absolute'>
      <Image
        className='aspect-auto h-full'
        src={layerData.layers[layerPointReference]}
        alt={`${layerData.name} material`}
        fill
        sizes='100%'
        quality={100}
      />
    </div>
  )
}

export default MaterialLayer
