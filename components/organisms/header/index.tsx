import { Box, Button, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logOffReducer } from '../../../features/redux/login-slice';
import { toggleModalCadastroReducer, toggleModalLoginReducer } from '../../../features/redux/modal-slice';
import styles from './header.module.scss';

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
                                onClick={() => dispatch(toggleModalCadastroReducer())}
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