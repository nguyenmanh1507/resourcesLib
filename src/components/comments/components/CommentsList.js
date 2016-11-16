import React, { Component } from 'react';
import Comment from './Comment';

class CommentsList extends Component {
  constructor() {
    super()
    this.state = {
      comments: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ comments: nextProps.data });
  }

  render() {
    const comments = this.state.comments.map(c => (
      <Comment
        key={c.id}
        avatarUrl={c.avatarUrl}
        name={c.name}
        commentTime={c.time}
        commentContent={c.content}
      >
        {(c.reply.length !== 0) &&
          <div className="comments">
            {c.reply.map(r => (
              <Comment
                key={r.id}
                avatarUrl={r.avatarUrl}
                name={r.name}
                commentTime={r.time}
                commentContent={r.content}
              />
            ))}
          </div>
        }
      </Comment>
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
