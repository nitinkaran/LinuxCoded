import './App.css';

import Tutorial2 from './components/Tutorial2_useState/Tutorial2'
import Tutorial3 from './components/Tutorial3_useStateWithPreviousState/Tutorial3';
import Tutorial4 from './components/Tutorial4_useStateWithObject/Tutorial4';
import Tutorial5 from './components/Tutorial5_useStateWithArray/Tutorial5';
import Tutorial6 from './components/Tutorial6_useEffect/Tutorial6';
import Tutorial10 from './components/Tutorial10_MimicComponentWillUnmount/Tutorial10';
import Tutorial11 from './components/Tutorial11_UsingHook/Tutorial11';
import Tutorial12 from './components/Tutorial12_FetchingWithEffect/Tutorial12';
import Tutorial15 from './components/Tutorial15_UsageOfuseContext/Tutorial15';
import Tutorial19 from './components/Tutorial19_UseReducerConcept/Tutorial19';
import Tutorial20 from './components/Tutorial20_UseReducerConcept2/Tutorial20';
import Tutorial23 from './components/Tutorial23_FetchDataWithUseReducer/Tutorial23';
import Tutorial27 from './components/Tutorial27_UseCallbackDemo/Tutorial27';
import Tutorial31 from './components/Tutorial31_CustomHooks/Tutorial31';

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
        <Tutorial10 />
        <br /><hr />
        <Tutorial11 />
        <br /><hr />
        <Tutorial12 />
        <br /><hr />
        <Tutorial15 />
        <br /><hr />
        <Tutorial19 />
        <br /><hr />
        <Tutorial20 />
        <br /><hr />
        <Tutorial23 />
        <br /><hr />
        <Tutorial27 />
        <br /><hr />
        <Tutorial31 />        
    </div>
  );
}

export default App;
