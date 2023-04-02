import LinearDeterminate from "./LinearProgressDeterminate";
import styles from './styles.module.scss'
import { Container, Box } from '@mui/material';

interface alertDialogProps {
    text: string
    speed: number
    children?: JSX.Element
    color: "primary" | "secondary" | "error" | "info" | "success" | "warning" | "inherit"
}

export default function AlertDialog({ text, speed, children, color }: alertDialogProps) {

    return (
        <Container maxWidth="lg"  className={styles.container}>
            <Box className={styles.text}>
                <span>{text}</span>
                {/* Children deve ser o icone */}
                {children}
            </Box>
            <Box className={styles.progress}>
                <LinearDeterminate color={color} speed={speed} />
            </Box>
        </Container>
    )
}