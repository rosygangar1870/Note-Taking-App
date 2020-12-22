const chalk=require('chalk')
const notes=require('./notes.js')
const yargs=require('yargs')

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: 'true',
            type: 'string'
        },
        body:{
            describe: 'Note Body',
            demandOption: 'true',
            type: 'string'
        }
    },
    handler(argv){
      //  console.log('Adding a new note!',argv)
     notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    builder: {
        title:{
        describe: 'Note title',
        demandOption: 'true',
        type: 'string'
        }
    },
    handler(argv){
       // console.log('Removing a note!')
       notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler(){
        notes.listNote()
    }
})

yargs.command({
    command: 'read',
    describe: 'Read the note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: 'true',
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

 yargs.parse()



