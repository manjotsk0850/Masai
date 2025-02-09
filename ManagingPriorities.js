let tasks = ["Task1", "Task2", "Task3", "Task4", "Task5"];

for (let i = 0; i < tasks.length - 1; i++) {
  tasks[i] = tasks[i + 1];
}
tasks.length -= 1; 

tasks = ["HighPriority1", "HighPriority2", ...tasks];
tasks[tasks.length - 1] = "NewTask";

console.log(tasks);