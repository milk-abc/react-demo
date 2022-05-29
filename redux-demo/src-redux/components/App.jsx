import React, { Component } from "react";
import * as actions from "../redux/actions";
export default class App extends Component {
  increment = () => {
    //1.得到选择增加数量
    const number = this.select.value * 1;
    //2.调用store的方法更新状态
    this.props.store.dispatch(actions.increment(number));
  };
  decrement = () => {
    //1.得到选择增加数量
    const number = this.select.value * 1;
    //2.调用store的方法更新状态
    this.props.store.dispatch(actions.decrement(number));
  };
  incrementIfOdd = () => {
    //1.得到选择增加数量
    const number = this.select.value * 1;
    const count = this.props.store.getState();
    //2.满足条件时调用store的方法更新状态
    if (count % 2 === 1) {
      this.props.store.dispatch(actions.increment(number));
    }
  };
  incrementSync = () => {
    //1.得到选择增加数量
    const number = this.select.value * 1;
    //2.满足条件时调用store的方法更新状态
    setTimeout(() => {
      this.props.store.dispatch(actions.increment(number));
    }, 100);
  };
  render() {
    const count = this.props.store.getState();
    console.log("count", count);
    return (
      <div>
        <p>click {count} times</p>
        <div>
          <select ref={(select) => (this.select = select)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          &nbsp;
          <button onClick={this.increment}>+</button>
          &nbsp;
          <button onClick={this.decrement}>-</button>
          &nbsp;
          <button onClick={this.incrementIfOdd}>increment if odd</button>
          &nbsp;
          <button onClick={this.incrementSync}>increment async</button>
        </div>
      </div>
    );
  }
}
