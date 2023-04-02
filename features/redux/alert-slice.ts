import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    alertVeiculoCadastroSuccess: false,
    alertAbastimentoCadastroSuccess: false,
    alertAbastimentoRemoveSuccess: false
}

export const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        toggleAlertVeiculoCadastroSuccess: (state) => {
            state.alertVeiculoCadastroSuccess = !state.alertVeiculoCadastroSuccess
        },
        toggleAlertAbastecimentoCadastroSuccess: (state) => {
            state.alertAbastimentoCadastroSuccess = !state.alertAbastimentoCadastroSuccess
        },
        toggleAlertAbastecimentoRemoveSuccess: (state) => { 
            state.alertAbastimentoRemoveSuccess = !state.alertAbastimentoRemoveSuccess
        }
    },

})

export const { 
    toggleAlertVeiculoCadastroSuccess, 
    toggleAlertAbastecimentoCadastroSuccess,
    toggleAlertAbastecimentoRemoveSuccess
} = alertSlice.actions
export const alertReducer = alertSlice.reducer