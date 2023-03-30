import styles from './aside.module.scss'
import { Box, useMediaQuery, Divider } from '@mui/material';
import Image from 'next/image';
import logo from '/public/logo.png';
import MenuAside from '../../molecules/aside/menu-aside';
import { toggleMobileMenuReducer } from '../../../features/redux/mobile-menu-slice';
import { useDispatch } from 'react-redux';
export default function Aside() {
    const isMobile = useMediaQuery('(max-width:600px)');
    const dispatch = useDispatch();

    return (
        <aside className={styles.aside}>
            <Box className={styles.closeContainer}>
            {isMobile && <span onClick={() => dispatch(toggleMobileMenuReducer())}
                className={styles.close}>X</span>
            }
            </Box>
            <Box className={styles.logo}>
                <Image src={logo} alt="logo"
                    width={isMobile ? 75 : 125}
                    height={isMobile ? 50 : 100}
                    priority />
                <h3>Abastecimento App</h3>
            </Box>

            <Divider />

            <MenuAside />

        </aside>
    )
}