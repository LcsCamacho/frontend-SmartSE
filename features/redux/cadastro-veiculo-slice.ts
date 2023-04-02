import { createSlice } from "@reduxjs/toolkit"
import { Veiculo } from "../../types"

interface initialStateType {
    veiculo: Veiculo
}
type PayloadSetVeiculo = {
    tipo: "ano" | "marca" | "modelo" | "placa" | "cor" | "renavam" | "potencia",
    data: string
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
            const { data, tipo }: PayloadSetVeiculo = action.payload
            console.log({data, tipo, state: {
                ...state.veiculo,
                [tipo]: data
            }})
            state.veiculo = {
                ...state.veiculo,
                [tipo]: data
            }
        },
        clearFormVeiculoReducer: (state) => {
            state.veiculo = initialState.veiculo
        }
    },

})

export const { setVeiculoReducer, clearFormVeiculoReducer } = veiculoSlice.actions
export const veiculoReducer = veiculoSlice.reducer



// import { createSlice, createEntityAdapter, EntityState, EntityAdapter } from "@reduxjs/toolkit"
// import { Veiculo } from "../../types"
// interface initialStateType extends EntityState<Veiculo> {
//     veiculo: Veiculo;
//   }
// const veiculoAdapter = createEntityAdapter<Veiculo>()

// const initialState: initialStateType = {
//     veiculo: veiculoAdapter.getInitialState({
//         ano: '',
//         marca: '',
//         modelo: '',
//         placa: '',
//         cor: '',
//         renavam: '',
//         potencia: '',
//         id:0,
//     }),
//     ids: [],
//     entities: {},
// }

// export const veiculoSlice = createSlice({
//   name: 'veiculo',
//   initialState,
//   reducers: {
//     setVeiculoReducer: veiculoAdapter.updateOne,
//     clearFormVeiculoReducer: (state) => {
//       state.veiculo = veiculoAdapter.getInitialState({
//         ano: '',
//         marca: '',
//         modelo: '',
//         placa: '',
//         cor: '',
//         renavam: '',
//         potencia: '',
//       })
//     }
//   },
// })

// export const { setVeiculoReducer, clearFormVeiculoReducer } = veiculoSlice.actions
// export const veiculoReducer = veiculoSlice.reducer
