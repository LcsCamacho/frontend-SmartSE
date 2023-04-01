import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setVeiculoReducer } from "../../../features/redux/cadastro-veiculo-slice";
import { Veiculo } from "../../../types";

export default function InputAno() {
    const dispatch = useDispatch();
    const [anoState, setAnoState] = useState('');
    const {veiculo}: {veiculo:Veiculo} = useSelector((state: any) => state.veiculo);    
    const { marca, renavam, cor, potencia, placa, modelo } = veiculo

    const setAno = (e: ChangeEvent<HTMLInputElement>) => {
        setAnoState(state => e.target.value)
    }

    useEffect(()=> {
        let data = {
            ano: anoState,
            marca,
            cor,
            modelo,
            renavam,
            potencia,
            placa,
        }
        dispatch(setVeiculoReducer(data))
    },[anoState])

    return (
        <FormControl>
            <InputLabel id="Ano">Ano</InputLabel>
            <Input
                id="Ano"
                type="number"
                value={anoState}
                inputProps={{ min: "1950", max: "2023" }}
                onChange={setAno}
            />
            <FormHelperText>Informe o ano do veiculo</FormHelperText>
        </FormControl>
    )
}