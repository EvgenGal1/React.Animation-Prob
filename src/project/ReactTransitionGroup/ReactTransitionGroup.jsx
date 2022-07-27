import React, { useState, useEffect } from "react";
import { Transition } from "react-transition-group";

function ReactTransitionGroup() {
  // нов. сост. 1ый эл. - сост, 2ой - fn измен. сост. По умолч. false
  const [loaderVisible, setloaderVisible] = useState(false);

  // симуляция асинх логики (тип загрузка данных для выхода loadera). 1ый timeuot покаж loader ч/з 1с, 2ой ч/з 5с. скроет
  useEffect(() => {
    setTimeout(() => setloaderVisible(true), 1000);
    setTimeout(() => setloaderVisible(false), 3000);
  }, []);

  return (
    <>
      <div className="ReactTransitionGroup">
        {/* слушат. событ. - вызов fn и меняет сост на противоположное */}
        <button onClick={() => setloaderVisible(!loaderVisible)}>
          {/* динамич обновл текст */}
          {loaderVisible ? "hide" : "show"}
        </button>
        <div className="wrap">
          {/* // до Transition. условие добавл/удал блока .cicrle
          {loaderVisible && <div className="cicrle rotate" />} */}
          {/* Transition обёрт. аним-ый блок. Подробнее - https://reactcommunity.org/react-transition-group/transition */}
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
            {/* Transition нужна fn. Приним. state и возвращ. аним-ый Comp. В класс + state(4 cl в цикле - вход/введено/выход/вышел) */}
            {(state) => <div className={`cicrle ${state}`} />}
          </Transition>
        </div>
      </div>
      <div></div>
    </>
  );
}

export { ReactTransitionGroup };
