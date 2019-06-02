import React, { useEffect } from 'react';
import classes from './Cockpit.css';
import logo from '../../logo.svg';

function Cockpit(props){
  useEffect( () => {

    console.log('Cockpit.js | useEffect');
    const timer = setTimeout(()=> {
      alert('Saved data to cloud !');
    }, 1000);

    return ()=>{
      clearTimeout(timer);
      console.log('Cockpit.js | cleanUp work in useEffect');
    }
  },[]);

  useEffect(()=>{
    console.log('Cockpit.js | useEffect 2');
    return ()=>{
      console.log('Cockpit.js | cleanUp work in useEffect 2');
    }
  });

  // Many useEffect(); Can Set up

    let redClass = '';

    if(props.showPerson){
        redClass = classes.Red;
    }
    
    const assignClasses = [];
    if(props.personsLength <= 3){
      assignClasses.push(classes.red);
    }
    if(props.personsLength <= 2){
      assignClasses.push(classes.bold);
    }
    
    return (
        <div className={classes.Cockpit}>            
            <h1>{props.title}</h1>
            <img src={logo} className={classes['Cockpit-logo']} alt="logo" />
            
            <p className={assignClasses.join(' ')}>
              First App With React
            </p>
            
            <button className={redClass} onClick={props.clicked}>Switch Name</button>
        </div>
    );
}

export default React.memo(Cockpit);