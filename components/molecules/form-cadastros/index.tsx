import { useDispatch, useSelector } from 'react-redux';
import { FormEvent } from 'react';
import { Button } from "@mui/material";
import { z } from 'zod'
import styles from './form.module.scss';
import { useAxios } from '../../../hooks/UseAxios';
import { emitReducer } from "../../../features/redux/refetch-slice"
import { toggleModalCadastroVeiculoReducer } from "../../../features/redux/modal-slice";
import { clearFormReducer } from "../../../features/redux/cadastro-veiculo-slice";
import { Veiculo, Abastecimento } from '../../../types';
import InputPotencia from '../../atoms/form-veiculo/inputPotencia';
import InputPlaca from '../../atoms/form-veiculo/inputPlaca';
import InputCor from '../../atoms/form-veiculo/inputCor';
import InputRenavam from '../../atoms/form-veiculo/inputRenavam';
import InputModelo from '../../atoms/form-veiculo/inputModelo';
import InputMarca from '../../atoms/form-veiculo/inputMarca';
import InputAno from '../../atoms/form-veiculo/inputAno';

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
    const user = useSelector((state: any) => state.login);
    const { api } = useAxios();
    const dispatch = useDispatch();
    const { veiculo } = useSelector((state: any) => state.veiculo);


    //objeto com as funções de cada tipo de formulario
    const actions: formType = {
        cadastroVeiculo: (veiculo: Veiculo) => {
            api.post("/veiculo/inserir", veiculo, {
                headers: {
                    authorization: user.token
                }
            })
                .then(() => {
                    dispatch(toggleModalCadastroVeiculoReducer())
                    dispatch(clearFormReducer())
                    dispatch(emitReducer())

                })
        },
        cadastroAbastecimento: (abastecimento: Abastecimento) => {
            api.post("/abastecimento/inserir", abastecimento)
        }
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = schema.safeParse(veiculo)

        //se o schema for valido, faz a requisição
        if (result.success) {
            actions[type](veiculo)
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            {type === "cadastroVeiculo" && (
                <>
                    <InputPotencia />
                    <InputPlaca />
                    <InputCor />
                    <InputRenavam />
                    <InputModelo />
                    <InputMarca />
                    <InputAno />
                </>
            )}

            <Button
                type="submit"
                variant="contained"
                color="primary">
                Inserir
            </Button>
        </form>
    )
}