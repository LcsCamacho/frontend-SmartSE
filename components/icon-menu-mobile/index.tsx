import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from 'react-redux';
import { toggleMobileMenuReducer } from "../../features/redux/mobile-menu-slice";

export default function HamburguerMenu() {
    const dispatch = useDispatch();

    return (
        <MenuIcon
            onClick={() => {
                dispatch(toggleMobileMenuReducer())
        }} />
    );
}