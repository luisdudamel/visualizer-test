import '../src/styles/globals.css'
import { Roboto } from '@next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: '400'
})

const MyApp = ({ Component, pageProps }) => {
  return (
    <main className={`${roboto.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
