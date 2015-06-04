'use strict';
var http = require('http');
var serveStatic = require('serve-static');
var serve = serveStatic('public');
var minimist = require('minimist');

var argv = minimist(process.argv);

var server = http.createServer(function(req, res) {
    serve(req, res, function() {
        res.end();
    });
});

var port = argv.port || process.env.PORT || process.env.port || process.env.OPENSHIFT_NODEJS_PORT || 8080;

server.listen(port, argv.ip || process.env.OPENSHIFT_NODEJS_IP, function() {
    console.log('Server is now listening at port: ' + port);
});