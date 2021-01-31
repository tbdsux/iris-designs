import Image from 'next/image'

const Showcase = () => {
  return (
    <div className="py-20 w-11/12 mx-auto">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl lg:text-7.5xl font-extrabold text-main">
            "Stylish, Modern, Minimal"
          </h1>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 text-gray-800 px-4 md:px-0">
            The{' '}
            <span className="font-extrabold underline">production team</span>{' '}
            for your
            <br className="hidden md:block" /> perfect business needs
          </h2>
          <Image
            src="/logo-banner.png"
            height="200"
            width="400"
            alt="Iris Designs Banner"
          />
        </div>
      </div>
    </div>
  )
}

export default Showcase
