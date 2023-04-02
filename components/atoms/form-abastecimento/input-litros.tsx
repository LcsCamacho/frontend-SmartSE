import { FormControl, InputLabel, Input, InputAdornment, FormHelperText } from "@mui/material";
import { ChangeEvent, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Abastecimento } from "../../../types";
import { setAbastecimentoReducer } from "../../../features/redux/cadastro-abastecimento-slice";

export default function InputLitros() {
    // const [litrosState, setLitrosState] = useState<string | number>('')

    // const dispatch = useDispatch();
    // const { abastecimento }: {abastecimento: Abastecimento} = useSelector(
    //     (state:any) => state.abastecimento
    // )

    const setLitros= (e: ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem('litros', e.target.value)
    }

    return (
        <FormControl>
            <InputLabel>Litros</InputLabel>
            <Input
                onChange={setLitros}
                type="number"
                startAdornment={<InputAdornment position="start">L</InputAdornment>}
            />
            <FormHelperText>Informe a quantidade de litros a ser abastecido no veiculo</FormHelperText>
        </FormControl>
    )
}