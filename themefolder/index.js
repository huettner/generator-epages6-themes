/* eslint-env node*/
'use strict';

var generator = require('yeoman-generator'),
    config = require('../config'),
    themesPrompt = require('./prompts');

module.exports = generator.Base.extend({
    prompting: function () {
        var done = this.async();

        this.prompt([
            themesPrompt(config.data['themes-local'])
        ], function (input) {
            config.update(input).write();
            done();
        });
    }

});
