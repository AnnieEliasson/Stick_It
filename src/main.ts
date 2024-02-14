
import {userInput} from "./interface.js"
import {display} from "./display_cards.js"
import { createNote } from "./create_cards.js";
import { createUserTabs} from "./createUserTabs.js"
import { removeAllNotesFromTab } from "./remove_all_notes.js";

export let tabs: string[]

// input fields
const textField = document.getElementById('text-field') as HTMLInputElement;
export const username = document.getElementById('username') as HTMLInputElement;

username.value = localStorage.getItem(("user"))
display(localStorage.getItem("user"))
// post button
const postBtn = document.getElementById('post-btn');

// gather info when clicking on post button
postBtn.addEventListener('click', gatherInfo)


        let retString = localStorage.getItem("tabs") 
        let retArray = JSON.parse(retString)
        tabs = retArray
        
        if (localStorage.getItem("tabs") === null) {
        tabs = []
        }
        

createUserTabs(tabs)
function gatherInfo(){
    
    const textInput: userInput = {
        
        text: textField.value,
        username: localStorage.setItem('user', username.value),
    }

    

    if(tabs.includes(localStorage.getItem('user')) ){
        
        console.log("tab finns redan");
        
        
    }   else{

        tabs.push(localStorage.getItem('user'))
        createUserTabs(tabs)

        let string = JSON.stringify(tabs) 
        localStorage.setItem("tabs", string) 
    }


    if(textField.value != ""){
        createNote(localStorage.getItem('user'), textInput.text)
        display(localStorage.getItem('user'))
    } else {
        display(localStorage.getItem('user'))
    }

    

    textField.value = ""
    
}

  //display()

const removeTab = document.querySelector(".remove-tab") as HTMLElement

removeTab.addEventListener('click', ()=>{
    
    removeAllNotesFromTab(localStorage.getItem("user"))
    
    
})
