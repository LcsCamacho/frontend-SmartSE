import { FormControl, InputLabel, Input, InputAdornment, FormHelperText } from "@mui/material";
import { ChangeEvent, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Abastecimento } from "../../../types";
import { setAbastecimentoReducer } from "../../../features/redux/cadastro-abastecimento-slice";


export default function InputValor() {
    const [valorState, setValorState] = useState<string | number | null>(0);
    // const dispatch = useDispatch();
    // const { abastecimento }: {abastecimento: Abastecimento} = useSelector(
    //     (state:any) => state.abastecimento
    // )

    const setValor = (e: ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem("valor", e.target.value)
        setValorState(state => state = Number(e.target.value))
    }

    return (
        <FormControl >
            <InputLabel>Valor</InputLabel>
            <Input
                onChange={setValor}
                value={valorState || ''}
                type="number"
                startAdornment={<InputAdornment position="start">R$</InputAdornment>}
            />
            <FormHelperText>Informe o valor do abastecimento</FormHelperText>
        </FormControl>
    )
}