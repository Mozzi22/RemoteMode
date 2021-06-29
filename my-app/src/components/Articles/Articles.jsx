import React from 'react';
import './Articles.css';
import { Container, Image } from 'react-bootstrap';
import Comment from './Comment';

function Articles(props) {
  const { imageUrl, title, description, expertComment } = props.data
  return (
    <div className="fon">
      <Container fluid>
        <article className="article">
          <div className="title">{title}</div>
          <Image src={imageUrl} alt="imageUrl"  className="title__img"/>
          <div className="title__description">
            {description}
          </div>
          <Comment data={expertComment} />
        </article>
      </Container>
    </div>
  );
}

export default Articles;
