import { Button } from "@mui/material";
import styles from '../organisms/modal-login/modal.module.scss';
import InputPassword from "../atoms/form-login/input-pass";
import InputEmail from "../atoms/form-login/input-cpf";
import { useDispatch, useSelector } from 'react-redux';
import { useAxios } from "../../hooks/UseAxios";
import { LoginUserReducer } from "../../features/redux/user-slice";
import { FormEvent } from 'react';


export default function FormLogin() {
    const usuario = useSelector((state: any) => state.user);
    const { api } = useAxios();
    const dispatch = useDispatch();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const {data} = await api.post('/login', {
            senha: usuario.senha,
            cpf: usuario.cpf
        })
        dispatch(LoginUserReducer(data.usuario));
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <InputEmail />
            <InputPassword />
            <Button
                type="submit"
                variant="contained"
                className={styles.button}>entrar</Button>
        </form>
    )
}