import React, { Component } from 'react';
import './App.css';

import {connect} from 'react-redux';

import * as actionCreator from './store/actions/actionCreator';
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

  onClickHandler = (i)=>{
      this.props.history.splice(i,1);
  }
 
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
                  <li className="list-group-item" key={index} onClick={this.onClickHandler.bind(this.index)}>{value.price}</li>
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
    priceUp:()=>{dispatch(actionCreator.priceUp(100))},
    priceDown:()=>{dispatch(actionCreator.priceDown(100))}
  }
}

export default connect(mSTP,mDTP)(App); //It became a container now, connected to store
