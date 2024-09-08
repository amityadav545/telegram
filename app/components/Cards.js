import Image from 'next/image'
import React from 'react'
import dollarCoin from '../assets/images/dollar-coin.png'
const Cards = ({title,coine,buttonClick,image}) => {
  return (
    <div className="bg-[#272a2f] rounded-lg px-4 py-2 mx-2 my-2 ">
        <div className='flex justify-between'>
        <div className='flex gap-2'>
             <Image
                src={image}
                width={60}
                height={60}
                alt="Icon"
               />
                <div>
                <p className="text-[17px]  text-white ">{title}</p>
                <div className="flex  items-center gap-1">
                <Image
                src={dollarCoin}
                width={20}
                height={20}
                alt="Dollar Coin"
               />
               <p className="text-[15px] font-medium text-center text-gray-400 ">{coine}</p>
                </div>

                </div>
                </div>
               
               
<button type="button" className="text-gray-900 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100  focus:ring-gray-100 font-medium my-3 text-sm px-5    ">Join</button>
              </div>
              </div>
  )
}

export default Cards