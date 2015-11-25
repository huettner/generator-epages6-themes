/*eslint-env node*/
'use strict';

var path = require('path'),
    SimpleSSH = require('simple-ssh');

module.exports = function(config, done) {

    var ssh = new SimpleSSH({
            host: config['vm-domain'],
            user: config['vm-usr'],
            pass: config['vm-pwd']
        }),

        input = {
            type: 'list',
            name: 'theme',
            message: 'Theme'
        };
    ssh.exec('ls -d ' + config.webroot + '/Store/Shops/DemoShop/Styles/*/', {
        out: function(response) {
            var themes = [],
                themePaths = response.split('\n');
            themePaths.pop();

            themePaths.forEach(function (themePath) {
                var themeName = path.basename(themePath);
                themes.push(themeName);
            });
            input.choices = themes;

            if (config.theme !== undefined) {
                input.default = config.theme;
            }

            done(input);
        }
    }).start();
};
