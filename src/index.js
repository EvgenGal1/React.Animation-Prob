import ReactDOM, { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./project/ReactSPA+react-spring/layout/Router";
import "./index.css";

// ^ по докам React Transition Group
const container = document.getElementById("root");
const root = createRoot(container);

// RouterProvider - Учитывая экземпляр маршрутизатора ремикса, отображайте соответствующий пользовательский интерфейс
root.render(<RouterProvider router={router} />);

// ^ до ULBITV.RTG.6. по видео Михаила Непомнящего ----------------------------------------------------------------------------------
// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(
//   <>
//     <BrowserRouter>
//     <App />
//     </BrowserRouter>
//   </>
// );

// вроде стар.код. до React 18
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />)();
