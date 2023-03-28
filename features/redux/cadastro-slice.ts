import { createSlice } from "@reduxjs/toolkit"

interface userState {
    cpf: String,
    senha: String
}
const initialState: userState = {
    cpf: '',
    senha: '',
}

export const cadastroSlice = createSlice({
    name: 'cadastro',
    initialState,
    reducers: {
        cadastroSetPasswordReducer: (state, action) => {
            state.senha = action.payload
        },
        cadastroSetCpfReducer: (state, action) => {
            state.cpf = action.payload
        },
    },

})

export const { cadastroSetPasswordReducer, cadastroSetCpfReducer } = cadastroSlice.actions
export const cadastroReducer = cadastroSlice.reducer