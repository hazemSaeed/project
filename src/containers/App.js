import React, { Component } from 'react'
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends Component {
  constructor(props){
    super(props);
    console.log('App.js | Constructor');
  }

  static getDerivedStateFromProps(props,state){
    console.log('App.js | Drived State From Props' , props);
    return state;
  }

  componentWillMount(){
    console.log('App.js | Component Will Mount');
  }
  
  componentDidMount(){
    console.log('App.js | Component Did Mount');
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log('App.js | shouldComponentUpdate');
    return true;
  }
  componentDidUpdate(){
    console.log('App.js | componentDidUpdate');
  }
  state = {
    persons:[
              {id:'asd12', name: 'Hazem', age: 22},
              {id:'asd13', name: 'Ahmad', age: 21},
              {id:'asd14', name: 'Hossam', age: 30},
              {id:'asd15', name: 'Mohammed', age: 19}
            ],
    showPerson: false,
    showCockpit: true        
  };


  changeNameHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    // const person = Object.assign({},personState.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons:persons});
  };

  togglePersonHandler = () =>{
    this.setState({
      showPerson: !this.state.showPerson
    });
  };
  
  deletePersonHandler = (indexPerson) => {
    // const persons = personState.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(indexPerson,1);
    this.setState({persons:persons});
  };
  render(){
    console.log('App.js | rendering ...');
    
    let persons = null;
    if(this.state.showPerson){
      persons = <Persons
            persons={this.state.persons} 
            clicked={this.deletePersonHandler}
            changed={this.changeNameHandler}></Persons>;
    }  
    return (
        <WithClass classes={classes.App}>
          <header className={classes['App-header']}>
          <button onClick={()=>{
              this.setState({showCockpit: !this.state.showCockpit})
            }}>Hide Cockpit</button>
          { this.state.showCockpit ? <Cockpit 
            title= {this.props.appTitle}
            showPerson={this.state.showPerson}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonHandler}></Cockpit> : null }
            {persons}
          </header>
        </WithClass>
    );  
  }
}
export default App;
