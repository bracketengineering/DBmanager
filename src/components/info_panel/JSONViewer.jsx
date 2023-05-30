import React from 'react';
import ReactJson from 'react-json-view';
import './styles/JSONViewer.css';

const JSONViewer = ({ data }) => {
  //alert(JSON.stringify(data));
  return (
    <div id="JSONContainer">
      <ReactJson src={data.object} theme="monokai" />
    </div>
  );
};

export default JSONViewer;

