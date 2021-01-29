import { ReactNode } from 'react'
import Image from 'next/image'

interface SubPageProps {
  page_title: string
  page_description: string
  page_button_string: string
  page_button_icon: ReactNode
  page_image: string
}

const SubPage = (props: SubPageProps) => {
  return (
    <div className="w-5/6 mx-auto flex justify-between py-12">
      <div className="w-3/5 pr-8">
        <h2 className="text-6xl font-extrabold text-main">
          {props.page_title}
        </h2>
        <p className="text-4xl mt-4 text-gray-800">{props.page_description}</p>
        <div className="mt-8">
          <a
            href="#"
            type="button"
            title="Products or outputs that we do"
            className="bg-grad-1 hover:bg-grad-2 text-white text-2xl py-2 px-6 inline-flex items-center"
          >
            <div className="w-10 h-10 mr-2">{props.page_button_icon}</div>
            {props.page_button_string}
          </a>
        </div>
      </div>
      <Image src={`${props.page_image}`} height="450" width="450" />
    </div>
  )
}

export default SubPage
