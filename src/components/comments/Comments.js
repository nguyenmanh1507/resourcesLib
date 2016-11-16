import React from 'react';
import CommentForm from './components/CommentForm';
import CommentsList from './components/CommentsList';

const Comments = ({ comments }) => (
  <div className="ui segment">
    <div className="ui comments">
      <CommentsList data={comments} />
      <CommentForm />
    </div>
  </div>
);

export default Comments;
