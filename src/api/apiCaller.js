import axios from 'axios';

export default class APICaller {
    constructor() {
        this.API_URL = 'https://9juqol5qb1.execute-api.eu-west-2.amazonaws.com/v2';
    }

    /*---------------------------
        GENERIC METHODS BELOW
    ----------------------------*/ 

    /**
     * @param {String} methodPath - Path to API endpoint in API Gateway
     * @param {Object} data - Data object to be passed to API endpoint
     * @returns {Object} Resolved promise with data from API endpoint
     */
    #genericPost(methodPath, data) {
        return new Promise( (resolve, reject) => {
            axios.post(this.API_URL+methodPath, data)
            .then((response) => {
                resolve(response.data.body);
            })
            .catch(error => {
                console.log("ERROR Generic Post Call:", error);
                reject(error);
            });
        });
    }

    /**
     * @param {String} methodPath - Path to API endpoint in API Gateway
     * @returns {Object} Resolved promise with data from API endpoint
     */
    #genericGet(methodPath) {
        return new Promise((resolve, reject) => {
            axios.get(this.API_URL+methodPath)
                .then((response) => {
                    resolve(response.data.body);
                })
                .catch(error => {
                    console.log("ERROR Generic Get Call:", error);
                    reject(error);
                });
                
        });
    }


    /**
     * @returns all nodes and their respective edges in the graph and all their respective properties
     */
    getAllGraphData() {
        return this.#genericGet('/get-all-graph-data');
    }

    /*------------------------
        EDGE METHODS BELOW
    -------------------------*/ 

    /**
     * @param {Object} edge - edge object
     * @returns {String} Neptune ID of new edge
     */
    addEdge(edge) {
        return this.#genericPost('/create-edge', edge);
    }

    /**
     * @param {Object} edge - edge object
     */
    removeEdge(edge) {
        return this.#genericPost('/delete-edge', edge);
    }

    /**
     * @param {Object} edge - edge object
     * @returns {String} Neptune ID of new edge
     */
    updateEdge(edge) {
        return this.#genericPost('/update-edge', edge);
    }


    /*------------------------
        NODE METHODS BELOW
    -------------------------*/ 
    /**
     * @param {Object} node - node object
     * @returns {String} Neptune ID of new node
     */
    addNode(node) {
        return this.#genericPost('/add-node', node);
    }

    /**
     * @param {Object} node - node object
     */
    removeNode(node) {
        alert(JSON.stringify(node));
        return this.#genericPost('/delete-node', node);
    }

    /**
     * @param {Object} node - node object
     * @returns {String} Neptune ID of new node
     */
    updateNode(node) {
        alert(JSON.stringify(node));
        return this.#genericPost('/update-node', node);
    }

}