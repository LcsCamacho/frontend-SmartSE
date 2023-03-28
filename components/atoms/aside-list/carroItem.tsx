import { Box } from "@mui/material";
import { AiFillCar } from "react-icons/ai";
import styles from '/components/organisms/aside/aside.module.scss';

export default function CarroItem() {
    return (
        <Box className={styles.menuItem}>
            <AiFillCar />
            <span>Carros</span>
        </Box>
    )
}