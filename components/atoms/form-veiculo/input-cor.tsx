import { FormControl, FormHelperText, InputLabel, Input } from "@mui/material";
import { ChangeEvent, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVeiculoReducer } from "../../../features/redux/cadastro-veiculo-slice";
import { Veiculo } from "../../../types";

export default function InputCor() {
    // const [corState, setCorState] = useState('');
    // const dispatch = useDispatch();
    // const {veiculo}: {veiculo:Veiculo} = useSelector((state: any) => state.veiculo);    

    const setCor = (e: ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem("cor" ,e.target.value)
    }

    return (
        <FormControl>
            <InputLabel>Cor</InputLabel>
            <Input onChange={setCor}/>
            <FormHelperText>Informe a cor do veiculo</FormHelperText>
        </FormControl>
    )
}