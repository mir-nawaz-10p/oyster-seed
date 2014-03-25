// Please remove this code its only for example purpose

/*var AuthFacade = require("../lib/facade/auth");

function registerAnonymous (req, res, next){
    
    var authFacade = new AuthFacade(req);
    
    authFacade.registerAnonymous(req.getInputObject()).then(function(output){
        res.send(200, global.shape(output));
    })
    .error(function(e){
        next(e);
    });
}

module.exports.registerAnonymous = registerAnonymous;*/