import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Body = () => {
  const isSidebarOpen = useSelector(store => store.sidebar.isSidebarOpen);
  return (
    <div className='flex h-full'>
    <div className=''>
      {isSidebarOpen && <Sidebar />}
    </div>
    <div className='w-full'>
      <Outlet />
    </div>
  </div>
  )
}

export default Body
