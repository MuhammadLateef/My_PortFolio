import React from 'react'
import {Box,Drawer,List,ListItem,ListItemText} from '@material-ui/core';
import {useStyles} from './HeaderStyle';

export const DrawerComponent = ({initialState,navLinks,handleDrawerTooglar,}) => {
    const classes = useStyles()
  return (
      <>
        <Drawer anchor="left"
         open={initialState}
         onClose={handleDrawerTooglar}
         className={classes.Drawer}>
             <Box className={classes.drawerWraper}>
                 <List style={{paddingTop:"30px"}}>
                     {navLinks.map((item,i)=>(
                         <ListItem key={i} className={classes.ListItem}>
                         <ListItemText>
                             {item.label}
                         </ListItemText>
                     </ListItem>
                     ))}
                 </List>
            </Box>
        </Drawer>
    </>    
  )
}