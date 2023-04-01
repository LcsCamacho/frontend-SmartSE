import { FormControl, FormHelperText, InputAdornment, TextField } from "@mui/material";
import { ChangeEvent, useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setVeiculoReducer } from "../../../features/redux/cadastro-veiculo-slice";
import { Veiculo } from "../../../types";


export default function InputPotencia() {
    const [potenciaState, setPotenciaState] = useState('')
    const dispatch = useDispatch();
    const {veiculo}: {veiculo:Veiculo} = useSelector((state: any) => state.veiculo);    
    const {ano, marca, modelo, cor, renavam, placa} = veiculo

    const setPotencia = (e: ChangeEvent<HTMLInputElement>) => {
        setPotenciaState(e.target.value)
    }

    useEffect(() => {
        let data = {
            ano,
            marca,
            modelo,
            cor,
            renavam,
            potencia: potenciaState,
            placa,
        }
        dispatch(setVeiculoReducer(data))
    }, [potenciaState])
    

    return (
        <FormControl>
            <TextField
                InputProps={{
                    startAdornment: <InputAdornment position="start">CV</InputAdornment>,
                }}
                id="potencia"
                label="Potência"
                type="number"
                variant="standard"
                onChange={setPotencia}
            />
            <FormHelperText>Informe a potência do veículo</FormHelperText>
        </FormControl>
    )
}