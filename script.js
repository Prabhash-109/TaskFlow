const element = document.getElementById('loginsignup2');
const body = document.getElementById("all");
function Visibility() 
{
    element.style.visibility = 'visible';
    body.style.opacity='0.05';
}  
const head = document.getElementById("head");
const para = document.getElementById("para");
const cover = document.getElementById("coverid");
const colorchange  = document.getElementById("colorchange");
function move()
{    
 
    cover.style.transform = 'translateX(0)';
    cover.style.borderTopRightRadius="100%";
    cover.style.borderBottomRightRadius="100%";
    cover.style.borderTopLeftRadius="0";
    cover.style.borderBottomLeftRadius="0";
    head.innerText = 'Welcome!';
    para.innerText = 'Enter your Personal Details to see the Tasks Assigned to you.';        
}
function moveback()
{
  
    cover.style.transform = 'translateX(100%)';
    cover.style.borderTopLeftRadius="100%";
    cover.style.borderBottomLeftRadius="100%";
    cover.style.borderTopRightRadius="0";
    cover.style.borderBottomRightRadius="0";
    head.innerText = 'Welcome!';
    para.innerText = 'Enter your Personal Details to see the Tasks Progress of Your Team.'         
}

function admin()
{
    const email = document.getElementById('emailid').value;
    const pass = document.getElementById('passwordid').value;
    const incorrect = document.getElementById('invalid');
    if(email === "Prabhash" && pass==="Prabhash123")
    {
        window.location.href='admin.html';
    }
    else{
        incorrect.innerText="Incorrect Email or Password!";
    }
}

function emp()
{
    const email = document.getElementById('emailidemp').value;
    const pass = document.getElementById('passwordidemp').value;
    const incorrect = document.getElementById('invalidemp');
    if(email === "Pulkit" && pass==="Pulkit123")
    {
        window.location.href='emp1.html';
    }
    else if(email === "Prateek" && pass==="Prateek123")
    {
        window.location.href='emp2.html';
    }
    else{
        incorrect.innerText="Incorrect Email or Password!";
    }
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('assigned-tasks-list');
    taskList.innerHTML = ''; 
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${task.name} (${task.assignee})</span> <span><i class="fa-solid fa-circle-dot"></i> ${task.date}</span>`;
        taskList.appendChild(li);
    });
}

function saveTask(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks(); 
}

document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    const taskName = document.getElementById('task-name').value;
    const taskDesc = document.getElementById('task-desc').value;
    const taskDate = document.getElementById('task-date').value;
    const taskAssign = document.getElementById('task-assign').value;

    if (taskName && taskDesc && taskDate && taskAssign !== 'select') {
        const task = {
            name: taskName,
            desc: taskDesc,
            date: taskDate,
            assignee: taskAssign
        };
        saveTask(task);
        document.getElementById('task-form').reset();
    } else {
        alert('Please fill out all fields before assigning a task.');
    }
});

window.onload = loadTasks;