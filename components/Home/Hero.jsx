import React from 'react';
import {makeStyles} from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import {Button, Divider, Grid, Hidden, Typography, useMediaQuery, useTheme} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    hero: {
        width: '100%',
        height: '85vh',
        backgroundImage: 'url(/earth.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        overflow: 'hidden',
        padding: 0,
        [theme.breakpoints.down('sm')]: {
            height: '80vh'
        }
    },
    heroFlexContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
    },
    heroInnerBox: {
        width: '40%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            width: '90%',
        }
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2em',
        }
    },
}));

const Hero = () => {
    const classes = useStyles(),
        theme = useTheme(),
        isSm = useMediaQuery(theme.breakpoints.down('sm'));

    const seeOwrProjectsButton = <Button variant={'outlined'} color={'primary'} disableElevation>
        Ver nuestros proyectos
    </Button>;

    return <Box className={classes.hero}>
        <Box className={classes.heroFlexContainer}>
            <Box className={classes.heroInnerBox}>
                <img src={'/logo.png'} alt={'cosmoblastos logo'} width={isSm ? 170 : 200} height={isSm ? 170 : 200}/>
                <Box pb={3} />
                <Typography variant={'h3'} className={classes.title}>
                    Creando el futuro de la medicina aeroespacial
                </Typography>
                <Box pb={3} />
                {
                    isSm
                        ? <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                            {seeOwrProjectsButton}
                          </Box>
                        : seeOwrProjectsButton
                }
            </Box>
        </Box>
    </Box>
};

export default Hero;