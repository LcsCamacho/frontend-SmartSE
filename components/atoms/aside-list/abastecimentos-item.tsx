import { Box } from '@mui/material';
import { FaGasPump } from 'react-icons/fa';
import styles from '/components/organisms/aside/aside.module.scss';

export default function AbastecimentoItem() {
    return (
        <Box className={styles.menuItem}>
            <FaGasPump />
            <span>Abastecimentos</span>
        </Box>
    )
}