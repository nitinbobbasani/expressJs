import {createSlice} from '@reduxjs/toolkit'

const SocialSlice = createSlice({
    name: 'Social',
    initialState: {
        books: ['Social Book1 ', 'Social Book 2']
    },
    reducers: {
        addBook: (state, action) => {
            state.books.push(action.payload)

        }
    }
})

export const {addBook} = SocialSlice.actions
export default SocialSlice.reducer