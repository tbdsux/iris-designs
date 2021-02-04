import Image from 'next/image'
import Link from 'next/link'

import { services } from '../../data/services'

const MainServices = () => {
  return (
    <div className="my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div
            key={services.indexOf(service)}
            className="p-6 border-2 rounded-lg border-main border-opacity-10 shadow-xl"
          >
            <div className="flex flex-col lg:flex-row items-center text-center lg:text-left">
              <Image
                src={`/services/${service.image}`}
                height="400"
                width="400"
                alt={`Iris Designs - ${service.name}`}
              />
              <div className="lg:ml-6">
                <h3 className="text-4xl font-extrabold">{service.name}</h3>
                <p className="text-xl mt-2">{service.description}</p>
              </div>
            </div>
            <div className="text-center">
              <Link href="/contact-us">
                <a
                  type="button"
                  className="bg-main hover:bg-grad-1 text-white text-lg mt-2 py-1 px-8 rounded-full"
                >
                  Contact Us
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainServices
