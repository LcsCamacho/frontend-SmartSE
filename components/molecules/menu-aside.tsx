import { Box } from "@mui/material";
import AbastecimentoItem from "../atoms/aside-list/abastecimentosItem";
import VeiculoItem from "../atoms/aside-list/veiculoItem";
import styles from '../organisms/aside/aside.module.scss'

export default function MenuAside() {

    return (
        <Box className={styles.menu}>
            <span className={styles.title}>Inserir</span>
            <VeiculoItem />
            <AbastecimentoItem  />
        </Box>
    )
}