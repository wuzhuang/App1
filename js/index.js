var sinaNews = angular.module('sina',['ngAnimate','ngRoute','ngTouch']);


sinaNews.factory('$x',[function(){
  var  news=[
      {
        id:1001,
        img:'image/1.jpg',
        title:'习近平:不许拒绝接收军转干部',
        desc:'称军队干部转业地方，是他们人生的重要转折，要安置好'
      },
      {
        id:1002,
        img:'image/2.jpg',
        title:'中俄舰队在钓鱼岛与日本对峙',
        desc:'日媒称，中俄两国4艘军舰入钓鱼岛海域，与日军对峙'
      },
      {
        id:1003,
        img:'image/3.jpg',
        title:'台湾女子辱骂老人自称日本人',
        desc:'辱骂老人“中国难民”；网友扒出，其父在广州出生>>'
      },
      {
        id:1004,
        img:'image/7.jpg',
        title:'詹皇防守库里犯规险冲突',
        desc:'险冲突，看口型库里对詹皇说的是：干嘛要这么犯规呢？'
      }
    ];
    return x = {
      getAllnews:function(){
        return news;
      }
    }
    return x;
}])

sinaNews.controller('indexCtrl',['$scope','$x',function($scope,$x){
  $scope.news= $x.getAllnews();
}]);


sinaNews.factory('$y',[function(){
    var hotnews = [
      {
        id:1001,
        img:'image/rm5.jpg',
        title:'总决赛库里38分勇士3-1骑士',
        desc:'总决赛第四战，骑士主场97-106不敌勇士'
      },
      {
        id:1002,
        img:'image/rm2.jpg',
        title:'青春风暴',
        desc:'欧洲杯90后领军人物'
      },
      {
        id:1003,
        img:'image/rm3.jpg',
        title:'法国女球迷爱自拍',
        desc:'新浪直击欧洲杯首日球迷百态。'
      },
      {
        id:1004,
        img:'image/rm4.jpg',
        title:'拳王阿里葬礼举行',
        desc:'葬礼现场悬挂美国国旗与奥运会会旗'
      }
    ];
    return y = {
      getAllhotnews:function(){
        return hotnews;
      }
    }
    return y;
}])

sinaNews.controller('hotCtrl',['$scope','$y',function($scope,$y){
  $scope.hotnews=$y.getAllhotnews();
}])

sinaNews.controller('findCtrl',['$scope',function($scope){

}])

sinaNews.controller('myCtrl',['$scope',function($scope){

}])

sinaNews.controller('indexContentCtrl',['$scope','$x','$routeParams',function($scope,$x,$routeParams){
  var id = $routeParams.aaa;
  console.log(id);
  var news = $x.getAllnews();
  $scope.image = news[id].img;
  $scope.title = news[id].title;
  $scope.desc = news[id].desc;
}])

sinaNews.directive('uqSinaHeader',[function(){
  return {
    replace: true,
    restrict: 'EAC',
    templateUrl:'views/sina-header.html'
  }
}])
sinaNews.directive('uqSinaFooter',[function(){
  return {
    replace: true,
    restrict: 'EAC',
    templateUrl:'views/sina-footer.html'
  }
}])

sinaNews.directive('uqType',[function(){
  return {
    replace: true,
    restrict: 'EAC',
    templateUrl:'views/sina-type.html'
  }
}])




sinaNews.config(['$routeProvider',function($routeProvider){
  $routeProvider.when('/',{
    controller:'indexCtrl',
    templateUrl:'views/sina-index.html'
  }).when('/index',{
    controller:'indexCtrl',
    templateUrl:'views/sina-index.html'
  }).when('/hot',{
    controller:'hotCtrl',
    templateUrl:'views/sina-hot.html'
  }).when('/index-content/:aaa',{
    controller:'indexContentCtrl',
    templateUrl:'views/index-content.html'
  }).when('/find',{
    controller:'findCtrl',
    templateUrl:'views/sina-find.html'
  }).when('/my',{
    controller:'myCtrl',
    templateUrl:'views/sina-my.html'
  }).otherwise({
    redirectTo:'/'
  });
}])
