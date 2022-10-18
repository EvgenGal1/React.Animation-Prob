import React, { useState, useEffect, createRef } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import {
  Transition,
  CSSTransition,
  SwitchTransition,
  TransitionGroup,
} from "react-transition-group";
// доп из react-bootstrap для примеров Доков ReactTransitionGroup
import { Container, Button, Alert, Form } from "react-bootstrap";

import { useLocation, useOutlet } from "react-router-dom";
// import { CSSTransition, SwitchTransition } from "react-transition-group";

import Prob from "./Prob";
import Prob2 from "./Prob2";

// Transition Компонент из видео (неск. .cl на объ. для аним.)
function TransitionComp() {
  // нов. сост. 1ый эл. - сост, 2ой - fn измен. сост. По умолч. false
  const [loaderVisible, setLoaderVisible] = useState(false);

  // симуляция асинх логики (тип загрузка данных для выхода loadera). 1ый timeuot покаж loader ч/з 1с, 2ой ч/з 5с. скроет
  useEffect(() => {
    setTimeout(() => setLoaderVisible(true), 1000);
    setTimeout(() => setLoaderVisible(false), 3000);
  }, []);

  return (
    <>
      <div className="TransitionComp">
        {/* слушат. событ. - вызов fn и меняет сост на противоположное */}
        <h5>Transition</h5>
        <button onClick={() => setLoaderVisible(!loaderVisible)}>
          {/* динамич обновл текст */}
          {loaderVisible ? "hide" : "show"}
        </button>
        <div className="wrap">
          {/* // до Transition. условие добавл/удал блока .circle
        {loaderVisible && <div className="circle rotate" />} */}
          {/* Transition оборачивает аним-ый блок. Вкл. .cl при появлении/входе/выходе/завершении. Подробнее - https://reactcommunity.org/react-transition-group/transition */}
          {/* props. in - вкл аним., timeout - время аним., mountOnEnter - монтаж, unmountOnExit - демонтаж, onEnter - слуш.событ(6 шт, можно использ.) */}
          <Transition
            in={loaderVisible}
            timeout={500}
            mountOnEnter
            unmountOnExit
            // onEnter={() => console.log("onEnter")}
            // onEntering={() => console.log("onEntering")}
            // onEntered={() => console.log("onEntered")}
            // onExit={() => console.log("onExit")}
            // onExiting={() => console.log("onExiting")}
            // onExited={() => console.log("onExited")}
          >
            {/* Transition нужна fn, оборач в {}. Приним. state и возвращ. аним-ый Comp. В класс + state(4 cl в цикле - вход/введено/выход/вышел) */}
            {(state) => <div className={`circle ${state}`} />}
          </Transition>
        </div>
      </div>
    </>
  );
}

// CSSTransition Компонент + Доки (как Transition. есть неск. .cl на объ. для аним.)
function CSSTransitionComp() {
  // из видео.нов. сост. 1ый эл. - сост, 2ой - fn измен. сост. По умолч. false
  const [loaderVisible, setLoaderVisible] = useState(false);
  // из доков
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  // перекл м/у видео и док
  const [showVar, setshowVar] = useState(true);

  // симуляция асинх логики (тип загрузка данных для выхода loadera). 1ый timeuot покаж loader ч/з 1с, 2ой ч/з 5с. скроет
  useEffect(() => {
    setTimeout(() => setLoaderVisible(true), 1000);
    setTimeout(() => setLoaderVisible(false), 3000);
  }, []);

  return (
    <>
      <div className="CSSTransitionComp">
        {/* слушат. событ. - вызов fn и меняет сост на противоположное */}
        <h5>CSSTransition</h5>
        <button onClick={() => setshowVar(!showVar)}>
          {/* динамич обновл текст */}
          {showVar ? "вариант Видео" : "вариант Доки"}
        </button>
        {showVar && (
          <button onClick={() => setLoaderVisible(!loaderVisible)}>
            {/* динамич обновл текст */}
            {loaderVisible ? "hide" : "show"}
          </button>
        )}
        <div className="wrap">
          {showVar ? (
            <>
              {/* из видео  */}
              {/* CSSTransition оборачивает аним-ый блок. Наследник Transition, расширеный. Вкл. .cl при появлении/входе/выходе + своим. Подробнее - https://reactcommunity.org/react-transition-group/css-transition */}
              {/* props. in - вкл аним., timeout - время аним., mountOnEnter - монтаж, unmountOnExit - демонтаж, classNames - им. .cl на появление/вход/выход/завершение */}

              <CSSTransition
                in={loaderVisible}
                timeout={500}
                mountOnEnter
                unmountOnExit
                // в classNames можно предать объ со своими назв. стиля. Для уже существ .cl аним, указ их здесь.
                // classNames="circle"
                classNames={{
                  enterActive: "circle-show",
                  enterDone: "circle-rotate",
                  exitActive: "circle-hide",
                }}
              >
                {/* fn не нужна. созд loader напрямую */}
                <div className="circle"></div>
              </CSSTransition>
            </>
          ) : (
            <>
              {/* из доков  */}
              <Container style={{ margin: "0" }}>
                {showButton && (
                  <Button onClick={() => setShowMessage(true)} size="lg">
                    Show Message
                  </Button>
                )}
                <CSSTransition
                  in={showMessage}
                  timeout={300}
                  classNames="alert"
                  unmountOnExit
                  onEnter={() => setShowButton(false)}
                  onExited={() => setShowButton(true)}
                >
                  <Alert
                    variant="primary"
                    dismissible
                    onClose={() => setShowMessage(false)}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "stretch",
                    }}
                  >
                    <Alert.Heading>Аним смс</Alert.Heading>
                    <p>Это предупр</p>
                    <Button onClick={() => setShowMessage(false)}>Close</Button>
                  </Alert>
                </CSSTransition>
              </Container>
            </>
          )}
        </div>
      </div>
    </>
  );
}

// SwitchTransitionComp Компонент + Доки (выбор перехода у дочки)
function SwitchTransitionComp() {
  // из видео.нов. сост. 1ый эл. - сост, 2ой - fn измен. сост. По умолч. false
  const [loaderVisible, setLoaderVisible] = useState(false);
  // запуск аним
  const [toggle, setToggle] = useState(false);
  // из доков
  const [mode, setMode] = useState("out-in");
  const [state, setState] = useState(true);
  // перекл м/у видео и док
  const [showVar, setshowVar] = useState(true);

  // измен checked. 1 вар
  // const [x, setX] = useState(false);
  // const soldCheckbox = ({ target: { checked } }) => {
  //   console.log(x, checked);
  //   setX(checked);
  // };
  // 2 вар
  //   const handler = useCallback(() => {
  //   setX(!x);
  // }, []);
  // 3 вар
  //   const handler = (e) => {
  //   const { target } = e;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   const { name } = target;
  //   setForm( f => ({ ...f, [name]: value }));
  // };
  // 4 вар
  const [checked, setChecked] = React.useState(true);

  // меняет mode на тикущ. значен. input
  function changeHandler(e) {
    setMode(e.target.value);
  }

  // симуляция асинх логики (тип загрузка данных для выхода loadera). 1ый timeuot покаж loader ч/з 1с, 2ой ч/з 5с. скроет
  // useEffect(() => {
  //   setTimeout(() => setLoaderVisible(true), 1000);
  //   setTimeout(() => setLoaderVisible(false), 3000);
  // }, []);

  const modes = ["out-in", "in-out"];

  return (
    <>
      <div className="SwitchTransitionComp">
        {/* слушат. событ. - вызов fn и меняет сост на противоположное */}
        <h5>SwitchTransition</h5>
        <button onClick={() => setshowVar(!showVar)}>
          {/* динамич обновл текст */}
          {showVar ? "вариант Видео" : "вариант Доки"}
        </button>
        {/* {showVar && (
          <button onClick={() => setLoaderVisible(!loaderVisible)}>
            {loaderVisible ? "hide" : "show"}
          </button>
        )} */}
        <div
          className="wrap"
          // style={{showVar ? (display: "flex"): (display: "block")}}
          // стиль по условию тернарного оператора
          style={{
            display: showVar === true ? "flex" : "block",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          {showVar ? (
            <>
              {/* по видео */}
              <div>
                <label htmlFor="out-in" className="label">
                  out-in
                </label>
                {/* со слуш-лем для измен. mode */}
                <input
                  onChange={(e) => {
                    changeHandler(e);
                    // 1 вар
                    // soldCheckbox()
                    // 4 вар
                    setChecked(!checked);
                  }}
                  defaultChecked={checked}
                  // ? вар
                  // checked={x}
                  id={"out-in"}
                  type="radio"
                  name="radio"
                  value="out-in"
                ></input>
              </div>
              <div>
                <label htmlFor="in-out" className="label">
                  in-out
                </label>
                <input
                  onChange={(e) => {
                    changeHandler(e);
                    // 1 вар
                    // soldCheckbox()
                    // 4 вар
                    setChecked(!checked);
                  }}
                  // defaultChecked={checked}
                  // ? вар
                  // checked={x}
                  id={"in-out"}
                  type="radio"
                  name="radio"
                  value="in-out"
                ></input>
              </div>
              {/* SwitchTransition оборачивает аним-ый блок. Управ. рендером при переходе. 2 режима. 1ый ждет пока стар. уйдёт + нов., 2ой вставл. нов. + убирает стар. Подробнее - https://reactcommunity.org/react-transition-group/css-transition */}
              {/* props. mode - режим перехода */}
              <SwitchTransition mode={mode}>
                <CSSTransition
                  key={toggle}
                  // *** изучить - хз пока что это
                  // addEndListener={(node, done) => {
                  //   node.addEventListener("transitionend", done, false);
                  // }}
                  timeout={500}
                  className="fade"
                >
                  {/* кнп со слуш-лем с вызов fn измен. значен. на противоположное */}
                  <div className="button-container">
                    <button onClick={() => setToggle(!toggle)}>
                      {/* условие одно из */}
                      {toggle ? "- стар + нов" : "+ нов - стар"}
                    </button>
                  </div>
                </CSSTransition>
              </SwitchTransition>
            </>
          ) : (
            <>
              {/* по докам */}
              <div className="label">Mode:</div>
              <div className="modes">
                {modes.map((m) => (
                  <Form.Check
                    key={m}
                    // custom
                    // Предупреждение: получено значение «true» для нелогического атрибута «custom».
                    // Если вы хотите записать его в DOM, вместо этого передайте строку: custom="true" или custom={value.toString()}. на входе
                    custom="true"
                    inline
                    label={m}
                    id={`mode=msContentScript${m}`}
                    type="radio"
                    name="mode"
                    checked={mode === m}
                    value={m}
                    onChange={(event) => {
                      setMode(event.target.value);
                    }}
                  />
                ))}
              </div>
              <div className="main">
                <SwitchTransition mode={mode}>
                  <CSSTransition
                    key={state}
                    addEndListener={(node, done) => {
                      node.addEventListener("transitionend", done, false);
                    }}
                    classNames="fade"
                  >
                    <div className="button-container">
                      <Button onClick={() => setState((state) => !state)}>
                        {state ? "Hello, world!" : "Goodbye, world!"}
                      </Button>
                    </div>
                  </CSSTransition>
                </SwitchTransition>
              </div>
            </>
          )}
          тип footer
          {/* // ??? не раб - при клик по input.radio в аним, вых. ошб. - react_devtools_backend.js:4026 Warning: Encountered two children with the same key, `true`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. */}
        </div>
      </div>
    </>
  );
}

// TransitionCroup (аним групп объ-ов)
function TransitionCroupComp() {
  // управ input
  const [text, setText] = useState("");
  // хранение списка в объ. по умолчан. для послед. аним.
  const [todoList, setTodoList] = useState([
    { id: 1, text: "Первый пп" },
    { id: 2, text: "Второй пп" },
    { id: 3, text: "Третий пп" },
  ]);

  // fn добав. эл. в лист из input
  function addTodo() {
    // в список разворач стар.лист + нов.эл. с id датой и текст из input
    // setTodoList([...todoList, { id: Date.now(), text }]) // 13 чисел (метка врем. - кол-во сек. с 01.01.1970)
    // setTodoList([...todoList, { id: new Date().getTime(), text }]) // 13 цифр (как метка времени)
    setTodoList([...todoList, { id: new Date().getMilliseconds(), text }]); // 3 числа до 1к (милисек.)
    // setTodoList([...todoList, { id: Date.now() * Math.random(), text }]) // ~ 12+4 числа (метка вр. + рандом)
    // setTodoList([...todoList, { id: (new Date().getTime()).toString(36), text }]) // буква + ~4цифры + ~3букв (время к строке)
    // setTodoList([...todoList, { id: Math.random(), text }]) // 0. + ~15цифр (рандом от 0 вроде до 1)
  }

  return (
    <div className="TransitionCroupComp">
      <h5>TransitionCroupComp</h5>
      <div>
        {/* сост + его изменение */}
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
        />
        {/* слуш.клик. с вызов. fn */}
        <button onClick={() => addTodo()} type="button">
          Добавить
        </button>
      </div>
      {/* для аним весь список оборач. в комп TransitionGroup. props указ. ul - список */}
      <TransitionGroup component="ul">
        {/* список отрис ч/з map */}
        {/* <ul> */}
        {todoList.map(({ id, text }) => (
          <CSSTransition
            key={id}
            // кажд.эл. оборач в CSSTransition
            // указ таймаут
            timeout={500}
            // класс для аним
            className="todo"
          >
            <li
              // key={id}
              className="todo"
              // удал.эл. по клик. Измен. лист проводя ч/з фильтр, если нажатый id равен из листа, то в лист он не попадает
              onClick={() =>
                setTodoList([...todoList.filter((todo) => todo.id !== id)])
              }
            >
              {id} {text}
            </li>
          </CSSTransition>
        ))}
        {/* </ul> */}
      </TransitionGroup>
    </div>
  );
}

// попатка сделать другую аним на дочке
function ProbAlterAnimComp() {
  const routes = [
    // {
    //   path: "/ReactTransitionGroup",
    //   name: "ReactTransitionGroup",
    //   element: <ReactTransitionGroup />,
    //   nodeRef: createRef(),
    // },
    {
      path: "Prob",
      name: "Prob",
      element: <Prob />,
      nodeRef: createRef(),
    },
    {
      path: "Prob2",
      name: "Prob2",
      element: <Prob2 />,
      nodeRef: createRef(),
    },
  ];
  const location = useLocation();
  // useOutlet - Возвращает элемент для детского маршрута на этом уровне иерархии маршрута.Используется внутренне для рендерирования дочерних маршрутов.
  const currentOutlet = useOutlet();
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {};

  return (
    <div className="ProbAlterAnimComp">
      <h5>ProbAlterAnimComp</h5>
      <div className="prob0__nav">
        {/* <b>перед NavLink</b> */}
        <nav
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            height: "25px",
            lineHeight: "1px",
            margin: "1px",
            padding: "1px",
          }}
        >
          <NavLink to="/Prob">Prob</NavLink>
          <NavLink to="/Prob2">Prob2</NavLink>
        </nav>
        {/* <b>после NavLink</b> */}
      </div>
      {/* <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          nodeRef={nodeRef}
          timeout={300}
          // два способа прописать вид аним в css (.page|pages)
          classNames="page"
          unmountOnExit
        >
          {(state) => (
            <div ref={nodeRef} className="page">
              {currentOutlet}
            </div>
          )}
        </CSSTransition>
      </SwitchTransition> */}
      <div className="prob0__pages" style={{ display: "flex" }}>
        {/* <b>перед Router</b> */}
        {/* <Routes>
          222
          <Route path="Prob1" element={<Prob />} />
          <Route path="Prob2" element={<Prob2 />} />
          333 444
        </Routes> */}
        <Routes>
          {/* // вообще не отрабатывает аним. */}
          {routes.map(({ path, Component, element, name }) => (
            <Route path={path} key={path} element={element}>
              {({ match }) => (
                <CSSTransition
                  timeout={1000}
                  classNames="page"
                  style={{ height: "15px" }}
                  unmountOnExit
                  path={path}
                  in={match != null}
                >
                  <>
                    {/* // разницы нет. вроде вернее {Element} хз */}
                    {element}
                    {/* {Component}
                      <Component />
                      <Element /> */}
                  </>
                </CSSTransition>
              )}
            </Route>
          ))}
        </Routes>
        {/* <b>после Router</b> */}
      </div>
    </div>
  );
}

export default function ReactTransitionGroup() {
  return (
    <>
      <div className="ReactTransitionGroup">
        <TransitionComp />
        <CSSTransitionComp />
        <SwitchTransitionComp />
        <TransitionCroupComp />
        <ProbAlterAnimComp />
      </div>
    </>
  );
}

//  { ReactTransitionGroup };
