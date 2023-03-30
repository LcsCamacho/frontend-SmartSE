import { FormControl, FormHelperText, TextField } from "@mui/material";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVeiculoReducer } from "../../../features/redux/cadastro-veiculo-slice";


export default function InputMarca() {
    const dispatch = useDispatch();
    const {veiculo} = useSelector((state: any) => state.veiculo);    
    const {ano, modelo, renavam, cor, potencia, placa} = veiculo

    const setMarca = (e: ChangeEvent<HTMLInputElement>) => {
        let data = {
            ano,
            marca: e.target.value,
            modelo,
            cor,
            renavam,
            potencia,
            placa,
        }
        dispatch(setVeiculoReducer(data))
    }

    return (
        <FormControl>
            <TextField
                id="marca"
                label="Marca"
                variant="standard"
                onChange={setMarca}
            />
            <FormHelperText>Informe a marca do veiculo</FormHelperText>
        </FormControl>
    )
}