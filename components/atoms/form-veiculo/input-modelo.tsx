import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import { ChangeEvent, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVeiculoReducer } from "../../../features/redux/cadastro-veiculo-slice";
import { Veiculo } from "../../../types";


export default function InputModelo() {
    // const [modeloState, setModeloState] = useState('')
    // const dispatch = useDispatch();
    // const {veiculo}: {veiculo:Veiculo} = useSelector((state: any) => state.veiculo);    

    const setModelo = (e: ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem("modelo", e.target.value)
    }

    return (
        <FormControl>
            <InputLabel>Modelo</InputLabel>
            <Input onChange={setModelo}/>
            <FormHelperText>Informe o modelo do veiculo</FormHelperText>
        </FormControl>
    )
}