import { createSlice } from "@reduxjs/toolkit"
import { Abastecimento } from "../../types"

interface initialStateType {
    abastecimento: Abastecimento
}
const initialState: initialStateType = {
    abastecimento: {
        valor: 0,
        litros: 0,
        tipo: '',
        placa: '',
    }
}

export const abastecimentoSlice = createSlice({
    name: 'abastecimento',
    initialState,
    reducers: {
        setAbastecimentoReducer: (state, action) => {
            const { valor, litros, tipo, placa } = action.payload
            state.abastecimento = {
                valor, 
                litros, 
                tipo, 
                placa
            }
        },
        clearFormAbastecimentoReducer: (state) => {
            state.abastecimento = initialState.abastecimento
        }
    },

})

export const { setAbastecimentoReducer, clearFormAbastecimentoReducer } = abastecimentoSlice.actions
export const abastecimentoReducer = abastecimentoSlice.reducer