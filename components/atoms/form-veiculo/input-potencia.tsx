import { FormControl, FormHelperText, InputAdornment, TextField } from "@mui/material";
import { ChangeEvent, useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setVeiculoReducer } from "../../../features/redux/cadastro-veiculo-slice";
import { Veiculo } from "../../../types";

export default function InputPotencia() {
    // const [potenciaState, setPotenciaState] = useState('')
    // const dispatch = useDispatch();
    // const {veiculo}: {veiculo:Veiculo} = useSelector((state: any) => state.veiculo);    

    const setPotencia = (e: ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem("potencia",e.target.value)
    }

    return (
        <FormControl>
            <TextField
                InputProps={{
                    startAdornment: <InputAdornment position="start">CV</InputAdornment>,
                }}
                label="Potência"
                type="number"
                onChange={setPotencia}
            />
            <FormHelperText>Informe a potência do veículo</FormHelperText>
        </FormControl>
    )
}