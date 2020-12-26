import './App.css';


import Tutorial2 from './components/Tutorial2_useState/Tutorial2'
import Tutorial3 from './components/Tutorial3_useStateWithPreviousState/Tutorial3';
import Tutorial4 from './components/Tutorial4_useStateWithObject/Tutorial4';
import Tutorial5 from './components/Tutorial5_useStateWithArray/Tutorial5';
import Tutorial6 from './components/Tutorial6_useEffect/Tutorial6';
// import Tutorial10 from './components/Tutorial10_MimicComponentWillUnmount/Tutorial10';
// import Tutorial11 from './components/Tutorial11/Tutorial11';
import Tutorial12 from './components/Tutorial12_FetchingWithEffect/Tutorial12';

function App() {
  return (
    <div className="App">
        <Tutorial2 />
        <br /><hr />
        <Tutorial3 />
        <br /><hr />
        <Tutorial4 />
        <br /><hr />
        <Tutorial5 />
        <br /><hr />
        <Tutorial6 />
        <br /><hr />
        {/* <Tutorial10 />
        <br /><hr />
        <Tutorial11 /> */}
        <br /><hr />
        <Tutorial12 />
    </div>
  );
}

export default App;
