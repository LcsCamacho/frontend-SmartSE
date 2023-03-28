import { createSlice } from "@reduxjs/toolkit"

interface userState {
    cpf: String,
    senha: String
    login: boolean
}
const initialState: userState= {
    cpf: '',
    senha: '',
    login: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setPasswordReducer: (state, action) => {
            state.senha = action.payload
        },
        setCpfReducer: (state, action) => {
            state.cpf = action.payload
        },
        logOffReducer: (state) => {
            state.login = false
            state.cpf = ''
            state.senha = ''
        },
        LoginUserReducer: (state, action) => {
            state.cpf = action.payload.cpf
            state.senha = action.payload.senha
            state.login = true
        }
    },

})

export const { setPasswordReducer, setCpfReducer, logOffReducer, LoginUserReducer } = userSlice.actions
export const userReducer = userSlice.reducer