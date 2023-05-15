import React from 'react';
import ReactJson from 'react-json-view';
import './styles/JSONViewer.css';

const JSONViewer = ({ data }) => {
  return (
    <div id="JSONContainer">
      <ReactJson src={data} theme="monokai" />
    </div>
  );
};

export default JSONViewer;

