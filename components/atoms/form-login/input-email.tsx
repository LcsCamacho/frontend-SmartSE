import { FormControl, InputLabel, Input, FormHelperText } from "@mui/material";
import { useDispatch } from "react-redux";
import { setPasswordReducer } from "../../../features/redux/user-slice";
import { FormEvent } from "react";


export default function InputEmail() {
    const dispatch = useDispatch();

    const setPassword = (e:any) => {
        console.log(e)
        // dispatch(setPasswordReducer(e.target.value))
    }

    return (
        <FormControl>
            <InputLabel htmlFor="my-input">Email</InputLabel>
            <Input id="email" onChange={setPassword} />
            <FormHelperText id="my-helper-text">exemplo@exemplo.com</FormHelperText>
        </FormControl>
    )
}