import { node, edge } from './ObjectStructure';

export default function ButtonPanel({ dataBeingEdited, setDataBeingEdited, updateProperty, api, setEditingMode}) {
    const handleAddNode = () => {
        setDataBeingEdited({...node});
        setEditingMode(true);
    }
    
    const handleRemoveNode = async () => {
        try{
            console.log(dataBeingEdited);
            await api.removeNode(dataBeingEdited);
            alert("Successfully removed node")
        } catch(error) {
            alert("ERROR", error.message);
        }
    }
    
    const handleAddEdge = () => {
        setDataBeingEdited(edge);
        setEditingMode(true);
    }
    
    const handleRemoveEdge = async () => {
        try{
            await api.removeEdge(dataBeingEdited);
            alert("Successfully removed node")
        } catch(error) {
            alert("ERROR" + error);
            console.log(error);
        }
    }

    return (
        <div className='ButtonPanel'>
            <button className="form-button" onClick={() => handleAddNode()}>
                Add Node
            </button>
            <button className="form-button" onClick={async () => handleRemoveNode()}>
                Remove Node
            </button>
            <button className="form-button" onClick={() => handleAddEdge()}>
                Add Edge
            </button>
            <button className="form-button" onClick={async () => handleRemoveEdge()}>
                Remove Node
            </button>
        </div>
    )
}
