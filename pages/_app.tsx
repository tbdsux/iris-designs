import { AppProps } from 'next/app'
import '../styles/tailwind.css'

function IrisDesigns({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default IrisDesigns