import { BottomNavigation, Box, Typography } from '@material-ui/core';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

const Footer = (props) => {

    return (
        <div>
                <Box display="flex" flexDirection="column" justifyContent="center">
                    <Typography variant="h6" align="center" gutterBottom>
                        Blog
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="inherit" component="p">
                        {'Copyright © Alpha Development Inc. 2021'}
                    </Typography> 
                </Box>

        </div>
    );

};

export default Footer;