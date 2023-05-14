## Functionality

- Graph visualisaiton (viewing properties of nodes and edges)
- Editing nodes (names, attributes, etc)
- Editing edges (source, target, value)
- Creating new nodes and edges


## Component Structure/Tree

- App
  - Editor
    - Graphical Display Window
    - Current Editor (Display Info On Selected Item)
      - Uneditable JSON Display
      - Edit Button, which brings up an html style form to edit properties
    - 
  - LoginPage

### Editor Component

**State**
  - currentNode
  - inSelectingMode


### What we need from neptune

- All node information
    - ID, label, name, other attributes, incoming edges, outgoing edges
- All edge infomation
    - ID, Label, Edge value, source, destination
