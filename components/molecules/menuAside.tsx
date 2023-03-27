import { Box } from "@mui/material";
import { MenuAsideItemProps } from "../../types";
import AbastecimentoItem from "../atoms/abastecimentos";
import CarroItem from "../atoms/carroItem";
import styles from '../organisms/aside/aside.module.scss'

export default function MenuAside() {

    return (
        <Box className={styles.menu}>
            <span className={styles.title}>Listas</span>
            <CarroItem className={styles.menuItem} />
            <AbastecimentoItem className={styles.menuItem} />
        </Box>
    )
}