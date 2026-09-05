import {configureStore} from '@reduxjs/toolkit'
import SocialSlice from './slice/SocialSlice'

const store = configureStore({
    reducer: {
        Social: SocialSlice
    }
})

export default store