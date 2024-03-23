import React from 'react'
import useCalcDate from '../custom hooks/useCalcDate';
import useViewsCount from '../custom hooks/useViewsCount';

const VideoCard = ({videoInfo}) => {

  const {snippet , statistics} = videoInfo;
  const {channelTitle, thumbnails , title , publishedAt} = snippet;
  const {viewCount , likeCount} = statistics;
  let displayedTitle = title.length < 40? title : `${title.slice(0,40)}...`
  const daysPassed = useCalcDate(publishedAt);
  const views = useViewsCount(viewCount);
  
  return !videoInfo? 'Loading' : (
    <div className='w-72 m-1'>
      <div className=''>
        <img className='rounded-lg' src={thumbnails.medium.url} alt='thumbnail' />
      </div>
      <div className='flex gap-4 m-2'>
        <img className='w-12 h-12 rounded-full' alt='channel icon' src={thumbnails.default.url} />
        <div className=''>
          <p>{displayedTitle}</p>
          <h4 className='text-slate-500 mt-1'>{channelTitle}</h4>
          <div className='flex gap-1 text-slate-500'>
            <p>{views} .</p>
            <p>{daysPassed}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
