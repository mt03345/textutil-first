//1-app.js
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type) =>{
  setAlert({
    msg : message,
    type : type
  })
  setTimeout(() => {
    setAlert(null);
  }, 2000);
  }
  const toggelMode =()=>{
  if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = '#042743'
    showAlert("Dark mode has been enabled", "success ")
    document.title = "Textutils - Dark Mode";
    // setInterval(() => {
    //   document.title = "Textutils is amazing";

    // }, 2000);
    // setInterval(() => {
    //   document.title = "install Textutils now";
    // }, 1500);
  }  
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white'
    showAlert("light mode has been enabled", "success")
    document.title = "Textutils - light Mode";
  }
  }
  return (
   <>
{/* <Navbar title="Textutils" aboutText="This is About" /> */}
<Navbar title="Textutils" mode={mode} toggelMode={toggelMode}/>
{/* <Alert alert={alert}/> */}
<div className="container my-3">
<TextForm heading="This is heading" showAlert={showAlert} mode={mode}/>
<About/>
</div>
     
{/* <About/> */}
   </>
  );
}
export default App;
