import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import { ChangeEvent, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMaskInput } from "react-imask";
import { Abastecimento } from "../../../types";
import { setAbastecimentoReducer } from "../../../features/redux/cadastro-abastecimento-slice";

    // definitions é responsavel por o mask aceitar apenas o formato da placa
    // # = aceita letras
    // * = aceita numeros
    // x = aceita letrar e numeros
    // - = aceita apenas o traço

const MaskInput = (props: any) => {
    const { inputRef, ...other } = props;
    return (
        <IMaskInput
            {...other}
            ref={inputRef}
            mask="###-*x**"
            placeholder="AAA-1234"
            definitions={{
                '#': /[a-zA-Z]/,
                '*': /[0-9]/,
                'x': /[a-zA-Z0-9]/,
                '-': /[-]/,
            }}
            overwrite
        />
    );
};

    //adicionar um select com as placas dos veiculos cadastrados
export default function InputPlaca() {
    const [placaState, setPlacaState] = useState('');
    const dispatch = useDispatch();
    const { abastecimento }: {abastecimento: Abastecimento} = useSelector(
        (state:any) => state.abastecimento
    )
    const { valor, litros, tipo } = abastecimento

    const setPlaca = (e: ChangeEvent<HTMLInputElement>) => {
        setPlacaState(e.target.value)
    }
    
    useEffect(()=>{
        let data = {
            valor,
            placa: placaState,
            litros,
            tipo
        }
        dispatch(setAbastecimentoReducer(data))
    },[placaState])

    return (
        <FormControl>
            <InputLabel htmlFor="placa">Placa</InputLabel>
            <Input
                onChange={setPlaca}
                inputComponent={MaskInput} />
            <FormHelperText>Informe a Placa do carro</FormHelperText>
        </FormControl>
    )
}