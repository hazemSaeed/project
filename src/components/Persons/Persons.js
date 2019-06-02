import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props,state){
  //   console.log('Persons.js | getDerivedStateFromProps', props);
  //   return state;
  // }

  // componentWillReceiveProps(props){
  //   console.log('Persons.js | componentWillReceiveProps');
    
  // }
  // shouldComponentUpdate(nextProps,nextState){
  //   console.log('Persons.js | shouldComponentUpdate');
  //   if(nextProps.persons !== this.props.persons ||
  //     nextProps.clicked !== this.props.clicked ||
  //     nextProps.changed !== this.props.changed){
  //     return true;
  //   }
  //   return false;
  // }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('Persons.js | getSnapshotBeforeUpdate');
    return {message: 'snapshot'};
  }

  // componentWillUpdate(nextProps,nextState){
  //   console.log('Persons.js | componentWillUpdate');
  //   return null;
  // }
  
  componentWillUnmount(){
    console.log('Persons.js | componentWillUnmount'); 
  }
  componentDidUpdate(prevProps,prevState,snapshot){
    console.log('Persons.js | componentDidUpdate');
    console.log(snapshot);
  }


  render(){
    console.log('Persons.js | rendering ...');
  
    return this.props.persons.map((person,index)=>{
       return <Person 
       click={()=> this.props.clicked(index)} 
       name={person.name} 
       age={person.age}
       key={person.id}
       changed ={(event)=>this.props.changed(event,person.id)}></Person>
     });
  }
  
}

export default Persons;