import React from 'react';

const CommentForm = () => (
  <form className="ui reply form">
    <div className="field">
      <textarea></textarea>
    </div>
    <button type="submit" className="ui teal labeled submit icon button">
      <i className="icon edit"></i> Comment
    </button>
  </form>
);

export default CommentForm;
