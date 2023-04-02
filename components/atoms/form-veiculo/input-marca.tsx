import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVeiculoReducer } from "../../../features/redux/cadastro-veiculo-slice";
import { Veiculo } from "../../../types";

//há um erro em tentar inserir as informações no redux, por isso preferi usar o 
//localStorage para armazenar os dados

export default function InputMarca() {
    // const { veiculo } = useSelector((state: any) => state.veiculo);
    // const [marcaState, setMarcaState] = useState('')
    // const dispatch = useDispatch();

    const setMarca = (e: ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem("marca", e.target.value)
    }

    // const setMarca = (event: ChangeEvent<HTMLInputElement>) => {
    //     dispatch(setVeiculoReducer({
    //         tipo: "marca",
    //         data: event.target.value,   
    //     }))
    // }
    
    // useEffect(() => {
    //     console.log({marcaState})
    //     dispatchMarca(marcaState)
    //     console.log("---Fim Use Effect ----")
    // }, [marcaState])

    // const dispatchMarca = useCallback((value:string) => {
    //     console.log("---callbackDispatch---- *Inicio*")
    //     dispatch(setVeiculoReducer({
    //         data: value,   
    //         tipo: "marca"
    //     }))
    //     console.log("---callbackDispatch---- *FIM*")
    // }, [dispatch])

    // useEffect(() => {
    //     console.log("🚀 ~ file: input-marca.tsx:34 ~ InputMarca ~ veiculo:", veiculo)
    // }, [veiculo])
    

    return (
        <FormControl required>
            <InputLabel>Marca</InputLabel>
            <Input  onChange={setMarca}/>
            <FormHelperText>Informe a marca do veiculo</FormHelperText>
        </FormControl>
    )
}