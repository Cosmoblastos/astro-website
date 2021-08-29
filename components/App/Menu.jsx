import React, {useState} from 'react';
import {
    AppBar,
    Button,
    Hidden,
    IconButton,
    makeStyles,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MenuMobile from "./MenuMobile";
import Box from "@material-ui/core/Box";
import clsx from "clsx";
import {useScrollTrigger} from "./index";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(8px)',
        color: '#fff',
        transition: 'background-color 0.5s',
    },
    container: {
        display: 'flex',
    },
    title: {
        fontWeight: 'bold'
    },
    active: {
        backgroundColor: `rgba(0, 0, 0, 0.8)`,
        transition: 'background-color 0.5s',
    }
}));

const Menu = () => {
    const classes = useStyles(),
        theme = useTheme(),
        isSm = useMediaQuery(theme.breakpoints.down('sm')),
        [mobileMenuOpen, setMobileMenuOpen] = useState(false),
        active = useScrollTrigger(600);

    const toggleMenuMobileOpen = () => setMobileMenuOpen(!mobileMenuOpen);

    return <React.Fragment>
        <AppBar position='fixed' elevation={0} color={'transparent'} classes={{
            root: clsx(classes.root, {
                [classes.active]: active
            })
        }}>
            <Toolbar className={classes.container}>
                <Box pr={2} display={'flex'} alignItems={'center'}>
                    <img src={'/aafi.png'} alt={'aafi logo'} width={55} height={29}/>
                </Box>
                <Box pr={2} display={'flex'} alignItems={'center'}>
                    <img src={'/logo.png'} alt={'cosmoblastos logo'} width={35} height={35}/>
                </Box>
                <Typography variant="h6" className={classes.title}>
                    Cosmoblastos
                </Typography>
                <Box flexGrow={1} />
                <Hidden smDown>
                    <Button variant={'text'}>
                        Inicio
                    </Button>
                    <Button variant={'text'}>
                        Nosotros
                    </Button>
                    <Button variant={'text'} style={{marginRight: 10}}>
                        Contacto
                    </Button>
                    <Button variant={'outlined'} color={'primary'}>
                        donar
                    </Button>
                </Hidden>
                {
                    isSm &&
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleMenuMobileOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                }
            </Toolbar>
        </AppBar>
        <MenuMobile open={mobileMenuOpen} onClose={toggleMenuMobileOpen} />
    </React.Fragment>
};

export default Menu;