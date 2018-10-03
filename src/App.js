import React, { Component } from 'react';
import './App.css';

import {connect} from 'react-redux';
class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     price:3450
  //   }
  // }

  // onPriceUp = ()=>{
  //   this.setState({
  //     ...this.state,
  //     price:this.state.price+1000
  //   })
  // }

  // onPriceDown = ()=>{
  //   this.setState({
  //     ...this.state,
  //     price:this.state.price-1000
  //   })
  // }
  // NOW ALL THIS STUFF WILL BE DONE BY REDUX - A State Management library

 
  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <h2>{this.props.price}</h2>
        </div>
        <button className="btn btn-primary" onClick={this.props.priceUp}>PriceUp</button>
        <button className="btn btn-primary" onClick={this.props.priceDown}>PriceDown</button>

        <div>
          <h2>HISTORY:</h2>
          <ul className="list-group">
            {
              this.props.history.map((value,index)=>{
                return (
                  <li className="list-group-item" key={index}>{value.price}</li>
                )
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

const mSTP = (state)=>{
  return {
    price:state.price,
    history:state.history
  }
}

const mDTP = (dispatch)=>{
  return{
    priceUp:()=>{dispatch({type:'PRICE_UP',payload:279})},
    priceDown:()=>{dispatch({type:'PRICE_DOWN',payload:432})}
  }
}

export default connect(mSTP,mDTP)(App); //It became a container now, connected to store
