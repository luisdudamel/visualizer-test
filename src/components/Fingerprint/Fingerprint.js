const Fingerprint = ({ buttonClass }) => {
  console.log(buttonClass)
  return (
    <button className={buttonClass}>
      <img
        className='w-[30px] md:w-[50px]'
        src='./img/fingerprint.svg'
        alt='Fingerprint icon'
      />
    </button>
  )
}

export default Fingerprint
