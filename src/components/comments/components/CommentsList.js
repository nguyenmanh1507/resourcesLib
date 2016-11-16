import React, { Component } from 'react';
import Comment from './Comment';

class CommentsList extends Component {
  constructor() {
    super()
    this.state = {
      comments: [],
    }
  }

  render() {
    return (
      <div>
        <h3 className="ui dividing header">Comments</h3>
        <Comment
          avatarUrl="http://placehold.it/60x60"
          name="Matt"
          commentTime="Today at 5:42PM"
          commentContent="How artistic!"
        />
        <Comment
          avatarUrl="http://placehold.it/60x60"
          name="Elliot Fu"
          commentTime="Yesterday at 12:30AM"
          commentContent="This has been very useful for my research. Thanks as well!"
        >
          <div className="comments">
            <Comment
              avatarUrl="http://placehold.it/60x60"
              name="Jenny Hess"
              commentTime="Just now"
              commentContent="Elliot you are always so right :)"
            />
          </div>
        </Comment>
        <Comment
          avatarUrl="http://placehold.it/60x60"
          name="Joe Henderson"
          commentTime="5 days ago"
          commentContent="Dude, this is awesome. Thanks so much"
        />
      </div>
    );
  }
}

export default CommentsList;
