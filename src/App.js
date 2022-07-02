import logo from "./logo.svg";
import "./App.css";
import Store from "./pages/store";

function App() {
  return (
    <div classNameName="container p-4">
      <header classNameName="">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <img src="./fruit.png" className="w-20" />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only"></span>
                </a>
              </li>
            </ul>
            <div>
              <button
                type="button"
                className="btn btn-danger float-right"
                data-toggle="dropdown"
                aria-haspopup="false"
                aria-expanded="false"
              >
                Carrito
              </button>

              <div className="dropdown-menu">
                <div>
                  <a className="dropdown-item">todo.name</a>
                  <a className="dropdown-item">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item">$</a>
                  <button className=" mt-2 btn btn-info">+</button>
                  <button className=" mt-2 btn btn-info">-</button>
                  <button className=" mt-2 btn btn-info">Eliminar</button>
                </div>

                <button className=" mt-2 btn btn-info">Vaciar</button>
                <div>Total </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <Store />
    </div>
  );
}

export default App;
