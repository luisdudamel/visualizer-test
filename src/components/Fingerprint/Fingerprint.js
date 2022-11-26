import Image from 'next/image'

const Fingerprint = ({ buttonClass }) => {
  return (
    <button type='button' className={buttonClass}>
      <Image
        className='md:w-[30px] w-[30px] md:h-[30px] h-[30px]'
        src='/img/fingerprint.svg'
        alt='Fingerprint icon'
        width={30}
        height={30}
      />
      BOTON PARA SELECCIONAR
    </button>
  )
}

export default Fingerprint
