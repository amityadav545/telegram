"use client"
import React from 'react'
import Containers from '../components/Containers'
import { useRouter } from 'next/navigation'
const Abouts = () => {
    const router = useRouter()
    const handleNavigate = () => {
        router.push('/');  // Replace '/wallet' with the path to your wallet page
      };
  return (
    <Containers>
   <div className='h-full w-full text-white'>
    <div>
   <div className="mx-2">
        <h1 className="text-2xl text-white font-bold my-2">Abouts</h1>
      </div>

<ul className="max-w-md mx-2 space-y-1 text-gray-400 list-inside dark:text-gray-400">
    <li className="flex ">
    <svg className="w-3.5 h-3.5 me-2 mt-1.5 text-yellow-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
         Get started with a collection of list components built with Tailwind CSS for ordered and unordered lists with bullets, numbers, or icons and other styles and layouts to show a list of items inside an article or throughout your web page
    </li>
    <li className="flex ">
    <svg className="w-3.5 h-3.5 me-2 mt-1.5 text-yellow-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
         Get started with a collection of list components built with Tailwind CSS for ordered and unordered lists with bullets, numbers
    </li>
    <li className="flex ">
    <svg className="w-3.5 h-3.5 me-2 mt-1.5 text-yellow-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
         Get started with a collection of list components built with Tailwind CSS for ordered and unordered lists with bullets.
    </li>
    <li className="flex ">
    <svg className="w-3.5 h-3.5 me-2 mt-1.5 text-yellow-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
        At least one lowercase character
    </li>
    <li className="flex ">
    <svg className="w-3.5 h-3.5 me-2 mt-1.5 text-yellow-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
        At least one lowercase character
    </li>
    <li className="flex ">
    <svg className="w-3.5 h-3.5 me-2 mt-1.5 text-yellow-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
        At least one lowercase character
    </li>
    <li className="flex ">
        <svg className="w-3.5 h-3.5 me-2 mt-1.5 text-yellow-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
        At least one lowercase character
    </li>
   
</ul>
</div>



<div>
   <div className="mx-2">
        <h1 className="text-2xl text-white font-bold my-2">Terms & Conditions</h1>
      </div>

<ul className="max-w-md mx-2 space-y-1 text-gray-400 list-inside dark:text-gray-400">
    <li className="flex ">
    <svg className="w-3.5 h-3.5 me-2 mt-1.5 text-yellow-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
         Get started with a collection of list components built with Tailwind CSS for ordered and unordered lists with bullets, numbers, or icons and other styles and layouts to show a list of items inside an article or throughout your web page
    </li>
    <li className="flex ">
    <svg className="w-3.5 h-3.5 me-2 mt-1.5 text-yellow-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
         Get started with a collection of list components built with Tailwind CSS for ordered and unordered lists with bullets, numbers
    </li>
    <li className="flex ">
    <svg className="w-3.5 h-3.5 me-2 mt-1.5 text-yellow-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
         Get started with a collection of list components built with Tailwind CSS for ordered and unordered lists with bullets.
    </li>
    <li className="flex ">
    <svg className="w-3.5 h-3.5 me-2 mt-1.5 text-yellow-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
        At least one lowercase character
    </li>
    <li className="flex ">
    <svg className="w-3.5 h-3.5 me-2 mt-1.5 text-yellow-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
        At least one lowercase character
    </li>
    <li className="flex ">
    <svg className="w-3.5 h-3.5 me-2 mt-1.5 text-yellow-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
        At least one lowercase character
    </li>
    <li className="flex ">
        <svg className="w-3.5 h-3.5 me-2 mt-1.5 text-yellow-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
        At least one lowercase character
    </li>
   
</ul>
</div>

<button onClick={handleNavigate} type="button" className="text-gray-900 block m-auto bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100  focus:ring-gray-100 font-medium my-5 text-sm px-5 py-2    ">Back</button>

   </div>
   
   </Containers>
  )
}

export default Abouts