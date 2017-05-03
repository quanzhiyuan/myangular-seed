(function(angular) {
    var mycomponent = angular.module('mycomponent', [])
    mycomponent.component('usercard', {
        templateUrl: 'Scripts/usercard.html',
        transclude: true,
        controller: function ($http) {
            var _this = this;

            _this.message = 'i am here'
            _this.count = 3;
            _this.addCount = function () {
                _this.count++;
            }
            _this.card = {
                name: 'test',
                url: './Data/testData.json'
            }
            _this.$onInit = function () {
                console.log('I am onInit')
                $http.get(_this.card.url).then(function successCallback(response) {
                    _this.card.name = response.data;
                }, function errorCallback(response) {
                });
            }
            _this.updateName = function () {
                _this.card.name.name = 'test';
            }
        },
        bindings: {
            // card:'<'
        }
    })
        .component('personInfo', {
            templateUrl: 'Scripts/components/personInfo.html',
            transclude: true,
            controller:function(){

            }
        })
}(window.angular))