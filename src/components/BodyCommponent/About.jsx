import React from 'react'
import {useStyles} from './BodyStyles';
import {Box,Grid,Hidden,Container} from '@material-ui/core';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import LanguageTwoToneIcon from '@mui/icons-material/LanguageTwoTone';
import BubbleChartOutlinedIcon from '@mui/icons-material/BubbleChartOutlined';
import InstallMobileTwoToneIcon from '@mui/icons-material/InstallMobileTwoTone';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import {RenderSectionHeading,Decorator,Divider,CardMedia} from '../common/commonComponent';
import images from '../../assets/images/profile_image.jpeg';
import ScrollAnimation from 'react-animate-on-scroll';
const About = () => {
    const classes = useStyles();
    const CardMediaData = [
        {
            title:"Web Developer",
            description:"Then we put the values according to the relevant headings",
            icon:<LanguageTwoToneIcon />
        },
        {
            title:"Graphic Designrt",
            description:"Then we put the values according to the relevant headings",
            icon:<BubbleChartOutlinedIcon />
        },
        {
            title:"Mobile App",
            description:"Then we put the values according to the relevant headings",
            icon:<InstallMobileTwoToneIcon />
        },
        {
            title:"Marketing ",
            description:"Then we put the values according to the relevant headings",
            icon:<RoomOutlinedIcon />
        }
    ]
  return (
    <Box className={classes.section} Id="About">
        <ScrollAnimation animateIn='fadeIn'>
        <Container maxWidth="xl">
       <Grid container spacing={3}>
            <Grid item sm={5}> 
               <Box 
                 component={Hidden} 
                 xsDown
                 >
                <img src={images} 
                alt="about u"
                 className={classes.responsiveImage}
                 />
               </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
                {RenderSectionHeading({
                smallText:"About Us",
                heading:"Hello I am a Developer",
                description:
                "I am a Front-end-Developer , I also doing the Work of Database Managemant System,,,",
            })}
            <br />
            <Grid container className={classes.GridContainer}>
                {CardMediaData.map((item,i)=>
                <Grid item xs={12} sm={6} key={i} className={classes.GridItems}>
                {CardMedia({
                    label: item.title,
                    Desc:item.description,
                    Icon:item.icon,
                   })}
                   </Grid>
                )}
            </Grid>
            </Grid>
        </Grid>
        </Container>
        </ScrollAnimation>
    </Box>
  )
}

export default About;