import { createRef } from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "../../App.jsx";

import { HomePage } from "../pages/HomePage";
import { About } from "../pages/About";
import { Contacts } from "../pages/Contacts";
import { DopPoin } from "../pages/DopPoin";
//
import ReactTransitionGroup from "../../ReactTransitionGroup/ReactTransitionGroup.jsx";
import Prob from "../../ReactTransitionGroup/Prob";
import Prob2 from "../../ReactTransitionGroup/Prob2";

// ^ по докам React Transition Group (перенёс из Главного root index.js)
export const routes = [
  {
    path: "ReactTransitionGroup/*",
    name: "ReactTransitionGroup",
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
  {
    path: "/Contacts",
    name: "Contacts",
    element: <Contacts />,
    nodeRef: createRef(),
  },
];

export const router = createBrowserRouter([
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
