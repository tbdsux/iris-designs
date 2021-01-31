import Image from 'next/image'

import { members } from '../../data/team'

const Team = () => {
  return (
    <div className="py-10">
      <div className="w-5/6 mx-auto grid grid-cols-3 gap-8">
        {members.map((member) => (
          <div
            key={member.name}
            className="text-center p-6 border-opacity-20 rounded-lg bg-white"
          >
            <Image
              src={`/about/${member.image}`}
              height="200"
              width="200"
              className="rounded-full"
            />
            <div className="mt-3">
              <h4 className="text-3xl text-main font-bold">{member.name}</h4>
              <ul className="mt-2">
                {member.social.facebook !== '' ? (
                  <li className="bg-blue-500 hover:bg-blue-600 rounded-full text-white py-2 text-lg flex justify-center items-center">
                    <i className="lni lni-facebook-filled mr-2"></i>
                    <a href={member.social.facebook} target="_blank">
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
