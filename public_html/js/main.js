requirejs.config({
  paths: {
    "baseurl": "js",
    "jquery": "jquery",
    "angularjs": "angular",
    //"jquerymobile":"jquery.mobile-1.4.2.min",
    //"resource":"resource",
    "directives":"directives",
    "controllers":"controllers",
    "services":"services",
    //"router":"router",
    //"angularroute": "angular-route",
    //"mobile-nav": "mobile-nav"
  },
  shim: {
  //"jquerymobile":{deps:["jquery"]},
  //"resource":{deps:["angularjs", "jquery"]},
  //"angularroute":{deps:["angularjs"]},
  "angularjs":{deps:["jquery"]}, //"jquerymobile"
  "controllers":{deps:["angularjs"]},
  "services":{deps:["angularjs"]},
  "directives":{deps:["angularjs"]},
  //"router":{deps:["angularjs"]},
  //"mobile-nav":{deps:["angularjs"]}
  }
});

requirejs(["js/mainApp.js"]);         