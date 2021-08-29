import React from 'react';
import {makeStyles} from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import {Button, Grid, Hidden, Typography, useMediaQuery, useTheme} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    hero: {
        width: '100%',
        height: '80vh',
        backgroundImage: 'url(/earth.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        overflow: 'hidden',
        padding: 0,
    },
    heroFlexContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
    },
    heroInnerBox: {
        width: '60%',
        [theme.breakpoints.down('sm')]: {
            width: '90%',
        }
    },
    title: {
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            fontSize: '3em',
            textAlign: 'center',
        }
    },
}));

const Hero = () => {
    const classes = useStyles(),
        theme = useTheme(),
        isSm = useMediaQuery(theme.breakpoints.down('sm'));

    const seeOwrProjectsButton = <Button variant={'contained'} color={'primary'} disableElevation>
        Ve nuestros proyectos
    </Button>;

    return <Box className={classes.hero}>
        <Box className={classes.heroFlexContainer}>
            <Box className={classes.heroInnerBox}>
                <Grid container spacing={2}>
                    <Grid container item spacing={2} xs={12} md={8} justifyContent={isSm ? 'center' : undefined}>
                        <Grid item xs={12}>
                            <Typography variant={'h3'} className={classes.title}>
                                Creando el futuro de la medicina aeroespacial
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            {
                                isSm
                                    ? <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                        {seeOwrProjectsButton}
                                      </Box>
                                    : seeOwrProjectsButton
                            }
                        </Grid>
                    </Grid>
                    <Hidden smDown>
                        <Grid item xs={12} md={4}>
                            <Box display={'flex'} justifyContent={'flex-end'}>
                                <img src={'/logo.png'} alt={'cosmoblastos logo'} width={210} height={210}/>
                            </Box>
                        </Grid>
                    </Hidden>
                </Grid>
            </Box>
        </Box>
    </Box>
};

export default Hero;