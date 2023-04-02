import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import { ChangeEvent, useState, useEffect, forwardRef, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMaskInput } from "react-imask";
import { Abastecimento } from "../../../types";
import { setAbastecimentoReducer } from "../../../features/redux/cadastro-abastecimento-slice";

// definitions é responsavel por o mask aceitar apenas o formato da placa
// # = aceita letras
// * = aceita numeros
// x = aceita letrar e numeros
// - = aceita apenas o traço

const MaskInput = forwardRef((props: any, maskRef: any) => {
    const { value, ...other } = props;
    const inputRef = useRef(null); // cria uma ref padrão

    // Verifica se a propriedade ref foi passada para o componente
    // e atualiza a ref padrão com a ref do componente pai
    useEffect(() => {
        if (maskRef) {
            if (typeof maskRef === 'function') {
                maskRef(inputRef.current);
            } else {
                maskRef.current = inputRef.current;
            }
        }
    }, [maskRef]);

    return (
        <IMaskInput
            {...other}
            inputRef={inputRef}
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
})


//adicionar um select com as placas dos veiculos cadastrados
export default function InputPlaca() {
    // const [placaState, setPlacaState] = useState('');
    // const dispatch = useDispatch();
    // const { abastecimento }: { abastecimento: Abastecimento } = useSelector(
    //     (state: any) => state.abastecimento
    // )

    const setPlaca = (e: ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem('placa', e.target.value)
    }



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