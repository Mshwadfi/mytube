import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {

  const isSidebarOpen = useSelector(store => store.sidebar.isSidebarOpen);
  return(isSidebarOpen? (
    <div className=' h-screen mr-4'>
       <ul className='m-2 p-2'>
       <li className='p-2 m-4 hover:bg-[#f2f2f2] rounded-md flex flex-col items-center'>
            <div className="text-2xl mb-2">🏠</div>
            <div className="text-sm">Home</div>
      </li> 
        <li className='p-2 m-4 flex flex-col items-center hover:bg-[#f2f2f2] rounded-md'>
          <div className='text-2xl mb-2'>📷</div>
          <div className="text-sm">Shorts</div>
        </li>
        <li className='p-2 m-4 flex flex-col items-center hover:bg-[#f2f2f2] rounded-md'>
          <div className='text-2xl mb-2'>🔮</div>
          <div className="text-sm">Subscriptions</div>
        </li>     
        <li className='p-2 m-4 flex flex-col items-center hover:bg-[#f2f2f2] rounded-md'>
          <div className='text-2xl mb-2'>📽️</div>
          <div className="text-sm">You</div>
        </li> 
        </ul>
    </div>
  ) :  (
    <div className='w-72 h-screen overflow-y-auto'>
      <ul className='m-2 p-2 border-b-2'>
        <li className='p-2 m-2 h-10 hover:bg-[#f2f2f2] rounded-md'>🏠 Home</li>
        <li className='p-2 m-2 h-10 hover:bg-[#f2f2f2] rounded-md'>📷 Shorts</li>
        <li className='p-2 m-2 h-10 hover:bg-[#f2f2f2] rounded-md'>🔮 Subscription</li>
      </ul>
      <ul className='m-2 p-2 border-b-2'>
      <li className='p-2 m-2 h-10 font-extrabold hover:bg-[#f2f2f2] rounded-md'>You {'>'}</li>
        <li className='p-2 m-2 h-10 hover:bg-[#f2f2f2] rounded-md'>👤 Your Channel</li>
        <li className='p-2 m-2 h-10 hover:bg-[#f2f2f2] rounded-md'>🔗 History</li>
        <li className='p-2 m-2 h-10 hover:bg-[#f2f2f2] rounded-md'>▶️ Playlist</li>
        <li className='p-2 m-2 h-10 hover:bg-[#f2f2f2] rounded-md'>🎥 Your Videos</li>
        <li className='p-2 m-2 h-10 hover:bg-[#f2f2f2] rounded-md'>🕒 Watch Later</li>
        <li className='p-2 m-2 h-10 hover:bg-[#f2f2f2] rounded-md'>✂️ Your Clips</li>
      </ul>
      <ul className='m-2 p-2 border-b-2'>
        
        <li className='p-2 m-2 h-10 font-extrabold hover:bg-[#f2f2f2] rounded-md'>Subscriptions</li>
        <li className='p-2 m-2 h-10 hover:bg-[#f2f2f2] rounded-md'>⚽ Football</li>
        <li className='p-2 m-2 h-10 hover:bg-[#f2f2f2] rounded-md'>📖 Quraan</li>
        <li className='p-2 m-2 h-10 hover:bg-[#f2f2f2] rounded-md'>🕌 Daawa</li>
       
      </ul>
      <ul className='m-2 p-2 border-b-2'>
        
        <li className='p-2 m-2 h-10 font-extrabold hover:bg-[#f2f2f2] rounded-md'>Explore</li>
        <li className='p-2 m-2 h-10 hover:bg-[#f2f2f2] rounded-md'>📈 Trending</li>
        <li className='p-2 m-2 h-10 hover:bg-[#f2f2f2] rounded-md'>🎵 Music</li>
        <li className='p-2 m-2 h-10 hover:bg-[#f2f2f2] rounded-md'>♨️ Live</li>
        <li className='p-2 m-2 h-10 hover:bg-[#f2f2f2] rounded-md'>🎮 Gaming</li>
        <li className='p-2 m-2 h-10 hover:bg-[#f2f2f2] rounded-md'>🤾‍♂️ Sport</li>
      </ul>
      <ul className='m-2 p-2 border-b-2'>
        
        <li className='p-2 m-2 h-10 font-extrabold hover:bg-[#f2f2f2] rounded-md'>More From Youtube</li>
        <li className='p-2 m-2 h-10 hover:bg-[#f2f2f2] rounded-md'>🟥 Youtube Premium</li>
        <li className='p-2 m-2 h-10 hover:bg-[#f2f2f2] rounded-md'>🟥 Youtube Studio</li>
        <li className='p-2 m-2 h-10 hover:bg-[#f2f2f2] rounded-md'>🟥 Youtube Music</li>
        <li className='p-2 m-2 h-10 hover:bg-[#f2f2f2] rounded-md'>🟥 Youtube Kids</li>
      </ul>
      <ul className='m-2 p-2 border-b-2'>
        
        <li className='p-2 m-2 h-10 hover:bg-[#f2f2f2] rounded-md'>📐 Settings</li>
        <li className='p-2 m-2 h-10 hover:bg-[#f2f2f2] rounded-md'>🏳️ Report History</li>
        <li className='p-2 m-2 h-10 hover:bg-[#f2f2f2] rounded-md'>💁‍♂️ Help</li>
        <li className='p-2 m-2 h-10 hover:bg-[#f2f2f2] rounded-md'>📤 Send Feedback</li>
      </ul>
      <div className=''>
        <p className=' m-2 p-2 text-xl text-[#545663]'>
        About Press Copyright
         Contact us Creators<br/><br /> Advertise Developers
        Terms Privacy Policy & Safety How YouTube works Test new features
        </p><br/>
        <span className='m-2 p-2'>© 2024 Google LLC</span>
      </div>
      
    </div>
  ))
}

export default Sidebar
