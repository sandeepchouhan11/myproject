
import './App.css';
import React from 'react';

//  import React, { Component } from 'react'

class App extends React.Component
{
   state={counter:10}
  constructor(props)
   {
     super(props)
   }
   render()
   {
   
    return<button onClick={this.props.sandeep}>Click here</button>


   }
   
}



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


export default App
