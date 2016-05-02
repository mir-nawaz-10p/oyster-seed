"use strict";
var routes = require("./routes/v1/index")();

function appRoutes(app){
    app.use("/api/v1/users", routes.users);
    app.use("/api/v1/auth", routes.auth);
}

module.exports = appRoutes;