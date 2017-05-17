var app=angular.module("myapp",[])
app.controller("mycontroller",["$scope",function($scope)
{
	
	$scope.office=[{name1:'ganji', name2:'suresh' ,num:100,address:hyd},
	{name1:'divya1', name2:'divya1', num:101,address:hyd},
	{name1:'chotu1', name2:'chotu1', num:108,address:hyd},
	{name1:'asha1', name2:'asha1', num:99,address:hyd},
	{name1:'usha1', name2:'usha1', num:400,address:hyd}]

}]);