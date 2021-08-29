import React from 'react';
import {makeStyles} from "@material-ui/styles";
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Autoplay]);

// Import Swiper styles
import 'swiper/css';
import {Card, CardActionArea, CardContent, Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import MembersData from '../data/members.json';

const useMemberCardStyles = makeStyles((theme) => ({
    root: {
        height: '300px',
        backgroundColor: 'transparent',
        border: `1px solid ${theme.palette.grey[800]}`,
        boxShadow: 0,
        borderRadius: '4px'
    },
    content: {
        display: 'grid',
        gridTemplate: '150px 150px / 1fr'
    },
    picture: {
        width: '130px',
        height: '130px',
        borderRadius: '50%'
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
                <Box>
                    <Typography variant={'h6'} className={classes.title} gutterBottom>
                        {name}
                    </Typography>
                    <Typography>
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
    const classes = useStyles();
    return <Swiper
        autoplay={{ delay: 3000 }}
        className={classes.root}
        spaceBetween={60}
        slidesPerView={4}
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
            MembersData?.length > 0 && MembersData.map((member, index) => (
                <SwiperSlide key={index}>
                    <MemberCard {...member}/>
                </SwiperSlide>
            ))
        }
    </Swiper>
};

export default MembersSlider;