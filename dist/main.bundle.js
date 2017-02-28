webpackJsonp([0,4],{

/***/ 1165:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(479);


/***/ },

/***/ 131:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NavigationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavigationService = (function () {
    function NavigationService(route, router) {
        this.route = route;
        this.router = router;
        //routes property to hold the current route as being set by the loaded component
        this.routes = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        //Current route property being exposed as observable for being subscribed by other components
        this.routesAnnounced$ = this.routes.asObservable();
    }
    //setter method for current route
    NavigationService.prototype.setRoutes = function (routes) {
        this.routes.next(routes);
    };
    NavigationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _b) || Object])
    ], NavigationService);
    return NavigationService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/navigation.service.js.map

/***/ },

/***/ 132:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__architecture_logging_level_enum__ = __webpack_require__(388);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });

var environment = {
    production: false,
    loggerURL: "/rest/logger",
    loggerLevel: __WEBPACK_IMPORTED_MODULE_0__architecture_logging_level_enum__["a" /* Level */].DEBUG,
    //baseURL: "https://demo9396170.mockable.io",
    baseURL: "http://localhost:8080/AngularSpring",
    timeout: 5000
};
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/environment.js.map

/***/ },

/***/ 189:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ConfigService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigService = (function () {
    function ConfigService(http) {
        this.http = http;
        this.config = null;
        this.env = null;
    }
    /**
     * Use to get the data found in the second file (config file)
     */
    ConfigService.prototype.getConfig = function (key) {
        return this.config[key];
    };
    /**
     * Use to get the data found in the first file (env file)
     */
    ConfigService.prototype.getEnv = function (key) {
        return this.env[key];
    };
    ConfigService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], ConfigService);
    return ConfigService;
    var _a;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/config.service.js.map

/***/ },

/***/ 190:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environment__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_retryWhen__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_retryWhen___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_retryWhen__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_timeout__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_retry__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_retry__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BaseWSHandler; });
/* * * ../../../architecture/message-handler/base-ws-handler * * */
/**
 *
 * The BaseWebServiceHandler class implements the MessageHandler interface
 * and provides the implementation of common HTTP method invocations.
 * It is an abstract class that in itself cannot be created,
 * it is instead extended for each unique backend NPS call
 *
 **/








var BaseWSHandler = (function () {
    // Resolve HTTP using the constructor
    function BaseWSHandler(http, logger) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_1__environment__["a" /* environment */].baseURL;
        this.timeout = __WEBPACK_IMPORTED_MODULE_1__environment__["a" /* environment */].timeout;
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9',
        });
        this.requestOptions = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
        this.logger = logger;
    }
    //The get method that returns http service injected into the constructor
    BaseWSHandler.prototype.getHttpService = function () {
        return this.http;
    };
    //The get method that uses http get request to fetch the data from server
    BaseWSHandler.prototype.get = function () {
        this.logger.log("GET CALL: URL=" + this.url);
        return this.http.get(this.url, this.requestOptions)
            .retryWhen(function (error) { return error.delay(500); }).retry(3)
            .timeout(this.timeout)
            .map(this.extractResponseData)
            .catch(this.handleError);
    };
    //The post method that uses http post request to send data to server and adds the new data
    BaseWSHandler.prototype.post = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i - 0] = arguments[_i];
        }
        this.logger.log("POST CALL: URL=" + this.url);
        var body = JSON.stringify(param);
        this.logger.log("POST CALL: body=" + body);
        return this.http.post(this.url, body, this.requestOptions)
            .retryWhen(function (error) { return error.delay(500); }).retry(3)
            .timeout(this.timeout)
            .map(this.extractResponseData)
            .catch(this.handleError);
    };
    //The update method that uses http put method to update the existing data saved in server
    BaseWSHandler.prototype.put = function (param) {
        var body = JSON.stringify(param);
        return this.http.put(this.url, body, this.requestOptions)
            .retryWhen(function (error) { return error.delay(500); }).retry(3)
            .timeout(this.timeout)
            .map(this.extractResponseData)
            .catch(this.handleError);
    };
    //The delete method that uses http delete method to delete the data stored in server
    BaseWSHandler.prototype.delete = function (key, val) {
        return this.http.delete(this.url + "/?" + key + "=" + val, this.requestOptions)
            .retryWhen(function (error) { return error.delay(500); }).retry(3)
            .timeout(this.timeout)
            .map(this.extractResponseData)
            .catch(this.handleError);
    };
    //The options method that uses http options method to determine the options and/or requirements associated 
    //with a resource or the capabilities of a server 
    BaseWSHandler.prototype.options = function () {
        return this.http.request(this.url, { method: 'OPTIONS' })
            .retryWhen(function (error) { return error.delay(500); }).retry(3)
            .timeout(this.timeout)
            .map(this.extractResponseData)
            .catch(this.handleError);
    };
    return BaseWSHandler;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/base-ws-handler.js.map

/***/ },

/***/ 269:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HelpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HelpService = (function () {
    function HelpService(route, router) {
        this.route = route;
        this.router = router;
        this.updateQuery(router);
    }
    HelpService.prototype.setSystem = function () {
        this.system = this.getTitle(this.router.routerState, this.router.routerState.root)[0];
    };
    HelpService.prototype.getSystem = function () {
        return this.system;
    };
    HelpService.prototype.setPanel = function () {
        var currentRoute = this.route.root;
        while (currentRoute.children[0] !== undefined)
            currentRoute = currentRoute.children[0];
        this.panel = currentRoute.snapshot.data['title'];
    };
    HelpService.prototype.getPanel = function () {
        return this.panel;
    };
    HelpService.prototype.setQuery = function () {
        var queryString = '?';
        queryString += (this.system) ? 'system=' + encodeURIComponent(this.system) + '&' : '';
        queryString += (this.panel) ? 'panel=' + encodeURIComponent(this.panel) : '';
        this.query = queryString;
    };
    HelpService.prototype.getQuery = function () {
        return this.query;
    };
    HelpService.prototype.updateQuery = function (router) {
        var _this = this;
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationEnd"]) {
                _this.setSystem();
                _this.setPanel();
                _this.setQuery();
            }
        });
    };
    HelpService.prototype.getTitle = function (state, parent) {
        var data = [];
        if (parent && parent.snapshot.data && parent.snapshot.data.title)
            data.push(parent.snapshot.data.title);
        if (state && parent)
            data.push.apply(data, this.getTitle(state, state.firstChild(parent)));
        return data;
    };
    HelpService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _b) || Object])
    ], HelpService);
    return HelpService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/help.service.js.map

/***/ },

/***/ 270:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environment__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_retryWhen__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_retryWhen___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_retryWhen__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_timeout__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_retry__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__LogMessage__ = __webpack_require__(607);
/* unused harmony export LOGGER_WS_HANDLER_OPTIONS */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoggerWSHandler; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return LOGGER_WS_HANDLER_PROVIDER; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};











var LOGGER_WS_HANDLER_OPTIONS = {
    url: __WEBPACK_IMPORTED_MODULE_2__environment__["a" /* environment */].loggerURL
};
var LoggerWSHandler = (function () {
    // Resolve HTTP using the constructor
    function LoggerWSHandler(http, configOptions) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_2__environment__["a" /* environment */].baseURL + configOptions.url;
        this.timeout = __WEBPACK_IMPORTED_MODULE_2__environment__["a" /* environment */].timeout;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
    }
    //The get method that returns http service injected into the constructor
    LoggerWSHandler.prototype.getHttpService = function () {
        return this.http;
    };
    //The get method that uses http get request to fetch the data from server
    LoggerWSHandler.prototype.get = function () {
        return this.http.get(this.url, this.requestOptions)
            .retryWhen(function (error) { return error.delay(500); }).retry(3)
            .timeout(this.timeout)
            .map(this.extractResponseData)
            .catch(this.handleError);
    };
    //The post method that uses http post request to send data to server and adds the new data
    LoggerWSHandler.prototype.post = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i - 0] = arguments[_i];
        }
        console.log("POST CALL: URL=" + this.url);
        var body = ' Occured';
        try {
            body = JSON.stringify(param);
        }
        catch (error) {
            console.log("sringfy error: " + error);
        }
        console.log("POST CALL: body=" + JSON.stringify(new __WEBPACK_IMPORTED_MODULE_10__LogMessage__["a" /* LogMessage */](body)));
        return this.http.post(this.url, JSON.stringify(new __WEBPACK_IMPORTED_MODULE_10__LogMessage__["a" /* LogMessage */](body)), this.requestOptions)
            .retryWhen(function (error) { return error.delay(500); }).retry(3)
            .timeout(10000)
            .map(this.extractResponseData)
            .catch(this.handleError);
    };
    //The update method that uses http put method to update the existing data saved in server
    LoggerWSHandler.prototype.put = function (param) {
        var body = JSON.stringify(param);
        return this.http.put(this.url, body, this.requestOptions)
            .retryWhen(function (error) { return error.delay(500); }).retry(3)
            .timeout(this.timeout)
            .map(this.extractResponseData)
            .catch(this.handleError);
    };
    //The delete method that uses http delete method to delete the data stored in server
    LoggerWSHandler.prototype.delete = function (key, val) {
        return this.http.delete(this.url + "/?" + key + "=" + val, this.requestOptions)
            .retryWhen(function (error) { return error.delay(500); }).retry(3)
            .timeout(this.timeout)
            .map(this.extractResponseData)
            .catch(this.handleError);
    };
    //The options method that uses http options method to determine the options and/or requirements associated 
    //with a resource or the capabilities of a server 
    LoggerWSHandler.prototype.options = function () {
        return this.http.request(this.url, { method: 'OPTIONS' })
            .retryWhen(function (error) { return error.delay(500); }).retry(3)
            .timeout(this.timeout)
            .map(this.extractResponseData)
            .catch(this.handleError);
    };
    LoggerWSHandler.prototype.extractResponseData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    LoggerWSHandler.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(errMsg);
    };
    LoggerWSHandler = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(LOGGER_WS_HANDLER_OPTIONS)), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object, Object])
    ], LoggerWSHandler);
    return LoggerWSHandler;
    var _a;
}());
// Collection of providers used for this service at the module level.
// Notice that we are overriding the CORE ErrorHandler with our own class definition.
// --
// CAUTION: These are at the BOTTOM of the file so that we don't have to worry about
// creating futureRef() and hoisting behavior.
var LOGGER_WS_HANDLER_PROVIDER = [
    {
        provide: LOGGER_WS_HANDLER_OPTIONS,
        useValue: LOGGER_WS_HANDLER_OPTIONS
    },
    {
        provide: LoggerWSHandler,
        useClass: LoggerWSHandler
    }
];
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/logger-ws-handler.js.map

/***/ },

/***/ 388:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Level; });
var Level;
(function (Level) {
    Level[Level["OFF"] = 0] = "OFF";
    Level[Level["ERROR"] = 1] = "ERROR";
    Level[Level["WARN"] = 2] = "WARN";
    Level[Level["INFO"] = 3] = "INFO";
    Level[Level["DEBUG"] = 4] = "DEBUG";
    Level[Level["LOG"] = 5] = "LOG";
})(Level || (Level = {}));
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/level.enum.js.map

/***/ },

/***/ 389:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reference_data_ws_handler__ = __webpack_require__(390);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ReferenceDataService; });
/* * * ../../../architecture/code-services/code-service.service.ts * * */
/**
 *
 * ReferenceDataService is the service class that calls the ReferenceDataWSHandler
 * for fetching the RefData
 * This service can be injected to the view component which needs
 * the refData
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReferenceDataService = (function () {
    function ReferenceDataService(referenceDataWSHandler) {
        this.referenceDataWSHandler = referenceDataWSHandler;
    }
    /*  Get call to the web service handler to fetch RefData  */
    ReferenceDataService.prototype.getRefDataFromWSHandler = function (type) {
        var _this = this;
        var array = [];
        this.referenceDataWSHandler.getReferenceData(type)
            .subscribe(function (res) {
            _this.result = res;
            for (var i = 0; i < _this.result.length; i++) {
                var rowData = _this.result[i];
                array.push(rowData);
            }
        });
        return array;
    };
    ReferenceDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__reference_data_ws_handler__["a" /* ReferenceDataWSHandler */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__reference_data_ws_handler__["a" /* ReferenceDataWSHandler */]) === 'function' && _a) || Object])
    ], ReferenceDataService);
    return ReferenceDataService;
    var _a;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/reference-data-service.js.map

/***/ },

/***/ 390:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reference_data__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__message_handler_base_ws_handler__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logging_logging_service__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ReferenceDataWSHandler; });
/* * * ../../../architecture/code-services/code-ws-handler.service * * */
/**
 *
 * ReferenceDataWSHandler is the service class that serves to fetch the
 * reference data configuration and provides get method to return each element
 * This class extends BaseWSHandler and uses the get method for fetching
 * the RefData
 *
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ReferenceDataWSHandler = (function (_super) {
    __extends(ReferenceDataWSHandler, _super);
    function ReferenceDataWSHandler(httpService, logger) {
        _super.call(this, httpService, logger);
        this.httpService = httpService;
        this.logger = logger;
    }
    /*  Method that calls webservice to fetch the reference data*/
    ReferenceDataWSHandler.prototype.getReferenceData = function (type) {
        //this.url = `${TOKENS.childClaimantURL}/${type}`;
        this.url = 'http://demo9396170.mockable.io/log';
        return this.get();
    };
    /*  Implement extractResponseData   */
    ReferenceDataWSHandler.prototype.extractResponseData = function (res) {
        console.log("here i am ");
        var body = res.json().data.map(function (refdata) {
            // Use refdata to create an instance of ReferenceData
            return new __WEBPACK_IMPORTED_MODULE_2__reference_data__["a" /* ReferenceData */](refdata.type, refdata.id, refdata.start_date, refdata.end_date, refdata.VALUE);
        });
        return body || {};
    };
    /* Implement the method that handle errors  */
    ReferenceDataWSHandler.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        this.logger.log(errMsg);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(errMsg);
    };
    ReferenceDataWSHandler = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__logging_logging_service__["a" /* LoggingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__logging_logging_service__["a" /* LoggingService */]) === 'function' && _b) || Object])
    ], ReferenceDataWSHandler);
    return ReferenceDataWSHandler;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_6__message_handler_base_ws_handler__["a" /* BaseWSHandler */]));
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/reference-data-ws-handler.js.map

/***/ },

/***/ 391:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SerilizationHelper; });
var SerilizationHelper = (function () {
    function SerilizationHelper() {
    }
    /*check whether object is  Primitive*/
    SerilizationHelper.isPrimitive = function (obj) {
        switch (typeof obj) {
            case "string":
            case "number":
            case "boolean":
                return true;
        }
        return !!(obj instanceof String || obj === String ||
            obj instanceof Number || obj === Number ||
            obj instanceof Boolean || obj === Boolean);
    };
    /*check whether object is  Array*/
    SerilizationHelper.isArray = function (object) {
        if (object === Array) {
            return true;
        }
        else if (typeof Array.isArray === "function") {
            return Array.isArray(object);
        }
        else {
            return !!(object instanceof Array);
        }
    };
    /*Returns the class of object*/
    SerilizationHelper.getClazz = function (target, propertyKey) {
        return Reflect.getMetadata("design:type", target, propertyKey);
    };
    /*Returns the MetaData atatched with the individual elements of class object*/
    SerilizationHelper.getJsonProperty = function (target, propertyKey) {
        return Reflect.getMetadata(SerilizationHelper.jsonMetadataKey, target, propertyKey);
    };
    /*Returns the deserialized object from JSON*/
    SerilizationHelper.deserialize = function (clazz, jsonObject) {
        if ((clazz === undefined) || (jsonObject === undefined))
            return undefined;
        //Creates the object of given type in the Argument
        var obj = new clazz();
        // Iterate over the object elemements and populate it from given JSON 
        Object.keys(obj).forEach(function (key) {
            // If property have  metaData attached in form of name and class of element,then it would be considered while settinf the property in the object
            var propertyMetadataFn = function (propertyMetadata) {
                var propertyName = propertyMetadata.name || key;
                var innerJson = jsonObject ? jsonObject[propertyName] : undefined;
                var clazz = SerilizationHelper.getClazz(obj, key);
                // If Json element is Array
                if (SerilizationHelper.isArray(clazz)) {
                    var metadata_1 = SerilizationHelper.getJsonProperty(obj, key);
                    var t = Reflect.getMetadata("design:type", obj, key);
                    // metadata.clazz=undefined;
                    if (metadata_1.clazz || SerilizationHelper.isPrimitive(clazz)) {
                        if (innerJson && SerilizationHelper.isArray(innerJson)) {
                            return innerJson.map(function (item) { return SerilizationHelper.deserialize(metadata_1.clazz, item); });
                        }
                        else {
                            return undefined;
                        }
                    }
                    else {
                        return innerJson;
                    }
                }
                else if (!SerilizationHelper.isPrimitive(clazz)) {
                    return SerilizationHelper.deserialize(clazz, innerJson);
                }
                else {
                    return jsonObject ? jsonObject[propertyName] : undefined;
                }
            };
            var propertyMetadata = SerilizationHelper.getJsonProperty(obj, key);
            if (propertyMetadata) {
                obj[key] = propertyMetadataFn(propertyMetadata);
            }
            else {
                if (jsonObject && jsonObject[key] !== undefined) {
                    obj[key] = jsonObject[key];
                }
            }
        });
        return obj;
    };
    /*Returns the Serialized JSON String from Object*/
    SerilizationHelper.Serilize = function (obj) {
        var t = typeof (obj);
        if (t != "object" || obj === null) {
            // simple data type
            if (t == "string")
                obj = '"' + obj + '"';
            return String(obj);
        }
        else {
            // recurse array or object
            var n, v, json = [], arr = (obj && obj.constructor == Array);
            var check = false;
            for (n in obj) {
                check = true;
                v = obj[n];
                t = typeof (v);
                if (t == "string")
                    v = '"' + v + '"';
                else if (t == "function") {
                    check = false;
                    continue;
                }
                else if (t == "object" && v !== null && check)
                    v = SerilizationHelper.Serilize(v);
                json.push((arr ? "" : '"' + n + '":') + String(v));
            }
            var returnedJson = (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
            return returnedJson;
        }
    };
    SerilizationHelper.jsonMetadataKey = "JsonProperty";
    return SerilizationHelper;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/SerilizationHelper.js.map

/***/ },

/***/ 392:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ChildBenefitsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChildBenefitsComponent = (function () {
    function ChildBenefitsComponent() {
        this.pageTitle = 'Welcome to the Child Benefits Service';
    }
    ChildBenefitsComponent.prototype.ngOnInit = function () {
    };
    ChildBenefitsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-child-benefits',
            template: __webpack_require__(879),
            styles: [__webpack_require__(859)]
        }), 
        __metadata('design:paramtypes', [])
    ], ChildBenefitsComponent);
    return ChildBenefitsComponent;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/child-benefits.component.js.map

/***/ },

/***/ 393:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__child_benefits_routing_module__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__child_benefits_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_child_search_child_search_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_child_history_child_history_component__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_child_benefit_history_service__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_child_claimant_service__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__ = __webpack_require__(853);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_child_claimant_partner_child_claimant_partner_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_chb_claimant_child_details_chb_claimant_child_details_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_chb_history_ws_handler__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_child_complex_eligibility_ChildComplexEligibilityService__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_child_complex_eligibility_child_complex_eligibility_component__ = __webpack_require__(397);
/* harmony export (binding) */ __webpack_require__.d(exports, "ChildBenefitsModule", function() { return ChildBenefitsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var ChildBenefitsModule = (function () {
    function ChildBenefitsModule() {
    }
    ChildBenefitsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__child_benefits_routing_module__["a" /* ChildBenefitsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["OrderListModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["DataTableModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_child_benefit_history_service__["a" /* ChildBenefitHistoryService */], __WEBPACK_IMPORTED_MODULE_8__services_child_claimant_service__["a" /* ChildClaimantService */], __WEBPACK_IMPORTED_MODULE_12__services_chb_history_ws_handler__["a" /* ChbHistoryWSHandler */], __WEBPACK_IMPORTED_MODULE_13__components_child_complex_eligibility_ChildComplexEligibilityService__["a" /* ChildComplexEligibilityService */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__child_benefits_component__["a" /* ChildBenefitsComponent */], __WEBPACK_IMPORTED_MODULE_5__components_child_search_child_search_component__["a" /* ChildSearchComponent */], __WEBPACK_IMPORTED_MODULE_6__components_child_history_child_history_component__["a" /* ChildHistoryComponent */], __WEBPACK_IMPORTED_MODULE_10__components_child_claimant_partner_child_claimant_partner_component__["a" /* ChildClaimantPartnerComponent */], __WEBPACK_IMPORTED_MODULE_11__components_chb_claimant_child_details_chb_claimant_child_details_component__["a" /* ChbClaimantChildDetailsComponent */], __WEBPACK_IMPORTED_MODULE_14__components_child_complex_eligibility_child_complex_eligibility_component__["a" /* ChildComplexEligibilityComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], ChildBenefitsModule);
    return ChildBenefitsModule;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/child-benefits.module.js.map

/***/ },

/***/ 394:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_ClaimaintChildDetails__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_ChbClaimintBirthDetails__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_ChbClaimantBasicEligibilty__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_ChbChildEligibiltyExtraDetails__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_ChbChildClamaintEducationDetail__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_child_claimant_service__ = __webpack_require__(403);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ChbClaimantChildDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChbClaimantChildDetailsComponent = (function () {
    function ChbClaimantChildDetailsComponent(childClaimService) {
        this.childClaimService = childClaimService;
        this.success = false;
    }
    ChbClaimantChildDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chBClaimantDetails = new __WEBPACK_IMPORTED_MODULE_1__model_ClaimaintChildDetails__["a" /* ChbClaimantDetails */](new __WEBPACK_IMPORTED_MODULE_2__model_ChbClaimintBirthDetails__["a" /* ChbClaimantBirthDetails */](), new __WEBPACK_IMPORTED_MODULE_3__model_ChbClaimantBasicEligibilty__["a" /* ChbClaimantBasicEligibiltyDetails */](), new __WEBPACK_IMPORTED_MODULE_4__model_ChbChildEligibiltyExtraDetails__["a" /* ChbClaimantBasicEligibiltyExtraDetails */](), new __WEBPACK_IMPORTED_MODULE_5__model_ChbChildClamaintEducationDetail__["a" /* ChbClaimantEducationDetails */]());
        ;
        this.childClaimService.getCountry().then(function (countryData) { _this.countryList = countryData; });
        this.loadData();
        console.log("checking before " + JSON.stringify(this.chBClaimantDetails));
    };
    ChbClaimantChildDetailsComponent.prototype.ngOnChanges = function () {
        this.loadData();
    };
    ChbClaimantChildDetailsComponent.prototype.submit = function () {
        console.log("checking " + JSON.stringify(this.chBClaimantDetails.birthDetail.surname));
        this.success = true;
    };
    ChbClaimantChildDetailsComponent.prototype.loadData = function () {
        var _this = this;
        this.childClaimService.getChildDataAsObservable().subscribe(function (data) {
            _this.chBClaimantDetails = data;
            console.log("sub data" + JSON.stringify(data.birthDetail));
            // this.chBClaimantDetails.birthDetail=new ChbClaimantBirthDetails().deserialize(JSON.stringify(data.birthDetail));
        }, //Bind to view
        function (//Bind to view
            err) {
            // Log errors if any
            console.log(err);
        });
    };
    ChbClaimantChildDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chb-claimant-child-details',
            template: __webpack_require__(880),
            styles: [__webpack_require__(860)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__services_child_claimant_service__["a" /* ChildClaimantService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_child_claimant_service__["a" /* ChildClaimantService */]) === 'function' && _a) || Object])
    ], ChbClaimantChildDetailsComponent);
    return ChbClaimantChildDetailsComponent;
    var _a;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/chb-claimant-child-details.component.js.map

/***/ },

/***/ 395:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__architecture_reference_data_reference_data_service__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__architecture_reference_data_reference_data_enum__ = __webpack_require__(609);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ChildClaimantPartnerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChildClaimantPartnerComponent = (function () {
    function ChildClaimantPartnerComponent(referenceDataService) {
        this.referenceDataService = referenceDataService;
        this.pageTitle = 'Child Benefits-Claimant Partner Details';
    }
    ChildClaimantPartnerComponent.prototype.ngOnInit = function () {
        this.loadRefData();
    };
    ChildClaimantPartnerComponent.prototype.loadRefData = function () {
        this.refdata_Country = this.referenceDataService.getRefDataFromWSHandler(__WEBPACK_IMPORTED_MODULE_2__architecture_reference_data_reference_data_enum__["a" /* ReferenceDataType */].COUNTRY_TYPE);
        this.refdata_Status = this.referenceDataService.getRefDataFromWSHandler(__WEBPACK_IMPORTED_MODULE_2__architecture_reference_data_reference_data_enum__["a" /* ReferenceDataType */].STATUS_TYPE);
    };
    ChildClaimantPartnerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-child-claimant-partner',
            template: __webpack_require__(881),
            styles: [__webpack_require__(861)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__architecture_reference_data_reference_data_service__["a" /* ReferenceDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__architecture_reference_data_reference_data_service__["a" /* ReferenceDataService */]) === 'function' && _a) || Object])
    ], ChildClaimantPartnerComponent);
    return ChildClaimantPartnerComponent;
    var _a;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/child-claimant-partner.component.js.map

/***/ },

/***/ 396:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ChildComplexEligibilityServiceHandler__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__architecture_logging_logging_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__architecture_serilization_SerilizationHelper__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ChildComplexEligibilityService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChildComplexEligibilityService = (function () {
    function ChildComplexEligibilityService(logger, http) {
        this.logger = logger;
        this.http = http;
        this.ComplexEligibilityServiceHandler = new __WEBPACK_IMPORTED_MODULE_0__ChildComplexEligibilityServiceHandler__["a" /* ChildComplexEligibilityServiceHandler */](this.logger, this.http);
    }
    ChildComplexEligibilityService.prototype.postData = function (childComplexEligibilty) {
        this.logger.info(__WEBPACK_IMPORTED_MODULE_3__architecture_serilization_SerilizationHelper__["a" /* SerilizationHelper */].Serilize(childComplexEligibilty));
        console.log("post object is " + __WEBPACK_IMPORTED_MODULE_3__architecture_serilization_SerilizationHelper__["a" /* SerilizationHelper */].Serilize(childComplexEligibilty));
        return this.ComplexEligibilityServiceHandler.post(childComplexEligibilty);
    };
    ChildComplexEligibilityService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__architecture_logging_logging_service__["a" /* LoggingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__architecture_logging_logging_service__["a" /* LoggingService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _b) || Object])
    ], ChildComplexEligibilityService);
    return ChildComplexEligibilityService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/ChildComplexEligibilityService.js.map

/***/ },

/***/ 397:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__architecture_validation_BuildFormHelper__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ChildComplexEligibilityValidator__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__child_benefits_domain_ChildComplexEligibilty__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ChildComplexEligibilityService__ = __webpack_require__(396);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ChildComplexEligibilityComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChildComplexEligibilityComponent = (function (_super) {
    __extends(ChildComplexEligibilityComponent, _super);
    function ChildComplexEligibilityComponent(fb, service) {
        _super.call(this, new __WEBPACK_IMPORTED_MODULE_2__ChildComplexEligibilityValidator__["a" /* ChildComplexEligibilityValidation */](fb));
        this.fb = fb;
        this.service = service;
        this.UserName = "MR K BOLAM";
    }
    ChildComplexEligibilityComponent.prototype.ngOnInit = function () { };
    ChildComplexEligibilityComponent.prototype.onSubmit = function () {
        this.childComplexEligibilty = this.getSubmittedValues();
        this.formSubmittedMessage = this.service.postData(this.childComplexEligibilty);
        this.formSubmittedMessage = "Details Saved Successfully";
    };
    ChildComplexEligibilityComponent.prototype.reset = function () {
        this.childComplexEligibilty = new __WEBPACK_IMPORTED_MODULE_4__child_benefits_domain_ChildComplexEligibilty__["a" /* ChildComplexEligibilty */]();
        this.resetInput();
        this.formSubmittedMessage = "";
    };
    ChildComplexEligibilityComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'child-complex-eligibility',
            template: __webpack_require__(882),
            styles: [__webpack_require__(862)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__ChildComplexEligibilityService__["a" /* ChildComplexEligibilityService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__ChildComplexEligibilityService__["a" /* ChildComplexEligibilityService */]) === 'function' && _b) || Object])
    ], ChildComplexEligibilityComponent);
    return ChildComplexEligibilityComponent;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_1__architecture_validation_BuildFormHelper__["a" /* BuildFormHelper */]));
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/child-complex-eligibility.component.js.map

/***/ },

/***/ 398:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_child_benefit_history_service__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__architecture_logging_logging_service__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ChildHistoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChildHistoryComponent = (function () {
    function ChildHistoryComponent(childBenefitHistoryService, loggingService) {
        this.childBenefitHistoryService = childBenefitHistoryService;
        this.loggingService = loggingService;
    }
    ChildHistoryComponent.prototype.ngOnInit = function () {
        this.ChildDataHistory = this.childBenefitHistoryService.getHistory();
        //(ChildDataHistorys => this.ChildDataHistory = ChildDataHistorys);
        //alert(this.ChildDataHistory);
    };
    ChildHistoryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-child-history',
            template: __webpack_require__(883),
            styles: [__webpack_require__(863)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_child_benefit_history_service__["a" /* ChildBenefitHistoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_child_benefit_history_service__["a" /* ChildBenefitHistoryService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__architecture_logging_logging_service__["a" /* LoggingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__architecture_logging_logging_service__["a" /* LoggingService */]) === 'function' && _b) || Object])
    ], ChildHistoryComponent);
    return ChildHistoryComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/child-history.component.js.map

/***/ },

/***/ 399:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_child_search_handler_service__ = __webpack_require__(621);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ChildSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChildSearchComponent = (function () {
    function ChildSearchComponent(childrenService) {
        this.childrenService = childrenService;
        this.birthNumber = false;
        this.nameAndORDOB = false;
        this.pageTitle = 'Child Search';
    }
    ChildSearchComponent.prototype.ngOnInit = function () {
        this.cols = [
            { field: 'birthNumberVal', header: 'Birth Number' },
            { field: 'forenameName', header: 'Child First Name' },
            { field: 'otherName', header: 'Child Other Names' },
            { field: 'surnameName', header: 'Child Surname' },
            { field: 'dateOfBirth', header: 'Date of birth' },
            { field: 'nino', header: 'Claimants NINO' }
        ];
        this.birthNumber = true;
        this.nameAndORDOB = false;
    };
    ChildSearchComponent.prototype.update = function (value) {
        this.birthNumberValue = value;
        this.getHeroes(this.birthNumberValue);
    };
    ChildSearchComponent.prototype.getHeroes = function (value) {
        var _this = this;
        this.childrenService.get()
            .subscribe(function (children) { return _this.children = children.filter(function (data) { return data.birthNumberVal == value; }); });
    };
    ChildSearchComponent.prototype.toggleBirthNumber = function (e) {
        if (e.target.checked) {
            this.nameAndORDOB = false;
            this.birthNumber = true;
        }
        else {
            this.nameAndORDOB = true;
            this.birthNumber = false;
        }
    };
    ChildSearchComponent.prototype.toggleNameAndORDOB = function (e) {
        if (e.target.checked) {
            this.birthNumber = false;
            this.nameAndORDOB = true;
            this.birthNumberValue = null;
        }
        else {
            this.nameAndORDOB = false;
            this.birthNumber = true;
        }
    };
    ChildSearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-child-search',
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_child_search_handler_service__["a" /* ChildSearchHandler */]],
            template: __webpack_require__(884),
            styles: [__webpack_require__(864)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_child_search_handler_service__["a" /* ChildSearchHandler */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_child_search_handler_service__["a" /* ChildSearchHandler */]) === 'function' && _a) || Object])
    ], ChildSearchComponent);
    return ChildSearchComponent;
    var _a;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/child-search.component.js.map

/***/ },

/***/ 400:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ChildComplexEligibilty; });
var ChildComplexEligibilty = (function () {
    function ChildComplexEligibilty() {
    }
    return ChildComplexEligibilty;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/ChildComplexEligibilty.js.map

/***/ },

/***/ 401:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_retryWhen__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_retryWhen___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_retryWhen__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_timeout__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_retry__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__architecture_message_handler_base_ws_handler__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__architecture_logging_logging_service__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ChbHistoryWSHandler; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ChbHistoryWSHandler = (function (_super) {
    __extends(ChbHistoryWSHandler, _super);
    function ChbHistoryWSHandler(http, logger) {
        _super.call(this, http, logger);
        this.logger = logger;
        this.url = '../../assets/data/childHistoryData.json';
    }
    ChbHistoryWSHandler.prototype.getHistory = function () {
        this.logger.log("getHistory() called ");
        this.extractResponseData = function (res) {
            var body = res.json();
            return body.data || {};
        };
        return this.get();
    };
    ChbHistoryWSHandler.prototype.postUpdate = function () {
        //this.url = "POST URL"
        this.extractResponseData = function (res) {
            var body = res.json();
            return body.data || {};
        };
        return this.get();
    };
    ChbHistoryWSHandler.prototype.extractResponseData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    ChbHistoryWSHandler.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(errMsg);
    };
    ChbHistoryWSHandler = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_11__architecture_logging_logging_service__["a" /* LoggingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_11__architecture_logging_logging_service__["a" /* LoggingService */]) === 'function' && _b) || Object])
    ], ChbHistoryWSHandler);
    return ChbHistoryWSHandler;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_10__architecture_message_handler_base_ws_handler__["a" /* BaseWSHandler */]));
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/chb-history-ws-handler.js.map

/***/ },

/***/ 402:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_retryWhen__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_retryWhen___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_retryWhen__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_timeout__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_retry__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__architecture_logging_logging_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chb_history_ws_handler__ = __webpack_require__(401);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ChildBenefitHistoryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ChildBenefitHistoryService = (function () {
    function ChildBenefitHistoryService(chbHistoryWSHandler, logger) {
        this.chbHistoryWSHandler = chbHistoryWSHandler;
        this.logger = logger;
        this.url = '../../assets/data/childHistoryData.json';
    }
    ChildBenefitHistoryService.prototype.getHistory = function () {
        var _this = this;
        console.log("get history called");
        this.logger.log("get history called");
        var array = [];
        this.chbHistoryWSHandler.getHistory().subscribe(function (data) { }, function (error) { _this.logger.log(error); });
        return array;
    };
    ChildBenefitHistoryService.prototype.postUpdates = function () {
        return this.chbHistoryWSHandler.postUpdate();
    };
    ChildBenefitHistoryService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9__chb_history_ws_handler__["a" /* ChbHistoryWSHandler */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_9__chb_history_ws_handler__["a" /* ChbHistoryWSHandler */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__architecture_logging_logging_service__["a" /* LoggingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__architecture_logging_logging_service__["a" /* LoggingService */]) === 'function' && _b) || Object])
    ], ChildBenefitHistoryService);
    return ChildBenefitHistoryService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/child-benefit-history.service.js.map

/***/ },

/***/ 403:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(899);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ChildClaimantService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChildClaimantService = (function () {
    function ChildClaimantService(http) {
        this.http = http;
    }
    ChildClaimantService.prototype.getCountry = function () {
        return this.http.get('./assets/data/Country.json')
            .toPromise()
            .then(function (res) { return res.json().data; })
            .then(function (data) { return data; });
    };
    ChildClaimantService.prototype.getChildDataAsObservable = function () {
        return this.http.get('./assets/data/ChildClaimaintData.json')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    ChildClaimantService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], ChildClaimantService);
    return ChildClaimantService;
    var _a;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/child-claimant.service.js.map

/***/ },

/***/ 404:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logo_logo_component__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_component__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__icon_icon_component__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dash_panel_dash_panel_component__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__side_menu_side_menu_component__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__search_search_component__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__heading_heading_component__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__form_actions_form_actions_component__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__subheading_subheading_component__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__alert_alert_component__ = __webpack_require__(622);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CommonUiModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var CommonUiModule = (function () {
    function CommonUiModule() {
    }
    CommonUiModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__logo_logo_component__["a" /* LogoComponent */], __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_6__icon_icon_component__["a" /* IconComponent */], __WEBPACK_IMPORTED_MODULE_7__dash_panel_dash_panel_component__["a" /* DashPanelComponent */], __WEBPACK_IMPORTED_MODULE_8__side_menu_side_menu_component__["a" /* SideMenuComponent */], __WEBPACK_IMPORTED_MODULE_9__search_search_component__["a" /* SearchComponent */], __WEBPACK_IMPORTED_MODULE_10__heading_heading_component__["a" /* HeadingComponent */], __WEBPACK_IMPORTED_MODULE_11__form_actions_form_actions_component__["a" /* FormActionsComponent */], __WEBPACK_IMPORTED_MODULE_12__subheading_subheading_component__["a" /* SubheadingComponent */], __WEBPACK_IMPORTED_MODULE_13__alert_alert_component__["a" /* AlertComponent */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__logo_logo_component__["a" /* LogoComponent */],
                __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__icon_icon_component__["a" /* IconComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dash_panel_dash_panel_component__["a" /* DashPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_8__side_menu_side_menu_component__["a" /* SideMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_9__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_10__heading_heading_component__["a" /* HeadingComponent */],
                __WEBPACK_IMPORTED_MODULE_11__form_actions_form_actions_component__["a" /* FormActionsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__subheading_subheading_component__["a" /* SubheadingComponent */],
                __WEBPACK_IMPORTED_MODULE_13__alert_alert_component__["a" /* AlertComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CommonUiModule);
    return CommonUiModule;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/common-ui.module.js.map

/***/ },

/***/ 405:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__architecture_navigation_navigation_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__architecture_config_config_service__ = __webpack_require__(189);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DashboardComponent; });
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
    function DashboardComponent(navigationService, configDataService) {
        this.configDataService = configDataService;
        navigationService.setRoutes('');
    }
    DashboardComponent.prototype.ngOnInit = function () {
        console.log(this.configDataService.getConfig('baseURL'));
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(896),
            styles: [__webpack_require__(876)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__architecture_navigation_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__architecture_navigation_navigation_service__["a" /* NavigationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__architecture_config_config_service__["a" /* ConfigService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__architecture_config_config_service__["a" /* ConfigService */]) === 'function' && _b) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/dashboard.component.js.map

/***/ },

/***/ 406:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__architecture_config_config_service__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__architecture_navigation_navigation_service__ = __webpack_require__(131);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageNotFoundComponent = (function () {
    function PageNotFoundComponent(navigationService, configDataService) {
        this.configDataService = configDataService;
        navigationService.setRoutes('');
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
        var baseurl = this.configDataService.getConfig('baseURL');
        console.log(baseurl);
    };
    PageNotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(897),
            styles: [__webpack_require__(877)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__architecture_navigation_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__architecture_navigation_navigation_service__["a" /* NavigationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__architecture_config_config_service__["a" /* ConfigService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__architecture_config_config_service__["a" /* ConfigService */]) === 'function' && _b) || Object])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/page-not-found.component.js.map

/***/ },

/***/ 407:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__architecture_architecture_module__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_ui_common_ui_module__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__itmp_browser_itmp_browser_module__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_breadcrumb_ng2_breadcrumb__ = __webpack_require__(268);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [],
            exports: [
                // Angular Modules
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* HttpModule */],
                // Custom Modules
                __WEBPACK_IMPORTED_MODULE_4__architecture_architecture_module__["a" /* ArchitectureModule */],
                __WEBPACK_IMPORTED_MODULE_5__common_ui_common_ui_module__["a" /* CommonUiModule */],
                __WEBPACK_IMPORTED_MODULE_6__itmp_browser_itmp_browser_module__["a" /* ItmpBrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_breadcrumb_ng2_breadcrumb__["a" /* Ng2BreadcrumbModule */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/shared.module.js.map

/***/ },

/***/ 478:
/***/ function(module, exports, __webpack_require__) {

var map = {
	"./child-benefits/child-benefits.module": [
		393
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 478;


/***/ },

/***/ 479:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(604);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/main.js.map

/***/ },

/***/ 55:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logger__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logger_ws_handler__ = __webpack_require__(270);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoggingService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// For browsers that don't implement the debug method, log will be used instead.
var CONSOLE_DEBUG_METHOD = console['debug'] ? 'debug' : 'log';
var LoggingService = (function (_super) {
    __extends(LoggingService, _super);
    function LoggingService(webservice) {
        _super.call(this);
        this.webservice = webservice;
    }
    LoggingService.prototype.assert = function (assertion, message) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        if (this.isErrorEnabled()) {
            !this.production && (console && console.assert) && console.assert.apply(console, [assertion, message].concat(args));
            !assertion && this.subscribe.apply(this, [message].concat(args));
        }
    };
    LoggingService.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        if (this.isErrorEnabled()) {
            !this.production && (console && console.error) && console.error.apply(console, args);
            this.subscribe.apply(this, args);
        }
    };
    LoggingService.prototype.fatal = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        if (this.isErrorEnabled()) {
            this.subscribe.apply(this, args);
        }
    };
    LoggingService.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        if (this.isInfoEnabled()) {
            !this.production && (console && console.warn) && console.warn.apply(console, args);
            this.subscribe.apply(this, args);
        }
    };
    LoggingService.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        if (this.isInfoEnabled()) {
            !this.production && (console && console.info) && console.info.apply(console, args);
            this.subscribe.apply(this, args);
        }
    };
    LoggingService.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        if (this.isDebugEnabled()) {
            !this.production && (console && console.log)
                && (_a = console)[CONSOLE_DEBUG_METHOD].apply(_a, args);
            this.subscribe.apply(this, args);
        }
        var _a;
    };
    LoggingService.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        if (this.isInfoEnabled()) {
            !this.production && (console && console.log) && console.log.apply(console, args);
            this.subscribe.apply(this, args);
        }
    };
    LoggingService.prototype.group = function (name) {
        this.isErrorEnabled() && !this.production
            && (console && console.group) && console.group(name);
    };
    LoggingService.prototype.groupEnd = function () {
        this.isErrorEnabled() && !this.production
            && (console && console.groupEnd) && console.groupEnd();
    };
    LoggingService.prototype.subscribe = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        (_a = this.webservice).post.apply(_a, args).subscribe(function () { }, function (error) { console.log(error); });
        var _a;
    };
    LoggingService.prototype.sendToServer = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return (_a = this.webservice).post.apply(_a, args);
        var _a;
    };
    LoggingService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__logger_ws_handler__["a" /* LoggerWSHandler */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__logger_ws_handler__["a" /* LoggerWSHandler */]) === 'function' && _a) || Object])
    ], LoggingService);
    return LoggingService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_1__logger__["a" /* Logger */]));
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/logging.service.js.map

/***/ },

/***/ 602:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__itmp_browser_components_dashboard_dashboard_component__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__itmp_browser_components_page_not_found_page_not_found_component__ = __webpack_require__(406);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var routes = [
    // Dashboard
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__itmp_browser_components_dashboard_dashboard_component__["a" /* DashboardComponent */], data: { title: 'Dashboard' } },
    // Child Benefits
    {
        path: 'child-benefits',
        loadChildren: './child-benefits/child-benefits.module#ChildBenefitsModule',
        data: { title: 'Child Benefits', preload: true }
    },
    // 404
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__itmp_browser_components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */], data: { title: 'Page Not Found' } },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/app-routing.module.js.map

/***/ },

/***/ 603:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_breadcrumb_ng2_breadcrumb__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__architecture_config_config_service__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__architecture_logging_logging_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__architecture_help_help_service__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environment__ = __webpack_require__(132);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppComponent = (function () {
    function AppComponent(titleService, router, activatedRoute, breadcrumbService, logger, help, configDataService) {
        var _this = this;
        this.breadcrumbService = breadcrumbService;
        this.logger = logger;
        this.help = help;
        this.configDataService = configDataService;
        breadcrumbService.hideRoute('/dashboard');
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_6__angular_router__["NavigationEnd"]) {
                var title = _this.help.getTitle(router.routerState, router.routerState.root).join(' - ');
                titleService.setTitle(title + ' | ITMP Browser');
            }
        });
        logger.log('app component constructed');
    }
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    //AppComponent initialization lifecycle hook. Print the current environment value from configuration
    AppComponent.prototype.ngOnInit = function () {
        this.logger.log("environment:" + __WEBPACK_IMPORTED_MODULE_7__environment__["a" /* environment */].production);
        var baseurl = this.configDataService.getConfig('baseURL');
        this.logger.log(baseurl);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(878),
            styles: [__webpack_require__(858)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["Title"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["Title"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__angular_router__["Router"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__angular_router__["ActivatedRoute"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_breadcrumb_ng2_breadcrumb__["b" /* BreadcrumbService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ng2_breadcrumb_ng2_breadcrumb__["b" /* BreadcrumbService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__architecture_logging_logging_service__["a" /* LoggingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__architecture_logging_logging_service__["a" /* LoggingService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__architecture_help_help_service__["a" /* HelpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__architecture_help_help_service__["a" /* HelpService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__architecture_config_config_service__["a" /* ConfigService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__architecture_config_config_service__["a" /* ConfigService */]) === 'function' && _g) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/app.component.js.map

/***/ },

/***/ 604:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__child_benefits_child_benefits_module__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__architecture_navigation_navigation_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__architecture_logging_logger_ws_handler__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environment__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__architecture_error_handler_custom_error_handler__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__architecture_reference_data_reference_data_service__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__architecture_reference_data_reference_data_ws_handler__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__architecture_config_config_service__ = __webpack_require__(189);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__child_benefits_child_benefits_module__["ChildBenefitsModule"],
            ],
            providers: [
                // { provide: APP_INITIALIZER, useFactory: (config: ConfigService) => () => config.load(), deps: [ConfigService], multi: true },
                __WEBPACK_IMPORTED_MODULE_12__architecture_config_config_service__["a" /* ConfigService */],
                __WEBPACK_IMPORTED_MODULE_10__architecture_reference_data_reference_data_service__["a" /* ReferenceDataService */],
                __WEBPACK_IMPORTED_MODULE_11__architecture_reference_data_reference_data_ws_handler__["a" /* ReferenceDataWSHandler */],
                __WEBPACK_IMPORTED_MODULE_7__architecture_logging_logger_ws_handler__["a" /* LoggerWSHandler */],
                __WEBPACK_IMPORTED_MODULE_6__architecture_navigation_navigation_service__["a" /* NavigationService */],
                __WEBPACK_IMPORTED_MODULE_7__architecture_logging_logger_ws_handler__["b" /* LOGGER_WS_HANDLER_PROVIDER */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_7__architecture_logging_logger_ws_handler__["b" /* LOGGER_WS_HANDLER_PROVIDER */],
                    useValue: {
                        url: __WEBPACK_IMPORTED_MODULE_8__environment__["a" /* environment */].loggerURL,
                    }
                },
                __WEBPACK_IMPORTED_MODULE_9__architecture_error_handler_custom_error_handler__["a" /* ERROR_HANDLER_PROVIDERS */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_9__architecture_error_handler_custom_error_handler__["a" /* ERROR_HANDLER_PROVIDERS */],
                    useValue: {
                        rethrowError: false,
                        unwrapError: false
                    }
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/app.module.js.map

/***/ },

/***/ 605:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_breadcrumb_ng2_breadcrumb__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logging_logging_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__help_help_service__ = __webpack_require__(269);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ArchitectureModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArchitectureModule = (function () {
    function ArchitectureModule() {
    }
    ArchitectureModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2_ng2_breadcrumb_ng2_breadcrumb__["b" /* BreadcrumbService */],
                __WEBPACK_IMPORTED_MODULE_3__logging_logging_service__["a" /* LoggingService */],
                __WEBPACK_IMPORTED_MODULE_4__help_help_service__["a" /* HelpService */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ArchitectureModule);
    return ArchitectureModule;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/architecture.module.js.map

/***/ },

/***/ 606:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logging_logging_service__ = __webpack_require__(55);
/* unused harmony export ERROR_HANDLER_OPTIONS */
/* unused harmony export CustomErrorHandler */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ERROR_HANDLER_PROVIDERS; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ERROR_HANDLER_OPTIONS = {
    rethrowError: false,
    unwrapError: false
};
var CustomErrorHandler = (function () {
    //Initialize the service.
    // --
    // CAUTION: The core implementation of the ErrorHandler class accepts a boolean
    // parameter, `rethrowError`; however, this is not part of the interface for the
    // class. This is being done with an Options object (which is being defaulted in the providers).
    function CustomErrorHandler(logService, options) {
        this.logService = logService;
        this.options = options;
    }
    // ---
    // PUBLIC METHODS.
    // ---
    // Handle the given error.
    CustomErrorHandler.prototype.handleError = function (error) {
        // Log to the console.
        try {
            console.group("ErrorHandler");
            console.error(error.message);
            console.error(error.stack);
            console.groupEnd();
        }
        catch (handlingError) {
            console.group("ErrorHandler");
            console.warn("Error when trying to output error.");
            console.error(handlingError);
            console.groupEnd();
        }
        // Send to the error-logging service.
        try {
            this.options.unwrapError
                ? this.logService.error(this.findOriginalError(error))
                : this.logService.error(error);
        }
        catch (loggingError) {
            console.group("ErrorHandler");
            console.warn("Error when trying to log error to", this.logService);
            console.error(loggingError);
            console.groupEnd();
        }
        if (this.options.rethrowError) {
            throw (error);
        }
    };
    // ---
    // PRIVATE METHODS.
    // ---
    // Attempt to find the underlying error in the given Wrapped error.
    CustomErrorHandler.prototype.findOriginalError = function (error) {
        while (error && error.originalError) {
            error = error.originalError;
        }
        return (error);
    };
    CustomErrorHandler = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(ERROR_HANDLER_OPTIONS)), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__logging_logging_service__["a" /* LoggingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__logging_logging_service__["a" /* LoggingService */]) === 'function' && _a) || Object, Object])
    ], CustomErrorHandler);
    return CustomErrorHandler;
    var _a;
}());
// Collection of providers used for this service at the module level.
// Notice that we are overriding the CORE ErrorHandler with our own class definition.
// --
// CAUTION: These are at the BOTTOM of the file so that we don't have to worry about
// creating futureRef() and hoisting behavior.
var ERROR_HANDLER_PROVIDERS = [
    {
        provide: ERROR_HANDLER_OPTIONS,
        useValue: ERROR_HANDLER_OPTIONS
    },
    {
        provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"],
        useClass: CustomErrorHandler
    }
];
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/custom-error-handler.js.map

/***/ },

/***/ 607:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LogMessage; });
var LogMessage = (function () {
    function LogMessage(message) {
        this.message = message;
    }
    return LogMessage;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/LogMessage.js.map

/***/ },

/***/ 608:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environment__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__level_enum__ = __webpack_require__(388);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Logger; });


var Logger = (function () {
    function Logger() {
        var _this = this;
        // Error level
        this.isErrorEnabled = function () { return _this.level >= __WEBPACK_IMPORTED_MODULE_1__level_enum__["a" /* Level */].ERROR; };
        this.isWarnEnabled = function () { return _this.level >= __WEBPACK_IMPORTED_MODULE_1__level_enum__["a" /* Level */].WARN; };
        this.isInfoEnabled = function () { return _this.level >= __WEBPACK_IMPORTED_MODULE_1__level_enum__["a" /* Level */].INFO; };
        this.isDebugEnabled = function () { return _this.level >= __WEBPACK_IMPORTED_MODULE_1__level_enum__["a" /* Level */].DEBUG; };
        this.isLogEnabled = function () { return _this.level >= __WEBPACK_IMPORTED_MODULE_1__level_enum__["a" /* Level */].LOG; };
        this.production = __WEBPACK_IMPORTED_MODULE_0__environment__["a" /* environment */].production;
        this.level = __WEBPACK_IMPORTED_MODULE_0__environment__["a" /* environment */].loggerLevel;
    }
    // Set production
    Logger.prototype.setProduction = function (production) {
        this.production = production;
    };
    // Set level
    Logger.prototype.setLevel = function (level) {
        this.level = level;
    };
    ;
    return Logger;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/logger.js.map

/***/ },

/***/ 609:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ReferenceDataType; });
var ReferenceDataType;
(function (ReferenceDataType) {
    ReferenceDataType[ReferenceDataType["COUNTRY_TYPE"] = "countries"] = "COUNTRY_TYPE";
    ReferenceDataType[ReferenceDataType["STATUS_TYPE"] = "status"] = "STATUS_TYPE";
})(ReferenceDataType || (ReferenceDataType = {}));
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/reference-data.enum.js.map

/***/ },

/***/ 610:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ReferenceData; });
var ReferenceData = (function () {
    function ReferenceData(type, id, start_date, end_date, VALUE) {
        this.type = type;
        this.id = id;
        this.start_date = start_date;
        this.end_date = end_date;
        this.VALUE = VALUE;
    }
    return ReferenceData;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/reference-data.js.map

/***/ },

/***/ 611:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BuildFormHelper; });
var BuildFormHelper = (function () {
    function BuildFormHelper(customValidator) {
        this.customValidator = customValidator;
        this.formErrors = customValidator.getFormError();
        this.build(this.customValidator, this.formErrors);
    }
    BuildFormHelper.prototype.build = function (customValidator, formErrors) {
        //this.validationForm= new FormGroup(customValidator.BuildFormControl());
        this.validationForm = customValidator.BuildFormControl();
        customValidator.subscribeChanges(this.validationForm, formErrors);
    };
    BuildFormHelper.prototype.resetInput = function () {
        this.build(this.customValidator, this.formErrors);
    };
    BuildFormHelper.prototype.getSubmittedValues = function () {
        return this.validationForm.value;
    };
    return BuildFormHelper;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/BuildFormHelper.js.map

/***/ },

/***/ 612:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ValidationHelper; });

var ValidationHelper = (function () {
    function ValidationHelper(fb) {
        this.fb = fb;
        /* Must overide this property to add custom validation messages specific to your model  */
        this.validationMessages = {
            'default': {
                'required': 'default is required.',
                'minlength': 'default must be at least 4 characters long.',
                'maxlength': 'default cannot be more than 24 characters long.'
            }
        };
        /* Must overide this property to add fields used in validation specific to your model  */
        this.formErrors = {
            'default': '',
        };
    }
    /* Returns  */
    ValidationHelper.prototype.getValidationMessages = function () {
        return this.validationMessages;
    };
    ValidationHelper.prototype.getFormError = function () {
        return this.formErrors;
    };
    ValidationHelper.prototype.onValueChanged = function (validationForm, formErrors, data) {
        if (!validationForm) {
            return;
        }
        var form = validationForm;
        var validationMessages = this.getValidationMessages();
        console.log(formErrors);
        for (var field in formErrors) {
            // clear previous error message (if any)
            formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = validationMessages[field];
                for (var key in control.errors) {
                    formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    ValidationHelper.prototype.subscribeChanges = function (validationForm, formErrors) {
        var _this = this;
        validationForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(validationForm, formErrors, data); });
        this.onValueChanged(validationForm, formErrors); // (re)set validation messages now
    };
    ValidationHelper.prototype.BuildFormControlExpample = function (input) {
        this.validationForm = this.fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].minLength(4)]],
            nino: ['', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].minLength(9)]],
            surname: ['', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].minLength(4)]],
            dob: ['', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required]],
            dateOfEmp: ['', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required]],
        });
        return this.validationForm;
    };
    return ValidationHelper;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/ValidationHelper.js.map

/***/ },

/***/ 613:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__architecture_navigation_navigation_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__child_benefits_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_child_search_child_search_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_child_history_child_history_component__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_child_claimant_partner_child_claimant_partner_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_chb_claimant_child_details_chb_claimant_child_details_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_child_complex_eligibility_child_complex_eligibility_component__ = __webpack_require__(397);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ChildBenefitsRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__child_benefits_component__["a" /* ChildBenefitsComponent */], data: { title: 'Child Benefits' } },
    { path: 'child-search', component: __WEBPACK_IMPORTED_MODULE_4__components_child_search_child_search_component__["a" /* ChildSearchComponent */], data: { title: 'Child Search' } },
    { path: 'child-history', component: __WEBPACK_IMPORTED_MODULE_5__components_child_history_child_history_component__["a" /* ChildHistoryComponent */], data: { title: 'Child History' } },
    { path: 'child-claimant-partner', component: __WEBPACK_IMPORTED_MODULE_6__components_child_claimant_partner_child_claimant_partner_component__["a" /* ChildClaimantPartnerComponent */], data: { title: 'Child Claimant Partner' } },
    { path: 'chb-claimant-child-details', component: __WEBPACK_IMPORTED_MODULE_7__components_chb_claimant_child_details_chb_claimant_child_details_component__["a" /* ChbClaimantChildDetailsComponent */], data: { title: 'Chb Claimant Child Details' } },
    { path: 'chb-complex-eligibility', component: __WEBPACK_IMPORTED_MODULE_8__components_child_complex_eligibility_child_complex_eligibility_component__["a" /* ChildComplexEligibilityComponent */], data: { title: 'Chb Complex Eligibility' } },
];
var ChildBenefitsRoutingModule = (function () {
    function ChildBenefitsRoutingModule(navigationService) {
        navigationService.setRoutes(routes);
    }
    ChildBenefitsRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]],
            providers: []
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__architecture_navigation_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__architecture_navigation_navigation_service__["a" /* NavigationService */]) === 'function' && _a) || Object])
    ], ChildBenefitsRoutingModule);
    return ChildBenefitsRoutingModule;
    var _a;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/child-benefits-routing.module.js.map

/***/ },

/***/ 614:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ChbClaimantEducationDetails; });
var ChbClaimantEducationDetails = (function () {
    function ChbClaimantEducationDetails() {
    }
    return ChbClaimantEducationDetails;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/ChbChildClamaintEducationDetail.js.map

/***/ },

/***/ 615:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ChbClaimantBasicEligibiltyExtraDetails; });
var ChbClaimantBasicEligibiltyExtraDetails = (function () {
    function ChbClaimantBasicEligibiltyExtraDetails() {
    }
    return ChbClaimantBasicEligibiltyExtraDetails;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/ChbChildEligibiltyExtraDetails.js.map

/***/ },

/***/ 616:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ChbClaimantBasicEligibiltyDetails; });
var ChbClaimantBasicEligibiltyDetails = (function () {
    function ChbClaimantBasicEligibiltyDetails() {
    }
    return ChbClaimantBasicEligibiltyDetails;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/ChbClaimantBasicEligibilty.js.map

/***/ },

/***/ 617:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ChbClaimantBirthDetails; });
var ChbClaimantBirthDetails = (function () {
    function ChbClaimantBirthDetails() {
    }
    return ChbClaimantBirthDetails;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/ChbClaimintBirthDetails.js.map

/***/ },

/***/ 618:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ChbClaimantDetails; });
var ChbClaimantDetails = (function () {
    function ChbClaimantDetails(birthDetail1, eligibiltyDetail1, eligibiltyDetailExtra1, educationDetail1) {
        this.birthDetail1 = birthDetail1;
        this.eligibiltyDetail1 = eligibiltyDetail1;
        this.eligibiltyDetailExtra1 = eligibiltyDetailExtra1;
        this.educationDetail1 = educationDetail1;
        this.birthDetail = birthDetail1;
        this.eligibiltyDetail = eligibiltyDetail1;
        this.eligibiltyDetailExtra = eligibiltyDetailExtra1;
        this.educationDetail = educationDetail1;
    }
    return ChbClaimantDetails;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/ClaimaintChildDetails.js.map

/***/ },

/***/ 619:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__architecture_message_handler_base_ws_handler__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__architecture_serilization_SerilizationHelper__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__child_benefits_domain_ChildComplexEligibilty__ = __webpack_require__(400);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ChildComplexEligibilityServiceHandler; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



var ChildComplexEligibilityServiceHandler = (function (_super) {
    __extends(ChildComplexEligibilityServiceHandler, _super);
    function ChildComplexEligibilityServiceHandler(logger, http) {
        _super.call(this, http, logger);
        this.logger = logger;
        this.http = http;
        this.url = "/baseURL";
    }
    ChildComplexEligibilityServiceHandler.prototype.extractResponseData = function (res) {
        return __WEBPACK_IMPORTED_MODULE_1__architecture_serilization_SerilizationHelper__["a" /* SerilizationHelper */].deserialize(__WEBPACK_IMPORTED_MODULE_2__child_benefits_domain_ChildComplexEligibilty__["a" /* ChildComplexEligibilty */], res.json);
    };
    //The method that handle errors
    ChildComplexEligibilityServiceHandler.prototype.handleError = function (error) {
        this.logger.error("Error in the post service");
    };
    return ChildComplexEligibilityServiceHandler;
}(__WEBPACK_IMPORTED_MODULE_0__architecture_message_handler_base_ws_handler__["a" /* BaseWSHandler */]));
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/ChildComplexEligibilityServiceHandler.js.map

/***/ },

/***/ 620:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__architecture_validation_ValidationHelper__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ChildComplexEligibilityValidation; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


var ChildComplexEligibilityValidation = (function (_super) {
    __extends(ChildComplexEligibilityValidation, _super);
    function ChildComplexEligibilityValidation() {
        _super.apply(this, arguments);
        this.validationMessages = {
            'default': {
                'required': 'default is required.',
                'minlength': 'default must be at least 4 characters long.',
                'maxlength': 'default cannot be more than 24 characters long.'
            },
            'line1': {
                'required': 'Line 1 is required.'
            },
            'line2': {
                'required': 'Line 2 is required.'
            },
            'line3': {
                'required': 'Line 3 is required.'
            },
            'line4': {
                'required': 'Line 4 is required.'
            },
            'postcode': {
                'required': 'Postcode is required.',
                'invalidPostCode': 'Postcode is not Valid'
            }
        };
        this.formErrors = {
            'default': '',
            'line1': '',
            'line2': '',
            'line3': '',
            'line4': '',
            'postcode': ''
        };
    }
    ChildComplexEligibilityValidation.prototype.BuildFormControl = function (input) {
        this.validationForm = this.fb.group({
            line1: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            line2: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,]],
            line3: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            line4: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            postcode: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, this.PostCodeValidator()]]
        });
        return this.validationForm;
    };
    ChildComplexEligibilityValidation.prototype.PostCodeValidator = function () {
        return function (control) {
            var postcode = control.value;
            var regNI = /(GIR 0AA)|((([ABCDEFGHIJKLMNOPRSTUWYZ][0-9][0-9]?)|(([ABCDEFGHIJKLMNOPRSTUWYZ][ABCDEFGHKLMNOPQRSTUVWXY][0-9][0-9]?)|(([ABCDEFGHIJKLMNOPRSTUWYZ][0-9][ABCDEFGHJKSTUW])|([ABCDEFGHIJKLMNOPRSTUWYZ][ABCDEFGHKLMNOPQRSTUVWXY][0-9][ABEHMNPRVWXY])))) [0-9][ABDEFGHJLNPQRSTUWXYZ]{2})/;
            var no = regNI.test(postcode);
            return !no ? { 'invalidPostCode': { postcode: postcode } } : null;
        };
    };
    return ChildComplexEligibilityValidation;
}(__WEBPACK_IMPORTED_MODULE_0__architecture_validation_ValidationHelper__["a" /* ValidationHelper */]));
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/ChildComplexEligibilityValidator.js.map

/***/ },

/***/ 621:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__architecture_message_handler_base_ws_handler__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__architecture_logging_logging_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ws_config__ = __webpack_require__(636);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ChildSearchHandler; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ChildSearchHandler = (function (_super) {
    __extends(ChildSearchHandler, _super);
    function ChildSearchHandler(httpService, logger) {
        _super.call(this, httpService, logger);
        this.httpService = httpService;
        this.logger = logger;
        this.url = "" + __WEBPACK_IMPORTED_MODULE_7__ws_config__["a" /* TOKENS */].childSearchURL;
    }
    //Implement extractResponseData   
    ChildSearchHandler.prototype.extractResponseData = function (res) {
        alert("inside extract");
        var body = res.json().data;
        return body || {};
    };
    ChildSearchHandler.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    ChildSearchHandler = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__architecture_logging_logging_service__["a" /* LoggingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__architecture_logging_logging_service__["a" /* LoggingService */]) === 'function' && _b) || Object])
    ], ChildSearchHandler);
    return ChildSearchHandler;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_5__architecture_message_handler_base_ws_handler__["a" /* BaseWSHandler */]));
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/child-search-handler.service.js.map

/***/ },

/***/ 622:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AlertComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertComponent = (function () {
    function AlertComponent() {
    }
    AlertComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], AlertComponent.prototype, "type", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], AlertComponent.prototype, "title", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], AlertComponent.prototype, "text", void 0);
    AlertComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(885),
            styles: [__webpack_require__(865)]
        }), 
        __metadata('design:paramtypes', [])
    ], AlertComponent);
    return AlertComponent;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/alert.component.js.map

/***/ },

/***/ 623:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DashPanelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashPanelComponent = (function () {
    function DashPanelComponent() {
    }
    DashPanelComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], DashPanelComponent.prototype, "image", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], DashPanelComponent.prototype, "description", void 0);
    DashPanelComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dash-panel',
            template: __webpack_require__(886),
            styles: [__webpack_require__(866)]
        }), 
        __metadata('design:paramtypes', [])
    ], DashPanelComponent);
    return DashPanelComponent;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/dash-panel.component.js.map

/***/ },

/***/ 624:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.setYear();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.setYear = function () {
        var date = new Date();
        this.year = date.getFullYear();
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(887),
            styles: [__webpack_require__(867)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/footer.component.js.map

/***/ },

/***/ 625:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FormActionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormActionsComponent = (function () {
    function FormActionsComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    FormActionsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]) === 'function' && _a) || Object)
    ], FormActionsComponent.prototype, "group", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], FormActionsComponent.prototype, "parentPath", void 0);
    FormActionsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-form-actions',
            template: __webpack_require__(888),
            styles: [__webpack_require__(868)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === 'function' && _c) || Object])
    ], FormActionsComponent);
    return FormActionsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/form-actions.component.js.map

/***/ },

/***/ 626:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__architecture_help_help_service__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = (function () {
    function HeaderComponent(helpService, router) {
        this.helpService = helpService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["NavigationEnd"]; })
            .subscribe(function (event) {
            _this.query = _this.helpService.getQuery();
        });
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(889),
            styles: [__webpack_require__(869)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__architecture_help_help_service__["a" /* HelpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__architecture_help_help_service__["a" /* HelpService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === 'function' && _b) || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/header.component.js.map

/***/ },

/***/ 627:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HeadingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeadingComponent = (function () {
    function HeadingComponent() {
    }
    HeadingComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], HeadingComponent.prototype, "text", void 0);
    HeadingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-heading',
            template: __webpack_require__(890),
            styles: [__webpack_require__(870)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeadingComponent);
    return HeadingComponent;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/heading.component.js.map

/***/ },

/***/ 628:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return IconComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IconComponent = (function () {
    function IconComponent() {
    }
    IconComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], IconComponent.prototype, "iconClass", void 0);
    IconComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-icon',
            template: __webpack_require__(891),
            styles: [__webpack_require__(871)]
        }), 
        __metadata('design:paramtypes', [])
    ], IconComponent);
    return IconComponent;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/icon.component.js.map

/***/ },

/***/ 629:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LogoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoComponent = (function () {
    function LogoComponent() {
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    LogoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-logo',
            template: __webpack_require__(892),
            styles: [__webpack_require__(872)]
        }), 
        __metadata('design:paramtypes', [])
    ], LogoComponent);
    return LogoComponent;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/logo.component.js.map

/***/ },

/***/ 630:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(893),
            styles: [__webpack_require__(873)]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchComponent);
    return SearchComponent;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/search.component.js.map

/***/ },

/***/ 631:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__architecture_navigation_navigation_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SideMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SideMenuComponent = (function () {
    function SideMenuComponent(_eref, router, route, navigationService) {
        this._eref = _eref;
        this.router = router;
        this.route = route;
        this.navigationService = navigationService;
        this.subscribeToRoutes();
    }
    SideMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationEnd"]) {
                _this.displayRequiredComponents();
            }
        });
    };
    SideMenuComponent.prototype.subscribeToRoutes = function () {
        var _this = this;
        this.subscription = this.navigationService.routesAnnounced$.subscribe(function (routes) {
            _this.routes = routes;
        });
    };
    SideMenuComponent.prototype.toggleSideMenu = function () {
        var sideMenu = document.getElementById('side-menu');
        var main = document.getElementsByTagName('main')[0];
        var visibility = sideMenu.getAttribute('data-visible') == 'false' ? 'true' : 'false';
        sideMenu.setAttribute('data-visible', visibility);
        main.classList.toggle('no-menu');
    };
    SideMenuComponent.prototype.hideMenu = function () {
        var sideMenu = document.getElementById('side-menu');
        sideMenu.setAttribute('data-visible', 'false');
    };
    SideMenuComponent.prototype.showMenu = function () {
        var sideMenu = document.getElementById('side-menu');
        sideMenu.setAttribute('data-visible', 'true');
    };
    SideMenuComponent.prototype.mainMenu = function () {
        var main = document.getElementsByTagName('main')[0];
        main.classList.remove('no-menu');
    };
    SideMenuComponent.prototype.mainNoMenu = function () {
        var main = document.getElementsByTagName('main')[0];
        main.classList.add('no-menu');
    };
    SideMenuComponent.prototype.addDashboardLogo = function () {
        var logo = document.getElementById('logo');
        logo.classList.add('logo--dashboard');
    };
    SideMenuComponent.prototype.removeDashboardLogo = function () {
        var logo = document.getElementById('logo');
        logo.classList.remove('logo--dashboard');
    };
    SideMenuComponent.prototype.hideBreadcrumbs = function () {
        var breadcrumbs = document.getElementsByClassName('breadcrumb-container')[0];
        breadcrumbs.classList.add('breadcrumb-container--hidden');
    };
    SideMenuComponent.prototype.showBreadcrumbs = function () {
        var breadcrumbs = document.getElementsByClassName('breadcrumb-container')[0];
        breadcrumbs.classList.remove('breadcrumb-container--hidden');
    };
    SideMenuComponent.prototype.displayRequiredComponents = function () {
        // Page Width
        var width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        if (this.routes && width < 992) {
            this.hideMenu();
            this.removeDashboardLogo();
            this.showBreadcrumbs();
            this.mainMenu();
        }
        else if (this.routes) {
            this.showMenu();
            this.removeDashboardLogo();
            this.showBreadcrumbs();
            this.mainMenu();
        }
        else {
            this.hideMenu();
            this.addDashboardLogo();
            this.hideBreadcrumbs();
            this.mainNoMenu();
        }
    };
    SideMenuComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    SideMenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-side-menu',
            template: __webpack_require__(894),
            styles: [__webpack_require__(874)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__architecture_navigation_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__architecture_navigation_navigation_service__["a" /* NavigationService */]) === 'function' && _d) || Object])
    ], SideMenuComponent);
    return SideMenuComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/side-menu.component.js.map

/***/ },

/***/ 632:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SubheadingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubheadingComponent = (function () {
    function SubheadingComponent() {
    }
    SubheadingComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], SubheadingComponent.prototype, "text", void 0);
    SubheadingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-subheading',
            template: __webpack_require__(895),
            styles: [__webpack_require__(875)]
        }), 
        __metadata('design:paramtypes', [])
    ], SubheadingComponent);
    return SubheadingComponent;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/subheading.component.js.map

/***/ },

/***/ 633:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_ui_common_ui_module__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_dashboard_dashboard_component__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_page_not_found_page_not_found_component__ = __webpack_require__(406);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ItmpBrowserModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ItmpBrowserModule = (function () {
    function ItmpBrowserModule() {
    }
    ItmpBrowserModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"],
                __WEBPACK_IMPORTED_MODULE_3__common_ui_common_ui_module__["a" /* CommonUiModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__components_dashboard_dashboard_component__["a" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_5__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__components_dashboard_dashboard_component__["a" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_5__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], ItmpBrowserModule);
    return ItmpBrowserModule;
}());
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/itmp-browser.module.js.map

/***/ },

/***/ 634:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
    loggerURL: "www.microsoft.com"
};
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/environment.js.map

/***/ },

/***/ 635:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_array__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_core_js_es7_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_zone_js_dist_zone__ = __webpack_require__(1164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_zone_js_dist_zone__);

















//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/polyfills.js.map

/***/ },

/***/ 636:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TOKENS; });
// Configuration file to tokenize all WebService endpoints
var TOKENS = {
    //Define WS endpoints here
    // e.g - ChildSearchURL = '/api/childSearch'
    childClaimantURL: 'api',
    childSearchURL: 'api/childrendetails'
};
//# sourceMappingURL=C:/Chandresh_Documents/AngularAppRepo/AngularApp/src/ws-config.js.map

/***/ },

/***/ 858:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 859:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 860:
/***/ function(module, exports) {

module.exports = ".borderless tr td {\r\n  border: none !important;\r\n  padding: 0px !important;\r\n}\r\n\r\n.table-borderless tbody tr td,\r\n.table-borderless tbody tr th,\r\n.table-borderless thead tr th,\r\n.table-borderless thead tr td,\r\n.table-borderless tfoot tr th,\r\n.table-borderless tfoot tr td {\r\n  border: none;\r\n}\r\n\r\n#inner {\r\n  display: table;\r\n  margin: 0 auto;\r\n}\r\n\r\n.div-right {\r\n  float: right;\r\n  width: 160px;\r\n}\r\n\r\n.div-centered {\r\n  margin: 0 auto;\r\n  text-align: left;\r\n  width: 800px;\r\n}\r\n\r\n.div-left {\r\n  float: left;\r\n  width: 100px;\r\n}\r\n\r\ndiv-container {\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n"

/***/ },

/***/ 861:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 862:
/***/ function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n\r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442; /* red */\r\n}"

/***/ },

/***/ 863:
/***/ function(module, exports) {

module.exports = ".panel > .panel-heading {\r\n    background-image: none;\r\n    color: white;\r\n}\r\n"

/***/ },

/***/ 864:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 865:
/***/ function(module, exports) {

module.exports = ".alert {\r\n    margin-top: 20px;\r\n}"

/***/ },

/***/ 866:
/***/ function(module, exports) {

module.exports = ".dashboard__panel {\r\n  list-style: none;\r\n  text-align: center;\r\n  padding-top: 30px;\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.dashboard__panel ~ li {\r\n  list-style: none;\r\n}\r\n\r\n.dashboard__panel a {\r\n  display: inline-block;\r\n}\r\n\r\n.dashboard__panel img {\r\n  width: 200px;\r\n  height: 200px;\r\n  display: block;\r\n  margin: 0 auto;\r\n  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);\r\n}"

/***/ },

/***/ 867:
/***/ function(module, exports) {

module.exports = ".footer {\r\n    position: relative;\r\n    background-color: #dee0e2;\r\n    border-top: 1px solid #a1acb2;\r\n    z-index: 10000;\r\n    height: 50px;\r\n    clear: both;\r\n}\r\n\r\n.footer__text {\r\n    margin-bottom: 0;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 20px;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n}"

/***/ },

/***/ 868:
/***/ function(module, exports) {

module.exports = ".buttons-container {\r\n  padding: 20px 20px;\r\n  background: #ededed;\r\n  border: 1px solid #d4d4d4;\r\n  overflow: hidden;\r\n  margin-bottom: 15px;\r\n  border-radius: 5px;\r\n  width: 100%;\r\n  margin-top: 20px;\r\n  margin-bottom: 0;\r\n}"

/***/ },

/***/ 869:
/***/ function(module, exports) {

module.exports = ".header {\r\n  background-color: black;\r\n  color: white;\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n  z-index: 30000;\r\n  height: 70px;\r\n  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);\r\n  width: 100%;\r\n  top: 0;\r\n  position: fixed;\r\n}\r\n\r\n.header__icons {\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 10px;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n}\r\n\r\n.header__icons li {\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n}\r\n\r\n.header__icons li {\r\n  display: inline-block;\r\n  list-style: none;\r\n  line-height: 1;\r\n  vertical-align: middle;\r\n}\r\n\r\n.header__icons li a {\r\n  color: white;\r\n  font-size: 1.6em;\r\n  height: 100%;\r\n  display: block;\r\n}\r\n\r\n@media only screen and (max-width : 480px) {\r\n  .header__icons li a {\r\n    line-height: 1;\r\n  }\r\n}\r\n\r\n.header__icons__search {\r\n  display: none !important;\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n  .header__icons__search {\r\n    display: inline-block !important;\r\n  }\r\n}"

/***/ },

/***/ 870:
/***/ function(module, exports) {

module.exports = "#heading h1 {\r\n    margin-top: 0;\r\n}"

/***/ },

/***/ 871:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 872:
/***/ function(module, exports) {

module.exports = ".logo {\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 70px;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  -webkit-transition: left .2s cubic-bezier(0.0,0.0,0.3,1);\r\n  transition: left .2s cubic-bezier(0.0,0.0,0.3,1);\r\n}\r\n\r\n.logo--dashboard {\r\n  left: 20px;\r\n}\r\n\r\n@media only screen and (max-width : 480px) {\r\n  .logo {\r\n    padding-right: 0;\r\n  }\r\n}\r\n\r\n.logo img {\r\n  height: 38px;\r\n}"

/***/ },

/***/ 873:
/***/ function(module, exports) {

module.exports = ".search {\r\n    display: inline-block;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n\r\n.search input {\r\n    cursor: text;\r\n    height: 55px;\r\n    background: rgba(255,255,255,.25);\r\n    border-radius: 3px;\r\n    border: 0;\r\n    width: 660px;\r\n    padding: 10px 20px 10px 55px;\r\n    outline: none;\r\n    font-size: 1.6em;\r\n    font-weight: 300;\r\n}\r\n\r\n@media only screen and (max-width : 1200px) {\r\n  .search input {\r\n    width: 500px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width : 992px) {\r\n  .search input {\r\n    width: 300px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width : 800px) {\r\n  .search {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.search:before {\r\n    font-family: 'Glyphicons Halflings';\r\n    content: '\\e003';\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 20px;\r\n    color: darkgrey;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    font-size: 1.3em;\r\n}"

/***/ },

/***/ 874:
/***/ function(module, exports) {

module.exports = ".side-menu {\r\n    width: 280px;\r\n    z-index: 20000;\r\n    float: left;\r\n    position: relative;\r\n    left: 0;\r\n    -webkit-transition: left .2s cubic-bezier(0.0,0.0,0.2,1);\r\n    transition: left .2s cubic-bezier(0.0,0.0,0.2,1);\r\n}\r\n\r\n@media only screen and (max-width: 992px) {\r\n  .side-menu {\r\n    position: fixed;\r\n    top: 70px;\r\n    background: black;\r\n    min-height: calc(100vh - 70px);\r\n  }\r\n}\r\n\r\n.side-menu ul {\r\n  padding-top: 20px;\r\n}\r\n\r\n@media only screen and (max-width: 992px) {\r\n  .side-menu ul {\r\n    padding-top: 0;\r\n  }\r\n}\r\n\r\n\r\n.side-menu li {\r\n  list-style: none;\r\n}\r\n\r\n.side-menu[data-visible=\"false\"] {\r\n  left: -280px;\r\n}\r\n\r\n.side-menu[data-visible=\"true\"] {\r\n  left: 0;\r\n}\r\n\r\n.side-menu__list {\r\n  padding-left: 0;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.side-menu__list__item a {\r\n  color: #555;\r\n  padding: 15px 20px;\r\n  display: block;\r\n  text-decoration: none;\r\n}\r\n\r\n@media only screen and (max-width: 992px) {\r\n  .side-menu__list__item a {\r\n    color: white;\r\n    padding: 15px 20px;\r\n    display: block;\r\n    text-decoration: none;\r\n  }\r\n\r\n  .side-menu__list__item a:hover {\r\n    background-color: #3f3f3f !important;\r\n  }\r\n\r\n  .side-menu__list__item a.active:hover {\r\n    color: white;\r\n  }\r\n}\r\n  \r\n.side-menu__list__item a:hover {\r\n  background-color: #e1e1e1;\r\n}\r\n\r\n.side-menu__list__item a.active {\r\n  background-color: #d2e4ca;\r\n  color: #555;\r\n  font-weight: bold;\r\n}\r\n\r\n@media only screen and (max-width: 992px) {\r\n  .side-menu__list__item a.active {\r\n    background-color: #1e1f1d;\r\n    color: #fff;\r\n    font-weight: bold;\r\n  }\r\n}\r\n\r\n.side-menu__information {\r\n  background-color: white;\r\n  margin-left: 20px;\r\n  padding: 20px;\r\n  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);\r\n}\r\n\r\n@media only screen and (max-width: 992px) {\r\n  .side-menu__information {\r\n    margin-left: 0;\r\n    margin-top: 0;\r\n    box-shadow: 0;\r\n    background-color: #121312;\r\n    color: white;\r\n  }\r\n}\r\n\r\n.side-menu__information > div {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.side-menu__information > div:last-of-type {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.hamburger {\r\n    font-size: 1.6em;\r\n    position: fixed;\r\n    left: 25px;\r\n    top: 35px;\r\n    margin-top: -10px;\r\n    line-height: 1;\r\n    cursor: pointer;\r\n    cursor: hand;\r\n    z-index: 40000;\r\n    color: white;\r\n    -webkit-transition: -webkit-transform 0.2s cubic-bezier(0.0,0.0,0.2,1);\r\n    transition: -webkit-transform 0.2s cubic-bezier(0.0,0.0,0.2,1);\r\n    transition: transform 0.2s cubic-bezier(0.0,0.0,0.2,1);\r\n    transition: transform 0.2s cubic-bezier(0.0,0.0,0.2,1), -webkit-transform 0.2s cubic-bezier(0.0,0.0,0.2,1);\r\n}\r\n\r\n.hamburger:hover {\r\n  -webkit-transform: scale(1.15);\r\n          transform: scale(1.15);\r\n}"

/***/ },

/***/ 875:
/***/ function(module, exports) {

module.exports = ".subheading {\r\n    margin-top: 0;\r\n}"

/***/ },

/***/ 876:
/***/ function(module, exports) {

module.exports = ".dashboard__heading {\r\n  text-align: center;\r\n  padding-top: 15px;\r\n  padding-bottom: 15px;\r\n}\r\n\r\n.dashboard__heading h1 {\r\n  font-size: 1.6em;\r\n  font-weight: bold;\r\n}\r\n\r\n.dashboard__heading p {\r\n  font-size: 1.5em;\r\n  color: grey;\r\n}\r\n\r\n.dashboard__navigation {\r\n  padding-left: 0;\r\n  margin-bottom: 0;\r\n}"

/***/ },

/***/ 877:
/***/ function(module, exports) {

module.exports = ".page-not-found {\r\n    background: #eee;\r\n    text-align: center;\r\n    padding-top: 60px;\r\n    padding-bottom: 60px;\r\n    margin-top: -15px;\r\n    margin-bottom: -15px;\r\n}"

/***/ },

/***/ 878:
/***/ function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"breadcrumb-container\">\r\n  <breadcrumb prefix=\"Dashboard\"></breadcrumb>\r\n</div>\r\n<app-side-menu></app-side-menu>\r\n  <main id=\"main\">\r\n    <div class=\"content\">\r\n        <router-outlet></router-outlet>  \r\n    </div>\r\n  </main>\r\n<app-footer></app-footer>"

/***/ },

/***/ 879:
/***/ function(module, exports) {

module.exports = "<app-heading text=\"Child Benefits\"></app-heading>\r\n<app-subheading text=\"{{pageTitle}}\"></app-subheading>\r\n\r\n<p>You are now at the homepage for the child benefits service</p>\r\n<p>To enter an account please use the search facility</p>\r\n<p>Select an account type and enter the identifier</p>\r\n\r\n<br>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-sm-6 col-xs-12\">\r\n\r\n    <div class=\"input-group input-group-lg\">\r\n      <span class=\"input-group-btn\">\r\n      <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">NINO <span class=\"caret\"></span></button>\r\n      <ul class=\"dropdown-menu\" role=\"menu\">\r\n        <li><a href=\"#\">CHB</a></li>\r\n        <li><a href=\"#\">EMPREF</a></li>\r\n        <li><a href=\"#\">TRN</a></li>\r\n        <li><a href=\"#\">NINO</a></li>\r\n      </ul>\r\n      </span>\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Search&hellip;\" >\r\n      <span class=\"input-group-btn\">\r\n        <button type=\"button\" class=\"btn btn-default\">\r\n          <app-icon iconClass=\"glyphicon-search\"></app-icon>\r\n        </button>\r\n      </span>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ },

/***/ 880:
/***/ function(module, exports) {

module.exports = "<app-heading text=\"Chb Claimant Child Details\"></app-heading>\r\n\r\n<div class=\"panel-group\" id=\"accordion\">\r\n  <div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\">\r\n      <h4 class=\"panel-title\">\r\n        <a data-toggle=\"collapse\" href=\"#collapse1\"><span  class=\"label\">  <b>Name and Birth Details  </b>  </span></a>\r\n      </h4>\r\n    </div>\r\n    <div id=\"collapse1\" class=\"panel-collapse collapse in\">\r\n      <div class=\"panel-body\">\r\n        <table class=\"table table-borderless\">\r\n          <tr>\r\n            <td colspan=\"2\" style=\"font-weight:bold\"> <span>Current Name</span> </td>\r\n            <td colspan=\"5\" style=\"font-weight:bold\">Name on the Birth Certificate</td>\r\n          </tr>\r\n          <tr>\r\n            <td> <label for=\"Surname\" class=\"col-form-label\">Surname </label> </td>\r\n            <td> <input type=\"text\" class=\"form-control col-sm-7\" [(ngModel)]=\"chBClaimantDetails.birthDetail.surname\"></td>\r\n            <td> <label for=\"Surname\" class=\"col-form-label\">Surname </label> </td>\r\n            <td><input type=\"text\" class=\"form-control col-sm-7\" [(ngModel)]=\"chBClaimantDetails.birthDetail.certSurname\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td> <label for=\"Forename\" class=\"col-form-label\">Forename </label> </td>\r\n            <td><input type=\"text\" class=\"form-control col-sm-7\" [(ngModel)]=\"chBClaimantDetails.birthDetail.forename\"></td>\r\n            <td><label for=\"Forename\" class=\"col-form-label\">Forename </label></td>\r\n            <td><input type=\"text\" class=\"form-control col-sm-7\" [(ngModel)]=\"chBClaimantDetails.birthDetail.certForename\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td><label for=\"Other Forename\" class=\"col-form-label\">Other Forename </label> </td>\r\n            <td><input type=\"text\" class=\"form-control col-sm-7\" [(ngModel)]=\"chBClaimantDetails.birthDetail.otherForeName\"></td>\r\n            <td><label for=\"Other Forename\" class=\"col-form-label\">Other Forename </label></td>\r\n            <td><input type=\"text\" class=\"form-control col-sm-7\" [(ngModel)]=\"chBClaimantDetails.birthDetail.certOtherForeName\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td><label for=\"Date Of Birth\" class=\"col-form-label\">Date Of Birth </label> </td>\r\n            <td><input type=\"text\" class=\"form-control col-sm-7\" disabled=\"disabled\" [(ngModel)]=\"chBClaimantDetails.birthDetail.dateOfBirth\"></td>\r\n            <td> <label for=\"Verified\" class=\"col-form-label\">Verified </label> </td>\r\n            <td><input type=\"checkbox\" [(ngModel)]=\"chBClaimantDetails.birthDetail.verified\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td><label for=\"Gender\" class=\"col-form-label\">Gender</label> </td>\r\n            <td>\r\n              <select disabled=\"disabled\" [(ngModel)]=\"chBClaimantDetails.birthDetail.gender\" class=\"form-control col-sm-7 input-sm\">\r\n<option value=\"Male\">Male</option>\r\n  <option value=\"Female\">Female</option>\r\n   </select>\r\n            </td>\r\n            <td><label class=\"col-form-label\">Is this child the claimant's own child ?</label> </td>\r\n            <td><input type=\"checkbox\" [(ngModel)]=\"chBClaimantDetails.birthDetail.claimaintOwnChild\" class=\"checkbox\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td> <label for=\"Birth Number\" class=\"col-form-label\">Birth Number</label></td>\r\n            <td><input type=\"text\" class=\"form-control col-sm-7\" [(ngModel)]=\"chBClaimantDetails.birthDetail.birthNumber\" disabled=\"disabled\"></td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\">\r\n      <h4 class=\"panel-title\">\r\n        <a data-toggle=\"collapse\" data-parent=\"#accordion12\" href=\"#collapse2\"> <span class=\"label\">  <b>Basic Eligibilty Details- Child </b>  </span></a>\r\n      </h4>\r\n    </div>\r\n    <div id=\"collapse2\" class=\"panel-collapse collapse in\">\r\n      <div class=\"panel-body\">\r\n        <table class=\"table table-borderless\">\r\n          <tr>\r\n            <td> <label for=\"Birth Number\" class=\"col-form-label\">Child born in UK</label> </td>\r\n            <td> <input type=\"checkbox\" [(ngModel)]=\"chBClaimantDetails.eligibiltyDetail.childBornInUk\"></td>\r\n            <td><label for=\"Birth Number\" class=\"col-form-label\">Claimant incurs expenditure</label> </td>\r\n            <td> <input type=\"checkbox\" [(ngModel)]=\"chBClaimantDetails.eligibiltyDetail.claimIncursExpenditure\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td><label for=\"Birth Number\" class=\"col-form-label\">Child lives in UK</label> </td>\r\n            <td> <input type=\"checkbox\" [(ngModel)]=\"chBClaimantDetails.eligibiltyDetail.childLivesInUk\"></td>\r\n            <td> <label for=\"Birth Number\" class=\"col-form-label\">Child is being looked after</label> </td>\r\n            <td> <input type=\"checkbox\" [(ngModel)]=\"chBClaimantDetails.eligibiltyDetail.childHasBeenLookedAfter\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td><label for=\"Birth Number\" class=\"col-form-label\">Child's nationality</label> </td>\r\n            <td> <input type=\"text\" class=\"form-control col-sm-7\" [(ngModel)]=\"chBClaimantDetails.eligibiltyDetail.childNationality\"></td>\r\n            <td> <label for=\"Birth Number\" class=\"col-form-label\">From:</label> </td>\r\n            <td> <input type=\"text\" class=\"form-control col-sm-7\" [(ngModel)]=\"chBClaimantDetails.eligibiltyDetail.childHasBeenLookedAfterFrom\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td><label for=\"Birth Number\" class=\"col-form-label\"> Date of Arrival </label></td>\r\n            <td> <input type=\"text\" class=\"form-control col-sm-7\" [(ngModel)]=\"chBClaimantDetails.eligibiltyDetail.dateOfArrival\"></td>\r\n            <td><label for=\"Birth Number\" class=\"col-form-label\"> Child lives away from education</label > </td>\r\n  <td> <input type=\"checkbox\" [(ngModel)]=\"chBClaimantDetails.eligibiltyDetail.childLivesAway\"></td>\r\n</tr>\r\n\r\n<tr>\r\n  <td><label for=\"Birth Number\" class=\"col-form-label\" > Child has been lived with someone else in the last 12 months</label > </td>\r\n  <td> <input type=\"checkbox\" [(ngModel)]=\"chBClaimantDetails.eligibiltyDetail.childLivedSomeWhereElse\"></td>\r\n\r\n   <td><label for=\"Birth Number\" class=\"col-form-label\" >  Child is in detention </label ></td>\r\n  <td> <input type=\"checkbox\" [(ngModel)]=\"chBClaimantDetails.eligibiltyDetail.childLivesinDetention\"></td>\r\n</tr>\r\n\r\n<tr>\r\n  <td><label for=\"Birth Number\" class=\"col-form-label\" > Someone else has claimed</label ></td>\r\n  <td> <select type=\"\" [(ngModel)]=\"chBClaimantDetails.eligibiltyDetail.someOneElseHasClaimed\" class=\"form-control col-sm-7 input-sm\"> <option value=\"YES\">   Yes </option> <option value=\"NO\">   No </option> </select></td>\r\n\r\n   <td><label for=\"Birth Number\" class=\"col-form-label\" >  Child will live with claimant from</label ></td>\r\n  <td> <input type=\"text\"  class=\"form-control col-sm-7\"  [(ngModel)]=\"chBClaimantDetails.eligibiltyDetail.childWillLiveWithClaimaintFrom\"></td>\r\n</tr>\r\n\r\n<tr>\r\n  <td><label for=\"Birth Number\" class=\"col-form-label\" > Child lives with claimed</label > </td>\r\n  <td> <input type=\"checkbox\" [(ngModel)]=\"chBClaimantDetails.eligibiltyDetail.childLivesWithClaimaint\"></td>\r\n\r\n   <td> <label for=\"Birth Number\" class=\"col-form-label\" > Child placed for Adoption</label ></td>\r\n  <td> <input type=\"checkbox\" [(ngModel)]=\"chBClaimantDetails.eligibiltyDetail.childPlacedForAdoption\"></td>\r\n</tr>\r\n\r\n<tr>\r\n  <td><label for=\"Birth Number\" class=\"col-form-label\" >  claimed contribute to child's unkeep </label ></td>\r\n  <td> <input type=\"checkbox\" [(ngModel)]=\"chBClaimantDetails.eligibiltyDetail.claimtContribute\"></td>\r\n\r\n   <td><label for=\"Birth Number\" class=\"col-form-label\" > Child Adopted</label ></td>\r\n  <td> <input type=\"checkbox\" [(ngModel)]=\"chBClaimantDetails.eligibiltyDetail.childAdopted\"></td>\r\n</tr>\r\n\r\n<tr>\r\n  <td> <label for=\"Birth Number\" class=\"col-form-label\" > child is in hospital</label >  </td>\r\n  <td> <input type=\"checkbox\" [(ngModel)]=\"chBClaimantDetails.eligibiltyDetail.childIsinHospital\"></td>\r\n\r\n   <td> <label for=\"Birth Number\" class=\"col-form-label\" > Child deceased</label > </td>\r\n  <td> <input type=\"checkbox\" [(ngModel)]=\"chBClaimantDetails.eligibiltyDetail.childDeceased\"></td>\r\n</tr>\r\n\r\n<tr>\r\n  <td><label for=\"Birth Number\" class=\"col-form-label\" > From</label > </td>\r\n  <td> <input type=\"text\"  class=\"form-control col-sm-7\"  [(ngModel)]=\"chBClaimantDetails.eligibiltyDetail.childIsinHospitalFrom\"></td>\r\n\r\n   <td> <label for=\"Birth Number\" class=\"col-form-label\" > Until</label > </td>\r\n  <td> <input type=\"text\"  class=\"form-control col-sm-7\"  [(ngModel)]=\"chBClaimantDetails.eligibiltyDetail.childIsinHospitalTo\"></td>\r\n</tr>\r\n\r\n<tr>\r\n  <td>  <label for=\"Birth Number\" class=\"col-form-label\" > Date of death</label > </td>\r\n  <td> <input type=\"text\"  class=\"form-control col-sm-7\"  [(ngModel)]=\"chBClaimantDetails.eligibiltyDetail.dateOFDeath\"></td>\r\n\r\n  \r\n</tr>\r\n\r\n </table>\r\n        \r\n        \r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\">\r\n        <h4 class=\"panel-title\">\r\n          <a data-toggle=\"collapse\" data-parent=\"#accordion1\" href=\"#collapse3\">   <span  class=\"label\">  <b>Advance Eligibilty Details -Child</b>  </span></a>\r\n        </h4>\r\n      </div>\r\n      <div id=\"collapse3\" class=\"panel-collapse collapse in\">\r\n        <div class=\"panel-body\">\r\n         <table class=\"table table-borderless\">\r\n<tr>\r\n<td colspan=\"2\" style=\"font-weight:bold\" >Child lives or has lived with </td>  \r\n<td colspan=\"5\" style=\"font-weight:bold\">Someone else has claimed</td>\r\n</tr>\r\n\r\n<tr>\r\n<td> <label for=\"Birth Number\" class=\"col-form-label\" >Name</label > </td>\r\n<td><input type=\"text\"  class=\"form-control col-sm-7\"  [(ngModel)]=\"chBClaimantDetails.eligibiltyDetailExtra.name\"></td>    \r\n<td><label for=\"Birth Number\" class=\"col-form-label\" >Name</label ></td>\r\n<td><input type=\"text\"  class=\"form-control col-sm-7\"  [(ngModel)]=\"chBClaimantDetails.eligibiltyDetailExtra.Claimantname\"></td>    \r\n</tr>\r\n\r\n<tr>\r\n<td><label for=\"Birth Number\" class=\"col-form-label\" > Line 1</label ></td>\r\n<td><input type=\"text\"  class=\"form-control col-sm-7\"  [(ngModel)]=\"chBClaimantDetails.eligibiltyDetailExtra.line1\"></td>    \r\n<td><label for=\"Birth Number\" class=\"col-form-label\" > Line 1</label ></td>\r\n<td><input type=\"text\"  class=\"form-control col-sm-7\"  [(ngModel)]=\"chBClaimantDetails.eligibiltyDetailExtra.Claimantline1\"></td>    \r\n</tr>\r\n\r\n\r\n<tr>\r\n<td><label for=\"Birth Number\" class=\"col-form-label\" > Line 2</label ></td>\r\n<td><input type=\"text\"  class=\"form-control col-sm-7\"  [(ngModel)]=\"chBClaimantDetails.eligibiltyDetailExtra.line2\"></td>    \r\n<td><label for=\"Birth Number\" class=\"col-form-label\" > Line 2</label ></td>\r\n<td><input type=\"text\"  class=\"form-control col-sm-7\"  [(ngModel)]=\"chBClaimantDetails.eligibiltyDetailExtra.Claimantline2\"></td>    \r\n</tr>\r\n\r\n<tr>\r\n<td><label for=\"Birth Number\" class=\"col-form-label\" >Line 3</label > </td>\r\n<td><input type=\"text\"  class=\"form-control col-sm-7\"  [(ngModel)]=\"chBClaimantDetails.eligibiltyDetailExtra.line3\"></td>    \r\n<td><label for=\"Birth Number\" class=\"col-form-label\" >Line 3</label >  </td>\r\n<td><input type=\"text\"  class=\"form-control col-sm-7\"  [(ngModel)]=\"chBClaimantDetails.eligibiltyDetailExtra.Claimantline3\"></td>    \r\n</tr>\r\n\r\n<tr>\r\n<td><label for=\"Birth Number\" class=\"col-form-label\" > Line 4</label ></td>\r\n<td><input type=\"text\"  class=\"form-control col-sm-7\"  [(ngModel)]=\"chBClaimantDetails.eligibiltyDetailExtra.line4\"></td>    \r\n<td><label for=\"Birth Number\" class=\"col-form-label\" > Line 4</label ></td>\r\n<td><input type=\"text\"  class=\"form-control col-sm-7\"  [(ngModel)]=\"chBClaimantDetails.eligibiltyDetailExtra.Claimantline4\"></td>    \r\n</tr>\r\n\r\n<tr>\r\n<td><label for=\"Birth Number\" class=\"col-form-label\" > Line 5</label > </td>\r\n<td><input type=\"text\"  class=\"form-control col-sm-7\"  [(ngModel)]=\"chBClaimantDetails.eligibiltyDetailExtra.line5\"></td>    \r\n<td><label for=\"Birth Number\" class=\"col-form-label\" >  Line 4</label ></td>\r\n<td><input type=\"text\"  class=\"form-control col-sm-7\"  [(ngModel)]=\"chBClaimantDetails.eligibiltyDetailExtra.Claimantline5\"></td>    \r\n</tr>\r\n\r\n\r\n<tr>\r\n<td><label for=\"Birth Number\" class=\"col-form-label\" >PostCode</label ></td>\r\n<td><input type=\"text\"  class=\"form-control col-sm-7\"  [(ngModel)]=\"chBClaimantDetails.eligibiltyDetailExtra.postcode\"></td>    \r\n<td><label for=\"Birth Number\" class=\"col-form-label\" >PostCode</label ></td>\r\n<td><input type=\"text\"  class=\"form-control col-sm-7\"  [(ngModel)]=\"chBClaimantDetails.eligibiltyDetailExtra.Claimantpostcode\"></td>    \r\n</tr>\r\n\r\n<tr>\r\n<td><label for=\"Birth Number\" class=\"col-form-label\" >Country</label ></td>\r\n<td><select  [(ngModel)]=\"chBClaimantDetails.eligibiltyDetailExtra.Country\"> <option *ngFor=\"let Country of countryList\" value= {{Country.name}}>\r\n    {{Country.name}}\r\n  </option></select></td>    \r\n<td><label for=\"Birth Number\" class=\"col-form-label\" >Country</label ></td>\r\n<td><select  [(ngModel)]=\"chBClaimantDetails.eligibiltyDetailExtra.ClaimantCountry\"> <option *ngFor=\"let Country of countryList\" value= {{Country.name}}>\r\n    {{Country.name}}\r\n  </option> </select></td>    \r\n</tr>\r\n      </table>\r\n        \r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n<div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\">\r\n        <h4 class=\"panel-title\">\r\n          <a data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapse4\">       <span  class=\"label\">  <b>Education Details Child</b>  </span> </a>\r\n        </h4>\r\n      </div>\r\n      <div id=\"collapse4\" class=\"panel-collapse collapse in\">\r\n        <div class=\"panel-body\">\r\n       <table  class=\"table table-borderless\">\r\n<tr>\r\n<td colspan=\"2\" style=\"font-weight:bold\" >Education Details :</td>  \r\n\r\n</tr>\r\n\r\n<tr>\r\n<td> <label for=\"Birth Number\" class=\"col-form-label\" >Education or training for child aged 16 or over</label > </td>\r\n<td><input type=\"checkbox\" [(ngModel)]=\"chBClaimantDetails.educationDetail.educatiionForChildOver16\"></td>    \r\n</tr>\r\n\r\n<tr>\r\n<td> <label for=\"Birth Number\" class=\"col-form-label\" > Course/ Approved training beign taken</label > </td>\r\n<td><input type=\"text\"  class=\"form-control col-sm-7\"  [(ngModel)]=\"chBClaimantDetails.educationDetail.courseName\"></td>    \r\n</tr>\r\n\r\n<tr>\r\n<td> <label for=\"Birth Number\" class=\"col-form-label\" >From:</label ></td>\r\n<td><input type=\"text\"  class=\"form-control col-sm-7\"  [(ngModel)]=\"chBClaimantDetails.educationDetail.courseFrom\"></td>    \r\n\r\n<td> <label for=\"Birth Number\" class=\"col-form-label\" > Until:</label > </td>\r\n<td><input type=\"text\"  class=\"form-control col-sm-7\"  [(ngModel)]=\"chBClaimantDetails.educationDetail.courseUntil\"></td>    \r\n</tr>\r\n\r\n<tr>\r\n  <td style=\"font-weight:bold\">Name and address where course/approved training being taken</td>\r\n</tr>\r\n\r\n<tr>\r\n<td> <label for=\"Birth Number\" class=\"col-form-label\" >Name</label > </td>\r\n<td><input type=\"text\"  class=\"form-control col-sm-7\"  [(ngModel)]=\"chBClaimantDetails.educationDetail.name\"></td>    \r\n\r\n</tr>\r\n\r\n<tr>\r\n<td> <label for=\"Birth Number\" class=\"col-form-label\" >Line 1</label ></td>\r\n<td><input type=\"text\"  class=\"form-control col-sm-7\"  [(ngModel)]=\"chBClaimantDetails.educationDetail.line1\"></td>    \r\n\r\n</tr>\r\n\r\n\r\n<tr>\r\n<td> <label for=\"Birth Number\" class=\"col-form-label\" > Line 2</label ></td>\r\n<td><input type=\"text\"  class=\"form-control col-sm-7\"  [(ngModel)]=\"chBClaimantDetails.educationDetail.line2\"></td>    \r\n\r\n</tr>\r\n\r\n<tr>\r\n<td> <label for=\"Birth Number\" class=\"col-form-label\" >Line 3</label > </td>\r\n<td><input type=\"text\"  class=\"form-control col-sm-7\"  [(ngModel)]=\"chBClaimantDetails.educationDetail.line3\"></td>    \r\n\r\n</tr>\r\n\r\n<tr>\r\n<td> <label for=\"Birth Number\" class=\"col-form-label\" > Line 4</label ></td>\r\n<td><input type=\"text\"  class=\"form-control col-sm-7\"  [(ngModel)]=\"chBClaimantDetails.educationDetail.line4\"></td>    \r\n\r\n</tr>\r\n\r\n<tr>\r\n<td> <label for=\"Birth Number\" class=\"col-form-label\" > Line 5</label ></td>\r\n<td><input type=\"text\"  class=\"form-control col-sm-7\"  [(ngModel)]=\"chBClaimantDetails.educationDetail.line5\"></td>    \r\n\r\n</tr>\r\n\r\n\r\n<tr>\r\n<td> <label for=\"Birth Number\" class=\"col-form-label\" >PostCode</label > </td>\r\n<td><input type=\"text\"  class=\"form-control col-sm-7\"  [(ngModel)]=\"chBClaimantDetails.educationDetail.postcode\"></td>    \r\n\r\n</tr>\r\n\r\n<tr>\r\n<td> <label for=\"Birth Number\" class=\"col-form-label\" > Country</label > </td>\r\n<td><select  [(ngModel)]=\"chBClaimantDetails.educationDetail.Country\"> <option *ngFor=\"let Country of countryList\" value= {{Country.name}}>\r\n    {{Country.name}}\r\n  </option> </select></td>    \r\n\r\n</tr>\r\n\r\n<tr>\r\n<td>  <label for=\"Birth Number\" class=\"col-form-label\" >Payment benefits being received</label > </td>\r\n<td><input type=\"checkbox\" [(ngModel)]=\"chBClaimantDetails.educationDetail.paymentBenefitReceived\"> </td>    \r\n\r\n</tr>\r\n      </table>\r\n        \r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n<div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\">\r\n        <h4 class=\"panel-title\">\r\n          <a data-toggle=\"collapse\" data-parent=\"#accordion3\" href=\"#collapse5\"> <span  class=\"label\">  <b>Other Child Details</b>  </span></a>\r\n        </h4>\r\n      </div>\r\n      <div id=\"collapse5\" class=\"panel-collapse collapse in\">\r\n        <div class=\"panel-body\">\r\n          <div id=\"outer\">\r\n         <p-dataTable [value]=\"otherChildDetails\">\r\n    <p-column field=\"surname\" header=\"Surname\"></p-column>\r\n    <p-column field=\"forename\" header=\"Forename\"></p-column>\r\n    <p-column field=\"otherForeName\" header=\"Other ForeNames\"></p-column>\r\n    <p-column field=\"gender\" header=\"Gender\"></p-column>\r\n    <p-column field=\"dateOfBirth\" header=\"Date Of Birth\"></p-column>\r\n     <p-column field=\"verified\" header=\"Verified\"></p-column>\r\n</p-dataTable>\r\n\r\n<div id=\"inner\" class=\"row\" *ngIf=\"otherChildDetails?.length <= 0\">\r\n  <p align=\"center\" >No Other Children</p>\r\n</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div> \r\n\r\n  <div  >\r\n  <table class=\"table table-borderless\">\r\n    <tr>\r\n  <h6 style=\"font-weight:bold\" >Actions :</h6> </tr>\r\n  <tr>\r\n  <a href=\"url\">View Claim summary</a>\r\n  </tr>\r\n  <tr>\r\n  <a href=\"url\"> View Claimant Details</a>\r\n  </tr>\r\n  <tr>\r\n  <a href=\"url\">View Partner Details</a>\r\n  </tr>\r\n  </table>\r\n</div>\r\n\r\n<app-form-actions [group]=\"validationForm\" parentPath=\"/child-benefits\"></app-form-actions>\r\n"

/***/ },

/***/ 881:
/***/ function(module, exports) {

module.exports = "  <app-heading text=\"Child Claimant Partner\"></app-heading>\r\n\r\n  <div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\">\r\n      <h6 class=\"panel-title\">\r\n        <a data-toggle=\"collapse\"  href=\"#collapse1\"><span  class=\"label\">  <b>\r\n        Claimant Partner Personal Details</b></span></a>\r\n      </h6>\r\n    </div>\r\n    <div id=\"collapse1\" class=\"panel-collapse collapse in\">\r\n      <div class=\"panel-body\"> <div class=\"form-group row\">\r\n      <label for=\"inputNino\" class=\"col-md-3\">NINO</label>\r\n      <div class=\"col-md-3\">\r\n        <input type=\"text\"  [(ngModel)]='nino' class=\"form-control\" id=\"nino\">\r\n      </div>\r\n    </div>\r\n     <div class=\"form-group row\">\r\n      <label for=\"inputSurname\" class=\"col-md-3\">Surname</label>\r\n      <div class=\"col-md-6\">\r\n        <input type=\"text\"  [(ngModel)]='surname' class=\"form-control\" id=\"surname\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"inputForename\" class=\"col-md-3\">Forename</label>\r\n      <div class=\"col-md-6\">\r\n        <input type=\"text\"  [(ngModel)]='forename' class=\"form-control\" id=\"forename\">\r\n      </div>\r\n    </div>\r\n     <div class=\"form-group row\">\r\n      <label for=\"inputOtherFnames\" class=\"col-md-3\">Other Forenames</label>\r\n      <div class=\"col-md-3\">\r\n        <input type=\"text\"  [(ngModel)]='otherforename' class=\"form-control\" id=\"otherforename\">\r\n      </div>\r\n    </div>\r\n     <div class=\"form-group row\">\r\n      <label for=\"inputdob\" class=\"col-md-3\">Date of birth</label>\r\n      <div class=\"col-md-3\">\r\n        <input type=\"text\"  [(ngModel)]='dob' class=\"form-control\" id=\"dob\">\r\n      </div>\r\n    </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\">\r\n      <h4 class=\"panel-title\">\r\n        <a data-toggle=\"collapse\"  href=\"#collapse2\"><span  class=\"label\">  <b>\r\n       Partner's previous address details</b></span></a>\r\n      </h4>\r\n    </div>\r\n    <div id=\"collapse2\" class=\"panel-collapse collapse in\">\r\n      <div class=\"panel-body\"> <div class=\"form-group row\">\r\n      <label for=\"inputline1\" class=\"col-md-3\">Line 1</label>\r\n      <div class=\"col-md-6\">\r\n        <input type=\"text\"  [(ngModel)]='line1' class=\"form-control\" id=\"line1\">\r\n      </div>\r\n    </div>\r\n     <div class=\"form-group row\">\r\n      <label for=\"inputline2\" class=\"col-md-3\">Line 2</label>\r\n      <div class=\"col-md-6\">\r\n        <input type=\"text\"  [(ngModel)]='line2' class=\"form-control\" id=\"line2\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"inputline3\" class=\"col-md-3\">Line3</label>\r\n      <div class=\"col-md-6\">\r\n        <input type=\"text\"  [(ngModel)]='line3' class=\"form-control\" id=\"line3\">\r\n      </div>\r\n    </div>\r\n     <div class=\"form-group row\">\r\n      <label for=\"inputline4\" class=\"col-md-3\">Line 4</label>\r\n      <div class=\"col-md-6\">\r\n        <input type=\"text\"  [(ngModel)]='line4' class=\"form-control\" id=\"line4\">\r\n      </div>\r\n    </div>\r\n     <div class=\"form-group row\">\r\n      <label for=\"inputdob\" class=\"col-md-3\">Line 5</label>\r\n      <div class=\"col-md-6\">\r\n        <input type=\"text\"  [(ngModel)]='line5' class=\"form-control\" id=\"line5\">\r\n      </div>\r\n    </div>\r\n     <div class=\"form-group row\">\r\n      <label for=\"inputpostcode\" class=\"col-md-3\">Postcode</label>\r\n      <div class=\"col-md-6\">\r\n        <input type=\"text\"  [(ngModel)]='postcode' class=\"form-control\" id=\"postcode\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"inputCountry\" class=\"col-md-3\">Country</label>\r\n      <div class=\"col-md-3\">\r\n <select>\r\n  <option *ngFor=\"let country of refdata_Country\" value= {{country.id}}>\r\n    {{country.VALUE}}\r\n  </option>\r\n</select>\r\n      </div>\r\n    </div>\r\n    </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\">\r\n      <h4 class=\"panel-title\">\r\n        <a data-toggle=\"collapse\"  href=\"#collapse3\"><span  class=\"label\">  <b>\r\n       Basic Eligibility-Partner</b></span></a>\r\n      </h4>\r\n    </div>\r\n    <div id=\"collapse3\" class=\"panel-collapse collapse in\">\r\n      <div class=\"panel-body\">     <div class=\"form-group row\">\r\n      <label for=\"inputnationalitygrp\" class=\"col-md-3\">Nationality Group</label>\r\n      <div class=\"col-md-6\">\r\n        <input type=\"text\"  [(ngModel)]='nationalitygrp' class=\"form-control\" id=\"nationalitygrp\">\r\n      </div>\r\n    </div>\r\n     <div class=\"form-group row\">\r\n      <label for=\"inputnatCountry\" class=\"col-md-3\">Nationality Country</label>\r\n      <div class=\"col-md-3\">\r\n <select>\r\n  <option *ngFor=\"let country of refdata_Country\" value= {{country.id}}>\r\n    {{country.VALUE}}\r\n  </option>\r\n</select>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-check row\">\r\n        <div class=\"col-md-3\">\r\n                <label class=\"form-check-label\">Ordinarily Resident in UK</label>\r\n                </div>\r\n                 <div class=\"col-md-6\">\r\n                 <input class=\"form-check-input\" type=\"checkbox\" value=\"\" >\r\n    </div>\r\n</div>\r\n  <div class=\"form-group row\">\r\n      <label for=\"inputnatCountry\" class=\"col-md-3\">Normally resident in</label>\r\n      <div class=\"col-md-3\">\r\n <select>\r\n  <option *ngFor=\"let country of refdata_Country\" value= {{country.id}}>\r\n    {{country.VALUE}}\r\n  </option>\r\n</select>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-check row\">\r\n        <div class=\"col-md-3\">\r\n                <label class=\"form-check-label\">UK Armed Forces/Civil servant</label>\r\n                </div>\r\n                 <div class=\"col-md-6\">\r\n                 <input class=\"form-check-input\" type=\"checkbox\" value=\"\" >\r\n    </div>\r\n</div>\r\n <div class=\"form-check row\">\r\n        <div class=\"col-md-3\">\r\n                <label class=\"form-check-label\">Lived in UK for less than 6 months</label>\r\n                </div>\r\n                 <div class=\"col-md-6\">\r\n                 <input class=\"form-check-input\" type=\"checkbox\" value=\"\" >\r\n    </div>\r\n</div>\r\n</div>\r\n    </div>\r\n  </div>\r\n <div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\">\r\n      <h4 class=\"panel-title\">\r\n        <a data-toggle=\"collapse\"  href=\"#collapse4\"><span  class=\"label\">  <b>\r\n        Claimant Details</b></span></a>\r\n      </h4>\r\n    </div>\r\n    <div id=\"collapse4\" class=\"panel-collapse collapse in\">\r\n      <div class=\"panel-body\"> <div class=\"form-group row\">\r\n      <label for=\"inputstatus\" class=\"col-md-3\">Status</label>\r\n      <div class=\"col-md-3\">\r\n <select>\r\n  <option *ngFor=\"let status of refdata_Status\" value= {{status.id}}>\r\n    {{status.VALUE}}\r\n  </option>\r\n</select>\r\n      </div>\r\n    </div></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\">\r\n      <h4 class=\"panel-title\">\r\n        <a data-toggle=\"collapse\"  href=\"#collapse5\"><span  class=\"label\">  <b>\r\n        Partner's eldest child details</b></span></a>\r\n      </h4>\r\n    </div>\r\n    <div id=\"collapse5\" class=\"panel-collapse collapse in\">\r\n      <div class=\"panel-body\"><p-dataTable [value]=\"children\" [paginator]=\"true\" rows=\"5\" [responsive]=\"true\">\r\n      <p-column field=\"surnameName\" header=\"Surname\"></p-column>\r\n      <p-column field=\"forenameName\" header=\"Forename\"></p-column>\r\n      <p-column field=\"otherName\" header=\"Other Forenames\"></p-column>\r\n      <p-column field=\"dateOfBirth\" header=\"Date of birth\"></p-column>\r\n    </p-dataTable></div>\r\n    </div>\r\n    \r\n  <div >\r\n  <table class=\"table table-borderless\">\r\n    <tr>\r\n  <h6 style=\"font-weight:bold\" >Actions :</h6> </tr>\r\n  <tr>\r\n  <a href=\"url\">View Claim summary</a>\r\n  </tr>\r\n  <tr>\r\n  <a href=\"url\"> View Claimant Details</a>\r\n  </tr>\r\n  </table>\r\n</div>\r\n</div>\r\n\r\n<app-form-actions [group]=\"validationForm\" parentPath=\"/child-benefits\"></app-form-actions>"

/***/ },

/***/ 882:
/***/ function(module, exports) {

module.exports = "<app-heading text=\"Chb Complex Eligibiltity - EU Legislation\"></app-heading>\r\n<app-subheading text=\"Claimants's last address in Other Member State\"></app-subheading>\r\n\r\n<form [formGroup]=\"validationForm\" (ngSubmit)=\"onSubmit()\">\r\n    \r\n    <div class=\"row\">\r\n    \r\n        <div class=\"col-md-6 col-xs-12\">\r\n\r\n            <!-- Line 1 -->\r\n            <div class=\"form-group\">\r\n                <label for=\"inputline1\" class=\"control-label\">Line 1</label>\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"line1\" placeholder=\"Line 1\" required>\r\n                <app-alert *ngIf=\"formErrors.line1\" type=\"danger\" text=\"{{formErrors.line1}}\"></app-alert>\r\n            </div>\r\n\r\n            <!-- Line 2 -->\r\n            <div class=\"form-group\">\r\n                <label for=\"inputline2\" class=\"control-label\">Line 2</label>\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"line2\" placeholder=\"Line 2\" required>\r\n                <app-alert *ngIf=\"formErrors.line2\" type=\"danger\" text=\"{{formErrors.line2}}\"></app-alert>\r\n            </div>\r\n\r\n            <!-- Line 3 -->\r\n            <div class=\"form-group\">\r\n                <label for=\"inputline3\" class=\"control-label\">Line 3</label>\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"line3\" placeholder=\"Line 3\" required>\r\n                <app-alert *ngIf=\"formErrors.line3\" type=\"danger\" text=\"{{formErrors.line3}}\"></app-alert>\r\n            </div>\r\n\r\n            <!-- Line 4 -->\r\n            <div class=\"form-group\">\r\n                <label for=\"inputline4\" class=\"control-label\">Line 4</label>\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"line4\" placeholder=\"Line 4\" required>\r\n                <app-alert *ngIf=\"formErrors.line4\" type=\"danger\" text=\"{{formErrors.line4}}\"></app-alert>\r\n            </div>\r\n\r\n            <!-- Postcode -->\r\n            <div class=\"form-group\">\r\n                <label for=\"postcode\" class=\"control-label\">Postcode</label>\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"postcode\" placeholder=\"Postcode\" required>\r\n                <app-alert *ngIf=\"formErrors.postcode\" type=\"danger\" text=\"{{formErrors.postcode}}\"></app-alert>\r\n            </div>\r\n\r\n        </div>\r\n        \r\n    </div>\r\n\r\n    <app-alert *ngIf=\"formSubmittedMessage\" type=\"success\" text=\"{{formSubmittedMessage}}\"></app-alert>\r\n    <app-form-actions [group]=\"validationForm\" parentPath=\"/child-benefits\"></app-form-actions>\r\n\r\n</form>\r\n<!-- End of Form -->"

/***/ },

/***/ 883:
/***/ function(module, exports) {

module.exports = "<app-heading text=\"Chb Claim History\"></app-heading>\r\n\r\n<p-dataTable [value]=\"ChildDataHistory\">\r\n  <p-column field=\"claimNumber\" header=\"claimNumber\"></p-column>\r\n  <p-column field=\"claimVersion\" header=\"claimVersion\"></p-column>\r\n  <p-column field=\"claimNames\" header=\"claimNames\"></p-column>\r\n  <p-column field=\"action\" header=\"action\"></p-column>\r\n  <p-column field=\"awardType\" header=\"awardType\"></p-column>\r\n</p-dataTable>"

/***/ },

/***/ 884:
/***/ function(module, exports) {

module.exports = "<app-heading text=\"{{pageTitle}}\"></app-heading>\r\n\r\n<div class=\"row\">\r\n\r\n  <div class=\"col-xs-12 col-lg-4\">\r\n\r\n    <app-subheading text=\"Search By:\"></app-subheading>\r\n\r\n    <div class=\"btn-toolbar\">\r\n      <div class=\"btn-group\" role=\"group\" data-toggle=\"buttons\">\r\n        <label class=\"btn btn-default active\" (click)=\"toggleNameAndORDOB($event)\">\r\n          <input type=\"radio\" name=\"options\" id=\"option6\">Name and/or DOB\r\n        </label>\r\n        <label class=\"btn btn-default\" (click)=\"toggleBirthNumber($event)\">\r\n          <input type=\"radio\" name=\"options\" id=\"option5\">Birth Number\r\n        </label>\r\n      </div>\r\n    </div>\r\n\r\n    <br><br>\r\n\r\n  </div>\r\n\r\n  <div class=\"col-xs-12 col-lg-8\">\r\n\r\n    <form name=\"nameAndORDOB\" [hidden]=\"nameAndORDOB\">\r\n\r\n      <app-subheading text=\"Name/DOB:\"></app-subheading>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"firstName\" class=\"control-label\">First Name</label>\r\n        <input type=\"text\"\r\n               name=\"firstName\"\r\n               class=\"form-control\"\r\n               id=\"firstName\"\r\n               placeholder=\"First Name\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"otherNames\" class=\"control-label\">Other Names</label>\r\n        <input type=\"text\"\r\n               name=\"otherNames\"\r\n               [(ngModel)]=\"otherNames\"\r\n               class=\"form-control\"\r\n               id=\"otherNames\"\r\n               placeholder=\"Other Names\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"inputSurname\" class=\"control-label\">Surname</label>\r\n        <input type=\"text\"\r\n               name=\"surname\"\r\n               [(ngModel)]=\"surname\"\r\n               class=\"form-control\"\r\n               id=\"surname\"\r\n               placeholder=\"Surname\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"dateOfBirth\" class=\"control-label\">Date of birth</label>\r\n        <input type=\"text\"\r\n               name=\"dateOfBirth\"\r\n               [(ngModel)]=\"dateofBirth\"\r\n               class=\"form-control\"\r\n               id=\"dateofbirth\"\r\n               placeholder=\"Date of Birth\">\r\n      </div>\r\n\r\n      <button type=\"submit\" class=\"btn btn-default\">Search</button>\r\n\r\n    </form>\r\n\r\n    <form name=\"birthNumber\" [hidden]=\"birthNumber\">\r\n\r\n      <app-subheading text=\"Birth Number:\"></app-subheading>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"birthNumber\" class=\"control-label\">Birth Number</label>\r\n        <input type=\"text\"\r\n               (keyup.enter)=\"update(text.value)\"\r\n               name=\"birthNumber\"\r\n               [(ngModel)]=\"birthNumberValue\"\r\n               class=\"form-control\"\r\n               id=\"birthNumberValue\"\r\n               placeholder=\"Birth Number\">\r\n      </div>\r\n\r\n      <button type=\"submit\" (click)=update(text.value) class=\"btn btn-default\">Search</button>\r\n\r\n    </form>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n<hr>\r\n\r\n<app-subheading text=\"Child Details:\"></app-subheading>\r\n\r\n<p-dataTable [value]=\"children\" [paginator]=\"true\" rows=\"5\" [responsive]=\"true\">\r\n  <p-column *ngFor=\"let col of cols\" [field]=\"col.field\" [header]=\"col.header\"></p-column>\r\n  <p-column styleClass=\"col-button\">\r\n    <template let-child=\"rowData\" pTemplate=\"body\">\r\n      <button type=\"button\" pButton (click)=\"selectChildren(child);\" icon=\"fa fa-search\"></button>\r\n    </template>\r\n  </p-column>\r\n</p-dataTable>"

/***/ },

/***/ 885:
/***/ function(module, exports) {

module.exports = "<div class=\"alert-container\">\r\n  <div class=\"alert alert-{{type}}\" role=\"alert\">\r\n    <strong *ngIf=\"title\">{{ title }}</strong>\r\n    {{ text }}\r\n  </div>\r\n</div>"

/***/ },

/***/ 886:
/***/ function(module, exports) {

module.exports = "<li class=\"col-md-6 col-lg-4 dashboard__panel\">\r\n  <a routerLink=\"/child-benefits/\">\r\n    <img src=\"{{ image }}\" alt=\"{{ description }}\">\r\n  </a>\r\n <li>"

/***/ },

/***/ 887:
/***/ function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n  <p class=\"footer__text\">&copy; HMRC {{ year }}</p>\r\n</footer>"

/***/ },

/***/ 888:
/***/ function(module, exports) {

module.exports = "<ng-container *ngIf=\"this.group\">\r\n  <div class=\"buttons-container blocked\">\r\n    <a routerLink=\"{{parentPath}}\" class=\"btn btn-danger\">Cancel</a>\r\n    <button type=\"reset\" class=\"btn btn-default\">Reset</button>\r\n    <div class=\"pull-right\">\r\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!this.group.valid\">Save</button>\r\n    </div>\r\n  </div>\r\n</ng-container>"

/***/ },

/***/ 889:
/***/ function(module, exports) {

module.exports = "<header class=\"header\">\r\n    \r\n    <!-- Logo -->\r\n    <app-logo></app-logo>\r\n    \r\n    <!-- Search -->\r\n    <app-search></app-search>\r\n    \r\n    <!-- Icons -->\r\n    <ul class=\"header__icons\">\r\n      <li class=\"header__icons__search\"><a href=\"#\"><app-icon iconClass=\"glyphicon-search\"></app-icon></a></li>\r\n      <li><a href=\"#\"><app-icon iconClass=\"glyphicon-cog\"></app-icon></a></li>\r\n      <li><a href=\"#\"><app-icon iconClass=\"glyphicon-print\"></app-icon></a></li>\r\n      <li><a href=\"{{ query }}\" target=\"blank\"><app-icon iconClass=\"glyphicon-info-sign\"></app-icon></a></li>\r\n      <li><a href=\"#\"><app-icon iconClass=\"glyphicon-log-out\"></app-icon></a></li>\r\n    </ul>\r\n    \r\n</header>"

/***/ },

/***/ 890:
/***/ function(module, exports) {

module.exports = "<div id=\"heading\">\r\n  <h1>{{ text }}</h1>\r\n  <hr>\r\n</div>"

/***/ },

/***/ 891:
/***/ function(module, exports) {

module.exports = "<span class=\"glyphicon {{iconClass}}\"></span>"

/***/ },

/***/ 892:
/***/ function(module, exports) {

module.exports = "<a [routerLink]=\"['/dashboard']\" id=\"logo\" class=\"logo\">\r\n  <img src=\"./assets/images/logo/hmrc-light.svg\" alt=\"HMRC\" draggable=\"false\">\r\n</a>"

/***/ },

/***/ 893:
/***/ function(module, exports) {

module.exports = "<form class=\"search\">\r\n  <input type=\"search\" name=\"search\" placeholder=\"Search... (AB123456C)\" />\r\n</form>"

/***/ },

/***/ 894:
/***/ function(module, exports) {

module.exports = "<div class=\"hamburger\" (click)=\"toggleSideMenu()\" *ngIf=\"routes\">\r\n  <span id=\"hamburger-icon\" class=\"glyphicon glyphicon-menu-hamburger\" aria-hidden=\"true\"></span>\r\n</div>\r\n\r\n<aside id=\"side-menu\" class=\"side-menu\" data-visible=\"false\">\r\n\r\n  <ng-container *ngIf=\"routes\">\r\n    <div class=\"side-menu__information\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-4\">\r\n          <app-icon iconClass=\"glyphicon-user\"></app-icon>\r\n        </div>\r\n        <div class=\"col-xs-8\">\r\n          <b>Mr K Bolam</b>\r\n          <br>\r\n          <small>20/02/1991</small>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-4\"><span class=\"label label-default\"><b>NINO:</b></span></div>\r\n        <div class=\"col-xs-8\">NL12345D</div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-4\"><span class=\"label label-default\"><b>Address:</b></span></div>\r\n        <div class=\"col-xs-8\">12 Merry Lane, Newcastle</div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"routes\">\r\n    <ul id=\"side-menu__list\" class=\"side-menu__list\">\r\n      <ng-container *ngFor=\"let route of routes\">\r\n        <li class=\"side-menu__list__item\" *ngIf=\"route.path\">\r\n          <a routerLink=\"/child-benefits/{{ route.path }}\" routerLinkActive=\"active\">{{ route.data.title }}</a>\r\n        </li>\r\n      </ng-container>\r\n    </ul>\r\n  </ng-container>\r\n\r\n</aside>"

/***/ },

/***/ 895:
/***/ function(module, exports) {

module.exports = "<h2 class=\"subheading\">\r\n  <small>{{text}}</small>\r\n</h2>\r\n<br>"

/***/ },

/***/ 896:
/***/ function(module, exports) {

module.exports = "  <!-- Dashboard -->\r\n  <div class=\"dashboard\">\r\n\r\n      <!-- Heading -->\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"dashboard__heading\">\r\n            <h1 class=\"balance-text\">HMRC National Insurance and PAYE System (NPS) Applications</h1>\r\n            <p class=\"balance-text\">Please select an application by clicking on one of the options below.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Navigation -->\r\n      <div class=\"row\">\r\n        <ul class=\"dashboard__navigation\">\r\n\r\n          <!-- Panel -->\r\n          <app-dash-panel image=\"./assets/images/dashboard/child-benefits.png\" description=\"Child Benefits Link\" ></app-dash-panel>\r\n\r\n        </ul>\r\n      </div>\r\n\r\n  </div>"

/***/ },

/***/ 897:
/***/ function(module, exports) {

module.exports = "<div class=\"page-not-found\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <h1>404 Page Not Found&hellip;</h1>\r\n      <br>\r\n      <p><a [routerLink]=\"['/dashboard']\" class=\"btn btn-default btn-lg\">Return to Dashboard</a><p>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }

},[1165]);
//# sourceMappingURL=main.bundle.map