import Image from 'next/image'

import Layout from '../components/Layout'
import NavMenu from '../components/NavMenu'
import Footer from '../components/Footer'

const ContactUs = () => {
  return (
    <Layout title="Contact Us | Iris Designs">
      <NavMenu />

      {/* header */}
      <div className="py-12 w-2/3 mx-auto text-center">
        <h3 className="text-4xl font-extrabold text-main">Contact Us</h3>
        <p className="text-2xl mt-4">
          Want to send a message to us? <br />
          Let us know what you think of our service and what things could be
          improved.
        </p>
      </div>

      <div className="py-12 w-11/12 xl:w-5/6 mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* main form */}
        <div className="w-11/12 mx-auto md:w-2/3 lg:w-1/2 bg-grad-1 py-12 rounded-md">
          <div className="w-5/6 mx-auto">
            <p className="text-xl text-white underline text-center">
              Please fill up the information below...
            </p>
            <form action="#">
              <div className="my-3 flex flex-col">
                <label htmlFor="fullname" className="text-lg mb-1 text-white">
                  Fullname
                </label>
                <input
                  type="text"
                  className="py-3 px-4 w-full border-2 rounded-md border-gray-300 focus:border-main outline-none text-lg xl:text-xl"
                  placeholder="Your Fullname"
                />
              </div>
              <div className="my-3 flex flex-col">
                <label
                  htmlFor="email-address"
                  className="text-lg mb-1 text-white"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  className="py-3 px-4 w-full border-2 rounded-md border-gray-300 focus:border-main outline-none text-lg xl:text-xl"
                  placeholder="Your Email Address"
                />
              </div>
              <div className="my-3 flex flex-col">
                <label htmlFor="message" className="text-lg mb-1 text-white">
                  Message
                </label>
                <textarea
                  name="message"
                  className="py-3 px-4 w-full border-2 h-32 rounded-md border-gray-300 focus:border-main outline-none text-lg xl:text-xl"
                  placeholder="What do you want to say to us?"
                ></textarea>
              </div>
              <div className="text-center mt-6">
                <button
                  type="submit"
                  className="bg-main opacity-80 hover:opacity-100 py-2 px-8 text-xl text-white"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-11/12 mx-auto md:w-2/3 lg:w-1/2">
          <div className="w-5/6 mx-auto">
            <Image src="/contact-us.svg" height="500" width="500" />
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  )
}

export default ContactUs
