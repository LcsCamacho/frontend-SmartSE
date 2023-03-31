import { Container } from '@mui/material'
import styles from './dashboard.module.scss'
import { useAxios } from '../../hooks/UseAxios'
import { useMemo, useState } from 'react';
import { GridColDef } from '@mui/x-data-grid';
import DataGridModel from '../data-grid-model';
import { Abastecimento } from '../../types'
import { useSelector } from 'react-redux';

export default function DashboardAbastecimentos() {
    const [abastecimentos, setAbastecimentos] = useState<Abastecimento[]>([]);
    const { emitRefetchAbastecimento }: { emitRefetchAbastecimento: boolean } = useSelector((state: any) => state.refetch)


    const { api } = useAxios();
    useMemo(() => {
        api.get('/abastecimento/listar')
            .then(({ data }) => {
                setAbastecimentos(data)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [emitRefetchAbastecimento])

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
            <DataGridModel type="abastecimento" editModel="row" rows={abastecimentos} columns={columns} />
        </Container>
    )
}