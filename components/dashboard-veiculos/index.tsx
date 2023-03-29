import { Box, Container, Skeleton, Divider } from '@mui/material'
import styles from './dashboard.module.scss'
import { useAxios } from '../../hooks/UseAxios'
import { useEffect, useMemo, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import LinearProgress from '@mui/material/LinearProgress';
import DataGridModel from '../dataGridModel';

interface carType {
    id: number;
    marca: string;
    modelo: string;
    ano: string;
    cor: string;
    placa: string;
    renavam: string;
}

export default function DashboardVeiculos() {
    const [veiculos, setVeiculos] = useState<carType[]>([]);
    const [loading, setLoading] = useState(true);
    const { api } = useAxios();
    useEffect(() => {
        api.get('/veiculo/listar')
            .then(({ data }) => {
                setVeiculos(data)
            })
    }, [])

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

    useEffect(() => {
        console.log(veiculos)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [veiculos])


    return (
        <Container className={styles.containerVeiculos}>
            <DataGridModel rows={veiculos} columns={columns} />
        </Container>
    )
}