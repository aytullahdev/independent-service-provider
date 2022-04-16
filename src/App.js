import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Mainsection from './components/Main/Mainsection';
import { useState } from 'react';
function App() {
    const [viewmode, setViewmode] = useState(false)
    const toggleviewmode=()=>{
           
            setViewmode(!viewmode);
         
    }
  return (
    <div className={`App  ${viewmode?'dark':' '}`}>
        <div className='dark:bg-slate-900 bg-gray-100'>
          <Header toggleviewmode={toggleviewmode}/>
          <Mainsection/>
          <Footer/>
        </div>

          


     </div>
  );
}

export default App;
