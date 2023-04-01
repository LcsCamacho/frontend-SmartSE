import { FormControl, FormHelperText, TextField } from "@mui/material";
import { ChangeEvent, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVeiculoReducer } from "../../../features/redux/cadastro-veiculo-slice";
import { Veiculo } from "../../../types";


export default function InputMarca() {
    const [marcaState, setMarcaState] = useState('')
    const dispatch = useDispatch();
    const {veiculo}: {veiculo:Veiculo} = useSelector((state: any) => state.veiculo);    
    const {ano, modelo, renavam, cor, potencia, placa} = veiculo

    const setMarca = (e: ChangeEvent<HTMLInputElement>) => {
        setMarcaState(e.target.value)
    }

    useEffect(() => {
        let data = {
            ano,
            marca: marcaState,
            modelo,
            cor,
            renavam,
            potencia,
            placa,
        }
        dispatch(setVeiculoReducer(data))
    }, [marcaState])

    return (
        <FormControl>
            <TextField
                id="marca"
                label="Marca"
                variant="standard"
                onChange={setMarca}
            />
            <FormHelperText>Informe a marca do veiculo</FormHelperText>
        </FormControl>
    )
}