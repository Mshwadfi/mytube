import React from 'react'
import CustomButtons from './CustomButtons'
import VideoContainer from './VideoContainer'
const MainContainer = () => {
  return (
    <div className='m-2 overflow-y-auto'>
      <CustomButtons />
      <VideoContainer />
    </div>
  )
}

export default MainContainer
