const express = require('express')
const minimist = require('minimist')
const app = express()
const args = minimist(process.argv.slice(2))
const fs = require('fs')
const path = require('path')
app.use(express.json());

app.use(express.static('./public/home')); // Should load /home files, but doesn't - very odd

args["port"]

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const HTTP_PORT = args.port || 5000

const server = app.listen(HTTP_PORT, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%', HTTP_PORT))
})

// Endpoint for html to string method
app.get('/html/', (req, res) => {
	var raw = fs.readFileSync(path.resolve(__dirname, './public/next/next.html'), 'utf8')
	res.send(raw)
});

// Start of next page endpoints ------------------------------

// Returns html for next page
app.get('/next/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public/next/'));
})

// Returns css for next page
app.get('/next/style.css', (req,res) => {
    res.sendFile(path.join(__dirname, 'public/next/style.css'));
})

// Returns js for next page
app.get('/next/script.js', (req,res) => {
    res.sendFile(path.join(__dirname, 'public/next/script.js'));
})

// End of next page endpoints --------------------------

app.use(function(req,res){
    res.status(404).send('404 NOT FOUND')
})