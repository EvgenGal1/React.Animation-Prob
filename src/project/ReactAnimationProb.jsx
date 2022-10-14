import { useTransition, animated } from "react-spring";

import { Header } from "./ReactSPA+react-spring/layout/Header.jsx";
import { Footer } from "./ReactSPA+react-spring/layout/Footer.jsx";

// страницы из проекта
// import { ReactSPA } from "./ReactSPA+react-spring/ReactSPA.jsx";
import { HomePage } from "./ReactSPA+react-spring/pages/HomePage";
import { About } from "./ReactSPA+react-spring/pages/About";
import { Contacts } from "./ReactSPA+react-spring/pages/Contacts";
import { DopPoin } from "./ReactSPA+react-spring/pages/DopPoin";

import ReactTransitionGroup from "./ReactTransitionGroup/ReactTransitionGroup.jsx";
import Prob from "./ReactTransitionGroup/Prob";
import Prob2 from "./ReactTransitionGroup/Prob2";

import { BrowserRouter } from "react-router-dom";
import { createRef } from "react";
import { createRoot } from "react-dom/client";
import {
  // В версии 6 Switch заменен на Routes
  // Switch,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
  NavLink,
  useLocation,
  useOutlet,
} from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
// import { Container, Navbar, Nav } from "react-bootstrap";

// стороние проекты

// ^ видео ULBITV.RTG.6. ++ по докам React Transition Group 
// routы масс объ.(путь вызова и компонент)
// const routes = [{ path: "/", element={<ReactTransitionGroup />}  }];
const routes = [
  {
    path: "/ReactTransitionGroup",
    name: "ReactTransitionGroup",
    // element: <RTG />,
    Component: <ReactTransitionGroup />,
    nodeRef: createRef(),
  },
  {
    path: "/Prob",
    name: "Prob",
    element: <Prob />,
    Component: <Prob />,
    nodeRef: createRef(),
  },
  {
    path: "/Prob2",
    name: "Prob2",
    element: <Prob2 />,
    Component: <Prob2 />,
    nodeRef: createRef(),
  },
  {
    path: "/About",
    name: "About",
    element: <About />,
    Component: <About />,
    nodeRef: createRef(),
  },
  {
    path: "/Contacts",
    name: "Contacts",
    element: <Contacts />,
    Component: <Contacts />,
    nodeRef: createRef(),
  },
];
// ^ по докам React Transition Group 
// // const router = createBrowserRouter([
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <ReactAnimationProb />,
//     children: routes.map((route) => ({
//       index: route.path === "/",
//       path: route.path === "/" ? undefined : route.path,
//       element: route.element,
//     })),
//   },
// ]);

export function ReactAnimationProb() {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {};

  // ^ до ULBITV.RTG.6. по видео Михаила Непомнящего
  // const location = useLocation();
  // const transitions = useTransition(location, {
  //   from: {
  //     opacity: 0,
  //     transform: "translateX(100%)",
  //     // transitionTimingFunction: "cubic-bezier(0.5, -0.3, 0.51, 1.32)",
  //     transitionTimingFunction: "ease",
  //     // transitionDelay: ".5s"
  //     // transform: 'translateY(50%)'
  //   },
  //   enter: {
  //     opacity: 1,
  //     transform: "translateX(0%)",
  //     transitionTimingFunction: "ease",
  //     // transitionTimingFunction: "ease"
  //     // transform: 'translateY(50%)'
  //   },
  //   leave: {
  //     opacity: 0,
  //     transform: "translateX(-100%)",
  //     transitionTimingFunction: "ease",
  //     // transform: 'translateY(50%)'
  //   },
  // });

  return (
    // <Router>
    <>
      <Header />

      {/* 
      // ^ видео ULBITV.RTG.6. ------------------------------------------------------------------------
      <main className="app">
        <div className="div">
          <NavLink to="/" >ReactTransitionGroup</NavLink>
          <NavLink to="/Prob" >Prob</NavLink>
          <NavLink to="/Prob2" >Prob2</NavLink>
          <NavLink to="/" ></NavLink>
          <NavLink to="/" ></NavLink>
        </div>
        111111
        <Routes>
          22222222
          {routes.map(({ path, element, name, Component }) =>
            <Route path={path} key={name} element={Component}>
              console.log(name)
              {({ match }) =>
                <CSSTransition
                  timeout={1000}
                  classNames="page"
                  unmountOnExit
                  in={match != null}
                  key={location.pathname}
                  nodeRef={nodeRef}
                >
                  0000
                  {(state) => (
                    <div ref={nodeRef} className="page">
                      {currentOutlet}
                    </div>
                  )}
                  {Component}
                </CSSTransition>}
            </Route>)}
        </Routes>
        333333
      </main> 
      */}


      {/* // ^ по докам React Transition Group ------------------------------------------------------------------------ */}
      <main>
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
      </main>


      {/*
      // ^ до ULBITV.RTG.6. по видео Михаила Непомнящего ------------------------------------------------------------------------
      <main
      // ??? не раб - блок вложеный в main, при absolute, отражается на фиксир. высоту. в результате footer плавает при различных установках. не воспрнимает высоту main
        className="container"
        style={{ position: "relative", height: "150vmax", overflow: "hidden" }}
      >
        {transitions((props, item) => (
          <animated.div style={props}>
            <div style={{ position: "absolute", width: "100%" }}>
              <Routes location={item}>
                <Route exact path="/" component={HomePage} /> // старый способ
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
      */}
      <footer>footer</footer>
      {/* <Footer /> */}
    </>
    // </Router>
  );
}

// export { ReactSPA };
