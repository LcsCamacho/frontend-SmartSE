import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isOpen: false
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggleModalReducer: (state) => {
            state.isOpen = !state.isOpen
        },
        
    },

})

export const { toggleModalReducer } = modalSlice.actions
export const modalReducer = modalSlice.reducer