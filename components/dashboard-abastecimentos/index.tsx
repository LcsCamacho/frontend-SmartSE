
import { Box, Container, Skeleton } from '@mui/material'
import styles from './dashboard.module.scss'
import { useAxios } from '../../hooks/UseAxios'
import { useEffect, useMemo, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DataGridModel from '../data-grid-model';

interface AbastecimentoType {
    id: number,
    data: Date,
    valor: number,
    litros: number,
    tipo: string,
    placa: string
}

export default function DashboardAbastecimentos() {
    const [abastecimentos, setAbastecimentos] = useState<AbastecimentoType[]>([]);
    const [loading, setLoading] = useState(true);
    const { api } = useAxios();
    useEffect(() => {
        api.get('/abastecimento/listar')
            .then(({ data }) => {
                setAbastecimentos(data)
            })
    }, [])

    const columns: GridColDef[] = useMemo(
        () => ([
            { field: 'id', headerName: 'ID', width: 50 },
            { field: 'data', headerName: 'Data' },
            { field: 'valor', headerName: 'Valor' },
            { field: 'litros', headerName: 'Litros' },
            { field: 'tipo', headerName: 'Tipo' },
            { field: 'placa', headerName: 'Placa' },
        ]), []);

    return (
        <Container className={styles.containerAbastecimentos}>
            <DataGridModel rows={abastecimentos} columns={columns} />
        </Container>
    )
}