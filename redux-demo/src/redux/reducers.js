//包含n个reducer函数的模块
//接收state和action并返回新的state的函数
import { INCREMENT, DECREMENT } from "./action-types";
export function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.data;
    case DECREMENT:
      return state - action.data;
    default:
      return state;
  }
}
