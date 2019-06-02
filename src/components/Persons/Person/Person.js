import React, {Component,Fragment} from 'react';
import classes from './Person.css';
// import Aux from '../../../hoc/Aux';

class Person extends Component {

    render(){
        console.log('Person.js | rendering ...');
    
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I am {this.props.name} and my age {this.props.age} {this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}></input>
            </div>
        );
    }
    
}

export default Person;