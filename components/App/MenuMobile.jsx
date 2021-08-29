import React, {useState} from 'react';
import {Drawer, makeStyles} from "@material-ui/core";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: theme.palette.background.paper,
        color: '#000'
    }
}));

const MenuMobile = ({ open, onClose }) => {
    const classes = useState();
    return  <Drawer
        anchor='left'
        open={open}
        onClose={onClose}
        classes={{
            paper: classes.paper
        }}
    >
        <Box p={2}>
            hola
        </Box>
    </Drawer>;
};

export default MenuMobile;