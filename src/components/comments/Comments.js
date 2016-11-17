import React from 'react';
import CommentForm from './components/CommentForm';
import CommentsList from './components/CommentsList';

const Comments = props => (
  <div className="ui segment">
    <div className="ui comments">
      <CommentsList {...props} />
      <CommentForm />
    </div>
  </div>
);

export default Comments;
