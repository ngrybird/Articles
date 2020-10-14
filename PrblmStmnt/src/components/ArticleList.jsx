import React from "react";
import Article from "./Article";

class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: "Ascending",
      articles: this.sortToAscending(this.props.articles)
    };
  }
  changeOrder = () => {
    if (this.state.order === "Ascending") {
      this.setState({
        order: "Descendnig",
        articles: this.sortToDescending(this.state.articles)
      });
    } else {
      this.setState({
        order: "Ascending",
        articles: this.sortToAscending(this.state.articles)
      });
    }
  };

  sortToAscending = dataList => {
    return dataList.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
  };
  sortToDescending = dataList => {
    return dataList.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
  };
  render() {
    return this.props.articles.length > 0 ? (
      <table>
        <tr>
          <th>Title</th>
          <th>Upvotes</th>
          <th>
            Release Date{" "}
            <button onClick={this.changeOrder}>
              {this.state.order === "Ascending" ? "Newest" : "Older"}
            </button>
          </th>
        </tr>
        {this.state.articles.map(item => (
          <Article key={item.articleId} articleData={item} />
        ))}
      </table>
    ) : (
      <div>No data found</div>
    );
  }
}
export default ArticleList;
