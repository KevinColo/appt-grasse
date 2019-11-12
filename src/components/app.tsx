import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Home from "./home";

class App extends React.Component {
    render() {
        return (
            <Router>
                <nav className="sticky-top navbar-expand-lg navbar navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Terrasse sur la parfumerie</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarToggle" aria-controls="navbarToggle"
                            aria-label="Toggle navigation" aria-expanded="false">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div id="navbarToggle" className="py-1 navbar collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li>
                                <Link to="/" className="ml-1 nav-link">Accueil</Link>
                            </li>
                            <li>
                                <Link to="/blog" className="ml-1 nav-link">Blog</Link>
                            </li>
                            <li>
                                <Link to="/photos" className="ml-1 nav-link">Photos</Link>
                            </li>
                            <li>
                                <Link to="/decouvrir" className="ml-1 nav-link">Découvrir</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="ml-1 nav-link">Contact</Link>
                            </li>
                            <li>
                                <Link to="/reserver" className="ml-1 nav-link">Réserver</Link>
                            </li>
                        </ul>

                    </div>
                </nav>
                <Home/>
                <Switch>
                    <Route path='/blog' component={Home}/>
                    <Route path='/photos' component={Home}/>
                    <Route path='/decouvrir' component={Home}/>
                    <Route path='/reserver' component={Home}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
