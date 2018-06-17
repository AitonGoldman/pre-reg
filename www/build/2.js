webpackJsonp([2],{

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayPreRegFeePageModule", function() { return PayPreRegFeePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pay_pre_reg_fee__ = __webpack_require__(405);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PayPreRegFeePageModule = /** @class */ (function () {
    function PayPreRegFeePageModule() {
    }
    PayPreRegFeePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pay_pre_reg_fee__["a" /* PayPreRegFeePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pay_pre_reg_fee__["a" /* PayPreRegFeePage */]),
            ],
        })
    ], PayPreRegFeePageModule);
    return PayPreRegFeePageModule;
}());

//# sourceMappingURL=pay-pre-reg-fee.module.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayPreRegFeePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pss_api_pss_api__ = __webpack_require__(240);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PayPreRegFeePage = /** @class */ (function () {
    function PayPreRegFeePage(navCtrl, navParams, pssApi, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pssApi = pssApi;
        this.platform = platform;
        this.displayReturnMessage = false;
        this.displayStripe = false;
        this.player = null;
        this.stripePublicKey = null;
        this.loadingStripe = true;
        this.stripeSuccess = false;
        this.stripeFailure = false;
    }
    PayPreRegFeePage.prototype.ionViewDidEnter = function () {
        if (this.navParams.get('kosher') == undefined) {
            this.navCtrl.push('HomePage');
            return;
        }
        this.player = this.navParams.get('player');
        this.stripePublicKey = this.navParams.get('stripePublicKey');
        console.log(this.player);
        this.launchStripe(this.navParams.get('tokenPurchaseId'), "blah");
        // this.pssApi.getEvent('1').subscribe((results)=>{
        //     this.stripePublicKey = results['data']['stripe_public_key'];
        // this.launchStripe('ppp',"blah")
        // })
    };
    PayPreRegFeePage.prototype.launchStripe = function (tokenPurchaseId, purchaseSummary) {
        var _this = this;
        var handler = StripeCheckout.configure({
            key: this.stripePublicKey,
            image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
            locale: 'auto',
            email: this.player.email_address,
            allowRememberMe: false,
            opened: function () {
                _this.loadingStripe = false;
            },
            closed: function () {
                if (_this.stripeSuccess == false) {
                    _this.displayReturnMessage = true;
                }
            },
            //            token: function(token) {
            token: function (token) {
                _this.stripeSuccess = true;
                _this.pssApi.completeTicketPurchase({ stripe_token: token.id, email: token.email }, 1, tokenPurchaseId)
                    .subscribe(function (results) {
                    if (results != null) {
                        _this.navCtrl.push('PreRegSummaryPage', { player: _this.player, kosher: true });
                    }
                    else {
                        _this.navCtrl.push('HomePage');
                        return;
                    }
                });
                // You can access the token ID with `token.id`.
                // Get the token ID to your server-side code for use.
            }
        });
        handler.open({
            name: 'Intergalactic Registration',
            zipCode: false,
            amount: 100 * 20
        });
    };
    PayPreRegFeePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pay-pre-reg-fee',template:/*ion-inline-start:"/Users/agoldma/git/github/pre-reg/src/pages/pay-pre-reg-fee/pay-pre-reg-fee.html"*/'<!--\n  Generated template for the PayPreRegFeePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      <span hideWhen=\'mobile\'> Registration for 2018 Intergalactic</span>\n      <span showWhen=\'mobile\'> Registration</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div [style.margin-top]="(platform.height()/4)-25+\'px\'" *ngIf="displayReturnMessage==true" text-center>\n    If you need to change your information, use the back button to re-enter your information.  If you experienced a problem entering your credit card info, please see the front desk.\n  </div>\n  <div [style.margin-top]="(platform.height()/4)-25+\'px\'"  *ngIf="loadingStripe==true" text-center>\n    <ion-spinner></ion-spinner>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/agoldma/git/github/pre-reg/src/pages/pay-pre-reg-fee/pay-pre-reg-fee.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_pss_api_pss_api__["a" /* PssApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], PayPreRegFeePage);
    return PayPreRegFeePage;
}());

//# sourceMappingURL=pay-pre-reg-fee.js.map

/***/ })

});
//# sourceMappingURL=2.js.map