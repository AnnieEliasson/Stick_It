import { noteData } from "./interface";

export function editDate(notes:noteData[]){
    let arr: noteData[] = notes;

    for(let note of arr) {

      let dateArr:string[] = note.createdAt.split('/');
      
      let year = dateArr[2];
      let month: number | string = parseFloat(dateArr[0]);
      let day: number | string = parseFloat(dateArr[1])

      if(day < 10){
        day = `0${day}`
      }

      if(month < 10){
        month = `0${month}`
      }

      let shortYear: string = year.replace("20", "")

      let noteDate: string = `${day}-${month}-${shortYear}`;
      note.createdAt = noteDate

  }   

}