import React from 'react';
import { IconButton } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

export function InstagramIconButton ({ color }) {
    return <IconButton style={{ color }} target={'_blank'} href={'https://www.instagram.com/cosmoblastos_aafi/'}>
        <InstagramIcon color={'inherit'} />
    </IconButton>;
}

export function FacebookIconButton ({ color }) {
    return <IconButton style={{ color }} target={'_blank'} href={'https://www.facebook.com/profile.php?id=100063800955106'}>
        <FacebookIcon color={'inherit'} />
    </IconButton>;
}