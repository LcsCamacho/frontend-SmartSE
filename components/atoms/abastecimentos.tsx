import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import { Box } from '@mui/material';
import { MenuAsideItemProps } from './carroItem';


export default function AbastecimentoItem({ className }: MenuAsideItemProps) {
    return (
        <Box className={className}>
            <LocalGasStationIcon />
            <span>Abastecimentos</span>
        </Box>
    )
}