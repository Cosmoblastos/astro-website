import React from 'react';
import {makeStyles, useTheme} from "@material-ui/styles";
import SwiperCore, { Navigation, Autoplay, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

<<<<<<< Updated upstream:components/Home/MembersSlider.jsx
import {Card, CardActionArea, CardContent, Typography, useMediaQuery} from "@material-ui/core";
=======
<<<<<<< Updated upstream:components/MembersSlider.jsx
import {Card, CardActionArea, CardContent, Typography} from "@material-ui/core";
=======
import {Card, CardActionArea, CardContent, Grid, Typography, useMediaQuery} from "@material-ui/core";
>>>>>>> Stashed changes:components/Home/MembersSlider.jsx
>>>>>>> Stashed changes:components/MembersSlider.jsx
import Box from "@material-ui/core/Box";
import MembersData from '../../data/members.json';

const useMemberCardStyles = makeStyles((theme) => ({
    root: {
        height: '300px',
<<<<<<< Updated upstream:components/MembersSlider.jsx
        backgroundColor: 'transparent',
        border: `1px solid rgba(255, 255, 255, 0.4)`,
        boxShadow: 0,
<<<<<<< Updated upstream:components/Home/MembersSlider.jsx
        borderRadius: '8px',
=======
        borderRadius: '4px',
=======
        background: 'rgba(175,162,255,0.1)',
        border: '2px solid #AFA2FF',
        borderRadius: '8px',
>>>>>>> Stashed changes:components/Home/MembersSlider.jsx
>>>>>>> Stashed changes:components/MembersSlider.jsx
        backgroundSize: 'cover',
    },
    content: {
        display: 'grid',
        gridTemplate: '150px 150px / 1fr',
        color: '#fff'
    },
    picture: {
        width: '130px',
        height: '130px',
<<<<<<< Updated upstream:components/Home/MembersSlider.jsx
        borderRadius: '50%',
=======
<<<<<<< Updated upstream:components/MembersSlider.jsx
        borderRadius: '50%'
=======
        borderRadius: '50%',
        border: '4px solid #AFA2FF',
>>>>>>> Stashed changes:components/Home/MembersSlider.jsx
>>>>>>> Stashed changes:components/MembersSlider.jsx
    },
    title: {
        fontWeight: 'bold',
        fontSize: '15px',
    },
    description: {
        textAlign: 'left'
    }
}));

const MemberCard = ({ name, description, image }) => {
    const classes = useMemberCardStyles();
    return <Card className={classes.root} elevation={0}>
        <CardActionArea>
            <CardContent className={classes.content}>
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Box
                        className={classes.picture}
                        style={{
                            backgroundImage: `url(${image})`,
                            backgroundPosition: 'center center',
                            backgroundSize: 'cover',
                        }}
                    />
                </Box>
<<<<<<< Updated upstream:components/Home/MembersSlider.jsx
                <Box color={'inherit'}>
                    <Typography variant={'h6'} className={classes.title} gutterBottom color={'inherit'}>
                        {name}
                    </Typography>
                    <Typography color={'inherit'}>
=======
<<<<<<< Updated upstream:components/MembersSlider.jsx
                <Box>
                    <Typography variant={'h6'} className={classes.title} gutterBottom>
                        {name}
                    </Typography>
                    <Typography>
=======
                <Box color={'inherit'} className={classes.description}>
                    <Typography variant={'h6'} className={classes.title} gutterBottom color={'inherit'}>
                        {name}
                    </Typography>
                    <Typography color={'inherit'} style={{ fontSize: '0.9rem' }}>
>>>>>>> Stashed changes:components/Home/MembersSlider.jsx
>>>>>>> Stashed changes:components/MembersSlider.jsx
                        {description}
                    </Typography>
                </Box>
            </CardContent>
        </CardActionArea>
    </Card>
};

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4)
    }
}));

const MembersSlider = () => {
    const classes = useStyles(),
        theme = useTheme(),
        isMd = useMediaQuery(theme.breakpoints.up('md'));

    return <Swiper
        modules={[Navigation, Autoplay, Scrollbar, A11y]}
        autoplay={{ delay: 3000 }}
        className={classes.root}
        spaceBetween={60}
<<<<<<< Updated upstream:components/Home/MembersSlider.jsx
        slidesPerView={isMd ? 4 : 1}
=======
<<<<<<< Updated upstream:components/MembersSlider.jsx
        slidesPerView={4}
        loop={true}
=======
        slidesPerView={isMd ? 5 : 1}
>>>>>>> Stashed changes:components/Home/MembersSlider.jsx
>>>>>>> Stashed changes:components/MembersSlider.jsx
        breakpoints={{
            320: {
                slidesPerView: 1,
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            960: {
                slidesPerView: 3,
                spaceBetween: 25,
            },
            1280: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
        }}
    >
        {
            MembersData?.length > 0 && MembersData.map((member) => (
                <SwiperSlide key={member.id}>
                    <MemberCard {...member}/>
                </SwiperSlide>
            ))
        }
    </Swiper>
    // return <Grid container spacing={2}>
    //     {
    //         MembersData?.length > 0 && MembersData.map((member) => (
    //             <Grid item key={member.id}>
    //                 <MemberCard {...member}/>
    //             </Grid>
    //         ))
    //     }
    // </Grid>
};

export default MembersSlider;