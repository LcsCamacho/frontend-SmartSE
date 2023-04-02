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
    tipo: 'Litro'
    
}

export const abastecimentoSlice = createSlice({
    name: 'abastecimento',
    initialState,
    reducers: {
        setAbastecimentoReducer: (state, action) => {
            const {type, data}: {
                type:"valor"|"litros"|"tipo"|"placa", 
                data: any
            } = action.payload
            state.abastecimento[type] = data
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