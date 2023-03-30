import { FormControl, FormHelperText, Input, InputAdornment, InputLabel, TextField } from "@mui/material";
import { ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVeiculoReducer } from "../../../features/redux/cadastro-veiculo-slice";


export default function InputRenavam() {
    const dispatch = useDispatch();
    const {veiculo} = useSelector((state: any) => state.veiculo);    
    const {ano, marca, modelo, cor, potencia, placa} = veiculo

    const setRenavam = (e: ChangeEvent<HTMLInputElement>) => {
        let data = {
            ano,
            marca,
            modelo,
            cor,
            renavam: e.target.value,
            potencia,
            placa,
        }
        dispatch(setVeiculoReducer(data))
    }

    return (
        <FormControl>
            <TextField
                id="Renavam"
                label="Renavam"
                type="number"
                variant="standard"
                onChange={setRenavam}
            />
            <FormHelperText>Informe o renavam do veiculo</FormHelperText>
        </FormControl>
    )
}