import Image from 'next/image'

const NavMenu = () => {
  return (
    <nav className="flex items-center justify-between w-11/12 mx-auto py-6">
      <div className="">
        <Image src="/logo.png" height="50" width="50" />
      </div>
      <ul className="flex items-center text-xl text-gray-800">
        <li className="px-6">
          <a href="#" className="tracking-wide hover:text-main">
            Home
          </a>
        </li>
        <li className="px-6">
          <a href="#" className="tracking-wide hover:text-main">
            Our Services
          </a>
        </li>
        <li className="px-6">
          <a href="#" className="tracking-wide hover:text-main">
            Portfolio
          </a>
        </li>
        <li className="px-6">
          <a href="#" className="tracking-wide hover:text-main">
            About Us
          </a>
        </li>
        <li className="pl-8">
          <a
            href="#"
            className="bg-main text-white py-2 px-6 hover:bg-grad-1 flex items-center"
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
