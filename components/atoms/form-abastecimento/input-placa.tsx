import { FormControl, FormHelperText, Select, MenuItem, SelectChangeEvent, InputLabel } from "@mui/material";
import { ChangeEvent, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Abastecimento, Veiculo } from "../../../types";
import { setAbastecimentoReducer } from "../../../features/redux/cadastro-abastecimento-slice";
import { useAxios } from "../../../hooks/UseAxios";

//adicionar um select com as placas dos veiculos cadastrados
export default function InputPlaca() {
    const [placaState, setPlacaState] = useState<string[]>([]);
    const [currentPlaca, setCurrentPlaca] = useState<string>('');
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
                setPlacaState(placas)
            })
            .catch((error) => {
                console.log(error)
            })
    },[])
    
    useEffect(() => {
        if(placaState.length > 0) {
            setCurrentPlaca(placaState[0])
        }
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