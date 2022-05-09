import React,{useState} from 'react';
import {Box,Typography} from '@material-ui/core';
import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
import Navbar from './Navbar';
import {useStyles} from './HeaderStyle';
import {Decorator} from '../common/commonComponent';
import {DrawerComponent} from './DrawerComponent';
import Typed from 'react-typed'

const HeaderComponent = () => {
  const classes = useStyles();
  const [initialState,setInitialState] = useState(false);
  const handleDrawerTooglar = () =>{
    setInitialState(!initialState);
  };
  const navLinks = [
    { label:"About",Id:"About"},
    { label:"Contect",Id:"Contect"},
    { label:"Portfolio",Id:"Portfolio"},
];
  return (
    <>
    <div>
    <Box className={classes.HeadeWraper} Id="HeaderComponent">
    <Navbar navLinks={navLinks} handleDrawerTooglar={handleDrawerTooglar} />
     <DrawerComponent
      initialState={initialState}
      navLinks={navLinks}
      handleDrawerTooglar={handleDrawerTooglar}
       />
       <Box className={classes.Headercontainer}>
        <Typography className={classes.headerTitle}>
        I am a <span style={{paddingRight:"8px"}}></span>
        <Typed
         strings={[
           "Web-Developer...",
           "UI/UX Designer....",
           "Digital Markiter...",
           "Content Writter....."
         ]}
         typedSpeed={60}
         backSpeed={50}
         loop
         />
        </Typography>
        <Typography className={classes.headerDesc}>
       Develop and Design Responsive WEB-SITES <br /> With Less Amount.
        </Typography>
        {Decorator({
          label:"About Us",
          withIcon:true,
          Icon:<ArrowDownwardTwoToneIcon />,
          })}
       </Box>
    </Box>
    </div>
    </>
  )
}

export default HeaderComponent;