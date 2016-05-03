"use strict";

module.exports = {
    save: [{
        "id": {
            required: true
        }
    }, {
        "name": {
            required: true
        }
    }, {
        "password": {
            custom: {
                error_message: "Custom error message for field %s",
                method: function(value) {
                    if (value) {
                        return value.length > 5;
                    }
                    return false;
                }
            }
        }
    }, {
        "username": {
            custom: {
                error_message: "Custom error message for field %s",
                method: function(value) {
                    if (value) {
                        return value.length > 5;
                    }
                    return false;
                }
            }
        }
    }],
    login: [{
        "password": {
            custom: {
                error_message: "Custom error message for field %s",
                method: function(value) {
                    if (value) {
                        return value.length > 5;
                    }
                    return false;
                }
            }
        }
    }, {
        "username": {
            custom: {
                error_message: "Custom error message for field %s",
                method: function(value) {
                    if (value) {
                        return value.length > 3;
                    }
                    return false;
                }
            }
        }
    }]
};
