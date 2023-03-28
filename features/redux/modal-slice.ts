import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    modalLogin: false,
    modalCadastro:false
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
        } 
        
    },

})

export const { toggleModalLoginReducer, toggleModalCadastroReducer } = modalSlice.actions
export const modalReducer = modalSlice.reducer