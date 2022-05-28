import React from "react";
import axios from "axios";

import ReactDOM from "react-dom/client";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      url: "",
    };
  }
  componentDidMount() {
    const url = "https://api.github.com/repositories?q=re&sort=stars";
    axios.get(url).then((reponse) => {
      const result = reponse.data;
      const { name, html_url } = result[0];
      this.setState({ name: name, url: html_url });
    });
  }
  render() {
    const { name, url } = this.state;
    if (!name) {
      return <h2>loading...</h2>;
    } else {
      return (
        <h2>
          My github repo is <a href={url}>{name}</a>
        </h2>
      );
    }
  }
}
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App></App>);
