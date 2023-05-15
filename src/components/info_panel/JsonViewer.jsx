import React from 'react';
import ReactJson from 'react-json-view';
import './styles/InfoPanel.css';

const JsonViewer = ( {data} ) => {
    return (
      <div id="JSONContainer">
        <ReactJson src={data} theme="monokai" />
      </div>
    );
};

export default JsonViewer;

