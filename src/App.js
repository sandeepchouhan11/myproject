import './App.css';
import React from 'react';







// class App extends React.Component
// {
//     constructor(props)
//      {
//        super(props)
//        console.log("super funtion called")
//      }
// state = {counter: 0}
// incrementCounter = () =>
// {
// this.setState({counter:parseInt(this.state.counter)+1})
// }
//      render()
//      {
      
//       return(<div><button onClick={this.incrementCounter}>Click here</button>
//       Counter :{this.state.counter}
  
//       </div>)
//      }
     
//   }











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






// console.log ("************************* start componentWillUnmount*************")

  class userInCrement extends React.Component
  {
constructor(){
  super()
}
render(){
  return
     <div>This is inner component</div>
  }


componentWillUnmount()
  {
    console.log("Inside componentWillUnmount")
  }

  }


class App extends React.Component
{
  constructor(props)
  {
    super(props)
  }
  componentDidUpdate(){
    console.log("componente did uptadte")
  }
  componentDidMount(){
    console.log("did mount in ")
  }
  
   state={count:0 ,
    userInCrement: <userInCrement/>
  }
  shouldComponentUpdate()
  {
    console.log("Inside shouldComponentUpdate")
    return true
  }
    intc=()=>
    {
      this.setState({count:(this.state.count)+1})
      this.setState({userInCrement: <div>Component is unmounted</div>})

    }
    render()
    {
      
      return(
        <>
      <button onClick={this.intc}>Click me</button>

      count:{this.state.count}
      <br/>
      {this.state.userInCrement}

        </>
      )
    }
  
}
console.log ("*************************  componentWillUnmount   Stoped*************")


export default App
