(function (window) {
	'use strict';
	//引用angular代码
//创建模块
//	创建控制器
//	验证代码正确性
	var app = angular.module('todoApp',["todoApp.directive","todoApp.service"]);
	//防止压缩失效
	app.controller('todoCtrl', ['$scope','$filter','storageService',function ($scope,$filter,storageService) {
		//test
		//$scope.name='todomvc';
		//查看、初始化数据
		//todo显示的列表
		// $scope.todoList = [
		// 	{id:getID(),text:'css',status:true},
		// 	{id:getID(),text:'js',status:false},
		// 	{id:getID(),text:'jquery',status:false}
		// ];
		$scope.todoList=storageService.getTodoList();
		//获取随机数用于给信息创建id
		// function getID(){
		// 	return Math.random();
		// }
		//增加todo
		$scope.addText='';
		$scope.addTodo=function () {
			if($scope.addText.length>0){
				// $scope.todoList.push({id:getID(),text:$scope.addText,status:false});
				storageService.addTodo($scope.addText)
				$scope.addText='';
			}
		};
		//删除todo
		$scope.delTodo=function (item) {
			storageService.delTodo(item);
			// var index = $scope.todoList.indexOf(item);
			// $scope.todoList.splice(index,1);
		};
		//修改todo
		$scope.editingTodo={};
		$scope.editTodo=function (item) {
			$scope.editingTodo=item;
		};
		//失去焦点保存修改
		$scope.blurSave=function () {
			$scope.todoList=storageService.editTodo($scope.todoList);
			$scope.editingTodo={};
		};
		//左侧未完成数量统计
		// 需要在$watch服务中监视
		// 注意在服务中监视对象类型的目标需要添加参数true
		$scope.$watch('todoList',function (newVal,oldVal) {
			$scope.leftNumber=$filter('filter')(newVal,{status:false}).length;
			$scope.selectAllStatus=!$scope.leftNumber;
			$scope.showFooter=$scope.todoList.length>0?true:false;
		},true);
		// 全选功能
		$scope.selectAll=function () {
			storageService.selectAll($scope.selectAllStatus);
			// $scope.todoList.forEach(function (v) {
			// 	v.status=$scope.selectAllStatus;
			// })
		};
		// 删除已完成的项目
		$scope.delFinishTodo=function () {
			$scope.todoList=storageService.delFinishTodo();
			// $scope.todoList=$filter('filter')($scope.todoList,{status:false});
		};
		// 状态保存
		$scope.saveChange=function () {
			storageService.saveTodo($scope.todoList);
		}
		// 状态切换
		$scope.statusFilter={};
		$scope.changeStatus=function (statu) {
			switch (statu){
				case 'active':
					$scope.statusFilter={status:false};
				break;
				case 'completed':
					$scope.statusFilter={status:true};
				break;
				default:
					$scope.statusFilter={};
				break;
			}
		}
	}]);
})(window);
