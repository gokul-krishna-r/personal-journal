import './App.css';
import Data from '././data.js'
import React,{useState} from 'react';
import TextBox from './components/textbox';
import JournalList from './components/jounal_list';

function App() {
  const [array,setArray]=useState(Data);

  return (
    <div>
   
    <div className="container">
      <TextBox/>
      <JournalList journals={array} />
      
    </div>
    </div>
  );
}

export default App;
