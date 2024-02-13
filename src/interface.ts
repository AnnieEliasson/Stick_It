export interface userInput{
    text: string,
    username: string | void,
}

export interface noteData {
    createdAt: string,
    note: string,
    username: string,
    id: string,
    title: string,
}

export interface data{
    notes: noteData[],
    success: boolean,
}

export interface note {
    username: string,
    title: string,
    note: string
}