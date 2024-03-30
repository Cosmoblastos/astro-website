import React from 'react';
import {makeStyles} from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import {Button, Divider, Fade, Grid, Hidden, Typography, useMediaQuery, useTheme} from "@material-ui/core";
import Link from 'next/link';
import { Parallax } from 'react-scroll-parallax';

const useStyles = makeStyles((theme) => ({
    hero: {
        width: '100%',
        height: '100vh',
        backgroundImage: 'url(/earth.webp)',
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
        justifyContent: 'space-evenly',
        alignItems: 'center',
        // backdropFilter: 'blur(4px)',
        backgroundImage: 'radial-gradient(circle, rgba(150,150,150,0.3) 0%, rgba(89,89,89,0.3) 11%, rgba(0,0,0,0.5) 97%)',
    },
    heroInnerBox: {
        width: '40vw',
        height: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            //width: '90%',
        }
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '2.5rem',
        textTransform: 'uppercase',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2em',
        }
    },
    satellite: {
        width: '120px',
    },
    astro: {
        width: '120px',
        marginLeft: '-20px'
    },
    astroContainer: {
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(circle farthest-corner at center center, transparent 18%, rgba(255, 255, 255, 0.5) 81%)',
        padding: 5,
        borderRadius: '50%',
        width: '200px',
        height: '200px',
        boxShadow: '0 0 43px rgba(255, 255, 255, 0.5)',
    },
    satelliteContainer: {
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(circle farthest-corner at center center, transparent 18%, rgba(255, 255, 255, 0.5) 81%)',
        padding: 5,
        borderRadius: '50%',
        width: '200px',
        height: '200px',
        boxShadow: '0 0 43px rgba(255, 255, 255, 0.5)',
    }
}));

const Hero = () => {
    const classes = useStyles(),
        theme = useTheme(),
        isSm = useMediaQuery(theme.breakpoints.down('sm'));

    const seeOwrProjectsButton = <Link href={'/projects'}>
        <Button variant={'contained'} color={'primary'} disableElevation>
            Ver proyectos
        </Button>
    </Link>;

    return <Box className={classes.hero}>
        <Box className={classes.heroFlexContainer}>
            {/*<Hidden mdDown>
                <Fade in timeout={4000}>
                    <Parallax translateX={['300px', '-150px']}>
                        <Box className={classes.astroContainer}>
                            <img src={'/astro2.png'} className={classes.astro}/>
                        </Box>
                    </Parallax>
                </Fade>
            </Hidden>*/}
            <Parallax>
                <Box className={classes.heroInnerBox}>
                    <Fade in timeout={2000}>
                        <Parallax translateY={['100px', '-100px']}>
                            <img src={'/logo.png'} alt={'cosmoblastos logo'} width={isSm ? 170 : 200} height={isSm ? 170 : 200}/>
                        </Parallax>
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
            </Parallax>
            {/*<Hidden mdDown>
                <Fade in timeout={6000}>
                    <Parallax translateX={['-300px', '150px']}>
                        <Box className={classes.satelliteContainer}>
                            <img src={'/payload.png'} className={classes.satellite}/>
                        </Box>
                    </Parallax>
                </Fade>
            </Hidden>*/}
        </Box>
    </Box>
};

export default Hero;