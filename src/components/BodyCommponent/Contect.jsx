import React,{useState} from 'react'
import {useStyles} from './BodyStyles';
import {Box,Grid,Hidden,Container,Button} from '@material-ui/core';
import {RenderSectionHeading} from '../common/commonComponent';
import {RenderInputText} from '../common/FormComponent'
import images from '../../assets/images/img1008.jpg';
import ScrollAnimation from 'react-animate-on-scroll';
const Contect = () => {
    const classes = useStyles();
    const [state,setState] = useState({
        data:{
          firstname:"",
            email:"",
            messages:"",
        },
        // errors:{},
    });
  const handChangeEvent = ({target}) =>{
    const {data} = state;
      // const {data,errors} = state;
    //   setting Error
    // target.value.length <= 3
    // ? (errors[target.name] = `${target.name} must at least 3 characters`)
    // :(errors[target.name] = "");
      data[target.name] = target.value;
      // setState({data:errors});
      setState({data:data})
    }
    const handleSubmit = (e) =>{
      e.preventDefault()
      console.log("Form is Successfuly Submitted",state.error)
    }
  return (
    <Box className={classes.section} Id="Contect">
      <ScrollAnimation animateIn="fadeIn">
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
                smallText:"Contect ME",
                heading:"Seems To be Interesting",
                description:
                "Got my portfolio seen ,then feel free to Contect ME for your future projects !!!!!",
            })}
            <br />
            <form onSubmit={handleSubmit}>
            <Grid container
            direction="row"
            justify="center"
            alignItems="center"
              spacing={2}>
                <Grid item xs={12} sm={10}>
                   {RenderInputText({
                       label:"first Name",
                       name:"firstname",
                       state:state,
                       onChange:handChangeEvent,
                   })}
                </Grid>
                <Grid item xs={12} sm={10}>
                    {RenderInputText({
                       label:"Email",
                       name:"email",
                       state:state,
                       onChange:handChangeEvent,
                   })}
                </Grid>
                <Grid item xs={12} sm={10}>
                    {RenderInputText({
                        label:"messages",
                        name:"messages",
                        state:state,
                        onChange:handChangeEvent,
                        multiline:true,
                        rows:5,
                    })}
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Button
                     variant="outlined"
                     type="submit"
                     fullWidth={true}
                     className={classes.submitBtn}>
                        Submited
                    </Button>
                </Grid>
            </Grid>
            </form>
            </Grid>
        </Grid>
        </Container>
        </ScrollAnimation>
    </Box>
  )
}

export default Contect;



