
import './App.css';
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


function App() {
  return (
    <div className="App">
    <>
    <Navbar/>
    <Home/>
    <Aboutus/>
    <Clients/>
    <Services/>
    <Projects/>
    <Contactus/>
    <Footer/>
    </>
    </div>
  );
}

export default App;
