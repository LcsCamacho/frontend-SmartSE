import styles from './aside.module.scss'
import { Box, useMediaQuery, Divider } from '@mui/material';
import Image from 'next/image';
import logo from '/public/logo.png';
import MenuAside from '../../molecules/menuAside';
import CloseIcon from '@mui/icons-material/Close';
import { toggleMobileMenuReducer } from '../../../features/redux/mobile-menu-slice';
import { useDispatch } from 'react-redux';
export default function Aside() {
    const isMobile = useMediaQuery('(max-width:600px)');
    const dispatch = useDispatch();


    return (
        <aside className={styles.aside}>
            {isMobile && <span onClick={() => dispatch(toggleMobileMenuReducer())}
                className={styles.close}>X</span>
            }
            <Box className={styles.logo}>
                <Image src={logo} alt="logo"
                    width={isMobile ? 75 : 125}
                    height={isMobile ? 50 : 100} />
                <h3>Abastecimento App</h3>
            </Box>

            <Divider />

            {/* <MenuAside /> */}

        </aside>
    )
}