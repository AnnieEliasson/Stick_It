import { display } from "./display_cards.js";
import { note } from "./interface.js";


export async function createNote(Username: string, Note: string) {

  // skickas med till api:t , 
    const note: note = {
        username: Username,
        title: "12345",
        note: Note
      }
      
      
      let response = await fetch("https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes", {
        method: "POST",
        body: JSON.stringify(note),
        headers: {
          'Content-Type': 'application/json' 
        }
      });
      
      display(Username)
      
}