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
- `ReactTransitionGroup`
  <br/>

#### React SPA

#### <h3 align="center">React SPA</h3>

<h3 align="center">React SPA</h3>
<hr>
<p align="center">react-spring + react-router-dom. Анимация при переходе с одной страницы на другую.</p>
<br/>

#### Подключение Materialize (библ. компонентов UI) в html

```html
<link
  rel="stylesheet"
  href=" https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
/>
```

<br/>

#### Установка 2 библ (модуль узла для маршрутизаци и библ анимации).

```js
npm i react-router-dom react-spring
```

<br/>

#### Подкл. необходимые importы.

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

`*` <p>Хук и аним из spring.</p>
`*` <p>Библ для динам. маршрутов, библ.(с v6 Switch заменен на Routes), комп., хук(возвращ. текущий URL), ссылки из router</p>
<br/>

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
  <br/>

- Проект `React SPA` перемещён в App.jsx. На его основе сделать `<Header/>` и ссылки на другие проекты.

  <br/>

- По YT видео [Анимация перехода между страницами в React SPA с react-spring](https://www.youtube.com/watch?v=BSmXK6z0h3s)
  <br/>
  <br/>

<h3 align="center">React Transition Group</h3>
<p align="center">Анимации в React</p>

#### Вкл в предыдущий проект пока не удается

<p>не раб - No routes matched location "/src/project/ReactTransitionGroup/ReactTransitionGroup.jsx" </p>

- По YT видео [Анимации в React](https://youtu.be/7MMRcMutqpI?list=PL6DxKON1uLOH0vVpdrZhUAVpHerNbUxfF)

<!-- # Начало работы с приложением Create React

Этот проект был загружен с помощью [Create React App] (https://github.com/facebook/create-react-app).

## Доступные сценарии

В каталоге проекта вы можете запустить:

### `npm start '

Запускает приложение в режиме разработки. \
Откройте [http: // localhost: 3000] (http: // localhost: 3000), чтобы просмотреть его в браузере.

Страница будет перезагружаться при внесении изменений. \
Вы также можете увидеть любые ошибки ворса в консоли.

### `npm test`

Запускает Test Runner в режиме Interactive Watch. \
См. Раздел о [запущенных тестах] (https://facebook.github.io/create-react-app/docs/running-tests) для получения дополнительной информации.

### `npm Run Build`

Создает приложение для производства в папку `build`. \
Он правильно реагирует в производственном режиме и оптимизирует сборку для наилучшей производительности.

Сборка заслужена, и имена файлов включают хэши. \
Ваше приложение готово к развертыванию!

См. Раздел о [развертывании] (https://facebook.github.io/create-react-app/docs/deployment) для получения дополнительной информации.

### `npm run exect`

** ПРИМЕЧАНИЕ: это односторонняя операция. Как только вы `reject`, вы не можете вернуться! **

Если вы не удовлетворены инструментом сборки и выбором конфигурации, вы можете «изгнать» в любое время. Эта команда удалит единственную зависимость сборки из вашего проекта.

Вместо этого он скопирует все файлы конфигурации и транзитивные зависимости (Webpack, Babel, Eslint и т. Д.) Все команды, кроме «eject», все равно будут работать, но они будут указывать на копированные сценарии, чтобы вы могли настраивать их. На данный момент вы сами.

Вам не нужно когда -либо использовать `reject '. Кураторский набор функций подходит для небольших и средних развертываний, и вы не должны чувствовать себя обязанными использовать эту функцию. Однако мы понимаем, что этот инструмент не был бы полезен, если вы не сможете настроить его, когда будете готовы к нему.

## Учить больше

Вы можете узнать больше в документации [Create React App] (https://facebook.github.io/create-react-app/docs/getting-started).

Чтобы изучить React, ознакомьтесь с [React Documentation] (https://reactjs.org/).

### Кодовое расщепление

Этот раздел перешел здесь: [https://facebook.github.io/create-react-app/docs/code-splittingty(https://facebook.github.io/create-react-app/docs/code- расщепление)

### Анализ размера пакета

Этот раздел перешел здесь: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size-(https://facebook.github.io/create-react-app/ Документы/Анализ размером с брюк)

### Создание прогрессивного веб -приложения

Этот раздел перешел здесь: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app^(https://facebook.github.io/create-react- App/Docs/Make-A-Progressive-Web-App)

### расширенная конфигурация

Этот раздел перешел здесь: [https://facebook.github.io/create-react-app/docs/advanced-configuration!(https://facebook.github.io/create-react-app/docs/advanced- конфигурация)

### Развертывание

Этот раздел перешел здесь: [https://facebook.github.io/create-react-app/docs/deployment^(https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` не удается.

Этот раздел перешел здесь: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify!(https://facebook.github.io/ Create-React-App/Docs/Устранение неполадок#npm-run-build-fails to-minify) -->
