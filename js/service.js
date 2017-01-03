/**
 * Created by vcc on 2017/01/03.
 */
(function (angular) {
	var app = angular.module('todoApp.service',[]);
	app.service('storageService',['$filter',function ($filter) {
		// 获取当前在localStorage中的数据
		var todoList = JSON.parse(localStorage.getItem('todoList')||"[]")
		// 获取随机数
		function getID() {
			return Math.random();
		}
// 获取数据
		this.getTodoList=function () {
			return todoList;
		};
		// 添加数据
		this.addTodo=function (text) {
			todoList.push({id:getID(),text:text,status:false})
			this.saveTodo();
		};
		// 删除数据
		this.delTodo=function (item) {
			todoList.splice(todoList.indexOf(item),1);
			this.saveTodo();
			return todoList;
		};
		// 修改数据
		this.editTodo=function (item) {
			localStorage.setItem('todoList',JSON.stringify(item));
			todoList=item;
			return item;
		};
		// 清除数据
		this.delFinishTodo=function () {
			todoList=$filter('filter')(todoList,{status:false});
			this.saveTodo();
			return todoList;
		};
		// 全选功能
		this.selectAll=function (status) {
			todoList.forEach(function (v) {
				v.status=status;
			});
			this.saveTodo();
			return todoList;
		};
		//保存数据
		this.saveTodo=function (item) {
			todoList=item||todoList;
			localStorage.setItem('todoList',JSON.stringify(todoList));
		}
	}])
})(angular);
