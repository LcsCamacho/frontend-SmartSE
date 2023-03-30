import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    refetch: false
}

export const refetchSlice = createSlice({
    name: 'refetch',
    initialState,
    reducers: {
        refetchReducer: (state) => {
            console.log(state.refetch)
            state.refetch = !state.refetch
        },
    },

})

export const { refetchReducer } = refetchSlice.actions
export const veiculoReducer = refetchSlice.reducer