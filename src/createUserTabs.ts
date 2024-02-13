
export function createUserTabs(tabArray: string[]){

    //Reset
    const tabList = document.querySelector(".tabs") as HTMLElement
    tabList.innerHTML = ""
    

    //Skapa Tabbar
    tabArray.forEach(user => {
        const tabItem = document.createElement("li") as HTMLElement
        tabItem.classList.add("tab")
        tabItem.classList.add(user)
        tabItem.innerText = user
        tabList.appendChild(tabItem)

        //Sätt stored user när man klickar på en tabb
        tabItem.addEventListener('click', ()=>{

            localStorage.setItem("user", user)
            location.reload()
            
        })
    });
}