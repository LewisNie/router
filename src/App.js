/**
 * Created by luyuann on 9/20/2016.
 */
import React ,{Component} from 'react';
import {render} from 'react-dom';
import {Router,Route,Link,IndexRoute} from 'react-router';
import About from './About';
import Home from './Home';
import Repos from './Repos';
import RepoDetails from './RepoDetails';

class App extends Component {
    constructor(){
        super(...arguments);
        this.state = {
            repositories:[]
        }
    }


    render(){


        return (
            <div>
                <header>App</header>
                <menu>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/repos">Repos</Link></li>
                    </ul>
                </menu>
                {this.props.children}
            </div>
        );
    }
}

render((
    <Router>
        <Router path="/" component ={App}>
            <IndexRoute component={Home}/>
            <Route path="about" component = {About}/>
            <Route path="repos" component = {Repos}>
                <Route path="details/:repo_name" component={RepoDetails}/>
            </Route>
        </Router>
    </Router>),document.getElementById('root'));
