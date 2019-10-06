class ElementNode {

    

    constructor( node, childNodes = []) {
        this.id = node.id;
        this.type = node.type;
        this.attributes = node.attributes;
        this.childNodes = node.childNodes;
    }

  
    getElement(){
        return {
            id: this.id,
            type: this.type,
            attributes: this.attributes,
            childNodes: this.childNodes

        }
    }
    
    addChildren( childrenNode ) {
        this.childNodes.push(childrenNode);
    }
}

class Elements {

    ;

    constructor(nodes = {}){
        this.nodes = nodes;
    }

    addChildrenToNode( childrenNode, parentNode){
        this.nodes[parentNode.id].addChildren(childrenNode);
    }
    addToNode( node ){
        this.nodes[node.id] = node;
    }


}

export {
    ElementNode,
    Elements
}