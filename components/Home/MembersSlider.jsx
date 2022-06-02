import React from 'react';
import {makeStyles, useTheme} from "@material-ui/styles";
import SwiperCore, { Navigation, Autoplay, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import {Card, CardActionArea, CardContent, Typography, useMediaQuery} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import MembersData from '../../data/members.json';

const useMemberCardStyles = makeStyles((theme) => ({
    root: {
        height: '300px',
        backgroundColor: 'transparent',
        border: `1px solid rgba(255, 255, 255, 0.4)`,
        boxShadow: 0,
        borderRadius: '8px',
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
        borderRadius: '50%',
    },
    title: {
        fontWeight: 'bold',
        fontSize: '15px',
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
                <Box color={'inherit'}>
                    <Typography variant={'h6'} className={classes.title} gutterBottom color={'inherit'}>
                        {name}
                    </Typography>
                    <Typography color={'inherit'}>
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
        slidesPerView={isMd ? 4 : 1}
        breakpoints={{
            320: {
                slidesPerView: 1,
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            960: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            1280: {
                slidesPerView: 4,
                spaceBetween: 60,
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
};

export default MembersSlider;