var path = require('path');
var rootPath = path.normalize(__dirname + '/../');

module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://localhost/passport-basics',
        port: process.env.PORT || 8080
    }
};