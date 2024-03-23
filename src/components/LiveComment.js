import React from 'react'
import { userIcon } from '../utils/constants'

const LiveComment = ({commentData}) => {
    const {author , text} = commentData;
  return (
    <div className='flex items-center mb-2'>
      <img className='w-8 h-8 rounded-full' src={userIcon} alt='userIcon' />
      <span className='font-bold mx-2'>{author}</span>
      <span>{text}</span>
    </div>
  )
}

export default LiveComment
