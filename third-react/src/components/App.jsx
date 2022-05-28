import React from "react";
import ReactDOM from "react-dom";
import CommentAdd from "./CommentAdd";
import CommentList from "./CommentList";
import "./App.css";
export default class App extends React.Component {
  //给组件对象指定state属性
  state = {
    comments: [
      { username: "Tom", content: "React挺好的" },
      { username: "Jack", content: "React太难了" },
    ],
  };
  addComment = (comment) => {
    const { comments } = this.state;
    comments.unshift(comment);
    //更新状态
    this.setState({ comments });
  };
  deleteComment = (index) => {
    const { comments } = this.state;
    comments.splice(index, 1);
    this.setState({ comments });
  };
  render() {
    const { comments } = this.state;
    return (
      <div>
        <div className="head">请发表对React的评论</div>
        <CommentAdd addComment={this.addComment}></CommentAdd>
        <CommentList
          comments={comments}
          deleteComment={this.deleteComment}
        ></CommentList>
      </div>
    );
  }
}
