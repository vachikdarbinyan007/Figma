// dates
let d= new Date()
console.log(d.toISOString())

// parse => ml
// toUtcstring
//getDate

// change types

let z="3.3"

console.log(typeof Number(z))
// Number,ToString


let item=document.getElementById("item")
item.addEventListener("dragstart", dragStart)

function dragStart(e){
    e.dataTransfer.setData("text/plain",e.target.id)
    setTimeout(function(){
        e.target.classList.add("hide")
    },0)
}

let boxes=document.getElementsByClassName("box")
for(let i=0;i<boxes.length;i++){
    boxes[i].addEventListener('dragenter', dragEnter)
    boxes[i].addEventListener('dragover', dragOver);
    boxes[i].addEventListener('dragleave', dragLeave);
    boxes[i].addEventListener('drop', drop);
}

function dragEnter(e){
    e.preventDefault();
    e.target.classList.add("drag-over")
}
function dragOver(e){
    e.preventDefault();
    e.target.classList.add("drag-over")
}
function dragLeave(e){
    e.target.classList.remove("drag-over")
}
function drop(e){
    e.target.classList.remove("drag-over")
    // get the draggable element
        const i = e.dataTransfer.getData('text/plain',"id");
        const draggable = document.getElementById(i);
        // add it to the drop target
        e.target.appendChild(draggable);
        console.log(e.target)
        // display the draggable element
        draggable.classList.remove('hide');
}