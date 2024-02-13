import { data } from "./interface";
import { deleteNote } from "./delete_cards.js";
import { editNote } from "./edit_card.js";
import { editDate } from "./edit_date.js";


export async function display(user: string): Promise<void> {
  
    let response: Response = await fetch(`https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${user}`);

  let data: data = await response.json()

  editDate(data.notes)

  


  document.querySelector(`.${user}`).classList.add("active")
  document.getElementById('username').nodeValue = user

    const postcardContainer = document.querySelector(".post-card-container")
    
    postcardContainer.innerHTML = ""
    const timeline = document.createElement("div")
    timeline.classList.add("time-line")
    postcardContainer.appendChild(timeline)

    //console.log(data.notes);
   
    
    
    let id = ""
    data.notes.forEach(element => {
        
      

    const postCard = document.createElement("div")
    postCard.classList.add("post-card")
    

    postcardContainer.appendChild(postCard)
    const text = document.createElement("p")
    text.innerText = element.note
    postCard.appendChild(text)

    const foot = document.createElement("div")
    foot.classList.add("post-card-foot")
    postCard.appendChild(foot)

    const username = document.createElement("span")
    username.classList.add("username")
    username.innerText= `- ${element.username}`
    foot.appendChild(username)

    const wrap = document.createElement("div")
    foot.appendChild(wrap)

    const edit = document.createElement("span")
    edit.classList.add("edit")
    edit.innerText="Edit "
    edit.setAttribute("ID", element.id)
    edit.addEventListener('click', ()=>{
        
      
      
        id = edit.getAttribute("ID")
        editNote(element.note, id)

    })
    wrap.appendChild(edit)

    const deleteBtn = document.createElement("span")
    deleteBtn.classList.add("delete")
    deleteBtn.innerText = "Delete"
    deleteBtn.setAttribute("ID", element.id)
    deleteBtn.addEventListener('click', ()=>{
        
        id = deleteBtn.getAttribute("ID")
        deleteNote(id, element.username)

    })
    wrap.appendChild(deleteBtn)

    const displayDate = document.createElement("span")
    displayDate.classList.add("date")
    displayDate.innerHTML = `${element.createdAt} &#10634;`
    foot.appendChild(displayDate)
    
  });
  
  }