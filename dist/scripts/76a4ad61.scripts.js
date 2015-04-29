"use strict";!function(){function a(a,b,c){a.goTo=function(a,c){null!==c&&void 0!==c?b.go(a,c):b.go(a,{}),b.go(a,{})},a.site=c.readJsonFile("data/site.json").then(function(b){console.log(b),a.site=b})}function b(a,b,c){a.state("root",{"abstract":!0,controller:"ControllerTheme as theme",resolve:{Author:function(a){return a.readJsonFile("data/author.json")},Themes:function(a){return a.readJsonFile("data/themes.json")},Header:function(a){return a.readJsonFile("data/header.json")},Menu:function(a){return a.readJsonFile("data/menu.json")}},views:{"":{templateUrl:"templates/root.html",controller:"ControllerTheme as theme"},"header@root":{templateUrl:"templates/header.html",controller:"ControllerHeader as header"},"footer@root":{templateUrl:"templates/footer.html",controller:"ControllerFooter as footer"},"menu@root":{templateUrl:"templates/menu.html",controller:"ControllerMenu as menu"}}}).state("home",{parent:"root",url:"/home","abstract":!1,views:{main:{templateUrl:"templates/home.html",controller:"ControllerHome as home"}}}),b.otherwise("/home"),c.html5Mode(!1)}angular.module("drkv2App",["ngCookies","ngResource","ngSanitize","ngRoute","ui.router","720kb.fx"]),a.$inject=["$rootScope","$state","ServiceHelpers"],angular.module("drkv2App").run(a),b.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],angular.module("drkv2App").config(b)}(),angular.module("config",[]).constant("ENV",{name:"production",apiEndpoint:"http://api.yoursite.com/"}),function(){function a(a,b){return{readJsonFile:function(c){var d={content:null,path:c},e=a.defer();return b.get(d.path).success(function(a){console.log("OBJETO RESPUESTA READJSONFILE",a),d.content=a,e.resolve(d.content)}),e.promise}}}var b=["$q","$http"];a.$inject=b,angular.module("drkv2App").factory("ServiceHelpers",a)}(),function(){function a(a){var b=this;b.activeTheme={},angular.forEach(a,function(a){a.active===!0&&(b.activeTheme=a)})}a.$inject=["Themes"],angular.module("drkv2App").controller("ControllerTheme",a)}(),function(){function a(a){var b=this;console.log("Estoy en el header",a),b.preferences=a}a.$inject=["Header"],angular.module("drkv2App").controller("ControllerHeader",a)}(),function(){function a(){console.log("Estoy en el footer")}a.$inject=[],angular.module("drkv2App").controller("ControllerFooter",a)}(),function(){function a(a){var b=this;console.log("Estoy en el menu",a),b.items=a}a.$inject=["Menu"],angular.module("drkv2App").controller("ControllerMenu",a)}(),function(){function a(a,b){var c=this;c.animations={logo:{activeLayer:0,layerLimit:3,init:function(){b(function(){c.animations.logo.activeLayer++},500),b(function(){c.animations.logo.activeLayer++},750),b(function(){c.animations.logo.activeLayer++},1250)}},rotatingWords:{count:0,init:function(){c.rotatingWords.list.length-1===c.animations.rotatingWords.count&&(c.animations.rotatingWords.count=0),c.rotatingWords.activeWord=c.rotatingWords.list[c.animations.rotatingWords.count],c.animations.rotatingWords.count++}}},c.rotatingWords={list:["a dev","...","this(8)","dy","a youtuber","a gamer","#fifalover","a man","creativity","creactivity","a professional","happiness","a robot","a creator","a crazy guy","ingenio"],activeWord:""},c.animations.logo.init(),a(c.animations.rotatingWords.init,1250)}a.$inject=["$interval","$timeout"],angular.module("drkv2App").controller("ControllerHome",a)}(),function(){function a(){return{restrict:"ECA",transclude:!0,template:'<div class="angular-center-container">						<div class="angular-centered" ng-transclude>						</div>						</div>'}}a.$inject=[],angular.module("drkv2App").directive("centerElement",a)}(),function(){function a(){return{replace:!0,restrict:"A",templateUrl:"templates/socialLinks.html"}}a.$inject=[],angular.module("drkv2App").directive("socialLinks",a)}();