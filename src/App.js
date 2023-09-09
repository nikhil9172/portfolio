
import './App.css';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import  '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import Navbar from './Componenet/Navbar';
import About from './Componenet/About'
import Contact from './Componenet/Contact';
import Project from './Componenet/Project';
import Footer from './Componenet/Footer'
import Home from './Componenet/Home'


import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div  className="mt-2">
       <Navbar/>
   

        
        <Routes>
                <Route exact path='/' element={<Home/>}></Route>
                <Route exact path='/home' element={<Home/>}></Route>
                <Route exact path='/about' element={<About/>}></Route>
                <Route exact path='/project' element={<Project/>}></Route>
                <Route exact path='/contact' element={<Contact/>}></Route>
               
        </Routes>
        
  
    

   
    <Footer/>
    </div>
  );
}

export default App;
