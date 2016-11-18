import React, { PropTypes, Component } from 'react';
import CommentReplyForm from './CommentReplyForm';

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      showReplyForm: false,
    };

    this.toggleReplyForm = this.toggleReplyForm.bind(this);
  }

  toggleReplyForm() {
    this.setState({ showReplyForm: !this.state.showReplyForm });
  }

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
          <div className="actions">
            <a
              href="/"
              className="reply"
              rel="nofollow"
              onClick={evt => {
                evt.preventDefault();
                this.toggleReplyForm();
              }}
            >Reply</a>
          </div>
        </div>
        <div className="comments">
          {/* Nesting comments */}
          {props.children}
          {this.state.showReplyForm && <CommentReplyForm />}
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
