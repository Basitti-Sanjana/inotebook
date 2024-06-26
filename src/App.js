import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import SignUp from './components/SignUp';
import {useState} from 'react'

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert =(message,type)=>{
    setAlert({
     msg:message,
     type:type
    })
    setTimeout(()=>{
     setAlert(null)
    },2000)
 }
  return (
    <>
      <NoteState>
        <Navbar />
        <Alert alert={alert}/>
        <div className='container'>
          <Routes>
            <Route exact path="/" element={<Home showAlert={showAlert} />}></Route>
            <Route exact path="/About" element={<About />}></Route>
            <Route exact path="/Login" element={<Login showAlert={showAlert}/>}></Route>
            <Route exact path="/SignUp" element={<SignUp showAlert={showAlert}/>}></Route>
          </Routes>
        </div>
      </NoteState>
    </>
  );
}

export default App;
