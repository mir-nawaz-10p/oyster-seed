
module.exports = function(grunt) {

    // Load all grunt tasks automatically
    require("load-grunt-tasks")(grunt);

    // Time how long tasks take
    require("time-grunt")(grunt);

    grunt.config.init({
        jshint: {
            options: {
                jshintrc: ".jshintrc",
                reporter: require("jshint-stylish")
            },
            all: {
                src: [
                    "routes.js",
                    "global_async.js",
                    "Gruntfile.js",
                    "lib/**/*.js",
                    "crust/**/*.js",
                    "crust/*.js",
                    "tests/**/*.js"
                ],

                ignores: [
                    "crust/public"
                ]
            }
        },
        
        mochaTest: {
            options: {
                globals: ["should"],
                timeout: 10000,
                ui: "bdd",
                reporter: "dot"
            },
            all: {
                src: ["tests/**/*.js"]
            }
        },
        
        watch: {
            files: [
                "Gruntfile.js",
                "lib/**/*.js"
                
                
            ],
            default: {
                files: "<%= watch.files %>",
                tasks: ["newer:jshint", "mochaTest"]
            }
            
        }
    });

    grunt.registerTask("test", ["jshint",  "mochaTest"]);
    grunt.registerTask("default", ["watch:default"]);
};

