import React from 'react'
import Containers from '../components/Containers'
import LeaderboardCard from '../components/LeaderboardCard'

const Leaderboard = () => {
  return (
    <Containers>
    
    <div className='h-full w-full text-white'>
    <div className="mx-2">
        <h1 className="text-2xl text-white font-bold my-2">Leaderboard</h1>
      </div>
    <LeaderboardCard
     rank={30975864356}
     title={"amit kumar yadav"}
    coine={500000}
    />

    <div className='mx-2 border-b pb-2 pt-5 flex justify-between'>
        <p className='text-lg text-white'><span>26,959,674</span> <span>holders</span> </p>
        <p>Top-10</p>
    </div>
    <div>
    <LeaderboardCard
     rank={1}
     title={"amit kumar yadav"}
    coine={500000}
    />
     <LeaderboardCard
     rank={2}
     title={"amit kumar yadav"}
    coine={500000}
    />
     <LeaderboardCard
     rank={3}
     title={"amit kumar yadav"}
    coine={500000}
    />
     <LeaderboardCard
     rank={4}
     title={"amit kumar yadav"}
    coine={500000}
    />
     <LeaderboardCard
     rank={5}
     title={"amit kumar yadav"}
    coine={500000}
    />
     <LeaderboardCard
     rank={6}
     title={"amit kumar yadav"}
    coine={500000}
    />
     <LeaderboardCard
     rank={7}
     title={"amit kumar yadav"}
    coine={500000}
    />
     <LeaderboardCard
     rank={8}
     title={"amit kumar yadav"}
    coine={500000}
    />
     <LeaderboardCard
     rank={9}
     title={"amit kumar yadav"}
    coine={500000}
    />
     <LeaderboardCard
     rank={10}
     title={"amit kumar yadav"}
    coine={500000}
    />
     <LeaderboardCard
     rank={11}
     title={"amit kumar yadav"}
    coine={500000}
    />
    </div>



    </div>
    </Containers>
  )
}

export default Leaderboard