import Image from 'next/image'

import Layout from '../components/Layout'
import NavMenu from '../components/NavMenu'
import SubPage from '../components/SubPage'

const Services = () => {
  return (
    <Layout title="What We Do | Services - Iris Designs">
      <NavMenu />

      <SubPage
        page_title="Graphics Design"
        page_description="We primarily focus on crafting and designing materials for
            businesses and companies"
        page_button_icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
            <path
              fillRule="evenodd"
              d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        }
        page_button_string="What We Do"
        page_image="/service.svg"
      />
      {/* <div className="w-5/6 mx-auto flex justify-between py-12">
        <div className="w-3/5 pr-8">
          <h2 className="text-6xl font-extrabold text-main"></h2>
          <p className="text-4xl mt-4 text-gray-800"></p>
          <div className="mt-8">
            <a
              href="#"
              type="button"
              title="Products or outputs that we do"
              className="bg-grad-1 hover:bg-grad-2 text-white text-2xl py-2 px-6 inline-flex items-center"
            >
              <div className="w-10 h-10 mr-2">
                
              </div>
              Outputs We Make
            </a>
          </div>
        </div>
        <Image src="/service.svg" height="450" width="450" />
      </div> */}

      <hr />

      <div className="py-12">
        <div className="w-5/6 mx-auto">
          <h3 className="text-2xl font-bold underline text-gray-700">
            We currently offer the following...
          </h3>
        </div>
      </div>
    </Layout>
  )
}

export default Services
