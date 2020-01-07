const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

//  Create add command
yargs.command({
	command: 'add',
	describe: 'Add a new note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'
		},
		body: {
			describe: 'Note body',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv) {
		notes.addNote(argv.title, argv.body)
	}
})

//  Create remove command
yargs.command({
	command: 'remove',
	describe: 'Remove a node',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv) {
		notes.removeNode(argv.title)
	}
})

//  Create list command
yargs.command({
	command: 'list',
	describe: 'Show all notes list',
	handler() {
		notes.listNotes()
	}
})

//  Create read command
yargs.command({
	command: 'read',
	describe: 'Read a note',
	builder: {
		title: {
			describe: 'Show the single note',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv) {
		notes.readNote(argv.title)
	}
})

yargs.parse()
// console.log(yargs.argv)
