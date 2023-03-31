import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModalCadastroVeiculoReducer } from '../../../features/redux/modal-slice';
import FormCadastros from '../../molecules/form-cadastros';
import styles from './modal.module.scss';

export default function ModalCadastro({ isOpen, type }: { isOpen: boolean, type: "cadastroVeiculo" | "cadastroAbastecimento" }) {
    const dispatch = useDispatch();
    const { login } = useSelector((state: any) => state.login)

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
                {login && <FormCadastros type={type} />}
                {!login && <h1>Faça login para cadastrar um veículo</h1>}
            </Container>
        </Modal>
    )
}

