
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode,setMode]=useState('light'); 

 let toggleMode =()=>{
  if(mode==='light'){
  setMode('dark');
  document.body.style.backgroundColor="#131f3b";
  }
  else{
    setMode('light');
    document.body.style.backgroundColor="white";

  }
 }
  return (
<>
<Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/> 
<div className="container my-3" mode={mode} >
<TextForm  heading="Enter text to analyze" mode={mode}/>
</div>
</>
  );
}

export default App;
