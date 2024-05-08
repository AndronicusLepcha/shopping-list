const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const filter = document.getElementById('filter');
const items = itemList.querySelectorAll('li');


function onaddItemSubmit(e){
    e.preventDefault();
    const newItem = itemInput.value;
    if(newItem === ''){
        alert("please enter an Item");
        return;
    }
    addItemToDom(newItem);
    addToLocalStorage(newItem);
}

function addItemToDom(item){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item))
    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);
    //add li to DOM
    itemList.appendChild(li);
    checkUI();
}

function addToLocalStorage(item){
    let itemFormStorage;
    if(localStorage.getItem('items') === null){
        itemFormStorage=[];
    }else{
        itemFormStorage=JSON.parse(localStorage.getItem('items'));
    }
    // add new item to array
    itemFormStorage.push(item);

    //convert the json string and set to local storage
    localStorage.setItem(item,JSON.stringify(itemFormStorage));
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

function filterItems(e){
    const items=itemList.querySelectorAll('li');
    const text = e.target.value.toLowerCase();
    console.log(text);

    items.forEach(item =>{
        const itemName = item.firstChild.textContent.toLowerCase();
       if(itemName.indexOf(text) != -1){
        // console.log(true);
        item.style.display='flex';
       }else{
        // console.log(false);
        item.style.display='none';
       }
    })
}

//Event Listener
itemForm.addEventListener('submit',onaddItemSubmit);
itemList.addEventListener('click',removeItem);
clearBtn.addEventListener('click',clearItem);
filter.addEventListener('input',filterItems);
checkUI();