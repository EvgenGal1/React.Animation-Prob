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
  const [loaderVisible, setloaderVisible] = useState(false);

  // симуляция асинх логики (тип загрузка данных для выхода loadera). 1ый timeuot покаж loader ч/з 1с, 2ой ч/з 5с. скроет
  useEffect(() => {
    setTimeout(() => setloaderVisible(true), 1000);
    setTimeout(() => setloaderVisible(false), 3000);
  }, []);

  return (
    <>
      <div className="TransitionComp">
        {/* слушат. событ. - вызов fn и меняет сост на противоположное */}
        <h5>Transition</h5>
        <button onClick={() => setloaderVisible(!loaderVisible)}>
          {/* динамич обновл текст */}
          {loaderVisible ? "hide" : "show"}
        </button>
        <div className="wrap">
          {/* // до Transition. условие добавл/удал блока .circle
        {loaderVisible && <div className="circle rotate" />} */}
          {/* Transition оборачивает аним-ый блок. Подробнее - https://reactcommunity.org/react-transition-group/transition */}
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
  const [loaderVisible, setloaderVisible] = useState(false);
  // из доков
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  // перекл м/у видео и док
  const [showVar, setshowVar] = useState(true);

  // симуляция асинх логики (тип загрузка данных для выхода loadera). 1ый timeuot покаж loader ч/з 1с, 2ой ч/з 5с. скроет
  useEffect(() => {
    setTimeout(() => setloaderVisible(true), 1000);
    setTimeout(() => setloaderVisible(false), 3000);
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
          <button onClick={() => setloaderVisible(!loaderVisible)}>
            {/* динамич обновл текст */}
            {loaderVisible ? "hide" : "show"}
          </button>
        )}
        <div className="wrap">
          {/* CSSTransition оборачивает аним-ый блок. Наследник Transition расширеный. Подробнее - https://reactcommunity.org/react-transition-group/css-transition */}
          {/* props. in - вкл аним., timeout - время аним., mountOnEnter - монтаж, unmountOnExit - демонтаж, onEnter - слуш.событ(6 шт, можно использ.) */}
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
  const [loaderVisible, setloaderVisible] = useState(false);
  // из доков
  const [mode, setMode] = React.useState("out-in");
  const [state, setState] = React.useState(true);
  // перекл м/у видео и док
  const [showVar, setshowVar] = useState(true);

  // симуляция асинх логики (тип загрузка данных для выхода loadera). 1ый timeuot покаж loader ч/з 1с, 2ой ч/з 5с. скроет
  useEffect(() => {
    setTimeout(() => setloaderVisible(true), 1000);
    setTimeout(() => setloaderVisible(false), 3000);
  }, []);

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
        {showVar && (
          <button onClick={() => setloaderVisible(!loaderVisible)}>
            {/* динамич обновл текст */}
            {loaderVisible ? "hide" : "show"}
          </button>
        )}
        <div
          className="wrap"
          // style={{showVar ? (display: "flex"): (display: "block")}}
          style={{ display: showVar === true ? "flex" : "block" }}
        >
          {/* CSSTransition оборачивает аним-ый блок. Наследник Transition расширеный. Подробнее - https://reactcommunity.org/react-transition-group/css-transition */}
          {/* props. in - вкл аним., timeout - время аним., mountOnEnter - монтаж, unmountOnExit - демонтаж, onEnter - слуш.событ(6 шт, можно использ.) */}
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
            <>
              <div className="label">Mode:</div>
              <div className="modes">
                {modes.map((m) => (
                  <Form.Check
                    key={m}
                    custom
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
