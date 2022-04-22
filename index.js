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

// Start of home page endpoints ----------------------

// Html for home page
app.get('', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/home/home.html'));
});

// Css for home page
app.get('home.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/home/home.css'));
});

// JS for home page
app.get('home.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/home/home.js'));
});

// End of home page endpoints -------------------------------

// Endpoint for html to string method
app.get('/html/', (req, res) => {
	var raw = fs.readFileSync(path.resolve(__dirname, './public/next/next.html'), 'utf8')
	res.send(raw)
});


// Start of next page endpoints ------------------------------

// Returns html for next page
app.get('/next/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public/next/next.html'));
})

// Returns css for next page
app.get('/next/next.css', (req,res) => {
    res.sendFile(path.join(__dirname, 'public/next/next.css'));
})

// Returns js for next page
app.get('/next/next.js', (req,res) => {
    res.sendFile(path.join(__dirname, 'public/next/next.js'));
})

// End of next page endpoints --------------------------

app.use(function(req,res){
    res.status(404).send('404 NOT FOUND')
})