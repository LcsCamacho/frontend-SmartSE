import { FormControl, FormHelperText, Input, InputAdornment, InputLabel, TextField } from "@mui/material";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVeiculoReducer } from "../../../features/redux/cadastro-veiculo-slice";
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

export default function InputPlaca() {
    const dispatch = useDispatch();
    const {veiculo} = useSelector((state: any) => state.veiculo);    
    const {ano, marca, modelo, cor, renavam, potencia} = veiculo

    const setPlaca = (e: ChangeEvent<HTMLInputElement>) => {
        let data = {
            ano,
            marca,
            modelo,
            cor,
            renavam,
            potencia,
            placa: e.target.value
        }
        dispatch(setVeiculoReducer(data))
    }

    return (
        <>
            <InputLabel htmlFor="placa">Placa</InputLabel>
            <Input
                onChange={setPlaca}
                value={veiculo.placa}
                inputComponent={MaskInput} />
            <FormHelperText>Informe a Placa do carro</FormHelperText>
        </>
    )
}