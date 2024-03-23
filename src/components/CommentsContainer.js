import React from 'react'
import CommentContent from './CommentContent'

const CommentsContainer = ({commentList}) => {
    // const {comments} = commentList;
  return (
    <div className='p-1 m-2'>
      <div className=''>
        {commentList.map((comment , index) =>(
            <div key={index} className='pl-5  border-l-black'>
              <CommentContent comment={comment} />
               </div>
        ))}
      </div>
    </div>
  )
}

export default CommentsContainer

