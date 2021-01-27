import { ReactNode } from 'react'
import Head from 'next/head'

type LayoutProps = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://cdn.lineicons.com/2.0/LineIcons.css"
          rel="stylesheet"
        ></link>
      </Head>

      <main className="antialiased bg-coolGray-50">{children}</main>
    </div>
  )
}

export default Layout
