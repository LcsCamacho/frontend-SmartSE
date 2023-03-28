import { createSlice } from "@reduxjs/toolkit"

interface userState {
    cpf: String,
    senha: String
    login: boolean
}
const initialState: userState = {
    cpf: '',
    senha: '',
    login: false,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginSetPasswordReducer: (state, action) => {
            state.senha = action.payload
        },
        loginSetCpfReducer: (state, action) => {
            state.cpf = action.payload
        },
        logOffReducer: (state) => {
            state.login = false
            state.cpf = ''
            state.senha = ''
        },
        LogarReducer: (state) => {
            state.login = true
        }
    },

})

export const { loginSetPasswordReducer, loginSetCpfReducer, logOffReducer, LogarReducer } = loginSlice.actions
export const loginReducer = loginSlice.reducer