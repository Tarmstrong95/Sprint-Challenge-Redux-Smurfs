import React, { Component } from 'react';
import './App.css';
import {action} from '../actions/index';
import {connect} from 'react-redux';
import SmurfList from './smurfList/smurfList';
import Form from './form/form'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */



class App extends Component {


  componentDidMount(){
    this.props.action()
  }


  render() {
    return (
      <div className="App">
        <SmurfList />
        <Form />
      </div>
    );
  }
}



export default connect(null, {action})(App);
