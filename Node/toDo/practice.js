const fs = require('fs')
const {argv} = require('process')

const filepath = "./tasks.json"
const command = process.argv[2]
const argument = process.argv[3]

const saveTasks = (tasks)=>{
    const dataJSON = JSON.stringify(tasks)
    fs.writeFileSync(filepath,dataJSON)
}
const loadTask = ()=>{
    try {
        const dataBuffer = fs.readFileSync(filepath)
        const DataJson = dataBuffer.toString()
        return JSON.parse(DataJson)
    } catch (error) {
        return []
    }
   
}

const listTasks = ()=>{
    try {
        const task = loadTask();
        task.forEach((task,index) => {console.log(` ${index+1} - ${task.newTask}`);});
    } catch (error) {
        console.log(error);
    }
}

const addTasks = (newTask)=>{
    try {
        
        const tasks = loadTask()
        tasks.push({newTask})
        saveTasks(tasks)
        console.log(`tasks added ${newTask}`);
    } catch (error) {
        console.log(`error while adding the task ${error}`);
    }
}


if(command === "add"){
    addTasks(argument);
}
else if(command === "list"){
    listTasks();
}
else if(command === "remove"){
    removeTasks();
}
else{
    console.log(`command invalid`);
}

