import { FormControl, FormHelperText, TextField } from "@mui/material";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVeiculoReducer } from "../../../features/redux/cadastro-veiculo-slice";
import { Veiculo } from "../../../types";


export default function InputAno() {
    const dispatch = useDispatch();
    const {veiculo}: {veiculo:Veiculo} = useSelector((state: any) => state.veiculo);    
    const { marca, renavam, cor, potencia, placa, modelo } = veiculo

    const setAno = (e: ChangeEvent<HTMLInputElement>) => {
        let data = {
            ano: e.target.value,
            marca,
            cor,
            modelo,
            renavam,
            potencia,
            placa,
        }
        dispatch(setVeiculoReducer(data))
    }

    return (
        <FormControl>
            <TextField
                id="Ano"
                label="Ano"
                variant="standard"
                onChange={setAno}
            />
            <FormHelperText>Informe o ano do veiculo</FormHelperText>
        </FormControl>
    )
}