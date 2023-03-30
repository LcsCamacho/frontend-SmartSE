import { createSlice } from "@reduxjs/toolkit"
import { Veiculo } from "../../types"

interface initialStateType {
    veiculo: Veiculo
}
const initialState: initialStateType = {
    veiculo: {
        ano: '',
        marca: '',
        modelo: '',
        placa: '',
        cor: '',
        renavam: '',
        potencia: '',
    }
}

export const veiculoSlice = createSlice({
    name: 'veiculo',
    initialState,
    reducers: {
        setVeiculoReducer: (state, action) => {
            const { ano, marca, modelo, placa, cor, renavam, potencia } = action.payload
            state.veiculo = {
                ano,
                marca,
                modelo,
                placa,
                cor,
                renavam,
                potencia,
            }
        },
        clearFormReducer: (state) => {
            state.veiculo = initialState.veiculo
        }
    },

})

export const { setVeiculoReducer, clearFormReducer } = veiculoSlice.actions
export const veiculoReducer = veiculoSlice.reducer