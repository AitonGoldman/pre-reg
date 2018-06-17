webpackJsonp([0],{

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreRegSummaryPageModule", function() { return PreRegSummaryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pre_reg_summary__ = __webpack_require__(406);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PreRegSummaryPageModule = /** @class */ (function () {
    function PreRegSummaryPageModule() {
    }
    PreRegSummaryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pre_reg_summary__["a" /* PreRegSummaryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pre_reg_summary__["a" /* PreRegSummaryPage */]),
            ],
        })
    ], PreRegSummaryPageModule);
    return PreRegSummaryPageModule;
}());

//# sourceMappingURL=pre-reg-summary.module.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PlayerModelBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerModel; });
var PlayerModelBuilder = /** @class */ (function () {
    function PlayerModelBuilder() {
        this.first_name = null;
        this.last_name = null;
        this.extra_title = null;
        this.email_address = null;
        this.player_id = null;
        this.event_player_id = null;
        this.pin_number = null;
    }
    PlayerModelBuilder.prototype.setFirstName = function (value) {
        this.first_name = value;
        return this;
    };
    PlayerModelBuilder.prototype.setLastName = function (value) {
        this.last_name = value;
        return this;
    };
    PlayerModelBuilder.prototype.setExtraTitle = function (value) {
        this.extra_title = value;
        return this;
    };
    PlayerModelBuilder.prototype.setEmailAddress = function (value) {
        this.email_address = value;
        return this;
    };
    PlayerModelBuilder.prototype.buildFromJson = function (value) {
        console.log('DEBUG - buildFromJson');
        console.log(value);
        this.first_name = value['first_name'];
        this.last_name = value['last_name'];
        this.extra_title = value['extra_title'];
        this.player_id = value['player_id'];
        this.event_player_id = value['event_player_id'];
        this.pin_number = value['pin'];
        this.email_address = value['events'][0]['email_address'];
        return this;
    };
    PlayerModelBuilder.prototype.build = function () {
        return new PlayerModel(this);
    };
    return PlayerModelBuilder;
}());

var PlayerModel = /** @class */ (function () {
    function PlayerModel(playerModelBuilder) {
        this.first_name = null;
        this.last_name = null;
        this.extra_title = null;
        this.email_address = null;
        this.player_id = null;
        this.event_player_id = null;
        this.pin_number = null;
        this.first_name = playerModelBuilder.first_name;
        this.extra_title = playerModelBuilder.extra_title;
        this.last_name = playerModelBuilder.last_name;
        this.email_address = playerModelBuilder.email_address;
        this.player_id = playerModelBuilder.player_id;
        this.event_player_id = playerModelBuilder.event_player_id;
        this.pin_number = playerModelBuilder.pin_number;
    }
    return PlayerModel;
}());

//# sourceMappingURL=PlayerModel.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreRegSummaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_PlayerModel__ = __webpack_require__(403);
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
 * Generated class for the PreRegSummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PreRegSummaryPage = /** @class */ (function () {
    function PreRegSummaryPage(navCtrl, navParams, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.player = new __WEBPACK_IMPORTED_MODULE_2__models_PlayerModel__["a" /* PlayerModel */](new __WEBPACK_IMPORTED_MODULE_2__models_PlayerModel__["b" /* PlayerModelBuilder */]());
    }
    PreRegSummaryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreRegSummaryPage');
    };
    PreRegSummaryPage.prototype.ionViewWillEnter = function () {
        if (this.navParams.get('kosher') == undefined) {
            //this.navCtrl.push('HomePage');
            //return;
        }
        this.player = this.navParams.get('player');
        console.log(this.player);
    };
    PreRegSummaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pre-reg-summary',template:/*ion-inline-start:"/Users/agoldma/git/github/pre-reg/src/pages/pre-reg-summary/pre-reg-summary.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <span hideWhen=\'mobile\'> Registration for 2018 Intergalactic</span>\n      <span showWhen=\'mobile\'> Registration</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding class=\'card-background-page\'> \n  <div margin-top>\n    <img showWhen=\'mobile\' style=\'opacity:.5;width:100%\' [attr.height]="platform.height()/4+\'px\'" src="/assets/imgs/players.jpg"/>\n    <div showWhen=\'mobile\' class="card-title" text-center><h1 no-margin no-padding>You Are Registered</h1></div>\n    <div hideWhen=\'mobile\' text-center><h1 no-margin no-padding>You Are Registered</h1></div>\n  </div>\n  <div margin-top padding-left padding-right [attr.text-center]="platform.is(\'mobile\') ? null : \'\'">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          Below is your player id and pin.  You will need your player id to play in the intergalactic tournament.  You will need your player id and pin to add yourself to queues through the <a href="https://results.papa.org"> Papa Scoring Software </a>.  You will not need to register or checkin for the Intergalactic tournament once it starts - just give your player number to a scorekeeper, or add yourself to a queue.    \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          You player id, pin, and a link to the Papa Scoring Software will be emailed to the email address {{player.email_address}}.  INFO about charities.  \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col text-right>\n          Player Id : \n        </ion-col>\n        <ion-col text-left>\n          {{player.event_player_id}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col text-right>\n          Pin : \n        </ion-col>\n        <ion-col text-left>\n          {{player.pin_number}}\n        </ion-col>\n      </ion-row>\n      \n    </ion-grid>     \n  </div>\n  <div margin-top text-center>\n    <button ion-button [navPush]="\'HomePage\'">Register another player</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/agoldma/git/github/pre-reg/src/pages/pre-reg-summary/pre-reg-summary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], PreRegSummaryPage);
    return PreRegSummaryPage;
}());

//# sourceMappingURL=pre-reg-summary.js.map

/***/ })

});
//# sourceMappingURL=0.js.map