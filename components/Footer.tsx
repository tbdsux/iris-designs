import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-100">
      <div className="w-11/12 xl:w-5/6 mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center">
          <Image
            alt="Iris Designs Logo"
            src="/logo.png"
            height="40"
            width="40"
          />
          <h4 className="text-xl ml-2 uppercase text-gray-700">
            <span className="text-main font-bold">Iris</span> Designs
          </h4>
        </div>
        <ul className="text-lg flex flex-col xs:flex-row md:flex-col lg:flex-row text-gray-700 my-4 md:my-0">
          <li className="px-2 xl:px-4">
            <Link href="/about-us">
              <a className="hover:underline">About Us</a>
            </Link>
          </li>
          <li className="px-2 xl:px-4">
            <Link href="/services">
              <a className="hover:underline">Services</a>
            </Link>
          </li>
          <li className="px-2 xl:px-4">
            <Link href="/portfolio">
              <a className="hover:underline">Portfolio</a>
            </Link>
          </li>
          <li className="px-2 xl:px-4">
            <Link href="/contact-us">
              <a className="hover:underline">Contact Us</a>
            </Link>
          </li>
        </ul>
        <p className="text-lg text-gray-600">
          &copy; {new Date().getFullYear()} | All Rights Reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
