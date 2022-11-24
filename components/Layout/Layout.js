import Image from 'next/image'
const Layout = () => {
  const src = process.env.NEXT_PUBLIC_BACKGROUND_URL

  return (
    <div className='bg-layout-container bg-center flex flex-col 2xl:h-auto md:w-full w-[1240px] h-full items-center justify-center relative'>
      <Image
        className='aspect-auto h-full'
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
