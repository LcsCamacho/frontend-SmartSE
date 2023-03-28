import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleModalReducer } from '../../../features/redux/modal-slice';
import styles from './modal.module.scss';
import FormLogin from '../../molecules/form-login';


export default function ModalLogin({ isOpen }: { isOpen: boolean }) {
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
                    <FormLogin />
                </Container>
            </Modal>
        </>
    )
}

