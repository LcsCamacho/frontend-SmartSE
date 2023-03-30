import { Container } from '@mui/material'
import styles from './dashboard.module.scss'
import { useAxios } from '../../hooks/UseAxios'
import { useEffect, useMemo, useState } from 'react';
import { GridColDef } from '@mui/x-data-grid';
import DataGridModel from '../data-grid-model';
import { useSelector } from 'react-redux';
import { Veiculo } from "../../types"



export default function DashboardVeiculos() {
    const { emitInsertVeiculo }: { emitInsertVeiculo: boolean } = useSelector((state: any) => state.refetch)
    const [veiculos, setVeiculos] = useState<Veiculo[]>([]);
    const { api } = useAxios();

    const fetch = () => {
        api.get('/veiculo/listar')
            .then(({ data }) => {
                setVeiculos(data)
            })
    }
    useMemo(() => {
        fetch()
    }, [emitInsertVeiculo])

    const columns: GridColDef[] = useMemo(
        () => ([
            { field: 'id', headerName: 'ID', width: 50 },
            { field: 'marca', headerName: 'Marca', editable: true },
            { field: 'modelo', headerName: 'Modelo', editable: true },
            { field: 'ano', headerName: 'Ano', editable: true },
            { field: 'cor', headerName: 'Cor', editable: true },
            { field: 'placa', headerName: 'Placa', editable: true },
            { field: 'renavam', headerName: 'Renavam', editable: true },
        ]), [])

    const filter = () => {
        
    }


    return (
        <Container className={styles.containerVeiculos}>
            <DataGridModel editModel="row" rows={veiculos} columns={columns} />
        </Container>
    )
}