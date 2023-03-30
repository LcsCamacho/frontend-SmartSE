import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { toggleModalCadastroVeiculoReducer } from '../../../features/redux/modal-slice';
import styles from './modal.module.scss';
import { FormGroup } from '@mui/material';
import FormCadastros from '../../molecules/form-cadastros';

export default function ModalCadastro({ isOpen, type }: { isOpen: boolean, type: "cadastroVeiculo" | "cadastroAbastecimento" }) {
    const dispatch = useDispatch();

    const handleClose = () => {
        if (type === 'cadastroVeiculo') {
            dispatch(toggleModalCadastroVeiculoReducer())
        }
    };


/* Cadastro de veículos - CRUD -  com descrição do veículo (placa, renavam, cor, potência, modelo, marca etc); */

    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            className={styles.modal}
        >
            <Container maxWidth="lg" className={styles.modalContent}>
                <FormCadastros type={type} />
            </Container>
        </Modal>
    )
}

