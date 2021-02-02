import Image from 'next/image'

import Layout from '../components/Layout'
import NavMenu from '../components/NavMenu'
import Footer from '../components/Footer'

import Team from '../components/about/Team'

import { NextSeo } from 'next-seo'

const AboutUs = () => {
  return (
    <Layout title="Who We Are | About Us - Iris Designs">
      {/* seo */}
      <NextSeo
        title="Who We Are | About Us - Iris Designs"
        description="Iris Designs is a production team based in the Philippines that focuses on designing promotional material for businesses."
        openGraph={{
          url: 'https://irisdesigns.cf/about-us',
          title: 'Who We Are | About Us - Iris Designs',
          description:
            'Iris Designs is a production team based in the Philippines that focuses on designing promotional material for businesses.',
        }}
      />

      <NavMenu />

      {/* header */}
      <div className="py-12">
        <div className="w-5/6 mx-auto flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-2/3 text-center lg:pr-12">
            <h2 className="text-2xl lg:text-3xl font-extrabold mb-8 text-gray-700">
              About Us
            </h2>
            <h3 className="text-3xl md:text-4xl tracking-wide">
              <span className="font-extrabold uppercase text-main text-4xl lg:text-5xl">
                Iris Designs
              </span>{' '}
              <br />
              is a production team based in the Philippines that focuses on
              designing promotional material for businesses
            </h3>
          </div>
          <Image
            src="/about.svg"
            height="500"
            width="500"
            alt="Iris Designs - About Us"
          />
        </div>
      </div>

      <hr />

      <div className="py-14 bg-main">
        <div className="w-5/6 mx-auto">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-white">
              Our Amazing Members
            </h2>
            <p className="text-gray-100 text-3xl mt-3">
              We currently consist of the following members...
            </p>
          </div>

          <Team />
        </div>
      </div>

      <Footer />
    </Layout>
  )
}

export default AboutUs
