import { useTransition, animated } from "react-spring";
import {
  // В версии 6 Switch заменен на Routes
  // Switch,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// страницы из проекта
import { Header } from "./layout/Header.jsx";
import { HomePage } from "./pages/HomePage";
import { About } from "./pages/About";
import { Contacts } from "./pages/Contacts";
import { DopPoin } from "./pages/DopPoin";

// стороние проекты
import { ReactTransitionGroup } from "./pages/ReactTransitionGroup.jsx";

function ReactSPA() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: {
      opacity: 0,
      transform: "translateX(100%)",
      // transitionTimingFunction: "cubic-bezier(0.5, -0.3, 0.51, 1.32)",
      transitionTimingFunction: "ease",
      // transitionDelay: ".5s"
      // transform: 'translateY(50%)'
    },
    enter: {
      opacity: 1,
      transform: "translateX(0%)",
      transitionTimingFunction: "ease",
      // transitionTimingFunction: "ease"
      // transform: 'translateY(50%)'
    },
    leave: {
      opacity: 0,
      transform: "translateX(-100%)",
      transitionTimingFunction: "ease",
      // transform: 'translateY(50%)'
    },
  });
  return (
    // <Router>
    <>
      <Header />
      <main
        className="container"
        style={{ position: "relative", height: "90vh", overflow: "hidden" }}
      >
        {transitions((props, item) => (
          <animated.div style={props}>
            <div style={{ position: "absolute", width: "100%" }}>
              <Routes location={item}>
                {/* <Route exact path="/" component={HomePage} /> */}
                <Route exact path="/" element={<HomePage />} />
                {/* <Route exact path="/About" component={About} /> */}
                <Route exact path="/About" element={<About />} />
                {/* <Route exact path="/Contacts" component={Contacts} /> */}
                <Route exact path="/Contacts" element={<Contacts />} />
                <Route exact path="/DopPoin" element={<DopPoin />} />
                {/* <Route
                  exact
                  path="../ReactTransitionGroup/ReactTransitionGroup"
                  element={<ReactTransitionGroup />}
                /> */}
                <Route
                  exact
                  path="/ReactTransitionGroup/"
                  element={<ReactTransitionGroup />}
                />
              </Routes>
            </div>
          </animated.div>
        ))}
      </main>
      {/* </Router> */}
    </>
  );
}

export { ReactSPA };
