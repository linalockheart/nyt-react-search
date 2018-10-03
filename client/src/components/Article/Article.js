import React from "react";
//formatDate? what is that ugh
//deleted out the list item thing not sure if i need that for real

const Article = ({ title, url, _id, date, handleClick, buttonText }) => (
    // const Article = props => (
    <div>
        <h3>
            <em>{title}</em>
            <span className="btn-group pull-right">
              <a
                className="btn btn-light"
                href={url}
               >
                View Article
               </a>
               <button onClick={() => handleClick(_id)} className="btn btn-primary">
                {buttonText}
               </button>
            </span>
        </h3>
    </div>
);

export default Article;