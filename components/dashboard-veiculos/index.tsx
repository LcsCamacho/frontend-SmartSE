import { Container } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAxios } from '../../hooks/UseAxios';
import { Veiculo } from "../../types";
import DataGridModel from '../data-grid-model';
import styles from './dashboard.module.scss';

export default function DashboardVeiculos() {
    const { emitRefetchVeiculo }: { emitRefetchVeiculo: boolean } = useSelector((state: any) => state.refetch)
    const [veiculos, setVeiculos] = useState<Veiculo[]>([]);
    const { api } = useAxios();


    useEffect(() => {
        api.get('/veiculo/listar')
            .then(({ data }) => {
                setVeiculos(data)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [emitRefetchVeiculo])

    const columns: GridColDef[] = useMemo(
        () => ([
            { field: 'id', headerName: 'ID', width: 50 },
            { field: 'marca', headerName: 'Marca', editable: true },
            { field: 'modelo', headerName: 'Modelo', editable: true },
            { field: 'ano', headerName: 'Ano', editable: true },
            { field: 'cor', headerName: 'Cor', editable: true },
            { field: 'placa', headerName: 'Placa', editable: true },
            { field: 'renavam', headerName: 'Renavam', editable: true, width: 125 },
        ]), [])


    return (
        <Container className={styles.containerVeiculos}>
            <DataGridModel type="veiculo" editModel="row" rows={veiculos} columns={columns} />
        </Container>
    )
}
