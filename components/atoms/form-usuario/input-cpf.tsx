import { FormControl, Input, InputLabel, InputProps  } from "@mui/material";
import { ChangeEvent, useState, useEffect, forwardRef, useRef } from "react";
import { IMaskInput } from "react-imask";
import { useDispatch } from "react-redux";
import { cadastroSetCpfReducer } from "../../../features/redux/cadastro-usuario-slice";
import { loginSetCpfReducer } from "../../../features/redux/login-slice";

// definitions é responsavel por o mask aceitar apenas o formato da placa
// # = aceita letras
// * = aceita numeros
// x = aceita letrar e numeros
// - = aceita apenas o traço
const MaskInput = forwardRef((props: any, maskRef:any) => {
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
})

interface MaskedInputProps extends InputProps {}

export const InputCpf = forwardRef<HTMLDivElement, MaskedInputProps>((props, ref) => {
    const dispatch = useDispatch();
    const inputRef = useRef(null) // cria uma ref padrão
    const { type } = props
    const [cpf, setCpfState] = useState("")

    // Verifica se a propriedade ref foi passada para o componente
    // e atualiza a ref padrão com a ref do componente pai
    // necessario para evitar o erro: 'caller', 'callee', and 'arguments' 
    // properties may not be accessed on strict mode functions or the arguments objects for calls to them
    useEffect(() => {
        if (ref) {
            if (typeof ref === 'function') {
                ref(inputRef.current);
            } else {
                ref.current = inputRef.current;
            }
        }
      }, [ref]);

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
                ref={inputRef}
                onChange={setCpf}
                value={cpf}
                inputComponent={MaskInput} />
        </FormControl>
    )
})