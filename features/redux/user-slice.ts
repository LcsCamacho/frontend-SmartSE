import { createSlice } from "@reduxjs/toolkit"

interface userState {
    user: {
        cpf: String,
        password: String
    }
}
const initialState: userState = {
    user: {
        cpf: '',
        password: ''
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setPasswordReducer: (state, action) => {
            state.user.password = action.payload
        },
        setCpfReducer: (state, action) => {
            state.user.cpf = action.payload
        },
        logOffReducer: (state) => {
            state.user = initialState.user
        }
    },

})

export const { setPasswordReducer, setCpfReducer, logOffReducer } = userSlice.actions
export const userReducer = userSlice.reducer