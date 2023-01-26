-------------------------------------
# Expressjs Tutorial by Abhi Bhaiya #
-------------------------------------
What is Express.js ?{
    Expressjs is fast, unopinionated, minimalist web framework for Node.js
    Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is an open source framework developed and maintained by the Node.js foundation.
        1.	Create Static, Dynamic and Hybrid Web Applications
        2.	Fast and Easy
        3.	Routing
        4.	Middleware
        5.	Rest API
        6.	Very Popular
} MERN and MEAN

Prerequisite{
    1.	HTML
    2.	CSS
    3.	JavaScript
    4.	NPM
    5.	Nodejs
    6.	Bootstrap
    7.	Tailwindcss
    8.	Axios
    9.	Fetch API
}

Why Express?{
    Unlike its competitors like Rails and Django, which have an opinionated way of building applications, Express has no "best way" to do something. It is very flexible and pluggable.
}

Check Nodejs and NPM is Install or Not ?{
    node --version
    npm --version

    You should get an output similar to the following.
    v18.12.1
    9.1.2
}

Node Package Manager(npm){
    npm is the package manager for node. The npm Registry is a public collection of packages of open-source code for Node.js, front-end web apps, mobile apps, robots, routers, and countless other needs of the JavaScript community. npm allows us to access all these packages and install them locally. You can browse through the list of packages available on npm at npmJS.

    How to use npm?
        Globally − This method is generally used to install development tools and CLI based packages. To install a package globally, use the following code.
        npm install -g <package-name>

        Locally − This method is generally used to install frameworks and libraries. A locally installed package can be used only within the directory it is installed. To install a package locally, use the same command as above without the -g flag.
        npm install <package-name>
}

Install Express and Nodemon{
    npm init -y 
    npm install express or npm i express
    npm install -D nodemon or npm i -D nodemon
}

var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.listen(3000);


How the App Works?{
    express() = The express function is a top-level function exported by the express module.

    const app express()
        The app returned by express() is in fact a JavaScript function, designed to be pass to node's HTTP server as a callback to handle request.
    app.get(route, callback)
        This function tells what to do when a get request at the given route is called. The callback function has 2 parameters, request(req) and response(res). The request object(req) represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, etc. Similarly, the response object represents the HTTP response that the Express app sends when it receives an HTTP request.

    res.send()
        This function takes an object as input and it sends this to the requesting client. Here we are sending the string "Hello World!".

    app.listen(port, [host], [callback]])
        port = A port number on which the server should accept incoming requests.
        host = Name of the domain. You need to set it when you deploy your apps to the cloud.
        callback = An asynchronous function that is called when the server starts listening for requests.
}
Introduction to Routing{
    Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET,POST, and so on).
    Each route can have one or more callback function, which are executed when the route is matched.

    Syntax:-
        app.method(path, callback)
        app.method(path, [callback1, callback2, ...])
        app.method(path, [callback1, callback2, ...], callback)

        * app is an instance of express.
        * method is an HTTP request method, in lowercase.
        * path is a path on the server.
        * callback is the function executed when the route is matched.

    Syntax:-
        const app = express()
        app.get('/', function(req,res){
            res.send("Hello Bhaiya")
        })
        app.post('/', function(req,res){
            res.send("Hello Bhaiya")
        })
        app.get('/',(req,res)=>{
            res.send("Hello Bhaiya")
        })

    app.method(path, callback)  
        Methods
        * GET - Retrieve Data
        * POST - Create/Insert Data
        * PUT - Completely Update Data
        * PATCH - Partially Update Data
        * DELETE - Delete Data
        * ALL - Any HTTP request method
    
    Syntax:-
        app.get('/student/all', (req,res)=>{
            res.send("all student")
        })
        app.get('/student/create', (req,res)=>{
            res.send("new student created")
        })
        app.put('/student/update', (req,res)=>{
            res.send("student updated")
        })
        app.delete('/student/delete', callback)

        app.all:-
            This method is like the standard app.METHOD() Methods, execept it matches all HTTP verbs.
            This method is useful for mapping "global" logic for specific path prefixes or arbitrary matches.
        Example:-
            app.all('/subkuch', (req,res,next)=>{
                
            })
    
    Prefix Path with all() Methods{
        app.all('/api/*', (req,res)=>{
            res.send('All Methods')
        })
    }

    String Path{
        app.get('/contact', (req,res)=>{
            res.send('contact')
        })
    }

    String Pattern Path{
        app.get('/ab?cd', (req,res)=>{
            res.send('This route path will match acd and abcd')
        })
    }

    Regular Expression Path
       
        app.get(/a/, (req,res)=>{
            res.send('If string is contain a then run')
        }) 
    
    Chained Route callbacks
        app.route(path) – It returns an instance of a single route, which you can then use to handle HTTP verbs with optional middleware. Use app.route() to avoid duplicate route names.

        app.route('/student'){
            .get(function(req,res)=>{
                res.send("All student")
            })
            .post(function(req,res)=>{
                res.send("add new student")
            })
            .put(function(req,res)=>{
                res.send("update student")
            })
        }
       

}


# Router in Expressjs
    