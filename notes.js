const fs=require('fs')
const chalk=require('chalk')

// addnote function begins
const addNote=(title, body)=>{
const notes=loadNotes()

const duplicateNote=notes.find((notes)=>notes.title===title)

if(duplicateNote)
{
    console.log(chalk.bgRed('Notes Title already Taken!'))
    
}
else
{
    notes.push({
        title: title,
        body: body
    })
    
    saveNotes(notes)
    console.log(chalk.bgGreen('New Note Added!'))
}
}
//Add note function ends

//Remove function begins
const removeNote=(title)=>
{
    const notes=loadNotes()
    const notesToKeep=notes.filter((notes)=>notes.title!==title)
    
if(notesToKeep.length===notes.length)
{
    console.log(chalk.bgRed('No note found!'))
}
else{
    console.log(chalk.bgGreen('Note removed!'))
    saveNotes(notesToKeep)
}
}
//remove note ends here

//listnote function begins here
const listNote=()=>
{
    const notes=loadNotes()

    console.log(chalk.bgGreen('These are your notes'))

    notes.forEach((note) => {
        console.log(note.title)
    });
}
//listnote ends here

//readNote function begins here
const readNote=(title)=>{
    const notes=loadNotes()
    const note=notes.find((note)=>note.title===title)
    if(note)
    {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }
    else{
        console.log(chalk.bgRed('Note Not Found'))
    }
}
//ListNote function ends here

//saveNotes function begins here
const saveNotes=(notes)=>
{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}
// saveNotes function ends here

//LoadNotes function begins here
const loadNotes=()=>{
  try{
        const dataBuffer=fs.readFileSync('notes.json')
    const dataJSON=dataBuffer.toString()
    return JSON.parse(dataJSON)
  }
  catch(error)
  {
      return []
  }
}
//saveNotes function ends here




module.exports={
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}