let addInput = document.querySelector(".classes-to-add");
let deleteInput = document.querySelector(".classes-to-remove");
let showDiv = document.querySelector(".classes-list div");
let currentEle = document.querySelector('[title="Current"]');

function classControl(addClass, remClass, classDiv, current) {
    addClass.onblur = function() {
            addClass.value.toLowerCase().split(" ").sort().map(function(e) {
                current.classList.add(e);
                let newSpan = document.createElement("span");
                newSpan.appendChild(document.createTextNode(e));
                classDiv.appendChild(newSpan);
            })
    }

    remClass.onblur = function() {
        remClass.value.toLowerCase().split(" ").map(function(e) {
            current.classList.remove(e);
            for(i=0; i<classDiv.children.length; i++) {
                if(classDiv.children[i].innerHTML === e) {
                    classDiv.children[i].remove();
                }
            }
        })
    }
} 

classControl(addInput, deleteInput, showDiv, currentEle);