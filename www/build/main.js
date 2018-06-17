webpackJsonp([4],{

/***/ 134:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 134;

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/collect-player-info/collect-player-info.module": [
		399,
		1
	],
	"../pages/home/home.module": [
		400,
		3
	],
	"../pages/pay-pre-reg-fee/pay-pre-reg-fee.module": [
		401,
		2
	],
	"../pages/pre-reg-summary/pre-reg-summary.module": [
		402,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 178;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PssApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the PssApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PssApiProvider = /** @class */ (function () {
    function PssApiProvider(http, loadingCtrl) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.pssHostUrl = 'http://0.0.0.0:8000';
        this.loading_instance = null;
        this.timeoutInMs = 10000;
        this.backendVersion = 3;
        this.createPreRegPlayer = this.generate_api_call('createPreRegPlayer', this.getApiUrl() + "/:arg/prereg_player", 'post');
        this.completeTicketPurchase = this.generate_api_call('completeTicketPurchase', this.getApiUrl() + "/:arg/prereg-token/:arg", 'put');
        console.log('Hello PssApiProvider Provider');
    }
    PssApiProvider.prototype.getApiUrl = function () {
        return this.pssHostUrl + '/api';
    };
    PssApiProvider.prototype.getBackendHost = function () {
        return this.pssHostUrl;
    };
    PssApiProvider.prototype.makeHot = function (cold) {
        var subject = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        cold.subscribe(subject);
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) { return subject.subscribe(observer); });
    };
    PssApiProvider.prototype.generate_api_call = function (apiName, url, method, hideLoading) {
        var _this = this;
        return function () {
            var restOfArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                restOfArgs[_i] = arguments[_i];
            }
            var localUrl = url;
            var postObject = null;
            if (method == "post" || method == "put" || method == "delete") {
                postObject = restOfArgs.shift();
            }
            var localMatches = localUrl.match(/\:arg/g);
            if (restOfArgs != null && localMatches != null && localMatches.length != restOfArgs.length) {
                throw new Error("Oops - number of args in url and args given do not match");
            }
            if (hideLoading == null) {
                _this.loading_instance = _this.loadingCtrl.create({
                    content: 'Please wait...'
                });
                _this.loading_instance.present();
            }
            while (localUrl.indexOf(':arg') >= 0) {
                var newUrl = localUrl.replace(":arg", restOfArgs.shift());
                localUrl = newUrl;
            }
            var requestArgs = { withCredentials: true, body: postObject };
            localUrl = localUrl + '?version=' + _this.backendVersion;
            var request = _this.http.request(method, localUrl, requestArgs).pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["timeout"])(10000), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["catchError"])(_this.handleError(apiName, null)));
            var result_observable = _this.makeHot(request);
            result_observable.subscribe(function () { if (hideLoading == null) {
                _this.loading_instance.dismiss();
            } });
            return result_observable;
        };
    };
    PssApiProvider.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            if (error.constructor.name == "TimeoutError") {
                console.log('TIMEOUT IS HAPPENING...');
                //console.log(error)
                error.status = -1;
                error.error = { message: "Operation Timed Out.  Please Try Again. " };
            }
            console.error(error); // log to console instead                
            if (error.status != 404) {
                var error_message = "";
                if (error.status == 0) {
                    error_message = "Internal server error.  Please try again.";
                }
                else {
                    error_message = error.error.message;
                }
                alert(error_message);
                //this.pssToast.showToast(error_message,7000,"dangerToast");                    
            }
            if (error.status == 404) {
                console.log('found 404...');
                result = { data: null };
            }
            return Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])(result);
        };
    };
    PssApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]])
    ], PssApiProvider);
    return PssApiProvider;
}());

//# sourceMappingURL=pss-api.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/agoldma/git/github/pre-reg/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true" color="primary">\n    <ion-title>\n      <span hideWhen=\'mobile\'> Registration for 2018 Intergalactic</span>\n      <span showWhen=\'mobile\'> Registration</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class=\'card-background-page\'>\n  <div margin-top>\n    <img showWhen=\'mobile\'  style=\'opacity:.5;width:100%\' [attr.height]="platform.height()/4+\'px\'" src="/assets/imgs/pinball_med.jpg"/>\n    <div showWhen=\'mobile\' class="card-title" text-center><h1 no-margin no-padding>Instructions</h1></div>\n    <div hideWhen=\'mobile\' text-center><h1 no-margin no-padding>Instructions</h1></div>\n\n  </div>\n  <div margin [attr.text-center]="platform.is(\'mobile\') ? null : \'\'">\n    \n    This site will allow you to pay the $20 fee for the 2018 Intergalactic charity pinball tournament (<a href="http://www.replayfx.org">Tournament details here</a>).  You will be asked to enter the following things :\n\n    <ion-list margin-top margin-bottom [style.margin-left]="(platform.width()/2)-150+\'px\'">\n      <ion-item no-lines no-padding> <ion-icon name="arrow-round-forward" item-start></ion-icon><!--<ion-icon name="radio-button-off"></ion-icon>-->Your name and email address.</ion-item>\n      <ion-item no-lines no-padding> <ion-icon name="arrow-round-forward" item-start></ion-icon><!--<ion-icon name="radio-button-off"></ion-icon>-->Your credit card info </ion-item>\n    </ion-list>\n\n    <p>To start this process, click the button at the bottom of the page.  Once you have entered this information you will be given your player number and pin.  This information will also be emailed to you.  You will need this information in order to play in the tournament.</p>\n    \n    <p>You will also need this information to login to the Papa Scoring Software which allows you to place yourself on queues and check results.</p>\n  </div>\n  <div text-center padding-top>\n    <button ion-button [navPush]="\'CollectPlayerInfoPage\'">Enter player info</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/agoldma/git/github/pre-reg/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(252);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_pss_api_pss_api__ = __webpack_require__(240);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/collect-player-info/collect-player-info.module#CollectPlayerInfoPageModule', name: 'CollectPlayerInfoPage', segment: 'collect-player-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pay-pre-reg-fee/pay-pre-reg-fee.module#PayPreRegFeePageModule', name: 'PayPreRegFeePage', segment: 'pay-pre-reg-fee', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pre-reg-summary/pre-reg-summary.module#PreRegSummaryPageModule', name: 'PreRegSummaryPage', segment: 'pre-reg-summary', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_pss_api_pss_api__["a" /* PssApiProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(241);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/agoldma/git/github/pre-reg/src/app/app.html"*/'<ion-nav [root]="\'HomePage\'">\n</ion-nav>\n'/*ion-inline-end:"/Users/agoldma/git/github/pre-reg/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[242]);
//# sourceMappingURL=main.js.map