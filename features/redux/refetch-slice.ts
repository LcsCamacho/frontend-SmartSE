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
        emitRefetchAbastecimentoReducer: (state) => {
            state.emitRefetchAbastecimento = !state.emitRefetchAbastecimento
        }
    },
})

export const { emitRefetchVeiculoReducer, emitRefetchAbastecimentoReducer } = refetchSlice.actions
export const refetchReducer = refetchSlice.reducer