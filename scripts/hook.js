var http = require("http");
var exec = require('child_process').exec;
var createHandler = require('github-webhook-handler');
var handler = createHandler({ path: '/', secret: 'bvrunner' });
 
http.createServer(function(req, res) {
        handler(req, res, function (err) {
                res.statusCode = 404
                res.end('no such location')
        });
}).listen(8050);
 
handler.on('push', function (event) {
        var comps = event.payload.ref.split('/');
        if(comps[2] != 'production') {
              console.log('Received a push on %s and no build has is triggered', comps[2]);
              return;
        }
        console.log('Received a push on production, build started...');
        exec('./scripts/deploy', function(error, stdout, stderr) {
                console.log(stdout);
                if(error != null) {
                        console.log('Error during the execution of redeploy: ' + stderr);
                }
        });
});