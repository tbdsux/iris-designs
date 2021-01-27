interface CTAProps {
  text: String
}

const CTA = ({ text }: CTAProps) => {
  return (
    <div className=" py-8 text-white bg-grad-2">
      <div className="w-5/6 mx-auto flex items-center justify-between">
        <p className="text-2xl pr-4">{text}</p>
        <a
          href="#"
          className="bg-main text-white py-2 px-8 hover:bg-grad-1 flex items-center text-xl"
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
      </div>
    </div>
  )
}

export default CTA
