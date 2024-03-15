import React from 'react'
import { hamburgerMenuIcon, userIcon, youtubeLogo } from '../utils/constants'

const Header = () => {
  return (
    <div className='grid grid-flow-col p-4 shadow-md'>
      <div className='flex h-8 col-span-1'>
        <img className='bg-transparent' alt='hamburgericon' src={hamburgerMenuIcon} />
        <img className='mx-3' alt='youtubeLogo' src={youtubeLogo} />
      </div>
      <div className='col-span-10 text-center'>
        <input className='p-2 border rounded-tl-3xl rounded-bl-3xl w-2/5' type='search' placeholder='Search' />
        <button className='bg-[#f8f8f8] p-2 border rounded-tr-3xl rounded-br-3xl'>Search </button>
      </div>
      <div className='col-span-1'>
        <img className='h-10' alt='userIcon' src={userIcon} />
      </div>
    </div>
  )
}

export default Header
