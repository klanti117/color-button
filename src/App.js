import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('blue')
  const btnColor = color ==='red'?'blue':'red'
  return (
    <div className="App">
      <button style={{backgroundColor:color}}
      onClick={()=>{setColor(btnColor)}}>
        Change color to {btnColor}</button>
    </div>
  );
}

export default App;
