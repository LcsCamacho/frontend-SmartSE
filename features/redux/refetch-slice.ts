import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    emitRefetchVeiculo: false,
    emitRefetchAbastecimento: false
}

export const refetchSlice = createSlice({
    name: 'refetch',
    initialState,
    reducers: {
        emitRefetchVeiculoReducer: (state) => {
            state.emitRefetchVeiculo = !state.emitRefetchVeiculo
        },
    },
})

export const { emitRefetchVeiculoReducer } = refetchSlice.actions
export const refetchReducer = refetchSlice.reducer