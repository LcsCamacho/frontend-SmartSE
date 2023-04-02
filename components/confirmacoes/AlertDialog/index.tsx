import LinearDeterminate from "./LinearProgressDeterminate";
import styles from './styles.module.scss'
import { Container, Box } from '@mui/material';

export default function AlertDialog({ text, time, children, color }: any) {

    return (
        <Container maxWidth="lg"  className={styles.container}>
            <Box className={styles.text}>
                <span>{text}</span>
                {/* Children deve ser o icone */}
                {children}
            </Box>
            <Box className={styles.progress}>
                <LinearDeterminate color={color} time={time} />
            </Box>
        </Container>
    )
}