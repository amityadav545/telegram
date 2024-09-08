"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const Footers = () => {
    const pathname = usePathname()
    const isActive = (path) => pathname === path;
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <Link href="/" className={`border-t inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600 ${isActive('/') ? 'bg-gray-200' : ''}`}>
          <svg className={`w-5 h-5 mb-2 ${isActive('/') ? 'text-blue-600' : 'text-gray-500'} dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
          </svg>
          <span className={`text-sm ${isActive('/') ? 'text-blue-600' : 'text-gray-500'} dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500`}>Home</span>
        </Link>

        <Link href="/Leaderboard" className={`border-t inline-flex flex-col items-center justify-center px-5 border-e border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600 ${isActive('/wallet') ? 'bg-gray-200' : ''}`}>
       
<svg className={`w-5 h-5 mb-2 ${isActive('/Leaderboard') ? 'text-blue-600' : 'text-gray-500'} dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500`} aria-hidden="true"  fill="currentColor" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 16C6.24021 16 5.21983 10.2595 5.03907 5.70647C4.98879 4.43998 4.96365 3.80673 5.43937 3.22083C5.91508 2.63494 6.48445 2.53887 7.62318 2.34674C8.74724 2.15709 10.2166 2 12.0002 2C13.7837 2 15.2531 2.15709 16.3771 2.34674C17.5159 2.53887 18.0852 2.63494 18.5609 3.22083C19.0367 3.80673 19.0115 4.43998 18.9612 5.70647C18.7805 10.2595 17.7601 16 12.0002 16Z" stroke="#1C274C" strokeWidth="1.5"/>
<path d="M12 16V19" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M15.5 22H8.5L8.83922 20.3039C8.93271 19.8365 9.34312 19.5 9.8198 19.5H14.1802C14.6569 19.5 15.0673 19.8365 15.1608 20.3039L15.5 22Z" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 5L19.9486 5.31621C20.9387 5.64623 21.4337 5.81124 21.7168 6.20408C22 6.59692 22 7.11873 21.9999 8.16234L21.9999 8.23487C21.9999 9.09561 21.9999 9.52598 21.7927 9.87809C21.5855 10.2302 21.2093 10.4392 20.4569 10.8572L17.5 12.5" stroke="#1C274C" strokeWidth="1.5"/>
<path d="M4.99994 5L4.05132 5.31621C3.06126 5.64623 2.56623 5.81124 2.2831 6.20408C1.99996 6.59692 1.99997 7.11873 2 8.16234L2 8.23487C2.00003 9.09561 2.00004 9.52598 2.20723 9.87809C2.41441 10.2302 2.79063 10.4392 3.54305 10.8572L6.49994 12.5" stroke="#1C274C" strokeWidth="1.5"/>
<path d="M11.1459 6.02251C11.5259 5.34084 11.7159 5 12 5C12.2841 5 12.4741 5.34084 12.8541 6.02251L12.9524 6.19887C13.0603 6.39258 13.1143 6.48944 13.1985 6.55334C13.2827 6.61725 13.3875 6.64097 13.5972 6.68841L13.7881 6.73161C14.526 6.89857 14.895 6.98205 14.9828 7.26432C15.0706 7.54659 14.819 7.84072 14.316 8.42898L14.1858 8.58117C14.0429 8.74833 13.9714 8.83191 13.9392 8.93531C13.9071 9.03872 13.9179 9.15023 13.9395 9.37327L13.9592 9.57632C14.0352 10.3612 14.0733 10.7536 13.8435 10.9281C13.6136 11.1025 13.2682 10.9435 12.5773 10.6254L12.3986 10.5431C12.2022 10.4527 12.1041 10.4075 12 10.4075C11.8959 10.4075 11.7978 10.4527 11.6014 10.5431L11.4227 10.6254C10.7318 10.9435 10.3864 11.1025 10.1565 10.9281C9.92674 10.7536 9.96476 10.3612 10.0408 9.57632L10.0605 9.37327C10.0821 9.15023 10.0929 9.03872 10.0608 8.93531C10.0286 8.83191 9.95713 8.74833 9.81418 8.58117L9.68403 8.42898C9.18097 7.84072 8.92945 7.54659 9.01723 7.26432C9.10501 6.98205 9.47396 6.89857 10.2119 6.73161L10.4028 6.68841C10.6125 6.64097 10.7173 6.61725 10.8015 6.55334C10.8857 6.48944 10.9397 6.39258 11.0476 6.19887L11.1459 6.02251Z" stroke="#1C274C" strokeWidth="1.5"/>
<path d="M18 22H6" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
</svg>
          <span className={`text-sm ${isActive('/Leaderboard') ? 'text-blue-600' : 'text-gray-500'} dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500`}>Leaderboard</span>
        </Link>

        <Link href="/Friends" className={`border-t inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group ${isActive('/friends') ? 'bg-gray-200' : ''}`}>
          <svg className={`w-5 h-5 mb-2 ${isActive('/Friends') ? 'text-blue-600' : 'text-gray-500'} dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 19">
            <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z"/>
            <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z"/>
          </svg>
          <span className={`text-sm ${isActive('/Friends') ? 'text-blue-600' : 'text-gray-500'} dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500`}>Friends</span>
        </Link>

        <Link href="/Task" className={`border-t inline-flex flex-col items-center justify-center px-5 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 group border-x dark:border-gray-600 ${isActive('/task') ? 'bg-gray-200' : ''}`}>
          <svg className={`w-5 h-5 mb-2 ${isActive('/Task') ? 'text-blue-600' : 'text-gray-500'} dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
          </svg>
          <span className={`text-sm ${isActive('/Task') ? 'text-blue-600' : 'text-gray-500'} dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500`}>Task</span>
        </Link>
      </div>
    </div>
  );
}

export default Footers;
