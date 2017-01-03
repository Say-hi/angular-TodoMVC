/**
 * Created by vcc on 2017/01/03.
 */
(function (angular) {
	var app=angular.module('todoApp.directive',[]);
	app.directive('autoFocus',function () {
		return {
			link:function (scope, ele, attr) {
				ele.on('dblclick',function () {
					angular.element(this).find('input')[1].focus();
				})
			}
		}
	})
})(angular);
