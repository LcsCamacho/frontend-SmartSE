import { createSlice } from "@reduxjs/toolkit"
import { Veiculo } from "../../types"


const initialState: Veiculo = {
    ano: '',
    marca: '',
    modelo: '',
    placa: '',
    cor: '',
    renavam: '',
    potencia: '',
}

export const veiculoSlice = createSlice({
    name: 'veiculo',
    initialState,
    reducers: {
        setVeiculoReducer: (state, action) => {
            console.log(action.payload)
            state = action.payload
            console.log(state)
        },
    },

})

export const { setVeiculoReducer } = veiculoSlice.actions
export const veiculoReducer = veiculoSlice.reducer