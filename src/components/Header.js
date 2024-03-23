import React, { useEffect, useState } from 'react'
import { hamburgerMenuIcon, suggestions_API, userIcon, youtubeLogo } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../redux/sidebarSlice';
import { cacheResults } from '../redux/searchSuggestionsSlice';
import { addVideos, clearVideos } from '../redux/videosSlice';
const Header = () => {
  const dispatch = useDispatch();
  const [searchWord , setSearchWord] = useState(''); 
  const [searchResults , setSearchResults] = useState([]);
  const [showSuggestions , setShowSuggestions] = useState(false);
  const searchCach = useSelector(store => store.searchSuggestion);
  useEffect(()=>{
    const timer = setTimeout(() =>{
      if(searchCach[searchWord]){
        setSearchResults(searchCach[searchWord]);
      }else{
        generateSuggestions();
      }
     },200);
    return () =>{
      clearTimeout(timer);
    }
  },[searchWord])
  const handleClick = () =>{
    dispatch(toggleSidebar());
  }
  const generateSuggestions = async () =>{
    const data = await fetch(suggestions_API+searchWord);
    const jsonData = await data.json();
    setSearchResults(jsonData[1]);
    dispatch(cacheResults({
      [searchWord]: jsonData[1] // [property] => dynamic property name / property => static name
    }));
  }
  
  
  return (
    <div className='grid grid-flow-col p-4 shadow-sm'>
      <div className='flex h-8 col-span-1'>
        <img onClick={ handleClick} className='bg-transparent cursor-pointer' alt='hamburgericon' src={hamburgerMenuIcon} />
        <img className='mx-3' alt='youtubeLogo' src={youtubeLogo} />
      </div>
      <div className='col-span-10 text-center'>
        <input className='p-2 border rounded-tl-3xl
         rounded-bl-3xl w-2/5' type='search'
          placeholder='Search' value={searchWord}
  
          onFocus={()=> setShowSuggestions(true)}
          onBlur={()=> setShowSuggestions(false)}
          onChange={(e) => setSearchWord(e.target.value)} />
        <button className='bg-[#f8f8f8] p-2 px-4 border rounded-tr-3xl rounded-br-3xl'>🔍</button>
      </div>
      {showSuggestions && 
      <div className=''>
      <ul className='w-[27%] top-16 absolute rounded-lg left-[36%] bg-white'>
          {searchResults.map((s)=>(
            <li className=' hover:bg-gray-200'>{s}</li>
          ))}
        </ul>
      </div>}
      <div className='col-span-1'>
        <img className='h-10' alt='userIcon' src={userIcon} />
      </div>
    </div>
  )
}

export default Header
