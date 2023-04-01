import { FormControl, Select, MenuItem, FormHelperText, SelectChangeEvent, InputLabel } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Abastecimento } from "../../../types";
import { setAbastecimentoReducer } from "../../../features/redux/cadastro-abastecimento-slice";
import { useState, useEffect } from "react";

export default function InputTipo() {
    const [tipoState, setTipoState] = useState('');
    const dispatch = useDispatch();
    const { abastecimento }: {abastecimento: Abastecimento} = useSelector(
        (state:any) => state.abastecimento
    )
    const { valor, placa, litros, tipo } = abastecimento

    const handleChange = (e: SelectChangeEvent) => {
        setTipoState(e.target.value)
    }

    useEffect(()=>{
        let data = {
            valor,
            placa,
            litros,
            tipo: tipoState
        }
        dispatch(setAbastecimentoReducer(data))
    },[tipoState])
    

    return (
        <FormControl>
            <InputLabel id="tipo">Tipo</InputLabel>
            <Select
                labelId="select-comum-aditivada"
                id="tipo"
                autoWidth
                onChange={handleChange}
                value="Gasolina Comum"
                label="Tipo"
            >
                <MenuItem value="Gasolina Comum">Gasolina Comum</MenuItem>
                <MenuItem value="Gasolina Aditivada">Gasolina Aditivada</MenuItem>
            </Select>
            <FormHelperText>Informe o tipo do combustível</FormHelperText>
        </FormControl>
    )
}