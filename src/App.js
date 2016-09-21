/**
 * Created by luyuann on 9/20/2016.
 */
import React ,{Component} from 'react';
import {render} from 'react-dom';

class App extends Component {
    render(){
        return (<div>Hello world</div>);
    }
}

render(<App/>,document.getElementById('root'));