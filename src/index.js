import { ElementNode, Elements } from './element.class';

import { render } from './render.class';

const div = {
    type : "div",
    attributes: {
        class: "foo bar",
        value: "Hello"
    },
    id: "SomeUniqueValue",
    childNodes:[
        {
            type : "string",
            attributes: {
               
                value: "Hello World"
            }
            
        },{
            type: "ul",
            attributes:{
                style: " color: red"
            }, 
            childNodes:[
                {
                    type: "li",
                    childNodes:{
                        type: "string",
                        attributes: {
                            value: "First"
                        }
                    }
                }
            ]
        }
    ]
}

const node = new ElementNode(div);
const elements = new Elements();

elements.addToNode(node);

function run(root){
    const $0 = document.getElementById(root);
    render(node, $0);
}

run("container");
