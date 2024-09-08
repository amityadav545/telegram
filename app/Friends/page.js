import React from 'react'
import Containers from '../components/Containers'
import Friendscard from '../components/Friendscard'

const Friends = () => {
  return (
    <Containers>
    
    <div className='h-full w-full text-white'>
        <div className='flex items-center flex-col w-full '>
        <div className="mx-2">
        <h1 className="text-2xl text-white font-bold my-2">Invite a Friends</h1>
      </div>
            <div className='w-full px-4'>
       <button type="button" className="text-gray-900 w-full items-center justify-center bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex gap-2 items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 me-2 mb-2">
        <svg className={`w-5 h-5 'text-gray-500'} dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 19">
            <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z"/>
            <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z"/>
          </svg>
      Invite a Friends
      </button>
      </div>
      <div className='w-full px-4'>
      
    <div className="relative mb-4">
        <input id="api-key" type="text" className="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value="f4h6sd3t-jsy63ind-hsgdt7rs-jdhf76st" disabled readOnly/>
        <button data-copy-to-clipboard-target="api-key" data-tooltip-target="tooltip-api-key" className="absolute end-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center">
            <span id="default-icon-api-key">
                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                </svg>
            </span>
            <span id="success-icon-api-key" className="hidden inline-flex items-center">
                <svg className="w-3.5 h-3.5 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
            </span>
        </button>
        <div id="tooltip-api-key" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            <span id="default-tooltip-message-api-key">Copy to clipboard</span>
            <span id="success-tooltip-message-api-key" className="hidden">Copied!</span>
            <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>
      </div>
        </div>

    
    <div className="mx-2">
        <h1 className="text-2xl text-white font-bold my-2">Invited Friends</h1>
      </div>
    <div>
        <Friendscard
        title={"amit yadav"}
        rank={6565765765}
        />
         <Friendscard
        title={"amit yadav"}
        rank={6565765765}
        />
         <Friendscard
        title={"amit yadav"}
        rank={6565765765}
        />
         <Friendscard
        title={"amit yadav"}
        rank={6565765765}
        />
         <Friendscard
        title={"amit yadav"}
        rank={6565765765}
        />
         <Friendscard
        title={"amit yadav"}
        rank={6565765765}
        />
         <Friendscard
        title={"amit yadav"}
        rank={6565765765}
        />
         <Friendscard
        title={"amit yadav"}
        rank={6565765765}
        />
         <Friendscard
        title={"amit yadav"}
        rank={6565765765}
        />
         <Friendscard
        title={"amit yadav"}
        rank={6565765765}
        />
         <Friendscard
        title={"amit yadav"}
        rank={6565765765}
        />
         <Friendscard
        title={"amit yadav"}
        rank={6565765765}
        />
         <Friendscard
        title={"amit yadav"}
        rank={6565765765}
        />
         <Friendscard
        title={"amit yadav"}
        rank={6565765765}
        />
         <Friendscard
        title={"amit yadav"}
        rank={6565765765}
        />
         <Friendscard
        title={"amit yadav"}
        rank={6565765765}
        />
         <Friendscard
        title={"amit yadav"}
        rank={6565765765}
        />
    </div>

   
    


    </div>
    </Containers>
  )
}

export default Friends