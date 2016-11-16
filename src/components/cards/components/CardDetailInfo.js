import React, { PropTypes } from 'react';

const CardDetailInfo = ({
  printLenght,
  author,
  publicationDate,
  uploader,
}) => (
  <table className="ui very basic table">
    <tbody>
      <tr>
        <td className="collapsing">Print Length</td>
        <td>{printLenght} pages</td>
      </tr>
      <tr>
        <td className="collapsing">Author</td>
        <td>{author}</td>
      </tr>
      <tr>
        <td className="collapsing">Publication Date</td>
        <td>{publicationDate}</td>
      </tr>
      <tr>
        <td className="collapsing">Resource link</td>
        <td><a href="#" target="_blank" rel="noopener noreferrer">Amazon</a></td>
      </tr>
      <tr>
        <td className="collapsing">Download</td>
        <td><a href="#" target="_blank" rel="noopener noreferrer">Google Drive</a></td>
      </tr>
      <tr>
        <td>Uploader</td>
        <td>{uploader}</td>
      </tr>
    </tbody>
  </table>
);

CardDetailInfo.propTypes = {
  printLenght: PropTypes.number,
  author: PropTypes.string,
  publicationDate: PropTypes.string,
  uploader: PropTypes.string,
};

export default CardDetailInfo;
