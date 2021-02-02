import { AppProps, Container } from 'next/app'
import { DefaultSeo } from 'next-seo'
import '../styles/tailwind.css'
import SEO from '../next-seo.config'

function IrisDesigns({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Container>
  )
}

export default IrisDesigns
