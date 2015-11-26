/* eslint-env node*/
'use strict';

var generator = require('yeoman-generator'),
    fs = require('fs-extra'),
    path = require('path');

module.exports = generator.Base.extend({
    clean: function () {
        fs.removeSync(this.destinationPath('gulpfile.js'));
        fs.removeSync(this.destinationPath('package.json'));
        fs.removeSync(this.destinationPath('config.js'));
        fs.removeSync(this.destinationPath('lib'));
        fs.removeSync(this.destinationPath('node_modules'));
    },

    copy: function () {
        var self = this,
            done = this.async();

        this.remote('ePages-rnd', 'themetools', 'master', function (err, remote) {
            if (err) {
                throw new Error(err);
            }

            self.fs.copy(path.resolve(remote.cachePath, 'gulpfile.js'), self.destinationPath('gulpfile.js'));
            self.fs.copy(path.resolve(remote.cachePath, 'package.json'), self.destinationPath('package.json'));
            self.fs.copy(path.resolve(remote.cachePath, 'lib'), self.destinationPath('lib'));
            self.fs.copy(path.resolve(remote.cachePath, 'config.js'), self.destinationPath('config.js'));
            done();
        }, true);
    },

    install: function () {
        this.npmInstall();
    }
});
