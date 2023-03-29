import { DataGrid, GridColDef, GridSkeletonCell } from '@mui/x-data-grid';
import { Box, Skeleton } from '@mui/material'
import styles from './datagrid.module.scss'
import { useState, useEffect } from 'react';

interface dataGridProps {
    columns: Array<GridColDef>,
    rows: Array<any>
    rowsPerPage?: number,
    rowsPerPageOptions?: Array<number>,
    page?: number,
    onPageChange?: Function,
    onRowsPerPageChange?: Function
}

export default function DataGridModel(props: dataGridProps) {
    const [loading, setLoading] = useState(true);
    const { columns, rows } = props;

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [rows])

    return (
        <Box className={styles.dataGridModelContainer}>
            {loading ? (<>
                <Skeleton variant="rectangular" width={'100%'} animation="wave" >
                    <DataGrid
                        rows={rows}
                        columns={columns} />
                </Skeleton>

            </>) :
                <DataGrid
                    loading={loading}
                    {...props}
                    checkboxSelection
                    disableRowSelectionOnClick
                    autoHeight
                    rows={rows}
                    columns={columns} />
            }
        </Box>
    )
}