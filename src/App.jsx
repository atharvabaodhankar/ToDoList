import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1);
  const [input, setInput] = useState('');
  const [arr, setArr] = useState([]);

  function createList() {
    setInput('');
    setArr([...arr, input]);
    setCount(count + 1);
  }
  function removeItem(idx) {
    setArr(arr.filter((_, index) => index !== idx)); 
  }

  return (
    <>
      <h1 className='heading'>TO DO LIST</h1>
      <div className='section'>
        <input type="text" name="" id="" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
        <button className='btn' onClick={() => {
          createList();
        }}>Add</button>
      </div>
      <div className="container">
        {arr.map((e, idx) => (
          <div className="box" key={idx}>
            <h1>{idx + 1}. {e}</h1>
            <button onClick={() => removeItem(idx)}>Remove</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
