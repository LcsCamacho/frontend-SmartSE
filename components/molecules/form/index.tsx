import { Button } from "@mui/material";
import styles from './form.module.scss';
import InputPassword from "../../atoms/form-login/input-pass";
import { useDispatch, useSelector } from 'react-redux';
import { useAxios } from "../../../hooks/UseAxios";
import { LogarReducer } from "../../../features/redux/login-slice";
import { FormEvent } from 'react';
import { z } from 'zod'
import InputCPF from "../../atoms/form-login/input-cpf";

const regexCPF = new RegExp("/^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/")

const loginSchema = z.object({
    cpf: z.string().regex(regexCPF),
    senha: z.string().min(6)
})

type formType = {
    login: ({ senha, cpf }: { senha: string, cpf: string }) => void,
    cadastro: ({ senha, cpf }: { senha: string, cpf: string }) => void,
}

export default function Form({ type }: { type: 'login' | 'cadastro' }) {
    const usuario = useSelector((state: any) => state.type);
    const { api } = useAxios();
    const dispatch = useDispatch();


    const tipoDoFormulario: formType = {
        login: ({ cpf, senha }) => {
            api.post('/login', {
                senha: senha,
                cpf: cpf
            })
                .then(() => {
                    dispatch(LogarReducer());
                })
        },
        cadastro: ({ cpf, senha }) => {
            api.post('/usuario/cadastrar', {
                senha: senha,
                cpf: cpf
            })
        }
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        let result = loginSchema.safeParse({
            cpf: usuario.cpf,
            senha: usuario.senha
        })

        //se o schema for valido, faz a requisição
        if (result.success) {
            tipoDoFormulario[type]({
                cpf: result.data.cpf,
                senha: result.data.senha
            })
        }
        alert("CPF ou senha inválidos")

    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <InputCPF type={type} />
            <InputPassword type={type} />
            <Button
                type="submit"
                variant="contained"
                className={styles.button}>entrar</Button>
        </form>
    )
}