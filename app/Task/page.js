import React from 'react'
import Containers from '../components/Containers'
import Cup from '../assets/images/cup.png'
import Image from 'next/image'
import DailyTasksCard from '../components/DailyTasksCard'
import OtherTasksCards from '../components/OtherTasksCards'
import InvitationTasksCard from '../components/InvitationTasksCard'
import dollarCoin from '../assets/images/dollar-coin.png'
const Task = () => {
  return (
    <Containers>
   <div className='h-full w-full text-white'>
        <div className='flex flex-col items-center justify-center mt-5'>
        <Image
                src={Cup}
                width={100}
                height={100}
                alt="Dollar Coin"
               />  

<div className=' border rounded-full px-5 py-1 mt-2'>
  <div className='flex items-center gap-1'>
    <p className='text-xl font-bold'>Task</p>
    <Image
            src={dollarCoin}
            width={20}
            height={20}
            alt="Dollar Coin"
           />
    <p>50000000000</p>
    </div>
  
</div>
        </div>


        <div>
        <div className="mx-2">
        <h1 className="text-2xl text-white font-bold my-2">Daily Tasks</h1>
       </div>

       <div>
       <DailyTasksCard 
       title={"Watch this "}
       coine={200}
       />
       <DailyTasksCard 
       title={"Watch this "}
       coine={200}
       />
       <DailyTasksCard 
       title={"Watch this "}
       coine={200}
       />
       <DailyTasksCard 
       title={"Watch this "}
       coine={200}
       />
        </div>  
        </div>





        <div>
        <div className="mx-2">
        <h1 className="text-2xl text-white font-bold my-2">Other's Tasks</h1>
       </div>

       <div>
       <OtherTasksCards 
       title={"Watch this "}
       coine={200}
       />
       <OtherTasksCards 
       title={"Watch this "}
       coine={200}
       />
       <OtherTasksCards 
       title={"Watch this "}
       coine={200}
       />
       <OtherTasksCards 
       title={"Watch this "}
       coine={200}
       />
        </div>  
        </div>


        <div>
        <div className="mx-2">
        <h1 className="text-2xl text-white font-bold my-2">Invitation Tasks</h1>
       </div>

       <div>
        <InvitationTasksCard
       
        title={"Invite 1 friends"}
        coine={2000}
        FriendsNumber={1}
        />
        <InvitationTasksCard
       
       title={"Invite 5 friends"}
       coine={20000}
       FriendsNumber={5}
       />
       <InvitationTasksCard
       
       title={"Invite 10 friends"}
       coine={200000}
       FriendsNumber={1}
       />
       <InvitationTasksCard
       
       title={"Invite 100 friends"}
       coine={2000000}
       FriendsNumber={1}
       />
       </div>
        </div>
    </div>
   
   </Containers>
  )
}

export default Task