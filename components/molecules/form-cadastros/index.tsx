import { useAxios } from '../../../hooks/UseAxios';
import { useDispatch, useSelector } from 'react-redux';
import { FormEvent, useEffect } from 'react';
import { Button } from "@mui/material";
import styles from './form.module.scss';
import { z } from 'zod'
import { toggleModalCadastroVeiculoReducer } from "../../../features/redux/modal-slice";
import { Veiculo, Abastecimento } from '../../../types';
import InputPotencia from '../../atoms/form-veiculo/inputPotencia';
import InputPlaca from '../../atoms/form-veiculo/inputPlaca';

interface formType {
    cadastroVeiculo: (veiculo: Veiculo) => void,
    cadastroAbastecimento: (abastecimento: Abastecimento) => void
}
const PlacaRegex = new RegExp('[a-zA-Z]{3}[-][0-9][a-z0-9A-Z][0-9]{2}')

const schema = z.object({
    placa: z.string().regex(PlacaRegex),
    renavam: z.string().length(11),
    cor: z.string().max(12),
    potencia: z.string(),
    modelo: z.string(),
    marca: z.string(),
    ano: z.string().max(4),
})

export default function FormCadastros({ type }: { type: 'cadastroVeiculo' | 'cadastroAbastecimento' }) {
    const { api } = useAxios();
    const dispatch = useDispatch();
    const veiculo = useSelector((state: any) => state.veiculo);

    useEffect(() => {
        console.log(veiculo)
    }, [veiculo])

    //objeto com as funções de cada tipo de formulario
    const actions: formType = {
        cadastroVeiculo: (veiculo: Veiculo) => {
            api.post("/veiculo/inserir", veiculo)
                .then(() => dispatch(toggleModalCadastroVeiculoReducer()))
        },
        cadastroAbastecimento: (abastecimento: Abastecimento) => {
            api.post("/abastecimento/inserir", abastecimento)
        }
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const result = schema.safeParse(veiculo)

        //se o schema for valido, faz a requisição
        if (result.success) {
            actions[type](veiculo)
        }
        console.log(result)
        

    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <InputPotencia />
            <InputPlaca />
            <Button
                type="submit"
                variant="contained"
                color="primary">
            </Button>
        </form>
    )
}