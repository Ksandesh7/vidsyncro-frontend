import React from 'react';

const Table = ({ videos, onPreview }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Status</th>
          <th>Preview</th>
        </tr>
      </thead>
      <tbody>
        {videos.map((video, index) => (
          <tr key={index}>
            <td>{video.title}</td>
            <td>{video.status}</td>
            <td>
              <button onClick={() => onPreview(video)}>Preview</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
