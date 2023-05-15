import './styles/Graph.css';
/**
 * Component that renders a person's name and gender, along with icons
 * representing if they have a driver license for bike and / or car.
 * @param {Object} node component props to render.
 */
function CustomNode(node) {
  const mapping = {
    'user': '#1E90FF',
    'meal': '#32CD32',
    'ingredient': '#FF6347',
    'supercategory': '#FFA500',
    'category': '#9370DB',
    'nutrient': ''
  }
  const colour = node.nodeType ? mapping[node.nodeType] : '#bbb';
  return (
      <div id="CustomNode">
        <div class="dot" style={{backgroundColor: colour}}>
          <p>{node.nodeType}</p>
        </div>
      </div>
 
  );
}

export default CustomNode;