let button = document.querySelector(".icon-upload"),
    inputsValue = document.querySelector("[name='task']");
    
 
let taskCounter ;
localStorage.getItem('tasksCounter') ? taskCounter = localStorage.getItem('tasksCounter') : taskCounter = 0 ;

let taskCounterFun = _=> localStorage.setItem('tasksCounter', taskCounter);

let storeData = (value) => {localStorage.setItem(`task ${taskCounter}`, value); taskCounter++; taskCounterFun()} ,
    getData = (value) => localStorage.getItem(value);

button.addEventListener('click', function (event){

    event.preventDefault();

    let taskData = {task: inputsValue.value, done: false, star: true};

     storeData(JSON.stringify(taskData))  ;

    let res = JSON.parse(getData(taskCounter)) ;

    console.log(`${res.task} & ${taskCounter}`);
    
}); 