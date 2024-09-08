"use client"
import Containers from "./components/Containers";
import binanceLogo from '../app/assets/images/binance-logo.png'
import dollarCoin from '../app/assets/images/dollar-coin.png'
import Info from "./assets/icons/Info";
import Settings from "./assets/icons/Settings";
import dailyReward from '../app/assets/images/daily-reward.png'
import dailyCipher from '../app/assets/images/daily-cipher.png'
import dailyCombo from './assets/images/daily-combo.png'
import mainCoin from './assets/images/mainCoin.png'
import { useEffect, useState } from "react";
import Image from 'next/image'
import Hamster from "./assets/icons/Hamster";
import About from './assets/icons/About'
import Cards from "./components/Cards";
import TelegramIcon from '../app/assets/images/telegram.png'
import Youtube from '../app/assets/images/youtube.png'
import Instagram from '../app/assets/images/instagram.png'
import twitter from '../app/assets/images/twitter.png'
import { useRouter } from 'next/navigation'
export default function Home() {
  const router = useRouter()
  const [levelIndex, setLevelIndex] = useState(6);
  const [dailyRewardTimeLeft, setDailyRewardTimeLeft] = useState("");
  const [dailyCipherTimeLeft, setDailyCipherTimeLeft] = useState("");
  const [dailyComboTimeLeft, setDailyComboTimeLeft] = useState("");
  const [clicks, setClicks] = useState([]);
  const [points, setPoints] = useState(22749365);
  const profitPerHour = 126420;
  const pointsToAdd = 11;
  const formatProfitPerHour = (profit) => {
    if (profit >= 1000000000) return `+${(profit / 1000000000).toFixed(2)}B`;
    if (profit >= 1000000) return `+${(profit / 1000000).toFixed(2)}M`;
    if (profit >= 1000) return `+${(profit / 1000).toFixed(2)}K`;
    return `+${profit}`;
  }
  

 const levelNames = [
    "Bronze",    // From 0 to 4999 coins
    "Silver",    // From 5000 coins to 24,999 coins
    "Gold",      // From 25,000 coins to 99,999 coins
    "Platinum",  // From 100,000 coins to 999,999 coins
    "Diamond",   // From 1,000,000 coins to 2,000,000 coins
    "Epic",      // From 2,000,000 coins to 10,000,000 coins
    "Legendary", // From 10,000,000 coins to 50,000,000 coins
    "Master",    // From 50,000,000 coins to 100,000,000 coins
    "GrandMaster", // From 100,000,000 coins to 1,000,000,000 coins
    "Lord"       // From 1,000,000,000 coins to ∞
  ];

  const levelMinPoints = [
    0,        // Bronze
    5000,     // Silver
    25000,    // Gold
    100000,   // Platinum
    1000000,  // Diamond
    2000000,  // Epic
    10000000, // Legendary
    50000000, // Master
    100000000,// GrandMaster
    1000000000// Lord
  ];

  const calculateTimeLeft = (targetHour) => {
    const now = new Date();
    const target = new Date(now);
    target.setUTCHours(targetHour, 0, 0, 0);

    if (now.getUTCHours() >= targetHour) {
      target.setUTCDate(target.getUTCDate() + 1);
    }

    const diff = target.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    const paddedHours = hours.toString().padStart(2, '0');
    const paddedMinutes = minutes.toString().padStart(2, '0');

    return `${paddedHours}:${paddedMinutes}`;
  };

  const handleCardClick = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg)`;
    setTimeout(() => {
      card.style.transform = '';
    }, 100);

    setPoints(points + pointsToAdd);
    setClicks([...clicks, { id: Date.now(), x: e.pageX, y: e.pageY }]);
  };

  const handleAnimationEnd = (id) => {
    setClicks((prevClicks) => prevClicks.filter(click => click.id !== id));
  };

  const calculateProgress = () => {
    if (levelIndex >= levelNames.length - 1) {
      return 100;
    }
    const currentLevelMin = levelMinPoints[levelIndex];
    const nextLevelMin = levelMinPoints[levelIndex + 1];
    const progress = ((points - currentLevelMin) / (nextLevelMin - currentLevelMin)) * 100;
    return Math.min(progress, 100);
  };

  useEffect(() => {
    const currentLevelMin = levelMinPoints[levelIndex];
    const nextLevelMin = levelMinPoints[levelIndex + 1];
    if (points >= nextLevelMin && levelIndex < levelNames.length - 1) {
      setLevelIndex(levelIndex + 1);
    } else if (points < currentLevelMin && levelIndex > 0) {
      setLevelIndex(levelIndex - 1);
    }
  }, [points, levelIndex, levelMinPoints, levelNames.length]);
  useEffect(() => {
    const pointsPerSecond = Math.floor(profitPerHour / 3600);
    const interval = setInterval(() => {
      setPoints(prevPoints => prevPoints + pointsPerSecond);
    }, 1000);
    return () => clearInterval(interval);
  }, [profitPerHour]);

  useEffect(() => {
    const updateCountdowns = () => {
      setDailyRewardTimeLeft(calculateTimeLeft(0));
      setDailyCipherTimeLeft(calculateTimeLeft(19));
      setDailyComboTimeLeft(calculateTimeLeft(12));
    };

    updateCountdowns();
    const interval = setInterval(updateCountdowns, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const handleNavigateToWallet = () => {
    router.push('/Wallet');  // Replace '/wallet' with the path to your wallet page
  };
  const toggleModal = () => {
    router.push('/Abouts');
  };

 return (
  <>
   <Containers>
   <div className="w-full h-full">
   

      <div className="w-full  text-white  font-bold flex flex-col max-w-xl ">
      
      <div className="flex items-center justify-between px-5 mt-1">
            
            <div className="flex items-center space-x-2" onClick={handleNavigateToWallet}>
            <div className="p-1 rounded-lg bg-[#1d2025]">
              <Hamster size={24} className="text-[#d4d4d4]" />
            </div>
            <div>
              <p className="text-sm">Amit545</p>
            </div>
          </div>
          <div onClick={toggleModal}>
        <About />
      </div>
          </div>
        <div className=" relative">
          <div>
            <div className="px-4 mt-6 flex justify-between gap-2">
            <div className="bg-[#272a2f] rounded-lg px-4 py-2 w-full relative">
                <div className="dot"></div>
                
                
                <p className="text-[17px] text-center text-white my-1">Rewards</p>
                <div className="flex justify-center items-center gap-1">
                <Image
                src={dollarCoin}
                width={20}
                height={20}
                alt="Dollar Coin"
               />
               <p className="text-[15px] font-medium text-center text-gray-400 ">500</p>
                </div>
                
              </div>
              <div className="bg-[#272a2f] rounded-lg px-4 py-2 w-full relative">
                <div className="dot"></div>
                
                
                <p className="text-[17px] text-center text-white my-1">Task</p>
                <div className="flex justify-center items-center gap-1">
                <Image
                src={dollarCoin}
                width={20}
                height={20}
                alt="Dollar Coin"
               />
               <p className="text-[15px] font-medium text-center text-gray-400 ">500</p>
                </div>
                
              </div>
              <div className="bg-[#272a2f] rounded-lg px-4 py-2 w-full relative">
                <div className="dot"></div>
                
                
                <p className="text-[17px] text-center text-white my-1">Invites</p>
                <div className="flex justify-center items-center gap-1">
                <Image
                src={dollarCoin}
                width={20}
                height={20}
                alt="Dollar Coin"
               />
               <p className="text-[15px] font-medium text-center text-gray-400 ">500</p>
                </div>
                
              </div>
            </div>

            <div className="px-4 mt-4 flex justify-center">
              <div className="px-4 py-2 flex items-center space-x-2">
              <Image
                src={dollarCoin}
                width={40}
                height={40}
                alt="Dollar Coin"
               />
                <p className="text-4xl text-white">{points.toLocaleString()}</p>
              </div>
            </div>

            <div className="px-4 mt-4 flex justify-center">
              <div
                className="w-80 h-80 p-4 rounded-full circle-outer"
                onClick={handleCardClick}
              >
                <div className="w-full h-full rounded-full circle-inner">
                <Image
                src={mainCoin}
                width={500}
                height={500}
                alt="Main Character"
               />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {clicks.map((click) => (
        <div
          key={click.id}
          className="absolute text-5xl font-bold opacity-0 text-white pointer-events-none"
          style={{
            top: `${click.y - 42}px`,
            left: `${click.x - 28}px`,
            animation: `float 1s ease-out`
          }}
          onAnimationEnd={() => handleAnimationEnd(click.id)}
        >
          {pointsToAdd}
        </div>
      ))}

      <div className="mx-2">
        <h1 className="text-2xl text-white font-bold my-2">Get Rewards</h1>
      </div>
     <Cards title={"Youtube"}
      coine={500}
      image={Youtube}
     />
     <Cards title={"Telegram"}
      coine={200}
      image={TelegramIcon}
     />
     <Cards title={"Instagram"}
      coine={100}
      image={Instagram}
     />
     <Cards title={"Twitter"}
      coine={200}
      image={twitter}
     />

    </div>

    
   </Containers>
   
   </>
  );
}
