import { choice, remove } from "./helpers";
import fruit from "./foods"; 


const listOfFruit = fruit; 
const randFruit = choice(listOfFruit); 

console.log(`I'd like on ${randFruit}, please.`)
console.log(`Here you go: ${randFruit}`)
console.log(`Delicious, May I have another?`)

remove(listOfFruit, randFruit); 

console.log(`I'm sorry, we're all out. We have ${listOfFruit} left.`)