"strict mode";

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
                        if (value.length > 5) {
                            return true;
                        }
                        return false;
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
                        if (value.length > 5) {
                            return true;
                        }
                        return false;
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
                        if (value.length > 5) {
                            return true;
                        }
                        return false;
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
                        if (value.length > 5) {
                            return true;
                        }
                        return false;
                    }
                    return false;
                }
            }
        }
    }]
};
