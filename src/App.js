import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Posts from './PostList.js'


const Home = () => {
  return <h1>This is the Home</h1>
}

const Albums = () => {
  return <h1>This is the Album</h1>
}
class App extends Component {
  render() {
    return (

     <div>
       
          <Switch> 
            <Route path='/posts' component={Posts} />
            <Route exact path='/' component={Home} />
            <Route path='/albums' component={Albums}/>
          </Switch>

      
       
      </div>
    );
  }
}

export default App;
