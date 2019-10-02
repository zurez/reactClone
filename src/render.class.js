function render( elementNode ) {
    const parentNode = elementNode.getElement();

    const parent = createDocument( parentNode );

    const childrenNodes = parentNode.childrenNodes;

    for ( let childNode  in childrenNodes) {
        const child = createDocument( childNode );

        parent.appendChild(child);
    }

    
}

function createDocument( node ) {
    const domNode = document.createElement( node.type);
    const attributes = node.attributes;
    if( attributes ) {

        for ( let attribute in attributes ){
            const temp = document.createAttribute(attribute);
            temp.value = attributes[attribute];
            domNode.setAttributeNode(temp);
        }
    }
    
    return domNode;
}

function renderChildren( childrenNodes, parentId ) {}


export { render }