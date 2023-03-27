import styles from './header.module.scss'
import { Box, Button, Container, useMediaQuery } from '@mui/material';
import { useDispatch } from 'react-redux';
import { toggleModalReducer } from '../../../features/redux/modal-slice';

export default function Header() {
    const isMobile = useMediaQuery('(max-width:600px)');    
    const dispatch = useDispatch();

    return (
        <Container
            maxWidth="lg"
            className={styles.header}>
            <Box className={styles.usuario}>
                
                <span>Seja bem vindo {'usuario'}</span>
            </Box>
            <Box className={styles.buttonLogin}>
                <Button 
                    onClick={() => dispatch(toggleModalReducer())} 
                    variant="contained">
                    Entrar
                </Button>
            </Box>
        </Container>
    )
}