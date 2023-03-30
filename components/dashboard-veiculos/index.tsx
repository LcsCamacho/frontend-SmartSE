import { Container } from '@mui/material'
import styles from './dashboard.module.scss'
import { useAxios } from '../../hooks/UseAxios'
import { useEffect, useMemo, useState } from 'react';
import { GridColDef } from '@mui/x-data-grid';
import DataGridModel from '../data-grid-model';
import { useSelector } from 'react-redux';
import { Veiculo } from "../../types"


export default function DashboardVeiculos() {
    const refetch = useSelector((state: any) => state.refetch)
    const [veiculos, setVeiculos] = useState<Veiculo[]>([]);
    const { api } = useAxios();

    useEffect(() => {
        console.log({redux: refetch})
        // api.get('/veiculo/listar')
        //     .then(({ data }) => {
        //         setVeiculos(data)
        //     })
    }, [refetch])

    const columns: GridColDef[] = useMemo(
        () => ([
            { field: 'id', headerName: 'ID', width: 50 },
            { field: 'marca', headerName: 'Marca' },
            { field: 'modelo', headerName: 'Modelo' },
            { field: 'ano', headerName: 'Ano' },
            { field: 'cor', headerName: 'Cor' },
            { field: 'placa', headerName: 'Placa' },
            { field: 'renavam', headerName: 'Renavam' },
        ]), [])


    return (
        <Container className={styles.containerVeiculos}>
            <DataGridModel rows={veiculos} columns={columns} />
        </Container>
    )
}