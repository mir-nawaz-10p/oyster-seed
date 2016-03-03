var routes = require("./routes/v1/index")();
function appRoutes(app){

    app.use("/api/v1/users", routes.users);

}

module.exports = appRoutes;