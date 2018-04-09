const express = require('express');
const path = require('path');
const ngApimock = require('ng-apimock')();
const app = express();
const argv = require('minimist')(process.argv.slice(1));

console.log(argv.port);
/**
* Register all available mocks and generate interface
*/
ngApimock.run({
   "src": "e2e/configuration/mocks/api",
   "outputDir": ".tmp/ngApimock",
   "done": function() {}
});

app.set('port', (argv.port || process.env.PORT || 3000));
// process the api calls through ng-apimock
app.use(require('ng-apimock/lib/utils').ngApimockRequest);
// serve the mocking interface for local development
app.use('/mocking', express.static('.tmp/ngApimock'));

app.listen(app.get('port'), function() {
 console.log('app running on port', app.get('port'));
});
