import React from 'react';
import { NavLink } from 'react-router-dom';
import './Card.css';

function Card(props) {
  return (
    <div className="card">
    <div className="mycard">
    <NavLink to={`/article/${props.id}`}>
    <div className="card">
      <img src={props.src} alt="" className="img"/>
      <div className="title">{props.title} </div>
      <div className="link"> {props.linkText} </div>
    </div>
    </NavLink>
    </div>
    </div>
  );
}

export default Card;