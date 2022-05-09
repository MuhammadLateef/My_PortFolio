import React from 'react';
import {Box,Typography,Grid,Avatar} from '@material-ui/core';
import {useStyles} from '../HeaderComponent/HeaderStyle';
import {useStyles as BodyStyles} from '../BodyCommponent/BodyStyles';
export const Decorator = ({label,withIcon,Icon,styles}) =>{
    const classes = useStyles()
    return(
        <>
        <Box className={classes.decorator} style={styles}>
            <Typography component="span" className={classes.decoratorText}>
                {label}
            </Typography>
            {withIcon ? (
            <Typography component="span" className={classes.arrow}>
                {Icon}
            </Typography>
            ):null} 
        </Box>
        </>
    )
}

export const Divider = () =>{
    const classes = BodyStyles();
    return <Typography variant="span" className={classes.divider}></Typography>
}
export const RenderSectionHeading = ({smallText,heading,description,alignCenter,styles}) =>{
    const classes = BodyStyles();
  return(
   <Box className={classes.sectionHeadingCont}> 
   { Decorator({
        label : smallText,
        withIcon : false,
       styles:alignCenter ? {width:"100px",margin:"10px auto"} : {},
   })}
    <Typography
     variant="h4"
     align={alignCenter ? "center" : "left"}
     className={classes.sectionHeading}>
     {heading}component
    </Typography>
    {Divider()}
    <Typography 
    variant="body1"
    component='h6'
    align={alignCenter ? "center" : "left"} 
    className={classes.sectionDesc}>
        {description}
    </Typography>
    </Box>
    )
};

export const CardMedia = ({label,Desc,Icon,key}) =>{
    const classes = useStyles();
    return(
        <Grid container key={key}>           
            <Grid item xs={3} className={classes.AvatarCount}>              
                <Avatar className={classes.avatar}>{Icon}</Avatar>
            </Grid>            
            <Grid item xs={9} className={classes.MediaText}>
                <Typography variant="body1" component='h6'gutterButton>
                    {label}
                </Typography>
                <Typography variant="caption" gutterButton>
                    {Desc}
                </Typography>
            </Grid>
        </Grid>
    )
}