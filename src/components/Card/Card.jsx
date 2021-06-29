import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './Card.css';

function CardItem(props) {
  const { id, imageUrl, title } = props.data;
  return (
    <Card >
    <Card.Body className="mycard">
      <NavLink to={`/article/${id}`}>
        <Card.Img src={imageUrl} variant="top" />
        <Card.Text className="title">{title}</Card.Text>
      </NavLink>
    </Card.Body>
  </Card>
  );
}

export default CardItem;
