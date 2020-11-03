import React,{useState} from 'react';
import Min1 from './Nav01.js';
import Min2 from './Nav02.js';
import './App.css';

function App() {
  let conArr = {
    'Nav01':<Min1 />,
    'Nav02':<Min2 />
  };

  let[cpnt,setCpnt] = useState(conArr['Nav01']);

  function nav(e){
    let menuTxt = e.target.textContent;
    setCpnt(conArr[menuTxt]);
  }

  return (
    <>
    <header>
      <nav onClick={nav}>
        <a>Nav01</a>
        <a>Nav02</a>
      </nav>
    </header>
    <main>
      <div>
        {cpnt}
      </div>
    </main>
    </>
  );
}

export default App;
