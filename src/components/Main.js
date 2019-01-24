import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';

class Main extends React.Component {
    render() {
        return (
            <main id="main">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/services" component={Services} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </main>
        )
    }
};

export default Main;