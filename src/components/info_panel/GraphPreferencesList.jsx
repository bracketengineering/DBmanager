import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import GraphData from '../GraphData';
import './styles/GraphPreferences.css';

export default function GraphPreferencesList({ graphData, selectObject }) {
  const [nodeType, setNodeType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [search, setSearch] = useState(null);
  //const [searchData, setSearchData] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  //const [selectedObject, setSelectedObject] = useState(null);

  useEffect(() => {
    if(graphData != null) {
      const options = {
        minMatchCharLength: 1,
        threshold: 0.2,
        keys: ["name"]
      }
      const searchData = graphData.getNodes();
      //alert(JSON.stringify(searchData))
      const newSearch = new Fuse(searchData, options);
      setSearch(newSearch);
    }
  }, [graphData]);

  const handleNodeTypeChange = (event) => {
    
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    const result = search.search(event.target.value).map((r) => r.item);
    setSearchResults(result);
  };

  const handleResultClick = (item) => {
    const nodeToFocus = {focusedNodeId: item.id,  object: graphData.getNodeJSON(item.id)}
    //alert(JSON.stringify(nodeToFocus));
    selectObject(nodeToFocus);
  }

  const SearchResult = ({ result }) => 
  (
    <div 
      id="SearchResult"
      onClick={() => handleResultClick(result)}
    >
      {result.name}
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

          <label>
              Search:
              <input 
                className="DataInput"
                type="text"
                value={searchTerm} 
                onChange={handleSearchChange} />
          </label>

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
      </div>
  );
};
