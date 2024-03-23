import React, { useState, useEffect } from 'react';
import LiveComment from './LiveComment';
import {useGenerateName, useGenerateSentence} from '../custom hooks/useGenerateName';

const LiveChat = () => {
    const [comment, setComment] = useState('');
    const [arr , setArr] = useState([]);
    const [liveComments, setLiveComments] = useState([
        
    ]);
    const name = useGenerateName();
    const text = useGenerateSentence();
    useEffect(() => {
        const intervalId = setInterval(() => {
            // liveComments.splice(10,1)
            if (comment.trim() !== '') {
                setLiveComments([...arr,{author: name, text: text},...liveComments]);
                setArr([]);
            }
        }, 2000);

        return () => clearInterval(intervalId);
    }, [arr]); 
    liveComments.splice(15,1)

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            setArr([...arr , { author: name, text: comment }]);
            e.target.value = '';
        }
    }

    return (
        <div className='mx-10 p-4 border-2 border-black rounded-lg h-[600px] flex flex-col overflow-y-auto'>
           <div className='h-[95%] overflow-y-auto flex flex-col-reverse'>
           {
                liveComments.map((comment, index) => (
                    <LiveComment key={index} commentData={comment} />
                ))
            }
           </div>
            <div className='w-full'>
                <input className='p-2 m-2 border-b-2 border-slate-300 w-[80%] outline-none'
                    type='text' placeholder='add comment'
                    onKeyDown={handleEnter}
                    onChange={(e) => setComment(e.target.value)} />
            </div>
        </div>
    );
}

export default LiveChat;
