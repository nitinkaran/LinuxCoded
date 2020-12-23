import React, { Component } from 'react';
import './App.css';


// import Tutorial9 from './components/Tutorial9_Props/Tutorial9';
// import Tutorial10 from './components/Tutorial10_State/Tutorial10';
// import Tutorial11 from './components/Tutorial11_setState/Tutorial11';
// import Tutorial12 from './components/Tutorial12_destructuringProps/Tutorial12';
// import Tutorial13 from "./components/Tutorial13_EventHandling/Tutorial13";
// import Tutorial14 from "./components/Tutorial14_BindlingEventHandlers/Tutorial14";
// import Tutorial15 from './components/Tutorial15_PassMethodsAsProps/Tutorial15';
// import Tutorial17 from './components/Tutorial17_ListRendering/Tutorial17';
// import Tutorial21 from './components/Tutorial21_FormHandling/Tutorial21';
// import Clock from './components/Clock/Clock';
// import Clock1 from './components/Clock/Clock1';

import LiftingStateUp from './components/Tutorial_LiftingStateUp/Calculator';
import Tutorial26 from './components/Tutorial26_PureComponent/Tutorial26';
import Tutorial27 from './components/Tutorial27_ReactMemo/Tutorial27';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Tutorial9 />
        <hr />
        <Tutorial10 />
        <hr />
        <Tutorial11 />
        <hr />
        <Tutorial12 />
        <hr />
        <Tutorial13 />
        <hr />
        <Tutorial14 />
        <hr />
        <Tutorial15 />
        <hr />
        <Tutorial17 />
        <hr />
        <Tutorial21 />
        <Clock />
        <Clock1 /> */}
        <LiftingStateUp />
        <hr />
        <Tutorial26 />
        <hr />
        <Tutorial27 />
      </div>
    );
  }
}

export default App