import { Container } from '@mui/material'
import styles from './dashboard.module.scss'
import { useAxios } from '../../hooks/UseAxios'
import { useEffect, useMemo, useState } from 'react';
import { GridColDef } from '@mui/x-data-grid';
import DataGridModel from '../data-grid-model';
import { Abastecimento } from '../../types'

export default function DashboardAbastecimentos() {
    const [abastecimentos, setAbastecimentos] = useState<Abastecimento[]>([]);
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
            { field: 'data', headerName: 'Data', editable: true },
            { field: 'valor', headerName: 'Valor', editable: true },
            { field: 'litros', headerName: 'Litros', editable: true },
            { field: 'tipo', headerName: 'Tipo', editable: true },
            { field: 'placa', headerName: 'Placa', editable: true },
        ]), []);

    return (
        <Container className={styles.containerAbastecimentos}>
            <DataGridModel rows={abastecimentos} columns={columns} />
        </Container>
    )
}