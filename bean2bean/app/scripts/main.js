requirejs.config({
    baseUrl: 'app/scripts',

    paths: {
        bower: '../../bower_components',
        vendor: '../../vendor',
        jquery: '../../bower_components/jquery/dist/jquery',
        bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap',
        docs: '../../vendor/docs.min'
    },

    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: "$.fn.popover"
        },
        'underscore': {
            exports: '_'
        }
    }
});

require(['jquery','bootstrap','docs'], function(jquery, bootstrap, docs) {
    console.log("Cargado");
    return {};
});