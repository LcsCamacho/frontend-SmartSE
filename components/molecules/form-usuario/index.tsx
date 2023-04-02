import { Button } from "@mui/material";
import { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { z } from 'zod';
import { LogarReducer } from "../../../features/redux/login-slice";
import { toggleModalCadastroReducer, toggleModalLoginReducer } from "../../../features/redux/modal-slice";
import { useAxios } from "../../../hooks/UseAxios";
import { InputCpf } from "../../atoms/form-usuario/input-cpf";
import InputPassword from "../../atoms/form-usuario/input-pass";
import styles from './form.module.scss';

const regexCPF = new RegExp("[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}")

const schema = z.object({
    cpf: z.string().regex(regexCPF),
    senha: z.string().min(6)
})

type formType = {
    login: ({ senha, cpf }: { senha: string, cpf: string }) => void,
    cadastro: ({ senha, cpf }: { senha: string, cpf: string }) => void,
}

export default function Form({ type }: { type: 'login' | 'cadastro' }) {
    const usuario = useSelector((state: any) => state[type]);
    const { api } = useAxios();
    const dispatch = useDispatch();

    //objeto com as funções de cada tipo de formulario
    const actions: formType = {
        login: ({ cpf, senha }) => {
            api.post('/login', {
                senha: senha,
                cpf: cpf
            })
                .then((res) => {
                    dispatch(LogarReducer(res.data.token));
                    dispatch(toggleModalLoginReducer());
                })
        },
        cadastro: ({ cpf, senha }) => {
            api.post('/usuario/cadastrar', {
                senha: senha,
                cpf: cpf
            })
                .then(() => {
                    dispatch(toggleModalCadastroReducer());
                    alert("Usuario cadastrado com sucesso")
                })
        }
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        let result = schema.safeParse({
            cpf: usuario.cpf,
            senha: usuario.senha
        })
        //se o schema for valido, faz a requisição
        if (result.success) {
            //acessa o objeto actions e executa a função de acordo com o tipo do formulario
            actions[type](result.data)
        }

    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <InputCpf type={type} />
            <InputPassword type={type} />
            <Button type="submit" variant="contained" color="primary">
                {type === 'login' && 'Entrar'}
                {type === 'cadastro' && 'Cadastrar'}
            </Button>
        </form>
    )
}