import React from 'react';
import {Button,Grid,TextField,Paper,Link} from '@material-ui/core'
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import ContectComponent from './components/HeaderComponent/ContectComponent';
import About from './components/BodyCommponent/About';
import Portfolio from './components/BodyCommponent/Portfolio';
import Contect from './components/BodyCommponent/Contect';
import Footer from './components/BodyCommponent/Footer';
const App = () =>{
  return(
    <>
    <HeaderComponent />
    <About />
    <Portfolio />
    <Contect />
    <Footer />
 </>
  );
}
export default App;
