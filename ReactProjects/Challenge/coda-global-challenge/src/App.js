import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

import store from './ReduxStore/store';
import Home from './Components/Home';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
