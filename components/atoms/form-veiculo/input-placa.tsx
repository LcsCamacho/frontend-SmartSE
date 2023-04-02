import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import { ChangeEvent, useState, useEffect, forwardRef, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVeiculoReducer } from "../../../features/redux/cadastro-veiculo-slice";
import { IMaskInput } from "react-imask";
import { Veiculo } from "../../../types";

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
                value={value}
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
    

export default function InputPlaca() {
    const [placaState, setPlacaState] = useState('');
    // const dispatch = useDispatch();
    // const {veiculo}: {veiculo:Veiculo} = useSelector((state: any) => state.veiculo);    

    const setPlaca = (e: ChangeEvent<HTMLInputElement>) => {
        const placa = e.target.value
        localStorage.setItem("placa",placa)
        setPlacaState(placa)
    }

    return (
        <FormControl>
            <InputLabel htmlFor="placa">Placa</InputLabel>
            <Input
                onChange={setPlaca}
                value={placaState}
                inputComponent={MaskInput} />
            <FormHelperText>Informe a Placa do carro</FormHelperText>
        </FormControl>
    )
}