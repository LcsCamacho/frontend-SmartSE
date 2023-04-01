import { FormControl, Select, MenuItem, FormHelperText, SelectChangeEvent, InputLabel } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Abastecimento } from "../../../types";
import { setAbastecimentoReducer } from "../../../features/redux/cadastro-abastecimento-slice";

export default function InputTipo() {

    const dispatch = useDispatch();
    const { abastecimento }: {abastecimento: Abastecimento} = useSelector(
        (state:any) => state.abastecimento
    )
    const { placa, litros, tipo } = abastecimento

    const handleChange = (e: SelectChangeEvent) => {
        let data = {
            valor: e.target.value,
            placa,
            litros,
            tipo
        }
        dispatch(setAbastecimentoReducer(data))
    }
    

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