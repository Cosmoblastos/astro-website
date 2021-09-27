import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import {Grid, Typography} from "@material-ui/core";
import ProjectsSlider from '../components/ProjectsSlider';
import {useScrollTrigger} from "./App";
import clsx from "clsx";

const Eye = (styles) => {
    return <div
    style={{
        background: 'aqua',
        border: 'none',
        borderRadius: '35px',
        opacity: 0.9,
        ...styles,
    }} />
};

const normalSize = "120px";

const useFaceStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '70vh',
        overflow: 'hidden',
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

        }, 5000);

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
            happy();
        }
    }, [testExecuted]);


    return <Box className={classes.root}>
        <Grid container spacing={6} justifyContent={'center'} alignItems={'center'}>
            <Grid item>
                <Eye
                    transition={"all 0.4s"}
                    {...leftEyeStyles}
                />
            </Grid>
            <Grid item>
                <Eye
                    transition={"all 0.4s"}
                    {...rightEyeStyles}
                />
            </Grid>
        </Grid>
    </Box>
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100vh',
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2em',
        },
        transition: 'opacity 0.5s',
    },
    showedTitle: {
        opacity: 1,
        transition: 'opacity 0.5s',
    },
    container: {
        height: '60vh',
        padding: theme.spacing(4)
    }
}));

const Projects = () => {
    const classes = useStyles(),
        showTitle = useScrollTrigger(3000);

    return <Box className={classes.root}>
        <Parallax pages={1}>
            <ParallaxLayer
                offset={0}
                style={{zIndex: 8,  display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                <Box ml={1}>
                    <img src={'/astro-modified.png'} style={{borderRadius: '50%', width: 600, height: 600}}/>
                </Box>
            </ParallaxLayer>
            <ParallaxLayer
                offset={0.1}
                style={{zIndex: 8}}
            >
                <Face />
            </ParallaxLayer>
            <ParallaxLayer
                offset={0}
                speed={1}
                style={{zIndex: 9, display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}
            >
                <Box p={4}>
                    <Typography variant={'h3'} className={clsx(classes.title, {
                        [classes.showedTitle]: showTitle
                    })}>
                        ASTROMX
                    </Typography>
                </Box>
            </ParallaxLayer>
        </Parallax>
    </Box>
};

export default Projects;