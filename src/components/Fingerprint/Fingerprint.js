const Fingerprint = ({ top, left }) => {
  return (
    <button className={`absolute top-[${top}%] left-[${left}%]`}>
      <img
        className='w-[30px] md:w-[50px]'
        src='./img/fingerprint.webp'
        alt='Fingerprint icon'
      />
    </button>
  )
}

export default Fingerprint
