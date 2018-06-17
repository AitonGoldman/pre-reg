webpackJsonp([1],{

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectPlayerInfoPageModule", function() { return CollectPlayerInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collect_player_info__ = __webpack_require__(404);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CollectPlayerInfoPageModule = /** @class */ (function () {
    function CollectPlayerInfoPageModule() {
    }
    CollectPlayerInfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__collect_player_info__["a" /* CollectPlayerInfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__collect_player_info__["a" /* CollectPlayerInfoPage */]),
            ],
        })
    ], CollectPlayerInfoPageModule);
    return CollectPlayerInfoPageModule;
}());

//# sourceMappingURL=collect-player-info.module.js.map

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

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectPlayerInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pss_api_pss_api__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_PlayerModel__ = __webpack_require__(403);
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
 * Generated class for the CollectPlayerInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CollectPlayerInfoPage = /** @class */ (function () {
    function CollectPlayerInfoPage(navCtrl, navParams, pssApi, alertCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pssApi = pssApi;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.player = new __WEBPACK_IMPORTED_MODULE_3__models_PlayerModel__["b" /* PlayerModelBuilder */]().build();
        this.stripePublickKey = null;
    }
    CollectPlayerInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CollectPlayerInfoPage');
    };
    CollectPlayerInfoPage.prototype.ionViewDidEnter = function () {
    };
    CollectPlayerInfoPage.prototype.onSubmit = function () {
        var _this = this;
        this.pssApi.createPreRegPlayer({ players: [this.player] }, '1')
            .subscribe(function (results) {
            if (results == null) {
                return;
            }
            if (results['status'] == 'created' || results['status'] == 'unpaid') {
                _this.navCtrl.push('PayPreRegFeePage', { player: new __WEBPACK_IMPORTED_MODULE_3__models_PlayerModel__["b" /* PlayerModelBuilder */]().buildFromJson(results['data']).build(), kosher: true, stripePublicKey: results['stripe_key'], tokenPurchaseId: results['token_purchase']['token_purchase_id'] });
                return;
            }
            var alert = _this.alertCtrl.create({
                title: 'Already Registered',
                subTitle: 'The player ' + _this.player.first_name + ' ' + _this.player.last_name + ' ' + _this.player.extra_title + ' is already registered.  If you have not already registered, try filling in (or changing) the extra title to distinguish yourself',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    CollectPlayerInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-collect-player-info',template:/*ion-inline-start:"/Users/agoldma/git/github/pre-reg/src/pages/collect-player-info/collect-player-info.html"*/'<!--\n  Generated template for the CollectPlayerInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      <span hideWhen=\'mobile\'> Registration for 2018 Intergalactic</span>\n      <span showWhen=\'mobile\'> Registration</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding class=\'card-background-page\'>\n  <div margin-top>\n    <img showWhen="mobile"  style=\'opacity:.5;width:100%\' [attr.height]="platform.height()/4+\'px\'" src="/assets/imgs/dummy_tournament_large.jpeg"/>\n    <div showWhen="mobile" class="card-title" text-center><h1 no-margin no-padding>Enter Player Info</h1></div>\n    <div hideWhen="mobile" text-center><h1 no-margin no-padding>Enter Player Info</h1></div>\n  </div>\n  <div margin [attr.text-center]="platform.is(\'mobile\') ? null : \'\'">\n    Please enter your information below.  "Extra Title" allows people with the same first and last name to distinguish themselves (i.e. jr, sr, etc).  Email address will be used to email you your player number and pin.  \n  </div>\n  <form #playerInfoForm="ngForm">\n  <ion-list>\n\n  <ion-item>\n    <ion-label floating>First Name</ion-label>\n    <ion-input [(ngModel)]="player.first_name" required name="first_name" type="text"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Last Name</ion-label>\n    <ion-input [(ngModel)]="player.last_name" required name="last_name" type="text"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Extra Title</ion-label>\n    <ion-input [(ngModel)]="player.extra_title" name="extra_title" type="text"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Email Address</ion-label>\n    <ion-input [(ngModel)]="player.email_address" required name="email_address" type="email" email></ion-input>\n  </ion-item>  \n  \n</ion-list>\n\n<div padding text-center>\n  <button (click)="onSubmit()" [disabled]="!playerInfoForm.form.valid" ion-button>Enter Credit Card Info</button>\n</div>\n</form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/agoldma/git/github/pre-reg/src/pages/collect-player-info/collect-player-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_pss_api_pss_api__["a" /* PssApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], CollectPlayerInfoPage);
    return CollectPlayerInfoPage;
}());

//# sourceMappingURL=collect-player-info.js.map

/***/ })

});
//# sourceMappingURL=1.js.map