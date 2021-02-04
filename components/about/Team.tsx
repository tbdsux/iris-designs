import Image from 'next/image'

import { members } from '../../data/team'

const Team = () => {
  return (
    <div className="py-10">
      <div className="w-5/6 xl:w-11/12 2xl:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {members.map((member) => (
          <div
            key={member.name}
            className="flex flex-col lg:flex-col items-center justify-around text-center p-6 border-opacity-20 rounded-lg bg-white"
          >
            <Image
              src={`/about/${member.image}`}
              height="300"
              width="300"
              className="rounded-full"
              alt={member.name}
            />
            <div className="mt-3">
              <h4 className="text-3xl text-main font-extrabold">
                {member.name}
              </h4>
              <ul className="mt-2">
                {member.social.facebook !== '' ? (
                  <li className="bg-blue-500 hover:bg-blue-600 rounded-full text-white py-2 text-lg flex justify-center items-center">
                    <a
                      href={member.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {member.social.facebook.replace(
                        'https://web.facebook.com/',
                        '@',
                      )}
                    </a>
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team
