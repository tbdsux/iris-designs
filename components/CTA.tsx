import { MainButton } from './Button'

interface CTAProps {
  text: String
}

const CTA = ({ text }: CTAProps) => {
  return (
    <div className=" py-8 text-white bg-grad-2">
      <div className="w-5/6 md:w-11/12 lg:w-5/6 mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-2xl pr-4 md:w-3/4">{text}</p>
        <MainButton />
      </div>
    </div>
  )
}

export default CTA
