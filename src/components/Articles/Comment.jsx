import React from 'react';

function Comment(props) {
  return (
    <div className="article__comments">
      <h3 className="article__comments-name">Expert comment</h3>
      <p className="article__comments-comment">{props.data}</p>
    </div>
  );
}

export default Comment;