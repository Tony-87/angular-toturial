/**
 * Created by wxb on 2016/8/31.
 */
var appModule = angular.module('app', []);
appModule.directive('hello', function() {
    return {
        restrict: 'E',
        template: '<div>Hi there</div>',
        replace: true
    };
});