import logo from './logo.svg';
import './App.css';
import Navbar from './AllComp/Navbar';
import Home from './AllComp/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Aboutus from './AllComp/Aboutus';

function App() {
  return (
    <div className="App">
    <>
    <Navbar/>
    <Home/>
    <Aboutus/>
    </>
    </div>
  );
}

export default App;
