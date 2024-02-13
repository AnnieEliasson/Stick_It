import { display } from "./display_cards.js";

export async function deleteNote(id:string, username: string) {
    let response = await fetch(`https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${id}`, {
        method: 'DELETE'
      });
      display(username) 
  }