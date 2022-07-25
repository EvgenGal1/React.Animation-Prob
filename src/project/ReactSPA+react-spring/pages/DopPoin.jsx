document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".parallax");
  // var instances = M.Parallax.init(elems, options);
  // var instances = M.Parallax.getInstance(elems);
});

function DopPoin() {
  return (
    <>
      {/* <div className="slider ">
        <ul className="slides">
          <li>
            <img src="../../../../../_Доп/семья/ве/" />
            <div className="caption center-align">
              <h3>This is our big Tagline!</h3>
              <h5 className="light grey-text text-lighten-3">
                Here's our small slogan.
              </h5>
            </div>
          </li>
          <li>
            <img src="https://lorempixel.com/580/250/nature/2" />
            <div className="caption left-align">
              <h3>Left Aligned Caption</h3>
              <h5 className="light grey-text text-lighten-3">
                Here's our small slogan.
              </h5>
            </div>
          </li>
          <li>
            <img src="https://lorempixel.com/580/250/nature/3" />
            <div className="caption right-align">
              <h3>Right Aligned Caption</h3>
              <h5 className="light grey-text text-lighten-3">
                Here's our small slogan.
              </h5>
            </div>
          </li>
          <li>
            <img src="https://lorempixel.com/580/250/nature/4" />
            <div className="caption center-align">
              <h3>This is our big Tagline!</h3>
              <h5 className="light grey-text text-lighten-3">
                Here's our small slogan.
              </h5>
            </div>
          </li>
        </ul>
      </div> */}
      {/* <a className="waves-effect waves-light btn modal-trigger" href="#modal1">
        Modal
      </a>
      <div id="modal1" className="modal modal-fixed-footer">
        <div className="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
          >
            Agree
          </a>
        </div>
      </div> */}
      <div className="parallax-container">
        <div className="parallax">
          {/* <img src="images/parallax1.jpg" /> */}
          <img alt="1" src="../img/parallax1.JPG" />
        </div>
      </div>
      <div className="section white">
        <div className="row container">
          <h2 className="header">Parallax</h2>
          <p className="grey-text text-darken-3 lighten-3">
            Параллакс - это эффект, когда фоновый содержимое или изображение в
            этом корпус перемещается на другой скорости, чем содержание
            переднего плана во время прокрутки.
          </p>
        </div>
      </div>
      <div className="parallax-container">
        <div className="parallax">
          <img alt="2" src="../img/parallax2.jpg" />
        </div>
      </div>
    </>
  );
}

export { DopPoin };
