import logo from './logo.svg';
import './App.css';
import Navbar from './AllComp/Navbar';
import Home from './AllComp/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <>
    <Navbar/>
    <Home/>
    </>
    </div>
  );
}

export default App;
