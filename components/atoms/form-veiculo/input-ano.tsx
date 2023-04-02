import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import { ChangeEvent, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVeiculoReducer } from "../../../features/redux/cadastro-veiculo-slice";
import { Veiculo } from "../../../types";

export default function InputAno() {
    // const dispatch = useDispatch();
    // const [anoState, setAnoState] = useState('');
    // const {veiculo}: {veiculo:Veiculo} = useSelector((state: any) => state.veiculo);    

    const setAno = (e: ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem("ano", e.target.value)
    }

    return (
        <FormControl>
            <InputLabel>Ano</InputLabel>
            <Input
                type="number"
                inputProps={{ min: "1950", max: "2023" }}
                onChange={setAno}
            />
            <FormHelperText>Informe o ano do veiculo</FormHelperText>
        </FormControl>
    )
}