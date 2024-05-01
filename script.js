const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

function addItem(e){
    e.preventDefault(); // prevent default form action
    const newItem = itemInput.value;
    if(newItem === ''){
        alert("please enter an Item");
        return;
    }
    // console.log("Success");
    //crerate  list Item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem))
    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);
    // console.log(li)
    itemList.appendChild(li);
}
function createButton(classes){
    const button = document.createElement('button');
    button.className = classes;
    const icon=createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;

}

function createIcon(classes){
    const icon = document.createElement('i');
    icon.className=classes;
    return icon;
}
//Event Listener
itemForm.addEventListener('submit',addItem);


{/* <li>
Apples
<button class="remove-item btn-link text-red">
  <i class="fa-solid fa-xmark"></i>
</button>
</li> */}