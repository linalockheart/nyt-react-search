import React from "react";
//formatDate? what is that ugh
//deleted out the list item thing not sure if i need that for real

// const Article = ({ title, url, _id, date, handleClick, buttonText }
    const Article = props => (
    
        <h3>
            <em>{props.title}</em>
            <span className="btn-group pull-right">
              <a
                className="btn btn-light"
                href={props.url}
                rel="noopener noreferrer"
                target="_blank"
               >
                View Article
               </a>
               <button onClick={() => props.handleClick(props._id)} className="btn btn-primary">
                {props.buttonText}
               </button>
            </span>
        </h3>

);

export default Article;