# Note app Using Terminal Based on Node JS

## How to setup for running ?

Download the folder and run `npm install`

## How to add notes ?

```
node app.js add --title="your note name" --body="your note body"
```

## How to see all notes ?

```
node app.js list
```

## How to read a single note ?

```
node app.js read --title="your note name"
```

## How to remove notes ?

```
node app.js remove --title="your note name"
```

## Used packages

- `yargs` for command in terminal
- `chalk` for printing sytling commands
