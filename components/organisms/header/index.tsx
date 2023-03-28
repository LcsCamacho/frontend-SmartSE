import styles from './header.module.scss'
import { Box, Button, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModalLoginReducer } from '../../../features/redux/modal-slice';
import { logOffReducer } from '../../../features/redux/login-slice';

export default function Header() {
    const dispatch = useDispatch();
    const usuario = useSelector((state: any) => state.login);

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
                    <>
                    <Box className={styles.buttonLogin}>
                        <Button
                            onClick={() => dispatch(toggleModalLoginReducer())}
                            variant="contained">
                            Entrar
                        </Button>
                    </Box>
                    <Box className={styles.cadastrarLogin}>
                        <Button
                            variant="contained">
                            Cadastrar
                        </Button>
                    </Box>
                    </>
                )
            }

        </Container >
    )
}