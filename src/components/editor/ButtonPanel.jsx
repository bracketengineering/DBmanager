// refresh icon:  https://www.flaticon.com/free-icon/refresh_2805355?term=refresh&page=1&position=2&origin=tag&related_id=2805355

import { node, edge } from './ObjectStructure';

export default function ButtonPanel({ dataBeingEdited, setDataBeingEdited, updateProperty, api, setEditingMode, 
    setGraphData, GraphData, setLoading}) {
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

    const handleRefresh = () => {
        api.getAllGraphData().then(response => {
            const data = new GraphData(response);
            setGraphData(data);
          }).catch(err => console.log(err))
        setLoading(false);
        
    }

    return (
        <div className='ButtonPanel'>
            <button className="form-button" onClick={() => handleRefresh()}>
                Refresh
            </button>
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
                Remove Edge
            </button>
        </div>
    )
}
