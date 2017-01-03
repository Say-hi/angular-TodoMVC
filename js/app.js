(function (window) {
	'use strict';
	//引用angular代码
//创建模块
//	创建控制器
//	验证代码正确性
	var app = angular.module('todoApp',[]);
	//防止压缩失效
	app.controller('todoCtrl', ['$scope',function ($scope) {
		//test
		//$scope.name='todomvc';
		//查看、初始化数据
		//todo显示的列表
		$scope.todoList = [
			{id:getID(),text:'css',status:true},
			{id:getID(),text:'js',status:false},
			{id:getID(),text:'jquery',status:false},
		];
		//获取随机数用于给信息创建id
		function getID(){
			return Math.random();
		}
	}])
})(window);
