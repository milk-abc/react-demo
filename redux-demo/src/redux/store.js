import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { counter } from "./reducers";
//生成一个store对象
const store = createStore(counter, applyMiddleware(thunk)); //内部会第一次调用reducer函数得到初始state
// console.log(store, store.getState());
export default store;
