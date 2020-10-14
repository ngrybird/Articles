import React from "react";

class SearchBox extends React.Component {
  constructor() {
    super();
    this.state = {
      authorName: ""
    };
  }
  searchArticles = () => {
    this.props.getAuthorCallback(this.state.authorName);
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.authorName}
          onChange={e => {
            this.setState({ authorName: e.target.value });
          }}
        />
        <button
          disabled={this.state.authorName === "" ? true : false}
          onClick={this.searchArticles}
        >
          Fetch
        </button>
      </div>
    );
  }
}

export default SearchBox;
