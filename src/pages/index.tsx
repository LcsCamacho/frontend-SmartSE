import styles from '@/styles/Home.module.scss';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Container, Divider, useMediaQuery } from '@mui/material';
import Head from 'next/head';
import { useEffect, useMemo, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AlertDialog from '../../components/confirmacoes/AlertDialog';
import DashboardAbastecimentos from '../../components/dashboard-abastecimentos';
import DashboardVeiculos from '../../components/dashboard-veiculos';
import HamburguerMenu from '../../components/icon-menu-mobile';
import Aside from '../../components/organisms/aside';
import Header from '../../components/organisms/header';
import ModalCadastro from '../../components/organisms/modal-cadastro';
import ModalUsuarioTemplate from '../../components/organisms/modal-usuario';
import { 
  toggleAlertVeiculoCadastroSuccess,
  toggleAlertAbastecimentoCadastroSuccess,
  toggleAlertAbastecimentoRemoveSuccess,
  toggleAlertVeiculoRemoveSuccess 
} from '../../features/redux/alert-slice';
import { openMobileMenuReducer } from '../../features/redux/mobile-menu-slice';

export default function Home() {
  //useStates
  const [dashboardVeiculos, setDashboardVeiculos] = useState(false);
  const [dashboardAbastecimentos, setDashboardAbastecimentos] = useState(false);

  //seletores do redux
  const modalLoginIsOpen = useSelector((state: any) => state.modal.modalLogin);
  const modalCadastroIsOpen = useSelector((state: any) => state.modal.modalCadastro);
  const showMobileMenu = useSelector((state: any) => state.mobileMenu.isOpen);
  const modalCadastroVeiculo = useSelector((state: any) => state.modal.modalCadastroVeiculo);
  const modalCadastroAbastecimento = useSelector((state: any) => state.modal.modalCadastroAbastecimento);
  const showAlertCadastroVeiculoSuccess = useSelector((state:any) => state.alert.alertVeiculoCadastroSuccess)
  const showAlertAbastecimentoCadastroSuccess = useSelector((state:any) => state.alert.alertAbastecimentoCadastroSuccess)
  const showAlertAbastecimentoRemoveSuccess = useSelector((state:any) => state.alert.alertAbastecimentoRemoveSuccess)
  const showAlertVeiculoRemoveSuccess = useSelector((state:any) => state.alert.alertVeiculoRemoveSuccess)
  
  //useMediaQuery do MUI Design
  const isMobile = useMediaQuery('(max-width:600px)');

  //useDispatch do redux
  const dispatch = useDispatch();

  //useMemo para abrir o menu mobile
  useEffect(() => {
    if (!isMobile) {
      dispatch(openMobileMenuReducer())
    }
  }, [isMobile, dispatch]);

  //funcao para remover o alert da dom ~~temporario
  const timeoutForRemoveAlert = (reducer: Function, time: number = 5000) => {
    const timeout:NodeJS.Timeout = setTimeout(()=> {
      dispatch(reducer())
    }, time)

    return timeout
  }

  //necessario para remover o alert da DOM ~~temporario
  useEffect(() => {

    if(showAlertVeiculoRemoveSuccess) {
      const timeout = timeoutForRemoveAlert(toggleAlertVeiculoRemoveSuccess);
      return () => clearTimeout(timeout)
    }
    if(showAlertCadastroVeiculoSuccess) {
      const timeout = timeoutForRemoveAlert(toggleAlertVeiculoCadastroSuccess);
      return () => clearTimeout(timeout)
    }
    if(showAlertAbastecimentoCadastroSuccess) {
      const timeout = timeoutForRemoveAlert(toggleAlertAbastecimentoCadastroSuccess);
      return () => clearTimeout(timeout)
    }
    if(showAlertAbastecimentoRemoveSuccess) {
      const timeout = timeoutForRemoveAlert(toggleAlertAbastecimentoRemoveSuccess);
      return () => clearTimeout(timeout)
    }
  }, [
    showAlertCadastroVeiculoSuccess, 
    showAlertVeiculoRemoveSuccess, 
    showAlertAbastecimentoCadastroSuccess, 
    showAlertAbastecimentoRemoveSuccess,
  ])

  const toggleListaVeiculos = () => setDashboardVeiculos(!dashboardVeiculos)
  const toggleListaAbastecimentos = () => setDashboardAbastecimentos(!dashboardAbastecimentos)

  return (
    <>
      <Head>
        <title>Abastecimento App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        {/* Menu Mobile estratégia para responsividade */}
        {isMobile && !showMobileMenu && <HamburguerMenu />}
        {showMobileMenu && <Aside />}

        {/* container da aplicação */}
        <Container className={styles.container}>
          <Header />
          <h1 className={styles.title}>Dashboard Geral</h1>
          <Divider />

          {/* span responsavel por fazer o toggle da lista de veiculos */}
          <span className={styles.listar}
            onClick={toggleListaVeiculos}>
            Listar Veiculos <span>{dashboardVeiculos ? "-" : "+"}</span>
          </span>
          {dashboardVeiculos && <DashboardVeiculos />}
          <Divider />

          {/* span responsavel por fazer o toggle da lista de abastecimentos */}
          <span className={styles.listar}
            onClick={toggleListaAbastecimentos}>
            Listar Abastecimentos <span>{dashboardAbastecimentos ? "-" : "+"}</span>
          </span>
          {dashboardAbastecimentos && <DashboardAbastecimentos />}
        </Container>
      </main>

      {/* Alerta de sucesso ao cadastrar veiculo */}
      {showAlertCadastroVeiculoSuccess && (
        <AlertDialog text={"Veiculo inserido com sucesso!"} color={"success"} speed={5}>
          <CheckCircleOutlineIcon color={'success'}/>
        </AlertDialog>
      )}

      {/* Alerta de sucesso ao cadastrar abastecimento */}
      {showAlertAbastecimentoCadastroSuccess && (
        <AlertDialog text={"Abastecimento inserido com sucesso!"} color={"success"} speed={5}>
          <CheckCircleOutlineIcon color={'success'}/>
        </AlertDialog>
      )}

      {/* Alerta de sucesso ao remover abastecimento */}
      {showAlertAbastecimentoRemoveSuccess && (
        <AlertDialog text={"Abastecimento removido com sucesso!"} color={"warning"} speed={5}>
          <CheckCircleOutlineIcon color={'warning'}/>
        </AlertDialog>
      )}

      {/* Alerta de sucesso ao remover veiculo */}
      {showAlertVeiculoRemoveSuccess && (
        <AlertDialog text={"Veiculo removido com sucesso!"} color={"warning"} speed={5}>
          <CheckCircleOutlineIcon color={'warning'} />
        </AlertDialog>
      )}

      {/* Modais */}
      <ModalUsuarioTemplate isOpen={modalLoginIsOpen} type="login" />
      <ModalUsuarioTemplate isOpen={modalCadastroIsOpen} type="cadastro" />
      <ModalCadastro isOpen={modalCadastroVeiculo} type='cadastroVeiculo' />
      <ModalCadastro isOpen={modalCadastroAbastecimento} type='cadastroAbastecimento' />
    </>
  )
}
