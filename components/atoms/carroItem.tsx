import { Box } from "@mui/material";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { MenuAsideItemProps } from "../../types";


export default function CarroItem({className}:MenuAsideItemProps) {
    return (
        <Box className={className}>
            <DirectionsCarIcon />
            <span>Carros</span>
        </Box>
    )
}