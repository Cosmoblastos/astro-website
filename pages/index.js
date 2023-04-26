import Head from 'next/head'
import React from "react"
import Box from '@material-ui/core/Box'
import {
  makeStyles,
  Typography,
  Grid,
  useTheme,
  useMediaQuery, Container, Button, TextField, IconButton,
} from '@material-ui/core'
import clsx from 'clsx'
import Menu from "../components/App/Menu"
import ParticipantsCarrousel from "../components/Home/MembersSlider"
import Hero from "../components/Home/Hero"
import Projects from "../components/Home/Projects"
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles((theme) => ({
  section: {
    width: '100%',
    padding: theme.spacing(5, 0),
    overflow: 'hidden'
  },
  presentation: {
    //backgroundImage: 'radial-gradient(83.19% 83.19% at 29.06% 16.81%, #222 0%, rgba(2, 2, 2, 1) 100%)',
    //backgroundImage: 'radial-gradient(83.19% 83.19% at 29.06% 16.81%, #0C476C 0%, #0B3B59 100%)',
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#274b72',
  },
  whatWeDo: {
    backgroundColor: '#EAF0FF',
    color: '#222',
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
    fontSize: '17px',
    //color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: '30px',
    letterSpacing: '.009em',
  },
  contact: {
    backgroundColor: '#EAF0FF',
    color: '#222',
  }
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
    <div id={'home'}/>
    <Hero />
    <div id={'whoWeAre'}/>
    <Box className={clsx(classes.section, classes.presentation)}>
      <Box pt={2} />
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Grid container spacing={1} justifyContent={'center'}>
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
          </Grid>
          <Grid item xs={12}>
            <ParticipantsCarrousel />
          </Grid>
          {/* <Grid item xs={12}>
            <Box alignItems={'center'} justifyContent={'center'} width={'100%'}>
              <Button variant={'outlined'} color={'primary'}>
                Ver más
              </Button>
            </Box>
          </Grid> */}
        </Grid>
      </Container>
    </Box>
    <Box className={clsx(classes.section, classes.whatWeDo)}>
      <Box pt={4} />
      <Container>
        <Grid container spacing={5} justifyContent={'flex-end'}>
          <Grid item xs={12} md={6}>
            <Typography variant={'h5'} className={classes.title}>
              ¿Qué hacemos?
            </Typography>
            <Box pb={4} />
            <Typography variant={'body1'} className={classes.paragraph}>
              Nos centramos en el desarrollo de tecnología que apoya en la solución a las principales problemáticas de salud que los astronautas llegan a presentar en su estancia en la Estación Espacial Internacional.
              También nos dedicamos a la creación y difusión de temas en Medicina Aeroespacial para dar a conocer en la sociedad más sobre ella, para ello participamos en talleres, conferencias, eventos públicos y publicaciones en redes sociales.
            </Typography>
            <Box width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'} pt={4}>
              <Box pr={2}>
                <Button variant={'contained'} color={'secondary'}>
                  Ver proyectos
                </Button>
              </Box>
              <Button variant={'outlined'} color={'secondary'}>
                Ver artículos
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={'/members_2.jpeg'} width={'100%'} />
          </Grid>
        </Grid>
      </Container>
    </Box>
    <Projects />
    <Box className={clsx(classes.section, classes.contact)}>
      <div id={'contact'} />
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Box width={'100%'} height={'100%'} display={'flex'} alignItems={'center'}>
              <img src={'/rocket.png'} width={'70%'} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant={'h5'} className={classes.title}>
              Contáctanos
            </Typography>
            <Box pb={2} />
            <Typography>
              Nuestro correo electrónico es:
            </Typography>
            <a target='_blank' href={'mailto:cosmoblastos.aafi@gmail.com'}>cosmoblastos.aafi@gmail.com</a>
            <Box pb={2} />
            <Typography>
              Encuentranos en Instagram como:
            </Typography>
              <a target='_blank' href={'https://www.instagram.com/cosmoblastos_aafi/'}>@cosmoblastos_aafi></a>
            <Box pb={2} />
            <Typography>
              O en Facebook como:
            </Typography>
            <a target='_blank' href={'https://www.facebook.com/profile.php?id=100063800955106'}>Cosmoblastos-AAFI></a>
            <Box pb={2} />
            <Box display={'flex'}>
              <IconButton target={'_blank'} href={'https://www.instagram.com/cosmoblastos_aafi/'}>
                <InstagramIcon />
              </IconButton>
              <IconButton target={'_blank'} href={'https://www.facebook.com/profile.php?id=100063800955106'}>
                <FacebookIcon />
              </IconButton>
            </Box>
          </Grid>
          {/*<Grid item xs={12} md={6}>*/}
          {/*  <Typography variant={'h5'} className={classes.title}>*/}
          {/*    Contactanos*/}
          {/*  </Typography>*/}
          {/*  <form>*/}
          {/*    <TextField*/}
          {/*      label={'Nombre'}*/}
          {/*      variant={'outlined'}*/}
          {/*      type={'text'}*/}
          {/*      placeholder={'Ingresa tu nombre completo'}*/}
          {/*    />*/}
          {/*    <TextField*/}
          {/*        label={'Correo electrónico'}*/}
          {/*        variant={'outlined'}*/}
          {/*        type={'email'}*/}
          {/*        placeholder={'Ingresa tu correo electrónico'}*/}
          {/*    />*/}
          {/*  </form>*/}
          {/*</Grid>*/}
        </Grid>
      </Container>
    </Box>
  </Box>
}
