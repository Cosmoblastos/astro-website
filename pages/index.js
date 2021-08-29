import Head from 'next/head'
import Box from '@material-ui/core/Box';
import {
  makeStyles,
  Typography,
  Grid,
  useTheme,
  useMediaQuery, Container,
} from '@material-ui/core';
import clsx from 'clsx';
import Menu from "../components/App/Menu";
import React from "react";
import ParticipantsCarrousel from "../components/MembersSlider";
import Hero from "../components/Hero";

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: '90vh',
    width: '100%',
    padding: theme.spacing(5, 0)
  },
  presentation: {
    backgroundColor: '#222',
    color: '#fff',
  },
  we: {
    width: '100%',
    borderRadius: '8px',
  },
}));

export default function Home() {
  const classes = useStyles(),
      theme = useTheme(),
      isSm = useMediaQuery(theme.breakpoints.down('sm'));

  return <Box className={classes.root}>
    <Head>
      <title>Cosmoblastos</title>
    </Head>
    <Menu />
    <Hero />
    <Box className={clsx(classes.section, classes.presentation)}>
      <Box pt={4} />
      <Container>
        <Grid container spacing={5}>
          <Grid container item xs={12} md={12} spacing={1}>
            <Grid item xs={12}>
              <Typography variant={'h5'}>¿Quiénes somos?</Typography>
              <Box pb={2} />
            </Grid>
            <Grid item xs={12} md={10}>
              <Typography variant={'body1'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, amet vestibulum consequat sapien id id imperdiet nullam tellus. Eu vitae sit magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, amet vestibulum consequat sapien.
              </Typography>
            </Grid>
            <Grid item xs={12} md={10}>
              <Typography variant={'body1'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, amet vestibulum consequat sapien id id imperdiet nullam tellus. Eu vitae sit magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, amet vestibulum consequat sapien.
              </Typography>
            </Grid>
          </Grid>
          {/*<Grid item xs={12} md={5}>*/}
          {/*  <img*/}
          {/*      src={'/we.jpeg'}*/}
          {/*      alt={'integrantes'}*/}
          {/*      className={classes.we}*/}
          {/*  />*/}
          {/*</Grid>*/}
          <Grid item xs={12}>
            <ParticipantsCarrousel />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </Box>
}
