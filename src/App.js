import './App.css';
import randomcolor from 'randomcolor';
import { useState } from 'react';

const randomColor = randomcolor;

export default function App() {
  const [color, setColor] = useState('');
  return (
    <div className="App">
      <header>Random Color Generator</header>
      <div style={{ backgroundColor: color }}>
        <span>Generated Color: {color}</span>
      </div>
      <button onClick={() => setColor(randomColor)}>Generate</button>
    </div>
  );
}
