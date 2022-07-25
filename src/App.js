import { useTransition, animated } from "react-spring";
import {
  // В версии 6 Switch заменен на Routes
  // Switch,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { Header } from "./project/ReactSPA+react-spring/layout/Header.jsx";

import { HomePage } from "./project/ReactSPA+react-spring/pages/HomePage";
import { About } from "./project/ReactSPA+react-spring/pages/About";
import { Contacts } from "./project/ReactSPA+react-spring/pages/Contacts";
import { DopPoin } from "./project/ReactSPA+react-spring/pages/DopPoin";

function App() {
  const location = useLocation()
  const transitions = useTransition(location, {
    from: {
      opacity: 0,
      transform: 'translateX(100%)',
      // transitionTimingFunction: "cubic-bezier(0.5, -0.3, 0.51, 1.32)",
      transitionTimingFunction: "ease",
      // transitionDelay: ".5s"
      // transform: 'translateY(50%)'
    },
    enter: {
      opacity: 1,
      transform: 'translateX(0%)',
      transitionTimingFunction: "ease"
      // transitionTimingFunction: "ease"
      // transform: 'translateY(50%)'
    },
    leave: {
      opacity: 0,
      transform: 'translateX(-100%)',
      transitionTimingFunction: "ease"
      // transform: 'translateY(50%)'
    },
  })
  return (
    // <Router>
    <>
      <Header />
      <main className="container" style={{ position: 'relative', height: '90vh', overflow: 'hidden' }}>
        {transitions((props, item) => (
          <animated.div style={props}>
            <div style={{ position: 'absolute', width: '100%' }}>
              <Routes location={item}>
                {/* <Route exact path="/" component={HomePage} /> */}
                <Route exact path="/" element={<HomePage />} />
                {/* <Route exact path="/About" component={About} /> */}
                <Route exact path="/About" element={<About />} />
                {/* <Route exact path="/Contacts" component={Contacts} /> */}
                <Route exact path="/Contacts" element={<Contacts />} />
                <Route exact path="/DopPoin" element={<DopPoin />} />
              </Routes>
            </div>
          </animated.div>
        )
        )}
      </main>
      {/* </Router> */}
    </>
  )
}



export default App;
