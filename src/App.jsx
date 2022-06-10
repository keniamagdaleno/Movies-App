import styles from "./App.module.css";
import {BrowserRouter as Router, Switch, Route, Link, } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";
  
export function App() {
    return (
         <Router>
            <header>
            <h3 className={styles.author}>Created by: Kenia Magdaleno</h3>

            <Link to= "/">
                <h1 className={styles.title}>Movies</h1>
            </Link>
            </header>
        <main>
        <Switch> 
            <Route exact path="/movies/:movieId">
                <MovieDetails />
            </Route>
            <Route path="/">
                <LandingPage />
            </Route>     
        </Switch>
        </main>
        
          </Router>
        );
}
//LandingPage es la página principal donde aparecen todas las movies. Este se carga en /
// MovieDetails es en donde se carga el detalle de cada película que seleccionamos. Se carga en /movies/:movieId 
