import { Box } from "@mui/material";
import AbastecimentoItem from "../atoms/aside-list/abastecimentosItem";
import CarroItem from "../atoms/aside-list/carroItem";
import styles from '../organisms/aside/aside.module.scss'

export default function MenuAside() {

    return (
        <Box className={styles.menu}>
            <span className={styles.title}>Listas</span>
            <CarroItem />
            <AbastecimentoItem  />
        </Box>
    )
}