import { FormControl, FormHelperText, TextField } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVeiculoReducer } from "../../../features/redux/cadastro-veiculo-slice";
import { Veiculo } from "../../../types";


export default function InputRenavam() {
    const [renavamState, setRenavamState] = useState('')
    const dispatch = useDispatch();
    const {veiculo}: {veiculo:Veiculo} = useSelector((state: any) => state.veiculo);    
    const {ano, marca, modelo, cor, potencia, placa} = veiculo

    const setRenavam = (e: ChangeEvent<HTMLInputElement>) => {
        setRenavamState(e.target.value)
    }

    useEffect(() => {
        let data = {
            ano,
            marca,
            modelo,
            cor,
            renavam: renavamState,
            potencia,
            placa,
        }
        dispatch(setVeiculoReducer(data))
    }, [renavamState])

    return (
        <FormControl>
            <TextField
                id="Renavam"
                label="Renavam"
                type="number"
                variant="standard"
                onChange={setRenavam}
            />
            <FormHelperText>Informe o renavam do veiculo</FormHelperText>
        </FormControl>
    )
}