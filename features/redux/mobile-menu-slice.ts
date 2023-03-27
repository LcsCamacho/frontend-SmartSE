import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isOpen: false
}

export const mobileMenuSlice = createSlice({
    name: 'mobileMenu',
    initialState,
    reducers: {
        toggleMobileMenuReducer: (state) => {
            state.isOpen = !state.isOpen
        },
        
    },

})

export const { toggleMobileMenuReducer } = mobileMenuSlice.actions
export const mobileMenuReducer = mobileMenuSlice.reducer