import './scss/style.scss';

import { BrowserRouter as Router } from "react-router-dom";

import { ReactSPA } from "./project/ReactSPA+react-spring/ReactSPA.jsx";
import { ReactTransitionGroup } from "./project/ReactSPA+react-spring/pages/ReactTransitionGroup.jsx";

function App() {
  return (
    <>
      <Router>
        <ReactSPA />
      </Router>
      {/* <ReactTransitionGroup /> */}
    </>
  )
}

export default App;
