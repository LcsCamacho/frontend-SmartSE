import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { toggleModalCadastroReducer, toggleModalLoginReducer } from '../../../features/redux/modal-slice';
import Form from '../../molecules/form-usuario';
import styles from './modal.module.scss';

interface modalUsuarioProps {
    isOpen: boolean, 
    type: "cadastro" | "login" 
}

export default function ModalUsuarioTemplate({ isOpen, type }: modalUsuarioProps) {
    const dispatch = useDispatch();

    const handleClose = () => {
        if (type === 'login') {
            dispatch(toggleModalLoginReducer())
        }
        else {
            dispatch(toggleModalCadastroReducer())
        }
    }

    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            className={styles.modal}
        >
            <Container className={styles.modalContent}>
                <Form type={type} />
            </Container>
        </Modal>
    )
}

