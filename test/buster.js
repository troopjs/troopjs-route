var config = module.exports;

config["tmp"] = {
    "autoRun": false,
    "environment": "browser",
    "rootPath": "../",
    "libs": [
        "bower_components/requirejs/require.js",
        "test/require-config.js"
    ],
    "sources": [
        "**/*.js"
    ],
    "extensions": [require("buster-amd")],
    "buster-amd": {
        pathMapper: function (path) {
          // prefix any path starting with a slash with ../
          return path.replace(/\.js$/, "").replace(/^\//, "../");
        }
    },
    "tests": [
        "test/route-gadget.js"
    ]
};
