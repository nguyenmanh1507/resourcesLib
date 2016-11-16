import React from 'react';
import CommentForm from './components/CommentForm';
import CommentsList from './components/CommentsList';

const Comments = () => (
  <div className="ui segment">
    <div className="ui comments">
      <CommentsList />
      <CommentForm />
    </div>
  </div>
);

export default Comments;
