// this file contains all the routes 

var accessTokenMiddleware = require("../lib/middleware/access_token"),
testController = require("./controllers/index");

function routes(app){

    app.get("/", function(req, res) {
        res.send("Oyster-Seed - CRUST");
    });

    // ******************** Test Controller ********************* 
    app.post("/test", testController.testFunction);
    app.get("/user", accessTokenMiddleware, testController.counts);
    
}

module.exports = routes;