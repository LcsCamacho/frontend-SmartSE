/* eslint-disable react/jsx-key */
import CancelIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import styles from './datagrid.module.scss';
import { Box, Skeleton } from '@mui/material';
import {
    DataGrid,
    GridActionsCellItem,
    GridEventListener,
    GridRowId,
    GridRowModel,
    GridRowModes,
    GridRowModesModel,
    GridRowParams,
    MuiEvent
} from '@mui/x-data-grid';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAlertAbastecimentoRemoveSuccess, toggleAlertVeiculoRemoveSuccess } from '../../features/redux/alert-slice';
import { emitRefetchVeiculoReducer, emitRefetchAbastecimentoReducer } from '../../features/redux/refetch-slice';
import { useAxios } from '../../hooks/UseAxios';
import { dataGridProps, veiculoSchema, abastecimentoSchema } from '../../types';

//função que escuta o inicio do processo de edição das linhas
const handleRowEditStart = (
    params: GridRowParams,
    event: MuiEvent<React.SyntheticEvent>,
) => {
    event.defaultMuiPrevented = true;
};

//função que escuta a finalização do processo de edição das linhas
const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
    event.defaultMuiPrevented = true;
};


export default function DataGridModel(props: dataGridProps) {
    const [loading, setLoading] = useState(true);
    const [rowsState, setRowsState] = useState<any>([]);
    const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});
    const { columns, rows, type } = props;
    const { api } = useAxios();
    const { token } = useSelector((state: any) => state.login);
    const dispatch = useDispatch();

    const handleEditClick = (id: GridRowId) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    };


    //função que salva os dados da tabela
    const handleSaveClick = (id: GridRowId) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    };

    //função que deleta uma linha da tabela e do banco de dados
    const handleDeleteClick = (id: GridRowId) => () => {
        if (type === "veiculo") {
            api.delete(`/veiculo/deletar/${id}`, {
                headers: {
                    authorization: token
                }
            })
                .then(() => {
                    //dispacha uma action para efetuar o refetch da lista de veiculos
                    dispatch(emitRefetchVeiculoReducer())
                    dispatch(emitRefetchAbastecimentoReducer())
                    dispatch(toggleAlertVeiculoRemoveSuccess())
                    setRowsState(rows.filter((row) => row.id !== id));
                })
            return
        }
        if (type === "abastecimento") {
            api.delete(`/abastecimento/deletar/${id}`, {
                headers: {
                    authorization: token
                }
            })
                .then(() => {
                    //dispacha uma action para efetuar o refetch da lista de abastecimento
                    dispatch(emitRefetchAbastecimentoReducer())
                    dispatch(emitRefetchVeiculoReducer())
                    dispatch(toggleAlertAbastecimentoRemoveSuccess())
                    setRowsState(rows.filter((row) => row.id !== id));
                })
            return
        }

    };

    //escuta o cancelamento da edição de uma linha da tabela
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

    const updateRow = (
        newRow: GridRowModel,
        typeDataGrid: "veiculo" | "abastecimento",
        schema: any,
        reducer: any
    ) => {
        const result = schema.safeParse(newRow)
        const updatedRow = { ...newRow, isNew: false };
        const oldRow = rows.find((row) => row.id === newRow.id)

        //transforma os dados em string para comparar se houve alguma alteração
        const strOldRow = JSON.stringify(oldRow)
        const strNewRow = JSON.stringify(newRow)
        if (strOldRow === strNewRow) {
            alert("nenhum dado alterado")
            return updatedRow
        }
        if (result.success) {
            //dispacha uma action para efetuar o refetch da lista
            dispatch(reducer())
            setRowsState(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
            api.put(`/${typeDataGrid}/atualizar/${newRow.id}`, newRow, {
                headers: {
                    authorization: token
                }
            })
        }

        //se escrever os dados incorretamente, cancela a edição e emite a action de refetch
        else {
            alert("Digite os dados corretamente")
            dispatch(reducer())
            return updatedRow
        }
        return updatedRow;
    }

    //função que altera os dados da tabela e do banco de dados 
    //se os dados forem validados no "veiculoSchema"
    const processRowUpdate = (newRow: GridRowModel) => {
        return type === "veiculo" ?
            updateRow(newRow, type, veiculoSchema, emitRefetchVeiculoReducer) 
            :
            updateRow(newRow, type, abastecimentoSchema, emitRefetchAbastecimentoReducer)
    };


    const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
        setRowModesModel(newRowModesModel);
    };

    //função que retorna os icones de salvar, excluir e editar e cancelar.
    const actionsIcons = useCallback(({ id }: any) => {
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
    }, [rowModesModel])

    useEffect(() => {
        setRowsState(rows)
        setLoading(false)
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
                            getActions: actionsIcons
                        }
                    ]}
                />
            }
        </Box>
    )
}