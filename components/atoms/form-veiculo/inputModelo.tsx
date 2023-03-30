import { FormControl, FormHelperText, TextField } from "@mui/material";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVeiculoReducer } from "../../../features/redux/cadastro-veiculo-slice";


export default function InputModelo() {
    const dispatch = useDispatch();
    const {veiculo} = useSelector((state: any) => state.veiculo);    
    const {ano, marca, renavam, cor, potencia, placa} = veiculo

    const setModelo = (e: ChangeEvent<HTMLInputElement>) => {
        let data = {
            ano,
            marca,
            modelo: e.target.value,
            cor,
            renavam,
            potencia,
            placa,
        }
        dispatch(setVeiculoReducer(data))
    }

    return (
        <>
            <TextField
                id="Modelo"
                label="Modelo"
                variant="standard"
                onChange={setModelo}
            />
            <FormHelperText>Informe o modelo do veiculo</FormHelperText>
        </>
    )
}