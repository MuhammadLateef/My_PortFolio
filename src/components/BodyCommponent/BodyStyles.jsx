import {makeStyles} from '@material-ui/core';
import Theme from './Theme';
export const useStyles = makeStyles((theme)=>({
    section:{
        backgroundColor:Theme.colors.base1,
        padding:theme.spacing(10,0,8,0),
    },
    divider:{
        width:"65px",
        height:"4px",
        backgroundColor: Theme.colors.primary,
    },
    responsiveImage :{
        width:"100%",
        height:"auto",
    },
    sectionHeadingCont:{
        padding:theme.spacing(1),
        color:Theme.colors.base2,

    },
    sectionHeading:{
        color:Theme.colors.base2,
        margin:theme.spacing(2,0),
    },
    sectionDesc :{
        // color:Theme.colors.base2
    },
    AvatarCount:{
            display:"flex",
            flexFlow:"row",
            justifyContent:"center",
            alignItem:"center",
            color:Theme.colors.base1,
    },
    avatar:{
        backgroundColor:Theme.colors.primary1,
    },
    MediaText:{
        color:Theme.colors.primary1,
        fontSize:"20px",
    },
    text:{
        color:Theme.colors.base2,
    },
    GridContainer:{
        fontWeight:"10rem",
        color:'white',
    },
    GridItems:{
    },

    // Contect Styling Happen Here OK........................
    submitBtn:{
        backgroundColor:Theme.colors.primary,
        color:Theme.colors.base2,
        '&:hover':{
            backgroundColor:Theme.colors.base1,
        },
    },
    // Footer section start here.. 
    footerContainer:{
        backgroundColor:Theme.colors.primary1,
        color:Theme.colors.base2,
        padding:theme.spacing(2),
        position:"relative",
    },
    iconButton:{
        position:"absolute",
        right:5,
        top:-25,
        backgroundColor:Theme.colors.primary,
        color:Theme.colors.base2,
    }

}))


