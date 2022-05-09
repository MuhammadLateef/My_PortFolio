import React from 'react';
import {Grid,Box,Container,Typography,Button} from '@material-ui/core';
import {useStyles} from './PortfolioStyles';
import {RenderSectionHeading} from '../common/commonComponent';
import image1 from '../../assets/images/profile_image.jpeg';
import image2 from '../../assets/images/img1015.jpg';
import image3 from '../../assets/images/img1007.jpg';
import image4 from '../../assets/images/img1010.jpg';
import image5 from '../../assets/images/img1009.jpg';
import image6 from '../../assets/images/img1016.jpg';
import ScrollAnimation from 'react-animate-on-scroll';
const Portfolio = () => {
    const classes = useStyles();
    const portfolioData = [
        {url:image1,title:"I am a Developer....",link:""},
        {url:image2,title:"light Issues",link:""},
        {url:image3,title:"My favariot FOOD...",link:""},
        {url:image4,title:"little Grils",link:""},
        {url:image5,title:"Cheebs I like it...",link:""},
        {url:image6,title:"Univarsity Time ,,,,,,,",link:""},
    ];
  return (
      <>
      <Box className={classes.sectionDark} Id="Portfolio">
      <Grid container style={{display:"flex",justifyContent:"center",alignCenter:"center"}}>
          <Grid item xs={12} sm={8} >
              {RenderSectionHeading({
                  smallText:"Portfolio",
                  heading:"let Check My Work",
                  alignCenter:true,
              })}
          </Grid>
      </Grid>
      {/* img section  */}
      <ScrollAnimation animateIn="fadeIn">
      <Container maxWidth='xl'>
      <Grid container spacing={3}>
          {portfolioData.map((item,i)=>(
          <Grid item xs={6} sm={6} lg={4} key={i}>
              <Box className={classes.imageContainer}>
                  <img src={item.url}
                   alt={item.title} 
                   className={classes.responsiveImage} />              
              <Box className={classes.overlay}>
                  <Typography className={classes.overlayTitle}>
                      {item.title}
                  </Typography>
                  <Button variant="contained" className={classes.buttonStyle}> Click ME</Button>
              </Box>
              </Box> 
          </Grid>
          ))}
      </Grid> 
      </Container>
      </ScrollAnimation>
      </Box>
    </>
  )
}
export default Portfolio;