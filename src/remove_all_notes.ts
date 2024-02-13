import { data } from "./interface.js";
import { deleteNote } from "./delete_cards.js";
import { createUserTabs } from "./createUserTabs.js";
import { tabs } from "./main.js"

export async function removeAllNotesFromTab(user:string){
    let response: Response = await fetch(`https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${user}`);

    let data:data = await response.json()

    //tar bort alla noteringar i tabben
    data.notes.forEach(note => {

        deleteNote(note.id, user)
 
    });

    // Tar bort Tabben
    let index: number = tabs.indexOf(user)
    tabs.splice(index, 1)

    //lägger uppdaterad tab array i locale storage och sätter user till något som existerar
    let string = JSON.stringify(tabs) 
        localStorage.setItem("tabs", string) 
        localStorage.setItem("user", tabs[0])

      
    // uppdaterar tablistan på sidan
    createUserTabs(tabs)  
    location.reload()  
}