import logo from './logo.svg';
import './App.css';

import { BrowserRouter as ReactRoutes } from "react-router-dom";
import AllRoutes from './route';

function App() {
  return (
    <ReactRoutes>
  <AllRoutes/>
   </ReactRoutes>
  );
}

export default App;
