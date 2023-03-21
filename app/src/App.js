import "./App.css"

import Header from './components/common/heading/Header'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/home/Home";
import About from "./components/about/About";
import courseHome from "./components/allcourses/courseHome";
import Team from "./components/team/Team";

import Price_main from "./components/priceFile/Price_main";

// ===========================
const App = () => {
    return (
        <>


            <Router>

                <Header />

                <Switch>

                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/courses" exact component={courseHome} />
                    <Route path="/team" exact component={Team} />
                    <Route exact path='/pricing' component={Price_main} />

                </Switch>
            </Router>

        </>
    )
}

export default App