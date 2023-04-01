import { FormControl, FormHelperText, TextField } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVeiculoReducer } from "../../../features/redux/cadastro-veiculo-slice";
import { Veiculo } from "../../../types";

export default function InputCor() {
    const [corState, setCorState] = useState('');
    const dispatch = useDispatch();
    const {veiculo}: {veiculo:Veiculo} = useSelector((state: any) => state.veiculo);    
    const {ano, marca, renavam, cor, potencia, placa, modelo} = veiculo

    const setCor = (e: ChangeEvent<HTMLInputElement>) => {
        
    }

    useEffect(() => {
        let data = {
            ano,
            marca,
            renavam,
            cor: corState,
            potencia,
            placa,
            modelo
        }
        dispatch(setVeiculoReducer(data))
    }, [corState])

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