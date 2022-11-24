import Image from 'next/image'
const Layout = () => {
  const src = process.env.NEXT_PUBLIC_BACKGROUND_URL

  return (
    <div className='flex flex-col lg:h-full lg:w-5/6 md:h-full md:w-5/6 w-[1240px] h-[873px] items-center justify-center relative'>
      <Image
        className='aspect-auto'
        src={src}
        alt={'Kitchen with a table, 2 chairs and a window'}
        width={1240}
        height={873}
        priority
      />
    </div>
  )
}

export default Layout
