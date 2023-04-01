import { FormControl, InputLabel, Input, InputAdornment, FormHelperText } from "@mui/material";
import { ChangeEvent, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Abastecimento } from "../../../types";
import { setAbastecimentoReducer } from "../../../features/redux/cadastro-abastecimento-slice";


export default function InputValor() {
    const [valorState, setValorState] = useState('');
    const dispatch = useDispatch();
    const { abastecimento }: {abastecimento: Abastecimento} = useSelector(
        (state:any) => state.abastecimento
    )
    const { placa, litros, tipo } = abastecimento

    const setValor = (e: ChangeEvent<HTMLInputElement>) => {
        setValorState(e.target.value)
    }

    useEffect(()=>{
        let data = {
            valor: valorState,
            placa,
            litros,
            tipo
        }
        dispatch(setAbastecimentoReducer(data))
    },[valorState])
    
    return (
        <FormControl >
            <InputLabel htmlFor="valor">Valor</InputLabel>
            <Input
                onChange={setValor}
                id="valor"
                type="number"
                inputProps={{ min: "0", step: "0.50" }}
                startAdornment={<InputAdornment position="start">R$</InputAdornment>}
            />
            <FormHelperText>Informe o valor do abastecimento</FormHelperText>
        </FormControl>
    )
}