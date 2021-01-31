import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-100">
      <div className="w-5/6 mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center">
          <Image src="/logo.png" height="40" width="40" />
          <h4 className="text-xl ml-2 uppercase text-gray-700">
            <span className="text-main font-bold">Iris</span> Designs
          </h4>
        </div>
        <ul className="text-lg flex flex-row md:flex-col lg:flex-row text-gray-700 my-4 md:my-0">
          <li className="px-4">
            <a href="#" className="hover:underline">
              Home
            </a>
          </li>
          <li className="px-4">
            <a href="#" className="hover:underline">
              Services
            </a>
          </li>
          <li className="px-4">
            <a href="#" className="hover:underline">
              Portfolio
            </a>
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
