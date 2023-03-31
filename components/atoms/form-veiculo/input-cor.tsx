import { FormControl, FormHelperText, TextField } from "@mui/material";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVeiculoReducer } from "../../../features/redux/cadastro-veiculo-slice";
import { Veiculo } from "../../../types";

export default function InputCor() {
    const dispatch = useDispatch();
    const {veiculo}: {veiculo:Veiculo} = useSelector((state: any) => state.veiculo);    
    const {ano, marca, renavam, cor, potencia, placa, modelo} = veiculo

    const setCor = (e: ChangeEvent<HTMLInputElement>) => {
        let data = {
            ano,
            marca,
            cor: e.target.value,
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
                id="Cor"
                label="Cor"
                variant="standard"
                onChange={setCor}
            />
            <FormHelperText>Informe a cor do veiculo</FormHelperText>
        </FormControl>
    )
}