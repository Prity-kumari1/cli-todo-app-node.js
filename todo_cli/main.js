import { log } from "console";
import readline from "readline";
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const todo = [];



const showMenu =()=>{
    console.log("\n1: Add a task");
    console.log("2: View task");
    console.log("3: Exit task");

        rl.question("Choose an options ", handleInput)
    
}

const handleInput=(option)=>{
    if(option == 1){

        rl.question("write your task \n", (task)=>{
            todo.push(task);
            console.log("Task added ", task);
            showMenu()
            
        })
    }
    else if(option == 2){
        console.log(" your todo lists");
        
        todo.forEach((curr, ind)=>{
            console.log(`${ind+1} ${curr}`);
        })
        showMenu()
    }
    else if(option == 3){
        console.log("Good Bye");
        rl.close()       
    }
    else{
        console.log("Invalid Option Please try again");
        showMenu()
    }
    
}





showMenu()