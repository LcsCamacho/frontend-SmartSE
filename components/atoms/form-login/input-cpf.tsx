import { FormControl, InputLabel, Input, FormHelperText } from "@mui/material";
import { useDispatch } from "react-redux";
import { setCpfReducer } from "../../../features/redux/user-slice";
import { ChangeEvent } from "react";


export default function InputEmail() {
    const dispatch = useDispatch();

    const setCpf = (event:ChangeEvent<HTMLInputElement>) => {
        dispatch(setCpfReducer(event.target.value));
    }

    return (
        <FormControl>
            <InputLabel htmlFor="my-input">Cpf</InputLabel>
            <Input id="cpf" onChange={setCpf} />
            <FormHelperText id="my-helper-text">123.456.789-00</FormHelperText>
        </FormControl>
    )
}