
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";





function App() {


  
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
   <FontAwesomeIcon size="2x" icon={faCircleExclamation} />
    <h1 className="text-5xl font-bold text-red-600">404</h1>
    <h2 className="text-2xl font-semibold mt-2">Oops! Something went wrong.</h2>
    <p className="text-lg text-gray-600 mt-2">
      Please contact your developer to resolve this issue.
    </p>
    <a href="/" className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
      Go Back Home
    </a>
  </div>
  );
}



    {/* <Router>
      <Routes> */}
        {/* Main Home Page */}
        {/* <Route path="/" element={<Home />} /> */}

        {/* This route will show only the Projects page */}
        {/* <Route path="/projects-only" element={<Projects />} /> */}
      {/* </Routes>
    </Router>

    <Navbar/>
    <Clients/>
    <Services/>
    <Aboutus/>
    <Contactus/>
    <Form/>
    <Footer/> */}
//     </>
//     </div>
//   );
// }

export default App;
