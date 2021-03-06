import React, {useCallback, useEffect, useState} from 'react';
import {makeStyles, useTheme} from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import {Button, Container, Grid, Typography, useMediaQuery, Link as MuiLink} from "@material-ui/core";
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
        height: '110vh',
        overflow: 'hidden',
        backgroundColor: '#454545',
        color: '#fff',
        [theme.breakpoints.up('md')]: {
            height: '95vh',
        }
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
            <Grid container spacing={isMd ? 6 : 0}>
                <Grid item xs={12} md={5}>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} height={ isMd ? '100vh' : '60vh'}>
                        <Box pb={2}>
                            <Typography variant={'h3'} gutterBottom className={classes.title} color={'inherit'}>
                                ASTROMX
                            </Typography>
                            <Typography color={'inherit'}>
                                Asistente m??dico personal pensado para fungir tanto en el espacio como en la Tierra. Inspirado en el d??a a d??a de un astronauta en la ISS en comparaci??n con nuestra vida durante la pandemia actual, ambos escenarios similares ya que se modifican varios aspectos de la salud; sue??o, alimentaci??n, ejercicio, la salud bucal y el estado psicol??gico. Astro mx se encargar?? de reestablecer estos par??metros y prevenir futuras modificaciones.
                            </Typography>
                            <Box pt={4} />
                            <MuiLink>
                                Ver proyecto
                            </MuiLink>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Box className={classes.faceContainer}>
                        <Box style={{ position: 'absolute', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <img src={'/astro-modified.png'} style={{borderRadius: '50%', width: isMd ? '75%' : '90%'}} />
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