//包含所有的action createRoot
//同步的action返回一个对象
//异步的action返回一个函数
//action是一个普通的Javascript对象
import { INCREMENT, DECREMENT } from "../redux/action-types";
//增加
export const increment = (number) => ({
  type: INCREMENT,
  data: number,
});
//减少
export const decrement = (number) => ({
  type: DECREMENT,
  data: number,
});
//异步action
export const incrementASync = (number) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment(number));
    }, 1000);
  };
};
