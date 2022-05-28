import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import CommentItem from "./CommentItem";
export default class CommentList extends React.Component {
  //给组件类指定属性
  static propTypes = {
    comments: PropTypes.array.isRequired,
    deleteComment: PropTypes.func.isRequired,
  };

  render() {
    const { comments, deleteComment } = this.props;
    return (
      <div className="right">
        {comments.length > 0 ? (
          <div>
            评论回复
            {comments.map((comment, index) => (
              <CommentItem
                key={index}
                comment={comment}
                deleteComment={deleteComment}
                index={index}
              ></CommentItem>
            ))}
          </div>
        ) : (
          <div>暂无评论</div>
        )}
      </div>
    );
  }
}
