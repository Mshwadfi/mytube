import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeSidebar } from '../redux/sidebarSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import { commentList } from '../utils/commentList'
import LiveChat from './LiveChat';

const WachPage = () => {

    const [searchQuery] = useSearchParams()
    const videoID = searchQuery.get('v');
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(closeSidebar());
    },[])
  return (
    <div className='flex flex-col w-full'>
     <div className='p-6 flex w-full'>
        <div className=''>
        <iframe width="1200" height="600" 
      src={`https://www.youtube.com/embed/${videoID}`}
      title="YouTube video player" frameBorder="0"
       allow="accelerometer; autoplay;
       clipboard-write; encrypted-media; gyroscope;
        picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className='w-full'>
          <LiveChat />
        </div>
    </div>
    <div className=''>
        <h1 className='font-bold mx-6'>Comments:</h1>
        <CommentsContainer commentList={commentList}/>
    </div>
    </div>
  )
}

export default WachPage
