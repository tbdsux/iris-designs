import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import '../styles/tailwind.css'
import SEO from '../next-seo.config'

function IrisDesigns({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default IrisDesigns
