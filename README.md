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
<p>React SPA</p>

<h3 align="center">React SPA + react-spring + react-router-dom</h3>
<p>Анимация при переходе с одной страницы на другую.</p>

#### Подключение Materialize (библ. компонентов UI) в html

```html
<link
  rel="stylesheet"
  href=" https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
/>
```

#### Установка 2 библ (модуль узла для маршрутизаци и библ анимации).

```js
npm i react-router-dom react-spring
```

#### Подкл. необходимые importы.

<p>Хук и аним из spring.</p>
<p>Маршрутизатор, библ.(с v6 Switch заменен на Routes), комп., хук(возвращ. текущий URL), ссылки из router</p>

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

#### Позволит использ аним при переходах с одной страницы на др.

- перем. `location` достаем из хука useLocation. Объ. логакаци необходим
- перем. `transition` созд. из хука useTransition. Получ объ. локации (уник. для каждой стр.), анимацию(в {} пропис стили), (устаревшее - 3им параметром передаём key - передаём location.pathname key (уник ключ для каждой стр))
- устр. - (перем transitions вернет массив хука useTransition, перебор mapом до - текущих эл(item), props(стили прописаны в {...}), и уник ключ.)
- В обёртку `transition`, заворачиваем КОД, с передачей парам. - `&#123;transitions((props, item) =&gt; ( КОД )&#125;`
- В обёртку `animated`, КОД, с props - `&lt;animated.div style={props}&gt; КОД &lt;/animated.div&gt;`
- В обёртку `Routes`(ранее Switch), все `Route`, с item - `&lt;Routes location={item}&gt; КОД &lt;/Routes&gt;`
- Cоздать неск стр., для кажд созд свой `Route`, поместить их в опред структуру со свичом.
  Старый код - `&lt;Route exact path="/" component={HomePage} /&gt;`
  Новый код - `&lt;Route exact path="/" element={&lt;HomePage /&gt;} /&gt;`
- Для исключения "прыжка от невидимого соседа", можно на блок до transition повесить `position: relative`, и м/у `animated` и `Routes` завести блок с `position: absolute`

- **[`По YT видео BSmXK6z0h3s&t - Анимация перехода между страницами в React SPA с react-spring`](#HTML)**
- По YT видео [BSmXK6z0h3s&t](https://www.youtube.com/watch?v=BSmXK6z0h3s) - Анимация перехода между страницами в React SPA с react-spring]()
- По YT видео [\*\*[`BSmXK6z0h3s&t`]](https://www.youtube.com/watch?v=BSmXK6z0h3s) - Анимация перехода между страницами в React SPA с react-spring]("")
- По YT видео \*\*[`BSmXK6z0h3s&t`](https://www.youtube.com/watch?v=BSmXK6z0h3s) - Анимация перехода между страницами в React SPA с react-spring](#)

<h3 align="center">React Transition Group</h3>
<p>Анимация при переходе с одной страницы на другую.</p>

#### Вкл в предыдущий проект пока не удается

<p>не раб - No routes matched location "/src/project/ReactTransitionGroup/ReactTransitionGroup.jsx" </p>

- По YT видео [`7MMRcMutqpI`](https://youtu.be/7MMRcMutqpI?list=PL6DxKON1uLOH0vVpdrZhUAVpHerNbUxfF) - Анимации в React]()

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
