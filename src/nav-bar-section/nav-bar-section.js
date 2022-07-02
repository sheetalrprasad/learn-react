import  { Link } from "react-router-dom";
import './nav-bar.css'

export function NavBarSection() {
  return (
        <header>

            <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="navbar-collapse collapse w-100 dual-collapse2 order-1 order-md-0">
                    <ul class="navbar-nav ml-auto text-center">
                        <li class="nav-item">
                            <Link class="nav-link" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/resume">Resume</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/">Home</Link>
                        </li>
                    </ul>
                </div>
                <div class="mx-auto my-2 order-0 order-md-1 position-relative">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="navbar-collapse collapse w-100 dual-collapse2 order-2 order-md-2">
                    <ul class="navbar-nav mr-auto text-center">
                        <li class="nav-item">
                            <Link class="nav-link" to="/projects">Projects</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                
            </nav>
 
        </header>
  );
}