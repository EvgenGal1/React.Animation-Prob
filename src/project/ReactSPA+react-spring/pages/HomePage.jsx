function HomePage() {
  return (
    <>
      <div align="center">
        <h1>Различные React Animation пробы</h1>
        <p>
          (приложения/код/хуки/библиотеки) | Author:
          <a href="#" target="_blank">
            EvGen Gal
          </a>
        </p>
      </div>
      <h2 align="center">"Быстрый" старт</h2>
      <code>npx create-react-app имя-проекта</code>
      {/* Запуск CRA */}
      <h2 align="center">ПРОЕКТЫ</h2>* [<p>React SPA</p>](#React-SPA) *
      `ReactTransitionGroup` * <p>`ReactTransitionGroup`</p>*{" "}
      <p>ReactTransitionGroup</p>
      <br />
      <h3 align="center">React SPA</h3>
      {/* <hr/> */}
      <p align="center">
        react-spring + react-router-dom. Анимация при переходе с одной страницы
        на другую.
      </p>
      <br />
      Подключение Materialize (библ. компонентов UI) в html
      <code>
        &lt;link rel="stylesheet" href="
        https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        /&gt;
      </code>
      <br />
      #### Установка 2 библ (модуль узла для маршрутизаци и библ анимации). npm
      i react-router-dom react-spring
      <br />
      #### Подкл. необходимые importы.
      <code>
        import &#123; useTransition, animated &#125; from "react-spring";
        <br />
        import &#123; BrowserRouter as Router, Routes, Route, useLocation, Link,
        &#125; from "react-router-dom";
      </code>
      `*` <p>Хук и аним из spring.</p>
      `*`{" "}
      <p>
        Библ для динам. маршрутов, библ.(с v6 Switch заменен на Routes), комп.,
        хук(возвращ. текущий URL), ссылки из router
      </p>
      <br />
      #### Структура кода. - перем. `location` достаем из хука useLocation -
      `const location = useLocation();`. Объект логакаци необходим - перем.
      `transition` созд. из хука useTransition - `const transitions =
      useTransition(location, &#123; style &#125;);`.
      <br />
      Получаем объ. локации (уник. для каждой стр.), анимацию(в &#123;&#125;
      пропис. стили), (устаревшее - 3им параметром передаём key - передаём
      location.pathname key (уник ключ для каждой стр)) - устр. - (перем
      transitions вернет массив хука useTransition, перебор mapом до - текущих
      эл(item), props(стили прописаны в <code>&#123; ... &#125;</code>), и уник
      ключ.) - В обёртку `transition`, заворачиваем КОД, с передачей парам. -{" "}
      <code>&#123;transitions((props, item) =&gt; ( КОД )&#125;</code>
      - В обёртку `animated`, КОД, с props - &lt;animated.div
      style=&#123;props&#125&gt; КОД &lt;/animated.div&gt; - В обёртку
      `Routes`(ранее Switch), все `Route`, с item - &lt;Routes
      location=&#123;item&#125&gt; КОД &lt;/Routes&gt; - Cоздать неск стр., для
      кажд созд свой `Route`, поместить их в опред структуру со свичом.
      <br />
      Старый код - &lt;Route exact path="/" component=&#123;HomePage&#125; /
      &gt;
      <br />
      Новый код - &lt;Route exact path="/" element=&#123;&lt;HomePage
      /&gt;&#125; / &gt;- Для исключения "прыжка от невидимого соседа", можно на
      блок до transition повесить `position: relative`, и м/у `animated` и
      `Routes` завести блок с `position: absolute`
      <br />
      - Проект `React SPA` перемещён в App.jsx. На его основе сделать
      &lt;Header/&lt; и ссылки на другие проекты.
      <br />
      - По YT видео Анимация перехода между страницами в React SPA с
      react-spring(https://www.youtube.com/watch?v=BSmXK6z0h3s)
      <br />
      <br />
      <h3 align="center">React Transition Group</h3>
      <p align="center">Анимации в React</p>
      <h4>Вкл в предыдущий проект пока не удается</h4>
      <p>
        не раб - No routes matched location
        "/src/project/ReactTransitionGroup/ReactTransitionGroup.jsx"{" "}
      </p>
      - По YT видео Анимации в React
      (https://youtu.be/7MMRcMutqpI?list=PL6DxKON1uLOH0vVpdrZhUAVpHerNbUxfF)
    </>
  );
}

export { HomePage };
