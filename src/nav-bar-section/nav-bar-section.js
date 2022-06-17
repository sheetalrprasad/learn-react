import  { Link } from "react-router-dom";
import  logo from "../static/s.png"

export function NavBarSection() {
  return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="navbar-collapse collapse w-100 dual-collapse2 order-1 order-md-0">
                    <ul class="navbar-nav ml-auto text-center">
                        <li class="nav-item">
                            <Link class="nav-link" to="/about">ABOUT</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/resume">RESUME</Link>
                        </li>
                    </ul>
                </div>
                <div class="mx-auto my-2 order-0 order-md-1 position-relative">
                    <a class="mx-auto" href="/">
                        <img src={logo} width="30" height="30" class="d-inline-block align-top" alt="S logo"/>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                        <div class="navbar-collapse collapse w-100 dual-collapse2 order-2 order-md-2">
                            <ul class="navbar-nav mr-auto text-center">
                                <li class="nav-item">
                                    <Link class="nav-link" to="/portfolio">PORTFOLIO</Link>
                                </li>
                                <li class="nav-item">
                            <Link class="nav-link" to="/contact">CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </nav>
 
        </header>
  );
}








// <nav class="navbar navbar-expand-lg navbar-dark">
//                 <Link class="navbar-brand" to="/">
//                     {/* <img src={logo} width="30" height="30" class="d-inline-block align-top" alt=""/> */}
//                     Sheetal
//                 </Link>
//                 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//                     <span class="navbar-toggler-icon"></span>
//                 </button>
//                 <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//                     <div class="navbar-nav">
//                     {/* <Link class="nav-item nav-link active" href="/">Home </Link> */}
//                     <Link class="nav-item nav-link" to="/about">About <span class="sr-only">(current)</span></Link>
//                     <Link class="nav-item nav-link" to="/resume">Resume</Link>
//                     <Link class="nav-item nav-link" to="/portfolio">Portfolio</Link>
//                     <Link class="nav-item nav-link" to="/contact">Contact</Link>
//                     </div>
//                 </div>
//             </nav>