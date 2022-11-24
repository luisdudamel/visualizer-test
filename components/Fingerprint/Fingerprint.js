const Fingerprint = ({ position }) => {
  return (
    <button className={position}>
      <img
        className='w-[30px] md:w-[50px]'
        src='./img/fingerprint.webp'
        alt='Fingerprint icon'
      />
    </button>
  )
}

export default Fingerprint
