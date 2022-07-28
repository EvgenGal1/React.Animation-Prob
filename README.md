<div align="center">
  <h1>Различные React Animation пробы</h1>
  <p>(приложения/код/хуки/библиотеки) | Author:
    <a href="#" target="_blank">EvGen Gal</a>
  </p>
</div>

<h2 align="center">"Быстрый" старт</h2>

```js
npx create-react-app имя-проекта // Запуск CRA
```

<h2 align="center">ПРОЕКТЫ</h2>

- [React SPA](#React-SPA)
- [ReactTransitionGroup](#ReactTransitionGroup)
  <br/>

<h3 align="center">React SPA</h3>
<!-- <hr> -->
<p align="center">react-spring + react-router-dom. Анимация при переходе с одной страницы на другую.</p>
<!-- <br/> -->

#### Подключение Materialize (библ. компонентов UI) в html

```html
<link
  rel="stylesheet"
  href=" https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
/>
```

<!-- <br/> -->

#### Установка 2 библ (модуль узла для маршрутизаци и библ анимации).

```js
npm i react-router-dom react-spring
```

<!-- <br/> -->

#### Подкл. необходимые importы.

<p>(Хук и аним из spring. Библ для динам. маршрутов, библ.(с v6 Switch заменен на Routes), комп., хук(возвращ. текущий URL), ссылки из router)</p>

```js
import { useTransition, animated } from "react-spring";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";
```

<!-- - - - Хук и аним из spring. - круг заполн, круг пуст, квадр -->
<!-- - `*` - Хук и аним из spring. - круг заполн, звёзд выдел, тире -->
<!-- - `-` - Хук и аним из spring. - круг заполн, тире выдел, тире -->
<!-- - **[`Хук и аним из spring`]()** - выделен -->
<!-- - **[Хук и аним из spring]()** - выделен и жирный -->
<!-- <br/> -->

#### Структура кода.

- перем. `location` достаем из хука useLocation - `const location = useLocation();`. Объект логакаци необходим
- перем. `transition` созд. из хука useTransition - `const transitions = useTransition(location, { style });`.
  <br/>Получаем объ. локации (уник. для каждой стр.), анимацию(в {} пропис. стили), (устаревшее - 3им параметром передаём key - передаём location.pathname key (уник ключ для каждой стр))
- устр. - (перем transitions вернет массив хука useTransition, перебор mapом до - текущих эл(item), props(стили прописаны в {...}), и уник ключ.)
- В обёртку `transition`, заворачиваем КОД, с передачей парам. - `{transitions((props, item) => ( КОД )}`
- В обёртку `animated`, КОД, с props - `<animated.div style={props}> КОД </animated.div>`
- В обёртку `Routes`(ранее Switch), все `Route`, с item - `<Routes location={item}> КОД </Routes>`
- Cоздать неск стр., для кажд созд свой `Route`, поместить их в опред структуру со свичом.
  <br/>Старый код - `<Route exact path="/" component={HomePage} />`
  <br/>Новый код - `<Route exact path="/" element={<HomePage />} />`
- Для исключения "прыжка от невидимого соседа", можно на блок до transition повесить `position: relative`, и м/у `animated` и `Routes` завести блок с `position: absolute`
  <!-- <br/> -->
  <hr>

- Проект `React SPA` перемещён в App.jsx. На его основе сделать `<Header/>` и ссылки на другие проекты.
  <!-- <br/> -->
  <hr>

- По YT видео [Анимация перехода между страницами в React SPA с react-spring](https://www.youtube.com/watch?v=BSmXK6z0h3s)

  <br/>
  <br/>
  <br/>
  ...

<h3 align="center">Анимации в React</h3>
<p align="center">(React Transition Group - Компоненты компоненты с этапами/кл. входа/выхода стиля transition)</p>

#### Установка библ (компоненты с этапами/кл. входа/перехода/выхода).

```js
npm install react-transition-group --save
```

#### Подкл. необходимые importы.

```js
import { Transition } from "react-transition-group";
```

#### Структура кода.

- `Transition` - Подробнее - https://reactcommunity.org/react-transition-group/transition
- `CSSTransition` - Подробнее - https://reactcommunity.org/react-transition-group/css-transition
- По YT видео [Анимации в React](https://youtu.be/7MMRcMutqpI?list=PL6DxKON1uLOH0vVpdrZhUAVpHerNbUxfF)
