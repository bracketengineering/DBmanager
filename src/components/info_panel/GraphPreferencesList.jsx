import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import GraphData from '../GraphData';
import './styles/GraphPreferences.css';

export default function GraphPreferencesList({ graphData, selectObject }) {
  const [nodeType, setNodeType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [search, setSearch] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [filterResults, setFilterResults] = useState([]);

  useEffect(() => {
    if(graphData != null) {
      const options = {
        minMatchCharLength: 1,
        threshold: 0.2,
        keys: ["name"]
      }
      const searchData = filterResults
      const newSearch = new Fuse(searchData, options);
      setSearch(newSearch);
      
    }
  }, [graphData, filterResults]);

  useEffect(() => {
    if(graphData) {
      setFilterResults(graphData.getNodes().filter((item => item.nodeType != "user")));
    }
  }, [graphData]);

  //bac43416-68c5-42ba-291d-80101f764973

  const handleNodeTypeChange = (event) => {
    setNodeType(event.target.value);
    const newGraphData = event.target.value === 'all' ? graphData.getNodes().filter((item => item.nodeType != "user"))
    : 
     graphData.getNodes().filter((item => item.nodeType === event.target.value));
    setFilterResults(newGraphData);
    
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    const result = search.search(event.target.value).map((r) => r.item);
    setSearchResults(result);
  };

  const handleResultClick = (item) => {
    const nodeToFocus = {focusedNodeId: item.id,  object: graphData.getNodeJSON(item.id), nodeId: item.id}

    selectObject(nodeToFocus);
  }

  const SearchResult = ({ result }) => 
  (
    <div 
      id="SearchResult"
      onClick={() => handleResultClick(result)}
    >
      {result.name ? result.name : result.id}
    </div>
  )

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

          {<label>
              Search:
              <input 
                className="DataInput"
                type="text"
                value={searchTerm} 
                onChange={handleSearchChange} />
          </label>}

          {searchResults.length > 0 ? 
          (<div
            id="SearchResultList"
          >
            {searchResults.map(result => (
              <SearchResult key={result} result={result} />
            ))}
          </div>):
          <></>
          } 

        { searchResults.length <= 0 ? 
          (<div
            id="SearchResultList"
          >
            {filterResults.map(result => (
              <SearchResult key={result} result={result} />
            ))}
          </div>):
          <></>
          }
      </div>
  );
};


