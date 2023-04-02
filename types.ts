import { GridColDef, GridRowModesModel, GridCallbackDetails, GridEventListener } from '@mui/x-data-grid';
import { z } from 'zod';

interface MenuAsideItemProps {
    className: string;
}

interface Veiculo {
    placa: string;
    marca: string;
    modelo: string;
    ano: string;
    cor: string;
    potencia: string;
    renavam: string;
    id?: number
}

interface Abastecimento {
    valor: number | string;
    litros: number | string;
    tipo: string;
    placa: string;
    id?: number
}


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
    rowModesModel?: GridRowModesModel,
    filter?: (row: any) => boolean,
    type: "veiculo" | "abastecimento"
}

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

const abastecimentoSchema = z.object({
    valor: z.union([z.string(), z.number()]),
    litros: z.union([z.string(), z.number()]),
    tipo: z.string(),
    placa: z.string().regex(PlacaRegex),
})

export { veiculoSchema, abastecimentoSchema }
export type { MenuAsideItemProps, Veiculo, Abastecimento, dataGridProps };