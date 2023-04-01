import { FormControl, InputLabel, Input, InputAdornment, FormHelperText } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Abastecimento } from "../../../types";
import { setAbastecimentoReducer } from "../../../features/redux/cadastro-abastecimento-slice";

export default function InputLitros() {
    const [litrosState, setLitrosState] = useState<string | number>('')

    const dispatch = useDispatch();
    const { abastecimento }: {abastecimento: Abastecimento} = useSelector(
        (state:any) => state.abastecimento
    )
    const { valor, placa, litros, tipo } = abastecimento

    const setLitros= (e: ChangeEvent<HTMLInputElement>) => {
        let data = {
            valor,
            placa,
            litros: e.target.value,
            tipo
        }
        setLitrosState(data.litros)
        dispatch(setAbastecimentoReducer(data))
    }
    
    return (
        <FormControl>
            <InputLabel htmlFor="litros">Litros</InputLabel>
            <Input
                onChange={setLitros}
                value={litrosState}
                id="litros"
                type="number"
                inputProps={{ min: "0", step: "0.50" }}
                startAdornment={<InputAdornment position="start">L</InputAdornment>}
            />
            <FormHelperText>Informe a quantidade de litros a ser abastecido no veiculo</FormHelperText>
        </FormControl>
    )
}