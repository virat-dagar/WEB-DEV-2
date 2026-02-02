//task 1
const task_1 = document.getElementById('profile')
console.log(task_1);

task_1.style.backgroundColor = "#f5f5f5";
task_1.style.padding = '15px';
task_1.style.textAlign = 'center';

//task 2
const task_2 = document.getElementsByClassName('important')
for (let i = 0; i < task_2.length; i++) {
    task_2[i].style.color = 'red';
    task_2[i].style.fontSize = '20px';
}

console.log('Total important classes:', task_2.length);

//task 3

