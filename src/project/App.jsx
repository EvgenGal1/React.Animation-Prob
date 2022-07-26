import '../scss/style.scss';

import { BrowserRouter as Router } from "react-router-dom";

import { ReactSPA } from "./ReactSPA+react-spring/ReactSPA.jsx";
import { ReactTransitionGroup } from "./ReactTransitionGroup/ReactTransitionGroup.jsx";

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

// import "../scss/style.scss";

// import { useTransition, animated } from "react-spring";
// import {
//   BrowserRouter as Router,
//   // В версии 6 Switch заменен на Routes
//   // Switch,
//   Routes,
//   Route,
//   useLocation,
// } from "react-router-dom";

// // страницы прошлого проекта ReactSPA+react-spring
// import { Header } from "./ReactSPA+react-spring/layout/Header.jsx";
// import { Footer } from "./ReactSPA+react-spring/layout/Footer.jsx";
// import { HomePage } from "./ReactSPA+react-spring/pages/HomePage.jsx";
// import { About } from "./ReactSPA+react-spring/pages/About.jsx";
// import { Contacts } from "./ReactSPA+react-spring/pages/Contacts.jsx";
// import { DopPoin } from "./ReactSPA+react-spring/pages/DopPoin.jsx";

// // проект ReactTransitionGroup
// import { ReactTransitionGroup } from "./ReactTransitionGroup/ReactTransitionGroup.jsx";

// function App() {
//   const location = useLocation();
//   const transitions = useTransition(location, {
//     from: {
//       opacity: 0,
//       transform: "translateX(100%)",
//       // transitionTimingFunction: "cubic-bezier(0.5, -0.3, 0.51, 1.32)",
//       transitionTimingFunction: "ease",
//       // transitionDelay: ".5s"
//       // transform: 'translateY(50%)'
//     },
//     enter: {
//       opacity: 1,
//       transform: "translateX(0%)",
//       transitionTimingFunction: "ease",
//       // transitionTimingFunction: "ease"
//       // transform: 'translateY(50%)'
//     },
//     leave: {
//       opacity: 0,
//       transform: "translateX(-100%)",
//       transitionTimingFunction: "ease",
//       // transform: 'translateY(50%)'
//     },
//   });
//   return (
//     <>
//       <Router>
//         <Header />
//         <main
//           className="container"
//           style={{ position: "relative", height: "90vh", overflow: "hidden" }}
//         >
//           {transitions((props, item) => (
//             <animated.div style={props}>
//               <div style={{ position: "absolute", width: "100%" }}>
//                 <Routes location={item}>
//                   {/* <Route exact path="/" component={HomePage} /> */}
//                   <Route exact path="/" element={<HomePage />} />
//                   {/* <Route exact path="/About" component={About} /> */}
//                   <Route exact path="/About" element={<About />} />
//                   {/* <Route exact path="/Contacts" component={Contacts} /> */}
//                   <Route exact path="/Contacts" element={<Contacts />} />
//                   <Route exact path="/DopPoin" element={<DopPoin />} />
//                   <Route
//                     exact
//                     path="/ReactTransitionGroup/"
//                     element={<ReactTransitionGroup />}
//                   />
//                   <Route
//                     exact
//                     path="../ReactTransitionGroup/ReactTransitionGroup"
//                     element={<ReactTransitionGroup />}
//                   />
//                 </Routes>
//               </div>
//             </animated.div>
//           ))}
//         </main>
//       </Router>
//       <Footer />
//     </>
//   );
// }

// export default App;
