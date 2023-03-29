import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { toggleModalLoginReducer, toggleModalCadastroReducer } from '../../../features/redux/modal-slice';
import Form from '../../molecules/form-usuario';
import styles from './modal.module.scss';

export default function ModalUsuarioTemplate({ isOpen, type }: { isOpen: boolean, type: "cadastro" | "login" }) {
    const dispatch = useDispatch();

    const handleClose = () => {
        if ( type === 'login' ) {
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

