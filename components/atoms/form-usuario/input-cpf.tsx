import { FormControl, Input, InputLabel } from "@mui/material";
import { ChangeEvent } from "react";
import { IMaskInput } from "react-imask";
import { useDispatch, useSelector } from "react-redux";
import { cadastroSetCpfReducer } from "../../../features/redux/cadastro-usuario-slice";
import { loginSetCpfReducer } from "../../../features/redux/login-slice";

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
                '.': /[.]/,
                '-': /[-]/,
            }}
            overwrite
        />
    );
};


export default function InputCPF({ type }: { type: string }) {
    const cpf = useSelector((state: any) => state.login.cpf)
    const dispatch = useDispatch();

    const setCpf = (event: ChangeEvent<HTMLInputElement>) => {
        if (type === "login") {
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
                onChange={setCpf}
                value={cpf}
                inputComponent={MaskInput} />
        </FormControl>
    )
}