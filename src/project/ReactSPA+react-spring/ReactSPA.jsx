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
import { Footer } from "./layout/Footer.jsx";
import { HomePage } from "./pages/HomePage";
import { About } from "./pages/About";
import { Contacts } from "./pages/Contacts";
import { DopPoin } from "./pages/DopPoin";

// стороние проекты
import ReactTransitionGroup from "../ReactTransitionGroup/ReactTransitionGroup.jsx";

function ReactSPA() {

  // ^ до ULBITV.RTG.6. по видео Михаила Непомнящего 
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
      {/* // ^ видео ULBITV.RTG.6. + доки ------------------------------------------------------------------------ */}
      {/* <main className="container">
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            {(state) => (
              <div ref={nodeRef} className="page">
                {currentOutlet}
              </div>
            )}
          </CSSTransition>
        </SwitchTransition>
      </main> */}


      {/* // ^ до ULBITV.RTG.6. по видео Михаила Непомнящего  */}
      <main
        // ??? не раб - блок вложеный в main, при absolute, отражается на фиксир. высоту. в результате footer плавает при различных установках. не воспрнимает высоту main
        className="container"
        style={{ position: "relative", height: "150vmax", overflow: "hidden" }}
      >
        {transitions((props, item) => (
          <animated.div style={props}>
            <div style={{ position: "absolute", width: "100%" }}>
              <Routes location={item}>
                <Route exact path="/" component={HomePage} />
                {/* // старый способ */}
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/About" element={<About />} />
                <Route exact path="/Contacts" element={<Contacts />} />
                <Route exact path="/DopPoin" element={<DopPoin />} />
                <Route
                  exact
                  path="/ReactTransitionGroup"
                  element={<ReactTransitionGroup />}
                />
              </Routes>
            </div>
          </animated.div>
        ))}
      </main>

      <Footer />
    </>
    // </Router>
  );
}

export { ReactSPA };
