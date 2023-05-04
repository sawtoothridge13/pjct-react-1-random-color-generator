import './App.css';
import randomcolor from 'randomcolor';
import { useState } from 'react';

const randomColor = randomcolor;

export default function App() {
  const [color, setColor] = useState('');
  return (
    <div className="App">
      <header>Random Color Generator</header>
      <div>
        <span>Generated {color}</span>
      </div>
      <button onClick={() => setColor(randomColor)}>Generate</button>
    </div>
  );
}

/* onClick={() => {
  // 3. Generate and set a new value for the emoji
  const newEmoji = nodeEmoji.random().emoji;
  setEmoji(newEmoji);
}} */

/* const [message, setMessage] = useState('');
const [updated, setUpdated] = useState(message);

const handleChange = (event) => {
  setMessage(event.target.value);
};

const handleClick = () => {
  setUpdated(message);
}; */

/*
onClick={() => {
  // 3. Generate and set a new value for the emoji
  console.log(chalk.hex(randomColor));
}} */
