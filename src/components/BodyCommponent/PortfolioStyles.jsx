import {makeStyles} from '@material-ui/core'
import Theme from './Theme';
export const useStyles = makeStyles((theme)=>({
    sectionDark:{
        backgroundColor:Theme.colors.primary1,
        padding:theme.spacing(10,0,8,0)
    },
    responsiveImage:{
        width:"100%",
        height:"50vh",
    },
    imageContainer:{
        position:"relative",
        '&:hover $overlay':{
            opacity:1,
        },
    },
    overlay:{
        position:"absolute",
        width:"100%",
        height:"100%",
        // some thing went wroung here........
        top:0,
        left:0,
        backgroundColor:Theme.colors.primary,
        color:Theme.colors.base2,
        display:'flex',
        flexFlow:"column wrap",
        justifyContent:"center",
        alignItems:"center",
        opacity:0,
        transition:".8s"
    },
    overlayTitle:{
        fontSize:"2rem",
        marginButtom:"16px",
        [theme.breakpoints.down('xs')]:{
            fontSize:"1.4rem",
        },
    }
}))