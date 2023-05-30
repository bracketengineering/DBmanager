import React, { useState } from 'react';
import './styles/GraphPreferences.css';

export default function GraphPreferencesList({setGraphData, graphData, search}) {
  const [nodeType, setNodeType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleNodeTypeChange = (event) => {
      setNodeType(event.target.value);
      
  };

  const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
      // Add your logic for searching here
  };

  return (
      <div id="GraphPreferences">
          <label>
              Filter by Node Type:
              <select value={nodeType} onChange={handleNodeTypeChange}>
                  <option value="all">All</option>
                  <option value="user">User</option>
                  <option value="meal">Meal</option>
                  <option value="ingredient">Ingredient</option>
                  <option value="category">Category</option>
                  <option value="supercategory">Supercategory</option>
              </select>
          </label>

          <label>
              Search:
              <input 
                className="DataInput"
                type="text"
                value={searchTerm} onChange={handleSearchChange} />
          </label>
      </div>
  );
};
