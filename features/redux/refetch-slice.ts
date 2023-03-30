import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    emitInsertVeiculo: false,
    emitInsertAbastecimento: false
}

export const refetchSlice = createSlice({
    name: 'refetch',
    initialState,
    reducers: {
        emitInsertVeiculoReducer: (state) => {
            state.emitInsertVeiculo = !state.emitInsertVeiculo
        },
    },
})

export const { emitInsertVeiculoReducer } = refetchSlice.actions
export const refetchReducer = refetchSlice.reducer