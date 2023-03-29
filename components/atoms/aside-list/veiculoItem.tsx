import { Box } from "@mui/material";
import { AiFillCar } from "react-icons/ai";
import styles from '/components/organisms/aside/aside.module.scss';
import { useDispatch } from "react-redux";
import { toggleModalCadastroVeiculoReducer } from "../../../features/redux/modal-slice";

export default function VeiculoItem() {

    const dispatch = useDispatch();

    return (
        <Box
            onClick={() => dispatch(toggleModalCadastroVeiculoReducer())}
            className={styles.menuItem}>
            <AiFillCar />
            <span>Veiculos</span>
        </Box>
    )
}