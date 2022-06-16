import  { Link } from "react-router-dom";

export function NavBarSection() {
  return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark">
                <Link class="navbar-brand" to="/">
                    {/* <img src={logo} width="30" height="30" class="d-inline-block align-top" alt=""/> */}
                    Sheetal
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                    {/* <Link class="nav-item nav-link active" href="/">Home </Link> */}
                    <Link class="nav-item nav-link" to="/about">About <span class="sr-only">(current)</span></Link>
                    <Link class="nav-item nav-link" to="/resume">Resume</Link>
                    <Link class="nav-item nav-link" to="/portfolio">Portfolio</Link>
                    <Link class="nav-item nav-link" to="/contact">Contact</Link>
                    </div>
                </div>
            </nav>
        </header>
  );
}
