import CancelIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { Box, Skeleton } from '@mui/material';
import {
    DataGrid,
    GridActionsCellItem,
    GridCallbackDetails,
    GridColDef,
    GridEventListener,
    GridRowId,
    GridRowModel,
    GridRowModes,
    GridRowModesModel,
    GridRowParams,
    MuiEvent
} from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAxios } from '../../hooks/UseAxios';
import styles from './datagrid.module.scss';
import { Veiculo } from '../../types';
import { z } from 'zod'
import { useDispatch } from 'react-redux';
import { emitRefetchVeiculoReducer } from '../../features/redux/refetch-slice';


const PlacaRegex = new RegExp('[a-zA-Z]{3}[-][0-9][a-z0-9A-Z][0-9]{2}')

const veiculoSchema = z.object({
    placa: z.string().regex(PlacaRegex),
    renavam: z.string().length(11),
    cor: z.string().max(12),
    potencia: z.string(),
    modelo: z.string(),
    marca: z.string(),
    ano: z.string().max(4),
})

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

const handleRowEditStart = (
    params: GridRowParams,
    event: MuiEvent<React.SyntheticEvent>,
) => {
    event.defaultMuiPrevented = true;
};
const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
    event.defaultMuiPrevented = true;
};



export default function DataGridModel(props: dataGridProps) {
    const [loading, setLoading] = useState(true);
    const [rowsState, setRowsState] = useState<any>([]);
    const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});
    const { columns, rows } = props;
    const { api } = useAxios();
    const { token } = useSelector((state: any) => state.login);
    const dispatch = useDispatch();

    const handleEditClick = (id: GridRowId) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    };

    const handleSaveClick = (id: GridRowId) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    };

    const handleDeleteClick = (id: GridRowId) => () => {
        api.delete(`/veiculo/deletar/${id}`,{
            headers:{
                authorization: token
            }
        })
        setRowsState(rows.filter((row) => row.id !== id));
    };

    const handleCancelClick = (id: GridRowId) => () => {
        setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View, ignoreModifications: true },
        });
        const editedRow = rows.find((row) => row.id === id);
        if (editedRow!.isNew) {
            setRowsState(rows.filter((row) => row.id !== id));
        }
    };

    const processRowUpdate = (newRow: GridRowModel<Veiculo>) => {
        const result = veiculoSchema.safeParse(newRow)
        const updatedRow = { ...newRow, isNew: false };
        if (result.success) {
            dispatch(emitRefetchVeiculoReducer())
            setRowsState(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
            api.put(`/veiculo/atualizar/${newRow.id}`, newRow, {
                headers: {
                    authorization: token
                }
            })
        }
        else {
            alert("Digite os dados corretamente")
            dispatch(emitRefetchVeiculoReducer())
            setRowsState(rows.map((row) => row));
        }
        return updatedRow;
    };

    const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
        setRowModesModel(newRowModesModel);
    };

    useEffect(() => {
        setRowsState(rows)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
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
                    rowModesModel={rowModesModel}
                    onRowModesModelChange={handleRowModesModelChange}
                    onRowEditStart={handleRowEditStart}
                    onRowEditStop={handleRowEditStop}
                    processRowUpdate={processRowUpdate}
                    autoHeight
                    rows={rowsState}
                    columns={[
                        ...columns,
                        {
                            field: 'actions',
                            type: 'actions',
                            headerName: 'Actions',
                            cellClassName: 'actions',
                            getActions: ({ id }:any) => {
                              const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
                      
                              if (isInEditMode) {
                                return [
                                  <GridActionsCellItem
                                    icon={<SaveIcon />}
                                    label="Save"
                                    onClick={handleSaveClick(id)}
                                  />,
                                  <GridActionsCellItem
                                    icon={<CancelIcon />}
                                    label="Cancel"
                                    className="textPrimary"
                                    onClick={handleCancelClick(id)}
                                    color="inherit"
                                  />,
                                ];
                              }
                      
                              return [
                                <GridActionsCellItem
                                  icon={<EditIcon />}
                                  label="Edit"
                                  className="textPrimary"
                                  onClick={handleEditClick(id)}
                                  color="inherit"
                                />,
                                <GridActionsCellItem
                                  icon={<DeleteIcon />}
                                  label="Delete"
                                  onClick={handleDeleteClick(id)}
                                  color="inherit"
                                />,
                              ];
                            },
                          }
                    ]} 
                />
            }
        </Box>
    )
}