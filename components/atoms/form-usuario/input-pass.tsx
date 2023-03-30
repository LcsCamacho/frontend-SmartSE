import { FormControl, InputLabel, Input, FormHelperText } from "@mui/material";
import { ChangeEvent, useState } from "react";
import styles from "/components/molecules/form-usuario/form.module.scss";
import { loginSetPasswordReducer } from "../../../features/redux/login-slice";
import { cadastroSetPasswordReducer } from "../../../features/redux/cadastro-usuario-slice";
import { useDispatch } from "react-redux";

export default function InputPassword({ type }: { type: string }) {
    const [typePassword, setTypePassword] = useState('password');
    const dispatch = useDispatch();

    const setPassword = (event: ChangeEvent<HTMLInputElement>) => {
        if (type === "login") {
            dispatch(loginSetPasswordReducer(event.target.value));
            return
        }
        if (type === "cadastro") {
            dispatch(cadastroSetPasswordReducer(event.target.value));
            return
        }
    }

    return (
        <FormControl className={styles.password}>
            <InputLabel>Senha</InputLabel>
            <Input  required type={typePassword} onChange={setPassword} />
            <FormHelperText>Mínimo 6 caracteres</FormHelperText>
        </FormControl>
    )
}