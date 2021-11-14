import {  Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Navigation from './Navigation';
import './../style/App.css';
import './../style/Navigation.css';

function App() {
  return (      
     <div>
       <Navigation />
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" component={Contact}/> */}
        </Routes>
     </div> 
  );
}

export default App;
