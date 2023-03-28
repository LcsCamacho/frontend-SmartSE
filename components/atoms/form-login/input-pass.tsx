import { FormControl, InputLabel, Input, FormHelperText } from "@mui/material";
import { ChangeEvent, useState } from "react";
import styles from "/components/organisms/modal-login/modal.module.scss";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { setPasswordReducer } from "../../../features/redux/user-slice";
import { useDispatch } from "react-redux";

export default function InputPassword() {
    const [typePassword, setTypePassword] = useState('password');
    const dispatch = useDispatch();

    const handleToggleShowPassword = () => {
        setTypePassword(typePassword === 'password' ? 'text' : 'password');
    }

    const setPassword = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setPasswordReducer(event.target.value));
    }

    return (
        <FormControl className={styles.password}>
            <InputLabel htmlFor="my-input">Senha</InputLabel>
            <Input type={typePassword} onChange={setPassword} id="senha" />
            <span className={styles.iconToggle} onClick={handleToggleShowPassword}>
                {typePassword === 'password' ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </span>
            <FormHelperText id="my-helper-text">Mínimo 6 caracteres</FormHelperText>
        </FormControl>
    )
}