import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    emit: false
}

export const refetchSlice = createSlice({
    name: 'refetch',
    initialState,
    reducers: {
        emitReducer: (state) => {
            console.log(state.emit)
            state.emit = !state.emit
        },
    },

})

export const { emitReducer } = refetchSlice.actions
export const refetchReducer = refetchSlice.reducer