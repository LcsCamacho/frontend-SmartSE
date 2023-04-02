import { Container } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAxios } from '../../hooks/UseAxios';
import { Abastecimento } from '../../types';
import DataGridModel from '../data-grid-model';
import styles from './dashboard.module.scss';

export default function DashboardAbastecimentos() {
    const [abastecimentos, setAbastecimentos] = useState<Abastecimento[]>([]);
    const { emitRefetchAbastecimento }: { emitRefetchAbastecimento: boolean } = useSelector((state: any) => state.refetch)

    const { api } = useAxios();
    useEffect(() => {
        api.get('/abastecimento/listar')
            .then(({ data }) => {
                setAbastecimentos(data)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [emitRefetchAbastecimento])

    const columns: GridColDef[] = useMemo(
        () => ([
            { field: 'id', headerName: 'ID', width: 50 },
            { field: 'data', headerName: 'Data', editable: true, width: 115 },
            { field: 'valor', headerName: 'Valor', editable: true, width: 75 },
            { field: 'litros', headerName: 'Litros', editable: true, width: 75 },
            { field: 'tipo', headerName: 'Tipo', editable: true, width: 160 },
            { field: 'placa', headerName: 'Placa', editable: true },
        ]), []);

    return (
        <Container className={styles.containerAbastecimentos}>
            <DataGridModel type="abastecimento" editModel="row" rows={abastecimentos} columns={columns} />
        </Container>
    )
}