import { FaGasPump } from 'react-icons/fa';
import { Box } from '@mui/material';
import { MenuAsideItemProps } from '../../../types';

export default function AbastecimentoItem({ className }: MenuAsideItemProps) {
    return (
        <Box className={className}>
            <FaGasPump />
            <span>Abastecimentos</span>
        </Box>
    )
}