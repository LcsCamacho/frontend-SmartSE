import { FormControl, Select, MenuItem, FormHelperText, SelectChangeEvent, InputLabel } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Abastecimento } from "../../../types";
import { setAbastecimentoReducer } from "../../../features/redux/cadastro-abastecimento-slice";
import { useState, useEffect } from "react";

export default function InputTipo() {
    const [tipoState, setTipoState] = useState('Gasolina Comum');
    // const dispatch = useDispatch();
    // const { abastecimento }: {abastecimento: Abastecimento} = useSelector(
    //     (state:any) => state.abastecimento
    // )

    useEffect(()=> {
        localStorage.setItem('tipo', "Gasolina Comum")
    }, [])

    const handleChange = (e: SelectChangeEvent) => {
        localStorage.setItem('tipo', e.target.value)
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
                <MenuItem value="Gasolina Comum">Gasolina Comum</MenuItem>
                <MenuItem value="Gasolina Aditivada">Gasolina Aditivada</MenuItem>
            </Select>
            <FormHelperText>Informe o tipo do combustível</FormHelperText>
        </FormControl>
    )
}