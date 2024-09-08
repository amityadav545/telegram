import Image from 'next/image'
import React from 'react'

const Friendscard = ({title,rank,image}) => {
  return (
    <div className="bg-[#272a2f] rounded-lg px-4 py-2 mx-2 my-2 ">
        <div className='flex justify-between'>
        <div className='flex gap-2'>
               <Image
                src={"data:image/png;base64,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"}
                width={60}
                height={60}
                alt="Icon"
               />
                <div>
                <p className="text-[17px] font-medium  text-white ">{title}</p>
                <div className="flex   items-center gap-1">
                  <p className="text-[15px] font-medium text-center text-gray-400 ">#{rank}</p>
                </div>

                </div>
                </div>
               
               
                     
              </div>
              </div>
  )
}

export default Friendscard