var db = global.Packages.db.mongo();
var model = db.extend({
   tableName: "users"
});

model.prototype.getDBObject = function getDBObject(object) {
   return {
       _id: object.id,
       name: object.name,
       username: object.username,
       password: object.password,
       admin: object.admin,
       location: object.location,
       created_at: object.created_at,
       updated_at: object.updated_at,
       date_of_birth: object.date_of_birth
   };
};

model.prototype.getObjectFromDBObject = function getObjectFromDBObject(mongoObject) {
   mongoObject.id = mongoObject._id;
   delete mongoObject._id;
   return mongoObject;
};

module.exports = model;
