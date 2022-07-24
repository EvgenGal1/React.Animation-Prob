# Различные React Animation пробы

(приложения/код/хуки/библиотеки)

## "Быстрый" старт

```js
$$ npx create-react-app имя-проекта - Запуск CRA
```

## ПРОЕКТЫ:

- 1 React SPA + react-spring

```1 React SPA + react-spring
$$ npm i react-router-dom react-spring - Установка 2 библ (модуль узла для маршрутизаци и библ анимации).
```

созд неск стр. для кажд стр. создать свой rout, поместить в опред структуру со свичом. выглядит так. нужен объект логакаци достаем из спец хука, далее создаем transition из одноименного хука use. useTransition постояно получ объкт локации, для каждой стр уник., 2ым параметром передаём key - передаём location key (уник ключ для каждой стр)

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
