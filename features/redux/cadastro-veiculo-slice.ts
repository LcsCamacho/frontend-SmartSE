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
    },

})

export const { setVeiculoReducer } = veiculoSlice.actions
export const veiculoReducer = veiculoSlice.reducer