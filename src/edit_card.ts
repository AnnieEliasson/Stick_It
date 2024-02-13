
export function editNote(beforeEdit: string, id: string) {

    
    const textField = document.getElementById('text-field') as HTMLInputElement
    textField.value = beforeEdit;

    

    const postBtn = document.getElementById('post-btn') as HTMLElement
    postBtn.style.display = "none";

    const editBtn = document.getElementById('edit-btn') as HTMLElement
    editBtn.style.display = "inline-block";

    const username = document.querySelector("#username") as HTMLInputElement
    username.style.display = "none"


    editBtn.addEventListener('click', ()=>{

        edit(id, textField.value.toString())

        postBtn.style.display = "inline-block"
        username.style.display = "inline-block"
        editBtn.style.display = "none"
        textField.value = ""

        
    })
  
}



async function edit(id:string, textField:string) {
    const note = {
        note: textField
    }
      
      await fetch(`https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${id}`, {
        method: "PUT",
        body: JSON.stringify(note),
        headers: {
          'Content-Type': 'application/json' 
        }
        
      });

      

      location.reload()
      
      

      
}

