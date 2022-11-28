import Image from 'next/image'

const MaterialLayer = ({ layerData }) => {
  const layerPointReference = layerData.points[0]

  return (
    <div className='flex flex-col 2xl:h-auto xl:w-full h-full items-center justify-center absolute'>
      <Image
        className='aspect-auto h-full'
        src={layerData.layers[layerPointReference]}
        alt={`${layerData.name} material`}
        width={1240}
        height={873}
        priority
      />
    </div>
  )
}

export default MaterialLayer
