import React from 'react';
import logo from './logo.svg';
import './App.css';
//check1
// function App() {
//   return (
//     // <div>
//     //   Hello World {1+5}
//     // </div>
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//   );
// }

//check2
    // import CharacterCard from './CharacterCard';
    import WordCard from './WordCard';
    const word = "Hello"
    function App() {
    return (
      <div>
      {
        // Array.from(word).map((c, i) => <CharacterCard value={c} key={i}/>)
        <WordCard value="hello"/>
      }
      </div>
    );
    }

export default App;
//test