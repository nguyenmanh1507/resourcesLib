import React, { PropTypes } from 'react';

const Comment = props => (
  <div className="comment">
    <a className="avatar">
      <img src={props.avatarUrl} alt="User avatar" />
    </a>
    <div className="content">
      <a className="author">{props.name}</a>
      <div className="metadata">
        <span className="date">{props.commentTime}</span>
      </div>
      <div className="text">
        {props.commentContent}
      </div>
      <div className="actions">
        <a href="#" className="reply">Reply</a>
      </div>
    </div>
    {/* Nesting comments */}
    {props.children}
  </div>
);

Comment.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  commentTime: PropTypes.string.isRequired,
  commentContent: PropTypes.string.isRequired,
}

export default Comment;
