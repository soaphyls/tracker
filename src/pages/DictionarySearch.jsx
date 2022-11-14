import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DictionarySearch = () => {

    const [word, setWord] =useState("")
    const navigate = useNavigate();
   
  return (
    <>
    
   

    <h1 className='nowrap space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>Please enter your word</h1>
    <div className =" m-4 ">
  
   
       
        <div class="relative w-full">
          <form onSubmit={()=>{ navigate('/dictionary/'+ word)}} >
            <input type="text" onChange={(e) =>setWord(e.target.value)}  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search for words" required=""  />
            <button className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-purple-600 hover:bg-purple-400 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
                <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span className="sr-only">Search</span>
            </button>
            </form>
        </div>
    </div>




    </>
  );
}

export default DictionarySearch