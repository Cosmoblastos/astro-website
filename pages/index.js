import Head from 'next/head'
import Box from '@material-ui/core/Box';
import {
  makeStyles,
  Typography,
  Grid,
  useTheme,
  useMediaQuery, Container, Button,
} from '@material-ui/core';
import clsx from 'clsx';
import Menu from "../components/App/Menu";
import React from "react";
import ParticipantsCarrousel from "../components/MembersSlider";
import Hero from "../components/Hero";

const useStyles = makeStyles((theme) => ({
  section: {
    width: '100%',
    padding: theme.spacing(5, 0),
    overflow: 'hidden'
  },
  presentation: {
    backgroundColor: '#111',
    color: '#fff',
  },
  whatWeDo: {
    backgroundColor: '#274b72'
  },
  we: {
    width: '100%',
    borderRadius: '8px',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '2.2em'
  },
  paragraph: {
    fontSize: '19px',
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: '30px',
    letterSpacing: '.009em',
  }
}));

export default function Home() {
  const classes = useStyles(),
      theme = useTheme(),
      isSm = useMediaQuery(theme.breakpoints.down('sm'));

  return <Box className={classes.root}>
    <Head>
      <title>Cosmoblastos </title>
    </Head>
    <Menu />
    <Hero />
    <Box className={clsx(classes.section, classes.presentation)}>
      <Box pt={4} />
      <Container>
        <Grid container spacing={5}>
          <Grid container item xs={12} md={12} spacing={1}>
            <Grid item xs={12}>
              <Typography variant={'h5'} className={classes.title}>
                ¿Quiénes somos?
              </Typography>
              <Box pb={2} />
            </Grid>
            <Grid item xs={12} md={10}>
              <Typography variant={'body1'} className={classes.paragraph}>
                Somos la división de Medicina Aeroespacial de la AAFI, un grupo multidisciplinario de estudiantes de diferentes áreas del conocimiento que centra su pasión y talento en las ciencias de la salud, la ingeniería y el espacio para desarrollar tecnología centrada en la Medicina Aeroespacial.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <ParticipantsCarrousel />
          </Grid>
        </Grid>
      </Container>
    </Box>
    <Box className={clsx(classes.section, classes.whatWeDo)}>
      <Box pt={4} />
      <Container>
        <Grid container spacing={5} justifyContent={'flex-end'}>
          <Grid item xs={12} md={6}>
            <img src={'/members.jpeg'} width={'100%'} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant={'h5'} className={classes.title}>
              ¿Qué hacemos?
            </Typography>
            <Box pb={4} />
            <Typography variant={'body1'} className={classes.paragraph}>
              Nos centramos principalmente en el desarrollo de tecnología que apoya en la solución a las principales problemáticas de salud que los astronautas llegan a presentar en su estancia en la Estación Espacial Internacional.
              También nos dedicamos a la creación y difusión de temas en Medicina Aeroespacial para dar a conocer en la sociedad más sobre ella, para ello participamos en talleres, conferencias, eventos públicos y publicaciones en redes sociales.
            </Typography>
            <Box width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'} pt={4}>
              <Box pr={2}>
                <Button variant={'contained'} color={'primary'}>
                  Ver proyectos
                </Button>
              </Box>
              <Button variant={'outlined'} color={'primary'}>
                Ver artículos
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </Box>
}
