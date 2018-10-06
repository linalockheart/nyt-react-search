import React from "react";
// import CardBtn from "./CardBtn";
import "./Card.css";

const Card = props => (
  <div className="card text-center">
    <div className="card-header">
      <h2>Hello Heading</h2>
    </div>
    <div className="card-body">
      {props.articles.map(article => {
        console.log(article);
        return <p>{article.web_url}</p>
      })}
    </div>
  </div>
);

export default Card;

//something is wrong with this file