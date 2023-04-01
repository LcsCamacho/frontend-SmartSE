import { Button } from "@mui/material";
import { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearFormVeiculoReducer } from "../../../features/redux/cadastro-veiculo-slice";
import { clearFormAbastecimentoReducer } from "../../../features/redux/cadastro-abastecimento-slice";
import { toggleModalCadastroVeiculoReducer, toggleModalCadastroAbastecimentoReducer } from "../../../features/redux/modal-slice";
import { emitRefetchVeiculoReducer, emitRefetchAbastecimentoReducer } from "../../../features/redux/refetch-slice";
import { useAxios } from '../../../hooks/UseAxios';
import { Abastecimento, Veiculo, abastecimentoSchema, veiculoSchema } from '../../../types';

import styles from './form.module.scss';

//inputs abastecimento
import InputLitros from "../../atoms/form-abastecimento/input-litros";
import InputTipo from "../../atoms/form-abastecimento/input-tipo";
import InputValor from "../../atoms/form-abastecimento/input-valor";
import InputPlacaAbastecimento from '../../atoms/form-abastecimento/input-placa';

//inputs veiculo
import InputAno from '../../atoms/form-veiculo/input-ano';
import InputCor from '../../atoms/form-veiculo/input-cor';
import InputMarca from '../../atoms/form-veiculo/input-marca';
import InputModelo from '../../atoms/form-veiculo/input-modelo';
import InputPlacaVeiculo from '../../atoms/form-veiculo/input-placa';
import InputPotencia from '../../atoms/form-veiculo/input-potencia';
import InputRenavam from '../../atoms/form-veiculo/input-renavam';

//interface com as funções de cada tipo de formulario
interface formType {
    cadastroVeiculo: (veiculo: Veiculo) => void,
    cadastroAbastecimento: (abastecimento: Abastecimento) => void
}

export default function FormCadastros({ type }: { type: 'cadastroVeiculo' | 'cadastroAbastecimento' }) {
    const dispatch = useDispatch();
    const { token }: { token: string } = useSelector((state: any) => state.login);
    const { api } = useAxios();
    const { veiculo }: { veiculo: Veiculo } = useSelector((state: any) => state.veiculo);
    const { abastecimento } = useSelector((state: any) => state.abastecimento);
    const options = {
        headers: {
            authorization: token
        }
    }
    //objeto com as funções de cada tipo de formulario
    const actions: formType = {
        cadastroVeiculo: (veiculo: Veiculo) => {
            api.post("/veiculo/inserir", veiculo, options)
                .then(() => {
                    dispatch(toggleModalCadastroVeiculoReducer())
                    dispatch(clearFormVeiculoReducer())
                    dispatch(emitRefetchVeiculoReducer())
                })
                .catch((err) => {
                    alert("Erro ao inserir veiculo, confira os dados")
                })
        },
        cadastroAbastecimento: (abastecimento: Abastecimento) => {
            api.post("/abastecimento/inserir", abastecimento, options)
                .then(() => {
                    dispatch(toggleModalCadastroAbastecimentoReducer())
                    dispatch(clearFormAbastecimentoReducer())
                    dispatch(emitRefetchAbastecimentoReducer())
                })
                .catch((err) => {
                    console.log({err})
                    alert("Erro ao inserir abastecimento, confira os dados")
                })
        }
    }
    
        // Função que trata os dados do input e faz a requisição em caso
        // de os dados estarem corretos
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (type === "cadastroVeiculo") {
            veiculoSchema.safeParse(veiculo).success ?
                actions[type](veiculo) :
                alert("Dados inválidos")
                return
        }
        if (type === "cadastroAbastecimento") {
            console.log(abastecimento)
            // abastecimentoSchema.safeParse(abastecimento).success ?
            //     actions[type](abastecimento) :
            //     alert("Dados inválidos")
            return
        }
    }

    const CadastroVeiculoInputs = () => {
        return (
            <>
                <InputPotencia />
                <InputPlacaVeiculo />
                <InputCor />
                <InputRenavam />
                <InputModelo />
                <InputMarca />
                <InputAno />
            </>
        )
    }

    const CadastroAbastecimentoInputs = () => {
        return (
            <>
                <InputLitros />
                <InputValor />
                <InputTipo />
                <InputPlacaAbastecimento />
            </>
        )
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            {type === "cadastroVeiculo" && <CadastroVeiculoInputs />}

            {type === "cadastroAbastecimento" && <CadastroAbastecimentoInputs />}
            
            <Button
                type="submit"
                variant="contained"
                color="primary">
                Inserir
            </Button>
        </form>
    )
}