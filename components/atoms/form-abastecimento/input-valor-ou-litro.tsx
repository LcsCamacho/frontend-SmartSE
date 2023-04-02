import { FormControl, Select, MenuItem, FormHelperText, SelectChangeEvent, InputLabel } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Abastecimento } from "../../../types";
import { setAbastecimentoReducer, setTipoValorOuLitroReducer } from "../../../features/redux/cadastro-abastecimento-slice";
import { useState, useEffect } from "react";

export default function InputValorOuLitro() {
    const [tipoState, setTipoState] = useState('Valor');
    const dispatch = useDispatch();
    // const { abastecimento }: {abastecimento: Abastecimento} = useSelector(
    //     (state:any) => state.abastecimento
    // )

    const handleChange = (e: SelectChangeEvent) => {
        dispatch(setTipoValorOuLitroReducer(e.target.value))
        setTipoState(e.target.value)
    }

    return (
        <FormControl>
            <InputLabel>Tipo</InputLabel>
            <Select
                label="tipo"
                autoWidth
                onChange={handleChange}
                value={tipoState}
            >
                <MenuItem value="Valor">Valor</MenuItem>
                <MenuItem value="Litro">Litro</MenuItem>
            </Select>
            <FormHelperText>Informe o tipo do combustível</FormHelperText>
        </FormControl>
    )
}