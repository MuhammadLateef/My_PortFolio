import {AppBar,Toolbar,Typography,Button,Box,Hidden,IconButton} from '@material-ui/core';
import {useStyles} from "./HeaderStyle";
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';
import {Link} from 'react-scroll'

const Navbar = ({navLinks,handleDrawerTooglar}) => {
    const classes  = useStyles()
  return (
      <>
         <AppBar position="fixed" className={classes.navbar}>
             <Toolbar className={classes.Toolbar}>
               <Typography variant="h6">
                 GreatCoder
                </Typography>
                {/* navlinks */}
                <Box component={Hidden} xsDown>
                  <Box>
                { navLinks.map((item,i)=>(
                    <Button className={classes.navLinks}
                    activeClass="active"
                    to={`${item.Id}`}
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-70}
                    duration={500}
                    color='inherit'
                    component={Link}
                    >
                      {item.label}
                    </Button>
                ))}
                 </Box>
                </Box>
                <Box component={Hidden} smUp>
                <IconButton color="inherit" onClick={handleDrawerTooglar}>
                   <MenuOpenRoundedIcon />
                </IconButton>
                </Box>
             </Toolbar>
         </AppBar>
      </>
  )
}

export default Navbar;