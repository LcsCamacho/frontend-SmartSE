import { FormControl, InputLabel, Input, FormHelperText } from "@mui/material";
import { useDispatch } from "react-redux";
import { loginSetCpfReducer } from "../../../features/redux/login-slice";
import { cadastroSetCpfReducer } from "../../../features/redux/cadastro-slice";
import { ChangeEvent } from "react";


export default function InputCPF({ type }: { type: string }) {
    const dispatch = useDispatch();

    const setCpf = (event: ChangeEvent<HTMLInputElement>) => {
        if (type === "login") {
            dispatch(loginSetCpfReducer(event.target.value));
            return
        }
        if (type === "cadastro") {
            dispatch(cadastroSetCpfReducer(event.target.value));
            return
        }
    }




    return (
        <FormControl>
            <InputLabel>Cpf</InputLabel>
            <Input required onChange={setCpf} />
            <FormHelperText>123.456.789-00</FormHelperText>
        </FormControl>
    )
}