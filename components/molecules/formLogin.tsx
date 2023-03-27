import { FormControl, InputLabel, Input, FormHelperText } from "@mui/material";
import styles from '../organisms/modal-login/modal.module.scss';
import { useState } from "react";
import InputPassword from "../atoms/form-login/inputPass";
import InputEmail from "../atoms/form-login/input-email";


export default function FormLogin() {
    const [typePassword, setTypePassword] = useState('password');

    return (
        <form className={styles.form}>
            <InputEmail />
            <InputPassword/>
        </form>
    )
}