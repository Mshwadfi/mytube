import React from 'react'
import CommentsContainer from './CommentsContainer';

const CommentContent = ({comment}) => {
    const {author , text , replies} = comment;
  return (
    <div className=''>
        <div className='flex p-2'>
        <img className='w-10 h-10  rounded-full' alt='avatar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBVtrw01AM9oJidFPKQbmigHhqll_3ScuACg&usqp=CAU' />
      <div className=' ml-5  rounded-md'>
        <h2 className='font-bold'>{author}</h2>
        <p>{text}</p>
      </div>
    </div>
    <div className='ml-7 -my-3  border-l-2 border-black'>
    <CommentsContainer commentList={replies} />
    </div>
    </div>
  )
}

export default CommentContent
