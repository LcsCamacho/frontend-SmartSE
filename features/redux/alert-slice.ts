import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    alertVeiculoCadastroSuccess: false,
    alertAbastecimentoCadastroSuccess: false,
    alertAbastecimentoRemoveSuccess: false,
    alertVeiculoRemoveSuccess: false
}

export const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        toggleAlertVeiculoCadastroSuccess: (state) => {
            state.alertVeiculoCadastroSuccess = !state.alertVeiculoCadastroSuccess
        },
        toggleAlertAbastecimentoCadastroSuccess: (state) => {
            state.alertAbastecimentoCadastroSuccess = !state.alertAbastecimentoCadastroSuccess
        },
        toggleAlertAbastecimentoRemoveSuccess: (state) => { 
            state.alertAbastecimentoRemoveSuccess = !state.alertAbastecimentoRemoveSuccess
        },
        toggleAlertVeiculoRemoveSuccess: (state) => {
            state.alertVeiculoRemoveSuccess = !state.alertVeiculoRemoveSuccess
        }
    },

})

export const { 
    toggleAlertVeiculoCadastroSuccess, 
    toggleAlertAbastecimentoCadastroSuccess,
    toggleAlertAbastecimentoRemoveSuccess,
    toggleAlertVeiculoRemoveSuccess
} = alertSlice.actions
export const alertReducer = alertSlice.reducer