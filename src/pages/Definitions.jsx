import React from 'react'
import { useNavigate, useParams,Link } from 'react-router-dom'
import { useEffect,useState } from 'react'
import Notfound from '../components/Notfound'
import {v4 as uuidv4} from 'uuid'
import DictionarySearch from './DictionarySearch'
const Definitions = () => {

    const [word, setWord] =useState("")
    const [notfound, setNotFound] =useState(false)
    const [error, setError] =useState(false)
    let {search} =useParams()
    const navigate =useNavigate()

useEffect(()=>{
            fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+ search)
            .then((response) => {
                if(response.status===404){
                    setNotFound(true)
                }
                else if(response.status ===401)
                        {navigate('/login')}
               else if(response.status ===500)
                        {
                         setError(true)
                        }
                if(!response.ok){

                  setError(true)
                }

              return   response.json() 
            })
            .then((data) => {
               setWord(data[0].meanings);
                        
            });
           

    }, [])
    
if(notfound===true)
{return (
<>
<Notfound/>

<Link to = '/Dictionary'> Search Again</Link>
</>
)
}

if(error===true)
{return (
<>
<p>Something went wrong</p>

<Link to = '/Dictionary'> Search Again</Link>
</>
)
}

  return (
    <>
     {word ? (
        <>
    <div className='flex-wrap justify-center bg-white  m-4 pl-4 rounded-md p-5 justify-center'>
    <h1 className='text-3xl font-extrabold pb-3 '>Search Definitions</h1>
        <div className=' bg-white pb-2'>
        <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
   {word.map((meaning) => {
    return  (
        <>
        <p key={uuidv4()}>{'Word Meaning ' + meaning.partOfSpeech +' :  ' + meaning.definitions[0].definition}</p>
        <p key={uuidv4()}>{meaning.synonymes}</p>
        </>
        )
    
   
   })}

   
  
   </blockquote>
    </div>
    </div>
    <DictionarySearch/>
</>
) : null}
    </>
  );
}

export default Definitions