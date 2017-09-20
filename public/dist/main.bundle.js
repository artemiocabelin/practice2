webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__result_result_component__ = __webpack_require__("../../../../../src/app/result/result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_index_component__ = __webpack_require__("../../../../../src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_2__index_index_component__["a" /* IndexComponent */] },
    { path: 'bids', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'result', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_0__result_result_component__["a" /* ResultComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_service__ = __webpack_require__("../../../../../src/app/public.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index_index_component__ = __webpack_require__("../../../../../src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__result_result_component__ = __webpack_require__("../../../../../src/app/result/result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_product1_product1_component__ = __webpack_require__("../../../../../src/app/dashboard/product1/product1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_product2_product2_component__ = __webpack_require__("../../../../../src/app/dashboard/product2/product2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_product3_product3_component__ = __webpack_require__("../../../../../src/app/dashboard/product3/product3.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 // <-- Import FormsModule
 // <-- Import HttpModule








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__index_index_component__["a" /* IndexComponent */],
            __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__result_result_component__["a" /* ResultComponent */],
            __WEBPACK_IMPORTED_MODULE_10__dashboard_product1_product1_component__["a" /* Product1Component */],
            __WEBPACK_IMPORTED_MODULE_11__dashboard_product2_product2_component__["a" /* Product2Component */],
            __WEBPACK_IMPORTED_MODULE_12__dashboard_product3_product3_component__["a" /* Product3Component */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_0__public_service__["a" /* PublicService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/bid.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bid; });
var Bid = (function () {
    function Bid(name, price, pubproductNumber) {
        if (name === void 0) { name = ''; }
        if (price === void 0) { price = 0; }
        if (pubproductNumber === void 0) { pubproductNumber = 0; }
        this.name = name;
        this.price = price;
        this.pubproductNumber = pubproductNumber;
    }
    return Bid;
}());

//# sourceMappingURL=bid.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".product {\n    display: inline-block;\n    vertical-align: top;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Bid Now!</h1>\n<button (click)=\"logoutUser()\">Logout</button>\n<app-product1 class=\"product\" ></app-product1>\n<app-product2 class=\"product\" ></app-product2>\n<app-product3 class=\"product\" ></app-product3>\n<button (click)=\"endBid()\">End Bid</button>\n<p style=\"color: red;\" *ngIf=\"cannotEndBid\" >Alert! Cannot end bid. One of the products does not have a bid yet.</p>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__public_service__ = __webpack_require__("../../../../../src/app/public.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(_publicService, _router) {
        this._publicService = _publicService;
        this._router = _router;
        this.allBidders = [];
        this.cannotEndBid = false;
        this.cannotEndBid = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.logoutUser = function () {
        var _this = this;
        this._publicService.logoutUser()
            .then(function (data) {
            console.log('controller success logging user out');
            console.log(data);
            _this._router.navigate(['/']);
        })
            .catch(function (error) {
            console.log('controller error get all bidders p1');
            console.log(error);
        });
    };
    DashboardComponent.prototype.endBid = function () {
        var _this = this;
        console.log('easdfasdfasnding bid');
        this._publicService.getAllBiddersFromProduct1()
            .then(function (data) {
            console.log('got prod 1 bidders');
            console.log(data.length);
            if (data.length === 0) {
                _this.cannotEndBid = true;
            }
            else {
                _this.cannotEndBid = false;
            }
        })
            .catch(function (error) {
            console.log('error getting prod 1 bidders');
            _this.cannotEndBid = true;
        });
        this._publicService.getAllBiddersFromProduct2()
            .then(function (data) {
            if (data.length === 0) {
                _this.cannotEndBid = true;
            }
            else {
                _this.cannotEndBid = false;
            }
        })
            .catch(function (error) {
            console.log('error getting prod 2 bidders');
        });
        this._publicService.getAllBiddersFromProduct3()
            .then(function (data) {
            console.log('asdfasdfsagot prod 3 bidders');
            if (data.length === 0) {
                _this.cannotEndBid = true;
            }
            else {
                _this.cannotEndBid = false;
            }
            if (_this.cannotEndBid === false) {
                _this._router.navigate(['/result']);
            }
        })
            .catch(function (error) {
            console.log('error getting prod 3 bidders');
        });
    };
    DashboardComponent.prototype.checkerBid = function () {
        for (var i = 0; i < this.allBidders.length; i++) {
            console.log(this.allBidders[i].length);
            if (this.allBidders[i].length < 1) {
                this.cannotEndBid = true;
            }
        }
        if (!this.cannotEndBid) {
            console.log('ok to end bid');
            this._router.navigate(['/result']);
        }
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__public_service__["a" /* PublicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__public_service__["a" /* PublicService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/product1/product1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/product1/product1.component.html":
/***/ (function(module, exports) {

module.exports = "\n<img src=\"http://via.placeholder.com/300\" alt=\"Product 1\">\n<form (submit)=\"submitValidBid()\" >\n  <input type=\"number\" \n  name=\"bid\" \n  [(ngModel)]=\"bid.price\" \n  #price=\"ngModel\"\n   />\n  <input type=\"submit\" value=\"Bid\" />\n</form>\n<p style=\"color: red;\" *ngIf=\"tooLow\">Price must be higher than previous bid.</p>\n\n<p>Current Bids:</p>\n<div class=\"currBids\">\n<ul *ngIf=\"!hasNotUsedSearch\">\n  <li *ngFor=\"let bidder of showBids\">{{bidder.name}}: ${{bidder.price}}</li>\n</ul>\n<ul *ngIf=\"hasNotUsedSearch\">\n  <li *ngFor=\"let bidder of prod1Bidders\">{{bidder.name}}: ${{bidder.price}}</li>\n</ul>\n</div>\n<form>\n  <input type=\"text\" name=\"search\" placeholder=\"Search\" [(ngModel)]=\"searchVal\" (keyup)=\"searchBidders()\"/>\n</form>"

/***/ }),

/***/ "../../../../../src/app/dashboard/product1/product1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__public_service__ = __webpack_require__("../../../../../src/app/public.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bid__ = __webpack_require__("../../../../../src/app/bid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Product1Component = (function () {
    function Product1Component(_publicService, _router) {
        this._publicService = _publicService;
        this._router = _router;
        this.bid = new __WEBPACK_IMPORTED_MODULE_2__bid__["a" /* Bid */]();
        this.prod1Bidders = [];
        this.showBids = [];
        this.searchVal = '';
        this.tooLow = false;
        this.hasNotUsedSearch = true;
        this.checkUserInSession();
        this.getAllBidders();
        this.showBids = this.prod1Bidders;
    }
    Product1Component.prototype.submitValidBid = function () {
        if (this.prod1Bidders.length === 0) {
            this.submitBid();
        }
        else {
            if (this.bid.price > this.prod1Bidders[0].price) {
                this.tooLow = false;
                this.submitBid();
            }
            else {
                console.log('price must be higher than previous bid');
                this.tooLow = true;
            }
        }
    };
    Product1Component.prototype.submitBid = function () {
        var _this = this;
        this.hasNotUsedSearch = true;
        console.log('submitting bid');
        this._publicService.submitBidToProduct1(this.bid)
            .then(function (data) {
            console.log('controller success submitting bid');
            console.log(data);
            _this.bid = new __WEBPACK_IMPORTED_MODULE_2__bid__["a" /* Bid */]();
            _this.getAllBidders();
        })
            .catch(function (error) {
            console.log('controller error submitting bid');
            console.log(error);
        });
    };
    Product1Component.prototype.ngOnInit = function () {
    };
    Product1Component.prototype.getAllBidders = function () {
        var _this = this;
        this._publicService.getAllBiddersFromProduct1()
            .then(function (data) {
            console.log('controller success get all bidders p1');
            console.log(data);
            _this.prod1Bidders = data;
        })
            .catch(function (error) {
            console.log('controller error get all bidders p1');
            console.log(error);
        });
    };
    Product1Component.prototype.searchBidders = function () {
        var _this = this;
        this.hasNotUsedSearch = false;
        console.log('this is happening');
        console.log(this.searchVal);
        this.showBids = this.prod1Bidders.filter(function (index) {
            return index.name.toLowerCase().includes(_this.searchVal.toLowerCase());
        });
        console.log('These are product 1 bidders');
        console.log(this.prod1Bidders);
        console.log('Showbids');
        console.log(this.showBids);
    };
    Product1Component.prototype.checkUserInSession = function () {
        var _this = this;
        this._publicService.getCurrentUser()
            .then(function (data) {
            console.log('got then response');
            console.log(data);
            if (!data) {
                _this._router.navigate(['']);
            }
        })
            .catch(function (error) {
            console.log('got catch response');
            console.log(error);
        });
    };
    return Product1Component;
}());
Product1Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["o" /* Component */])({
        selector: 'app-product1',
        template: __webpack_require__("../../../../../src/app/dashboard/product1/product1.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/product1/product1.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__public_service__["a" /* PublicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__public_service__["a" /* PublicService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _b || Object])
], Product1Component);

var _a, _b;
//# sourceMappingURL=product1.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/product2/product2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/product2/product2.component.html":
/***/ (function(module, exports) {

module.exports = "\n<img src=\"http://via.placeholder.com/300\" alt=\"Product 2\">\n<form (submit)=\"submitValidBid()\" >\n  <input type=\"number\" \n  name=\"bid\" \n  [(ngModel)]=\"bid.price\" \n  #price=\"ngModel\"\n   />\n  <input type=\"submit\" value=\"Bid\" />\n</form>\n<p style=\"color: red;\" *ngIf=\"tooLow\">Price must be higher than previous bid.</p>\n\n<p>Current Bids:</p>\n<div class=\"currBids\">\n<ul *ngIf=\"!hasNotUsedSearch\">\n  <li *ngFor=\"let bidder of showBids\">{{bidder.name}}: ${{bidder.price}}</li>\n</ul>\n<ul *ngIf=\"hasNotUsedSearch\">\n  <li *ngFor=\"let bidder of prod2Bidders\">{{bidder.name}}: ${{bidder.price}}</li>\n</ul>\n</div>\n<form>\n  <input type=\"text\" name=\"search\" placeholder=\"Search\" [(ngModel)]=\"searchVal\" (keyup)=\"searchBidders()\"/>\n</form>"

/***/ }),

/***/ "../../../../../src/app/dashboard/product2/product2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__public_service__ = __webpack_require__("../../../../../src/app/public.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bid__ = __webpack_require__("../../../../../src/app/bid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Product2Component = (function () {
    function Product2Component(_publicService, _router) {
        this._publicService = _publicService;
        this._router = _router;
        this.bid = new __WEBPACK_IMPORTED_MODULE_2__bid__["a" /* Bid */]();
        this.prod2Bidders = [];
        this.showBids = [];
        this.searchVal = '';
        this.tooLow = false;
        this.hasNotUsedSearch = true;
        this.checkUserInSession();
        this.getAllBidders();
        this.showBids = this.prod2Bidders;
    }
    Product2Component.prototype.submitValidBid = function () {
        if (this.prod2Bidders.length === 0) {
            this.submitBid();
        }
        else {
            if (this.bid.price > this.prod2Bidders[0].price) {
                this.tooLow = false;
                this.submitBid();
            }
            else {
                console.log('price must be higher than previous bid');
                this.tooLow = true;
            }
        }
    };
    Product2Component.prototype.submitBid = function () {
        var _this = this;
        this.hasNotUsedSearch = true;
        console.log('submitting bid');
        this._publicService.submitBidToProduct2(this.bid)
            .then(function (data) {
            console.log('controller success submitting bid');
            console.log(data);
            _this.bid = new __WEBPACK_IMPORTED_MODULE_2__bid__["a" /* Bid */]();
            _this.getAllBidders();
        })
            .catch(function (error) {
            console.log('controller error submitting bid');
            console.log(error);
        });
    };
    Product2Component.prototype.ngOnInit = function () {
    };
    Product2Component.prototype.getAllBidders = function () {
        var _this = this;
        this._publicService.getAllBiddersFromProduct2()
            .then(function (data) {
            console.log('controller success get all bidders p1');
            console.log(data);
            _this.prod2Bidders = data;
        })
            .catch(function (error) {
            console.log('controller error get all bidders p1');
            console.log(error);
        });
    };
    Product2Component.prototype.searchBidders = function () {
        var _this = this;
        this.hasNotUsedSearch = false;
        console.log('this is happening');
        console.log(this.searchVal);
        this.showBids = this.prod2Bidders.filter(function (index) {
            return index.name.toLowerCase().includes(_this.searchVal.toLowerCase());
        });
        console.log('These are product 1 bidders');
        console.log(this.prod2Bidders);
        console.log('Showbids');
        console.log(this.showBids);
    };
    Product2Component.prototype.checkUserInSession = function () {
        var _this = this;
        this._publicService.getCurrentUser()
            .then(function (data) {
            console.log('got then response');
            console.log(data);
            if (!data) {
                _this._router.navigate(['']);
            }
        })
            .catch(function (error) {
            console.log('got catch response');
            console.log(error);
        });
    };
    return Product2Component;
}());
Product2Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["o" /* Component */])({
        selector: 'app-product2',
        template: __webpack_require__("../../../../../src/app/dashboard/product2/product2.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/product2/product2.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__public_service__["a" /* PublicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__public_service__["a" /* PublicService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _b || Object])
], Product2Component);

var _a, _b;
//# sourceMappingURL=product2.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/product3/product3.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/product3/product3.component.html":
/***/ (function(module, exports) {

module.exports = "\n<img src=\"http://via.placeholder.com/300\" alt=\"Product 3\">\n<form (submit)=\"submitValidBid()\" >\n  <input type=\"number\" \n  name=\"bid\" \n  [(ngModel)]=\"bid.price\" \n  #price=\"ngModel\"\n   />\n  <input type=\"submit\" value=\"Bid\" />\n</form>\n<p style=\"color: red;\" *ngIf=\"tooLow\">Price must be higher than previous bid.</p>\n\n<p>Current Bids:</p>\n<div class=\"currBids\">\n<ul *ngIf=\"!hasNotUsedSearch\">\n  <li *ngFor=\"let bidder of showBids\">{{bidder.name}}: ${{bidder.price}}</li>\n</ul>\n<ul *ngIf=\"hasNotUsedSearch\">\n  <li *ngFor=\"let bidder of prod3Bidders\">{{bidder.name}}: ${{bidder.price}}</li>\n</ul>\n</div>\n<form>\n  <input type=\"text\" name=\"search\" placeholder=\"Search\" [(ngModel)]=\"searchVal\" (keyup)=\"searchBidders()\"/>\n</form>"

/***/ }),

/***/ "../../../../../src/app/dashboard/product3/product3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__public_service__ = __webpack_require__("../../../../../src/app/public.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bid__ = __webpack_require__("../../../../../src/app/bid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Product3Component = (function () {
    function Product3Component(_publicService, _router) {
        this._publicService = _publicService;
        this._router = _router;
        this.bid = new __WEBPACK_IMPORTED_MODULE_2__bid__["a" /* Bid */]();
        this.prod3Bidders = [];
        this.showBids = [];
        this.searchVal = '';
        this.tooLow = false;
        this.hasNotUsedSearch = true;
        this.checkUserInSession();
        this.getAllBidders();
        this.showBids = this.prod3Bidders;
    }
    Product3Component.prototype.submitValidBid = function () {
        if (this.prod3Bidders.length === 0) {
            this.submitBid();
        }
        else {
            if (this.bid.price > this.prod3Bidders[0].price) {
                this.tooLow = false;
                this.submitBid();
            }
            else {
                console.log('price must be higher than previous bid');
                this.tooLow = true;
            }
        }
    };
    Product3Component.prototype.submitBid = function () {
        var _this = this;
        this.hasNotUsedSearch = true;
        console.log('submitting bid');
        this._publicService.submitBidToProduct3(this.bid)
            .then(function (data) {
            console.log('controller success submitting bid');
            console.log(data);
            _this.bid = new __WEBPACK_IMPORTED_MODULE_2__bid__["a" /* Bid */]();
            _this.getAllBidders();
        })
            .catch(function (error) {
            console.log('controller error submitting bid');
            console.log(error);
        });
    };
    Product3Component.prototype.ngOnInit = function () {
    };
    Product3Component.prototype.getAllBidders = function () {
        var _this = this;
        this._publicService.getAllBiddersFromProduct3()
            .then(function (data) {
            console.log('controller success get all bidders p2');
            console.log(data);
            _this.prod3Bidders = data;
        })
            .catch(function (error) {
            console.log('controller error get all bidders p1');
            console.log(error);
        });
    };
    Product3Component.prototype.searchBidders = function () {
        var _this = this;
        this.hasNotUsedSearch = false;
        console.log('this is happening');
        console.log(this.searchVal);
        this.showBids = this.prod3Bidders.filter(function (index) {
            return index.name.toLowerCase().includes(_this.searchVal.toLowerCase());
        });
        console.log('These are product 1 bidders');
        console.log(this.prod3Bidders);
        console.log('Showbids');
        console.log(this.showBids);
    };
    Product3Component.prototype.checkUserInSession = function () {
        var _this = this;
        this._publicService.getCurrentUser()
            .then(function (data) {
            console.log('got then response');
            console.log(data);
            if (!data) {
                _this._router.navigate(['']);
            }
        })
            .catch(function (error) {
            console.log('got catch response');
            console.log(error);
        });
    };
    return Product3Component;
}());
Product3Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["o" /* Component */])({
        selector: 'app-product3',
        template: __webpack_require__("../../../../../src/app/dashboard/product3/product3.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/product3/product3.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__public_service__["a" /* PublicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__public_service__["a" /* PublicService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _b || Object])
], Product3Component);

var _a, _b;
//# sourceMappingURL=product3.component.js.map

/***/ }),

/***/ "../../../../../src/app/index/index.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  index works!\n</p>\n<form (submit)=\"onSubmit()\" >\n  <input type=\"text\" name=\"username\" [(ngModel)]=\"bid.username\" #username = \"ngModel\" />\n  <input type=\"submit\" value=\"Enter\" />\n</form>"

/***/ }),

/***/ "../../../../../src/app/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_service__ = __webpack_require__("../../../../../src/app/public.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bid__ = __webpack_require__("../../../../../src/app/bid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IndexComponent = (function () {
    function IndexComponent(_publicService, _router) {
        this._publicService = _publicService;
        this._router = _router;
        this.bid = new __WEBPACK_IMPORTED_MODULE_1__bid__["a" /* Bid */]();
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('angular creating bidder in session');
        this._publicService.createBidderSession(this.bid)
            .then(function (data) {
            console.log('success createBidderSession');
            console.log(data);
            _this._router.navigate(['bids']);
        })
            .catch(function (error) {
            console.log('error createBidderSession');
        });
    };
    return IndexComponent;
}());
IndexComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-index',
        template: __webpack_require__("../../../../../src/app/index/index.component.html"),
        styles: [__webpack_require__("../../../../../src/app/index/index.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__public_service__["a" /* PublicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__public_service__["a" /* PublicService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object])
], IndexComponent);

var _a, _b;
//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ "../../../../../src/app/public.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // for converting to promise
var PublicService = (function () {
    function PublicService(_http) {
        this._http = _http;
    }
    PublicService.prototype.createBidderSession = function (bidderData) {
        console.log('service creating bidder in session');
        return this._http.post('api/bids/create', bidderData)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    PublicService.prototype.submitBidToProduct1 = function (bidData) {
        console.log('service submitting bid to product 1');
        return this._http.post('api/bids/product1/submit', bidData)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    PublicService.prototype.getAllBiddersFromProduct1 = function () {
        console.log('service getting all bidders from product 1');
        return this._http.get('/api/bids/product1/getAll')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    PublicService.prototype.submitBidToProduct2 = function (bidData) {
        console.log('service submitting bid to product 2');
        return this._http.post('api/bids/product2/submit', bidData)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    PublicService.prototype.getAllBiddersFromProduct2 = function () {
        console.log('service getting all bidders from product 2');
        return this._http.get('/api/bids/product2/getAll')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    PublicService.prototype.submitBidToProduct3 = function (bidData) {
        console.log('service submitting bid to product 3');
        return this._http.post('api/bids/product3/submit', bidData)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    PublicService.prototype.getAllBiddersFromProduct3 = function () {
        console.log('service getting all bidders from product 3');
        return this._http.get('/api/bids/product3/getAll')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    PublicService.prototype.logoutUser = function () {
        console.log('service loggin user out');
        return this._http.get('api/bids/logout')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    PublicService.prototype.getCurrentUser = function () {
        console.log('service getting if user in session');
        return this._http.get('api/bids/checksession')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    PublicService.prototype.clearAll = function () {
        console.log('service clear all bidders');
        return this._http.get('api/bids/clearall')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    return PublicService;
}());
PublicService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PublicService);

var _a;
//# sourceMappingURL=public.service.js.map

/***/ }),

/***/ "../../../../../src/app/result/result.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/result/result.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{currentUser}} ended the bid.</h1>\n<p>Product 1 Winner</p>\n{{prod1bidder.name}} {{prod1bidder.price}} \n<p>Product 2 Winner</p>\n{{prod2bidder.name}} {{prod2bidder.price}} \n<p>Product 3 Winner</p>\n{{prod3bidder.name}} {{prod3bidder.price}} \n\n<button (click)=\"startBid()\">Start Bid</button>"

/***/ }),

/***/ "../../../../../src/app/result/result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__public_service__ = __webpack_require__("../../../../../src/app/public.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResultComponent = (function () {
    function ResultComponent(_publicService, _router) {
        this._publicService = _publicService;
        this._router = _router;
        this.checkUserInSession();
        this.getAllWinners();
    }
    ResultComponent.prototype.getAllWinners = function () {
        var _this = this;
        console.log('getting all winners');
        this._publicService.getAllBiddersFromProduct1()
            .then(function (data) {
            _this.prod1bidder = data[0];
            console.log('getting prod 1 winner');
            console.log(_this.prod1bidder);
        })
            .catch();
        this._publicService.getAllBiddersFromProduct2()
            .then(function (data) {
            _this.prod2bidder = data[0];
            console.log('getting prod 2 winner');
            console.log(_this.prod2bidder);
        })
            .catch();
        this._publicService.getAllBiddersFromProduct3()
            .then(function (data) {
            _this.prod3bidder = data[0];
            console.log('getting prod 3 winner');
            console.log(_this.prod3bidder);
        })
            .catch();
    };
    ResultComponent.prototype.startBid = function () {
        var _this = this;
        console.log('starting bid');
        this._publicService.clearAll()
            .then(function (data) {
            console.log('success clearing all');
            _this._router.navigate(['/bids']);
        })
            .catch(function (error) {
            console.log('error clearing all');
        });
    };
    ResultComponent.prototype.ngOnInit = function () {
    };
    ResultComponent.prototype.checkUserInSession = function () {
        var _this = this;
        this._publicService.getCurrentUser()
            .then(function (data) {
            console.log('got then response');
            console.log(data);
            _this.currentUser = data;
            console.log(_this.currentUser);
            if (!data) {
                _this._router.navigate(['/']);
            }
        })
            .catch(function (error) {
            console.log('got catch response');
            console.log(error);
        });
    };
    return ResultComponent;
}());
ResultComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-result',
        template: __webpack_require__("../../../../../src/app/result/result.component.html"),
        styles: [__webpack_require__("../../../../../src/app/result/result.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__public_service__["a" /* PublicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__public_service__["a" /* PublicService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ResultComponent);

var _a, _b;
//# sourceMappingURL=result.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map