import Image from 'next/image'
import Link from 'next/link'

import Layout from '../components/Layout'
import Footer from '../components/Footer'
import SubPage from '../components/SubPage'
import MainServices from '../components/services/Services'

import { NextSeo } from 'next-seo'

const Services = () => {
  return (
    <Layout title="What We Do | Services - Iris Designs">
      {/* seo */}
      <NextSeo
        title="What We Do | Services - Iris Designs"
        description="Not sure on what we do? We primarily focus on crafting and designing materials for businesses and companies. You can contact us for more information."
        openGraph={{
          url: 'https://irisdesigns.cf/services',
          title: 'What We Do | Services - Iris Designs',
          description:
            'Not sure on what we do? We primarily focus on crafting and designing materials for businesses and companies. You can contact us for more information.',
        }}
      />

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

      <hr />

      <div className="py-12" id="sub-content">
        <div className="w-11/12 mx-auto">
          <h3 className="text-2xl font-bold underline text-gray-700">
            We currently offer the following design services...
          </h3>

          <MainServices />
        </div>
      </div>

      <hr />

      {/* not sure section */}
      <div className="bg-grad-2 py-12">
        <div className="w-5/6 lg:w-4/5 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="w-11/12 xs:w-5/6 mx-auto md:w-3/5 md:mr-8">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-100">
                Not sure of what to do?
              </h1>
              <p className="text-2xl md:text-3xl mt-4 text-gray-300">
                Send us a message and we will try to help you on your design for
                your business
              </p>
              <div className="mt-8">
                <Link href="/contact-us">
                  <a className="bg-main py-3 px-8 text-xl text-white opacity-90 hover:opacity-100 inline-flex items-center">
                    <div className="h-6 w-6 mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    Send Us a Message
                  </a>
                </Link>
              </div>
            </div>
            <Image
              src="/question.svg"
              height="400"
              width="400"
              alt="Ask Us a Question"
            />
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  )
}

export default Services
