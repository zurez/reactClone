class ElementNode {

    

    constructor( node, childrenNodes = []) {
        this.id = node.id;
        this.elementType = node.elementType;
        this.elementAttributes = node.elementAttributes;
        this.childrenNodes = childrenNodes;
    }

  
    getElement(){
        return {
            id: this.id,
            elementType: this.elementType,
            elementAttributes: this.elementAttributes,
            childrenNodes: this.childrenNodes

        }
    }
    
    addChildren( childrenNode ) {
        this.childrenNodes.push(childrenNode);
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