/* eslint-env node*/
'use strict';

var generator = require('yeoman-generator'),
    chalk = require('chalk'),
    config = require('../config'),
    themeNamePrompt = require('./prompts');

module.exports = generator.Base.extend({
    prompting: function () {
        var self = this,
            done = this.async();

        if (config.data['vm-usr'] === undefined ||
            config.data['vm-domain'] === undefined ||
            config.data['vm-usr'] === undefined) {
            this.log(chalk.bold.red('Configuration Information for your VM are missing, run'));
            this.log(chalk.inverse('yo epages6theme:vm'));
            return done();
        }
        themeNamePrompt(config.data, function (names) {
            self.prompt(names, function (input) {
                config.update(input).write();
                done();
            });
        });
    }

});
