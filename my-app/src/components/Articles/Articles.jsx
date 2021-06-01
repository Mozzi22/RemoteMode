import React from 'react';
import './Articles.css';


function Articles(props) {
  return (
    <div className="fon">
      <article className="article">
      <div className="title">{props.title}</div>
      <img src={props.src} alt=""  className="title__img"/>
      <div className="title__description">
       {props.description}
      </div>
      </article>
    </div>
  );
}

export default Articles;