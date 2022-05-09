import {makeStyles} from '@material-ui/core';
import Theme from './Theme';
import image from '../../assets/images/img1002.jpg';
export const useStyles = makeStyles((theme)=>({
  HeadeWraper:{
      width:"100%",
      minHeight:"90vh",
      height:'auto',
      background:`linear-gradient(to bottom right,#04303140,#00606473),url(${image})`,
      backgroundSize:"cover",
      backgroundRepeat:"no-repeat",
      backgroundPosition:"center",
      
  },
  Headercontainer:{
      minHeight:"100vh",
      height:'auto',
      display:"flex",
      flexFlow:"column wrap",
      alignItem:"center",
      justifyContent:"center",
      paddingLeft:"30px",
      color:Theme.colors.base2,
      fontFamily:"roboto",
      // position:"relative",

      "&:before":{
     width:"45px",
      height:"45px",
      backgroundColor:Theme.colors.base2,
      content:'""',
      borderRadius:"50px",
      left:"90%",
      top:"50px",
      },
  },
  headerTitle:{
    fontSize:"3rem",
    margin:theme.spacing(1,0),
    fontWeight:"bolder",
    [theme.breakpoints.down("xs")]:{
      fontSize:"2rem",
    }
  },
  headerDesc:{
    width:"100%",
    fontSize:"2rem",
    fontWeight:"bolder",
    margin:theme.spacing(1,0),
    [theme.breakpoints.down("xs")]:{
      fontSize:"1.3rem",
      margin:theme.spacing(2,0)
    }
  },
  // (((((((((((((((((((((((((((((((NavBar Styling)))))))))))))))))))))))))))))))
  navbar:{
    backgroundColor:Theme.colors.base1,
    color:Theme.colors.base2,
    width:"100%",
  },
  Toolbar:{
    display:"flex",
    flexFlow:"row wrap",
    justifyContent:"space-between"
  },
  navLinks:{
    color:Theme.colors.base2,
  },
  //Decorator
  decorator:{
    display:"flex",
    fontWeight:"bolder",
    fontFamily:"roboto",
    position:"relative",
    marginTop:"20px",
    '&:before':{
      width:"45px",
      height:"45px",
      backgroundColor:Theme.colors.primary,
      content:'""',
      borderRadius:"50px",
    },   
  },
  decoratorText:{
    lineHeight:"45px",
    position:"absolute",
    left:"25px",
  },
  arrow:{
    lineHeight:"60px",
    position:"absolute",
    left:"95px",
    animationName:"upDown",
    animationDuration:"0.5s",
    animationIterationCount:"infinite",
  },
  //creating Animation
  "@global":{
    "keyframes upDown":{
      "0%":{
        transform:"scale(1,1)",
        paddingTop:"10px",
      },
      "100%":{
        transform:"scale(1,2)",
        paddingTop:"0px",
        },
    },
  },
  //drawer styles start here/........................
  Drawer:{
    width:"250px",
    height:"100vh",
  },
  drawerWraper:{
    width:"250px",
    height:"100vh",
    backgroundColor:Theme.colors.primary1,
  },


  ListItem:{
    color:Theme.colors.base2,
  },
}));
