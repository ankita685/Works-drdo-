import React, {useState} from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Info from './Components/Info/Info'
import Search from './Components/Search/Search'
import Support from './Components/Support/Support'
import Any from './Components/Any/Any'
import Footer from './Components/Footer/Footer'
import Form from './Components/Form/Form'
import 'bootstrap/dist/css/bootstrap.min.css';

import ProductList from './Components/Products/ProductList'
import { animateScroll as scroll } from 'react-scroll';
import { Element } from 'react-scroll';

const App = () => {


  const [currentPage, setCurrentPage] = useState();

  const navigateTo = (page) => {
    console.log('Navigating to:', page);
    setCurrentPage(page);
    scroll.scrollToTop();
  };

  console.log('Current Page:', currentPage);
  return (
   
    <div>
    
      <Navbar navigateTo={navigateTo}/>
      <hr />
      <Element name="home" className="scrollable-section">
        <Home />
      </Element>

      <Element name="info" className="scrollable-section">
        <Info />
      </Element>
      
      <Element name="organization" className="scrollable-section">
      <Search/>
      </Element>
      <Element name="works" className="scrollable-section">
      <Support/>
  
      </Element>
      
      <Any/>
     
      <Element name="form" className="scrollable-section">
      <Form/>
      </Element>
    
   
       <Element name="complaints" className="scrollable-section">
       <ProductList/> 
      </Element>
  
 

  <Footer/>
  


 

    </div>






  );
};

export default App



