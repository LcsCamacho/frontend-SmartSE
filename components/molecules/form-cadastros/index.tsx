import { useDispatch, useSelector } from 'react-redux';
import { FormEvent } from 'react';
import { Button } from "@mui/material";
import { z } from 'zod'
import styles from './form.module.scss';
import { useAxios } from '../../../hooks/UseAxios';
import { emitRefetchVeiculoReducer } from "../../../features/redux/refetch-slice"
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

//interface com as funções de cada tipo de formulario
interface formType {
    cadastroVeiculo: (veiculo: Veiculo) => void,
    cadastroAbastecimento: (abastecimento: Abastecimento) => void
}

//regex: abc-1234 ou abc-1a34
const PlacaRegex = new RegExp('[a-zA-Z]{3}[-][0-9][a-z0-9A-Z][0-9]{2}')

//validar informaçoes obtidas dos inputs
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
    const { token }: { token: string } = useSelector((state: any) => state.login);
    const { api } = useAxios();
    const dispatch = useDispatch();
    const { veiculo }: { veiculo: Veiculo } = useSelector((state: any) => state.veiculo);
    // const { abastecimento } = useSelector((state: any) => state.abastecimento);

    //objeto com as funções de cada tipo de formulario
    const actions: formType = {
        cadastroVeiculo: (veiculo: Veiculo) => {
            api.post("/veiculo/inserir", veiculo, {
                headers: {
                    authorization: token
                }
            })
                .then(() => {
                    dispatch(toggleModalCadastroVeiculoReducer())
                    dispatch(clearFormReducer())
                    dispatch(emitRefetchVeiculoReducer())
                })
                .catch((err) => {
                    alert("Erro ao inserir veiculo, confira os dados")
                })
        },
        cadastroAbastecimento: (abastecimento: Abastecimento) => {
            api.post("/abastecimento/inserir", abastecimento)
        }
    }
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(type === "cadastroVeiculo") {
            //se o schema for valido, executa a 
            //funçao do tipo de formulario correspondente
            schema.safeParse(veiculo).success? 
            actions[type](veiculo) : 
            alert("Dados inválidos")
        }
        // else {
        //     const result = schema.safeParse(abastecimento)
        // }
        

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