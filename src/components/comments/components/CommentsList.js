import React, { Component } from 'react';
import Comment from './Comment';

class CommentsList extends Component {
  render() {
    const comments = this.props.comments.map(c => (
      <Comment
        key={c.id}
        avatarUrl={c.avatarUrl}
        name={c.name}
        commentTime={c.time}
        commentContent={c.content}
      />
    ));

    return (
      <div>
        <h3 className="ui dividing header">Comments</h3>
        {comments}
      </div>
    );
  }
}

export default CommentsList;
