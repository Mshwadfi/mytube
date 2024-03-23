import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { youtube_api } from '../utils/constants'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { closeSidebar } from '../redux/sidebarSlice';
import { addVideos } from '../redux/videosSlice';

const VideoContainer = () => {
  const [videos , setVideos] = useState([]);
  const dispatch = useDispatch();
  const fetchData = async () =>{
    const data = await fetch(youtube_api);
    const jsonData = await data.json();
    setVideos(jsonData.items);
    dispatch(addVideos(jsonData.items));
  }

  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div className=' flex flex-wrap gap-1'>
      {videos.map(video => (
        <Link onClick={()=> dispatch(closeSidebar())} to={`/watch?v=${video.id}`}><VideoCard key={video.id} videoInfo={video} /></Link>
      ))}
    </div>
  )
}

export default VideoContainer
