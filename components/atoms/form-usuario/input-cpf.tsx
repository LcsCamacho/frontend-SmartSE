import { FormControl, InputLabel, Input, FormHelperText } from "@mui/material";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { loginSetCpfReducer } from "../../../features/redux/login-slice";
import { cadastroSetCpfReducer } from "../../../features/redux/cadastro-usuario-slice";
import { ChangeEvent } from "react";
import { IMaskInput } from "react-imask";

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
                mask="***.***.***-**"
                placeholder="123.456.789-10"
                definitions={{
                    '*': /[0-9]/,
                    '-': /[-]/,
                    '.': /[.]/,
                }}
                overwrite
            />
        );
    };
    
export default function InputCPF({ type }: { type: string }) {
    const [cpfState, setCpfState] = useState('')
    const dispatch = useDispatch();

    const setCpf = (event: ChangeEvent<HTMLInputElement>) => {
        if (type === "login") {
            setCpfState(event.target.value)
            dispatch(loginSetCpfReducer(event.target.value));
            return
        }
        if (type === "cadastro") {
            dispatch(cadastroSetCpfReducer(event.target.value));
            return
        }
    }

    return (
        <FormControl>
            <InputLabel>Cpf</InputLabel>
            <Input 
                inputComponent={MaskInput}
                onChange={setCpf} 
                value={cpfState}/>
        </FormControl>
    )
}