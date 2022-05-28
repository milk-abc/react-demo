import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
export default class CommentAdd extends React.Component {
  static propTypes = {
    addComment: PropTypes.func.isRequired,
  };

  state = {
    username: "",
    content: "",
  };
  handleSubmit = (event) => {
    //收集数据并封装成comment对象
    const comment = this.state;
    //更新状态
    this.props.addComment(comment);
    //清楚输入数据
    this.setState({
      username: "",
      content: "",
    });
    event.preventDefault();
  };
  handleNameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleContentChange = (event) => {
    this.setState({
      content: event.target.value,
    });
  };
  render() {
    const { username, content } = this.state;
    return (
      <div className="left">
        <form onSubmit={this.handleSubmit}>
          <label>
            用户名：
            <input
              type="text"
              value={username}
              onChange={this.handleNameChange}
            ></input>
          </label>
          <label>
            评论内容：
            <textarea
              value={content}
              onChange={this.handleContentChange}
            ></textarea>
          </label>
          <button type="submit" onClick={this.handleSubmit}>
            提交
          </button>
        </form>
      </div>
    );
  }
}
