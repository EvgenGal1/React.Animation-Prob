import React, { useState, useEffect } from "react";
import {
  Transition,
  CSSTransition,
  SwitchTransition,
} from "react-transition-group";
// доп из react-bootstrap для примеров Доков ReactTransitionGroup
import { Container, Button, Alert, Form } from "react-bootstrap";

// Transition Компонент из видео
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
            onEnter={() => console.log("onEnter")}
            onEntering={() => console.log("onEntering")}
            onEntered={() => console.log("onEntered")}
            onExit={() => console.log("onExit")}
            onExiting={() => console.log("onExiting")}
            onExited={() => console.log("onExited")}
          >
            {/* Transition нужна fn, оборач в {}. Приним. state и возвращ. аним-ый Comp. В класс + state(4 cl в цикле - вход/введено/выход/вышел) */}
            {(state) => <div className={`circle ${state}`} />}
          </Transition>
        </div>
      </div>
    </>
  );
}

// CSSTransition Компонент + Доки
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
          {/* CSSTransition оборачивает аним-ый блок. Наследник Transition, расширеный. Вкл. .cl при появлении/входе/выходе + своим. Подробнее - https://reactcommunity.org/react-transition-group/css-transition */}
          {/* props. in - вкл аним., timeout - время аним., mountOnEnter - монтаж, unmountOnExit - демонтаж, classNames - им. .cl на появление/вход/выход/завершение */}
          {showVar ? (
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
          ) : (
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
          )}
        </div>
      </div>
    </>
  );
}

// SwitchTransitionComp Компонент + Доки
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


  // меняет mode на тикущ. значен. штзге
  function changeHandler(e) {
    setMode(e.target.value)
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
            display: showVar === true ? "flex" : "block", flexDirection: "column",
            alignItems: "center", justifyContent: "flex-start"
          }}
        >
          {showVar ? (
            <>
              <div>
                <label htmlFor="out-in" className="label"></label>
                {/* со слуш-лем для измен. mode */}
                <input onChange={(e) => {
                  changeHandler(e);
                  // 1 вар
                  // soldCheckbox()  
                  // 4 вар
                  setChecked(!checked)
                }}
                  defaultChecked={checked}
                  // ? вар
                  // checked={x} 
                  id={"out-in"} type="radio" name="radio" value="out-in" ></input>
                <label htmlFor="in-out" className="label"></label>
                <input onChange={(e) => {
                  changeHandler(e);
                  // 1 вар
                  // soldCheckbox()
                  // 4 вар
                  setChecked(!checked)
                }}
                  // defaultChecked={checked}
                  // ? вар
                  // checked={x} 
                  id={"in-out"} type="radio" name="radio" value="in-out"></input>
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
                  className="fade">
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
          {/* // !!! не раб - при клик по input.radio в аним, вых. ошб. - react_devtools_backend.js:4026 Warning: Encountered two children with the same key, `true`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. */}
        </div>
      </div>
    </>
  );
}

function ReactTransitionGroup() {
  return (
    <div className="ReactTransitionGroup">
      <TransitionComp />
      <CSSTransitionComp />
      <SwitchTransitionComp />
    </div>
  );
}

export { ReactTransitionGroup };
