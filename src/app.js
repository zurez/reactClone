import { ElementNode, Elements } from './element.class';

import { render } from './render.class';

const div = {
    elementType : "div",
    elementAttributes: {
        class: "foo bar",
        value: "Hello"
    },
    id: "SomeUniqueValue"
}

const node = new ElementNode(div);
const elements = new Elements();

elements.addToNode(node);

function run(){
    console.log({node,elements})
    render(node);
}

export {
    run
}