import { createSlice } from "@reduxjs/toolkit"
import { Abastecimento } from "../../types"

interface initialStateType {
    abastecimento: Abastecimento
    tipo: string
    
}
const initialState: initialStateType = {
    abastecimento: {
        valor: 0,
        litros: 0,
        tipo: '',
        placa: '',
    },
    tipo: 'Valor'
    
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
        },
        setTipoValorOuLitroReducer: (state, action) => {
            state.tipo = action.payload
        }
    },

})

export const { setAbastecimentoReducer, clearFormAbastecimentoReducer, setTipoValorOuLitroReducer } = abastecimentoSlice.actions
export const abastecimentoReducer = abastecimentoSlice.reducer