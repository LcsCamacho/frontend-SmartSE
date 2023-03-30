import { createSlice } from "@reduxjs/toolkit"

interface userState {
    cpf: string
    senha: string
    login: boolean
    token?: string
}
const initialState: userState = {
    cpf: '',
    senha: '',
    login: false,
    token:''
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
        LogarReducer: (state, action) => {
            state.login = true
            state.token = action.payload
        }
    },

})

export const { loginSetPasswordReducer, loginSetCpfReducer, logOffReducer, LogarReducer } = loginSlice.actions
export const loginReducer = loginSlice.reducer