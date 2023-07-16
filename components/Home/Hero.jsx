import React from 'react';
import {makeStyles} from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import {Button, Divider, Fade, Grid, Hidden, Typography, useMediaQuery, useTheme} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    hero: {
        width: '100%',
        height: '100vh',
        backgroundImage: 'url(/mars.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
        padding: 0,
        [theme.breakpoints.down('sm')]: {
            height: '80vh'
        },
        [theme.breakpoints.up('md')]: {
            backgroundAttachment: 'fixed',
        }
    },
    heroFlexContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // backdropFilter: 'blur(4px)',
        backgroundImage: 'radial-gradient(circle, rgba(150,150,150,0.3) 0%, rgba(89,89,89,0.3) 11%, rgba(0,0,0,0.5) 97%)',
    },
    heroInnerBox: {
        width: '45%',
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
        fontSize: '2.5rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2em',
        }
    },
}));

const Hero = () => {
    const classes = useStyles(),
        theme = useTheme(),
        isSm = useMediaQuery(theme.breakpoints.down('sm'));

    const seeOwrProjectsButton = <Button variant={'contained'} color={'primary'} disableElevation>
        Ver nuestros proyectos
    </Button>;

    return <Box className={classes.hero}>
        <Box className={classes.heroFlexContainer}>
            <Box className={classes.heroInnerBox}>
                <Fade in timeout={2000}>
                    <img src={'/logo.png'} alt={'cosmoblastos logo'} width={isSm ? 170 : 200} height={isSm ? 170 : 200}/>
                </Fade>
                <Box pb={3} />
                <Fade in timeout={3000}>
                    <Typography variant={'h3'} className={classes.title}>
                        Creando el futuro de la medicina aeroespacial
                    </Typography>
                </Fade>
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