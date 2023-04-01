import { FormControl, Input, InputLabel } from "@mui/material";
import { ChangeEvent, useState, useEffect } from "react";
import { IMaskInput } from "react-imask";
import { useDispatch } from "react-redux";
import { cadastroSetCpfReducer } from "../../../features/redux/cadastro-usuario-slice";
import { loginSetCpfReducer } from "../../../features/redux/login-slice";

// definitions é responsavel por o mask aceitar apenas o formato da placa
// # = aceita letras
// * = aceita numeros
// x = aceita letrar e numeros
// - = aceita apenas o traço
const MaskInput = (props: any) => {
    const { inputRef, value, ...other } = props;
    return (
        <IMaskInput
            {...other}
            ref={inputRef}
            value={value}
            mask="***.***.***-**"
            placeholder="123.456.789-10"
            definitions={{
                '*': /[0-9]/,
                '.': /[.]/,
                '-': /[-]/,
            }}
            overwrite
        />
    );
};


export default function InputCPF({ type }: { type: string }) {
    const dispatch = useDispatch();
    const [cpf, setCpfState] = useState("")

    const setCpf = (event: ChangeEvent<HTMLInputElement>) => {
        setCpfState(event.target.value)
    }
    
    useEffect(() => {
        if (type === "login") {
            dispatch(loginSetCpfReducer(cpf));
        }
        if (type === "cadastro") {
            dispatch(cadastroSetCpfReducer(cpf));
        }
    }, [cpf])
    

    return (
        <FormControl>
            <InputLabel>Cpf</InputLabel>
            <Input
                onChange={setCpf}
                value={cpf}
                inputComponent={MaskInput} />
        </FormControl>
    )
}