import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NavMenu = () => {
  const [menu, setMenu] = useState(false)

  return (
    <nav className="flex flex-col lg:flex-row items-center justify-between w-11/12 mx-auto py-6">
      <div className="flex items-center justify-between w-full lg:w-auto">
        <div className="inline-flex items-center">
          <Image
            alt="Iris Designs Logo"
            src="/logo.png"
            height="45"
            width="45"
          />
          <h1 className="hidden md:block ml-2 uppercase text-2xl font-extrabold text-gray-700">
            <span className="text-main">Iris</span>
            <br className="hidden lg:block xl:hidden" /> Designs
          </h1>
        </div>
        <div className="lg:hidden flex items-center">
          {/* open menu button */}
          {!menu ? (
            <button
              aria-label="Open Mobile Menu"
              onClick={() => setMenu(true)}
              className="mr-2 w-10 h-10 text-grad-1 focus:text-grad-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-full h-full"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          ) : null}

          {/* close menu button */}
          {menu ? (
            <button
              aria-label="Close Mobile Button"
              onClick={() => setMenu(false)}
              className="mr-2 w-10 h-10 text-grad-1 focus:text-grad-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-full h-full"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          ) : null}

          {/* hire button */}
          <a
            href="https://web.facebook.com/NotIrisCreations"
            target="_blank"
            className="bg-main text-lg 2xl:text-xl text-white uppercase font-bold py-2 px-6 hover:bg-grad-1 flex items-center"
          >
            <div className="h-6 w-6 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            Hire Us
          </a>
        </div>
      </div>
      {/* for mobile > tablet navigations */}
      {menu ? (
        <div className="lg:hidden w-full">
          <ul className="mt-3 flex flex-col justify-center md:flex-row text-lg 2xl:text-xl text-gray-800 text-center">
            <li className="py-2 md:py-0 md:px-4">
              <Link href="/">
                <a className="tracking-wide hover:text-main">Home</a>
              </Link>
            </li>
            <li className="py-2 md:py-0 md:px-4">
              <Link href="/services">
                <a className="tracking-wide hover:text-main">Our Services</a>
              </Link>
            </li>
            <li className="py-2 md:py-0 md:px-4">
              <Link href="/portfolio">
                <a className="tracking-wide hover:text-main">Portfolio</a>
              </Link>
            </li>
            <li className="py-2 md:py-0 md:px-4">
              <Link href="/about-us">
                <a className="tracking-wide hover:text-main">About Us</a>
              </Link>
            </li>
          </ul>
          <hr className="my-2" />
        </div>
      ) : null}

      {/* for desktop navigations */}
      <ul className="hidden lg:flex items-center text-lg 2xl:text-xl text-gray-800">
        <li className="px-6">
          <Link href="/">
            <a className="tracking-wide hover:text-main">Home</a>
          </Link>
        </li>
        <li className="px-6">
          <Link href="/services">
            <a className="tracking-wide hover:text-main">Our Services</a>
          </Link>
        </li>
        <li className="px-6">
          <Link href="/portfolio">
            <a className="tracking-wide hover:text-main">Portfolio</a>
          </Link>
        </li>
        <li className="px-6">
          <Link href="/about-us">
            <a className="tracking-wide hover:text-main">About Us</a>
          </Link>
        </li>
        <li className="pl-8">
          <a
            href="https://web.facebook.com/NotIrisCreations"
            target="_blank"
            className="bg-main text-lg 2xl:text-xl text-white uppercase font-bold py-2 px-6 hover:bg-grad-1 flex items-center"
          >
            <div className="h-6 w-6 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            Hire Us
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavMenu
