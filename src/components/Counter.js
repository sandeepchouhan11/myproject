import React, { Component } from 'react'

export default class counter extends Component {


    componentDidUpdate(prevprops,prevState){
        if(prevprops.number !== this.props.number){
           console.log("component Update")
     }
    }
  render() {
    return (
      <div>
        <h1>{this.props.number}</h1>
      </div>
    )
  }
}
