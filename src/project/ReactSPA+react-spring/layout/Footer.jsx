function Footer(props) {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Содержание нижнего колонтитула</h5>
            <p className="grey-text text-lighten-4">
              Вы можете использовать здесь строки и столбцы, чтобы организовать
              содержание нижнего колонтитула.
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Благодарности</h5>
            <p>За помощь/уроки/материалы</p>
            <ul>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://www.youtube.com/c/%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%D0%9D%D0%B5%D0%BF%D0%BE%D0%BC%D0%BD%D1%8F%D1%89%D0%B8%D0%B9"
                  target="_blank"
                  rel="noreferrer"
                >
                  Михаил Непомнящий
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://www.youtube.com/c/UlbiTV"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ulbi TV
                </a>
              </li>
              {/* <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Link 3
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Link 4
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2022 EvGen Gal
          <a className="grey-text text-lighten-4 right" href="#!">
            Всем Добра Дзыы))
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
