import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    modalLogin: false,
    modalCadastro: false,
    modalCadastroVeiculo: false,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggleModalLoginReducer: (state) => {
            state.modalLogin = !state.modalLogin
        },
        toggleModalCadastroReducer: (state) => {
            state.modalCadastro = !state.modalCadastro
        },
        toggleModalCadastroVeiculoReducer: (state) => {
            state.modalCadastroVeiculo = !state.modalCadastroVeiculo
        }

    },

})

export const { toggleModalLoginReducer, toggleModalCadastroReducer, toggleModalCadastroVeiculoReducer } = modalSlice.actions
export const modalReducer = modalSlice.reducer