
function render( elementNode, $0 ) {
    const parentNode = elementNode.getElement();
    
    const parent = createDocument( parentNode );

    const childNodes = parentNode.childNodes;
    
    for ( let childNode  of childNodes) {
    
        let child;
        switch( childNode.type){
            case "string":
                child = createTextNode(childNode);
                break;
            default:
                child = createDocument( childNode );
        }
        
        if( childNode.childNodes && childNode.childNodes.length > 0){
            console.log( childNode.childNodes[0])
           child.append( render(childNode.childNodes[0]) );
        }
        parent.appendChild(child);
    }


    $0.append(parent);
}

function createTextNode( node ) {
    return document.createTextNode( node.attributes.value);
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

function renderChildren( childNodes, parentId ) {}


export { render }