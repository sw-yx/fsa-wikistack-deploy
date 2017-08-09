var models = require('./models');
var Page = models.Page;
var User = models.User;
var app = require('./app');

User.sync()
    .then(function () {
        return Page.sync();
    })
    .then(function () {
        const portvar = process.env.PORT || 3001
        app.listen(portvar, function () {
            console.log('Server is listening on port ' + portvar);
        });
    });

