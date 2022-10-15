// import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM, { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./project/App.jsx";
// import reportWebVitals from "./reportWebVitals";

//  ----------------------------------------------------------------------------------
// import { BrowserRouter as Router } from "react-router-dom";
// import router from "./project/App.jsx";
import { createRef } from "react";
// import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  NavLink,
  useLocation,
  useOutlet,
} from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { Container, Navbar, Nav } from "react-bootstrap";

import ReactTransitionGroup from "./project/ReactTransitionGroup/ReactTransitionGroup.jsx";
import Prob from "./project/ReactTransitionGroup/Prob";
import Prob2 from "./project/ReactTransitionGroup/Prob2";
import { About } from "./project/ReactSPA+react-spring/pages/About";

import App from "./project/App";
// import router from "./project/App";

// import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// ^ по докам React Transition Group ----------------------------------------------------------------------------------
const routes = [
  {
    path: "/ReactTransitionGroup",
    name: "RTG",
    element: <ReactTransitionGroup />,
    nodeRef: createRef(),
  },
  {
    path: "/Prob",
    name: "Prob",
    element: <Prob />,
    nodeRef: createRef(),
  },
  {
    path: "/Prob2",
    name: "Prob2",
    element: <Prob2 />,
    nodeRef: createRef(),
  },
  {
    path: "/About",
    name: "About",
    element: <About />,
    nodeRef: createRef(),
  },
];
//
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes.map((route) => ({
      index: route.path === "/",
      path: route.path === "/" ? undefined : route.path,
      element: route.element,
    })),
  },
]);
//
// function Example() {
//   const location = useLocation();
//   const currentOutlet = useOutlet();
//   const { nodeRef } =
//     routes.find((route) => route.path === location.pathname) ?? {};
//   return (
//     <>
//       <Navbar bg="light">
//         <Nav className="mx-auto">
//           {routes.map((route) => (
//             <Nav.Link
//               key={route.path}
//               as={NavLink}
//               to={route.path}
//               className={({ isActive }) => (isActive ? "active" : undefined)}
//               end
//             >
//               {route.name}
//             </Nav.Link>
//           ))}
//         </Nav>
//       </Navbar>
//       <Container className="container">
//         <SwitchTransition>
//           <CSSTransition
//             key={location.pathname}
//             nodeRef={nodeRef}
//             timeout={300}
//             classNames="page"
//             unmountOnExit
//           >
//             {(state) => (
//               <div ref={nodeRef} className="page">
//                 {currentOutlet}
//               </div>
//             )}
//           </CSSTransition>
//         </SwitchTransition>
//       </Container>
//       <footer>footer</footer>
//     </>
//   );
// }

// ^ по докам React Transition Group
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router} />);
// ^ по докам React Transition Group ----------------------------------------------------------------------------------

// ^ до ULBITV.RTG.6. по видео Михаила Непомнящего ----------------------------------------------------------------------------------
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />)();

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(
//   <>
//     <BrowserRouter>
//     <App />
//     </BrowserRouter>
//   </>
// );
