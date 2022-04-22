// This is for the conversion of html file to string method
async function btn(){
    
    const rawhtml = await fetch('http://localhost:5000/html/')
        .then(function(response) {
            return response.text() // Gets html as string from endpoint
        }).then(function(data) {
            return data // Returns it
        }
        )
    document.getElementById("content").innerHTML = rawhtml // Sets content div to the html

}

// This is for the url redirect method
async function btn2() {
    location.href = "http://localhost:5000/next/" // Redirects page to this link, which is an endpoint (see server.js)
}