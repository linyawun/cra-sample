import { useEffect, useState } from 'react';
import axios from 'axios';

import logo from './assets/logo.svg';
import './assets/App.css';
import Input from './components/Input';
import './assets/all.scss';

function App() {
  const [text, setText] = useState('');

  const onChangeHandler = (e) => {
    setText(e.target.value)
  }

  useEffect(() => {
    (async()=>{
      const path = process.env.REACT_APP_PATH;
      const result = await axios.get(path);
      console.log(result)
    })();
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas sapien neque, eu sollicitudin diam commodo at. Curabitur rhoncus venenatis ligula placerat tristique. Etiam pulvinar dictum tortor a maximus. Suspendisse et neque egestas, convallis sapien nec, gravida urna. Donec aliquam leo ac mi blandit, tincidunt fermentum mi feugiat. Fusce ac scelerisque quam. Praesent venenatis nunc nisl, at sodales nulla auctor nec. Proin vitae elit ac ante facilisis volutpat. Donec odio urna, vehicula vitae gravida ac, elementum quis est. Vivamus massa orci, facilisis in lorem feugiat, pharetra faucibus nibh. Cras nisi ex, pharetra ut facilisis sit amet, tincidunt a urna. Nam.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type="button" className="btn btn-primary">Primary</button>
        {text}
        <Input id='sampleTest' text='這是一個 input'
        value={text} onChangeHandler={onChangeHandler}></Input>
      </header>
    </div>
  );
}

export default App;
