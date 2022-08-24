import CartWidget from "./CartWidget";

function NavBar() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="#">
                    <h1>MTC</h1>
                </a>
                <a role="button" className="navbar-burger column" aria-label="menu" aria-expanded="true" data-target="navBarMenu">
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </a>
            </div>
            <div id="navBarMenu" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item">Home</a>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link"><Celulares></Celulares></a>
                        <div className="navbar-dropdown">
                            <a className="navbar-item">Samsung</a>
                            <a className="navbar-item">Apple</a>
                            <a className="navbar-item">Xiaomi</a>
                        </div>
                    </div>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">Más</a>
                        <div className="navbar-dropdown">
                            <a className="navbar-item">Sobre nosotros</a>
                            <a className="navbar-item">Contacto</a>
                        </div>
                    </div>
                    <a className="navbar-item">Promociones</a>
                </div>
            </div>
            <CartWidget number={2}/>
        </nav>
    );
  }
  
  export default NavBar;
  