import { Button } from "@mui/material";
import { FormEvent } from 'react';

//imports redux 
import { emitRefetchVeiculoReducer, emitRefetchAbastecimentoReducer } from "../../../features/redux/refetch-slice";
import { toggleModalCadastroVeiculoReducer, toggleModalCadastroAbastecimentoReducer } from "../../../features/redux/modal-slice";
import { toggleAlertVeiculoCadastroSuccess, toggleAlertAbastecimentoCadastroSuccess } from "../../../features/redux/alert-slice";
import { useDispatch, useSelector } from 'react-redux';

//import types
import { Abastecimento, Veiculo, abastecimentoSchema, veiculoSchema } from '../../../types';

//imports hooks 
import { useAxios } from '../../../hooks/UseAxios';

//import style 
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
import InputValorOuLitro from "../../atoms/form-abastecimento/input-valor-ou-litro";

//interface com as funções de cada tipo de formulario
interface formType {
    cadastroVeiculo: (veiculo: Veiculo) => void,
    cadastroAbastecimento: (abastecimento: Abastecimento) => void
}

const clearForm = () => {
    localStorage.clear();
}

export default function FormCadastros({ type }: { type: 'cadastroVeiculo' | 'cadastroAbastecimento' }) {
    const dispatch = useDispatch();
    const { api } = useAxios();

    const { token }: { token: string } = useSelector((state: any) => state.login);
    // const { veiculo }: { veiculo: Veiculo } = useSelector((state: any) => state.veiculo);
    // const { abastecimento } = useSelector((state: any) => state.abastecimento);
    const { tipo } = useSelector((state: any) => state.abastecimento);

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
                    clearForm()
                    dispatch(toggleModalCadastroVeiculoReducer())
                    dispatch(emitRefetchVeiculoReducer())
                    dispatch(toggleAlertVeiculoCadastroSuccess())
                })
                .catch((err) => {
                    alert("Erro ao inserir veiculo, confira os dados")
                })
        },
        cadastroAbastecimento: (abastecimento: Abastecimento) => {
            api.post("/abastecimento/inserir", abastecimento, options)
                .then(() => {
                    clearForm()
                    dispatch(toggleModalCadastroAbastecimentoReducer())
                    dispatch(emitRefetchAbastecimentoReducer())
                    dispatch(toggleAlertAbastecimentoCadastroSuccess())
                })
                .catch((err) => {
                    alert("Erro ao inserir abastecimento, confira os dados")
                })
        }
    }
    // exemplo de retorno de como função getItemsLocalStorage funciona
    // let arr = ["ano", "cor", "marca", "modelo", "placa", "potencia", "renavam"]
    // o codigo abaixo faz a mesma coisa que veiculo = getItemsLocalStorage(arr)
    // const veiculo:Veiculo = {
    //     ano: localStorage.getItem("ano") || '' ,
    //     cor: localStorage.getItem("cor") || '',
    //     marca: localStorage.getItem("marca") || '',
    //     modelo: localStorage.getItem("modelo") || '',
    //     placa: localStorage.getItem("placa") || '',
    //     potencia: localStorage.getItem("potencia") || '',
    //     renavam: localStorage.getItem("renavam") || '',
    // }
    const getItemsLocalStorage = (array: Array<string>) => {
        //converte o array em um array de objetos coletados do localStorage
        const items = array.map((item: string) => {
            return {
                [item]: localStorage.getItem(item)
            }
        })

        //converte o array de objetos em um objeto unico
        const objetoUnico: any = items.reduce((obj: any, item: any) => {
            return {
                ...obj,
                ...item
            };
        }, {});

        return objetoUnico
    }

    const calculaValorOuLitro = () => {
        if(tipo === "Litro") {
            const litro = Number(localStorage.getItem("litros"))
            localStorage.setItem("valor", String(litro * 5))
        }
        if(tipo === "Valor") {
            const valor = Number(localStorage.getItem("valor"))
            localStorage.setItem("litros", String(valor / 5))
        }
    }


    // Função que trata os dados do input e faz a requisição em caso
    // de os dados estarem corretos
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        calculaValorOuLitro()
        if (type === "cadastroVeiculo") {
            const arr = ["ano", "cor", "marca", "modelo", "placa", "potencia", "renavam"]
            const veiculo: Veiculo = getItemsLocalStorage(arr)
            const result = veiculoSchema.safeParse(veiculo)
            if(result.success) {
                actions[type](veiculo) 
                return
            }
            alert("Dados inválidos")
        }
        if (type === "cadastroAbastecimento") {
            const arr = ["litros", "valor", "tipo", "placa"]
            const abastecimento: Abastecimento = getItemsLocalStorage(arr)
            const result = abastecimentoSchema.safeParse(abastecimento)
            if(result.success) {
                actions[type](abastecimento)
                return
            }
            alert("Dados inválidos")
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
                <InputValorOuLitro />
                {tipo === "Valor" && <InputValor />}
                {tipo === "Litro" && <InputLitros />}
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