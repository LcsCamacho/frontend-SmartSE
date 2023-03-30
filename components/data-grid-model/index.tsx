import { DataGrid, GridCallbackDetails, GridColDef, GridEventListener, GridRowModesModel, GridSkeletonCell } from '@mui/x-data-grid';
import { Box, Skeleton } from '@mui/material'
import styles from './datagrid.module.scss'
import { useState, useEffect } from 'react';

interface dataGridProps {
    columns: Array<GridColDef>,
    checkboxSelection?: boolean
    editModel?: "row" | ''
    onPageChange?: Function,
    onRowsPerPageChange?: Function
    onRowModesModelChange?: ((rowModesModel: GridRowModesModel, details: GridCallbackDetails<any>) => void)
    onRowEditStart?: GridEventListener<any>
    onRowEditStop?: GridEventListener<any>
    page?: number,
    processRowUpdate?: ((newRow: any, oldRow: any) => any)
    rows: Array<any>
    rowsPerPage?: number,
    rowsPerPageOptions?: Array<number>,
    rowModesModel?: GridRowModesModel
    filter?: (row: any) => boolean
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
                    autoHeight
                    rows={rows}
                    columns={columns} />
            }
        </Box>
    )
}