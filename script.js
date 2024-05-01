const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const filter = document.getElementById('filter');
const items = itemList.querySelectorAll('li');


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
    //add li to DOM
    itemList.appendChild(li);
    checkUI();
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

function removeItem(e){

    if(e.target.parentElement.classList.contains('remove-item')){
       if(confirm('are you sure ? ')){
        e.target.parentElement.parentElement.remove();
       }
    }
    checkUI();
}

function clearItem(e){
    // console.log(e.target);
    if(confirm('do you want to clear all the list ? ')){
        while(itemList.firstChild){
            itemList.removeChild(itemList.firstChild);
        }
    }
    checkUI();
}

function checkUI(){
    const items = itemList.querySelectorAll('li');
    if(items.length === 0){
        clearBtn.style.display='none';
        filter.style.display='none';
    }else{
        clearBtn.style.display='block';
        filter.style.display='block';
    }
}

//Event Listener
itemForm.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
clearBtn.addEventListener('click',clearItem);

checkUI();