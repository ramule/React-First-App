import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'React App - Dark mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "warning");
      document.title = 'React App - Light mode';
    }
  }

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
  }
  return (
    <>
    <Router>
        <Navbar title="FirstReactApp" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        {/* <div className='container mt-3'>
        <TextForm heading="Enter text to analyze"/>
        </div> */}
        {/* <div className='container mt-3'>
          <Link to='/about'>
            <About/>
          </Link>
          <Link to='/'>
            <TextForm heading="Enter text to analyze"/>
          </Link>
        </div> */}
        <Routes>
          <Route exact path='/' element={< TextForm heading="Enter text to analyze" mode = {mode} />}></Route>
          <Route exact path='/about' element={< About mode = {mode} />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
