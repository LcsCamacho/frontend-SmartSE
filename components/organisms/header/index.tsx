import styles from './header.module.scss'
import { Box, Button, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModalReducer } from '../../../features/redux/modal-slice';
import { logOffReducer } from '../../../features/redux/user-slice';
import { useEffect } from 'react';

export default function Header() {
    const dispatch = useDispatch();
    const usuario = useSelector((state: any) => state.user);

        return (
        <Container maxWidth="lg" className={styles.header}>
            {
                usuario.login ? (
                    <Box className={styles.usuario}>
                        <span>Olá, {usuario.cpf}</span>
                        <Button
                            variant="contained"
                            className={styles.button}
                            onClick={() => dispatch(logOffReducer())}>
                            Sair
                        </Button>
                    </Box>
                ) : (
                    <Box className={styles.buttonLogin}>
                        <Button
                            onClick={() => dispatch(toggleModalReducer())}
                            variant="contained">
                            Entrar
                        </Button>
                    </Box>
                )
            }

        </Container >
    )
}