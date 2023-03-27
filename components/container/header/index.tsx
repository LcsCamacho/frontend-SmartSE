import styles from './header.module.scss'
import Image from 'next/image';
import logo from '/public/logo.png';
import { Box, Button, Container, useMediaQuery, Icon } from '@mui/material';


export default function Header() {
    const isMobile = useMediaQuery('(max-width:600px)');
    return (
        <Container maxWidth="lg" className={styles.header}>
            <Box className={styles.logo}>
                <Image src={logo} alt="logo"
                    width={isMobile ? 75 : 125}
                    height={isMobile ? 50 : 100} />
                <h3>Abastecimento App</h3>

            </Box>
            {isMobile ?
                // Menu hamburguer icon            
                <Icon>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                    </svg>
                </Icon>
                : <Box className={styles.menu}>
                    <Button variant="contained">
                        Entrar
                    </Button>
                </Box>
            }

        </Container>
    )
}