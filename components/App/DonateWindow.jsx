import React, {useEffect, useState} from 'react';
import {Dialog, DialogContent, makeStyles, Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        color: '#222',
        [theme.breakpoints.up('md')]: {
            width: '500px',
        }
    }
}));
export default function DonateWindow ({ open, onClose, initialized, setInitialized }) {
    const classes = useStyles();

    useEffect(() => {
        console.log('executed...........');
        const to = setTimeout(() => {
            PayPal.Donation.Button({
                env: 'production',
                hosted_button_id:'QH5ZR6F7YWVCW',
                image: {
                    src:'https://www.paypalobjects.com/es_XC/MX/i/btn/btn_donateCC_LG.gif',
                    alt:'Donar con el botón PayPal',
                    title:'PayPal - The safer, easier way to pay online!',
                }
            }).render('#donate-button');
        }, 100);
        return () => {
            clearTimeout(to);
        };
    });

    return <Dialog open={open} onClose={onClose} classes={{ paper: classes.root }}>
        <DialogContent>
            <Box pb={2}>
                <Box pb={2}>
                    <Typography variant={'h4'} gutterBottom>
                        Donar
                    </Typography>
                    <Typography variant={'h6'}>
                        Tu donación nos ayudará a llevar la medicina y tecnología de México al espacio 🚀
                    </Typography>
                </Box>
                <Box pb={2}>
                    <Typography gutterBottom style={{ fontWeight: 'bold' }}>
                        Puedes donar a nuestra cuenta:
                    </Typography>
                    <Typography>
                        Karina Raquel Cortés Marical
                    </Typography>
                    <Typography>
                        315233304
                    </Typography>
                </Box>
                <Box pb={2}>
                    <Typography gutterBottom style={{ fontWeight: 'bold' }}>
                        O mediante PayPal:
                    </Typography>
                    <div id="donate-button-container">
                        <div id="donate-button" />
                    </div>
                </Box>
            </Box>
        </DialogContent>
    </Dialog>
};