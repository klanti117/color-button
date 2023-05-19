import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('blue')
  const btnColor = color ==='red'?'blue':'red'

  const [disabled, setDisabled] = useState(false)
  return (
    <div className="App">
      <button style={{backgroundColor: disabled? 'gray':color}}
        onClick={()=>{setColor(btnColor)}}
        disabled={disabled}>
        Change color to {btnColor}
      </button>
      <br/>
      <input 
        type="checkbox"
        defaultChecked={disabled}  
        onClick={(e)=>setDisabled(e.target.checked)}
      />
    </div>
  );
}

export default App;
