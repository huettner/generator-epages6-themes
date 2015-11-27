var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    brand: function () {
        var done = this.async;
        this.composeWith('epages6theme:brand').on('end', done);
    },
    setVM: function () {
        var done = this.async;
        this.composeWith('epages6theme:vm').on('end', done);
    },
    setThemes: function () {
        var done = this.async;
        this.composeWith('epages6theme:themefolder').on('end', done);
    },
    setThemeName: function () {
        var done = this.async;
        this.composeWith('epages6theme:themename').on('end', done);
    },
    installThemetools: function () {
        var done = this.async;
        this.composeWith('epages6theme:themetools').on('end', done);
    },
});
