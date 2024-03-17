import React from 'react'
import { hamburgerMenuIcon, userIcon, youtubeLogo } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../redux/sidebarSlice';
const Header = () => {
  // const isSidebarOpen = useSelector(store => store.sidebar.isSidebarOpen);
  const dispatch = useDispatch();
  const handleClick = () =>{
    dispatch(toggleSidebar());
  }
  return (
    <div className='grid grid-flow-col p-4 shadow-md'>
      <div className='flex h-8 col-span-1'>
        <img onClick={ handleClick} className='bg-transparent cursor-pointer' alt='hamburgericon' src={hamburgerMenuIcon} />
        <img className='mx-3' alt='youtubeLogo' src={youtubeLogo} />
      </div>
      <div className='col-span-10 text-center'>
        <input className='p-2 border rounded-tl-3xl rounded-bl-3xl w-2/5' type='search' placeholder='Search' />
        <button className='bg-[#f8f8f8] p-2 px-4 border rounded-tr-3xl rounded-br-3xl'>🔍</button>
      </div>
      <div className='col-span-1'>
        <img className='h-10' alt='userIcon' src={userIcon} />
      </div>
    </div>
  )
}

export default Header
