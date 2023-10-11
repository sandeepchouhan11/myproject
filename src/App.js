import './App.css';
import React from 'react';

class App extends React.Component
{
    constructor(props)
     {
       super(props)
       console.log("super funtion called")
     }
state = {counter: 0}
incrementCounter = () =>
{
this.setState({counter:parseInt(this.state.counter)+1})
}
     render()
     {
      
      return(<div><button onClick={this.incrementCounter}>Click here</button>
      Counter :{this.state.counter}
  
      </div>)
     }
     
  }











// import React, { Component } from 'react';
// class component 
// class App extends React.Component
// {
//   constructor(props)
//    {
//      super(props)
//    }
//    render()
//    {
    
//     return<button onClick={this.props.sandeep}>Click here</button>


//    }
   
// }

export default App;

//   class Student {
//     name
//     roll
//     Email
//     age
//     constructor(name,roll,Email,age)
//     {
//       this.name=name
//       this.roll=roll
//       this.Email=Email
//       this.age=age
//     }
//     printStudent()
//     {
//       console.log("name:",+this.name)
//       console.log("age")
//     }
//   }



  // return (
  //  <>
  //    <h1>sandy</h1>
  //  </>
  // );



