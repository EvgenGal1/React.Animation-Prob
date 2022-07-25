# Различные React Animation пробы

(приложения/код/хуки/библиотеки)

## "Быстрый" старт

```js
npx create-react-app имя-проекта // Запуск CRA
```

## ПРОЕКТЫ:

### 1 React SPA + react-spring + react-router-dom

Анимация при переходе с одной страницы на другую.

Подключение Materialize (библ. компонентов UI) в html

```html
<link
  rel="stylesheet"
  href=" https: //
cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
/>
```

Установка 2 библ (модуль узла для маршрутизаци и библ анимации).

```js
npm i react-router-dom react-spring
```

Подкл. необходимые importы.
Хук и аним из spring.
Маршрутизатор, библ.(с v6 Switch заменен на Routes), комп., хук(возвращ. текущий URL), ссылки из router

```js
import { useTransition, animated } from "react-spring";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";
import //
// Switch,

"react-router-dom";
```

Позволит использ аним при переходах с одной страницы на др.
-- перем. location достаем из спец хука useLocation. Объ. логакаци необходим
-- перем. transition созд. из useTransition. Получ объ. локации (уник. для каждой стр.), анимацию(в {} пропис стили), (устаревшее - 3им параметром передаём key - передаём location.pathname key (уник ключ для каждой стр))
-- устр. - (перем transitions вернет массив хука useTransition, перебор mapом до - текущих эл(item), props(стили прописаны в {...}), и уник ключ.)
-- В обёртку transition, необходимый КОД, с передачей парам. - &#123;transitions((props, item) =&gt; ( КОД )&#125;
-- В обёртку animated, КОД, с передачей парам. - &lt;animated.div style={props}&gt; КОД &lt;/animated.div&gt;
-- В обёртку Routes(ранее Switch), все Route, с передачей парам. - &lt;Routes location={item}&gt; КОД &lt;/Routes&gt;
-- Cоздать неск стр., для кажд созд свой Route, поместить их в опред структуру со свичом.
Старый код - &lt;Route exact path="/" component={HomePage} /&gt;
Новый код - &lt;Route exact path="/" element={&lt;HomePage /&gt;} /&gt;
-- Для исключения "прыжка от невидимого соседа", можно на блок до transition повесить position: relative, и м/у animated и Routes завести блок с position: absolute

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
