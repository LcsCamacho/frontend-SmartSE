import { FormControl, InputLabel, Input, FormHelperText, Backdrop } from '@mui/material';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleModalReducer } from '../../../features/redux/modal-slice';
import styles from './modal.module.scss';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function ModalLogin({ isOpen }: { isOpen: boolean }) {
    const [typePassword, setTypePassword] = useState('password');
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(toggleModalReducer())
    };

    return (
        <>
            <Modal
                open={isOpen}
                onClose={handleClose}
                className={styles.modal}
            >
                <Container className={styles.modalContent}>
                    <form className={styles.form}>
                        <FormControl>
                            <InputLabel htmlFor="my-input">Email</InputLabel>
                            <Input id="email"/>
                            <FormHelperText id="my-helper-text">exemplo@exemplo.com</FormHelperText>
                        </FormControl>
                        <FormControl className={styles.password}>
                            <InputLabel htmlFor="my-input">Senha</InputLabel>
                            <Input type={typePassword} id="senha"  />
                            <span className={styles.iconToggle} onClick={() => setTypePassword(typePassword === 'password' ? 'text' : 'password')}>
                                {typePassword === 'password' ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </span>
                            <FormHelperText id="my-helper-text">Mínimo 6 caracteres</FormHelperText>
                        </FormControl>
                    </form>
                </Container>
            </Modal>
        </>
    )
}

