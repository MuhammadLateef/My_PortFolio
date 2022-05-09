import React from 'react';
import {Box,IconButton,Typography} from '@material-ui/core';
import {useStyles} from './BodyStyles';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Link} from 'react-scroll';

const Footer = () => {
    const classes = useStyles();
    const date = new Date();
  return (
    <Box className={classes.footerContainer} Id ="Footer">
        <IconButton className={classes.iconButton}
            to="HeaderComponent"
            spy={true}
            smooth={true}
           hashSpy={true}
            offset={-70}
            duration={1500}
            color='inherit'
            component={Link}
        >
            <ArrowUpwardIcon />
        </IconButton>
        <Typography 
        variant="body1" 
        component="h3" 
        align="center" 
        color="inherit">
            Developed and Design by 
             <FavoriteIcon style={{color:"red"}}/>
              By Muhammad Latif KharManGi 
            , All Right Reserved @{date.getFullYear()}
        </Typography>
    </Box>
  )
}

export default Footer