import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { toggleModalLoginReducer } from '../../../features/redux/modal-slice';
import FormLogin from '../../molecules/form';
import styles from './modal.module.scss';



export default function ModalLogin({ isOpen }: { isOpen: boolean }) {
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(toggleModalLoginReducer())
    };

    return (
        <>
            <Modal
                open={isOpen}
                onClose={handleClose}
                className={styles.modal}
            >
                <Container className={styles.modalContent}>
                    <FormLogin type={'login'} />
                </Container>
            </Modal>
        </>
    )
}

