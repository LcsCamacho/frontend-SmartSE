import { Box } from "@mui/material";
import AbastecimentoItem from "../../atoms/aside-list/abastecimentos-item";
import VeiculoItem from "../../atoms/aside-list/veiculo-item";
import styles from '../../organisms/aside/aside.module.scss';

export default function MenuAside() {

    return (
        <Box className={styles.menu}>
            <span className={styles.title}>Inserir</span>
            <VeiculoItem />
            <AbastecimentoItem />
        </Box>
    )
}