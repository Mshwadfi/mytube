import {configureStore} from '@reduxjs/toolkit'
import sidebarSlice from './sidebarSlice';
import searchSuggestionSlice from './searchSuggestionsSlice';
import videosSlice from './videosSlice';
const appStore = configureStore({
    reducer: {
        sidebar: sidebarSlice,
        searchSuggestion: searchSuggestionSlice,
        videos: videosSlice,
    }
})

export default appStore;