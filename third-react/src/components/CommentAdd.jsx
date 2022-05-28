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
      <form className="form-horizontal">
        <div className="form-group">
          <label>用户名：</label>
          <input
            type="text"
            className="form-control"
            placeholder="用户名"
            value={username}
            onChange={this.handleNameChange}
          ></input>
        </div>
        <div className="form-group">
          <label>评论内容：</label>
          <textarea
            className="form-control"
            rows="6"
            placeholder="评论内容"
            value={content}
            onChange={this.handleContentChange}
          ></textarea>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" onClick={this.handleSubmit}>
              提交
            </button>
          </div>
        </div>
      </form>
    );
  }
}
