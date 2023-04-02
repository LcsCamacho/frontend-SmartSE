import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    alertVeiculoCadastroSucces: false,
}

export const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        toggleAlertVeiculoCadastroSucces: (state) => {
            state.alertVeiculoCadastroSucces = !state.alertVeiculoCadastroSucces
        },
        
    },

})

export const { 
    toggleAlertVeiculoCadastroSucces, 
    
} = alertSlice.actions
export const alertReducer = alertSlice.reducer