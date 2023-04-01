import { FormControl, FormHelperText, TextField } from "@mui/material";
import { ChangeEvent, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVeiculoReducer } from "../../../features/redux/cadastro-veiculo-slice";
import { Veiculo } from "../../../types";


export default function InputModelo() {
    const [modeloState, setModeloState] = useState('')
    const dispatch = useDispatch();
    const {veiculo}: {veiculo:Veiculo} = useSelector((state: any) => state.veiculo);    
    const {ano, marca, renavam, cor, potencia, placa} = veiculo

    const setModelo = (e: ChangeEvent<HTMLInputElement>) => {
        setModeloState(e.target.value)
    }

    useEffect(() => {
        let data = {
            ano,
            marca,
            modelo: modeloState,
            cor,
            renavam,
            potencia,
            placa,
        }
        dispatch(setVeiculoReducer(data))
    }, [modeloState])

    return (
        <FormControl>
            <TextField
                id="Modelo"
                label="Modelo"
                variant="standard"
                onChange={setModelo}
            />
            <FormHelperText>Informe o modelo do veiculo</FormHelperText>
        </FormControl>
    )
}