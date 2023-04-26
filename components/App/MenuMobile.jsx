import React, {useState} from 'react';
import {Button, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import HomeIcon from '@material-ui/icons/Home';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import PeopleIcon from '@material-ui/icons/People';

const useStyles = makeStyles((theme) => ({
    paper: {
        width: '70vw',
        backgroundColor: theme.palette.background.paper,
        color: '#000'
    }
}));

const MenuMobile = ({ open, onClose, toggleDonateWindowOpen }) => {
    const classes = useStyles();

    const handleRedirection = (link) => {
        window.location = link;
        onClose();
    };

    return  <Drawer
        anchor='left'
        open={open}
        onClose={onClose}
        classes={{
            paper: classes.paper
        }}
    >
        <Box p={2}>
            <List>
                {
                    [
                        {
                            name: 'Inicio',
                            link: '#home',
                            icon: <HomeIcon />
                        },
                        {
                            name: 'Nosotros',
                            link: '#whoWeAre',
                            icon: <PeopleIcon />
                        },
                        {
                            name: 'Contacto',
                            link: '#contact',
                            icon: <ContactMailIcon />
                        },
                    ].map((item, index) => (
                        <ListItem key={item.name} onClick={() => handleRedirection(item.link)}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText>
                                {item.name}
                            </ListItemText>
                        </ListItem>
                    ))
                }
            </List>
            <Button
                fullWidth
                variant={'contained'} color={'primary'} onClick={toggleDonateWindowOpen}>
                donar
            </Button>
        </Box>
    </Drawer>;
};

export default MenuMobile;