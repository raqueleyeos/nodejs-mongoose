process.env.NODE_PATH = __dirname;
require('module').Module._initPaths();

const app = require('express')();
const apiRead = require('src/ApiRead');
const apiCreate = require('src/ApiCreate');
const settings = require('src/Config/Settings');

//Router configuration.
app.use('/api/' + settings.connection.version, apiRead);
app.use('/api/' + settings.connection.version, apiCreate);
app.listen(settings.connection.port, function () {
    console.log(`[Booking Persistable Service] running in port ${settings.connection.port}`);
});