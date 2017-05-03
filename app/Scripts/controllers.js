var mycontroller=angular.module('mycontroller',[]);
mycontroller.controller('usercard1',['$http',function($http){
    var _this=this;
    _this.usercard={
        number:{},
       url:'./Data/testData.js'
    };
  $http({
      method:'GET',
      url: _this.usercard.url
  }).then(function successCallback(response){
      _this.usercard.number=response.data;
  },function errorCallback(response){
      _this.usercard.number;
  })
}])