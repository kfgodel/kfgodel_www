requirejs.config({
    baseUrl: 'app/scripts',

    paths: {
        bower: '../../bower_components',
        vendor: '../../vendor',
        jquery: '../../bower_components/jquery/dist/jquery.js',
        bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap.min.js',
        docs: 'vendor/docs.min.js'
    },

    shim: {
        'underscore': {
            exports: '_'
        },
        'bootstrap': {
            deps: ['jquery']
        }
    }
});

require([], function(jquery) {
    console.log("Cargado");
});