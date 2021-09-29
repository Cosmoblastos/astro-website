import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import {Container, Grid, Typography} from "@material-ui/core";
import ProjectsSlider from '../components/ProjectsSlider';
import {useScrollTrigger} from "./App";
import clsx from "clsx";

const Eye = (styles) => {
    return <div
    style={{
        background: 'aqua',
        border: 'none',
        borderRadius: '35px',
        ...styles,
    }} />
};

const normalSize = "100px";

const useFaceStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
}));

const Face = () => {
    const classes = useFaceStyles(),
        [rightEyeStyles, setRightEyeStyles] = useState({
            width: normalSize,
            height: normalSize
        }),
        [leftEyeStyles, setLeftEyeStyles] = useState({
            width: normalSize,
            height: normalSize
        }),
        [testExecuted, setTestExecuted] = useState(false);

    const animateLeft = (styles) => {
        setLeftEyeStyles(p => ({ ...p, ...styles }));
    };

    const animateRight = (styles) => {
        setRightEyeStyles(p => ({ ...p, ...styles }));
    };

    const normalFace = (restoredStyles = {}) => {
        const s = {
            width: normalSize,
            height: normalSize,
            borderRadius: '35px',
            ...restoredStyles
        };
        setRightEyeStyles(s);
        setLeftEyeStyles(s);
    };

    useEffect(() => {
        const blinking = setInterval(() => {
            animateLeft({ height: '0px' });
            animateRight({ height: '0px' });

            setTimeout(() => normalFace({
                borderTopLeftRadius: '35px',
                borderTopRightRadius: '35px'
            }), 300);

        }, 4000);

        return () => {
            clearInterval(blinking);
        }
    }, []);

    const angry = () => {
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
                borderTopLeftRadius: '35px',
                borderTopRightRadius: '35px'
            });
        }, 3000);
    };

    const happy = () => {
        animateLeft({
            borderRadius: '16px',
            borderBottomLeftRadius: '24px',
            borderTopLeftRadius: '50%',
            borderTopRightRadius: '50%',
            transform: 'translateY(-20px) rotate(4deg)',
            height: '80px',
        });
        animateRight({

            borderRadius: '16px',
            borderBottomRightRadius: '24px',
            borderTopLeftRadius: '50%',
            borderTopRightRadius: '50%',
            transform: 'translateY(-20px) rotate(-4deg)',
            height: '80px',
        });

        setTimeout(() => {
            normalFace({
                borderTopLeftRadius: '35px',
                borderTopRightRadius: '35px'
            });
        }, 3000);
    };

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
        height: '100vh',
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
        height: '100vh'
    }
}));

const Projects = () => {
    const classes = useStyles(),
        showTitle = useScrollTrigger(3000);

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
            <Grid container spacing={6}>
                <Grid item xs={12} md={5}>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} height={'100vh'}>
                        <Box p={5}>
                            <Typography variant={'h3'} gutterBottom className={classes.title}>
                                ASTROMX
                            </Typography>
                            <Typography>
                                Asistente médico personal pensado para fungir tanto en el espacio como en la Tierra. Inspirado en el día a día de un astronauta en la ISS en comparación con nuestra vida durante la pandemia actual, ambos escenarios similares ya que se modifican varios aspectos de la salud; sueño, alimentación, ejercicio, la salud bucal y el estado psicológico. Astro mx se encargará de reestablecer estos parámetros y prevenir futuras modificaciones.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Box className={classes.faceContainer}>
                        <Box style={{ position: 'absolute', zIndex: 1 }}>
                            <img src={'/astro-modified.png'} style={{borderRadius: '50%', width: 500, height: 500}} />
                        </Box>
                        <Box style={{ position: 'absolute', zIndex: 2, marginTop: '-50px' }}>
                            <Face />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Box>
};

export default Projects;