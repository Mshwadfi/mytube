


const useCalcDate = (publishedString)=>{
    const publishedDate = new Date(publishedString);
    const currentDate = new Date();
    const durationInMilSecond = currentDate - publishedDate;
    const durationInDays = (1000 * 60 * 60 * 24);
    const daysPassed = Math.floor(durationInMilSecond / durationInDays);
    
    if(daysPassed < 1){
        const hoursPassed = Math.floor(durationInMilSecond / (durationInDays/24));
        return `${hoursPassed} hours ago`;
    }else if(daysPassed > 7){
        const weeksPassed = Math.floor(durationInMilSecond / (durationInDays / 7));
        return `${weeksPassed} weeks ago`;
    }else if(daysPassed > 30){
        const monthsPassed = Math.floor(durationInMilSecond / (durationInDays / 30));
        return `${monthsPassed} months ago`;
    }else{
        return `${daysPassed} days ago`;
    }  
}

export default useCalcDate;