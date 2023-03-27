import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from 'react-redux';
import { toggleMobileMenuReducer } from "../../features/redux/mobile-menu-slice";
import styles from './hamburguer.module.scss';


export default function HamburguerMenu() {
    const dispatch = useDispatch();

    return (
        <MenuIcon 
            fontSize="large"
            className={styles.hamburguer}
            onClick={() => {
                dispatch(toggleMobileMenuReducer())
        }} />
    );
}