import './App.css'
import { BrowserRouter, Route, Routes, } from 'react-router-dom';

import Login from './Auth/Login';
import Register from './Auth/Register';
import Home from './Home/Home';



function App() {


  return (
 <div>
    <BrowserRouter>
       <Routes>
        
         <Route path = "/login" element ={<Login/>}/>
         <Route path = "/register" element ={<Register/>}/>
         <Route path = "/" element ={<Home/>}/>

         
         
        
       </Routes>
    </BrowserRouter>
  </div>
  
  );
}

export default App
