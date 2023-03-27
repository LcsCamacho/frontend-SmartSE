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
        setUserReducer: (state, action) => {
            state.user = action.payload
        },
        logOffReducer: (state) => {
            state.user = initialState.user
        }
    },

})

export const { setUserReducer, logOffReducer } = userSlice.actions
export const userReducer = userSlice.reducer