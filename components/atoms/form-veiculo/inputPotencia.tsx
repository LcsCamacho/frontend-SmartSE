import { FormControl, FormHelperText, Input, InputAdornment, InputLabel, TextField } from "@mui/material";
import { ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVeiculoReducer } from "../../../features/redux/cadastro-veiculo-slice";


export default function InputPotencia() {
    const dispatch = useDispatch();
    const {veiculo} = useSelector((state: any) => state.veiculo);    
    const {ano, marca, modelo, cor, renavam, placa} = veiculo

    const setPotencia = (e: ChangeEvent<HTMLInputElement>) => {
        let data = {
            ano,
            marca,
            modelo,
            cor,
            renavam,
            potencia: e.target.value,
            placa,
        }
        dispatch(setVeiculoReducer(data))
    }
    

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