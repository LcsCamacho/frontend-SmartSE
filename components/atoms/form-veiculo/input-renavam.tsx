import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVeiculoReducer } from "../../../features/redux/cadastro-veiculo-slice";
import { Veiculo } from "../../../types";


export default function InputRenavam() {
    // const [renavamState, setRenavamState] = useState('')
    // const dispatch = useDispatch();
    // const {veiculo}: {veiculo:Veiculo} = useSelector((state: any) => state.veiculo);    

    const setRenavam = (e: ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem("renavam",e.target.value)
    }

    return (
        <FormControl>
            <InputLabel>Renavam</InputLabel>
            <Input
                type="number"
                onChange={setRenavam}
            />
            <FormHelperText>Informe o renavam do veiculo</FormHelperText>
        </FormControl>
    )
}