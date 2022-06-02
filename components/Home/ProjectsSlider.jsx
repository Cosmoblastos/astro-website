import React from 'react';
import {A11y, Autoplay, Navigation, Scrollbar} from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import {makeStyles} from "@material-ui/styles";
import {Card, CardContent} from "@material-ui/core";

const useProjectCardStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '68vh',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        color: '#fff',
    },

}));

const ProjectCard = () => {
    const classes = useProjectCardStyles();
    return <Card className={classes.root}>
        <CardContent>
            hola
        </CardContent>
    </Card>
};

const ProjectsSlider = () => {
    return <Swiper
        modules={[Navigation, Autoplay, Scrollbar, A11y]}
        spaceBetween={60}
        slidesPerView={1}
        loop={true}
    >
        {
            [1]?.length > 0 && [1].map((project, index) => (
                <SwiperSlide key={index}>
                    <ProjectCard {...project}/>
                </SwiperSlide>
            ))
        }
    </Swiper>
};

export default ProjectsSlider;