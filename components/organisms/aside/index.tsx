import styles from './aside.module.scss'
import { Box, useMediaQuery, Divider } from '@mui/material';
import Image from 'next/image';
import logo from '/public/logo.png';
import MenuAside from '../../molecules/menuAside';

export default function Aside() {
    const isMobile = useMediaQuery('(max-width:600px)');


    return (
        <aside className={styles.aside}>
            
            <Box className={styles.logo}>
                <Image src={logo} alt="logo"
                    width={isMobile ? 75 : 125}
                    height={isMobile ? 50 : 100} />
                <h3>Abastecimento App</h3>
            </Box>

            <Divider />

            <MenuAside />

        </aside>
    )
}