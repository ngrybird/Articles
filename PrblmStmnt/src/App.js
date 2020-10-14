import React from "react";
import "./App.css";
import SearchBox from "./components/SearchBox";
import ArticleList from "./components/ArticleList";
import { articles } from "./utils/Data";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      authorname: ""
    };
  }
  getAuthorName = author => {
    this.setState({ authorname: author });

    setTimeout(() => {
      if (this.state.authorname === "j k rowling") {
        this.setState({ articles: articles });
      } else {
        this.setState({ articles: [] });
      }
    }, 2000);
  };

  render() {
    return (
      <div className="App">
        <SearchBox getAuthorCallback={this.getAuthorName} />
        {this.state.articles ? (
          <ArticleList articles={this.state.articles} />
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default App;
