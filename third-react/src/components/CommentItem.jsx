import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

export default class CommentItem extends React.Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    deleteComment: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
  };
  handleClick = () => {
    const { comment, deleteComment, index } = this.props;
    if (window.confirm(`确定删除${comment.username}的评论吗？`)) {
      deleteComment(index);
    }
  };
  render() {
    const { comment } = this.props;
    return (
      <div>
        {comment.username}说： {comment.content}
        <button onClick={this.handleClick}>删除</button>
      </div>
    );
  }
}
