import React, {useCallback, useEffect, useState} from 'react';
import {makeStyles, useTheme} from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import {Button, Container, Grid, Typography, useMediaQuery, Link as MuiLink, Divider} from "@material-ui/core";
import ProjectsSlider from './ProjectsSlider';
import {useScrollTrigger} from "../App";
import clsx from "clsx";

const Eye = (styles) => {
    return <div
    style={{
        background: 'aqua',
        border: 'none',
        //borderRadius: '35px',
        ...styles,
    }} />
};

const useFaceStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
}));

const Face = () => {
    const theme = useTheme(),
        classes = useFaceStyles(),
        isMd = useMediaQuery(theme.breakpoints.up('sm')),
        [normalSize, setNormalSize] = useState('6.4rem'),
        [normalBorder, setNormalBorder] = useState('35px'),
        [rightEyeStyles, setRightEyeStyles] = useState({
            width: normalSize,
            height: normalSize,
            borderRadius: normalBorder,
        }),
        [leftEyeStyles, setLeftEyeStyles] = useState({
            width: normalSize,
            height: normalSize,
            borderRadius: normalBorder,
        }),
        [testExecuted, setTestExecuted] = useState(false);

    const animateLeft = (styles) => {
        setLeftEyeStyles(p => ({ ...p, ...styles }));
    };

    const animateRight = (styles) => {
        setRightEyeStyles(p => ({ ...p, ...styles }));
    };

    const animateBoth = (globalStyles, leftStyles = {}, rightStyles = {}) => {
        animateLeft({ ...leftStyles, ...globalStyles });
        animateRight({ ...rightStyles, ...globalStyles });
    };

    const normalFace = useCallback((restoredStyles = {}) => {
        const s = {
            width: normalSize,
            height: normalSize,
            borderRadius: normalBorder,
            ...restoredStyles
        };
        setRightEyeStyles(s);
        setLeftEyeStyles(s);
    }, [normalSize, normalBorder]);

    const angry = useCallback(() => {
        animateLeft({
            borderTopLeftRadius: '50%',
            borderTopRightRadius: '80%',
            height: '40px',
            transform: 'rotate(10deg)',
        });
        animateRight({
            borderTopLeftRadius: '80%',
            borderTopRightRadius: '50%',
            height: '40px',
            transform: 'rotate(-10deg)',
        });

        setTimeout(() => {
            normalFace({
                borderTopLeftRadius: normalBorder,
                borderTopRightRadius: normalBorder
            });
        }, 3000);
    }, [normalBorder]);

    const happy = useCallback(() => {
        animateBoth(
            {
                borderRadius: '16px',
                borderBottomLeftRadius: '24px',
                borderTopLeftRadius: '50%',
                borderTopRightRadius: '50%',
                height: '80px',
                width: '110px',
            }, 
            { transform: 'translateY(-20px) rotate(4deg)' }, 
            { transform: 'translateY(-20px) rotate(-4deg)' }
        );

        setTimeout(() => {
            normalFace({
                borderTopLeftRadius: normalBorder,
                borderTopRightRadius: normalBorder
            });
        }, 3000);
    }, [normalBorder]);

    useEffect(() => {
        const blinking = setInterval(() => {
            animateLeft({ height: '0px' });
            animateRight({ height: '0px' });

            setTimeout(() => normalFace({
                borderTopLeftRadius: normalBorder,
                borderTopRightRadius: normalBorder
            }), 300);

        }, 4000);

        return () => {
            clearInterval(blinking);
        }
    });

    useEffect(() => {
        if (!testExecuted) {
            setTestExecuted(true);
            //happy();
            //angry();
        }
    }, [testExecuted]);


    return <Box className={classes.root}>
        <Eye
            transition={"all 0.4s"}
            marginRight={'50px'}
            {...leftEyeStyles}
        />
        <Eye
            transition={"all 0.4s"}
            {...rightEyeStyles}
        />
    </Box>
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: 'auto',
        overflow: 'hidden',
        backgroundColor: '#fff',
        color: '#222',
        padding: theme.spacing(6, 0),
    },
    title: {
        fontWeight: 'bold',
        transition: 'opacity 0.5s',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2em',
        },
    },
    container: {
        height: '60vh',
        padding: theme.spacing(4)
    },
    faceContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '45vh',
        padding: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            height: '100vh',
        }
    }
}));

const Projects = () => {
    const classes = useStyles(),
        showTitle = useScrollTrigger(3000),
        theme = useTheme(),
        isMd = useMediaQuery(theme.breakpoints.up('md'));

    return <Box className={classes.root}>
    {/*    <Parallax pages={1}>*/}
    {/*    <ParallaxLayer*/}
    {/*        offset={0}*/}
    {/*        style={{zIndex: 8,  display: 'flex', alignItems: 'center', justifyContent: 'center' }}*/}
    {/*    >*/}
    {/*        <Box ml={1}>*/}
    {/*            <img src={'/astro-modified.png'} style={{borderRadius: '50%', width: 500, height: 500}}/>*/}
    {/*        </Box>*/}
    {/*    </ParallaxLayer>*/}
    {/*    <ParallaxLayer*/}
    {/*        offset={0.1}*/}
    {/*        style={{zIndex: 8, display: 'flex', justifyContent: 'flex-end'}}*/}
    {/*    >*/}
    {/*        <Face />*/}
    {/*    </ParallaxLayer>*/}
    {/*    <ParallaxLayer*/}
    {/*        offset={0}*/}
    {/*        speed={1}*/}
    {/*        style={{zIndex: 9, display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}*/}
    {/*    >*/}
    {/*        <Box ml={10} width={'300px'}>*/}
    {/*           */}
    {/*        </Box>*/}
    {/*    </ParallaxLayer>*/}
    {/*</Parallax>*/}
        <Container>
            <Box width={'100%'} textAlign={'center'} height={'10vh'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'} flexDirection={'column'}>
                <Typography variant={'h4'} style={{ fontWeight: 'bold' }}>
                    Nuestros Proyectos
                </Typography>
            </Box>
        </Container>
        <Container>
            <Grid container spacing={isMd ? 6 : 0} alignItems={'center'}>
                <Grid item xs={12} md={5}>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        <Box pb={2}>
                            <Typography variant={'h3'} gutterBottom className={classes.title} color={'inherit'}>
                                ASTROMX
                            </Typography>
                            <Typography color={'inherit'}>
                                Asistente médico personal pensado para fungir tanto en el espacio como en la Tierra. Inspirado en el día a día de un astronauta en la ISS en comparación con nuestra vida durante la pandemia actual, ambos escenarios similares ya que se modifican varios aspectos de la salud; sueño, alimentación, ejercicio, la salud bucal y el estado psicológico. Astro mx se encargará de reestablecer estos parámetros y prevenir futuras modificaciones.
                            </Typography>
                            <Box pt={4} />
                            <Button variant={'contained'} color={'secondary'}>
                                Ver proyecto
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                    <img src={'/astro-drawing.png'} width={'100%'} />
                    {/*<Box className={classes.faceContainer}>*/}
                    {/*    <Box style={{ position: 'absolute', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>*/}
                    {/*        <img src={'/astro-modified.png'} style={{borderRadius: '50%', width: isMd ? '75%' : '90%'}} />*/}
                    {/*    </Box>*/}
                    {/*    <Box style={{ position: 'absolute', zIndex: 2, marginTop: '-50px' }}>*/}
                    {/*        <Face />*/}
                    {/*    </Box>*/}
                    {/*</Box>*/}
                </Grid>
                <Grid item xs={12} />
                <Grid item xs={12} md={7}>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        <Box pb={2}>
                            <Typography variant={'h3'} gutterBottom className={classes.title} color={'inherit'}>
                                Spaceport America Cup Payload
                            </Typography>
                            <Typography color={'inherit'}>
                                Cápsula de conservación de sangre durante vuelos orbitales la cuál mediante la implementación de sistemas de monitoreo, regulación de temperatura y movimiento, energía y control trata de estabilizar los factores externos relativos a la misión con tal de evitar la hemólisis durante el lanzamiento de los cohetes.
                            </Typography>
                            <Box pt={4} />
                            <Button variant={'contained'} color={'secondary'}>
                                Ver proyecto
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        <img src={'/payload.jpeg'} width={'300px'} />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Box>
};

export default Projects;