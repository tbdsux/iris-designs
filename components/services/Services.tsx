import Image from 'next/image'

import { services } from '../../data/services'

const MainServices = () => {
  return (
    <div className="my-8">
      <div className="grid grid-cols-2 gap-8">
        {services.map((service) => (
          <div
            key={services.indexOf(service)}
            className="p-6 border-2 rounded-lg border-main border-opacity-10 shadow-xl"
          >
            <div className="flex flex-row items-center">
              <Image
                src={`/services/${service.image}`}
                height="400"
                width="400"
              />
              <div className="ml-6">
                <h3 className="text-4xl font-extrabold">{service.name}</h3>
                <p className="text-xl mt-2">{service.description}</p>
              </div>
            </div>
            <div className="text-center">
              <a
                type="button"
                href="#"
                className="bg-main hover:bg-grad-1 text-white text-lg mt-2 py-1 px-8 rounded-full"
              >
                Contact Us
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainServices
