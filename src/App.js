
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './AllComp/Navbar';
import Home from './AllComp/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Aboutus from './AllComp/Aboutus';
import Clients from './AllComp/Clients';
import Services from './AllComp/Services';
import Projects from './AllComp/Projects';
import Contactus from './AllComp/Contactus';
import Footer from './AllComp/Footer';
import Form from "./AllComp/Form"



function App() {


  
  return (
    <div className="App">
    <>
    <Router>
      <Routes>
        {/* Main Home Page */}
        <Route path="/" element={<Home />} />

        {/* This route will show only the Projects page */}
        <Route path="/projects-only" element={<Projects />} />
      </Routes>
    </Router>

    <Navbar/>
    <Clients/>
    <Services/>
    
    <Aboutus/>
    <Contactus/>
    <Form/>
    <Footer/>
    </>
    </div>
  );
}

export default App;
