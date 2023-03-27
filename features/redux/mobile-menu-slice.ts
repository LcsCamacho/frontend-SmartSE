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
        openMobileMenuReducer: (state) => {
            state.isOpen = true
        }
    },

})

export const { toggleMobileMenuReducer,openMobileMenuReducer } = mobileMenuSlice.actions
export const mobileMenuReducer = mobileMenuSlice.reducer