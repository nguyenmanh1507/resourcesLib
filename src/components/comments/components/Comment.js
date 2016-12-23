import React, { PropTypes, Component } from 'react';

class Comment extends Component {
  render() {
    const props = this.props;

    return (
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
        </div>
      </div>
    );
  }
}

Comment.propTypes = {
  avatarUrl: PropTypes.string,
  name: PropTypes.string,
  commentTime: PropTypes.string,
  commentContent: PropTypes.string,
}

export default Comment;
