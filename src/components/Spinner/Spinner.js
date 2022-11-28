const Spinner = ({ messageText }) => {
  return (
    <div className='z-10 fixed w-full h-full bg-gray-700/20'>
      <div
        role='status'
        className='w-[100px] h-[100px] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'
      >
        <svg
          version='1.1'
          id='L4'
          xmlns='http://www.w3.org/2000/svg'
          x='0px'
          y='0px'
          viewBox='0 0 100 100'
          enableBackground='new 0 0 0 0'
        >
          <circle fill='#fff' stroke='none' cx='26' cy='50' r='6'>
            <animate
              attributeName='opacity'
              dur='1s'
              values='0;1;0'
              repeatCount='indefinite'
              begin='0.1'
            />
          </circle>
          <circle fill='#fff' stroke='none' cx='46' cy='50' r='6'>
            <animate
              attributeName='opacity'
              dur='1s'
              values='0;1;0'
              repeatCount='indefinite'
              begin='0.2'
            />
          </circle>
          <circle fill='#fff' stroke='none' cx='66' cy='50' r='6'>
            <animate
              attributeName='opacity'
              dur='1s'
              values='0;1;0'
              repeatCount='indefinite'
              begin='0.3'
            />
          </circle>
        </svg>
        <span className='text-slate-200/90 absolute top-[60%] left-[50%] -translate-x-1/2 translate-y-1/2'>
          {messageText}
        </span>
      </div>
    </div>
  )
}

export default Spinner
