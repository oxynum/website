"use strict";angular.module("oxynum2016App",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","duScroll"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/team",{templateUrl:"views/main.html",controller:"AboutCtrl",controllerAs:"main"}).otherwise({redirectTo:"/"})}]),angular.module("oxynum2016App").controller("MainCtrl",["$scope","$document",function(a,b){a.pageClass="main-view",a.team=!0,a.welcome=!0,sessionStorage.user||(a.welcome=!1),sessionStorage.setItem("user","on"),a.scrollTo=function(a){var c=document.getElementById(a);b.scrollToElementAnimated(angular.element(c),0,1e3,null)}}]),angular.module("oxynum2016App").controller("AboutCtrl",["$scope","$document",function(a,b){a.pageClass="main-view",a.welcome=!0,a.team=!0,sessionStorage.user||(a.welcome=!1),sessionStorage.setItem("user","on"),a.scrollTo=function(a){var c=document.getElementById(a);b.scrollToElementAnimated(angular.element(c),0,1e3,null)}}]),angular.module("oxynum2016App").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div class="full-screen wrapper" role="main"> </div> <div class="full-screen wrapper" role="main"> <div class="full-screen team-member thomas"> <div class="centered-content"> <div class="role">Open source contributor</div> <div class="name">Thomas</div> <div class="quote"> <p> </p> </div> </div> <div class="go-down"> <span class="next-member">Madeleine</span> <div class="arrow-go-to bounce" ng-click="scrollTo(\'maddy\');" title="Qui est Madeleine ?"></div> </div> </div> <div class="full-screen team-member maddy"> <div class="centered-content"> <div class="role">Project manager</div> <div class="name">Madeleine</div> <div class="quote"> <p> <span></span> </p> </div> </div> <div class="go-down"> <span class="next-member">Pascal</span> <div class="arrow-go-to bounce" ng-click="scrollTo(\'pascal\');" title="Qui est Pascal ?"></div> </div> </div> <div class="full-screen team-member pascal" ng-if="team"> <div class="centered-content"> <div class="role">Project Manager</div> <div class="name">Pascal</div> <div class="quote"> <p> Ecommerce Specialist </p> </div> </div> <div class="go-down"> <span class="next-member">Hugo</span> <div class="arrow-go-to bounce" ng-click="scrollTo(\'hugo\');" title="Qui est Hugo ?"></div> </div> </div> <div class="full-screen team-member hugo" id="hugo"> <div class="centered-content"> <div class="role">Dév Fullstack - Module Pattern Addict</div> <div class="name">Hugo</div> <div class="quote"> <p> <span>Pour que les développements d\'aujourd\'hui</span> <span>s\'adaptent aux besoins de demain</span> </p> </div> </div> <div class="go-down"> <span class="next-member">Maxime</span> <div class="arrow-go-to bounce" ng-click="scrollTo(\'maxime\');" title="Qui est maxime ?"></div> </div> </div> <div class="full-screen team-member maxime" id="maxime"> <div class="centered-content"> <div class="role">Dév Back-End - NodeJS - .NET</div> <div class="name">Maxime</div> <div class="quote"> <p> <span>C\'est le feu !</span> </p> </div> </div> <div class="go-down"> <span class="next-member">Pierrick</span> <div class="arrow-go-to bounce" ng-click="scrollTo(\'pierrick\');" title="Qui est pierrick ?"></div> </div> </div> <div class="full-screen team-member pierrick" id="pierrick"> <div class="centered-content"> <div class="role">Développeur Web & Mobile</div> <div class="name">Pierrick</div> <div class="quote"> <p> <span>Une cuillerée d\'HTML5, 1 pincée de JS.</span> <span>Mélanger le tout avec Cordova puis servir chaud sur les stores.</span> </p> </div> </div> <div class="go-down"> <span class="next-member">Sandrine</span> <div class="arrow-go-to bounce" ng-click="scrollTo(\'sandrine\');" title="Qui est Sandrine ?"></div> </div> </div> <div class="full-screen team-member sandrine" id="sandrine"> <div class="centered-content"> <div class="role">Assistante marketing</div> <div class="name">Sandrine</div> <div class="quote"> <p> <span>Écouter, c\'est une capacité. Analyser, c\'est un métier.</span> </p> </div> </div> <div class="go-down"> <span class="next-member">Rudy</span> <div class="arrow-go-to bounce" ng-click="scrollTo(\'rudy\');" title="Qui est Rudy ?"></div> </div> </div> <div class="full-screen team-member rudy" id="rudy"> <div class="centered-content"> <div class="role">Développeur Front-End</div> <div class="name">Rudy</div> <div class="quote"> <p> <span>Nous n\'offrons pas de service</span> <span>Nous garantissons une bonne qualité de service</span> </p> </div> </div> </div> </div>')}]);