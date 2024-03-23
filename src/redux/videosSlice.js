import { createSlice } from "@reduxjs/toolkit";


const videosSlice = createSlice({
    name: 'videos',
    initialState: [],
    reducers: {
        addVideos: (state , action) =>{
            state.push(...action.payload);
        },
        clearVideos: (state)=> []
    }
})

export const {addVideos,clearVideos} = videosSlice.actions;
export default videosSlice.reducer;