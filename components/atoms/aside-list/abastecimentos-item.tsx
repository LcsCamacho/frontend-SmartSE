import { Box } from '@mui/material';
import { FaGasPump } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { toggleModalCadastroAbastecimentoReducer } from "../../../features/redux/modal-slice";
import styles from '/components/organisms/aside/aside.module.scss';

export default function AbastecimentoItem() {
    const dispatch = useDispatch();
    
    const handleClick = () => dispatch(toggleModalCadastroAbastecimentoReducer())

    return (
        <Box 
            className={styles.menuItem} 
            onClick={handleClick}>
            <FaGasPump />
            <span>Abastecimentos</span>
        </Box>
    )
}