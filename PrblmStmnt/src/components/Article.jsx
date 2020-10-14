import React from "react";

const Article = props => (
  <>
    <tr>
      <td className="article-item">{props.articleData.title}</td>

      <td className="article-item">{props.articleData.upvotes}</td>
      <td className="article-item">
        {new Date(props.articleData.date).toISOString()}
      </td>
    </tr>
  </>
);

export default Article;
