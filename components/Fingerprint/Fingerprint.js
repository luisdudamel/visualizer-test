import Image from 'next/image'

const Fingerprint = ({ buttonClass, action, place }) => {
  return (
    <button onClick={() => action(place)} type='button' className={buttonClass}>
      <Image
        className='z-1 md:w-[30px] w-[30px] md:h-[30px] h-[30px]'
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
