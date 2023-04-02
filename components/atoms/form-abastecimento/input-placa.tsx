import { FormControl, FormHelperText, Select, MenuItem, SelectChangeEvent, InputLabel } from "@mui/material";
import { ChangeEvent, useState, useEffect, forwardRef, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMaskInput } from "react-imask";
import { Abastecimento, Veiculo } from "../../../types";
import { setAbastecimentoReducer } from "../../../features/redux/cadastro-abastecimento-slice";
import { useAxios } from "../../../hooks/UseAxios";

//adicionar um select com as placas dos veiculos cadastrados
export default function InputPlaca() {
    const [placaState, setPlacaState] = useState<string[]>([]);
    const [currentPlaca, setCurrentPlaca] = useState('');
    // const dispatch = useDispatch();
    // const { abastecimento }: { abastecimento: Abastecimento } = useSelector(
    //     (state: any) => state.abastecimento
    // )
    const { api } = useAxios();

    useEffect(() => {
        api.get('/veiculo/listar')
            .then((response) => {
                const placas = response.data.map((veiculo: Veiculo) => (
                    veiculo.placa
                ))
                setPlacaState(state => placas)
            })
            .catch((error) => {
                console.log(error)
            })
    },[])

    useEffect(() => {
        setCurrentPlaca(placaState[0])
    }, [placaState])

    const handleChange = (e: SelectChangeEvent) => {
        localStorage.setItem('placa', e.target.value)
        setCurrentPlaca(e.target.value)
    }

    return (
        <FormControl>
            <InputLabel>Placa</InputLabel>
            <Select
                label="Placa"
                autoWidth
                onChange={handleChange}
                value={currentPlaca}
            >
                {placaState.map((placa:string, index:number | string)=> {
                    return <MenuItem key={index} value={placa}>{placa}</MenuItem>
                })}
            </Select>
            <FormHelperText>Placas dos veículos disponíveis</FormHelperText>
        </FormControl>
    )
}