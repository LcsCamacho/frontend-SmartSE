import { FormControl, InputLabel, Input, FormHelperText } from "@mui/material";
import { useState } from "react";
import styles from "/components/organisms/modal-login/modal.module.scss";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function InputPassword() {
    const [typePassword, setTypePassword] = useState('password');

    return (
        <FormControl className={styles.password}>
            <InputLabel htmlFor="my-input">Senha</InputLabel>
            <Input type={typePassword} id="senha" />
            <span className={styles.iconToggle} onClick={() => setTypePassword(typePassword === 'password' ? 'text' : 'password')}>
                {typePassword === 'password' ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </span>
            <FormHelperText id="my-helper-text">Mínimo 6 caracteres</FormHelperText>
        </FormControl>
    )
}