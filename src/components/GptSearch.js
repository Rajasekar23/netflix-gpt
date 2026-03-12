import React from 'react'
import { lang } from '../utils/const/LanguageConstants'
import { useSelector } from 'react-redux'

const GptSearch = () => {

  const language = useSelector(store => store?.language);



  return (
    <div className='pt-[10%] flex justify-center'>
        <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/37372b0c-16ef-4614-9c66-f0464ffe4136/web/IN-en-20260216-TRIFECTA-perspective_74aa38a5-f527-417e-a604-a039567a350b_large.jpg"
        alt="background"
        className="absolute inset-0 h-full w-full -z-50"
        />
        <form className='grid grid-cols-12 w-1/2 bg-black rounded-lg'>
            <input type='text' name="search" className='p-4 m-4 rounded-lg col-span-9' placeholder={lang[language].search_placeholder} />
            <button className='rounded-lg bg-red-500 col-span-3 m-4 py-2 px-4'>{lang[language].search}</button>
        </form>
    </div>
  )
}

export default GptSearch