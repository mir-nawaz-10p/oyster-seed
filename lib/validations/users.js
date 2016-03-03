"strict mode";

module.exports = [{
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
                    if (value.length > 10) {
                        return true;
                    }
                    return false;
                }
                return false;
            }
        }
    }
}];
