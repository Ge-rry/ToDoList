let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

inputField.addEventListener('focus', function(){
    addToDoButton.classList.add('bg-emerald-600');

})

inputField.addEventListener('blur', function(){
    addToDoButton.classList.remove('bg-emerald-600');

})


addToDoButton.addEventListener('click', function(){
    addToDoButton.classList.remove('bg-emerald-600')

    if (inputField.value == null || inputField.value == "") return
      
    
    let checkbox = document.createElement('input');
    
    let label = document.createElement('label');
    
    let br = document.createElement('br');

    checkbox.type = "checkbox";
    checkbox.name = "checkbox";
    checkbox.id = "checkbox";

    checkbox.classList.add('mr-2');
    checkbox.classList.add('my-2');
    checkbox.classList.add('text-emerald-500');
    checkbox.classList.add('focus:ring-0');
    checkbox.classList.add('focus:ring-offset-0');
    checkbox.classList.add('rounded-full');
    checkbox.classList.add('border-slate-200');
    checkbox.classList.add('h-6');
    checkbox.classList.add('w-6');

    label.appendChild(document.createTextNode(inputField.value));

    label.classList.add('text-slate-700');
    label.classList.add('text-lg');
      
    toDoContainer.appendChild(checkbox);
    toDoContainer.appendChild(label);
    toDoContainer.appendChild(br);
    inputField.value = "";

    checkbox.addEventListener('click', function(){
        if(label.classList.contains('line-through')){
            label.classList.remove('line-through')
            label.classList.remove('text-slate-400');

        }else{
            label.classList.add('line-through')
            label.classList.add('text-slate-400');
            label.classList.add('transition-all');
            label.classList.add('duration-300');
            label.classList.add('ease-in-out');
        }
    })

    label.addEventListener('click', function(){

        if(label.classList.contains('line-through')){
            checkbox.checked = false;
            label.classList.remove('line-through');
            label.classList.remove('text-slate-400');
        }else{
            checkbox.checked = true;
            label.classList.add('line-through');
            label.classList.add('text-slate-400');
            label.classList.add('transition-all');
            label.classList.add('duration-300');
            label.classList.add('ease-in-out');
        }
    })
})