import { Box } from "@mui/material";
import { AiFillCar } from "react-icons/ai";
import { MenuAsideItemProps } from "../../../types";


export default function CarroItem({ className }: MenuAsideItemProps) {
    return (
        <Box className={className}>
            <AiFillCar />
            <span>Carros</span>
        </Box>
    )
}