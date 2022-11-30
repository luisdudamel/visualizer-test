import Image from 'next/image'

const Fingerprint = ({
  buttonClass,
  action,
  place,
  coordinates: { coordX, coordY }
}) => {
  return (
    <button
      style={{ top: `${coordY}%`, left: `${coordX}%` }}
      onClick={() => action(place)}
      type='button'
      className={buttonClass}
    >
      <Image
        className='z-1 xl:w-[40px] xl:h-[40px] w-[30px] h-[30px] transition-all duration-800 hover:opacity-40'
        src='/img/fingerprint.svg'
        alt='Fingerprint icon'
        width={30}
        height={30}
        priority
      />
      Select Zone
    </button>
  )
}

export default Fingerprint
