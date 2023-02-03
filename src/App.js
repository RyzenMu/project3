import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Button} from 'react-bootstrap';



//parent
function App() {
  return (
    <div className="App">
        <FirstComponent />
        <h1>This is my parent Component</h1>
        <SecondComponent />
        <FourthComponent/>
        <div className='App'>
          {/* <Button variant='primary' className='mr-2'>Primary</Button> */}
        </div>
      </div>
  
  );
}

class FirstComponent extends React.Component {

  render(){

    return(

      <div className="App">
        <h1> Mannavan.com</h1>
      </div>

    )
  }
}

class SecondComponent extends React.Component {
  render(){
    return(
      <div>
      <h2>This is second Component</h2>
      <ThirdComponent />
      </div>
    )
  }
}

class ThirdComponent extends React.Component {
  render(){
    return(
      <h2>This is third Component</h2>
    )
  }
}

function FourthComponent(){
  return(
    <h2>This is Forth Component - also function based component</h2>

  )
}

export default App;
