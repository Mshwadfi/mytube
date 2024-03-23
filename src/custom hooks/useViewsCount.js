

const useViewsCount = (views) =>{
    if(views < 1000){
        return `${views} views`;
    }else if(views > 1000 && views < 1000000){
        return `${Math.floor(views / 1000)}k views`;
    }else{
        return `${(views / 1000000).toFixed(1)}M views`
    }
}

export default useViewsCount;