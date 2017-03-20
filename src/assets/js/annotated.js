/*
 angular-file-upload v2.3.4
 https://github.com/nervgh/angular-file-upload
*/

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["angular-file-upload"] = factory();
	else
		root["angular-file-upload"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _config = __webpack_require__(1);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _options = __webpack_require__(2);
	
	var _options2 = _interopRequireDefault(_options);
	
	var _FileUploader = __webpack_require__(3);
	
	var _FileUploader2 = _interopRequireDefault(_FileUploader);
	
	var _FileLikeObject = __webpack_require__(4);
	
	var _FileLikeObject2 = _interopRequireDefault(_FileLikeObject);
	
	var _FileItem = __webpack_require__(5);
	
	var _FileItem2 = _interopRequireDefault(_FileItem);
	
	var _FileDirective = __webpack_require__(6);
	
	var _FileDirective2 = _interopRequireDefault(_FileDirective);
	
	var _FileSelect = __webpack_require__(7);
	
	var _FileSelect2 = _interopRequireDefault(_FileSelect);
	
	var _FileDrop = __webpack_require__(8);
	
	var _FileDrop2 = _interopRequireDefault(_FileDrop);
	
	var _FileOver = __webpack_require__(9);
	
	var _FileOver2 = _interopRequireDefault(_FileOver);
	
	var _FileSelect3 = __webpack_require__(10);
	
	var _FileSelect4 = _interopRequireDefault(_FileSelect3);
	
	var _FileDrop3 = __webpack_require__(11);
	
	var _FileDrop4 = _interopRequireDefault(_FileDrop3);
	
	var _FileOver3 = __webpack_require__(12);
	
	var _FileOver4 = _interopRequireDefault(_FileOver3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	angular.module(_config2.default.name, []).value('fileUploaderOptions', _options2.default).factory('FileUploader', _FileUploader2.default).factory('FileLikeObject', _FileLikeObject2.default).factory('FileItem', _FileItem2.default).factory('FileDirective', _FileDirective2.default).factory('FileSelect', _FileSelect2.default).factory('FileDrop', _FileDrop2.default).factory('FileOver', _FileOver2.default).directive('nvFileSelect', _FileSelect4.default).directive('nvFileDrop', _FileDrop4.default).directive('nvFileOver', _FileOver4.default).run(['FileUploader', 'FileLikeObject', 'FileItem', 'FileDirective', 'FileSelect', 'FileDrop', 'FileOver', function (FileUploader, FileLikeObject, FileItem, FileDirective, FileSelect, FileDrop, FileOver) {
	    // only for compatibility
	    FileUploader.FileLikeObject = FileLikeObject;
	    FileUploader.FileItem = FileItem;
	    FileUploader.FileDirective = FileDirective;
	    FileUploader.FileSelect = FileSelect;
	    FileUploader.FileDrop = FileDrop;
	    FileUploader.FileOver = FileOver;
	}]);

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
		"name": "angularFileUpload"
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    url: '/',
	    alias: 'file',
	    headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
	    queue: [],
	    progress: 0,
	    autoUpload: false,
	    removeAfterUpload: false,
	    method: 'POST',
	    filters: [],
	    formData: [],
	    queueLimit: Number.MAX_VALUE,
	    withCredentials: false,
	    disableMultipart: false
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = __identity;
	
	var _config = __webpack_require__(1);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _angular = angular;
	var copy = _angular.copy;
	var extend = _angular.extend;
	var forEach = _angular.forEach;
	var isObject = _angular.isObject;
	var isNumber = _angular.isNumber;
	var isDefined = _angular.isDefined;
	var isArray = _angular.isArray;
	var element = _angular.element;
	function __identity(fileUploaderOptions, $rootScope, $http, $window, $timeout, FileLikeObject, FileItem) {
	    var File = $window.File;
	    var FormData = $window.FormData;
	
	    var FileUploader = function () {
	        /**********************
	         * PUBLIC
	         **********************/
	        /**
	         * Creates an instance of FileUploader
	         * @param {Object} [options]
	         * @constructor
	         */
	
	        function FileUploader(options) {
	            _classCallCheck(this, FileUploader);
	
	            var settings = copy(fileUploaderOptions);
	
	            extend(this, settings, options, {
	                isUploading: false,
	                _nextIndex: 0,
	                _failFilterIndex: -1,
	                _directives: { select: [], drop: [], over: [] }
	            });
	
	            // add default filters
	            this.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
	            this.filters.unshift({ name: 'folder', fn: this._folderFilter });
	        }
	        /**
	         * Adds items to the queue
	         * @param {File|HTMLInputElement|Object|FileList|Array<Object>} files
	         * @param {Object} [options]
	         * @param {Array<Function>|String} filters
	         */
	
	
	        FileUploader.prototype.addToQueue = function addToQueue(files, options, filters) {
	            var _this = this;
	
	            var list = this.isArrayLikeObject(files) ? files : [files];
	            var arrayOfFilters = this._getFilters(filters);
	            var count = this.queue.length;
	            var addedFileItems = [];
	
	            forEach(list, function (some /*{File|HTMLInputElement|Object}*/) {
	                var temp = new FileLikeObject(some);
	
	                if (_this._isValidFile(temp, arrayOfFilters, options)) {
	                    var fileItem = new FileItem(_this, some, options);
	                    addedFileItems.push(fileItem);
	                    _this.queue.push(fileItem);
	                    _this._onAfterAddingFile(fileItem);
	                } else {
	                    var filter = arrayOfFilters[_this._failFilterIndex];
	                    _this._onWhenAddingFileFailed(temp, filter, options);
	                }
	            });
	
	            if (this.queue.length !== count) {
	                this._onAfterAddingAll(addedFileItems);
	                this.progress = this._getTotalProgress();
	            }
	
	            this._render();
	            if (this.autoUpload) this.uploadAll();
	        };
	        /**
	         * Remove items from the queue. Remove last: index = -1
	         * @param {FileItem|Number} value
	         */
	
	
	        FileUploader.prototype.removeFromQueue = function removeFromQueue(value) {
	            var index = this.getIndexOfItem(value);
	            var item = this.queue[index];
	            if (item.isUploading) item.cancel();
	            this.queue.splice(index, 1);
	            item._destroy();
	            this.progress = this._getTotalProgress();
	        };
	        /**
	         * Clears the queue
	         */
	
	
	        FileUploader.prototype.clearQueue = function clearQueue() {
	            while (this.queue.length) {
	                this.queue[0].remove();
	            }
	            this.progress = 0;
	        };
	        /**
	         * Uploads a item from the queue
	         * @param {FileItem|Number} value
	         */
	
	
	        FileUploader.prototype.uploadItem = function uploadItem(value) {
	            var index = this.getIndexOfItem(value);
	            var item = this.queue[index];
	            var transport = this.isHTML5 ? '_xhrTransport' : '_iframeTransport';
	
	            item._prepareToUploading();
	            if (this.isUploading) return;
	
	            this._onBeforeUploadItem(item);
	            if (item.isCancel) return;
	
	            item.isUploading = true;
	            this.isUploading = true;
	            this[transport](item);
	            this._render();
	        };
	        /**
	         * Cancels uploading of item from the queue
	         * @param {FileItem|Number} value
	         */
	
	
	        FileUploader.prototype.cancelItem = function cancelItem(value) {
	            var _this2 = this;
	
	            var index = this.getIndexOfItem(value);
	            var item = this.queue[index];
	            var prop = this.isHTML5 ? '_xhr' : '_form';
	            if (!item) return;
	            item.isCancel = true;
	            if (item.isUploading) {
	                // It will call this._onCancelItem() & this._onCompleteItem() asynchronously
	                item[prop].abort();
	            } else {
	                (function () {
	                    var dummy = [undefined, 0, {}];
	                    var onNextTick = function onNextTick() {
	                        _this2._onCancelItem.apply(_this2, [item].concat(dummy));
	                        _this2._onCompleteItem.apply(_this2, [item].concat(dummy));
	                    };
	                    $timeout(onNextTick); // Trigger callbacks asynchronously (setImmediate emulation)
	                })();
	            }
	        };
	        /**
	         * Uploads all not uploaded items of queue
	         */
	
	
	        FileUploader.prototype.uploadAll = function uploadAll() {
	            var items = this.getNotUploadedItems().filter(function (item) {
	                return !item.isUploading;
	            });
	            if (!items.length) return;
	
	            forEach(items, function (item) {
	                return item._prepareToUploading();
	            });
	            items[0].upload();
	        };
	        /**
	         * Cancels all uploads
	         */
	
	
	        FileUploader.prototype.cancelAll = function cancelAll() {
	            var items = this.getNotUploadedItems();
	            forEach(items, function (item) {
	                return item.cancel();
	            });
	        };
	        /**
	         * Returns "true" if value an instance of File
	         * @param {*} value
	         * @returns {Boolean}
	         * @private
	         */
	
	
	        FileUploader.prototype.isFile = function isFile(value) {
	            return this.constructor.isFile(value);
	        };
	        /**
	         * Returns "true" if value an instance of FileLikeObject
	         * @param {*} value
	         * @returns {Boolean}
	         * @private
	         */
	
	
	        FileUploader.prototype.isFileLikeObject = function isFileLikeObject(value) {
	            return this.constructor.isFileLikeObject(value);
	        };
	        /**
	         * Returns "true" if value is array like object
	         * @param {*} value
	         * @returns {Boolean}
	         */
	
	
	        FileUploader.prototype.isArrayLikeObject = function isArrayLikeObject(value) {
	            return this.constructor.isArrayLikeObject(value);
	        };
	        /**
	         * Returns a index of item from the queue
	         * @param {Item|Number} value
	         * @returns {Number}
	         */
	
	
	        FileUploader.prototype.getIndexOfItem = function getIndexOfItem(value) {
	            return isNumber(value) ? value : this.queue.indexOf(value);
	        };
	        /**
	         * Returns not uploaded items
	         * @returns {Array}
	         */
	
	
	        FileUploader.prototype.getNotUploadedItems = function getNotUploadedItems() {
	            return this.queue.filter(function (item) {
	                return !item.isUploaded;
	            });
	        };
	        /**
	         * Returns items ready for upload
	         * @returns {Array}
	         */
	
	
	        FileUploader.prototype.getReadyItems = function getReadyItems() {
	            return this.queue.filter(function (item) {
	                return item.isReady && !item.isUploading;
	            }).sort(function (item1, item2) {
	                return item1.index - item2.index;
	            });
	        };
	        /**
	         * Destroys instance of FileUploader
	         */
	
	
	        FileUploader.prototype.destroy = function destroy() {
	            var _this3 = this;
	
	            forEach(this._directives, function (key) {
	                forEach(_this3._directives[key], function (object) {
	                    object.destroy();
	                });
	            });
	        };
	        /**
	         * Callback
	         * @param {Array} fileItems
	         */
	
	
	        FileUploader.prototype.onAfterAddingAll = function onAfterAddingAll(fileItems) {};
	        /**
	         * Callback
	         * @param {FileItem} fileItem
	         */
	
	
	        FileUploader.prototype.onAfterAddingFile = function onAfterAddingFile(fileItem) {};
	        /**
	         * Callback
	         * @param {File|Object} item
	         * @param {Object} filter
	         * @param {Object} options
	         */
	
	
	        FileUploader.prototype.onWhenAddingFileFailed = function onWhenAddingFileFailed(item, filter, options) {};
	        /**
	         * Callback
	         * @param {FileItem} fileItem
	         */
	
	
	        FileUploader.prototype.onBeforeUploadItem = function onBeforeUploadItem(fileItem) {};
	        /**
	         * Callback
	         * @param {FileItem} fileItem
	         * @param {Number} progress
	         */
	
	
	        FileUploader.prototype.onProgressItem = function onProgressItem(fileItem, progress) {};
	        /**
	         * Callback
	         * @param {Number} progress
	         */
	
	
	        FileUploader.prototype.onProgressAll = function onProgressAll(progress) {};
	        /**
	         * Callback
	         * @param {FileItem} item
	         * @param {*} response
	         * @param {Number} status
	         * @param {Object} headers
	         */
	
	
	        FileUploader.prototype.onSuccessItem = function onSuccessItem(item, response, status, headers) {};
	        /**
	         * Callback
	         * @param {FileItem} item
	         * @param {*} response
	         * @param {Number} status
	         * @param {Object} headers
	         */
	
	
	        FileUploader.prototype.onErrorItem = function onErrorItem(item, response, status, headers) {};
	        /**
	         * Callback
	         * @param {FileItem} item
	         * @param {*} response
	         * @param {Number} status
	         * @param {Object} headers
	         */
	
	
	        FileUploader.prototype.onCancelItem = function onCancelItem(item, response, status, headers) {};
	        /**
	         * Callback
	         * @param {FileItem} item
	         * @param {*} response
	         * @param {Number} status
	         * @param {Object} headers
	         */
	
	
	        FileUploader.prototype.onCompleteItem = function onCompleteItem(item, response, status, headers) {};
	        /**
	         * Callback
	         */
	
	
	        FileUploader.prototype.onCompleteAll = function onCompleteAll() {};
	        /**********************
	         * PRIVATE
	         **********************/
	        /**
	         * Returns the total progress
	         * @param {Number} [value]
	         * @returns {Number}
	         * @private
	         */
	
	
	        FileUploader.prototype._getTotalProgress = function _getTotalProgress(value) {
	            if (this.removeAfterUpload) return value || 0;
	
	            var notUploaded = this.getNotUploadedItems().length;
	            var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
	            var ratio = 100 / this.queue.length;
	            var current = (value || 0) * ratio / 100;
	
	            return Math.round(uploaded * ratio + current);
	        };
	        /**
	         * Returns array of filters
	         * @param {Array<Function>|String} filters
	         * @returns {Array<Function>}
	         * @private
	         */
	
	
	        FileUploader.prototype._getFilters = function _getFilters(filters) {
	            if (!filters) return this.filters;
	            if (isArray(filters)) return filters;
	            var names = filters.match(/[^\s,]+/g);
	            return this.filters.filter(function (filter) {
	                return names.indexOf(filter.name) !== -1;
	            });
	        };
	        /**
	         * Updates html
	         * @private
	         */
	
	
	        FileUploader.prototype._render = function _render() {
	            if (!$rootScope.$$phase) $rootScope.$apply();
	        };
	        /**
	         * Returns "true" if item is a file (not folder)
	         * @param {File|FileLikeObject} item
	         * @returns {Boolean}
	         * @private
	         */
	
	
	        FileUploader.prototype._folderFilter = function _folderFilter(item) {
	            return !!(item.size || item.type);
	        };
	        /**
	         * Returns "true" if the limit has not been reached
	         * @returns {Boolean}
	         * @private
	         */
	
	
	        FileUploader.prototype._queueLimitFilter = function _queueLimitFilter() {
	            return this.queue.length < this.queueLimit;
	        };
	        /**
	         * Returns "true" if file pass all filters
	         * @param {File|Object} file
	         * @param {Array<Function>} filters
	         * @param {Object} options
	         * @returns {Boolean}
	         * @private
	         */
	
	
	        FileUploader.prototype._isValidFile = function _isValidFile(file, filters, options) {
	            var _this4 = this;
	
	            this._failFilterIndex = -1;
	            return !filters.length ? true : filters.every(function (filter) {
	                _this4._failFilterIndex++;
	                return filter.fn.call(_this4, file, options);
	            });
	        };
	        /**
	         * Checks whether upload successful
	         * @param {Number} status
	         * @returns {Boolean}
	         * @private
	         */
	
	
	        FileUploader.prototype._isSuccessCode = function _isSuccessCode(status) {
	            return status >= 200 && status < 300 || status === 304;
	        };
	        /**
	         * Transforms the server response
	         * @param {*} response
	         * @param {Object} headers
	         * @returns {*}
	         * @private
	         */
	
	
	        FileUploader.prototype._transformResponse = function _transformResponse(response, headers) {
	            var headersGetter = this._headersGetter(headers);
	            forEach($http.defaults.transformResponse, function (transformFn) {
	                response = transformFn(response, headersGetter);
	            });
	            return response;
	        };
	        /**
	         * Parsed response headers
	         * @param headers
	         * @returns {Object}
	         * @see https://github.com/angular/angular.js/blob/master/src/ng/http.js
	         * @private
	         */
	
	
	        FileUploader.prototype._parseHeaders = function _parseHeaders(headers) {
	            var parsed = {},
	                key,
	                val,
	                i;
	
	            if (!headers) return parsed;
	
	            forEach(headers.split('\n'), function (line) {
	                i = line.indexOf(':');
	                key = line.slice(0, i).trim().toLowerCase();
	                val = line.slice(i + 1).trim();
	
	                if (key) {
	                    parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	                }
	            });
	
	            return parsed;
	        };
	        /**
	         * Returns function that returns headers
	         * @param {Object} parsedHeaders
	         * @returns {Function}
	         * @private
	         */
	
	
	        FileUploader.prototype._headersGetter = function _headersGetter(parsedHeaders) {
	            return function (name) {
	                if (name) {
	                    return parsedHeaders[name.toLowerCase()] || null;
	                }
	                return parsedHeaders;
	            };
	        };
	        /**
	         * The XMLHttpRequest transport
	         * @param {FileItem} item
	         * @private
	         */
	
	
	        FileUploader.prototype._xhrTransport = function _xhrTransport(item) {
	            var _this5 = this;
	
	            var xhr = item._xhr = new XMLHttpRequest();
	            var sendable;
	
	            if (!item.disableMultipart) {
	                sendable = new FormData();
	                forEach(item.formData, function (obj) {
	                    forEach(obj, function (value, key) {
	                        sendable.append(key, value);
	                    });
	                });
	
	                sendable.append(item.alias, item._file, item.file.name);
	            } else {
	                sendable = item._file;
	            }
	
	            if (typeof item._file.size != 'number') {
	                throw new TypeError('The file specified is no longer valid');
	            }
	
	            xhr.upload.onprogress = function (event) {
	                var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
	                _this5._onProgressItem(item, progress);
	            };
	
	            xhr.onload = function () {
	                var headers = _this5._parseHeaders(xhr.getAllResponseHeaders());
	                var response = _this5._transformResponse(xhr.response, headers);
	                var gist = _this5._isSuccessCode(xhr.status) ? 'Success' : 'Error';
	                var method = '_on' + gist + 'Item';
	                _this5[method](item, response, xhr.status, headers);
	                _this5._onCompleteItem(item, response, xhr.status, headers);
	            };
	
	            xhr.onerror = function () {
	                var headers = _this5._parseHeaders(xhr.getAllResponseHeaders());
	                var response = _this5._transformResponse(xhr.response, headers);
	                _this5._onErrorItem(item, response, xhr.status, headers);
	                _this5._onCompleteItem(item, response, xhr.status, headers);
	            };
	
	            xhr.onabort = function () {
	                var headers = _this5._parseHeaders(xhr.getAllResponseHeaders());
	                var response = _this5._transformResponse(xhr.response, headers);
	                _this5._onCancelItem(item, response, xhr.status, headers);
	                _this5._onCompleteItem(item, response, xhr.status, headers);
	            };
	
	            xhr.open(item.method, item.url, true);
	
	            xhr.withCredentials = item.withCredentials;
	
	            forEach(item.headers, function (value, name) {
	                xhr.setRequestHeader(name, value);
	            });
	
	            xhr.send(sendable);
	        };
	        /**
	         * The IFrame transport
	         * @param {FileItem} item
	         * @private
	         */
	
	
	        FileUploader.prototype._iframeTransport = function _iframeTransport(item) {
	            var _this6 = this;
	
	            var form = element('<form style="display: none;" />');
	            var iframe = element('<iframe name="iframeTransport' + Date.now() + '">');
	            var input = item._input;
	
	            if (item._form) item._form.replaceWith(input); // remove old form
	            item._form = form; // save link to new form
	
	            input.prop('name', item.alias);
	
	            forEach(item.formData, function (obj) {
	                forEach(obj, function (value, key) {
	                    var element_ = element('<input type="hidden" name="' + key + '" />');
	                    element_.val(value);
	                    form.append(element_);
	                });
	            });
	
	            form.prop({
	                action: item.url,
	                method: 'POST',
	                target: iframe.prop('name'),
	                enctype: 'multipart/form-data',
	                encoding: 'multipart/form-data' // old IE
	            });
	
	            iframe.bind('load', function () {
	                var html = '';
	                var status = 200;
	
	                try {
	                    // Fix for legacy IE browsers that loads internal error page
	                    // when failed WS response received. In consequence iframe
	                    // content access denied error is thrown becouse trying to
	                    // access cross domain page. When such thing occurs notifying
	                    // with empty response object. See more info at:
	                    // http://stackoverflow.com/questions/151362/access-is-denied-error-on-accessing-iframe-document-object
	                    // Note that if non standard 4xx or 5xx error code returned
	                    // from WS then response content can be accessed without error
	                    // but 'XHR' status becomes 200. In order to avoid confusion
	                    // returning response via same 'success' event handler.
	
	                    // fixed angular.contents() for iframes
	                    html = iframe[0].contentDocument.body.innerHTML;
	                } catch (e) {
	                    // in case we run into the access-is-denied error or we have another error on the server side
	                    // (intentional 500,40... errors), we at least say 'something went wrong' -> 500
	                    status = 500;
	                }
	
	                var xhr = { response: html, status: status, dummy: true };
	                var headers = {};
	                var response = _this6._transformResponse(xhr.response, headers);
	
	                _this6._onSuccessItem(item, response, xhr.status, headers);
	                _this6._onCompleteItem(item, response, xhr.status, headers);
	            });
	
	            form.abort = function () {
	                var xhr = { status: 0, dummy: true };
	                var headers = {};
	                var response;
	
	                iframe.unbind('load').prop('src', 'javascript:false;');
	                form.replaceWith(input);
	
	                _this6._onCancelItem(item, response, xhr.status, headers);
	                _this6._onCompleteItem(item, response, xhr.status, headers);
	            };
	
	            input.after(form);
	            form.append(input).append(iframe);
	
	            form[0].submit();
	        };
	        /**
	         * Inner callback
	         * @param {File|Object} item
	         * @param {Object} filter
	         * @param {Object} options
	         * @private
	         */
	
	
	        FileUploader.prototype._onWhenAddingFileFailed = function _onWhenAddingFileFailed(item, filter, options) {
	            this.onWhenAddingFileFailed(item, filter, options);
	        };
	        /**
	         * Inner callback
	         * @param {FileItem} item
	         */
	
	
	        FileUploader.prototype._onAfterAddingFile = function _onAfterAddingFile(item) {
	            this.onAfterAddingFile(item);
	        };
	        /**
	         * Inner callback
	         * @param {Array<FileItem>} items
	         */
	
	
	        FileUploader.prototype._onAfterAddingAll = function _onAfterAddingAll(items) {
	            this.onAfterAddingAll(items);
	        };
	        /**
	         *  Inner callback
	         * @param {FileItem} item
	         * @private
	         */
	
	
	        FileUploader.prototype._onBeforeUploadItem = function _onBeforeUploadItem(item) {
	            item._onBeforeUpload();
	            this.onBeforeUploadItem(item);
	        };
	        /**
	         * Inner callback
	         * @param {FileItem} item
	         * @param {Number} progress
	         * @private
	         */
	
	
	        FileUploader.prototype._onProgressItem = function _onProgressItem(item, progress) {
	            var total = this._getTotalProgress(progress);
	            this.progress = total;
	            item._onProgress(progress);
	            this.onProgressItem(item, progress);
	            this.onProgressAll(total);
	            this._render();
	        };
	        /**
	         * Inner callback
	         * @param {FileItem} item
	         * @param {*} response
	         * @param {Number} status
	         * @param {Object} headers
	         * @private
	         */
	
	
	        FileUploader.prototype._onSuccessItem = function _onSuccessItem(item, response, status, headers) {
	            item._onSuccess(response, status, headers);
	            this.onSuccessItem(item, response, status, headers);
	        };
	        /**
	         * Inner callback
	         * @param {FileItem} item
	         * @param {*} response
	         * @param {Number} status
	         * @param {Object} headers
	         * @private
	         */
	
	
	        FileUploader.prototype._onErrorItem = function _onErrorItem(item, response, status, headers) {
	            item._onError(response, status, headers);
	            this.onErrorItem(item, response, status, headers);
	        };
	        /**
	         * Inner callback
	         * @param {FileItem} item
	         * @param {*} response
	         * @param {Number} status
	         * @param {Object} headers
	         * @private
	         */
	
	
	        FileUploader.prototype._onCancelItem = function _onCancelItem(item, response, status, headers) {
	            item._onCancel(response, status, headers);
	            this.onCancelItem(item, response, status, headers);
	        };
	        /**
	         * Inner callback
	         * @param {FileItem} item
	         * @param {*} response
	         * @param {Number} status
	         * @param {Object} headers
	         * @private
	         */
	
	
	        FileUploader.prototype._onCompleteItem = function _onCompleteItem(item, response, status, headers) {
	            item._onComplete(response, status, headers);
	            this.onCompleteItem(item, response, status, headers);
	
	            var nextItem = this.getReadyItems()[0];
	            this.isUploading = false;
	
	            if (isDefined(nextItem)) {
	                nextItem.upload();
	                return;
	            }
	
	            this.onCompleteAll();
	            this.progress = this._getTotalProgress();
	            this._render();
	        };
	        /**********************
	         * STATIC
	         **********************/
	        /**
	         * Returns "true" if value an instance of File
	         * @param {*} value
	         * @returns {Boolean}
	         * @private
	         */
	
	
	        FileUploader.isFile = function isFile(value) {
	            return File && value instanceof File;
	        };
	        /**
	         * Returns "true" if value an instance of FileLikeObject
	         * @param {*} value
	         * @returns {Boolean}
	         * @private
	         */
	
	
	        FileUploader.isFileLikeObject = function isFileLikeObject(value) {
	            return value instanceof FileLikeObject;
	        };
	        /**
	         * Returns "true" if value is array like object
	         * @param {*} value
	         * @returns {Boolean}
	         */
	
	
	        FileUploader.isArrayLikeObject = function isArrayLikeObject(value) {
	            return isObject(value) && 'length' in value;
	        };
	        /**
	         * Inherits a target (Class_1) by a source (Class_2)
	         * @param {Function} target
	         * @param {Function} source
	         */
	
	
	        FileUploader.inherit = function inherit(target, source) {
	            target.prototype = Object.create(source.prototype);
	            target.prototype.constructor = target;
	            target.super_ = source;
	        };
	
	        return FileUploader;
	    }();
	
	    /**********************
	     * PUBLIC
	     **********************/
	    /**
	     * Checks a support the html5 uploader
	     * @returns {Boolean}
	     * @readonly
	     */
	
	
	    FileUploader.prototype.isHTML5 = !!(File && FormData);
	    /**********************
	     * STATIC
	     **********************/
	    /**
	     * @borrows FileUploader.prototype.isHTML5
	     */
	    FileUploader.isHTML5 = FileUploader.prototype.isHTML5;
	
	    return FileUploader;
	}
	
	__identity.$inject = ['fileUploaderOptions', '$rootScope', '$http', '$window', '$timeout', 'FileLikeObject', 'FileItem'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = __identity;
	
	var _config = __webpack_require__(1);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _angular = angular;
	var copy = _angular.copy;
	var isElement = _angular.isElement;
	var isString = _angular.isString;
	function __identity() {
	
	    return function () {
	        /**
	         * Creates an instance of FileLikeObject
	         * @param {File|HTMLInputElement|Object} fileOrInput
	         * @constructor
	         */
	
	        function FileLikeObject(fileOrInput) {
	            _classCallCheck(this, FileLikeObject);
	
	            var isInput = isElement(fileOrInput);
	            var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
	            var postfix = isString(fakePathOrObject) ? 'FakePath' : 'Object';
	            var method = '_createFrom' + postfix;
	            this[method](fakePathOrObject);
	        }
	        /**
	         * Creates file like object from fake path string
	         * @param {String} path
	         * @private
	         */
	
	
	        FileLikeObject.prototype._createFromFakePath = function _createFromFakePath(path) {
	            this.lastModifiedDate = null;
	            this.size = null;
	            this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
	            this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
	        };
	        /**
	         * Creates file like object from object
	         * @param {File|FileLikeObject} object
	         * @private
	         */
	
	
	        FileLikeObject.prototype._createFromObject = function _createFromObject(object) {
	            this.lastModifiedDate = copy(object.lastModifiedDate);
	            this.size = object.size;
	            this.type = object.type;
	            this.name = object.name;
	        };
	
	        return FileLikeObject;
	    }();
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = __identity;
	
	var _config = __webpack_require__(1);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _angular = angular;
	var copy = _angular.copy;
	var extend = _angular.extend;
	var element = _angular.element;
	var isElement = _angular.isElement;
	function __identity($compile, FileLikeObject) {
	
	    return function () {
	        /**
	         * Creates an instance of FileItem
	         * @param {FileUploader} uploader
	         * @param {File|HTMLInputElement|Object} some
	         * @param {Object} options
	         * @constructor
	         */
	
	        function FileItem(uploader, some, options) {
	            _classCallCheck(this, FileItem);
	
	            var isInput = isElement(some);
	            var input = isInput ? element(some) : null;
	            var file = !isInput ? some : null;
	
	            extend(this, {
	                url: uploader.url,
	                alias: uploader.alias,
	                headers: copy(uploader.headers),
	                formData: copy(uploader.formData),
	                removeAfterUpload: uploader.removeAfterUpload,
	                withCredentials: uploader.withCredentials,
	                disableMultipart: uploader.disableMultipart,
	                method: uploader.method
	            }, options, {
	                uploader: uploader,
	                file: new FileLikeObject(some),
	                isReady: false,
	                isUploading: false,
	                isUploaded: false,
	                isSuccess: false,
	                isCancel: false,
	                isError: false,
	                progress: 0,
	                index: null,
	                _file: file,
	                _input: input
	            });
	
	            if (input) this._replaceNode(input);
	        }
	        /**********************
	         * PUBLIC
	         **********************/
	        /**
	         * Uploads a FileItem
	         */
	
	
	        FileItem.prototype.upload = function upload() {
	            try {
	                this.uploader.uploadItem(this);
	            } catch (e) {
	                this.uploader._onCompleteItem(this, '', 0, []);
	                this.uploader._onErrorItem(this, '', 0, []);
	            }
	        };
	        /**
	         * Cancels uploading of FileItem
	         */
	
	
	        FileItem.prototype.cancel = function cancel() {
	            this.uploader.cancelItem(this);
	        };
	        /**
	         * Removes a FileItem
	         */
	
	
	        FileItem.prototype.remove = function remove() {
	            this.uploader.removeFromQueue(this);
	        };
	        /**
	         * Callback
	         * @private
	         */
	
	
	        FileItem.prototype.onBeforeUpload = function onBeforeUpload() {};
	        /**
	         * Callback
	         * @param {Number} progress
	         * @private
	         */
	
	
	        FileItem.prototype.onProgress = function onProgress(progress) {};
	        /**
	         * Callback
	         * @param {*} response
	         * @param {Number} status
	         * @param {Object} headers
	         */
	
	
	        FileItem.prototype.onSuccess = function onSuccess(response, status, headers) {};
	        /**
	         * Callback
	         * @param {*} response
	         * @param {Number} status
	         * @param {Object} headers
	         */
	
	
	        FileItem.prototype.onError = function onError(response, status, headers) {};
	        /**
	         * Callback
	         * @param {*} response
	         * @param {Number} status
	         * @param {Object} headers
	         */
	
	
	        FileItem.prototype.onCancel = function onCancel(response, status, headers) {};
	        /**
	         * Callback
	         * @param {*} response
	         * @param {Number} status
	         * @param {Object} headers
	         */
	
	
	        FileItem.prototype.onComplete = function onComplete(response, status, headers) {};
	        /**********************
	         * PRIVATE
	         **********************/
	        /**
	         * Inner callback
	         */
	
	
	        FileItem.prototype._onBeforeUpload = function _onBeforeUpload() {
	            this.isReady = true;
	            this.isUploading = false;
	            this.isUploaded = false;
	            this.isSuccess = false;
	            this.isCancel = false;
	            this.isError = false;
	            this.progress = 0;
	            this.onBeforeUpload();
	        };
	        /**
	         * Inner callback
	         * @param {Number} progress
	         * @private
	         */
	
	
	        FileItem.prototype._onProgress = function _onProgress(progress) {
	            this.progress = progress;
	            this.onProgress(progress);
	        };
	        /**
	         * Inner callback
	         * @param {*} response
	         * @param {Number} status
	         * @param {Object} headers
	         * @private
	         */
	
	
	        FileItem.prototype._onSuccess = function _onSuccess(response, status, headers) {
	            this.isReady = false;
	            this.isUploading = false;
	            this.isUploaded = true;
	            this.isSuccess = true;
	            this.isCancel = false;
	            this.isError = false;
	            this.progress = 100;
	            this.index = null;
	            this.onSuccess(response, status, headers);
	        };
	        /**
	         * Inner callback
	         * @param {*} response
	         * @param {Number} status
	         * @param {Object} headers
	         * @private
	         */
	
	
	        FileItem.prototype._onError = function _onError(response, status, headers) {
	            this.isReady = false;
	            this.isUploading = false;
	            this.isUploaded = true;
	            this.isSuccess = false;
	            this.isCancel = false;
	            this.isError = true;
	            this.progress = 0;
	            this.index = null;
	            this.onError(response, status, headers);
	        };
	        /**
	         * Inner callback
	         * @param {*} response
	         * @param {Number} status
	         * @param {Object} headers
	         * @private
	         */
	
	
	        FileItem.prototype._onCancel = function _onCancel(response, status, headers) {
	            this.isReady = false;
	            this.isUploading = false;
	            this.isUploaded = false;
	            this.isSuccess = false;
	            this.isCancel = true;
	            this.isError = false;
	            this.progress = 0;
	            this.index = null;
	            this.onCancel(response, status, headers);
	        };
	        /**
	         * Inner callback
	         * @param {*} response
	         * @param {Number} status
	         * @param {Object} headers
	         * @private
	         */
	
	
	        FileItem.prototype._onComplete = function _onComplete(response, status, headers) {
	            this.onComplete(response, status, headers);
	            if (this.removeAfterUpload) this.remove();
	        };
	        /**
	         * Destroys a FileItem
	         */
	
	
	        FileItem.prototype._destroy = function _destroy() {
	            if (this._input) this._input.remove();
	            if (this._form) this._form.remove();
	            delete this._form;
	            delete this._input;
	        };
	        /**
	         * Prepares to uploading
	         * @private
	         */
	
	
	        FileItem.prototype._prepareToUploading = function _prepareToUploading() {
	            this.index = this.index || ++this.uploader._nextIndex;
	            this.isReady = true;
	        };
	        /**
	         * Replaces input element on his clone
	         * @param {JQLite|jQuery} input
	         * @private
	         */
	
	
	        FileItem.prototype._replaceNode = function _replaceNode(input) {
	            var clone = $compile(input.clone())(input.scope());
	            clone.prop('value', null); // FF fix
	            input.css('display', 'none');
	            input.after(clone); // remove jquery dependency
	        };
	
	        return FileItem;
	    }();
	}
	
	__identity.$inject = ['$compile', 'FileLikeObject'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = __identity;
	
	var _config = __webpack_require__(1);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _angular = angular;
	var extend = _angular.extend;
	function __identity() {
	    var FileDirective = function () {
	        /**
	         * Creates instance of {FileDirective} object
	         * @param {Object} options
	         * @param {Object} options.uploader
	         * @param {HTMLElement} options.element
	         * @param {Object} options.events
	         * @param {String} options.prop
	         * @constructor
	         */
	
	        function FileDirective(options) {
	            _classCallCheck(this, FileDirective);
	
	            extend(this, options);
	            this.uploader._directives[this.prop].push(this);
	            this._saveLinks();
	            this.bind();
	        }
	        /**
	         * Binds events handles
	         */
	
	
	        FileDirective.prototype.bind = function bind() {
	            for (var key in this.events) {
	                var prop = this.events[key];
	                this.element.bind(key, this[prop]);
	            }
	        };
	        /**
	         * Unbinds events handles
	         */
	
	
	        FileDirective.prototype.unbind = function unbind() {
	            for (var key in this.events) {
	                this.element.unbind(key, this.events[key]);
	            }
	        };
	        /**
	         * Destroys directive
	         */
	
	
	        FileDirective.prototype.destroy = function destroy() {
	            var index = this.uploader._directives[this.prop].indexOf(this);
	            this.uploader._directives[this.prop].splice(index, 1);
	            this.unbind();
	            // this.element = null;
	        };
	        /**
	         * Saves links to functions
	         * @private
	         */
	
	
	        FileDirective.prototype._saveLinks = function _saveLinks() {
	            for (var key in this.events) {
	                var prop = this.events[key];
	                this[prop] = this[prop].bind(this);
	            }
	        };
	
	        return FileDirective;
	    }();
	
	    /**
	     * Map of events
	     * @type {Object}
	     */
	
	
	    FileDirective.prototype.events = {};
	
	    return FileDirective;
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = __identity;
	
	var _config = __webpack_require__(1);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _angular = angular;
	var extend = _angular.extend;
	function __identity($compile, FileDirective) {
	
	    return function (_FileDirective) {
	        _inherits(FileSelect, _FileDirective);
	
	        /**
	         * Creates instance of {FileSelect} object
	         * @param {Object} options
	         * @constructor
	         */
	
	        function FileSelect(options) {
	            _classCallCheck(this, FileSelect);
	
	            var extendedOptions = extend(options, {
	                // Map of events
	                events: {
	                    $destroy: 'destroy',
	                    change: 'onChange'
	                },
	                // Name of property inside uploader._directive object
	                prop: 'select'
	            });
	
	            var _this = _possibleConstructorReturn(this, _FileDirective.call(this, extendedOptions));
	
	            if (!_this.uploader.isHTML5) {
	                _this.element.removeAttr('multiple');
	            }
	            _this.element.prop('value', null); // FF fix
	            return _this;
	        }
	        /**
	         * Returns options
	         * @return {Object|undefined}
	         */
	
	
	        FileSelect.prototype.getOptions = function getOptions() {};
	        /**
	         * Returns filters
	         * @return {Array<Function>|String|undefined}
	         */
	
	
	        FileSelect.prototype.getFilters = function getFilters() {};
	        /**
	         * If returns "true" then HTMLInputElement will be cleared
	         * @returns {Boolean}
	         */
	
	
	        FileSelect.prototype.isEmptyAfterSelection = function isEmptyAfterSelection() {
	            return !!this.element.attr('multiple');
	        };
	        /**
	         * Event handler
	         */
	
	
	        FileSelect.prototype.onChange = function onChange() {
	            var files = this.uploader.isHTML5 ? this.element[0].files : this.element[0];
	            var options = this.getOptions();
	            var filters = this.getFilters();
	
	            if (!this.uploader.isHTML5) this.destroy();
	            this.uploader.addToQueue(files, options, filters);
	            if (this.isEmptyAfterSelection()) {
	                this.element.prop('value', null);
	                this.element.replaceWith($compile(this.element.clone())(this.scope)); // IE fix
	            }
	        };
	
	        return FileSelect;
	    }(FileDirective);
	}
	
	__identity.$inject = ['$compile', 'FileDirective'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = __identity;
	
	var _config = __webpack_require__(1);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _angular = angular;
	var extend = _angular.extend;
	var forEach = _angular.forEach;
	function __identity(FileDirective) {
	
	    return function (_FileDirective) {
	        _inherits(FileDrop, _FileDirective);
	
	        /**
	         * Creates instance of {FileDrop} object
	         * @param {Object} options
	         * @constructor
	         */
	
	        function FileDrop(options) {
	            _classCallCheck(this, FileDrop);
	
	            var extendedOptions = extend(options, {
	                // Map of events
	                events: {
	                    $destroy: 'destroy',
	                    drop: 'onDrop',
	                    dragover: 'onDragOver',
	                    dragleave: 'onDragLeave'
	                },
	                // Name of property inside uploader._directive object
	                prop: 'drop'
	            });
	
	            return _possibleConstructorReturn(this, _FileDirective.call(this, extendedOptions));
	        }
	        /**
	         * Returns options
	         * @return {Object|undefined}
	         */
	
	
	        FileDrop.prototype.getOptions = function getOptions() {};
	        /**
	         * Returns filters
	         * @return {Array<Function>|String|undefined}
	         */
	
	
	        FileDrop.prototype.getFilters = function getFilters() {};
	        /**
	         * Event handler
	         */
	
	
	        FileDrop.prototype.onDrop = function onDrop(event) {
	            var transfer = this._getTransfer(event);
	            if (!transfer) return;
	            var options = this.getOptions();
	            var filters = this.getFilters();
	            this._preventAndStop(event);
	            forEach(this.uploader._directives.over, this._removeOverClass, this);
	            this.uploader.addToQueue(transfer.files, options, filters);
	        };
	        /**
	         * Event handler
	         */
	
	
	        FileDrop.prototype.onDragOver = function onDragOver(event) {
	            var transfer = this._getTransfer(event);
	            if (!this._haveFiles(transfer.types)) return;
	            transfer.dropEffect = 'copy';
	            this._preventAndStop(event);
	            forEach(this.uploader._directives.over, this._addOverClass, this);
	        };
	        /**
	         * Event handler
	         */
	
	
	        FileDrop.prototype.onDragLeave = function onDragLeave(event) {
	            if (event.currentTarget === this.element[0]) return;
	            this._preventAndStop(event);
	            forEach(this.uploader._directives.over, this._removeOverClass, this);
	        };
	        /**
	         * Helper
	         */
	
	
	        FileDrop.prototype._getTransfer = function _getTransfer(event) {
	            return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
	        };
	        /**
	         * Helper
	         */
	
	
	        FileDrop.prototype._preventAndStop = function _preventAndStop(event) {
	            event.preventDefault();
	            event.stopPropagation();
	        };
	        /**
	         * Returns "true" if types contains files
	         * @param {Object} types
	         */
	
	
	        FileDrop.prototype._haveFiles = function _haveFiles(types) {
	            if (!types) return false;
	            if (types.indexOf) {
	                return types.indexOf('Files') !== -1;
	            } else if (types.contains) {
	                return types.contains('Files');
	            } else {
	                return false;
	            }
	        };
	        /**
	         * Callback
	         */
	
	
	        FileDrop.prototype._addOverClass = function _addOverClass(item) {
	            item.addOverClass();
	        };
	        /**
	         * Callback
	         */
	
	
	        FileDrop.prototype._removeOverClass = function _removeOverClass(item) {
	            item.removeOverClass();
	        };
	
	        return FileDrop;
	    }(FileDirective);
	}
	
	__identity.$inject = ['FileDirective'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = __identity;
	
	var _config = __webpack_require__(1);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _angular = angular;
	var extend = _angular.extend;
	function __identity(FileDirective) {
	
	    return function (_FileDirective) {
	        _inherits(FileOver, _FileDirective);
	
	        /**
	         * Creates instance of {FileDrop} object
	         * @param {Object} options
	         * @constructor
	         */
	
	        function FileOver(options) {
	            _classCallCheck(this, FileOver);
	
	            var extendedOptions = extend(options, {
	                // Map of events
	                events: {
	                    $destroy: 'destroy'
	                },
	                // Name of property inside uploader._directive object
	                prop: 'over',
	                // Over class
	                overClass: 'nv-file-over'
	            });
	
	            return _possibleConstructorReturn(this, _FileDirective.call(this, extendedOptions));
	        }
	        /**
	         * Adds over class
	         */
	
	
	        FileOver.prototype.addOverClass = function addOverClass() {
	            this.element.addClass(this.getOverClass());
	        };
	        /**
	         * Removes over class
	         */
	
	
	        FileOver.prototype.removeOverClass = function removeOverClass() {
	            this.element.removeClass(this.getOverClass());
	        };
	        /**
	         * Returns over class
	         * @returns {String}
	         */
	
	
	        FileOver.prototype.getOverClass = function getOverClass() {
	            return this.overClass;
	        };
	
	        return FileOver;
	    }(FileDirective);
	}
	
	__identity.$inject = ['FileDirective'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = __identity;
	
	var _config = __webpack_require__(1);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function __identity($parse, FileUploader, FileSelect) {
	
	    return {
	        link: function link(scope, element, attributes) {
	            var uploader = scope.$eval(attributes.uploader);
	
	            if (!(uploader instanceof FileUploader)) {
	                throw new TypeError('"Uploader" must be an instance of FileUploader');
	            }
	
	            var object = new FileSelect({
	                uploader: uploader,
	                element: element,
	                scope: scope
	            });
	
	            object.getOptions = $parse(attributes.options).bind(object, scope);
	            object.getFilters = function () {
	                return attributes.filters;
	            };
	        }
	    };
	}
	
	__identity.$inject = ['$parse', 'FileUploader', 'FileSelect'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = __identity;
	
	var _config = __webpack_require__(1);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function __identity($parse, FileUploader, FileDrop) {
	
	    return {
	        link: function link(scope, element, attributes) {
	            var uploader = scope.$eval(attributes.uploader);
	
	            if (!(uploader instanceof FileUploader)) {
	                throw new TypeError('"Uploader" must be an instance of FileUploader');
	            }
	
	            if (!uploader.isHTML5) return;
	
	            var object = new FileDrop({
	                uploader: uploader,
	                element: element
	            });
	
	            object.getOptions = $parse(attributes.options).bind(object, scope);
	            object.getFilters = function () {
	                return attributes.filters;
	            };
	        }
	    };
	}
	
	__identity.$inject = ['$parse', 'FileUploader', 'FileDrop'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = __identity;
	
	var _config = __webpack_require__(1);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function __identity(FileUploader, FileOver) {
	
	    return {
	        link: function link(scope, element, attributes) {
	            var uploader = scope.$eval(attributes.uploader);
	
	            if (!(uploader instanceof FileUploader)) {
	                throw new TypeError('"Uploader" must be an instance of FileUploader');
	            }
	
	            var object = new FileOver({
	                uploader: uploader,
	                element: element
	            });
	
	            object.getOverClass = function () {
	                return attributes.overClass || object.overClass;
	            };
	        }
	    };
	}
	
	__identity.$inject = ['FileUploader', 'FileOver'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=angular-file-upload.js.map
// --Author Muragijimana Richard <beastar457@gmail.com>

$.ajaxPrefilter(function (options, originalOptions, jqXHR) {
  options.async = true;
});
var Logger = angular.module("Logger", [])

.config(['$sceProvider', '$httpProvider', function ($sceProvider, $httpProvider) {
  
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $httpProvider.defaults.headers.post.Accept = 'application/json, text/javascript';
    $httpProvider.defaults.headers.post.Accept = 'application/json, text/javascript';
    // $httpProvider.defaults.headers.common.authorization = 'Bearer WiFBDwFHxWQy2HEK6ZGpXB8cOfkYw4ORnIOVrBMZ';
    $httpProvider.defaults.headers.common['X-CSRF-TOKEN'] = $('meta[name="csrf-token"]').attr('content');
    $httpProvider.defaults.useXDomain = true;
    $sceProvider.enabled(false);

  }])
  .run(['$rootScope', function ($rootScope) {

    $rootScope.endPoint='https://streamupbox.com';
    // $rootScope.endPoint = 'http://localhost:8000';


  }])
  .directive('socialite', [function () {
    return {
      restrict: 'E',
      templateUrl: 'views/socialite.html',
      link: function (scope, el, attr) {

      }
    };
  }])
  .controller('socialite', ['$rootScope', '$http', function ($rootScope, $http) {
    var googleUser = {};
    var startApp = function () {
      gapi.load('auth2', function () {

        //Retrieve the singleton for the GoogleAuth library and set up the client.
        auth2 = gapi.auth2.init({

          client_id: '543558933111-jem87i5i8aspa247qqgr900a5lfhs6st.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',

        });
        attachSignin(document.getElementById('customBtn'));
      });
    };


    function attachSignin(element) {

      auth2.attachClickHandler(element, {},
        function (googleUser) {
          var params = {
            username: googleUser.getBasicProfile().getName(),
            email: googleUser.getBasicProfile().getEmail(),
            loginType: 'socialite-login'
          }
          $http.post($rootScope.endPoint + '/login', params)
            .success(function (response) {
              console.log(response);
            }).error(function (e) {

            })

          googleUser.getBasicProfile().getEmail();
        },
        function (error) {
          alert(JSON.stringify(error, undefined, 2));
        });
    }


    // startApp();


  }])
.constant('DEBUG', true);
Logger.directive('signup', [function () {
    return {
      restrict: 'AE',
      templateUrl: 'views/signup.html'

    };
  }])
  .directive('login', [function () {
    return {
      restrict: 'AE',
      templateUrl: 'views/login.html'
    };
  }])
  .directive('shortcut', [function () {
    return {
      restrict: 'AE',
      templateUrl: 'views/shortcut.html'
    };
  }]);


angular.module("sync", ["ngRoute", "angularFileUpload", "ngMaterial", "material.svgAssetsCache", "pascalprecht.translate", "ngSanitize", "pdf", "ui.router", "ui.bootstrap", "ui.select"])
  .config(['$sceProvider', '$httpProvider', '$locationProvider', function ($sceProvider, $httpProvider, $locationProvider) {
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.post.Accept = 'application/json, text/javascript';
    $httpProvider.defaults.headers.post.Accept = 'application/json, text/javascript';
  
  
    // $httpProvider.defaults.headers.common.authorization = 'Bearer WiFBDwFHxWQy2HEK6ZGpXB8cOfkYw4ORnIOVrBMZ';
    $httpProvider.defaults.headers.common['X-CSRF-TOKEN'] = $('meta[name="csrf-token"]').attr('content');
    $httpProvider.defaults.useXDomain = true;
    $sceProvider.enabled(false);

    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: true
    // });
    // $locationProvider.html5Mode(true);
 
  }])
  .constant('DEBUG', false)

  .run(['$rootScope', '$log', '$location', '$stateParams', 'User', 'Share','DEBUG', function ($rootScope, $log, $location, $stateParams, User, Share,DEBUG) {
    localStorage.setItem('folderId', 0);
    // $rootScope.endPoint = 'http://localhost:8000';
    $rootScope.endPoint='https://streamupbox.com';

    $rootScope.notificationList = 0;
    User.get()
      .then(function (user) {
        $rootScope.user = user;
        if(DEBUG=== true)
          console.log(user);
      }).catch();

    Share.allssharedFiles()
      .then(function (allfile) {
        $rootScope.countall = allfile;

      }).catch();

    User.notificationList()
      .then(function (counter) {
        $rootScope.notificationList = counter;

      }).catch();

    $rootScope.LeftMenuneeded = true;
    $rootScope.color = 'blue';
    var cashed_folders = [],
    folder_ids = [];
    $rootScope.$on('$locationChangeSuccess', function () {
      
      //start broadcasting current navigated folderId
      if($rootScope.actualLocation !== undefined){

        var currentFolderId = $rootScope.actualLocation.replace('/', '');
        if(currentFolderId !=='Files'){
          $rootScope.$emit('folder:id', currentFolderId);
        }
         
      }
      
      
      $rootScope.actualLocation = $location.path();
        
        
    });

    $rootScope.$watch(function () {
      return $location.path();
    }, function (newLocation, oldLocation) {

      if ($rootScope.actualLocation !== newLocation) {
        cashed_folders.push(newLocation);
        folder_ids.push($stateParams.folderId);
      }
      if (newLocation === "/Files") {
        $rootScope.LeftMenuneeded = true;
        cashed_folders = [];
      }
      if ($rootScope.actualLocation === newLocation) {
        var index = cashed_folders.indexOf(oldLocation);
        cashed_folders.pop(index);
        var indexerOfFolder = folder_ids.pop();
        indexerOfFolder = folder_ids.pop();
        $rootScope.$emit('app:on:browser:back', indexerOfFolder);

      }

    });
  }])
  .filter('propsFilter', function () {
    return function (items, props) {
      var out = [];

      if (angular.isArray(items)) {
        items.forEach(function (item) {
          var itemMatches = false;
          var keys = Object.keys(props);
          for (var i = 0; i < keys.length; i++) {
            var prop = keys[i];
            var text = props[prop].toLowerCase();
            if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
              itemMatches = true;
              break;
            }
          }

          if (itemMatches) {
            out.push(item);
          }
        });
      } else {
        out = items;
      }
      this.enable = function () {
        this.disabled = false;
      };

      this.disable = function () {
        this.disabled = true;
      };

      this.enableSearch = function () {
        this.searchEnabled = true;
      };

      this.disableSearch = function () {
        this.searchEnabled = false;
      };
      this.counter = 0;
      this.onSelectCallback = function (item, model) {
        this.counter++;
        this.eventResult = {
          item: item,
          model: model
        };
      };

      this.removed = function (item, model) {
        this.lastRemoved = {
          item: item,
          model: model
        };
      };

      this.firstLetterGroupFn = function (item) {
        return item.name[0];
      };
      return out;
    };
  })
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('Home', {
        url: "/Files",
        templateUrl: '/views/main.html',
        controller: 'FilesController'
      })
      .state('Settings', {
        url: "/Settings",
        templateUrl: '/views/settings.html'
      })

    .state('Messages', {
      url: "/Messages",
      templateUrl: '/views/message.html',
      controller: 'TweetingWayMessage',
    })

    .state('Upgrade', {
        url: "/Upgrade",
        templateUrl: '/views/upgrade.html',
        controller: 'FilesController'
      })
      .state('preview', {
        url: '/!/:preview/:extension/:of/:user/:folder',
        templateUrl: '/views/filePreview.html',
        controller: 'previewController'

      }).state('bins', {
        url: "/bins/",
        templateUrl: '/views/docs_InBin.html',
        controller: 'FolderController',
        requireLogin: true
      }).state('Filesbins', {
        url: "/bins/",
        templateUrl: '/views/docs_InBin.html',
        controller: 'FilesController',
        requireLogin: true
      })
      .state('sharedreceived', {
        url: '/sharedreceived/{folderName:[a-zA-Z0-9/]*}',
        params: {
          folderId: null,
          VisibleName: null
        },
        templateUrl: '/views/sharedFolders.html',
        controller: 'FolderController'
      })

    .state('sharedsend', {
      url: '/sharedsend/{folderName:[a-zA-Z0-9/]*}',
      params: {
        folderId: null,
        VisibleName: null
      },
      templateUrl: '/views/shared_send_Files.html',
      controller: 'FilesController'
    })


    .state('folder', {

        url: '/{folderId:[a-zA-Z0-9_@./#&+-/]*}',
        params: {
          folderId: null,
          VisibleName: null
        },
        templateUrl: '/views/files.html',
        controller: 'FolderController'
      })
      .state('Groups', {
        url: "/Groups",
        templateUrl: '/views/groups.html',
        controller: 'GroupController',
        requireLogin: true
      });

    $urlRouterProvider.when('/home', '/home').otherwise('/Files');
    
  }])
  //application components
  .directive('files', [function () {
    return {
      restrict: 'E',
      templateUrl: '/views/components/files.html',
      link: function (scope, el, attr) {
        // console.log(el[0].querySelector('#shareBtn_file'));
      }
    };

  }])
  .directive('ngRightClick', ['$parse', function ($parse) {
    return function (scope, element, attrs) {
      var fn = $parse(attrs.ngRightClick);
      element.bind('contextmenu', function (event) {
        scope.$apply(function () {
          event.preventDefault();
          fn(scope, {
            $event: event

          });
        });
      });
    };
  }])
  .directive('folders', [function () {
    return {
      restrict: 'E',
      templateUrl: '/views/components/folders.html',
      link: function (scope, el, iAttrs) {
       
$("tr").not(':first').mouseover(
  function () {
    $(this).css("background","yellow");
    var value=$("input[type=text].selectorid").val();
    var str = 'sharebtns'+value;
       document.getElementById(str).style.display = 'block';
  },
  function () {
    $(this).css("background","");
    var value=$("input[type=text].selectorid").val();
    var str = 'sharebtns'+value;
       document.getElementById(str).style.display = 'none';
  }
);
      }
    };
  }])
  .directive('freceivedShared', [function () {
    return {
      restrict: 'E',
      templateUrl: '/views/components/sharedFiles.html',
      link: function (scope, el, fAttrss) {

      }
    };
  }])

.directive('receivedShared', [function () {
  return {
    restrict: 'E',
    templateUrl: '/views/components/sharedFolders.html',
    link: function (scope, el, fdAttrs) {

    }
  };
}])


.directive('sendfilesShared', [function () {
    return {
      restrict: 'E',
      templateUrl: '/views/components/sendFileshared.html',
      link: function (scope, el, fdAttrs) {

      }
    };
  }])
  .directive('sendShared', [function () {
    return {
      restrict: 'E',
      templateUrl: '/views/components/shared_send_Files.html',
      link: function (scope, el, fdAttrs) {

      }
    };
  }])
  .directive('folderBins', [function () {
    return {
      restrict: 'E',
      templateUrl: '/views/components/folderRcylebin.html',
      link: function (scope, el, RcyfdAttrs) {

      }
    };
  }])
  .directive('filesBins', [function () {
    return {
      restrict: 'E',
      templateUrl: '/views/components/fileRecyclebin.html',
      link: function (scope, el, rcylflsAttrs) {

      }
    };
  }]); 



//-----------------------done with Muragijimana Richard <beastar457@gmail.com>---------------//
//-----------------------deal with user's actions and interaction with other users---------------//
/* global $window */
/* global Logger */

Logger.controller('loginController', ['$scope', '$http', '$rootScope', '$window', function ($scope, $http, $rootScope, $window) {
   
    $scope.login = function (info) {

        function notVerified() {
            $window.location.href = '/verification';
        }
        function redirectingAdmin() {
            $window.location.href = '/admin';
        }
        function redirecting() {
            $window.location.href = '/home';
        }
         var options = {
            'Login-Success': 'We are redirecting you..',
            'SignUpInProgress' : 'Wait we are setting up your account.'
        };
        function messageRemove(){
                $('.register-form-main-message').removeClass('show error');
        }
        
        
        $http.post($rootScope.endPoint + '/login', info)
            .success(function (response) {
                $('.login-form-main-message').addClass('show success').html(options['Login-Success']);
                setTimeout(messageRemove, 2000);
                console.log(response.status);
                if(response.status === 300){
                    notVerified();
                }else{
                    redirecting();    
                }
            })
            .error(function (error) {
                console.log(error);
            });

    };
}]);

angular.module("Logger")
.controller('RegisterController', ['$scope','$rootScope','$http','DEBUG',function ($scope,$rootScope,$http,DEBUG) {
    var options = {
        'password-notMatch': 'password do not match',
        'SignUpInProgress' : 'Wait we are setting up your account.',

    };
    function messageRemove(){
            $('.register-form-main-message').removeClass('show error');
    }
    function redirecting(){
            window.location = '/verification';
            
    }
    $scope.register=function(user){
        
      $('.register-form-main-message').addClass('show success').html(options.SignUpInProgress);
        if($('#password').val() !== $('#password-confirm').val()){
          $('.register-form-main-message').addClass('show error').html(options['password-notMatch']);
          setTimeout(messageRemove, 2000);
          
          return;
        }
      
        var params ={
            name : $('#input-name').val(),
            email: $('#input-email').val(),
            phone: $('#input-phone').val(),
            password: $('#input-password').val()
        };
        $http.post($rootScope.endPoint + '/register', params)
        .success(function(data) {
            if(data.status === 200){
                 redirecting();
            }else if(data.status ===3001){
                 $('.register-form-main-message').addClass('show success').html(data.message);
                setTimeout(messageRemove, 2000);
            }else if(data.status ===3002){
                $('.register-form-main-message').addClass('show success').html(data.message);
                setTimeout(messageRemove, 2000);
            }else if(data.status ===3003){
                $('.register-form-main-message').addClass('show success').html(data.message);
                setTimeout(messageRemove, 2000);
            }
        })
        .error(function(e) {
            if(DEBUG === true)
                console.log(e);
        });
        
        
    };
}])
.directive('uniquePhone', ['isPhoneAvailable',function(isPhoneAvailable) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
            ngModel.$asyncValidators.uniquePhone = isPhoneAvailable;
        }
    };
}])
.factory('isPhoneAvailable', ['$q','$http','$rootScope',function($q, $http,$rootScope) {
     function messageRemove(){
         
            $('.register-form-main-message').removeClass('show success');
     }
      function usernameTaken(){
            $('.register-form-main-message').removeClass('show error');
            
        }
    var options = {
        'msg-phone-available': 'phone number available',
        'msg-phone-taken': 'phone number taken',
        'useAJAX': true,
    };
    return function(phone) {


        var deferred = $q.defer();

        $http.get($rootScope.endPoint + '/users?phone=' + phone).success(function(data){
            if(data  === 'phone-available'){
               
                $('.register-form-main-message').addClass('show success').html(options['msg-phone-available']);
                setTimeout(messageRemove, 2000);
               
            }else if(data === 'phone-taken'){
                
                $('.register-form-main-message').addClass('show error').html(options['msg-phone-taken']);
                setTimeout(usernameTaken, 2000);
               
            }
            deferred.reject();
        }).error(function(err) {
           deferred.resolve();
        });
        return deferred.promise;
    };
}]);
angular.module("Logger")
.directive('uniqueUsername', ['isUsernameAvailable',function(isUsernameAvailable) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
            ngModel.$asyncValidators.uniqueUsername = isUsernameAvailable;
        }
    };
}])

angular.module("Logger")
.factory('isUsernameAvailable', ['$q','$http','$rootScope',function($q, $http,$rootScope) {
     function messageRemove(){
         
            $('.register-form-main-message').removeClass('show success');
     }
      function usernameTaken(){
            $('.register-form-main-message').removeClass('show error');
            
        }
    var options = {
        'msg-username-available': 'user name available',
        'msg-username-taken': 'username taken',
        'useAJAX': true,
    };
    return function(username) {

        var deferred = $q.defer();

        $http.get($rootScope.endPoint + '/users?username=' + username).success(function(data){
            if(data  === 'available'){
                $('.register-form-main-message').addClass('show success').html(options['msg-username-available']);
                setTimeout(messageRemove, 2000);
               
            }else if(data === 'taken'){
                $('.register-form-main-message').addClass('show error').html(options['msg-username-taken']);
                setTimeout(usernameTaken, 2000);
               
            }
            deferred.reject();
        }).error(function(err) {
           deferred.resolve();
        });
        return deferred.promise;
    };
}]);
angular.module("Logger")
.directive('uniqueEmail', ['isEmailAvailable',function(isEmailAvailable) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
            ngModel.$asyncValidators.uniqueEmail = isEmailAvailable;
        }
    };
}]);
angular.module("Logger")
.factory('isEmailAvailable', ['$q','$http','$rootScope',function ($q, $http, $rootScope) {
     var options = {
        'msg-username-available': 'user name available',
        'msg-username-taken': 'username taken',
        'msg-email-available': 'email available',
        'msg-email-taken': 'email taken',
        'useAJAX': true,
    };
    function messageEmailTaken(){
        $('.register-form-main-message').removeClass('show error');
    }
     function messageRemove(){
                    $('.register-form-main-message').removeClass('show success');
                }
    return function(email) {
         var deferred = $q.defer();

        $http.get($rootScope.endPoint + '/users?email=' + email).success(function(data){

            if(data === 'email-available'){
                $('.register-form-main-message').addClass('show success').html(options['msg-email-available']);
                setTimeout(messageRemove, 2000);
               

            }else if(data === 'email-taken'){
                $('.register-form-main-message').addClass('show error').html(options['msg-email-taken']);
                setTimeout(messageEmailTaken, 2000);
                
            }
             deferred.reject();
         }).error(function() {
            deferred.resolve();
         });
         return deferred.promise;
    };
}]);

angular.module('sync').service('Checkingempty',['$http','$q','$rootScope',function($http,$q,$rootScope){
  this.checkallFolderFile  = function(id){
    var differ = $q.defer();
    $http.get($rootScope.endPoint + '/api/checkallFolderFile/' +id)
    .success(function(response){
      differ.resolve(response);
    },function(err){
      differ.reject(err);
    });
    return differ.promise;
  };
  return this; 
}]);

angular.module('sync').
service('Encrypter', ['$http', '$q', '$rootScope', function Encrypter($http, $q, $rootScope) {
    this.key = function (key) {

        var promiss = $q.defer();
        $http.post($rootScope.endPoint + '/encrypt', key)
            .success(function (response) {
                $rootScope.$broadcast('folder:list');
                promiss.resolve(response);
            })
            .error(function (error) {
                promiss.reject(error);
            });

        return promiss.promise;
    };
}]);
angular.module('sync').
service('Files', ['$http','$q','$rootScope',function Files ($http,$q,$rootScope) {
    this.getGroupFiles =function(groupId) {
        var differed = $q.defer();
        
        $http.get($rootScope.endPoint +'/api/groups/'+groupId+'/groupfiles')
        .success(function(response){
            differed.resolve(response);
        })
        .error(function(error) {
            differed.reject(error);
        });
        return differed.promise;
    };
    this.delete =function(id) {
        var differed = $q.defer();
       
        $http.get($rootScope.endPoint +'/api/fileDelete/'+id)

        .success(function(response){
            differed.resolve(response);
        })
        .error(function(error) {
            differed.reject(error);
        });
        return differed.promise;
    };

  this.filerestore =function(id) {
        var differed = $q.defer();
        
        $http.get($rootScope.endPoint +'/api/filerestore/'+id)
        .success(function(response){
            differed.resolve(response);
        })
        .error(function(error) {
            differed.reject(error);
        });
        return differed.promise;
    };
      this.deleteonbins_files =function(id) {
        var differed = $q.defer();
        
        $http.delete($rootScope.endPoint +'/api/deleteonbins_files/'+id)
        .success(function(response){
            differed.resolve(response);
        })
        .error(function(error) {
            differed.reject(error);
        });
        return differed.promise;
    };

    this.fileCopy =function(folder_id,file_id) {
        var differed = $q.defer();
        
        $http.post($rootScope.endPoint +'/api/fileCopy/'+folder_id+'/'+file_id)
        .success(function(response){
            differed.resolve(response);
        })
        .error(function(error) {
            differed.reject(error);
        });
        return differed.promise;
    };
    this.getSharebleName = function(id) {
        var differed = $q.defer();
       
        $http.get($rootScope.endPoint +'/api/sharebleLink/'+id)
        .success(function(response){
            differed.resolve(response);
        })
        .error(function(error) {
            differed.reject(error);
        });
        return differed.promise;
    };
    this.creazy = function(object){
        var differed = $q.defer();
       
        $http.get($rootScope.endPoint +'/api/?+query='+'query+FetchUsers'+object)
        .success(function(response){
            differed.resolve(response);
        })
        .error(function(error) {
            differed.reject(error);
        });
        return differed.promise;
    };
    this.single = function(file){
      var promise = $q.defer();
      $http.get($rootScope.endPoint+ '/preview/'+ file)
      .success(function(response){
        promise.resolve(response);
      })
      .error(function(err){
        promise.reject(err);
      });
      return promise.promise;
    };
    this.getBoxFiles = function(folderId){
        var groupId = 1;
        var differed = $q.defer();
        
        $http.get($rootScope.endPoint + '/api/files/'+groupId+'/boxfiles/' +folderId)
        .success(function(response){
        
          differed.resolve(response);
        })
        .error(function(err){
          differed.reject(err);
        });
        return differed.promise;
    };

       this.getfilesInbins = function () {
        var Id = "Files";
        var promiss = $q.defer();
        $http.get($rootScope.endPoint + '/api/Filesbins/list/' + Id)


            .success(function (response) {
                promiss.resolve(response);
            })
            .error(function (error) {
                promiss.reject(error);
            });

        return promiss.promise;
    };

       this.receiveSharedFiles = function(folderId){
         
        var groupId = 1;
        var differed = $q.defer();
        $http.get($rootScope.endPoint + '/api/sharedreceivedf/'+groupId+'/sharedboxfiles/' +folderId)

        .success(function(response){
        
          differed.resolve(response);
        })
        .error(function(err){
          differed.reject(err);
        });
        return differed.promise;
    };

      this.sendSharedboxFiles = function(folderId){
         
        var groupId = 1;
        var differed = $q.defer();
        
        $http.get($rootScope.endPoint + '/api/sharedsend/'+groupId+'/sharedboxfiles/' +folderId)
        .success(function(response){
        
          differed.resolve(response);
        })
        .error(function(err){
          differed.reject(err);
        });
        return differed.promise;
    };
    


    this.getMimeType = function(file_name){
      var promise = $q.defer();
      $http.get($rootScope.endPoint + '/api/files/mimeType/'+ file_name)
      .success(function(response){
          promise.resolve(response);
      })
      .error(function(err){
          promise.reject(err);
      });
      return promise.promise;
    };
    this.downloadFile = function(file_name){

      var promise = $q.defer();
      
      $http.get($rootScope.endPoint+ '/api/files/download/'+file_name+'/of/'+ 'StrimUp')
      .success(function(response){
        promise.resolve(response);
      })
      .error(function(err){
        promise.reject(err);
      });
      return promise.promise;
    };

    this.makePublic = function(fileObject){
        var differ = $q.defer();
        $http.post($rootScope.endPoint + '/api/makePublic',fileObject)
        .success(function(response){
            differ.resolve(response);
            },function(err){
                differ.reject(err);
            });
        return differ.promise;
    }
    this.countfiles  = function(id){
    var differ = $q.defer();
    $http.get($rootScope.endPoint + '/api/countfiles/' +id)
    .success(function(response){
      differ.resolve(response);
    },function(err){
      differ.reject(err);
    });
    return differ.promise;
  };
    return this;
}]);

angular.module('sync').service('Folder', ['$http', '$q', '$rootScope', function ($http, $q, $rootScope) {


  this.folderrestore =function(id) {
        var differed = $q.defer();
        //down endpoint return all files I own
        $http.get($rootScope.endPoint + '/api/folderrestore/' + id)
            .success(function (response) {
                differed.resolve(response);
            })
            .error(function (error) {
                differed.reject(error);
            });
        return differed.promise;
    };
      this.deleteonbins_folders =function(id) {
        var differed = $q.defer();
        //down endpoint return all files I own
        $http.delete($rootScope.endPoint +'/api/deleteonbins_folders/'+id)
        .success(function(response){
            differed.resolve(response);
        })
        .error(function(error) {
            differed.reject(error);
        });
        return differed.promise;
    };

    this.createFolder = function (name) {

        var promiss = $q.defer();
        $http.post($rootScope.endPoint + '/api/createFolder', name)
            .success(function (response) {
                $rootScope.$broadcast('folder:list');
                promiss.resolve(response);
            })
            .error(function (error) {
                promiss.reject(error);
            });

        return promiss.promise;
    };

       this.renamefolder = function (name) {

        var promiss = $q.defer();
        $http.post($rootScope.endPoint + '/api/renamefolder', name)
            .success(function (response) {
                $rootScope.$broadcast('folder:list');
                promiss.resolve(response);
            })
            .error(function (error) {
                promiss.reject(error);
            });

        return promiss.promise;
    };


    this.getFolders = function (Foldernames) {

        var promiss = $q.defer();
        $http.get($rootScope.endPoint + '/api/folders/list/' + Foldernames)
            .success(function (response) {
                promiss.resolve(response);
            })
            .error(function (error) {
                promiss.reject(error);
            });

        return promiss.promise;
    };

     

this.getfolderInbins = function () {
    var Id = "Folders";
        var promiss = $q.defer();
        $http.get($rootScope.endPoint + '/api/bins/list/' + Id)

.success(function (response) {
                promiss.resolve(response);
            })
            .error(function (error) {
                promiss.reject(error);
            });

        return promiss.promise;
    };

     this.sendSharedFolder = function (Foldernames){
        var promiss = $q.defer();
        $http.get($rootScope.endPoint + '/api/sharedsend/list/' + Foldernames)
            .success(function (response) {
                promiss.resolve(response);
            })
            .error(function (error) {
                promiss.reject(error);
            });

        return promiss.promise;
    };
       this.receiveSharedFolder = function (Foldernames){
        var promiss = $q.defer();
        $http.get($rootScope.endPoint + '/api/sharedreceived/list/' + Foldernames)
           
                .success(function (response) {
                promiss.resolve(response);
            })
            .error(function (error) {
                promiss.reject(error);
            });

        return promiss.promise;
    };

    this.deleteFolders = function (folder_id) {

        var promiss = $q.defer();
        $http.get($rootScope.endPoint + '/api/keepfoldersonbin/' + folder_id)
            .success(function (response) {
                $rootScope.$broadcast('folder:list');
                promiss.resolve(response);
            })
            .error(function (error) {
                promiss.reject(error);
            });


        return promiss.promise;
    };

    

    this.path = function (child_id) {

        var promiss = $q.defer();
        $http.get($rootScope.endPoint + '/api/gmePath/' + child_id)
            .success(function (response) {
               

                promiss.resolve(response);
            })
            .error(function (error) {
                promiss.reject(error);
            });
        return promiss.promise;
    };

    this.countfolders  = function(id){
    var differ = $q.defer();
    $http.get($rootScope.endPoint + '/api/countfolders/' +id)
    .success(function(response){
      differ.resolve(response);
    },function(err){
      differ.reject(err);
    });
    return differ.promise;
  };
    return this;

}]);
angular.module('sync').
service('Message', ['$http','$q','$rootScope',function Files ($http,$q,$rootScope) {
    this.send =function(message) {
        var differed = $q.defer();
        //down endpoint return all files I own
        $http.post($rootScope.endPoint +'/api/message',message)
        .success(function(response){
            differed.resolve(response);
        })
        .error(function(error) {
            differed.reject(error);
        });
        return differed.promise;
    };
    this.get =function() {
        var differed = $q.defer();
        //down endpoint return all files I own
        $http.get($rootScope.endPoint +'/api/message/list')
        .success(function(response){
            differed.resolve(response);
        })
        .error(function(error) {
            differed.reject(error);
        });
        return differed.promise;
    };
}]);
angular.module('sync').service('People', ['$q','$http','$rootScope',function ($q, $http, $rootScope) {
	this.get  = function (){
		var differed = $q.defer();
		$http.get($rootScope.endPoint + '/api/v1/suggestions')
		.success(function(response){
			differed.resolve(response);
		})
		.error(function(error) {
			differed.reject(error);
		});
		return differed.promise;
	};
	this.allIfollow = function () {
		var differed = $q.defer();
		$http.get($rootScope.endPoint + '/api/v1/me/followings')
		.success(function(response){
			differed.resolve(response);
		})
		.error(function(err){
			differed.reject(err);
		});
		return differed.promise;
	};
	this.unFollow = function(id){
		var differed = $q.defer();
		$http.delete($rootScope.endPoint + '/api/v1/me/following/' +id)
		.success(function(response){
			differed.resolve(response);
		})
		.error(function(err){
			differed.reject(err);
		});
		return differed.promise;
	};
	this.follow = function(param){
		var differed = $q.defer();
		$http.put($rootScope.endPoint + '/api/v1/me/followings', param)
		.success(function(response){
			differed.resolve(response);
		})
		.error(function(error){
			differed.reject(error);
		});
		return differed.promise;
	};
	return this;
}]);

/* global sync */
angular.module('sync')
.service('Settings', ['$http','$rootScope','$q',function ($http,$rootScope,$q) {
	this.current = function(){
        
        var differed = $q.defer();
        $http.get($rootScope.endPoint + '/api/v1/settings')
        .success(function(resp){
            differed.resolve(resp);
        })
        .error(function(err){
            differed.reject(err);
        });
        return differed.promise;
    };
    this.makePublic = function(param) {
        var differed = $q.defer();
        $http.post($rootScope.endPoint + '/api/settings',param)
        .success(function(res){
            differed.resolve(res);
        })
        .error(function(err) {
            differed.reject(err);
        });
        return differed.promise;
    };


    	this.checkemptybins = function(){

		var differed = $q.defer();
		$http.get($rootScope.endPoint + '/api/v1/checkemptybins')
		.success(function(response){
			differed.resolve(response);
		})
		.error(function(err){
			differed.reject(err);
		});
		return differed.promise;
	};

    return this;
}]);

angular.module('sync')
.service('Share',['$log','$http','$q','$rootScope', function ($log,$http,$q,$rootScope) {
	
	this.share = function(sharebleObj){
		var differed = $q.defer();
        $http.post($rootScope.endPoint + '/api/v1/share',sharebleObj)
        .success(function(response){
            differed.resolve(response);
        })
        .error(function(err){
            differed.reject(err);
        });
        return differed.promise;
	};

	this.allssharedFiles = function(){
		var promise = $q.defer();
		$http.get($rootScope.endPoint +"/api/countshared")
		.success(function(res){
			
			promise.resolve(res);
		})
		.error(function() {

			promise.reject();
		});
		return promise.promise;
	};
	
this.SendsharedData = function(DataToshare) {
 

   var promiss = $q.defer();
   $http.post($rootScope.endPoint +'/api/sharing',DataToshare)
            .success(function(response) {
           
                promiss.resolve(response);
            })
            .error(function(error) {
                promiss.reject(error);
            });

        return promiss.promise;
    };
	this.getUser = function(user){

		var differed = $q.defer();
		$http.get($rootScope.endPoint + '/api/v1/me/users/'+ user)
		.success(function(response){
			differed.resolve(response);
		})
		.error(function(err){
			differed.reject(err);
		});
		return differed.promise;
	};
	this.fileMime = function(file){
		var differed = $q.defer();
		$http.get($rootScope.endPoint + '/api/v1/mimeType/'+ file)
		.success(function(response){
			differed.resolve(response);
		})
		.error(function(err){
			differed.reject(err);
		});
		return differed.promise;
	};
    return this;
}]);
angular.module('sync').service('SMS',['$http','$q','$rootScope',function($http,$q,$rootScope){
  this.send  = function(message){
    var differ = $q.defer();
    $http.post($rootScope.endPoint + '/api/v1/messages/send',message)
    .success(function(response){
      differ.resolve(response);
    },function(err){
      differ.reject(err);
    });
    return differ.promise;
  };
  return this;
}]);

angular.module('sync')
.service('SubFolder', ['$http', '$q', '$rootScope', function($http, $q, $rootScope) 
	{


	this.createSubFolder = function(name) {
        var promiss = $q.defer();
        $http.post($rootScope.endPoint +'/api/v1/subfolder',name)
            .success(function(response) {
                promiss.resolve(response);
            })
            .error(function(error) {
                promiss.reject(error);
            });
        return promiss.promise;
    };
    this.getSubFolders = function(id) {
        var promiss = $q.defer();
        $http.get($rootScope.endPoint +'/api/v1/subfolder/list/'+id)
            .success(function(response) 

            {
                promiss.resolve(response);
            })
            .error(function(error) {
                promiss.reject(error);
            });
        return promiss.promise;
    };
    

  return this;
}]);
angular.module('sync')
.service('Test',[function(){
    this.testingMethod = function() {
        return {name:'richard'};
    };
    return this;
}]);
angular.module('sync').service('User', ['$http','$q','$rootScope',function Files ($http,$q,$rootScope) {
	this.get = function(){
		var promise = $q.defer();
		$http.get($rootScope.endPoint +"/api/user")
		.success(function(res){
			
			promise.resolve(res);
		})
		.error(function() {
			promise.reject();
		});
		return promise.promise;
	};
  this.followerEmails = function() {
    var differed = $q.defer();
      $http.get($rootScope.endPoint + '/api/emailOfmyFollowers')
      .success(function(response){
        differed.resolve(response);
      })
      .error(function(err){
        differed.reject(err);
      });
      return differed.promise;
  };

	this.report = function(error) {
    var differed = $q.defer();
      $http.post($rootScope.endPoint + '/api/bugs', error)
      .success(function(response){
        differed.resolve(response);
      })
      .error(function(err){
        differed.reject(err);
      });
      return differed.promise;
  };
	this.groups = function(user){
      var differed = $q.defer();
      $http.get($rootScope.endPoint + '/api/me/groups')
      .success(function(response){
        differed.resolve(response);
      })
      .error(function(err){
        differed.reject(err);
      });
      return differed.promise;
    };
		this.diskUsage = function(user){
      var differed = $q.defer();
      $http.get($rootScope.endPoint + '/api/diskUsage')
      .success(function(response){
        differed.resolve(response);
      })
      .error(function(err){
        differed.reject(err);
      });
      return differed.promise;
    };
    this.notificationList = function() {
      var differed = $q.defer();
      $http.get($rootScope.endPoint + '/api/notificationLists')

      .success(function(response){
        differed.resolve(response);
      })
      .error(function(err){
        differed.reject(err);
      });
      return differed.promise;
    }
	return this;
}]);

/* global sync */
angular.module('sync')
.service('Notification', ['$http', '$q', '$rootScope', function Notification($http, $q, $rootScope) {
    this.getNotification = function (user_id) {
        var differed = $q.defer();
        $http.get($rootScope.endPoint + '/api/v1/notifications', {cache: false})
            .success(function (response) {
                differed.resolve(response);
            })
            .error(function (error) {
                differed.reject(error);
            });
        return differed.promise;
    };
    this.createNotification = function (Notification) {
        var differed = $q.defer();
        $http.post($rootScope.endPoint + '/api/v1/notifications', Notification)
            .success(function (response) {
                differed.resolve(response);
            })
            .error(function (error) {
                differed.reject(error);
            });
        return differed.promise;
    };
    this.deleteNotification = function (notification) {
        var differed = $q.defer();
        $http.delete($rootScope.endPoint + '/api/v1/notifications/' + notification)
            .success(function (response) {
                differed.resolve(response);
            })
            .error(function (error) {
                differed.reject(error);
            });
            return differed.promise;
    };
    return this;
}]);

angular.module('sync')
.controller('notificationController', ['$scope','Notification','$log', function ($scope,Notification,$log) {
    $scope.init = function(){
        $scope.getNotification();
    };
    $scope.clearNotification = function(notification){


      Notification.clearNotification(notification)
      .then(function(response){
        //load remaining notification
        $scope.getNotification();
      },function(err){
        console.log(err);
      });
    };
    $scope.getNotification = function(){
        Notification.getNotification()
        .then(function(result){
            // $log.info(result);
            $scope.notifications = result;
            
        },function(error){
            // $log.info(error);
        });
    };
    $scope.init();
}]);
angular.module('sync')
.directive('notify',[function(){
  function notifyBrowser(title,desc,url)
      {
        if (!Notification) {
            console.log('Desktop notifications not available in your browser..');
        return;
        }
        if (Notification.permission !== "granted"){
          Notification.requestPermission();
        }
        else {
          var notification = new Notification(title, {
            icon:'https://lh3.googleusercontent.com/-aCFiK4baXX4/VjmGJojsQ_I/AAAAAAAANJg/h-sLVX1M5zA/s48-Ic42/eggsmall.png',
            body: desc,
        });
        // Remove the notification from Notification Center when clicked.
        notification.onclick = function () {
            window.open(url);
        };
        // Callback function when the notification is closed.
        notification.onclose = function () {
          console.log('Notification closed');
        };
        }
      }
  return{
    restrict:'AE',
    scope:{

    },
    link: function(scope, el, iAttrs){
      setTimeout(function(){
              var title='This will be title';
              var desc='Most popular article.';
              var url='sync.com:8000';
              notifyBrowser(title,desc,url);
          }, 2000);
          document.addEventListener('DOMContentLoaded', function (){
                if (Notification.permission !== "granted"){
                  Notification.requestPermission();
            }
      });

      
    }
  };
}]);

angular.module('sync')
.factory('userInteractionNotification', function () {
    return {
        success: function (message) {
            toastr.success(message, "Success");
        },
        warn: function (message) {
            toastr.warning(message, "Hey");
        },
        info: function (message) {
            toastr.info(message, "FYI");
        },
        error: function (message) {
            toastr.error(message, "Oh No");
        }
    };
});

angular.module('sync')
.factory('userInteractionNotification', function () {
    return {
        success: function (message) {
            toastr.success(message, "Success");
        },
        warn: function (message) {
            toastr.warning(message, "Hey");
        },
        info: function (message) {
            toastr.info(message, "FYI");
        },
        error: function (message) {
            toastr.error(message, "Oh No");
        }
    };
});

angular.module('sync')
	.controller('dialogController', ['$scope', '$uibModal', '$mdDialog', '$mdMedia', 'urlShortener', 'Share', 'User', '$rootScope', 'Files', 'Folder', '$http', 'Encrypter',
		function ($scope, $uibModal, $mdDialog, $mdMedia, urlShortener, Share, User, $rootScope, Files, Folder, $http, Encrypter) {


			DialogController.$inject = ["$scope", "$mdDialog"];
			function DialogController($scope, $mdDialog) {

				$scope.hide = function () {
					$mdDialog.hide();
				};
				$scope.cancel = function () {
					$mdDialog.cancel();
				};


			}
			$scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
			$scope.settings = function (id, type) {
				$rootScope.id = id;
				$rootScope.type = type;
				$mdDialog.show({
					parent: angular.element(document.body),
					controller: DialogController,
					templateUrl: '/views/settings.tpl.html',
					clickOutsideToClose: false
				}).catch();

			};
			$("#neutral").click(function (e) {
				e.preventDefault();
				
			});
			$("#connect").click(function (e) {
				e.preventDefault();
				e.stopPropagation();
			});
			$("#bugReport").click(function (e) {
				e.preventDefault();
				e.stopPropagation();
			});
			$("#likes").click(function (e) {

				e.preventDefault();
				e.stopPropagation();

			});
			$("#upload").click(function (e) {
				e.preventDefault();
				e.stopPropagation();
			});
			$("#properties").click(function (e) {
				e.preventDefault();
				e.stopPropagation();
			});
			$("#Deletedocs").click(function (e) {
				e.preventDefault();
				e.stopPropagation();
			});
			$("#Renamedocs").click(function (e) {
				e.preventDefault();
				e.stopPropagation();
			});

			$("#downloadpop").click(function (e) {
				e.preventDefault();
				e.stopPropagation();
			});

			$scope.upload = function (type) {
				//make a type to be accessible on child scope do not delete it!
				$rootScope.fileType = type;
				$mdDialog.show({
					parent: angular.element(document.body),
					controller: DialogController,
					templateUrl: '/views/upload.tpl.html',
					clickOutsideToClose: false
				}).catch();
			};

			$scope.properties = function (fid, fname, fsize, ftype, fcreated_at) {


				propertiesController.$inject = ["$scope", "$mdDialog"];
				function propertiesController($scope, $mdDialog) {

					$scope.hide = function () {
						$mdDialog.hide();
					};
					$scope.cancel = function () {
						$mdDialog.cancel();
					};
					$scope.fid = fid;
					$scope.fname = fname;
					$scope.fsize = fsize;
					$scope.ftype = ftype;
					$scope.fcreated_at = fcreated_at;


					Folder.countfolders($scope.fid)
						.then(function (nuber_folder) {

							$scope.nuber_folder = nuber_folder;

						}, function (err) {
							if (DEBUG === true)
								console.log(err);
						});

					Files.countfiles($scope.fid)
						.then(function (nuber_files) {

							$scope.nuber_files = nuber_files;

						}, function (err) {
							if (DEBUG === true)
								console.log(err);
						});



				}



				$mdDialog.show({

					parent: angular.element(document.body),
					controller: propertiesController,
					templateUrl: '/views/property.tpl.html',
					clickOutsideToClose: false
				}).catch();
			};
			$scope.downloadpop = function () {


				$mdDialog.show({

					parent: angular.element(document.body),
					controller: DialogController,
					templateUrl: '/views/download.tpl.html',
					clickOutsideToClose: false
				}).catch();
			};

			$scope.Deletedocs = function (dir_id, dir_name) {

				deleteController.$inject = ["$scope", "$mdDialog"];
				function deleteController($scope, $mdDialog) {
					$scope.hide = function () {
						$mdDialog.hide();
					};
					$scope.cancel = function () {
						$mdDialog.cancel();
					};
					$scope.dir_id = dir_id;
					$scope.dir_name = dir_name;
				}
				$mdDialog.show({

					parent: angular.element(document.body),
					controller: deleteController,
					templateUrl: '/views/deletemsg.tpl.html',
					clickOutsideToClose: false
				}).catch();
			};

			$scope.Renamedocs = function (dir_id, dir_name) {

				renameController.$inject = ["$scope", "$mdDialog"];
				function renameController($scope, $mdDialog) {
					$scope.hide = function () {
						$mdDialog.hide();
					};
					$scope.cancel = function () {
						$mdDialog.cancel();
					};
					$scope.dir_id = dir_id;
					$scope.dir_name = dir_name;
				}
				$mdDialog.show({
					parent: angular.element(document.body),
					controller: renameController,
					templateUrl: '/views/rename.tpl.html',
					clickOutsideToClose: false
				}).catch();
			};

			$scope.reportBug = function () {

				$mdDialog.show({
					parent: angular.element(document.body),
					controller: DialogController,
					templateUrl: '/views/bug.tpl.html',
					clickOutsideToClose: false
				}).catch();
			};

			$scope.share = function (shareble_id, type) {


				sharebleLink.$inject = ["$scope", "$mdDialog"];
				function sharebleLink($scope, $mdDialog) {

					$scope.hide = function () {
						$mdDialog.hide();
					};
					$scope.cancel = function () {
						$mdDialog.cancel();
					};

					User.followerEmails()
						.then(function (emails) {
							var emailsi = [];
							angular.forEach(emails, function (email) {
								emailsi.push(email.email);
							});
							$scope.emailson = JSON.stringify(emailsi);

						}).catch();


					$scope.Newshared = {};

					$scope.Newshared.shared_to = [];

					User.get()
						.then(function (user) {

							$scope.userName = user.name;
						}).catch();


					$scope.share_type = type;

					$scope.folder_id = shareble_id;


					if (type === 'Folder') {
						var params = {
							'folder_id': shareble_id,
							'type': 'Folder',
							'user_id': $rootScope.user.id
						};
						Encrypter.key(params)
							.then(function (preparedUrl) {

								var prep = $rootScope.endPoint + '/home/' + preparedUrl;
								$http.post('https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyDSn7z7V1f6H3yXrgAlgVGw52dSEmqALIc', {
									longUrl: prep
								}).success(function (data, status, headers, config) {

									$scope.shareble_link = data.id;
									var a = document.getElementById("document_link");
									a.value = data.id;

									$scope.shareble_link = data.id;


								}).
								error(function (data, status, headers, config) {

								});
							}).catch();
					} else if (type === "File") {

						var params_file = {
							'file_id': shareble_id,
							'type': 'File',
							'user_id': $rootScope.user.id
						};
						Encrypter.key(params_file)
							.then(function (preparedUrl) {
								console.log(preparedUrl);
								var prep = $rootScope.endPoint + '/shared/' + preparedUrl;
								$http.post('https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyDSn7z7V1f6H3yXrgAlgVGw52dSEmqALIc', {
									longUrl: prep
								}).success(function (data, status, headers, config) {

									$scope.shareble_link = data.id;
									var a = document.getElementById("document_link");
									a.value = data.id;

									$scope.shareble_link = data.id;


								}).
								error(function (data, status, headers, config) {

								});
							}).catch();

					}

				}

				$mdDialog.show({
					parent: angular.element(document.body),
					controller: sharebleLink,
					templateUrl: '/views/share.tpl.html',
					clickOutsideToClose: false
				}).catch();
			};
			$scope.makePublic = function(fileObject){
				Files.makePublic(fileObject).then(function(response){
					console.log(response);
				}).catch();
				$.notify("A File is now visible in public.", "success");
			}

		}
	]);
angular.module('sync')
.service('Post', ['$http', '$q', '$rootScope', function Post($http, $q, $rootScope) {
    this.getPost = function (user_id) {
        var differed = $q.defer();
        $http.get($rootScope.endPoint + '/api/v1/me/posts?user_id' + user_id, {cache: false})
            .success(function (response) {

                differed.resolve(response);
            })
            .error(function (error) {
                differed.reject(error);
            });
        return differed.promise;
    };
    this.participate = function(obj){
      var differed = $q.defer();
      $http.put($rootScope.endPoint + '/api/v1/me/posts/',obj)
      .success(function(response){
        differed.resolve(response);
      })
      .error(function(err){
        differed.reject(err);
      });
      return differed.promise;
    };
    this.createPost = function (post) {
        var differed = $q.defer();
        $http.post($rootScope.endPoint + '/api/v1/me/posts', post)
            .success(function (response) {
                differed.resolve(response);
            })
            .error(function (error) {
                differed.reject(error);
            });
        return differed.promise;
    };
    this.deletePost = function (id) {
        var differed = $q.defer();
        $http.delete($rootScope.endPoint + '/api/v1/me/posts/' + id)
            .success(function (response) {
                differed.resolve(response);
            })
            .error(function (error) {
                differed.reject(error);
            });
        return differed.promise;
    };
    return this;
}]);

angular.module('sync')
.controller('PostingController', [
  '$scope',
  'Post',
  '$timeout',
  'User',
  '$interval',
  'Notification',
  // '$ionicListDelegate',
  '$log',
  'userInteractionNotification',
  function (
  $scope,
  Post,
  $timeout,
  User,
  $interval,
  Notification,
  $ionicListDelegate,
  $log,
  userInteractionNotification
) {

    $scope.init = function () {
        $scope.postLoader();
        $scope.getUser();

    };

    $interval(function () {
        $scope.postLoader();
    }, 8000);
    $scope.getUser =function(){

      User._id()
      .then(function(response){

        $scope.user = response;
        console.log(response);
      },function(err){
        //quit slintly
      });
    };
    $scope.loadMore = function(){

    };
    $scope.participateIntoPost = function(post,user){
      // console.log(user);
      var obj ={
        'post_id':post,
        'user_id':user
      };
      Post.participate(obj)
      .then(function(response){
        $scope.postLoader();
      },function(err){
        //quit slently

      });
    };
    $scope.postLoader = function () {
        $scope.dataLoading = true;
        Post.getPost()
            .then(function (tree) {

                $scope.posts =tree;
                //navigate trough tree response which is require much attention
                $scope.friends=[];
                $scope.replies=[];
                for (var i = 0; i < tree.length; i++) {
                    if (tree[i].hasOwnProperty.friends && tree[i].replies  && tree[i].friends ) {
                      $scope.friends.push(tree[i].friends);
                      $scope.replies.push(tree[i].replies);
                    } else if (tree[i].hasOwnProperty('friends')) {
                        $scope.friends = friends.concat(traverse(tree[i].friends));
                        $scope.replies = replies.concat(traverse(tree[i].replies));
                    }
                }
            }, function (error) {
        });
    };
    $scope.imageDesc = function(index){
      //show images with different pixel
      switch (index) {
        case 0:
          return '60px';

          case 1:
            return "60px";

          case 2:
            return "60px";

          case 3:
            return "60px";

          case 4:
            return "60px";

        default:
        return "60px";

      }
      console.log(index);
    };
    $scope.share = function(id){
        $ionicListDelegate.closeOptionButtons();
        $log.info(id);
    };
    $scope.createPost = function (posting) {
      //if image is uploaded uploaded
        var _this = { message: posting };
        Post.createPost(_this)
            .then(function (postCreated) {
                  $scope.message = '';
                  $scope.posts.push(postCreated);
                  userInteractionNotification.success("New Post feed created!");
            }, function (error) {

            });
    };

    $scope.init();
}]);
angular.module('sync')
.directive('feedsUploader',[function(){
  return {
    restrict: 'AE',
    replace: false,
    templateUrl: 'App/js/scripts/views/feedAttachment.html',
    scope: {
      action: '@'
    },
    controller: ['$scope', function ($scope) {
      $scope.progress = 0;
      $scope.avatar = '';
      $scope.sendFile = function(el) {
        var $form = $(el).parents('form');
        if ($(el).val() === '') {
          return false;
        }
        $form.attr('action', $scope.action);
        $scope.$apply(function() {
          $scope.progress = 0;
        });
        $form.ajaxSubmit({
          type: 'POST',
        	beforeSend: function (xhr) {
        		xhr.setRequestHeader('authorization', 'Bearer OqFirQS44RQTjRuWniXjdHZJQXdCuEx49rq8JY5A');
        	},
          uploadProgress: function(evt, pos, tot, percComplete) {
            $scope.$apply(function() {
              // upload the progress bar during the upload
              // $scope.progress = percentComplete;
            });
          },
          error: function(evt, statusText, response, form) {
            // remove the action attribute from the form
            $form.removeAttr('action');
          },
          success: function(response, status, xhr, form) {
            var ar = $(el).val().split('\\'),
              filename =  ar[ar.length-1];
            // remove the action attribute from the form
            $form.removeAttr('action');
            $scope.$apply(function() {
              $scope.avatar = filename;
            });
          },
        });
      };
    }],
    link: function(scope, elem, attrs, ctrl) {

      elem.find('.fake-uploader').click(function() {
        elem.find('input[type="file"]').click();
      });

    }
  };
}]);

angular.module("sync")
    .controller('CheckingemptyController', ['$scope', 'Checkingempty', 'User', 'DEBUG', '$stateParams', '$rootScope', '$uibModal', '$mdDialog', '$mdMedia', function ($scope, Checkingempty, User, DEBUG, $stateParams, $rootScope, $uibModal, $mdDialog, $mdMedia) {


        var getuser = function () {
            User.get()
                .then(function (response) {
                    $scope.user_id = response;
                }).catch();
        };



        var checkallFolderFile = function () {

            Checkingempty.checkallFolderFile($stateParams.folderId)
                .then(function (folders) {

                    $scope.checkalls = folders;
                    

                }, function (err) {
                    if (DEBUG === true)
                        console.log(err);
                });
        };
        $scope.$on('folder:list', function (event, args) {
            checkallFolderFile();

        });
        var init = function () {
            getuser();
            checkallFolderFile();

        };
        init();




    }]).factory("cacheFactory", ["$cacheFactory", function ($cacheFactory) {
        
        return $cacheFactory("userData");
    }]);
angular.module('sync').controller('FilesController', ['$scope', 'Files', '$log', '$window', 'User', '$timeout', '$stateParams', '$rootScope', '$exceptionHandler', '$cacheFactory', 'DEBUG', '$uibModal', '$mdDialog', '$mdMedia',
    function ($scope, Files, $log, $window, User, $timeout, $stateParams, $rootScope, $exceptionHandler, $cacheFactory, DEBUG, $uibModal, $mdDialog, $mdMedia) {
        $scope.files = [];
    
        var _loadFiles = function (folderId) {
                
                $scope.dataLoading = true;
                Files.getBoxFiles(folderId)
                    .then(function (res) {
                        
                        $scope.files = res;
                        
                    }, function (error) {

                    })
                    .finally(function () {

                        $scope.dataLoading = false;

                    });

            },
            _loadreceivedFiles = function (folderId) {

                $scope.dataLoading = true;
                Files.receiveSharedFiles(folderId)
                    .then(function (res) {
                        $scope.sharedfiles = res;
                    }, function (error) {

                    })
                    .finally(function () {

                        $scope.dataLoading = false;
                    });
            },
            _sendSharedboxFiles = function (folderId) {

            $scope.dataLoading = true;
            Files.sendSharedboxFiles(folderId)
                .then(function (res) {
                    $scope.sendfiles = res;
                }, function (error) {

                })
                .finally(function () {

                    $scope.dataLoading = false;
                });
            },
            _getfilesInbins = function (folderId) {

            $scope.dataLoading = true;
            Files.getfilesInbins(folderId)
                .then(function (res) {
                    $scope.bins_files = res;
                }, function (err) {

                    if (DEBUG === true)
                        console.log(err);
                });
            };
            $scope.filerestore = function (files_id) {

            Files.filerestore(files_id)

            .then(function (response) {
                if (response.Deletefolder === false) {
                    $.notify("Not Restored", "error");
                } else {

                    $.notify("File Restored.", "success");

                    _getfilesInbins($stateParams.files_id);

                }
            }, function (err) {

                if (DEBUG === true)
                    console.log(err);
            });
        };
        $scope.deleteonbins_files = function (files_id) {

            Files.deleteonbins_files(files_id)

            .then(function (response) {
                if (response.Deletefolder === false) {
                     $.notify("A  Deleted", "error");
                } else {

                    $.notify("File Deleted.", "error");

                    _getfilesInbins($stateParams.files_id);

                }
            }, function (err) {

                if (DEBUG === true)
                    console.log(err);
            });
        };

        $rootScope.$on('app:on:browser:back', function (e, id) {

        });
        $rootScope.$on('folder:id', function (r, folderId) {

            if (typeof (folderId) === 'number') {

                _loadFiles(folderId);
                _loadreceivedFiles(folderId);
                _sendSharedboxFiles($stateParams.folderId);
            }

        });

        $rootScope.$on('file:list', function () {
            _loadFiles($stateParams.folderId);

            _loadreceivedFiles($stateParams.folderId);

            _getfilesInbins($stateParams.folderId);

            _sendSharedboxFiles($stateParams.folderId);

        });

        $scope.fileType = function (type) {
            var cases = {
                'pdf': 'img/pdf.png',
                'png': 'images/icon5.png',
                'jpg': 'images/icon5.png',
                'docx': 'img/word.png',
                'Jpg': 'img/icon5.png'
            };
            if (cases[type]) {
                return cases[type];

            } else {
                return cases.docx;
            }
        };
        $scope.init = function () {
            _loadFiles($stateParams.folderId);
            _loadreceivedFiles($stateParams.folderId);
            _getfilesInbins($stateParams.folderId);
            _sendSharedboxFiles($stateParams.folderId);

        };

        function prepare(url) {
            localStorage.removeItem("folderId");
            localStorage.setItem("folderId",0);
            return;
        }

        function success(url) {
            //clear any localStorage Id that is being sent before
            localStorage.removeItem("folderId");
            localStorage.setItem("folderId",0);
            return;
            // $rootScope.$broadcast('dialogs.wait.complete');
        }

        function error(response, url) {
            return;
        }

        $scope.init();

        $scope.pasteFileInFolder = function (id) {

            Files.fileCopy(localStorage.getItem('file_handle'), id)
                .then(function (response) {
                    if (response.status === 200) {
                        $rootScope.$emit("file:list");
                        $.notify("A File copied into Folder", "success");
                    } else if (response.status === 300) {
                        $.notify('A file Exist in Folder', "error");
                    }

                }).catch();

        };
        $(function () {

            DialogController.$inject = ["$scope", "$mdDialog"];
            $scope.share_enabled = false;
            $scope.paste_enabled = true;

            function DialogController($scope, $mdDialog) {
                $scope.hide = function () {
                    $mdDialog.hide();
                };
                $scope.cancel = function () {
                    $mdDialog.cancel();
                };
                $scope.fileId = localStorage.getItem("file_handle");
            }
            $scope.onRightClick = function (id,userId,folderId) {

                if (localStorage.getItem("file_handle") === null &&  localStorage.getItem("userId") === null  && localStorage.getItem("folderId") === null || localStorage.getItem("folderId") !==0 ) {
                    localStorage.setItem('file_handle', id);
                    localStorage.setItem('userId', userId);
                    localStorage.setItem('folderId', localStorage.getItem("folderId"));
                } else {
                    localStorage.removeItem('file_handle');

                    localStorage.setItem('file_handle', id);

                    localStorage.removeItem('userId');

                    localStorage.setItem('userId', userId);

                    localStorage.removeItem('folderId');

                    localStorage.setItem('folderId', folderId);
                }
            };
            $.contextMenu({
                selector: '.context-menu-file',
                callback: function (key, options) {


                    if (key === "copy")

                        $mdDialog.show({

                        parent: angular.element(document.body),

                        controller: DialogController,

                        templateUrl: '/views/copy-file.tpl.html',

                        clickOutsideToClose: false

                    }).catch();
                    if (key === "download") {
                         
                        $.fileDownload($rootScope.endPoint + '/downloads/file/' +localStorage.getItem("file_handle") + '/' +localStorage.getItem("folderId")+'/'+null+'/' + localStorage.getItem("userId"), {

                            prepareCallback: prepare,

                            successCallback: success,
                            
                            failCallback: error
                        });

                    }
                    if(key === "public"){

                         $mdDialog.show({

                            parent: angular.element(document.body),

                            controller: DialogController,

                            templateUrl: '/views/public-file.tpl.html',

                            clickOutsideToClose: false

                        }).catch();
                    }
                    if(key === "downloadZip"){

                         $.fileDownload($rootScope.endPoint + '/downloads/file/' +localStorage.getItem("file_handle") + '/' +localStorage.getItem("folderId")+'/'+null+'/' + localStorage.getItem("userId")+'/zip', {

                            prepareCallback: prepare,

                            successCallback: success,
                            
                            failCallback: error
                        });
                    }
                    if (key === "delete")

                        Files.delete(localStorage.getItem('file_handle'))
                        .then(function (response) {
                            if (response.status === 200)
                                $rootScope.$emit('file:list');

                            $.notify("A File saved in Recycle Bin.", "success");
                        }).catch();

                },
                items: {
                    "edit": {
                        name: "Edit",
                        icon: "edit"
                    },
                    "cut": {
                        name: "Move",
                        icon: "cut"
                    },
                    "copy": {
                        name: "Copy",
                        icon: "copy"
                    },
                    "download": {
                        name: "download",
                        icon: "fa-cloud-download"
                    },
                    "downloadZip": {
                        name: "downloadZip",
                        icon: "fa-cloud-download"
                    },
                    "public": {
                        name: "make file public",
                        icon: "paste"
                    },
                    "delete": {
                        name: "Delete",
                        icon: "delete"
                    },
                    "sep1": "---------",
                    "quit": {
                        name: "Quit",
                        icon: function () {
                            return 'context-menu-icon context-menu-icon-quit';
                        }
                    }
                }
            });

            $('.context-menu-file').on('click', function (e) {
                console.log('clicked', this);
            })
        });
    }
]);
angular.module("sync")
    .controller('FolderController', ['$scope', 'Folder', 'User', 'DEBUG', '$stateParams', '$rootScope', 'Files', '$uibModal', '$mdDialog', '$mdMedia', function ($scope, Folder, User, DEBUG, $stateParams, $rootScope, Files, $uibModal, $mdDialog, $mdMedia) {

        $scope.folders = [];
        $scope.s_folder = [];
        $scope.share_enabled = true;
        $scope.paste_enabled = false;

        $scope.type = function (type) {
            var cases = {
                'folder': 'img/sbox-folder.png',
                'zip': 'img/sbox-folder.png'
            };
            if (cases[type]) {
                return cases[type];
            }
        };
        var getuser = function () {
            User.get()
                .then(function (response) {
                    $scope.user_id = response;
                }).catch();
        };

        $scope.structure = '';
        var getFolders = function () {

            Folder.getFolders($stateParams.folderId)
                .then(function (folders) {
                    var tmp = [];
                    var thead = [];

                    angular.forEach(folders, function (single) {

                        var str = single.name;
                        tmp.push({
                            'mName': str.replace('-', '  '),
                            'name': single.name,
                            'id': single.id,
                            'size': single.size,
                            'type': single.type,
                            'created_at': single.created_at,
                            'copy_count': single.copy_count
                        });
                        thead.push([{
                            'mName': str.replace('-', '  '),
                            'name': single.name,
                            'id': single.id,
                            'size': single.size,
                            'type': single.type,
                            'created_at': single.created_at,
                            'copy_count': single.copy_count
                        }]);

                    });
                    $scope.folders = tmp;

                    $scope.thead = true;

                    if (thead.length === 0) {

                        $scope.thead = false;

                    }



                }, function (err) {
                    if (DEBUG === true)
                        console.log(err);
                });
        };
        var getfolderInbins = function () {

            Folder.getfolderInbins($stateParams.folderId)
                .then(function (folders) {

                    $scope.bins_folders = folders;

                }, function (err) {
                    if (DEBUG === true)
                        console.log(err);
                });
        };

        var sendSharedFolder = function () {

            Folder.sendSharedFolder($stateParams.folderId)
                .then(function (sd_folder) {

                    $scope.sd_folder = sd_folder;

                }, function (err) {
                    if (DEBUG === true)
                        console.log(err);
                });
        };

        var receiveSharedFolder = function () {

            Folder.receiveSharedFolder($stateParams.folderId)
                .then(function (rc_folder) {

                    $scope.rc_folder = rc_folder;

                }, function (err) {
                    if (DEBUG === true)
                        console.log(err);
                });
        };

        $scope.folderrestore = function (files_id) {

            Folder.folderrestore(files_id)

                .then(function (response) {
                    if (response.Deletefolder === false) {
                        $.notify("A  Folder Restored", "error");
                    } else {
                        $.notify("Folder Restored.", "success");
                        getfolderInbins($stateParams.files_id);
                    }
                }, function (err) {

                    if (DEBUG === true)
                        console.log(err);
                });
        };
        $scope.deleteonbins_folders = function (files_id) {

            Folder.deleteonbins_folders(files_id)

                .then(function (response) {
                    if (response.Deletefolder === false) {
                        $.notify("Not deleted", "error");
                    } else {

                        $.notify("Folder Deleted.", "error");
                        getfolderInbins($stateParams.files_id);
                    }
                }, function (err) {

                    if (DEBUG === true)
                        console.log(err);
                });
        };
        $scope.$on('folder:list', function (event, args) {
            getFolders();

        });

        $scope.$on('sharedsend:list', function (event, args) {

            sendSharedFolder();
        });
        $scope.$on('sharedreceived:list', function (event, args) {
            receiveSharedFolder();
        });
        $scope.$on('binsfolder:list', function (event, args) {
            getfolderInbins();
        });

        $rootScope.$on('folder:structure', 'sharedsend:structure', 'sharedreceived:structure', 'binsfolder:structure', function (r, structure) {

            $scope.structure = structure;

        });

        $scope.showFilesIn = function (folder_id) {
            if (localStorage.getItem("folderId") === null) {

                localStorage.setItem('folderId', folder_id);
            } else {

                localStorage.removeItem('folderId');

                localStorage.setItem('folderId', folder_id);

            }

            $rootScope.$emit('folder:id', folder_id);
        };

        $scope.showsendshared = function (folder_id) {
            $rootScope.$emit('sharedsend:id', folder_id);
        };

        $scope.showreceivedshared = function (folder_id) {
            $rootScope.$emit('sharedreceived:id', folder_id);
        };

        $scope.delete_Folder = function (folder_id) {

            Folder.deleteFolders(folder_id)

                .then(function (response) {
                    if (response.Deletefolders === false) {
                        $.notify("Folder not deleted.", "error");
                    } else {

                        $rootScope.$emit('folder:list');
                        $.notify("Folder saved in recycle bin.", "success");
                        getFolders();
                    }
                }, function (err) {

                    if (DEBUG === true)
                        console.log(err);
                });
        };

        $scope.create = function (folder) {

            var creatingFolder = function (params) {
                Folder.createFolder(params)
                    .then(function (response) {

                        if (response.folderCreated === false) {

                            $.notify("A  Folder Exist", "error");

                        } else {

                            $.notify("A Folder Created", "success");


                        }

                    }, function (err) {

                        if (DEBUG === true)
                            console.log(err);
                    });
            };
            var params = {
                "parent_folder": $stateParams.folderId,
                "nested_name": folder,

            };

            creatingFolder(params);
        };


        $scope.renamefolder = function (folder) {

            Folder.renamefolder(folder)

                .then(function (response) {
                    if (response.folderchange === false) {
                        $.notify("A  Not renamed", "error");
                    } else {

                        $.notify("A Folder renamed", "success");
                        getFolders();
                    }
                }, function (err) {

                    if (DEBUG === true)
                        console.log(err);
                });
        };

        var init = function () {
            getuser();
            getFolders();
            receiveSharedFolder();
            sendSharedFolder();
            getfolderInbins();
        };
        init();

        $(function () {

            DialogController.$inject = ["$scope", "$mdDialog"];
            $scope.share_enabled = false;
            $scope.paste_enabled = true;

            function DialogController($scope, $mdDialog) {
                $scope.hide = function () {
                    $mdDialog.hide();
                };
                $scope.cancel = function () {
                    $mdDialog.cancel();
                };
            }
            $scope.onRightClick = function (folderId,userId) {
                if (localStorage.getItem("folderId") === null) {
                    localStorage.setItem('folderId', folderId);
                } else {
                    localStorage.removeItem('folderId');
                    localStorage.setItem('folderId', folderId);
                }
            };
            
            $.contextMenu({
                selector: '.context-menu-folder',
                callback: function (key, options) {

                    if (key === "copy"){
                        $mdDialog.show({
                            parent: angular.element(document.body),
                            controller: DialogController,
                            templateUrl: '/views/copy-file.tpl.html',
                            clickOutsideToClose: false
                        }).catch();
                    } 
                    if (key === "delete"){
                        Folder.deleteFolders(localStorage.getItem('folderId'))

                        .then(function (response) {
                            if (response.Deletefolders === false) {
                                $.notify("Folder not deleted.", "error");
                            } else {

                                $rootScope.$emit('folder:list');
                                $.notify("Folder saved in recycle bin.", "success");
                                getFolders();
                            }
                        }, function (err) {

                            if (DEBUG === true)
                                console.log(err);
                        });
                    }

                        

                },
                items: {
                    "edit": {
                        name: "Edit",
                        icon: "edit"
                    },
                    "cut": {
                        name: "Cut",
                        icon: "cut"
                    },
                    "copy": {
                        name: "Copy",
                        icon: "copy"
                    },
                    "paste": {
                        name: "Paste",
                        icon: "paste"
                    },
                    "delete": {
                        name: "Delete",
                        icon: "delete"
                    },
                    "sep1": "---------",
                    "quit": {
                        name: "Quit",
                        icon: function () {
                            return 'context-menu-icon context-menu-icon-quit';
                        }
                    }
                }
            });

            $('.context-menu-folder').on('click', function (e) {
                console.log('clicked', this);
            })
        });


    }]).factory("cacheFactory", ["$cacheFactory", function ($cacheFactory) {

        return $cacheFactory("userData");

    }]);
angular.module('sync')
    .controller('previewController', [
        '$scope', 'pdfDelegate', '$timeout', '$stateParams', '$rootScope', '$exceptionHandler', 'Files',
        function (
            $scope, pdfDelegate, $timeout, $stateParams, $rootScope, $exceptionHandler, Files) {
            
            if ($stateParams.preview && $stateParams.extension === 'pdf') {
                $scope.previewable = true;
                try {
                    $scope.pdfUrl = $rootScope.endPoint + '/preview/' + $stateParams.preview + '/of/' + $stateParams.user;
                    $timeout(function () {
                        pdfDelegate.$getByHandle('my-pdf-container').zoomIn(0.5);
                    }, 3000);
                } catch (e) {

                    throw (new Error(e));
                }
            } else if ($stateParams.preview && $stateParams.extension === 'jpg' || $stateParams.extension === 'png') {
                $scope.file_name = $stateParams.preview;
                $scope.previewable = false;
                $rootScope.folder_id = $stateParams.folder;
            } else {
                //send a filename to a download button
                $scope.file_name = $stateParams.preview;
                $scope.previewable = false;
                $rootScope.folder_id = $stateParams.folder;
            }

            $scope.goNext = function () {
                $scope.increment = 1;
                pdfDelegate.$getByHandle('my-pdf-container').next($scope.increment + 1);
            };
            $scope.donwload = "Download";
            $scope.goPrev = function (page) {
                pdfDelegate.$getByHandle('my-pdf-container').prev($scope.increment - 1);
            };
        }
    ]);

angular.module('sync')
    .directive('fileDownload', ['$stateParams', '$rootScope', function ($stateParams, $rootScope) {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                obj: '=',
                name: '='
            },
            template: '<span  data-ng-click="download(obj)">{{name}}</span>',
            controller: ['$rootScope', '$scope', '$element', '$attrs', '$timeout', function ($rootScope, $scope, $element, $attrs, $timeout) {
                function fakeProgress() {
                    
                    $timeout(function () {
                        if ($scope.progress < 95) {
                            $scope.progress += (96 - $scope.progress) / 2;


                            fakeProgress();

                        }
                    }, 250);
                }


                $scope.progress = 0;

                function prepare(url) {
                    fakeProgress();
                }

                function success(url) {
                    $rootScope.$broadcast('dialogs.wait.complete');
                }

                function error(response, url) {

                }

                $scope.download = function (file) {
                    console.log(file);
                    $.fileDownload($rootScope.endPoint + '/downloads/file/' + file + '/' + $rootScope.folder_id, {
                        prepareCallback: prepare,
                        successCallback: success,
                        failCallback: error
                    });
                };
            }]
        };
    }]);


angular.module("sync")
    .controller('FileSharedController', ['$scope', 'Share', 'User', 'DEBUG', '$stateParams', '$rootScope', function ($scope, Share, User, DEBUG, $stateParams, $rootScope) {

        $scope.share = function (documents) {

            var shared_to_email = $("#tag").tagging("getTags");

            var params = {
                "shared_to_email": shared_to_email,
                "shared_docs_id": documents.shared_docs_id,
                "link": document.getElementById("document_link").innerHTML,
                "accessLink_status": documents.accessLink_status,
                "accessLink_pswd": documents.accessLink_pswd,
                "docs_type": documents.docs_type,
                "shared_manager": documents.shared_manager,

                "shared_permission": documents.shared_permission,

            };
            Share.SendsharedData(params)
                .then(function (response) {

                    if (response.Docshared === false) {


                        $.notify("Docshared  exist!", "success");
                    } else {

                        $.notify("Successfly shared", "success");



                    }

                }, function (err) {

                    if (DEBUG === true)
                        console.log(err);
                });
        };

    }]);
/* global sync */

angular.module('sync')
.controller('FollowController', ['$scope','People',function ($scope, People) {
		$scope.init = function(){
			$scope.getPeopleToFollow();
		};
		$scope.getPeopleToFollow  = function(){
			People.get()
			.then(function(response){
				console.log(response);
				
				$scope.people = response;
			}, function(error){

			});
		};
		$scope.$on('followMember',function(event,params){
			event.preventDefault();
			People.follow(params)
			.then(function(response){
				//console.log(response);
				$scope.getPeopleToFollow();
			},function(error){
				console.log(error);
			});
		});
		$scope.follow = function(id){
			var follow ={id: id, option:'addPeople'};
			$scope.$emit("followMember", follow);
		};
		$scope.init();
}]);

/* global Files */
/* global sync */
/* global $scope */
/* global angular */
/*Author Muragijimana Founder & CEO of sync call him on StrimUp@gmail.com*/

angular.module('sync')
.service('Group', [
	'$http',
	'$rootScope',
	'$q',function Group (
		$http,
		$rootScope,
		$q) {
	this.create 		=	function(name){
		var differed 	=	$q.defer();
		$http.post($rootScope.endPoint + '/api/v1/me/groups', name)
		.success(function(response){
			differed.resolve(response);
		})
		.error(function(error) {
			differed.reject(error);
		});
		return differed.promise;
	};
	this.delete 		=	function(id){
		var differed 	=	$q.defer();
		$http.delete($rootScope.endPoint + '/api/v1/me/groups/'+id)
		.success(function(response){
			differed.resolve(response);
		})
		.error(function(error) {
			differed.reject(error);
		});
		return differed.promise;
	};
	this.myGroups		=	function(){
		var differed 	=	$q.defer();

		$http.get($rootScope.endPoint + '/api/v1/me/groups')
		.success(function(response){
			differed.resolve(response);
		})
		.error(function(error) {
			console.log('differed slow:' + error);
			differed.reject(error);
		});
		return differed.promise;
	};

	this.addPeople 	=	function(member){
		var differed 	=	$q.defer();
		$http.put($rootScope.endPoint + '/api/v1/me/groups/'+JSON.stringify(member))
		.success(function(response){
			differed.resolve(response);
		})
		.error(function(error) {
			differed.resolve(error);
		});
		return differed.promise;
	};
	this.addFileToGroup = function(fileObj){
		var differed = $q.defer();
		$http.put($rootScope.endPoint + '/api/v1/me/groups/'+ JSON.stringify(fileObj))
		.success(function(response){
			differed.resolve(response);
		})
		.error(function(err){
			differed.reject(err);
		});
		return differed.promise;
	};
	this.removePeople 	=	function(member){
		var differed 	=	$q.defer();
		$http.put($rootScope.endPoint +'/api/v1/me/groups/'+JSON.stringify(member))
		.success(function(response){
			differed.resolve(response);
		})
		.error(function(error) {
			differed.reject(error);
		});
		return differed.promise;
	};
  this.suggestPeople = function(id){

    	var differed = $q.defer();
    	$http.get($rootScope.endPoint + '/api/v1/me/groups/' + id)
    	.success(function(res){
    		differed.resolve(res);
    	})
    	.error(function(err) {
    		differed.reject(err);
    	});
    	return differed.promise;
    };
	return this;
}]);

angular.module('sync')
.controller('GroupController', [
	'$scope',
	'Group',
	'User',
	'Files',
	'userInteractionNotification',
	function GroupController (
		$scope,
		Group,
		User,
		Files,
		userInteractionNotification
	) {
	$scope.init 	=	function(){
		$scope.myGroups();

		$scope.suggestedPeopleToGroup();//ofcause they are arleady your friend but not participant in your stuff work!
	};
	$scope.userId 				=	function(){
		User._id()
		.then(function(response){
			$scope.userId 	=	response;
		}, function(error){
			console.log(error);
		});
	};
	$scope.myGroups 			=	function(){
		Group.myGroups()
		.then(function(response){
			$scope.group 	= response;
		}, function(error){
		});
	};
	$scope.suggestedPeopleToGroup 	=	function(id){
		//clearing all view rendered before
		$scope.showFiles=false;
		$scope.showGroup=false;
		$scope.showBox=false;
		if(!angular.isUndefined(id)){
			Group.suggestPeople(id).then(function(response){
				// console.log(response);
				$scope.followers = response;
			}, function(error){
				console.log(error);
			});
		}
	};
	$scope.$on('refreshGroup',function(){
       $scope.init();
  	});
	$scope.$on('groupDeleted', function (event, args) {
		event.preventDefault();
		$scope.myGroups();
	});
	$scope.$on('groupTobindwith', function (event, groupid) {
		event.preventDefault();
        $scope.emitted =groupid;
        if( $scope.showFiles === true){
            $scope.showFiles=false;
        }
        $scope.suggestedPeopleToGroup(groupid);
        $scope.addPeople=true;
	});
	$scope.getGroupFiles = function(owner){
    Files.getGroupFiles(owner)
		.then(function(tree){
			$scope.files = tree;
				//navigate trough tree response which is require much attention
				$scope.groups=[];
				for (var i = 0; i < tree.length; i++) {
						if (tree[i].hasOwnProperty.groups && tree[i].groups) {
								$scope.groups.push(tree[i].friends);
						} else if (tree[i].hasOwnProperty('groups')) {
							return;
								//FIXME groups is not defined here
								// $scope.groups = groups.concat(traverse(tree[i].groups));
						}
				}
		}, function(error){
			console.log(error);
		});
  };
	$scope.getBoxFiles = function(groupId){
		$scope.emitted =groupId;
  	Files.getBoxFiles(groupId)
		.then(function(tree){
			$scope.files = tree;
				//navigate trough tree response which is require much attention
				$scope.groups=[];
				var groups;
				for (var i = 0; i < tree.length; i++) {
						if (tree[i].hasOwnProperty.groups && tree[i].groups) {
								$scope.groups.push(tree[i].friends);
						} else if (tree[i].hasOwnProperty('groups')) {
				            $scope.groups = groups.concat(traverse(tree[i].groups));
						}
				}
		}, function(error){
			console.log(error);
		});
  };
$scope.$on('showOptions',function(_,params){
     if(params.owner ==="box"){
			 $scope.addPeople=false;
			 $scope.showGroup=false;
       $scope.showBox=true;
       if( $scope.addPeople === true){
           $scope.addPeople=false;
       }
			 //set files scope to show files of box files is repeated in view directive
       $scope.getBoxFiles (params.group_id);
		 }else if (params.owner === "group") {
			 $scope.showBox=false;
			 $scope.addPeople=false;
			 $scope.showGroup=true;
			 if( $scope.addPeople === true){
					 $scope.addPeople=false;
			 }
			 //change files to new scope files to show files of groups  is repeated in view directive
			 $scope.getGroupFiles (params.group_id);
		 }
});
$scope.init();
}]);
angular.module('sync')
.directive('myGroups', [
	'Group',
	'Report',
	'userInteractionNotification',
	function myGroups (
		Group,
		Report,
		userInteractionNotification,
		Notification) {
	return {
		priority: 10,
		templateUrl: 'App/scripts/js/directives/groups.html',
		restrict: 'E',
		scope: {
			  id: '=userId',
          groups: '=',
          followers: '=',
          emitted:'=',
          showPeople:'=',
          showGroup   :  '=',
          files   :  '=',
	  			showBox:  '='
		},
		link: function (scope, iElement, iAttrs) {
			scope.deleteGroup = function(id){
				Group.delete(id)
				.then(function(res){
						userInteractionNotification.info("Group deleted");
					 	scope.$emit("groupDeleted", 'group deleted');
				}, function(err){
					Report.send('delete group error:'+err)
					.then(function(){}, function(){});
				});
			};
      scope.createGroup	=	function(name){
          Group.create(name)
                  .then(function(response){
											userInteractionNotification.success("Created new Group");
                      scope.$emit('refreshGroup',null);
                  }, function(error){
                      console.log(error);
                  });
              };
			scope.initAddPeople = function(groupid){
				scope.$emit("groupTobindwith", groupid);
			};

			scope.addPeople = function(params){
				var newParams ={
					'option':'addMember',
					'userId':params.userId,
					'groupId':params.groupId
				};
				if(angular.isUndefined(params)){
					return;
					//won't happen!or if ti happen we quit
				}else{

					Group.addPeople(newParams)
					.then(function (response){
						//refresh group with new member status
							userInteractionNotification.success("Added Member in group.");
              scope.initAddPeople(params.groupId);
              scope.$emit('refreshGroup','');
              console.log(response);
					}, function (error,status){
              console.log(error);
					});
				}
			};
			scope.removePeople = function(params){

				var newParams ={
					'option':'removeMember',
					'userId':params.userId,
					'groupId':params.groupId
				};

				if(angular.isUndefined(params)){
					return;
					//won't happen!or if ti happen we quit too bad hierachy!
				}else{
				Group.removePeople(newParams)
					.then(function (response){
							userInteractionNotification.info("Removed Member in group.");
	            scope.initAddPeople(params.groupId);
	            scope.$emit('refreshGroup','');
            	console.log(response);
					}, function (error,status){
              console.log(error);
					});
				}
			};
			scope.removeFromGroup = function(){
				console.log('we can remove file in group');
			};
			scope.addFileToGroup = function(params){
				var fileObj ={
					'option':'addFiles',
					'fileId':params.fileId,
					'groupId':params.groupId
				};

				Group.addFileToGroup(fileObj)
				.then(function(response){
					console.log(response);
					// userInteractionNotification.success("A file is added in group");
				},function(err){
					userInteractionNotification.warn("Some error occured during adding file");
				});

			};
			scope.filesInBox = function(groupid){
				var params ={'group_id':groupid,'owner':'box'};
				scope.$emit('showOptions',params);

			};
			scope.filesInGroup = function(groupid){

				var params ={'group_id':groupid,'owner':'group'};
				scope.$emit('showOptions',params);
			};
		}
	};
}]);

angular.module('sync')
.service('Report', [function Report ($http,$q,$rootScope) {
	this.send = function(issue){
		var differed = $q.defer();
		$http.post($rootScope.endPoint + '/api/v1/issues', issue)
		.success(function(res){
			differed.resolve(res);
		})
		.error(function(err) {
			differed.reject(err);
		});
		return differed.promise;
	};
	return this;
}]);

angular.module('sync')
    .controller('TweetingWayMessage', ['$rootScope', '$scope', 'Message', function ($rootScope, $scope, Message) {

        $(function () {
            var jeremy = decodeURI("J%C3%A9r%C3%A9my") // Jérémy
            var tags = ["Jacob", "Isabella", "Ethan", "Emma", "Michael", "Olivia", "Alexander", "Sophia", "William", "Ava", "Joshua", "Emily", "Daniel", "Madison", "Jayden", "Abigail", "Noah", "Chloe", "你好", "你你你", jeremy];
            $('#chatData').atwho({
                at: "#",
                data: tags,
                limit: 200,
                callbacks: {
                    afterMatchFailed: function (at, el) {
                        // 32 is spacebar
                        if (at === '#') {
                            tags.push(el.text().trim().slice(1));
                            this.model.save(tags);
                            this.insert(el.text().trim());
                            return false;
                        }
                    }
                }
            });
        });
        
        
        $scope.sendMessage = function (message) {
           
            $('<audio id="chatAudio"><source src="audio/notify.ogg" type="audio/ogg"><source src="audio/notify.mp3" type="audio/mpeg"><source src="audio/notify.wav" type="audio/wav"></audio>').appendTo('body');
            $('#chatAudio')[0].play();

            Message.send(message)
                .then(function (response) {
                    $rootScope.$emit("message:list");
                    $scope.messages = response.data;
                    var a = $("#chatData").val().trim();
                    if (a.length > 0) {
                        $("#chatData").val('');
                        $("#chatData").focus();
                        $("#chatBox").animate({
                            "scrollTop": $('#chatBox')[0].scrollHeight
                        }, "slow");
                        
                    }
                }).catch();
        };
        var getMessage = function (message) {
            Message.get()
                .then(function (response) {

                    $scope.messages = response.data;
                }).catch();
        };
        $rootScope.$on(function () {
            getMessage();
        });
        var init = function () {
            getMessage();
        };
        init();

    }]);
angular.module('sync')
.controller('SettingsController', ['$scope','Settings','$log','$rootScope', function ($scope,Settings,$log,$rootScope) {
	$scope.init = function(){


    };

    $scope.makePublic = function() {
        var param ={
            id:$rootScope.id,
            type:$rootScope.type
        };
       console.log(param);
        Settings.makePublic(param)
        .then(function(response) {
            
        }).catch();


    };

    $scope.init();
}]);

/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/requirejs/require.d.ts" />
// import {module} from 'angular';
// export let inbox = module('inbox',  [
//     ]); 
//# sourceMappingURL=inbox.js.map
/* global sync */
/* global angular */

    angular.module('sync')
    .controller('UploadController', ['$scope', 'FileUploader','$rootScope','Files','$stateParams','DEBUG','cacheFactory','$http', function($scope, FileUploader,$rootScope,Files,$stateParams,DEBUG,cacheFactory,$http) {
        var uploader = $scope.uploader = new FileUploader({
            url: $rootScope.endPoint+'/api/upload'
        });
        //FILTERS
        uploader.filters.push({
            name: 'customFilter',
            fn: function(item /*{File|FileLikeObject}*/, options) {
                return this.queue.length < 10;
            }
        });

        if($stateParams.folderId){
           
            $http.get($rootScope.endPoint + '/api/gmePath/' + $stateParams.folderId)
            .success(function(paths) {
                
                var full_path= [];
                angular.forEach(paths,function(path){
                    
                    full_path.push(path.name);
                });
                
                var combined_path = full_path.join('/');
            
                uploader.formData.push({
                   
                    folderId:$stateParams.folderId,
                    folderStructure:combined_path

                });
            });
        }else{
            
            uploader.formData.push({
                    type:$rootScope.fileType,
                    folderId:undefined,
                    folderStructure:undefined
            });
        }
            
        //CALLBACKS
        uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
            // if(DEBUG === true)
            //     console.info('onWhenAddingFileFailed', item, filter, options);
        };
        uploader.onAfterAddingFile = function(fileItem) {
            // if(DEBUG === true)
            //     console.info('onAfterAddingFile', fileItem);
        };
        uploader.onAfterAddingAll = function(addedFileItems) {
            // if(DEBUG === true)
            //     console.info('onAfterAddingAll', addedFileItems);
        };
        uploader.onBeforeUploadItem = function(item) {
            // if(DEBUG === true)
            //     console.info('onBeforeUploadItem', item);
        };
        uploader.onProgressItem = function(fileItem, progress) {
            // if(DEBUG === true)
            //     console.info('onProgressItem', fileItem, progress);
        };
        uploader.onProgressAll = function(progress) {
            // if(DEBUG === true)
            //     console.info('onProgressAll', progress);
        };
        uploader.onSuccessItem = function(fileItem, response, status, headers) {
            $rootScope.$emit('file:uploaded');

            // if(DEBUG === true)
            //     console.info('onSuccessItem', fileItem, response, status, headers);
        };
        uploader.onErrorItem = function(fileItem, response, status, headers) {

            // console.log('Error here');

            // if(DEBUG === true)
            //     console.info('onErrorItem', fileItem, response, status, headers);
    };
        uploader.onCancelItem = function(fileItem, response, status, headers) {
            // if(DEBUG === true)
            //     console.info('onCancelItem', fileItem, response, status, headers);
        };
        uploader.onCompleteItem = function(fileItem, response, status, headers) {
            $rootScope.$emit('file:list');
            // if(DEBUG === true)
            //     console.info('onCompleteItem', fileItem, response, status, headers);
        };
        uploader.onCompleteAll = function()
        {
          Files.getBoxFiles()
            .then(function(res){
              $scope.files 	=	res;

            }, function(error){

                if(DEBUG === true)
                    console.log(error);

            })
            .finally(function () {
                $scope.dataLoading = false;
           });
           
        };
        if(DEBUG === true)
            console.info('uploader', uploader);
}]);

angular.module('sync')
.service('urlShortener',[function(){
  
  // this.makeShort = function(longUrl)
  // {
  //   //  var longUrl=document.getElementById("longurl").value;
  //   var request = gapi.client.urlshortener.url.insert({
  //     'resource': {
  //       'longUrl': longUrl
  // 	}
  //     });
  //     request.execute(function(response)
  // 	{
  
  // 		if(response.id != null)
  // 		{
  // 			str ="<b>Long URL:</b>"+longUrl+"<br>";
  // 			str +="<b>your File is:</b> <a href='"+response.id+"'>"+response.id+"</a><br>";
  // 			return str;
  // 		}
  // 		else
  // 		{
  // 			console.log("error: unable to create short url");
  // 		}
  
  //     });
  //  }
  
  // this.getShortInfo = function()
  //  {
  //      var shortUrl=document.getElementById("shorturl").value;
  
  //      var request = gapi.client.urlshortener.url.get({
  //        'shortUrl': shortUrl,
  //  	     'projection':'FULL'
  //      });
  //      request.execute(function(response)
  //  	{
  //  		if(response.longUrl!= null)
  //  		{
  //  			str ="<b>Long URL:</b>"+response.longUrl+"<br>";
  //  			str +="<b>Create On:</b>"+response.created+"<br>";
  //  			document.getElementById("output").innerHTML = str;
  //  		}
  //  		else
  //  		{
  //  			console.log("error: unable to get URL information");
  //  		}
  
  //      });
  
  //  }
  //  function load()
  //  {
  //  	gapi.client.setApiKey('AIzaSyDSn7z7V1f6H3yXrgAlgVGw52dSEmqALIc'); //get your ownn Browser API KEY
  //  	gapi.client.load('urlshortener', 'v1',function(){});
  //  }
  //  window.onload = load;
}]);

angular.module('sync')
.controller('logoutController',['$http','$scope','$rootScope','$window', function($http,$scope,$rootScope,$window) {
  $scope.logout = function() {

    $http.post($rootScope.endPoint +'/logout')
    .success(function(resp) {
       
        $window.location.href = '/';
    }).error(function(err) {
      

    })
  };
}])
angular.module('sync')
  .controller('userController', ['User', '$scope', '$rootScope', '$interval', function (User, $scope, $rootScope, $interval) {
    $scope.color = "blue";
    $scope.accountObject = {};
    $scope.accountObject.selectedAccounts = [];
    var user = function () {
      User.get()
        .then(function (user) {

          $scope.user = user;

        }).catch();
    };
    var getDiskUsage = function () {
      $scope.ShowDisk = false;
      User.diskUsage()
        .then(function (res) {
          $scope.usageDisk = res;
          var size = res.size;
          var unit = res.unit;

          if (size === 1 && unit === "KB") {
            
            $scope.color = "#0a9bcf";
            $scope.ShowDisk = true;
          } else if (size === 1 && unit === "GB") {
            $scope.color = "orange";
            $scope.ShowDisk = true;
          } else if (size === 2 && unit === "GB") {
            $scope.color = "red";
            $scope.ShowDisk = true;
          } else {
            
            $scope.color = "#0a9bcf"; //blue
            $scope.ShowDisk = true;
          }

        }).catch();
    };
    $scope.report = function (message) {
      User.report(message).then(function (response) {
        if(response.status === 200)
             $.notify("Your Issue is being processed thank you..", "success");
      }, function (e) {

      })
    };
    getDiskUsage();
    user();
    $rootScope.$on('file:uploaded', function () {
      user();
    });
  }]);
(function () {
    'use strict';
 
    angular.module('video', [ ]);
})();
angular.bootstrap($("#one"), ['video']);
(function () {
    'use strict';

    angular
        .module('video.core.services', [])
        .factory('tokenService', tokenService);

    tokenService.$inject = ['$http'];

    function tokenService($http) {
        var service = {
            getToken: function getToken() {
                return $http.get('/token')
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(error) {
                        console.error('XHR Failed for getToken.' + error.data);
                    });
            }
        };
        return service;
    }
})();

// var accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTSzQxOTg0OGFjYWM2NmIyODk2ZTRiOTRhY2UyMTk2NjYwLTE0Nzc5ODgwNDIiLCJpc3MiOiJTSzQxOTg0OGFjYWM2NmIyODk2ZTRiOTRhY2UyMTk2NjYwIiwic3ViIjoiQUMwMmI4MzY4NTA1NGU4ODYxMDNlMjNkMjcxN2I0ZWViYiIsImV4cCI6MTQ3Nzk5MTY0MiwiZ3JhbnRzIjp7ImlkZW50aXR5IjoicmVhbC1hcHAiLCJydGMiOnsiY29uZmlndXJhdGlvbl9wcm9maWxlX3NpZCI6IlZTNWI0ZjAyMmY3MjMxMjliNWRjNTM3N2M4ZTBiZDM0OWIifX19.mOMCNS99q3xq-9lIO7LzsM7QB5Q1mda__rPEcRg0FMA';
// var accessManager = new Twilio.AccessManager(accessToken);
// var client = new Twilio.Conversations.Client(accessManager);

// client.inviteToConversation('Same identity that you used to generate the first token').then(onInviteAccepted);

(function () {
    'use strict';

    angular
        .module('video.core.directives', [])
        .directive('twilioVideo', twilioVideoDirective);

    function twilioVideoDirective() {
        return {
            template: '<div class="twilio-video-media-container"></div>',
            restrict: 'E',
            replace: true,
            scope: {
                media: '=',
            },
            link: function (scope, element, $attributes) {
               scope.$watch('media', function (newval, oldval) {
                    if (scope.media) {
                        scope.media.attach(element[0]);
                    }
                }, true);
            }
        };
    }
})();
(function () {
    'use strict';

    angular
        .module('video.videochat', [])
        .controller('VideoChatController', VideoChatController);

    VideoChatController.$inject = ['$scope', '$log', 'tokenService'];

    function VideoChatController($scope, $log, tokenService) {
        var vm = this;
        var conversationsClient;
        var activeConversation;
        var token;
        var identity;

        vm.clientConnected = false;
        vm.log = 'Preparing to listen';
        vm.inviteTo = '';
        vm.remoteParticipants = {};
        
        vm.previewCamera = function () {
            vm.previewMedia = new Twilio.Conversations.LocalMedia();
            Twilio.Conversations.getUserMedia().then(
                function (mediaStream) {

                    $scope.$apply(function () {
                        vm.previewMedia.addStream(mediaStream);
                    });

                }).catch(function (error) {
                    $log.error('Unable to access local media', error);
                });
        };

        vm.sendInvite = function () {
            if (activeConversation) {
                activeConversation.invite(vm.inviteTo);
            } else {
                var options = {};
                if (vm.previewMedia) {
                    options.localMedia = vm.previewMedia;
                }
                conversationsClient.inviteToConversation(vm.inviteTo, options).then(conversationStarted).catch(function (error) {
                    $scope.$apply(function () {
                        vm.log = 'Unable to create conversation';
                        $log.error('Unable to create conversation', error);
                    });
                });
            }
        };

        vm.toggleMute = function () {
            if (vm.previewMedia) {
                vm.previewMedia.mute(!$scope.previewMedia.isMuted);
            }
        };

        vm.toggleCamera = function () {
            if (vm.previewMedia) {
                vm.previewMedia.pause(!$scope.previewMedia.isPaused);
            }
        };

        activate();

        function activate() {
            return getToken().then(function (token) {
                $log.info('Token Retrieved: ' + token);

                var accessManager = new Twilio.AccessManager(token);

                $log.log(identity);

                conversationsClient = new Twilio.Conversations.Client(accessManager);
                conversationsClient.listen().then(clientConnected).catch(function (error) {
                    $scope.$apply(function () {
                        vm.log = 'Could not connect to Twilio: ' + error.message;
                    });
                });
            });
        }

        function conversationStarted(conversation) {
            $scope.$apply(function () {
                vm.log = 'In an active Conversation';
                activeConversation = conversation;
            });

            if (!vm.previewMedia) {
                $scope.$apply(function () {
                    vm.previewMedia = conversation.localMedia;
                });
            }

            // When a participant joins, draw their video on screen
            conversation.on('participantConnected', function (participant) {
                $scope.$apply(function () {
                    $log.log('Participant "' + participant.identity + '" connected');
                    vm.log = 'Participant "' + participant.identity + '" connected';
                    vm.remoteParticipants[participant.sid] = participant.media;
                });
            });

            // When a participant disconnects, note in log
            conversation.on('participantDisconnected', function (participant) {
                $scope.$apply(function () {
                    vm.log = 'Participant "' + participant.identity + '" disconnected';
                    delete vm.remoteParticipants[participant.sid];
                });
            });

            // When the conversation ends, stop capturing local video
            conversation.on('disconnected', function (conversation) {
                $scope.$apply(function () {
                    vm.log = 'Connected to Twilio. Listening for incoming Invites as "' + conversationsClient.identity + '"';
                });

                vm.clientConnected = false;
                conversation.localMedia.stop();
                conversation.disconnect();
                activeConversation = null;
            });
        };

        function clientConnected() {
            $scope.$apply(function () {
                vm.clientConnected = true;
                vm.log = 'Connected to Twilio. Listening for incoming Invites as "' + conversationsClient.identity + '"';
                $log.log('Connected to Twilio. Listening for incoming Invites as "' + conversationsClient.identity + '"');
            });

            conversationsClient.on('invite', function (invite) {
                $scope.$apply(function () {
                    vm.log = 'Incoming invite from: ' + invite.from;
                    invite.accept().then(conversationStarted);
                });
            });
        }

        function getToken() {
            return tokenService.getToken()
                .then(function (data) {
                    token = data.token;
                    identity = data.identity;
                    return token;
                });
        }
    }
})();

//Author Muragijimana Richard strimup@gmail.com beastar457@gmail.com

  angular.module('sync')
  .controller('MessageController', ["$http", "$scope", "$q", "$rootScope", function ($http,$scope,$q,$rootScope) {
       $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
      
         $scope.name="Muragijimana";
         var posts=$http.get($rootScope.endPoint + '/api/v1/post'),
             institutions=$http.get($rootScope.endPoint + '/api/v1/post');

          $q.all([posts,institutions]).then(function(result) {
            var tmp = [];
            angular.forEach(result, function(response) {
              tmp.push(response.data);
            });
            
            return tmp;
          }).then(function(tmpResult) {
              // posts=tmpResult;
              // console.log(angular.toJson(tmpResult[0], true));
            $scope.posts = tmpResult[0];
          });
         $('.post-in').atwho({
            at: "@",
            data:['Peter', 'Tom', 'Anne'],

         });

  }]);


angular.module('sync')
.controller("TutorialModal", ["$scope", function($scope) {

  $scope.open = function() {
    $scope.showModal = true;
  };
  $scope.ok = function() {
    $scope.showModal = false;
  };

  $scope.cancel = function() {
    $scope.showModal = false;
  };

}]);

angular.module('sync')
.controller("StriminModal", ["$scope", function($scope) {

  $scope.open = function() {
    $scope.showModal = true;
  };
  $scope.ok = function() {
    $scope.showModal = false;
  };

  $scope.cancel = function() {
    $scope.showModal = false;
  };

}]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuZ3VsYXItdXBsb2FkLmpzIiwiYXBwQ29uZmlnLmpzIiwibG9naW5Db250cm9sbGVyLmpzIiwicmVnaXN0ZXJDb250cm9sbGVyLmpzIiwiY29tbW9uL0NoZWNraW5nZW1wdHkuanMiLCJjb21tb24vRW5jcnlwdGVyLmpzIiwiY29tbW9uL0ZpbGVzLmpzIiwiY29tbW9uL0ZvbGRlci5qcyIsImNvbW1vbi9NZXNzYWdlLmpzIiwiY29tbW9uL1Blb3BsZS5qcyIsImNvbW1vbi9TZXR0aW5ncy5qcyIsImNvbW1vbi9TaGFyZS5qcyIsImNvbW1vbi9TbXMuanMiLCJjb21tb24vU3ViRm9sZGVyLmpzIiwiY29tbW9uL1Rlc3QuanMiLCJjb21tb24vVXNlci5qcyIsImNvbW1vbi9ub3RpZmljYXRpb24uanMiLCJjb21tb24vdXNlckludGVyYWN0aW9uTWFuYWdlci5qcyIsImNvbW1vbi91c2VySW50ZXJhY3Rpb25Ob3RpZmljYXRpb24uanMiLCJkaWFsb2dzL2RpYWxvZ3MuanMiLCJmZWVkcy9mZWVkcy5qcyIsImZpbGVzL2NoZWNraW5nZW1wdHkuanMiLCJmaWxlcy9maWxlcy5qcyIsImZpbGVzL2ZvbGRlcnMuanMiLCJmaWxlcy9wcmV2aWV3LmpzIiwiZmlsZXMvc2hhcmluZy5qcyIsImZvbGxvd2Vycy9mb2xsb3dlcnMuanMiLCJncm91cHMvZ3JvdXBzLmpzIiwibWVzc2FnZXMvbWVzc2FnZS5qcyIsInNldHRpbmdzL3NldHRpbmdzQ29udHJvbGxlci5qcyIsInVwbG9hZGVyL3VwbG9hZGVyLmpzIiwidXJsU2hvcnRuZXIvc2hvcnRuZXIuanMiLCJ1c2VyL2xvZ291dENvbnRyb2xsZXIuanMiLCJ1c2VyL3VzZXJDb250cm9sbGVyLmpzIiwidmlkZW8vYXBwLm1vZHVsZS5qcyIsInZpZGVvL3Rva2VuLnNlcnZpY2UuanMiLCJ2aWRlby92aWRlby5kaXJlY3RpdmUuanMiLCJ2aWRlby92aWRlb2NoYXQuY29udHJvbGxlci5qcyIsImZlZWRzL2NvbnRyb2xsZXIvbWVzc2FnZUNvbnRyb2xsZXIuanMiLCJmZWVkcy9jb250cm9sbGVyL21vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBLENBQUEsU0FBQSxpQ0FBQSxNQUFBLFNBQUE7Q0FDQSxHQUFBLE9BQUEsWUFBQSxZQUFBLE9BQUEsV0FBQTtFQUNBLE9BQUEsVUFBQTtNQUNBLEdBQUEsT0FBQSxXQUFBLGNBQUEsT0FBQTtFQUNBLE9BQUEsSUFBQTtNQUNBLEdBQUEsT0FBQSxZQUFBO0VBQ0EsUUFBQSx5QkFBQTs7RUFFQSxLQUFBLHlCQUFBO0dBQ0EsTUFBQSxXQUFBO0FBQ0EsZ0JBQUEsQ0FBQSxTQUFBLFNBQUE7O1VBRUEsSUFBQSxtQkFBQTs7O1VBR0EsU0FBQSxvQkFBQSxVQUFBOzs7V0FHQSxHQUFBLGlCQUFBO1lBQ0EsT0FBQSxpQkFBQSxVQUFBOzs7V0FHQSxJQUFBLFNBQUEsaUJBQUEsWUFBQTtZQUNBLFNBQUE7WUFDQSxJQUFBO1lBQ0EsUUFBQTs7OztXQUlBLFFBQUEsVUFBQSxLQUFBLE9BQUEsU0FBQSxRQUFBLE9BQUEsU0FBQTs7O1dBR0EsT0FBQSxTQUFBOzs7V0FHQSxPQUFBLE9BQUE7Ozs7O1VBS0Esb0JBQUEsSUFBQTs7O1VBR0Esb0JBQUEsSUFBQTs7O1VBR0Esb0JBQUEsSUFBQTs7O1VBR0EsT0FBQSxvQkFBQTs7O1VBR0E7O01BRUEsU0FBQSxRQUFBLFNBQUEscUJBQUE7O0NBRUE7O0NBRUEsSUFBQSxVQUFBLG9CQUFBOztDQUVBLElBQUEsV0FBQSx1QkFBQTs7Q0FFQSxJQUFBLFdBQUEsb0JBQUE7O0NBRUEsSUFBQSxZQUFBLHVCQUFBOztDQUVBLElBQUEsZ0JBQUEsb0JBQUE7O0NBRUEsSUFBQSxpQkFBQSx1QkFBQTs7Q0FFQSxJQUFBLGtCQUFBLG9CQUFBOztDQUVBLElBQUEsbUJBQUEsdUJBQUE7O0NBRUEsSUFBQSxZQUFBLG9CQUFBOztDQUVBLElBQUEsYUFBQSx1QkFBQTs7Q0FFQSxJQUFBLGlCQUFBLG9CQUFBOztDQUVBLElBQUEsa0JBQUEs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U0FBQSxlQUFBLFVBQUEsVUFBQTs7Ozs7OztTQU9BLGFBQUEsVUFBQSxnQkFBQSxTQUFBLGNBQUEsVUFBQTs7Ozs7Ozs7OztTQVVBLGFBQUEsVUFBQSxnQkFBQSxTQUFBLGNBQUEsTUFBQSxVQUFBLFFBQUEsU0FBQTs7Ozs7Ozs7OztTQVVBLGFBQUEsVUFBQSxjQUFBLFNBQUEsWUFBQSxNQUFBLFVBQUEsUUFBQSxTQUFBOzs7Ozs7Ozs7O1NBVUEsYUFBQSxVQUFBLGVBQUEsU0FBQSxhQUFBLE1BQUEsVUFBQSxRQUFBLFNBQUE7Ozs7Ozs7Ozs7U0FVQSxhQUFBLFVBQUEsaUJBQUEsU0FBQSxlQUFBLE1BQUEsVUFBQSxRQUFBLFNBQUE7Ozs7OztTQU1BLGFBQUEsVUFBQSxnQkFBQSxTQUFBLGdCQUFBOzs7Ozs7Ozs7Ozs7U0FZQSxhQUFBLFVBQUEsb0JBQUEsU0FBQSxrQkFBQSxPQUFBO2FBQ0EsSUFBQSxLQUFBLG1CQUFBLE9BQUEsU0FBQTs7YUFFQSxJQUFBLGNBQUEsS0FBQSxzQkFBQTthQUNBLElBQUEsV0FBQSxjQUFBLEtBQUEsTUFBQSxTQUFBLGNBQUEsS0FBQSxNQUFBO2FBQ0EsSUFBQSxRQUFBLE1BQUEsS0FBQSxNQUFBO2FBQ0EsSUFBQSxVQUFBLENBQUEsU0FBQSxLQUFBLFFBQUE7O2FBRUEsT0FBQSxLQUFBLE1BQUEsV0FBQSxRQUFBOzs7Ozs7Ozs7O1NBVUEsYUFBQSxVQUFBLGNBQUEsU0FBQSxZQUFBLFNBQUE7YUFDQSxJQUFBLENBQUEsU0FBQSxPQUFBLEtBQUE7YUFDQSxJQUFBLFFBQUEsVUFBQSxPQUFBO2FBQ0EsSUFBQSxRQUFBLFFBQUEsTUFBQTthQUNBLE9BQUEsS0FBQSxRQUFBLE9BQUEsVUFBQSxRQUFBO2lCQUNBLE9BQUEsTUFBQSxRQUFBLE9BQUEsVUFBQSxDQUFBOzs7Ozs7Ozs7U0FTQSxhQUFBLFVBQUEsVUFBQSxTQUFBLFVBQUE7YUFDQSxJQUFBLENBQUEsV0FBQSxTQUFBLFdBQUE7Ozs7Ozs7Ozs7U0FVQSxhQUFBLFVBQUEsZ0JBQUEsU0FBQSxjQUFBLE1BQUE7YUFDQSxPQUFBLENBQUEsRUFBQSxLQUFBLFFBQUEsS0FBQTs7Ozs7Ozs7O1NBU0EsYUFBQSxVQUFBLG9CQUFBLFNBQUEsb0JBQUE7YUFDQSxPQUFBLEtBQUEsTUFBQSxTQUFBLEtBQUE7Ozs7Ozs7Ozs7OztTQVlBLGFBQUEsVUFBQSxlQUFBLFNBQUEsYUFBQSxNQUFBLFNBQUEsU0FBQTthQUNBLElBQUEsU0FBQTs7YUFFQSxLQUFBLG1CQUFBLENBQUE7YUFDQSxPQUFBLENBQUEsUUFBQSxTQUFBLE9BQUEsUUFBQSxNQUFBLFVBQUEsUUFBQTtpQkFDQSxPQUFBO2lCQUNBLE9BQUEsT0FBQSxHQUFBLEtBQUEsUUFBQSxNQUFBOzs7Ozs7Ozs7OztTQVdBLGFBQUEsVUFBQSxpQkFBQSxTQUFBLGVBQUEsUUFBQTthQUNBLE9BQUEsVUFBQSxPQUFBLFNBQUEsT0FBQSxXQUFBOzs7Ozs7Ozs7OztTQVdBLGFBQUEsVUFBQSxxQkFBQSxTQUFBLG1CQUFBLFVBQUEsU0FBQTthQUNBLElBQUEsZ0JBQUEsS0FBQSxlQUFBO2FBQ0EsUUFBQSxNQUFBLFNBQUEsbUJBQUEsVUFBQSxhQUFBO2lCQUNBLFdBQUEsWUFBQSxVQUFBOzthQUVBLE9BQUE7Ozs7Ozs7Ozs7O1NBV0EsYUFBQSxVQUFBLGdCQUFBLFNBQUEsY0FBQSxTQUFBO2FBQ0EsSUFBQSxTQUFBO2lCQUNBO2lCQUNBO2lCQUNBOzthQUVBLElBQUEsQ0FBQSxTQUFBLE9BQUE7O2FBRUEsUUFBQSxRQUFBLE1BQUEsT0FBQSxVQUFBLE1BQUE7aUJBQ0EsSUFBQSxLQUFBLFFBQUE7aUJBQ0EsTUFBQSxLQUFBLE1BQUEsR0FBQSxHQUFBLE9BQUE7aUJBQ0EsTUFBQSxLQUFBLE1BQUEsSUFBQSxHQUFBOztpQkFFQSxJQUFBLEtBQUE7cUJBQ0EsT0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxNQUFBOzs7O2FBSUEsT0FBQTs7Ozs7Ozs7OztTQVVBLGFBQUEsVUFBQSxpQkFBQSxTQUFBLGVBQUEsZUFBQTthQUNBLE9BQUEsVUFBQSxNQUFBO2lCQUNBLElBQUEs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LFVBQUEsTUFBQSxRQUFBLFFBQUEsT0FBQTtpQkFDQSxJQUFBLFVBQUE7aUJBQ0EsSUFBQSxXQUFBLE9BQUEsbUJBQUEsSUFBQSxVQUFBOztpQkFFQSxPQUFBLGVBQUEsTUFBQSxVQUFBLElBQUEsUUFBQTtpQkFDQSxPQUFBLGdCQUFBLE1BQUEsVUFBQSxJQUFBLFFBQUE7OzthQUdBLEtBQUEsUUFBQSxZQUFBO2lCQUNBLElBQUEsTUFBQSxFQUFBLFFBQUEsR0FBQSxPQUFBO2lCQUNBLElBQUEsVUFBQTtpQkFDQSxJQUFBOztpQkFFQSxPQUFBLE9BQUEsUUFBQSxLQUFBLE9BQUE7aUJBQ0EsS0FBQSxZQUFBOztpQkFFQSxPQUFBLGNBQUEsTUFBQSxVQUFBLElBQUEsUUFBQTtpQkFDQSxPQUFBLGdCQUFBLE1BQUEsVUFBQSxJQUFBLFFBQUE7OzthQUdBLE1BQUEsTUFBQTthQUNBLEtBQUEsT0FBQSxPQUFBLE9BQUE7O2FBRUEsS0FBQSxHQUFBOzs7Ozs7Ozs7OztTQVdBLGFBQUEsVUFBQSwwQkFBQSxTQUFBLHdCQUFBLE1BQUEsUUFBQSxTQUFBO2FBQ0EsS0FBQSx1QkFBQSxNQUFBLFFBQUE7Ozs7Ozs7O1NBUUEsYUFBQSxVQUFBLHFCQUFBLFNBQUEsbUJBQUEsTUFBQTthQUNBLEtBQUEsa0JBQUE7Ozs7Ozs7O1NBUUEsYUFBQSxVQUFBLG9CQUFBLFNBQUEsa0JBQUEsT0FBQTthQUNBLEtBQUEsaUJBQUE7Ozs7Ozs7OztTQVNBLGFBQUEsVUFBQSxzQkFBQSxTQUFBLG9CQUFBLE1BQUE7YUFDQSxLQUFBO2FBQ0EsS0FBQSxtQkFBQTs7Ozs7Ozs7OztTQVVBLGFBQUEsVUFBQSxrQkFBQSxTQUFBLGdCQUFBLE1BQUEsVUFBQTthQUNBLElBQUEsUUFBQSxLQUFBLGtCQUFBO2FBQ0EsS0FBQSxXQUFBO2FBQ0EsS0FBQSxZQUFBO2FBQ0EsS0FBQSxlQUFBLE1BQUE7YUFDQSxLQUFBLGNBQUE7YUFDQSxLQUFBOzs7Ozs7Ozs7Ozs7U0FZQSxhQUFBLFVBQUEsaUJBQUEsU0FBQSxlQUFBLE1BQUEsVUFBQSxRQUFBLFNBQUE7YUFDQSxLQUFBLFdBQUEsVUFBQSxRQUFBO2FBQ0EsS0FBQSxjQUFBLE1BQUEsVUFBQSxRQUFBOzs7Ozs7Ozs7Ozs7U0FZQSxhQUFBLFVBQUEsZUFBQSxTQUFBLGFBQUEsTUFBQSxVQUFBLFFBQUEsU0FBQTthQUNBLEtBQUEsU0FBQSxVQUFBLFFBQUE7YUFDQSxLQUFBLFlBQUEsTUFBQSxVQUFBLFFBQUE7Ozs7Ozs7Ozs7OztTQVlBLGFBQUEsVUFBQSxnQkFBQSxTQUFBLGNBQUEsTUFBQSxVQUFBLFFBQUEsU0FBQTthQUNBLEtBQUEsVUFBQSxVQUFBLFFBQUE7YUFDQSxLQUFBLGFBQUEsTUFBQSxVQUFBLFFBQUE7Ozs7Ozs7Ozs7OztTQVlBLGFBQUEsVUFBQSxrQkFBQSxTQUFBLGdCQUFBLE1BQUEsVUFBQSxRQUFBLFNBQUE7YUFDQSxLQUFBLFlBQUEsVUFBQSxRQUFBO2FBQ0EsS0FBQSxlQUFBLE1BQUEsVUFBQSxRQUFBOzthQUVBLElBQUEsV0FBQSxLQUFBLGdCQUFBO2FBQ0EsS0FBQSxjQUFBOzthQUVBLElBQUEsVUFBQSxXQUFBO2lCQUNBLFNBQUE7aUJBQ0E7OzthQUdBLEtBQUE7YUFDQSxLQUFBLFdBQUEsS0FBQTthQUNBLEtBQUE7Ozs7Ozs7Ozs7Ozs7U0FhQSxhQUFBLFNBQUEsU0FBQSxPQUFBLE9BQUE7YUFDQSxPQUFBLFFBQUEsaUJBQUE7Ozs7Ozs7Ozs7U0FVQSxhQUFBLG1CQUFBLFNBQUEsaUJBQUEsT0FBQTthQUNBLE9BQUEsaUJBQUE7Ozs7Ozs7OztTQVNBLGFBQUEsb0JBQUEsU0FBQSxrQkFBQSxPQUFBO2FBQ0EsT0FBQSxTQUFBLFVBQUEsWUFBQTs7Ozs7Ozs7O1NBU0EsYUFBQSxVQUFBLFNBQUEsUUFBQSxRQUFBLFFBQUE7YUFDQSxPQUFBLFlBQUEsT0FBQSxPQUFBLE9BQUE7YUFDQSxPQUFBLFVBQUEsY0FBQTthQUNBLE9BQUEsU0FBQTs7O1NBR0EsT0FBQTs7Ozs7Ozs7Ozs7OztLQWFBLGFBQUEsVUFBQSxVQUFBLENBQUEsRUFBQSxRQUFBOzs7Ozs7O0tBT0EsYUFBQSxVQUFBLGFBQUEsVUFBQTs7S0FFQSxPQUFBOzs7Q0FHQSxXQUFBLFVBQUEsQ0FBQSx1QkFBQSxjQUFBLFNBQUEsV0FBQSxZQUFBLGtCQUFBOzs7O01BSUEsU0FBQSxRQUFBLFNBQUEscUJBQUE7O0NBRUE7O0NBRUEsT0FBQSxlQUFBLFNBQUEsY0FBQTtLQUNBLE9BQUE7O0NBRUEsUUFBQSxVQUFBOztDQUVBLElBQUEsVUFBQSxvQkFBQTs7Q0FFQSxJQUFBLFdBQUEsdUJBQUE7O0NBRUEsU0FBQSx1QkFBQSxLQUFBLEVBQUEsT0FBQSxPQUFBLElBQUEsYUFBQSxNQUFBLEVBQUEsU0FBQTs7Q0FFQSxTQUFBLGdCQUFBLFVBQUEsYUFBQSxFQUFBLElBQUEsRUFBQSxvQkFBQSxjQUFBLEVBQUEsTUFBQSxJQUFBLFVBQUE7O0NBRUEsSUFBQSxXQUFBO0NBQ0EsSUFBQSxPQUFBLFNBQUE7Q0FDQSxJQUFBLFlBQUEsU0FBQTtDQUNBLElBQUEsV0FBQSxTQUFBO0NBQ0EsU0FBQSxhQUFBOztLQUVBLE9BQUEsWUFBQTs7Ozs7OztTQU9BLFNBQUEsZUFBQSxhQUFBO2FBQ0EsZ0JBQUEsTUFBQTs7YUFFQSxJQUFBLFVBQUEsVUFBQTthQUNBLElBQUEsbUJBQUEsVUFBQSxZQUFBLFFBQUE7YUFDQSxJQUFBLFVBQUEsU0FBQSxvQkFBQSxhQUFBO2FBQ0EsSUFBQSxTQUFBLGdCQUFBO2FBQ0EsS0FBQSxRQUFBOzs7Ozs7Ozs7U0FTQSxlQUFBLFVBQUEsc0JBQUEsU0FBQSxvQkFBQSxNQUFBO2FBQ0EsS0FBQSxtQkFBQTthQUNBLEtBQUEsT0FBQTthQUNBLEtBQUEsT0FBQSxVQUFBLEtBQUEsTUFBQSxLQUFBLFlBQUEsT0FBQSxHQUFBO2FBQ0EsS0FBQSxPQUFBLEtBQUEsTUFBQSxLQUFBLFlBQUEsT0FBQSxLQUFBLFlBQUEsUUFBQTs7Ozs7Ozs7O1NBU0EsZUFBQSxVQUFBLG9CQUFBLFNBQUEsa0JBQUEsUUFBQTthQUNBLEtBQUEsbUJBQUEsS0FBQSxPQUFBO2FBQ0EsS0FBQSxPQUFBLE9BQUE7YUFDQSxLQUFBLE9BQUEsT0FBQTthQUNBLEtBQUEsT0FBQSxPQUFBOzs7U0FHQSxPQUFBOzs7Ozs7TUFNQSxTQUFBLFFBQUEsU0FBQSxxQkFBQTs7Q0FFQTs7Q0FFQSxPQUFBLGVBQUEsU0FBQSxjQUFBO0tBQ0EsT0FBQTs7Q0FFQSxRQUFBLFVBQUE7O0NBRUEsSUFBQSxVQUFBLG9CQUFBOztDQUVBLElBQUEsV0FBQSx1QkFBQTs7Q0FFQSxTQUFBLHVCQUFBLEtBQUEsRUFBQSxPQUFBLE9BQUEsSUFBQSxhQUFBLE1BQUEsRUFBQSxTQUFBOztDQUVBLFNBQUEsZ0JBQUEsVUFBQSxhQUFBLEVBQUEsSUFBQSxFQUFBLG9CQUFBLGNBQUEsRUFBQSxNQUFBLElBQUEsVUFBQTs7Q0FFQSxJQUFBLFdBQUE7Q0FDQSxJQUFBLE9BQUEsU0FBQTtDQUNBLElBQUEsU0FBQSxTQUFBO0NBQ0EsSUFBQSxVQUFBLFNBQUE7Q0FDQSxJQUFBLFlBQUEsU0FBQTtDQUNBLFNBQUEsV0FBQSxVQUFBLGdCQUFBOztLQUVBLE9BQUEsWUFBQTs7Ozs7Ozs7O1NBU0EsU0FBQSxTQUFBLFVBQUEsTUFBQSxTQUFBO2FBQ0EsZ0JBQUEsTUFBQTs7YUFFQSxJQUFBLFVBQUEsVUFBQTthQUNBLElBQUEsUUFBQSxVQUFBLFFBQUEsUUFBQTthQUNBLElBQUEsT0FBQSxDQUFBLFVBQUEsT0FBQTs7YUFFQSxPQUFBLE1BQUE7aUJBQ0EsS0FBQSxTQUFBO2lCQUNBLE9BQUEsU0FBQTtpQkFDQSxTQUFBLEtBQUEsU0FBQTtpQkFDQSxVQUFBLEtBQUEsU0FBQTtpQkFDQSxtQkFBQSxTQUFBO2lCQUNBLGlCQUFBLFNBQUE7aUJBQ0Esa0JBQUEsU0FBQTtpQkFDQSxRQUFBLFNBQUE7Z0JBQ0EsU0FBQTtpQkFDQSxVQUFBO2lCQUNBLE1BQUEsSUFBQSxlQUFBO2lCQUNBLFNBQUE7aUJBQ0EsYUFBQTtpQkFDQSxZQUFBO2lCQUNBLFdBQUE7aUJBQ0EsVUFBQTtpQkFDQSxTQUFBO2lCQUNBLFVBQUE7aUJBQ0EsT0FBQTtpQkFDQSxPQUFBO2lCQUNBLFFBQUE7OzthQUdBLElBQUEsT0FBQSxLQUFBLGFBQUE7Ozs7Ozs7Ozs7U0FVQSxTQUFBLFVBQUEsU0FBQSxTQUFBLFNBQUE7YUFDQSxJQUFBO2lCQUNBLEtBQUEsU0FBQSxXQUFBO2VBQ0EsT0FBQSxHQUFBO2lCQUNBLEtBQUEsU0FBQSxnQkFBQSxNQUFBLElBQUEsR0FBQTtpQkFDQSxLQUFBLFNBQUEsYUFBQSxNQUFBLElBQUEsR0FBQTs7Ozs7Ozs7U0FRQSxTQUFBLFVBQUEsU0FBQSxTQUFBLFNBQUE7YUFDQSxLQUFBLFNBQUEsV0FBQTs7Ozs7OztTQU9BLFNBQUEsVUFBQSxTQUFBLFNBQUEsU0FBQTthQUNBLEtBQUEsU0FBQSxnQkFBQTs7Ozs7Ozs7U0FRQSxTQUFBLFVBQUEsaUJBQUEsU0FBQSxpQkFBQTs7Ozs7Ozs7U0FRQSxTQUFBLFVBQUEsYUFBQSxTQUFBLFdBQUEsVUFBQTs7Ozs7Ozs7O1NBU0EsU0FBQSxVQUFBLFlBQUEsU0FBQSxVQUFBLFVBQUEsUUFBQSxTQUFBOzs7Ozs7Ozs7U0FTQSxTQUFBLFVBQUEsVUFBQSxTQUFBLFFBQUEsVUFBQSxRQUFBLFNBQUE7Ozs7Ozs7OztTQVNBLFNBQUEsVUFBQSxXQUFBLFNBQUEsU0FBQSxVQUFBLFFBQUEsU0FBQTs7Ozs7Ozs7O1NBU0EsU0FBQSxVQUFBLGFBQUEsU0FBQSxXQUFBLFVBQUEsUUFBQSxTQUFBOzs7Ozs7Ozs7U0FTQSxTQUFBLFVBQUEsa0JBQUEsU0FBQSxrQkFBQTthQUNBLEtBQUEsVUFBQTthQUNBLEtBQUEsY0FBQTthQUNBLEtBQUEsYUFBQTthQUNBLEtBQUEsWUFBQTthQUNBLEtBQUEsV0FBQTthQUNBLEtBQUEsVUFBQTthQUNBLEtBQUEsV0FBQTthQUNBLEtBQUE7Ozs7Ozs7OztTQVNBLFNBQUEsVUFBQSxjQUFBLFNBQUEsWUFBQSxVQUFBO2FBQ0EsS0FBQSxXQUFBO2FBQ0EsS0FBQSxXQUFBOzs7Ozs7Ozs7OztTQVdBLFNBQUEsVUFBQSxhQUFBLFNBQUEsV0FBQSxVQUFBLFFBQUEsU0FBQTthQUNBLEtBQUEsVUFBQTthQUNBLEtBQUEsY0FBQTthQUNBLEtBQUEsYUFBQTthQUNBLEtBQUEsWUFBQTthQUNBLEtBQUEsV0FBQTthQUNBLEtBQUEsVUFBQTthQUNBLEtBQUEsV0FBQTthQUNBLEtBQUEsUUFBQTthQUNBLEtBQUEsVUFBQSxVQUFBLFFBQUE7Ozs7Ozs7Ozs7O1NBV0EsU0FBQSxVQUFBLFdBQUEsU0FBQSxTQUFBLFVBQUEsUUFBQSxTQUFBO2FBQ0EsS0FBQSxVQUFBO2FBQ0EsS0FBQSxjQUFBO2FBQ0EsS0FBQSxhQUFBO2FBQ0EsS0FBQSxZQUFBO2FBQ0EsS0FBQSxXQUFBO2FBQ0EsS0FBQSxVQUFBO2FBQ0EsS0FBQSxXQUFBO2FBQ0EsS0FBQSxRQUFBO2FBQ0EsS0FBQSxRQUFBLFVBQUEsUUFBQTs7Ozs7Ozs7Ozs7U0FXQSxTQUFBLFVBQUEsWUFBQSxTQUFBLFVBQUEsVUFBQSxRQUFBLFNBQUE7YUFDQSxLQUFBLFVBQUE7YUFDQSxLQUFBLGNBQUE7YUFDQSxLQUFBLGFBQUE7YUFDQSxLQUFBLFlBQUE7YUFDQSxLQUFBLFdBQUE7YUFDQSxLQUFBLFVBQUE7YUFDQSxLQUFBLFdBQUE7YUFDQSxLQUFBLFFBQUE7YUFDQSxLQUFBLFNBQUEsVUFBQSxRQUFBOzs7Ozs7Ozs7OztTQVdBLFNBQUEsVUFBQSxjQUFBLFNBQUEsWUFBQSxVQUFBLFFBQUEsU0FBQTthQUNBLEtBQUEsV0FBQSxVQUFBLFFBQUE7YUFDQSxJQUFBLEtBQUEsbUJBQUEsS0FBQTs7Ozs7OztTQU9BLFNBQUEsVUFBQSxXQUFBLFNBQUEsV0FBQTthQUNBLElBQUEsS0FBQSxRQUFBLEtBQUEsT0FBQTthQUNBLElBQUEsS0FBQSxPQUFBLEtBQUEsTUFBQTthQUNBLE9BQUEsS0FBQTthQUNBLE9BQUEsS0FBQTs7Ozs7Ozs7U0FRQSxTQUFBLFVBQUEsc0JBQUEsU0FBQSxzQkFBQTthQUNBLEtBQUEsUUFBQSxLQUFBLFNBQUEsRUFBQSxLQUFBLFNBQUE7YUFDQSxLQUFBLFVBQUE7Ozs7Ozs7OztTQVNBLFNBQUEsVUFBQSxlQUFBLFNBQUEsYUFBQSxPQUFBO2FBQ0EsSUFBQSxRQUFBLFNBQUEsTUFBQSxTQUFBLE1BQUE7YUFDQSxNQUFBLEtBQUEsU0FBQTthQUNBLE1BQUEsSUFBQSxXQUFBO2FBQ0EsTUFBQSxNQUFBOzs7U0FHQSxPQUFBOzs7O0NBSUEsV0FBQSxVQUFBLENBQUEsWUFBQTs7OztNQUlBLFNBQUEsUUFBQSxTQUFBLHFCQUFBOztDQUVBOztDQUVBLE9BQUEsZUFBQSxTQUFBLGNBQUE7S0FDQSxPQUFBOztDQUVBLFFBQUEsVUFBQTs7Q0FFQSxJQUFBLFVBQUEsb0JBQUE7O0NBRUEsSUFBQSxXQUFBLHVCQUFBOztDQUVBLFNBQUEsdUJBQUEsS0FBQSxFQUFBLE9BQUEsT0FBQSxJQUFBLGFBQUEsTUFBQSxFQUFBLFNBQUE7O0NBRUEsU0FBQSxnQkFBQSxVQUFBLGFBQUEsRUFBQSxJQUFBLEVBQUEsb0JBQUEsY0FBQSxFQUFBLE1BQUEsSUFBQSxVQUFBOztDQUVBLElBQUEsV0FBQTtDQUNBLElBQUEsU0FBQSxTQUFBO0NBQ0EsU0FBQSxhQUFBO0tBQ0EsSUFBQSxnQkFBQSxZQUFBOzs7Ozs7Ozs7OztTQVdBLFNBQUEsY0FBQSxTQUFBO2FBQ0EsZ0JBQUEsTUFBQTs7YUFFQSxPQUFBLE1BQUE7YUFDQSxLQUFBLFNBQUEsWUFBQSxLQUFBLE1BQUEsS0FBQTthQUNBLEtBQUE7YUFDQSxLQUFBOzs7Ozs7O1NBT0EsY0FBQSxVQUFBLE9BQUEsU0FBQSxPQUFBO2FBQ0EsS0FBQSxJQUFBLE9BQUEsS0FBQSxRQUFBO2lCQUNBLElBQUEsT0FBQSxLQUFBLE9BQUE7aUJBQ0EsS0FBQSxRQUFBLEtBQUEsS0FBQSxLQUFBOzs7Ozs7OztTQVFBLGNBQUEsVUFBQSxTQUFBLFNBQUEsU0FBQTthQUNBLEtBQUEsSUFBQSxPQUFBLEtBQUEsUUFBQTtpQkFDQSxLQUFBLFFBQUEsT0FBQSxLQUFBLEtBQUEsT0FBQTs7Ozs7Ozs7U0FRQSxjQUFBLFVBQUEsVUFBQSxTQUFBLFVBQUE7YUFDQSxJQUFBLFFBQUEsS0FBQSxTQUFBLFlBQUEsS0FBQSxNQUFBLFFBQUE7YUFDQSxLQUFBLFNBQUEsWUFBQSxLQUFBLE1BQUEsT0FBQSxPQUFBO2FBQ0EsS0FBQTs7Ozs7Ozs7O1NBU0EsY0FBQSxVQUFBLGFBQUEsU0FBQSxhQUFBO2FBQ0EsS0FBQSxJQUFBLE9BQUEsS0FBQSxRQUFBO2lCQUNBLElBQUEsT0FBQSxLQUFBLE9BQUE7aUJBQ0EsS0FBQSxRQUFBLEtBQUEsTUFBQSxLQUFBOzs7O1NBSUEsT0FBQTs7Ozs7Ozs7O0tBU0EsY0FBQSxVQUFBLFNBQUE7O0tBRUEsT0FBQTs7Ozs7TUFLQSxTQUFBLFFBQUEsU0FBQSxxQkFBQTs7Q0FFQTs7Q0FFQSxPQUFBLGVBQUEsU0FBQSxjQUFBO0tBQ0EsT0FBQTs7Q0FFQSxRQUFBLFVBQUE7O0NBRUEsSUFBQSxVQUFBLG9CQUFBOztDQUVBLElBQUEsV0FBQSx1QkFBQTs7Q0FFQSxTQUFBLHVCQUFBLEtBQUEsRUFBQSxPQUFBLE9BQUEsSUFBQSxhQUFBLE1BQUEsRUFBQSxTQUFBOztDQUVBLFNBQUEsZ0JBQUEsVUFBQSxhQUFBLEVBQUEsSUFBQSxFQUFBLG9CQUFBLGNBQUEsRUFBQSxNQUFBLElBQUEsVUFBQTs7Q0FFQSxTQUFBLDJCQUFBLE1BQUEsTUFBQSxFQUFBLElBQUEsQ0FBQSxNQUFBLEVBQUEsTUFBQSxJQUFBLGVBQUEsZ0VBQUEsT0FBQSxTQUFBLE9BQUEsU0FBQSxZQUFBLE9BQUEsU0FBQSxjQUFBLE9BQUE7O0NBRUEsU0FBQSxVQUFBLFVBQUEsWUFBQSxFQUFBLElBQUEsT0FBQSxlQUFBLGNBQUEsZUFBQSxNQUFBLEVBQUEsTUFBQSxJQUFBLFVBQUEsNkRBQUEsT0FBQSxlQUFBLFNBQUEsWUFBQSxPQUFBLE9BQUEsY0FBQSxXQUFBLFdBQUEsRUFBQSxhQUFBLEVBQUEsT0FBQSxVQUFBLFlBQUEsT0FBQSxVQUFBLE1BQUEsY0FBQSxXQUFBLElBQUEsWUFBQSxPQUFBLGlCQUFBLE9BQUEsZUFBQSxVQUFBLGNBQUEsU0FBQSxZQUFBOztDQUVBLElBQUEsV0FBQTtDQUNBLElBQUEsU0FBQSxTQUFBO0NBQ0EsU0FBQSxXQUFBLFVBQUEsZUFBQTs7S0FFQSxPQUFBLFVBQUEs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Ozs7Ozs7U0FPQSxTQUFBLFVBQUEsZUFBQSxTQUFBLGVBQUE7YUFDQSxLQUFBLFFBQUEsU0FBQSxLQUFBOzs7Ozs7O1NBT0EsU0FBQSxVQUFBLGtCQUFBLFNBQUEsa0JBQUE7YUFDQSxLQUFBLFFBQUEsWUFBQSxLQUFBOzs7Ozs7OztTQVFBLFNBQUEsVUFBQSxlQUFBLFNBQUEsZUFBQTthQUNBLE9BQUEsS0FBQTs7O1NBR0EsT0FBQTtPQUNBOzs7Q0FHQSxXQUFBLFVBQUEsQ0FBQTs7OztNQUlBLFNBQUEsUUFBQSxTQUFBLHFCQUFBOztDQUVBOztDQUVBLE9BQUEsZUFBQSxTQUFBLGNBQUE7S0FDQSxPQUFBOztDQUVBLFFBQUEsVUFBQTs7Q0FFQSxJQUFBLFVBQUEsb0JBQUE7O0NBRUEsSUFBQSxXQUFBLHVCQUFBOztDQUVBLFNBQUEsdUJBQUEsS0FBQSxFQUFBLE9BQUEsT0FBQSxJQUFBLGFBQUEsTUFBQSxFQUFBLFNBQUE7O0NBRUEsU0FBQSxXQUFBLFFBQUEsY0FBQSxZQUFBOztLQUVBLE9BQUE7U0FDQSxNQUFBLFNBQUEsS0FBQSxPQUFBLFNBQUEsWUFBQTthQUNBLElBQUEsV0FBQSxNQUFBLE1BQUEsV0FBQTs7YUFFQSxJQUFBLEVBQUEsb0JBQUEsZUFBQTtpQkFDQSxNQUFBLElBQUEsVUFBQTs7O2FBR0EsSUFBQSxTQUFBLElBQUEsV0FBQTtpQkFDQSxVQUFBO2lCQUNBLFNBQUE7aUJBQ0EsT0FBQTs7O2FBR0EsT0FBQSxhQUFBLE9BQUEsV0FBQSxTQUFBLEtBQUEsUUFBQTthQUNBLE9BQUEsYUFBQSxZQUFBO2lCQUNBLE9BQUEsV0FBQTs7Ozs7O0NBTUEsV0FBQSxVQUFBLENBQUEsVUFBQSxnQkFBQTs7OztNQUlBLFNBQUEsUUFBQSxTQUFBLHFCQUFBOztDQUVBOztDQUVBLE9BQUEsZUFBQSxTQUFBLGNBQUE7S0FDQSxPQUFBOztDQUVBLFFBQUEsVUFBQTs7Q0FFQSxJQUFBLFVBQUEsb0JBQUE7O0NBRUEsSUFBQSxXQUFBLHVCQUFBOztDQUVBLFNBQUEsdUJBQUEsS0FBQSxFQUFBLE9BQUEsT0FBQSxJQUFBLGFBQUEsTUFBQSxFQUFBLFNBQUE7O0NBRUEsU0FBQSxXQUFBLFFBQUEsY0FBQSxVQUFBOztLQUVBLE9BQUE7U0FDQSxNQUFBLFNBQUEsS0FBQSxPQUFBLFNBQUEsWUFBQTthQUNBLElBQUEsV0FBQSxNQUFBLE1BQUEsV0FBQTs7YUFFQSxJQUFBLEVBQUEsb0JBQUEsZUFBQTtpQkFDQSxNQUFBLElBQUEsVUFBQTs7O2FBR0EsSUFBQSxDQUFBLFNBQUEsU0FBQTs7YUFFQSxJQUFBLFNBQUEsSUFBQSxTQUFBO2lCQUNBLFVBQUE7aUJBQ0EsU0FBQTs7O2FBR0EsT0FBQSxhQUFBLE9BQUEsV0FBQSxTQUFBLEtBQUEsUUFBQTthQUNBLE9BQUEsYUFBQSxZQUFBO2lCQUNBLE9BQUEsV0FBQTs7Ozs7O0NBTUEsV0FBQSxVQUFBLENBQUEsVUFBQSxnQkFBQTs7OztNQUlBLFNBQUEsUUFBQSxTQUFBLHFCQUFBOztDQUVBOztDQUVBLE9BQUEsZUFBQSxTQUFBLGNBQUE7S0FDQSxPQUFBOztDQUVBLFFBQUEsVUFBQTs7Q0FFQSxJQUFBLFVBQUEsb0JBQUE7O0NBRUEsSUFBQSxXQUFBLHVCQUFBOztDQUVBLFNBQUEsdUJBQUEsS0FBQSxFQUFBLE9BQUEsT0FBQSxJQUFBLGFBQUEsTUFBQSxFQUFBLFNBQUE7O0NBRUEsU0FBQSxXQUFBLGNBQUEsVUFBQTs7S0FFQSxPQUFBO1NBQ0EsTUFBQSxTQUFBLEtBQUEsT0FBQSxTQUFBLFlBQUE7YUFDQSxJQUFBLFdBQUEsTUFBQSxNQUFBLFdBQUE7O2FBRUEsSUFBQSxFQUFBLG9CQUFBLGVBQUE7aUJBQ0EsTUFBQSxJQUFBLFVBQUE7OzthQUdBLElBQUEsU0FBQSxJQUFBLFNBQUE7aUJBQ0EsVUFBQTtpQkFDQSxTQUFBOzs7YUFHQSxPQUFBLGVBQUEsWUFBQTtpQkFDQSxPQUFBLFdBQUEsYUFBQSxPQUFBOzs7Ozs7Q0FNQSxXQUFBLFVBQUEsQ0FBQSxnQkFBQTs7Ozs7QUFLQTs7OztBQzE3REEsRUFBQSxjQUFBLFVBQUEsU0FBQSxpQkFBQSxPQUFBO0VBQ0EsUUFBQSxRQUFBOztBQUVBLElBQUEsU0FBQSxRQUFBLE9BQUEsVUFBQTs7Q0FFQSxPQUFBLENBQUEsZ0JBQUEsaUJBQUEsVUFBQSxjQUFBLGVBQUE7O0lBRUEsT0FBQSxjQUFBLFNBQUEsUUFBQSxPQUFBOztJQUVBLGNBQUEsU0FBQSxRQUFBLEtBQUEsU0FBQTtJQUNBLGNBQUEsU0FBQSxRQUFBLEtBQUEsU0FBQTs7SUFFQSxjQUFBLFNBQUEsUUFBQSxPQUFBLGtCQUFBLEVBQUEsMkJBQUEsS0FBQTtJQUNBLGNBQUEsU0FBQSxhQUFBO0lBQ0EsYUFBQSxRQUFBOzs7R0FHQSxJQUFBLENBQUEsY0FBQSxVQUFBLFlBQUE7O0lBRUEsV0FBQSxTQUFBOzs7OztHQUtBLFVBQUEsYUFBQSxDQUFBLFlBQUE7SUFDQSxPQUFBO01BQ0EsVUFBQTtNQUNBLGFBQUE7TUFDQSxNQUFBLFVBQUEsT0FBQSxJQUFBLE1BQUE7Ozs7O0dBS0EsV0FBQSxhQUFBLENBQUEsY0FBQSxTQUFBLFVBQUEsWUFBQSxPQUFBO0lBQ0EsSUFBQSxhQUFBO0lBQ0EsSUFBQSxXQUFBLFlBQUE7TUFDQSxLQUFBLEtBQUEsU0FBQSxZQUFBOzs7UUFHQSxRQUFBLEtBQUEsTUFBQSxLQUFBOztVQUVBLFdBQUE7VUFDQSxjQUFBOzs7UUFHQSxhQUFBLFNBQUEsZUFBQTs7Ozs7SUFLQSxTQUFBLGFBQUEsU0FBQTs7TUFFQSxNQUFBLG1CQUFBLFNBQUE7UUFDQSxVQUFBLFlBQUE7VUFDQSxJQUFBLFNBQUE7WUFDQSxVQUFBLFdBQUEsa0JBQUE7WUFDQSxPQUFBLFdBQUEsa0JBQUE7WUFDQSxXQUFBOztVQUVBLE1BQUEsS0FBQSxXQUFBLFdBQUEsVUFBQTthQUNBLFFBQUEsVUFBQSxVQUFBO2NBQ0EsUUFBQSxJQUFBO2VBQ0EsTUFBQSxVQUFBLEdBQUE7Ozs7VUFJQSxXQUFBLGtCQUFBOztRQUVBLFVBQUEsT0FBQTtVQUNBLE1BQUEsS0FBQSxVQUFBLE9BQUEsV0FBQTs7Ozs7Ozs7O0NBU0EsU0FBQSxTQUFBO0FBQ0EsT0FBQSxVQUFBLFVBQUEsQ0FB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QSxLQUFBLGdCQUFBLFlBQUE7UUFDQSxLQUFBLGdCQUFBOztNQUVBLEtBQUEsVUFBQTtNQUNBLEtBQUEsbUJBQUEsVUFBQSxNQUFBLE9BQUE7UUFDQSxLQUFBO1FBQ0EsS0FBQSxjQUFBO1VBQ0EsTUFBQTtVQUNBLE9BQUE7Ozs7TUFJQSxLQUFBLFVBQUEsVUFBQSxNQUFBLE9BQUE7UUFDQSxLQUFBLGNBQUE7VUFDQSxNQUFBO1VBQ0EsT0FBQTs7OztNQUlBLEtBQUEscUJBQUEsVUFBQSxNQUFBO1FBQ0EsT0FBQSxLQUFBLEtBQUE7O01BRUEsT0FBQTs7O0dBR0EsT0FBQSxDQUFBLGtCQUFBLHNCQUFBLFVBQUEsZ0JBQUEsb0JBQUE7O0lBRUE7T0FDQSxNQUFBLFFBQUE7UUFDQSxLQUFBO1FBQ0EsYUFBQTtRQUNBLFlBQUE7O09BRUEsTUFBQSxZQUFBO1FBQ0EsS0FBQTtRQUNBLGFBQUE7OztLQUdBLE1BQUEsWUFBQTtNQUNBLEtBQUE7TUFDQSxhQUFBO01BQ0EsWUFBQTs7O0tBR0EsTUFBQSxXQUFBO1FBQ0EsS0FBQTtRQUNBLGFBQUE7UUFDQSxZQUFBOztPQUVBLE1BQUEsV0FBQTtRQUNBLEtBQUE7UUFDQSxhQUFBO1FBQ0EsWUFBQTs7U0FFQSxNQUFBLFFBQUE7UUFDQSxLQUFBO1FBQ0EsYUFBQTtRQUNBLFlBQUE7UUFDQSxjQUFBO1NBQ0EsTUFBQSxhQUFBO1FBQ0EsS0FBQTtRQUNBLGFBQUE7UUFDQSxZQUFBO1FBQ0EsY0FBQTs7T0FFQSxNQUFBLGtCQUFBO1FBQ0EsS0FBQTtRQUNBLFFBQUE7VUFDQSxVQUFBO1VBQ0EsYUFBQTs7UUFFQSxhQUFBO1FBQ0EsWUFBQTs7O0tBR0EsTUFBQSxjQUFBO01BQ0EsS0FBQTtNQUNBLFFBQUE7UUFDQSxVQUFBO1FBQ0EsYUFBQTs7TUFFQSxhQUFBO01BQ0EsWUFBQTs7OztLQUlBLE1BQUEsVUFBQTs7UUFFQSxLQUFBO1FBQ0EsUUFBQTtVQUNBLFVBQUE7VUFDQSxhQUFBOztRQUVBLGFBQUE7UUFDQSxZQUFBOztPQUVBLE1BQUEsVUFBQTtRQUNBLEtBQUE7UUFDQSxhQUFBO1FBQ0EsWUFBQTtRQUNBLGNBQUE7OztJQUdBLG1CQUFBLEtBQUEsU0FBQSxTQUFBLFVBQUE7Ozs7R0FJQSxVQUFBLFNBQUEsQ0FBQSxZQUFBO0lBQ0EsT0FBQTtNQUNBLFVBQUE7TUFDQSxhQUFBO01BQ0EsTUFBQSxVQUFBLE9BQUEsSUFBQSxNQUFBOzs7Ozs7R0FNQSxVQUFBLGdCQUFBLENBQUEsVUFBQSxVQUFBLFFBQUE7SUFDQSxPQUFBLFVBQUEsT0FBQSxTQUFBLE9BQUE7TUFDQSxJQUFBLEtBQUEsT0FBQSxNQUFBO01BQ0EsUUFBQSxLQUFBLGVBQUEsVUFBQSxPQUFBO1FBQ0EsTUFBQSxPQUFBLFlBQUE7VUFDQSxNQUFBO1VBQ0EsR0FBQSxPQUFBO1lBQ0EsUUFBQTs7Ozs7OztHQU9BLFVBQUEsV0FBQSxDQUFBLFlBQUE7SUFDQSxPQUFBO01BQ0EsVUFBQTtNQUNBLGFBQUE7TUFDQSxNQUFBLFVBQUEsT0FBQSxJQUFBLFFBQUE7O0FBRUEsRUFBQSxNQUFBLElBQUEsVUFBQTtFQUNBLFlBQUE7SUFDQSxFQUFBLE1BQUEsSUFBQSxhQUFBO0lBQ0EsSUFBQSxNQUFBLEVBQUEsK0JBQUE7SUFDQSxJQUFBLE1BQUEsWUFBQTtPQUNBLFNBQUEsZUFBQSxLQUFBLE1BQUEsVUFBQTs7RUFFQSxZQUFBO0lBQ0EsRUFBQSxNQUFBLElBQUEsYUFBQTtJQUNBLElBQUEsTUFBQSxFQUFBLCtCQUFBO0lBQ0EsSUFBQSxNQUFBLFlBQUE7T0FDQSxTQUFBLGVBQUEsS0FBQSxNQUFBLFVBQUE7Ozs7OztHQU1BLFVBQUEsbUJBQUEsQ0FBQSxZQUFBO0lBQ0EsT0FBQTtNQUNBLFVBQUE7TUFDQSxhQUFBO01BQ0EsTUFBQSxVQUFBLE9BQUEsSUFBQSxTQUFBOzs7Ozs7Q0FNQSxVQUFBLGtCQUFBLENBQUEsWUFBQTtFQUNBLE9BQUE7SUFDQSxVQUFBO0lBQ0EsYUFBQTtJQUNBLE1BQUEsVUFBQSxPQUFBLElBQUEsU0FBQTs7Ozs7OztDQU9BLFVBQUEsbUJBQUEsQ0FBQSxZQUFBO0lBQ0EsT0FBQTtNQUNB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QUEsUUFBQSxLQUFBLGFBQUEsU0FBQSxNQUFBLEdBQUEsV0FBQTtFQUNBLEtBQUEsc0JBQUEsU0FBQSxHQUFBO0lBQ0EsSUFBQSxTQUFBLEdBQUE7SUFDQSxNQUFBLElBQUEsV0FBQSxXQUFBLDRCQUFBO0tBQ0EsUUFBQSxTQUFBLFNBQUE7TUFDQSxPQUFBLFFBQUE7TUFDQSxTQUFBLElBQUE7TUFDQSxPQUFBLE9BQUE7O0lBRUEsT0FBQSxPQUFBOztFQUVBLE9BQUE7OztBQ1hBLFFBQUEsT0FBQTtBQUNBLFFBQUEsYUFBQSxDQUFBLFNBQUEsTUFBQSxjQUFBLFNBQUEsVUFBQSxPQUFBLElBQUEsWUFBQTtJQUNBLEtBQUEsTUFBQSxVQUFBLEtBQUE7O1FBRUEsSUFBQSxVQUFBLEdBQUE7UUFDQSxNQUFBLEtBQUEsV0FBQSxXQUFBLFlBQUE7YUFDQSxRQUFBLFVBQUEsVUFBQTtnQkFDQSxXQUFBLFdBQUE7Z0JBQ0EsUUFBQSxRQUFBOzthQUVBLE1BQUEsVUFBQSxPQUFBO2dCQUNBLFFBQUEsT0FBQTs7O1FBR0EsT0FBQSxRQUFBOzs7QUNkQSxRQUFBLE9BQUE7QUFDQSxRQUFBLFNBQUEsQ0FBQSxRQUFBLEtBQUEsYUFBQSxTQUFBLE9BQUEsTUFBQSxHQUFBLFlBQUE7SUFDQSxLQUFBLGVBQUEsU0FBQSxTQUFBO1FBQ0EsSUFBQSxXQUFBLEdBQUE7O1FBRUEsTUFBQSxJQUFBLFdBQUEsVUFBQSxlQUFBLFFBQUE7U0FDQSxRQUFBLFNBQUEsU0FBQTtZQUNBLFNBQUEsUUFBQTs7U0FFQSxNQUFBLFNBQUEsT0FBQTtZQUNBLFNBQUEsT0FBQTs7UUFFQSxPQUFBLFNBQUE7O0lBRUEsS0FBQSxRQUFBLFNBQUEsSUFBQTtRQUNBLElBQUEsV0FBQSxHQUFBOztRQUVBLE1BQUEsSUFBQSxXQUFBLFVBQUEsbUJBQUE7O1NBRUEsUUFBQSxTQUFBLFNBQUE7WUFDQSxTQUFBLFFBQUE7O1NBRUEsTUFBQSxTQUFBLE9BQUE7WUFDQSxTQUFBLE9BQUE7O1FBRUEsT0FBQSxTQUFBOzs7RUFHQSxLQUFBLGFBQUEsU0FBQSxJQUFBO1FBQ0EsSUFBQSxXQUFBLEdBQUE7O1FBRUEsTUFBQSxJQUFBLFdBQUEsVUFBQSxvQkFBQTtTQUNBLFFBQUEsU0FBQSxTQUFBO1lBQ0EsU0FBQSxRQUFBOztTQUVBLE1BQUEsU0FBQSxPQUFBO1lBQ0EsU0FBQSxPQUFBOztRQUVBLE9BQUEsU0FBQTs7TUFFQSxLQUFBLG9CQUFBLFNBQUEsSUFBQTtRQUNBLElBQUEsV0FBQSxHQUFBOztRQUVBLE1BQUEsT0FBQSxXQUFBLFVBQUEsMkJBQUE7U0FDQSxRQUFBLFNBQUEsU0FBQTtZQUNBLFNBQUEsUUFBQTs7U0FFQSxNQUFBLFNBQUEsT0FBQTtZQUNBLFNBQUEsT0FBQTs7UUFFQSxPQUFBLFNBQUE7OztJQUdBLEtBQUEsVUFBQSxTQUFBLFVBQUEsU0FBQTtRQUNBLElBQUEsV0FBQSxHQUFBOztRQUVBLE1BQUEsS0FBQSxXQUFBLFVBQUEsaUJBQUEsVUFBQSxJQUFBO1NBQ0EsUUFBQSxTQUFBLFNBQUE7WUFDQSxTQUFBLFFBQUE7O1NBRUEsTUFBQSxTQUFBLE9BQUE7WUFDQSxTQUFBLE9BQUE7O1FBRUEsT0FBQSxTQUFBOztJQUVBLEtBQUEsa0JBQUEsU0FBQSxJQUFBO1FBQ0EsSUFBQSxXQUFBLEdBQUE7O1FBRUEsTUFBQSxJQUFBLFdBQUEsVUFBQSxxQkFBQTtTQUNBLFFBQUEsU0FBQSxTQUFBO1lBQ0EsU0FBQSxRQUFBOztTQUVBLE1BQUEsU0FBQSxPQUFBO1lBQ0EsU0FBQSxPQUFBOztRQUVBLE9BQUEsU0FBQTs7SUFFQSxLQUFBLFNBQUEsU0FBQSxPQUFBO1FBQ0EsSUFBQSxXQUFBLEdBQUE7O1FBRUEsTUFBQSxJQUFBLFdBQUEsVUFBQSxnQkFBQSxtQkFBQTtTQUNBLFFBQUEsU0FBQSxTQUFBO1lBQ0EsU0FBQSxRQUFBOztTQUVBLE1BQUEsU0FBQSxPQUFBO1lBQ0EsU0FBQSxPQUFBOztRQUVBLE9BQUEsU0FBQTs7SUFFQSxLQUFBLFNBQUEsU0FBQSxLQUFBO01BQ0EsSUFBQSxVQUFBLEdBQUE7TUFDQSxNQUFBLElBQUEsV0FBQSxVQUFBLGFBQUE7T0FDQSxRQUFBLFNBQUEsU0FBQTtRQUNBLFFBQUEsUUFBQTs7T0FFQSxNQUFBLFNBQUEsSUFBQTtRQUNBLFFBQUEsT0FBQTs7TUFFQSxPQUFBLFFBQUE7O0lBRUEsS0FBQSxjQUFBLFNBQUEsU0FBQTtRQUNBLElBQUEsVUFBQTtRQUNBLElBQUEsV0FBQSxHQUFBOztRQUVBLE1BQUEsSUFBQSxXQUFBLFdBQUEsY0FBQSxRQUFBLGNBQUE7U0FDQSxRQUFBLFNBQUEsU0FBQTs7VUFFQSxTQUFBLFFBQUE7O1NBRUEsTUFBQSxTQUFBLElBQUE7VUFDQSxTQUFBLE9BQUE7O1FBRUEsT0FBQSxTQUFBOzs7T0FHQSxLQUFBLGlCQUFBLFlBQUE7UUFDQSxJQUFBLEtBQUE7UUFDQSxJQUFBLFVBQUEsR0FBQTtRQUNBLE1BQUEsSUFBQSxXQUFBLFdBQUEseUJBQUE7OzthQUdBLFFBQUEsVUFBQSxVQUFBO2dCQUNBLFFBQUEsUUFBQTs7YUFFQSxNQUFBLFVBQUEsT0FBQTtnQkFDQSxRQUFBLE9BQUE7OztRQUdBLE9BQUEsUUFBQTs7O09BR0EsS0FBQSxxQkFBQSxTQUFBLFNBQUE7O1FBRUEsSUFBQSxVQUFBO1FBQ0EsSUFBQSxXQUFBLEdBQUE7UUFDQSxNQUFBLElBQUEsV0FBQSxXQUFBLHdCQUFBLFFBQUEsb0JBQUE7O1NBRUEsUUFBQSxTQUFBLFNBQUE7O1VBRUEsU0FBQSxRQUFBOztTQUVBLE1BQUEsU0FBQSxJQUFBO1VBQ0EsU0FBQSxPQUFBOztRQUVBLE9BQUEsU0FBQTs7O01BR0EsS0FBQSxxQkFBQSxTQUFBLFNBQUE7O1FBRUEsSUFBQSxVQUFBO1FBQ0EsSUFBQSxXQUFBLEdBQUE7O1FBRUEsTUFBQSxJQUFBLFdBQUEsV0FBQSxtQkFBQSxRQUFBLG9CQUFBO1NBQ0EsUUFBQSxTQUFBLFNBQUE7O1VBRUEsU0FBQSxRQUFBOztTQUVBLE1BQUEsU0FBQSxJQUFBO1VBQ0EsU0FBQSxPQUFBOztRQUVBLE9BQUEsU0FBQTs7Ozs7SUFLQSxLQUFBLGNBQUEsU0FBQSxVQUFBO01BQ0EsSUFBQSxVQUFBLEdBQUE7TUFDQSxNQUFBLElBQUEsV0FBQSxXQUFBLHdCQUFBO09BQ0EsUUFBQSxTQUFBLFNBQUE7VUFDQSxRQUFBLFFBQUE7O09BRUEsTUFBQSxTQUFBLElBQUE7VUFDQSxRQUFBLE9BQUE7O01BRUEsT0FBQSxRQUFBOztJQUVBLEtBQUEsZUFBQSxTQUFBLFVBQUE7O01BRUEsSUFBQSxVQUFBLEdBQUE7O01BRUEsTUFBQSxJQUFBLFdBQUEsVUFBQSx1QkFBQSxVQUFBLFFBQUE7T0FDQSxRQUFBLFNBQUEsU0FBQTtRQUNBLFFBQUEsUUFBQTs7T0FFQSxNQUFBLFNBQUEsSUFBQTtRQUNBLFFBQUEsT0FBQTs7TUFFQSxPQUFBLFFBQUE7OztJQUdBLEtBQUEsYUFBQSxTQUFBLFdBQUE7UUFDQSxJQUFBLFNBQUEsR0FBQTtRQUNBLE1BQUEsS0FBQSxXQUFBLFdBQUEsa0JBQUE7U0FDQSxRQUFBLFNBQUEsU0FBQTtZQUNBLE9BQUEsUUFBQTtjQUNBLFNBQUEsSUFBQTtnQkFDQSxPQUFBLE9BQUE7O1FBRUEsT0FBQSxPQUFBOztJQUVBLEtBQUEsY0FBQSxTQUFBLEdBQUE7SUFDQSxJQUFBLFNBQUEsR0FBQTtJQUNBLE1BQUEsSUFBQSxXQUFBLFdBQUEsb0JBQUE7S0FDQSxRQUFBLFNBQUEsU0FBQTtNQUNBLE9BQUEsUUFBQTtNQUNBLFNBQUEsSUFBQTtNQUNBLE9BQUEsT0FBQTs7SUFFQSxPQUFBLE9BQUE7O0lBRUEsT0FBQTs7O0FDbE5BLFFBQUEsT0FBQSxRQUFBLFFBQUEsVUFBQSxDQUFBLFNBQUEsTUFBQSxjQUFBLFVBQUEsT0FBQSxJQUFBLFlBQUE7OztFQUdBLEtBQUEsZUFBQSxTQUFBLElBQUE7UUFDQSxJQUFBLFdBQUEsR0FBQTs7UUFFQSxNQUFBLElBQUEsV0FBQSxXQUFBLHdCQUFBO2FBQ0EsUUFBQSxVQUFBLFVBQUE7Z0JBQ0EsU0FBQSxRQUFBOzthQUVBLE1BQUEsVUFBQSxPQUFBO2dCQUNBLFNBQUEsT0FBQTs7UUFFQSxPQUFBLFNBQUE7O01BRUEsS0FBQSxzQkFBQSxTQUFBLElBQUE7UUFDQSxJQUFBLFdBQUEsR0FBQTs7UUFFQSxNQUFBLE9BQUEsV0FBQSxVQUFBLDZCQUFBO1NBQ0EsUUFBQSxTQUFBLFNBQUE7WUFDQSxTQUFBLFFBQUE7O1NBRUEsTUFBQSxTQUFBLE9BQUE7WUFDQSxTQUFBLE9BQUE7O1FBRUEsT0FBQSxTQUFBOzs7SUFHQSxLQUFBLGVBQUEsVUFBQSxNQUFBOztRQUVBLElBQUEsVUFBQSxHQUFBO1FBQ0EsTUFBQSxLQUFBLFdBQUEsV0FBQSxxQkFBQTthQUNBLFFBQUEsVUFBQSxVQUFBO2dCQUNBLFdBQUEsV0FBQTtnQkFDQSxRQUFBLFFBQUE7O2FBRUEsTUFBQSxVQUFBLE9BQUE7Z0JBQ0EsUUFBQSxPQUFBOzs7UUFHQSxPQUFBLFFBQUE7OztPQUdBLEtBQUEsZUFBQSxVQUFBLE1BQUE7O1FBRUEsSUFBQSxVQUFBLEdBQUE7UUFDQSxNQUFBLEtBQUEsV0FBQSxXQUFBLHFCQUFBO2FBQ0EsUUFBQSxVQUFBLFVBQUE7Z0JBQ0EsV0FBQSxXQUFBO2dCQUNBLFFBQUEsUUFBQTs7YUFFQSxNQUFBLFVBQUEsT0FBQTtnQkFDQSxRQUFBLE9BQUE7OztRQUdBLE9BQUEsUUFBQTs7OztJQUlBLEtBQUEsYUFBQSxVQUFBLGFBQUE7O1FBRUEsSUFBQSxVQUFBLEdBQUE7UUFDQSxNQUFBLElBQUEsV0FBQSxXQUFBLHVCQUFBO2FBQ0EsUUFBQSxVQUFBLFVBQUE7Z0JBQ0EsUUFBQSxRQUFBOzthQUVBLE1BQUEsVUFBQSxPQUFBO2dCQUNBLFFBQUEsT0FBQTs7O1FBR0EsT0FBQSxRQUFBOzs7OztBQUtBLEtBQUEsa0JBQUEsWUFBQTtJQUNBLElBQUEsS0FBQTtRQUNBLElBQUEsVUFBQSxHQUFBO1FBQ0EsTUFBQSxJQUFBLFdBQUEsV0FBQSxvQkFBQTs7Q0FFQSxRQUFBLFVBQUEsVUFBQTtnQkFDQSxRQUFBLFFBQUE7O2FBRUEsTUFBQSxVQUFBLE9BQUE7Z0JBQ0EsUUFBQSxPQUFBOzs7UUFHQSxPQUFBLFFBQUE7OztLQUdBLEtBQUEsbUJBQUEsVUFBQSxZQUFBO1FBQ0EsSUFBQSxVQUFBLEdBQUE7UUFDQSxNQUFBLElBQUEsV0FBQSxXQUFBLDBCQUFBO2FBQ0EsUUFBQSxVQUFBLFVBQUE7Z0JBQ0EsUUFBQSxRQUFBOzthQUVBLE1BQUEsVUFBQSxPQUFBO2dCQUNBLFFBQUEsT0FBQTs7O1FBR0EsT0FBQSxRQUFBOztPQUVBLEtBQUEsc0JBQUEsVUFBQSxZQUFBO1FBQ0EsSUFBQSxVQUFBLEdBQUE7UUFDQSxNQUFBLElBQUEsV0FBQSxXQUFBLDhCQUFBOztpQkFFQSxRQUFBLFVBQUEsVUFBQTtnQkFDQSxRQUFBLFFBQUE7O2FBRUEsTUFBQSxVQUFBLE9BQUE7Z0JBQ0EsUUFBQSxPQUFBOzs7UUFHQSxPQUFBLFFBQUE7OztJQUdBLEtBQUEsZ0JBQUEsVUFBQSxXQUFBOztRQUVBLElBQUEsVUFBQSxHQUFBO1FBQ0EsTUFBQSxJQUFBLFdBQUEsV0FBQSwyQkFBQTthQUNBLFFBQUEsVUFBQSxVQUFBO2dCQUNBLFdBQUEsV0FBQTtnQkFDQSxRQUFBLFFBQUE7O2FBRUEsTUFBQSxVQUFBLE9BQUE7Z0JBQ0EsUUFBQSxPQUFBOzs7O1FBSUEsT0FBQSxRQUFBOzs7OztJQUtBLEtBQUEsT0FBQSxVQUFBLFVBQUE7O1FBRUEsSUFBQSxVQUFBLEdBQUE7UUFDQSxNQUFBLElBQUEsV0FBQSxXQUFBLGtCQUFBO2FBQ0EsUUFBQSxVQUFBLFVBQUE7OztnQkFHQSxRQUFBLFFBQUE7O2FBRUEsTUFBQSxVQUFBLE9BQUE7Z0JBQ0EsUUFBQSxPQUFBOztRQUVBLE9BQUEsUUFBQTs7O0lBR0EsS0FBQSxnQkFBQSxTQUFBLEdBQUE7SUFDQSxJQUFBLFNBQUEsR0FBQTtJQUNBLE1BQUEsSUFBQSxXQUFBLFdBQUEsc0JBQUE7S0FDQSxRQUFBLFNBQUEsU0FBQTtNQUNBLE9BQUEsUUFBQTtNQUNBLFNBQUEsSUFBQTtNQUNBLE9BQUEsT0FBQTs7SUFFQSxPQUFBLE9BQUE7O0lBRUEsT0FBQTs7O0FDL0pBLFFBQUEsT0FBQTtBQUNBLFFBQUEsV0FBQSxDQUFBLFFBQUEsS0FBQSxhQUFBLFNBQUEsT0FBQSxNQUFBLEdBQUEsWUFBQTtJQUNBLEtBQUEsTUFBQSxTQUFBLFNBQUE7UUFDQSxJQUFBLFdBQUEsR0FBQTs7UUFFQSxNQUFBLEtBQUEsV0FBQSxVQUFBLGVBQUE7U0FDQSxRQUFBLFNBQUEsU0FBQTtZQUNBLFNBQUEsUUFBQTs7U0FFQSxNQUFBLFNBQUEsT0FBQTtZQUNBLFNBQUEsT0FBQTs7UUFFQSxPQUFBLFNBQUE7O0lBRUEsS0FBQSxLQUFBLFdBQUE7UUFDQSxJQUFBLFdBQUEsR0FBQTs7UUFFQSxNQUFBLElBQUEsV0FBQSxVQUFBO1NBQ0EsUUFBQSxTQUFBLFNBQUE7WUFDQSxTQUFBLFFBQUE7O1NBRUEsTUFBQSxTQUFBLE9BQUE7WUFDQSxTQUFBLE9BQUE7O1FBRUEsT0FBQSxTQUFBOzs7QUN4QkEsUUFBQSxPQUFBLFFBQUEsUUFBQSxVQUFBLENBQUEsS0FBQSxRQUFBLGFBQUEsVUFBQSxJQUFBLE9BQUEsWUFBQTtDQUNBLEtBQUEsT0FBQSxXQUFBO0VBQ0EsSUFBQSxXQUFBLEdBQUE7RUFDQSxNQUFBLElBQUEsV0FBQSxXQUFBO0dBQ0EsUUFBQSxTQUFBLFNBQUE7R0FDQSxTQUFBLFFBQUE7O0dBRUEsTUFBQSxTQUFBLE9BQUE7R0FDQSxTQUFBLE9BQUE7O0VBRUEsT0FBQSxTQUFBOztDQUVBLEtBQUEsYUFBQSxZQUFBO0VBQ0EsSUFBQSxXQUFBLEdBQUE7RUFDQSxNQUFBLElBQUEsV0FBQSxXQUFBO0dBQ0EsUUFBQSxTQUFBLFNBQUE7R0FDQSxTQUFBLFFBQUE7O0dBRUEsTUFBQSxTQUFBLElBQUE7R0FDQSxTQUFBLE9BQUE7O0VBRUEsT0FBQSxTQUFBOztDQUVBLEtBQUEsV0FBQSxTQUFBLEdBQUE7RUFDQSxJQUFBLFdBQUEsR0FBQTtFQUNBLE1BQUEsT0FBQSxXQUFBLFdBQUEseUJBQUE7R0FDQSxRQUFBLFNBQUEsU0FBQTtHQUNBLFNBQUEsUUFBQTs7R0FFQSxNQUFBLFNBQUEsSUFBQTtHQUNBLFNBQUEsT0FBQTs7RUFFQSxPQUFBLFNBQUE7O0NBRUEsS0FBQSxTQUFBLFNBQUEsTUFBQTtFQUNBLElBQUEsV0FBQSxHQUFBO0VBQ0EsTUFBQSxJQUFBLFdBQUEsV0FBQSx5QkFBQTtHQUNBLFFBQUEsU0FBQSxTQUFBO0dBQ0EsU0FBQSxRQUFBOztHQUVBLE1BQUEsU0FBQSxNQUFBO0dBQ0EsU0FBQSxPQUFBOztFQUVBLE9BQUEsU0FBQTs7Q0FFQSxPQUFBOzs7O0FDNUNBLFFBQUEsT0FBQTtDQUNBLFFBQUEsWUFBQSxDQUFBLFFBQUEsYUFBQSxLQUFBLFVBQUEsTUFBQSxXQUFBLElBQUE7Q0FDQSxLQUFBLFVBQUEsVUFBQTs7UUFFQSxJQUFBLFdBQUEsR0FBQTtRQUNBLE1BQUEsSUFBQSxXQUFBLFdBQUE7U0FDQSxRQUFBLFNBQUEsS0FBQTtZQUNBLFNBQUEsUUFBQTs7U0FFQSxNQUFBLFNBQUEsSUFBQTtZQUNBLFNBQUEsT0FBQTs7UUFFQSxPQUFBLFNBQUE7O0lBRUEsS0FBQSxhQUFBLFNBQUEsT0FBQTtRQUNBLElBQUEsV0FBQSxHQUFBO1FBQ0EsTUFBQSxLQUFBLFdBQUEsV0FBQSxnQkFBQTtTQUNBLFFBQUEsU0FBQSxJQUFBO1lBQ0EsU0FBQSxRQUFBOztTQUVBLE1BQUEsU0FBQSxLQUFBO1lBQ0EsU0FBQSxPQUFBOztRQUVBLE9BQUEsU0FBQTs7OztLQUlBLEtBQUEsaUJBQUEsVUFBQTs7RUFFQSxJQUFBLFdBQUEsR0FBQTtFQUNBLE1BQUEsSUFBQSxXQUFBLFdBQUE7R0FDQSxRQUFBLFNBQUEsU0FBQTtHQUNBLFNBQUEsUUFBQTs7R0FFQSxNQUFBLFNBQUEsSUFBQTtHQUNBLFNBQUEsT0FBQTs7RUFFQSxPQUFBLFNBQUE7OztJQUdBLE9BQUE7OztBQ3pDQSxRQUFBLE9BQUE7Q0FDQSxRQUFBLFFBQUEsQ0FBQSxPQUFBLFFBQUEsS0FBQSxjQUFBLFVBQUEsS0FBQSxNQUFBLEdBQUEsWUFBQTs7Q0FFQSxLQUFBLFFBQUEsU0FBQSxZQUFBO0VBQ0EsSUFBQSxXQUFBLEdBQUE7UUFDQSxNQUFBLEtBQUEsV0FBQSxXQUFBLGdCQUFBO1NBQ0EsUUFBQSxTQUFBLFNBQUE7WUFDQSxTQUFBLFFBQUE7O1NBRUEsTUFBQSxTQUFBLElBQUE7WUFDQSxTQUFBLE9BQUE7O1FBRUEsT0FBQSxTQUFBOzs7Q0FHQSxLQUFBLGtCQUFBLFVBQUE7RUFDQSxJQUFBLFVBQUEsR0FBQTtFQUNBLE1BQUEsSUFBQSxXQUFBLFVBQUE7R0FDQSxRQUFBLFNBQUEsSUFBQTs7R0FFQSxRQUFBLFFBQUE7O0dBRUEsTUFBQSxXQUFBOztHQUVBLFFBQUE7O0VBRUEsT0FBQSxRQUFBOzs7QUFHQSxLQUFBLGlCQUFBLFNBQUEsYUFBQTs7O0dBR0EsSUFBQSxVQUFBLEdBQUE7R0FDQSxNQUFBLEtBQUEsV0FBQSxVQUFBLGVBQUE7YUFDQSxRQUFBLFNBQUEsVUFBQTs7Z0JBRUEsUUFBQSxRQUFBOzthQUVBLE1BQUEsU0FBQSxPQUFBO2dCQUNBLFFBQUEsT0FBQTs7O1FBR0EsT0FBQSxRQUFBOztDQUVBLEtBQUEsVUFBQSxTQUFBLEtBQUE7O0VBRUEsSUFBQSxXQUFBLEdBQUE7RUFDQSxNQUFBLElBQUEsV0FBQSxXQUFBLHFCQUFBO0dBQ0EsUUFBQSxTQUFBLFNBQUE7R0FDQSxTQUFBLFFBQUE7O0dBRUEsTUFBQSxTQUFBLElBQUE7R0FDQSxTQUFBLE9BQUE7O0VBRUEsT0FBQSxTQUFBOztDQUVBLEtBQUEsV0FBQSxTQUFBLEtBQUE7RUFDQSxJQUFBLFdBQUEsR0FBQTtFQUNBLE1BQUEsSUFBQSxXQUFBLFdBQUEscUJBQUE7R0FDQSxRQUFBLFNBQUEsU0FBQTtHQUNBLFNBQUEsUUFBQTs7R0FFQSxNQUFBLFNBQUEsSUFBQTtHQUNBLFNBQUEsT0FBQTs7RUFFQSxPQUFBLFNBQUE7O0lBRUEsT0FBQTs7QUNuRUEsUUFBQSxPQUFBLFFBQUEsUUFBQSxNQUFBLENBQUEsUUFBQSxLQUFBLGFBQUEsU0FBQSxNQUFBLEdBQUEsV0FBQTtFQUNBLEtBQUEsUUFBQSxTQUFBLFFBQUE7SUFDQSxJQUFBLFNBQUEsR0FBQTtJQUNBLE1BQUEsS0FBQSxXQUFBLFdBQUEsd0JBQUE7S0FDQSxRQUFBLFNBQUEsU0FBQTtNQUNBLE9BQUEsUUFBQTtNQUNBLFNBQUEsSUFBQTtNQUNBLE9BQUEsT0FBQTs7SUFFQSxPQUFBLE9BQUE7O0VBRUEsT0FBQTs7O0FDWEEsUUFBQSxPQUFBO0NBQ0EsUUFBQSxhQUFBLENBQUEsU0FBQSxNQUFBLGNBQUEsU0FBQSxPQUFBLElBQUE7Q0FDQTs7O0NBR0EsS0FBQSxrQkFBQSxTQUFBLE1BQUE7UUFDQSxJQUFBLFVBQUEsR0FBQTtRQUNBLE1BQUEsS0FBQSxXQUFBLFVBQUEsb0JBQUE7YUFDQSxRQUFBLFNBQUEsVUFBQTtnQkFDQSxRQUFBLFFBQUE7O2FBRUEsTUFBQSxTQUFBLE9BQUE7Z0JBQ0EsUUFBQSxPQUFBOztRQUVBLE9BQUEsUUFBQTs7SUFFQSxLQUFBLGdCQUFBLFNBQUEsSUFBQTtRQUNBLElBQUEsVUFBQSxHQUFBO1FBQ0EsTUFBQSxJQUFBLFdBQUEsVUFBQSwwQkFBQTthQUNBLFFBQUEsU0FBQTs7WUFFQTtnQkFDQSxRQUFBLFFBQUE7O2FBRUEsTUFBQSxTQUFBLE9BQUE7Z0JBQ0EsUUFBQSxPQUFBOztRQUVBLE9BQUEsUUFBQTs7OztFQUlBLE9BQUE7O0FDL0JBLFFBQUEsT0FBQTtDQUNBLFFBQUEsT0FBQSxDQUFBLFVBQUE7SUFDQSxLQUFBLGdCQUFBLFdBQUE7UUFDQSxPQUFBLENBQUEsS0FBQTs7SUFFQSxPQUFBOztBQ0xBLFFBQUEsT0FBQSxRQUFBLFFBQUEsUUFBQSxDQUFBLFFBQUEsS0FBQSxhQUFBLFNBQUEsT0FBQSxNQUFBLEdBQUEsWUFBQTtDQUNBLEtBQUEsTUFBQSxVQUFBO0VBQ0EsSUFBQSxVQUFBLEdBQUE7RUFDQSxNQUFBLElBQUEsV0FBQSxVQUFBO0dBQ0EsUUFBQSxTQUFBLElBQUE7O0dBRUEsUUFBQSxRQUFBOztHQUVBLE1BQUEsV0FBQTtHQUNBLFFBQUE7O0VBRUEsT0FBQSxRQUFBOztFQUVBLEtBQUEsaUJBQUEsV0FBQTtJQUNBLElBQUEsV0FBQSxHQUFBO01BQ0EsTUFBQSxJQUFBLFdBQUEsV0FBQTtPQUNBLFFBQUEsU0FBQSxTQUFBO1FBQ0EsU0FBQSxRQUFBOztPQUVBLE1BQUEsU0FBQSxJQUFBO1FBQ0EsU0FBQSxPQUFBOztNQUVBLE9BQUEsU0FBQTs7O0NBR0EsS0FBQSxTQUFBLFNBQUEsT0FBQTtJQUNBLElBQUEsV0FBQSxHQUFBO01BQ0EsTUFBQSxLQUFBLFdBQUEsV0FBQSxhQUFBO09BQ0EsUUFBQSxTQUFBLFNBQUE7UUFDQSxTQUFBLFFBQUE7O09BRUEsTUFBQSxTQUFBLElBQUE7UUFDQSxTQUFBLE9BQUE7O01BRUEsT0FBQSxTQUFBOztDQUVBLEtBQUEsU0FBQSxTQUFBLEtBQUE7TUFDQSxJQUFBLFdBQUEsR0FBQTtNQUNBLE1BQUEsSUFBQSxXQUFBLFdBQUE7T0FDQSxRQUFBLFNBQUEsU0FBQTtRQUNBLFNBQUEsUUFBQTs7T0FFQSxNQUFBLFNBQUEsSUFBQTtRQUNBLFNBQUEsT0FBQTs7TUFFQSxPQUFBLFNBQUE7O0VBRUEsS0FBQSxZQUFBLFNBQUEsS0FBQTtNQUNBLElBQUEsV0FBQSxHQUFBO01BQ0EsTUFBQSxJQUFBLFdBQUEsV0FBQTtPQUNBLFFBQUEsU0FBQSxTQUFBO1FBQ0EsU0FBQSxRQUFBOztPQUVBLE1BQUEsU0FBQSxJQUFBO1FBQ0EsU0FBQSxPQUFBOztNQUVBLE9BQUEsU0FBQTs7SUFFQSxLQUFBLG1CQUFBLFdBQUE7TUFDQSxJQUFBLFdBQUEsR0FBQTtNQUNBLE1BQUEsSUFBQSxXQUFBLFdBQUE7O09BRUEsUUFBQSxTQUFBLFNBQUE7UUFDQSxTQUFBLFFBQUE7O09BRUEsTUFBQSxTQUFBLElBQUE7UUFDQSxTQUFBLE9BQUE7O01BRUEsT0FBQSxTQUFBOztDQUVBLE9BQUE7Ozs7QUNyRUEsUUFBQSxPQUFBO0NBQ0EsUUFBQSxnQkFBQSxDQUFBLFNBQUEsTUFBQSxjQUFBLFNBQUEsYUFBQSxPQUFBLElBQUEsWUFBQTtJQUNBLEtBQUEsa0JBQUEsVUFBQSxTQUFBO1FBQ0EsSUFBQSxXQUFBLEdBQUE7UUFDQSxNQUFBLElBQUEsV0FBQSxXQUFBLHlCQUFBLENBQUEsT0FBQTthQUNBLFFBQUEsVUFBQSxVQUFBO2dCQUNBLFNBQUEsUUFBQTs7YUFFQSxNQUFBLFVBQUEsT0FBQTtnQkFD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QUVBLE9BQUEsT0FBQSxZQUFBO0tBQ0EsVUFBQTs7SUFFQSxPQUFBLFNBQUEsWUFBQTtLQUNBLFVBQUE7Ozs7O0dBS0EsT0FBQSxtQkFBQSxTQUFBLFNBQUEsU0FBQTtHQUNBLE9BQUEsV0FBQSxVQUFBLElBQUEsTUFBQTtJQUNBLFdBQUEsS0FBQTtJQUNBLFdBQUEsT0FBQTtJQUNBLFVBQUEsS0FBQTtLQUNBLFFBQUEsUUFBQSxRQUFBLFNBQUE7S0FDQSxZQUFBO0tBQ0EsYUFBQTtLQUNBLHFCQUFBO09BQ0E7OztHQUdBLEVBQUEsWUFBQSxNQUFBLFVBQUEsR0FBQTtJQUNBLEVBQUE7OztHQUdBLEVBQUEsWUFBQSxNQUFBLFVBQUEsR0FBQTtJQUNBLEVBQUE7SUFDQSxFQUFBOztHQUVBLEVBQUEsY0FBQSxNQUFBLFVBQUEsR0FBQTtJQUNBLEVBQUE7SUFDQSxFQUFBOztHQUVBLEVBQUEsVUFBQSxNQUFBLFVBQUEsR0FBQTs7SUFFQSxFQUFBO0lBQ0EsRUFBQTs7O0dBR0EsRUFBQSxXQUFBLE1BQUEsVUFBQSxHQUFBO0lBQ0EsRUFBQTtJQUNBLEVBQUE7O0dBRUEsRUFBQSxlQUFBLE1BQUEsVUFBQSxHQUFBO0lBQ0EsRUFBQTtJQUNBLEVBQUE7O0dBRUEsRUFBQSxlQUFBLE1BQUEsVUFBQSxHQUFBO0lBQ0EsRUFBQTtJQUNBLEVBQUE7O0dBRUEsRUFBQSxlQUFBLE1BQUEsVUFBQSxHQUFBO0lBQ0EsRUFBQTtJQUNBLEVBQUE7OztHQUdBLEVBQUEsZ0JBQUEsTUFBQSxVQUFBLEdBQUE7SUFDQSxFQUFBO0lBQ0EsRUFBQTs7O0dBR0EsT0FBQSxTQUFBLFVBQUEsTUFBQTs7SUFFQSxXQUFBLFdBQUE7SUFDQSxVQUFBLEtBQUE7S0FDQSxRQUFBLFFBQUEsUUFBQSxTQUFBO0tBQ0EsWUFBQTtLQUNBLGFBQUE7S0FDQSxxQkFBQTtPQUNBOzs7R0FHQSxPQUFBLGFBQUEsVUFBQSxLQUFBLE9BQUEsT0FBQSxPQUFBLGFBQUE7Ozs7SUFHQSxTQUFBLHFCQUFBLFFBQUEsV0FBQTs7S0FFQSxPQUFBLE9BQUEsWUFBQTtNQUNBLFVBQUE7O0tBRUEsT0FBQSxTQUFBLFlBQUE7TUFDQSxVQUFBOztLQUVBLE9BQUEsTUFBQTtLQUNBLE9BQUEsUUFBQTtLQUNBLE9BQUEsUUFBQTtLQUNBLE9BQUEsUUFBQTtLQUNBLE9BQUEsY0FBQTs7O0tBR0EsT0FBQSxhQUFBLE9BQUE7T0FDQSxLQUFBLFVBQUEsY0FBQTs7T0FFQSxPQUFBLGVBQUE7O1NBRUEsVUFBQSxLQUFBO09BQ0EsSUFBQSxVQUFBO1FBQ0EsUUFBQSxJQUFBOzs7S0FHQSxNQUFBLFdBQUEsT0FBQTtPQUNBLEtBQUEsVUFBQSxhQUFBOztPQUVBLE9BQUEsY0FBQTs7U0FFQSxVQUFBLEtBQUE7T0FDQSxJQUFBLFVBQUE7UUFDQSxRQUFBLElBQUE7Ozs7Ozs7OztJQVNBLFVBQUEsS0FBQTs7S0FFQSxRQUFBLFFBQUEsUUFBQSxTQUFBO0tBQ0EsWUFBQTtLQUNBLGFBQUE7S0FDQSxxQkFBQTtPQUNBOztHQUVBLE9BQUEsY0FBQSxZQUFBOzs7SUFHQSxVQUFBLEtBQUE7O0tBRUEsUUFBQSxRQUFBLFFBQUEsU0FBQTtLQUNBLFlBQUE7S0FDQSxhQUFBO0tBQ0EscUJBQUE7T0FDQTs7O0dBR0EsT0FBQSxhQUFBLFVBQUEsUUFBQSxVQUFBOzs7SUFFQSxTQUFBLGlCQUFBLFFBQUEsV0FBQTtLQUNBLE9BQUEsT0FBQSxZQUFBO01BQ0EsVUFBQTs7S0FFQSxPQUFBLFNBQUEsWUFBQTtNQUNBLFVBQUE7O0tBRUEsT0FBQSxTQUFBO0tBQ0EsT0FBQSxXQUFBOztJQUVBLFVBQUEsS0FBQTs7S0FFQSxRQUFBLFFBQUEsUUFBQSxTQUFBO0tBQ0EsWUFBQTtLQUNBLGFBQUE7S0FDQSxxQkFBQTtPQUNBOzs7R0FHQSxPQUFBLGFBQUEsVUFBQSxRQUFBLFVBQUE7OztJQUVBLFNBQUEsaUJBQUEsUUFBQSxXQUFBO0tBQ0EsT0FBQSxPQUFBLFlBQUE7TUFDQSxVQUFBOztLQUVBLE9BQUEsU0FBQSxZQUFBO01BQ0EsVUFBQTs7S0FFQSxPQUFBLFNBQUE7S0FDQSxPQUFBLFdBQUE7O0lBRUEsVUFBQSxLQUFBO0tBQ0EsUUFBQSxRQUFBLFFBQUEsU0FBQTtLQUNBLFlBQUE7S0FDQSxhQUFBO0tBQ0EscUJBQUE7T0FDQTs7O0dBR0EsT0FBQSxZQUFBLFlBQUE7O0lBRUEsVUFBQSxLQUFBO0tBQ0EsUUFBQSxRQUFBLFFBQUEsU0FBQTtLQUNBLFlBQUE7S0FDQSxhQUFBO0tBQ0EscUJBQUE7T0FDQTs7O0dBR0EsT0FBQSxRQUFBLFVBQUEsYUFBQSxNQUFBOzs7O0lBR0EsU0FBQSxhQUFBLFFBQUEsV0FBQTs7S0FFQSxPQUFBLE9BQUEsWUFBQTtNQUNBLFVBQUE7O0tBRUEsT0FBQSxTQUFBLFlBQUE7TUFDQSxVQUFBOzs7S0FHQSxLQUFBO09BQ0EsS0FBQSxVQUFBLFFBQUE7T0FDQSxJQUFBLFVBQUE7T0FDQSxRQUFBLFFBQUEsUUFBQSxVQUFBLE9BQUE7UUFDQSxRQUFBLEtBQUEsTUFBQTs7T0FFQSxPQUFBLFdBQUEsS0FBQSxVQUFBOztTQUVBOzs7S0FHQSxPQUFBLFlBQUE7O0tBRUEsT0FBQSxVQUFBLFlBQUE7O0tBRUEsS0FBQTtPQUNBLEtBQUEsVUFBQSxNQUFBOztPQUVBLE9BQUEsV0FBQSxLQUFBO1NBQ0E7OztLQUdBLE9BQUEsYUFBQTs7S0FFQSxPQUFBLFlBQUE7OztLQUdBLElBQUEsU0FBQSxVQUFBO01BQ0EsSUFBQSxTQUFBO09BQ0EsYUFBQTtPQUNBLFFBQUE7T0FDQSxXQUFBLFdBQUEsS0FBQTs7TUFFQSxVQUFBLElBQUE7UUFDQSxLQUFBLFVBQUEsYUFBQTs7UUFFQSxJQUFBLE9BQUEsV0FBQSxXQUFBLFdBQUE7UUFDQSxNQUFBLEtBQUEsOEZBQUE7U0FDQSxTQUFBO1dBQ0EsUUFBQSxVQUFBLE1BQUEsUUFBQSxTQUFBLFFBQUE7O1NBRUEsT0FBQSxnQkFBQSxLQUFBO1NBQ0EsSUFBQSxJQUFBLFNBQUEsZUFBQTtTQUNBLEVBQUEsUUFBQSxLQUFBOztTQUVBLE9BQUEsZ0JBQUEsS0FBQTs7OztRQUlBLE1BQUEsVUFBQSxNQUFBLFFBQUEsU0FBQSxRQUFBOzs7VUFHQTtZQUNBLElBQUEsU0FBQSxRQUFBOztNQUVBLElBQUEsY0FBQTtPQUNBLFdBQUE7T0FDQSxRQUFBO09BQ0EsV0FBQSxXQUFBLEtBQUE7O01BRUEsVUFBQSxJQUFBO1FBQ0EsS0FBQSxVQUFBLGFBQUE7UUFDQSxRQUFBLElBQUE7UUFDQSxJQUFBLE9BQUEsV0FBQSxXQUFBLGFBQUE7UUFDQSxNQUFBLEtBQUEsOEZBQUE7U0FDQSxTQUFBO1dBQ0EsUUFBQSxVQUFBLE1BQUEsUUFBQSxTQUFBLFFBQUE7O1NBRUEsT0FBQSxnQkFBQSxLQUFBO1NBQ0EsSUFBQSxJQUFBLFNBQUEsZUFBQTtTQUNBLEVBQUEsUUFBQSxLQUFBOztTQUVBLE9BQUEsZ0JBQUEsS0FBQTs7OztRQUlBLE1BQUEsVUFBQSxNQUFBLFFBQUEsU0FBQSxRQUFBOzs7VUFHQTs7Ozs7O0lBTUEsVUFBQSxLQUFBO0tBQ0EsUUFBQSxRQUFBLFFBQUEsU0FBQTtLQUNBLFlBQUE7S0FDQSxhQUFBO0tBQ0EscUJBQUE7T0FDQTs7R0FFQSxPQUFBLGFBQUEsU0FBQSxXQUFBO0lBQ0EsTUFBQSxXQUFBLFlBQUEsS0FBQSxTQUFBLFNBQUE7S0FDQSxRQUFBLElBQUE7T0FDQTtJQUNBLEVBQUEsT0FBQSxvQ0FBQTs7Ozs7QUM5U0EsUUFBQSxPQUFBO0NBQ0EsUUFBQSxRQUFBLENBQUEsU0FBQSxNQUFBLGNBQUEsU0FBQSxLQUFBLE9BQUEsSUFBQSxZQUFBO0lBQ0EsS0FBQSxVQUFBLFVBQUEsU0FBQTtRQUNBLElBQUEsV0FBQSxHQUFBO1FBQ0EsTUFBQSxJQUFBLFdBQUEsV0FBQSw2QkFBQSxTQUFBLENBQUEsT0FBQTthQUNBLFFBQUEsVUFBQSxVQUFBOztnQkFFQSxTQUFBLFFBQUE7O2FBRUEsTUFBQSxVQUFBLE9BQUE7Z0JBQ0EsU0FBQSxPQUFBOztRQUVBLE9BQUEsU0FBQTs7SUFFQSxLQUFBLGNBQUEsU0FBQSxJQUFBO01BQ0EsSUFBQSxXQUFBLEdBQUE7TUFDQSxNQUFBLElBQUEsV0FBQSxXQUFBLG9CQUFBO09BQ0EsUUFBQSxTQUFBLFNBQUE7UUFDQSxTQUFBLFFBQUE7O09BRUEsTUFBQSxTQUFBLElBQUE7UUFDQSxTQUFBLE9BQUE7O01BRUEsT0FBQSxTQUFBOztJQUVBLEtBQUEsYUFBQSxVQUFBLE1BQUE7UUFDQSxJQUFBLFdBQUEsR0FBQTtRQUNBLE1BQUEsS0FBQSxXQUFBLFdBQUEsb0JBQUE7YUFDQSxRQUFBLFVBQUEsVUFBQTtnQkFDQSxTQUFBLFFBQUE7O2FBRUEsTUFBQSxVQUFBLE9BQUE7Z0JBQ0EsU0FBQSxPQUFBOztRQUVBLE9BQUEsU0FBQTs7SUFFQSxLQUFBLGFBQUEsVUFBQSxJQUFBO1FBQ0EsSUFBQSxXQUFBLEdBQUE7UUFDQSxNQUFBLE9BQUEsV0FBQSxXQUFBLHNCQUFBO2FBQ0EsUUFBQSxVQUFBLFVBQUE7Z0JBQ0EsU0FBQSxRQUFBOzthQUVBLE1BQUEsVUFBQSxPQUFBO2dCQUNBLFNBQUEsT0FBQTs7UUFFQSxPQUFBLFNBQUE7O0lBRUEsT0FBQTs7O0FBR0EsUUFBQSxPQUFBO0NBQ0EsV0FBQSxxQkFBQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7SUFFQSxPQUFBLE9BQUEsWUFBQTtRQUNBLE9BQUE7UUFDQSxPQUFBOzs7O0lBSUEsVUFBQSxZQUFBO1FBQ0EsT0FBQTtPQUNBO0lBQ0EsT0FBQSxTQUFBLFVBQUE7O01BRUEsS0FBQTtPQUNBLEtBQUEsU0FBQSxTQUFBOztRQUVBLE9BQUEsT0FBQTtRQUNBLFFBQUEsSUFBQTtRQUNBLFNBQUEsSUFBQTs7OztJQUlBLE9BQUEsV0FBQSxVQUFBOzs7SUFHQSxPQUFBLHNCQUFBLFNBQUEsS0FBQSxLQUFBOztNQUVBLElBQUEsS0FBQTtRQUNBLFVBQUE7UUFDQSxVQUFBOztNQUVBLEtBQUEsWUFBQTtPQUNBLEtBQUEsU0FBQSxTQUFBO1FBQ0EsT0FBQTtRQUNBLFNBQUEsSUFBQTs7Ozs7SUFLQSxPQUFBLGFBQUEsWUFBQTtRQUNBLE9BQUEsY0FBQTtRQUNBLEtB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QSxPQUFBLFNBQUEsU0FBQSxHQUFBO0dBQ0EsSUFBQSxRQUFBLENBQUEsSUFBQSxJQUFBLE9BQUE7R0FDQSxPQUFBLE1BQUEsZ0JBQUE7O0VBRUEsT0FBQTs7Ozs7Ozs7O0FDekJBLFFBQUEsT0FBQTtDQUNBLFFBQUEsU0FBQTtDQUNBO0NBQ0E7Q0FDQSxLQUFBLFNBQUE7RUFDQTtFQUNBO0VBQ0EsSUFBQTtDQUNBLEtBQUEsV0FBQSxTQUFBLEtBQUE7RUFDQSxJQUFBLFlBQUEsR0FBQTtFQUNBLE1BQUEsS0FBQSxXQUFBLFdBQUEscUJBQUE7R0FDQSxRQUFBLFNBQUEsU0FBQTtHQUNBLFNBQUEsUUFBQTs7R0FFQSxNQUFBLFNBQUEsT0FBQTtHQUNBLFNBQUEsT0FBQTs7RUFFQSxPQUFBLFNBQUE7O0NBRUEsS0FBQSxXQUFBLFNBQUEsR0FBQTtFQUNBLElBQUEsWUFBQSxHQUFBO0VBQ0EsTUFBQSxPQUFBLFdBQUEsV0FBQSxxQkFBQTtHQUNBLFFBQUEsU0FBQSxTQUFBO0dBQ0EsU0FBQSxRQUFBOztHQUVBLE1BQUEsU0FBQSxPQUFBO0dBQ0EsU0FBQSxPQUFBOztFQUVBLE9BQUEsU0FBQTs7Q0FFQSxLQUFBLFlBQUEsVUFBQTtFQUNBLElBQUEsWUFBQSxHQUFBOztFQUVBLE1BQUEsSUFBQSxXQUFBLFdBQUE7R0FDQSxRQUFBLFNBQUEsU0FBQTtHQUNBLFNBQUEsUUFBQTs7R0FFQSxNQUFBLFNBQUEsT0FBQTtHQUNBLFFBQUEsSUFBQSxtQkFBQTtHQUNBLFNBQUEsT0FBQTs7RUFFQSxPQUFBLFNBQUE7OztDQUdBLEtBQUEsYUFBQSxTQUFBLE9BQUE7RUFDQSxJQUFBLFlBQUEsR0FBQTtFQUNBLE1BQUEsSUFBQSxXQUFBLFdBQUEscUJBQUEsS0FBQSxVQUFBO0dBQ0EsUUFBQSxTQUFBLFNBQUE7R0FDQSxTQUFBLFFBQUE7O0dBRUEsTUFBQSxTQUFBLE9BQUE7R0FDQSxTQUFBLFFBQUE7O0VBRUEsT0FBQSxTQUFBOztDQUVBLEtBQUEsaUJBQUEsU0FBQSxRQUFBO0VBQ0EsSUFBQSxXQUFBLEdBQUE7RUFDQSxNQUFBLElBQUEsV0FBQSxXQUFBLHNCQUFBLEtBQUEsVUFBQTtHQUNBLFFBQUEsU0FBQSxTQUFBO0dBQ0EsU0FBQSxRQUFBOztHQUVBLE1BQUEsU0FBQSxJQUFBO0dBQ0EsU0FBQSxPQUFBOztFQUVBLE9BQUEsU0FBQTs7Q0FFQSxLQUFBLGdCQUFBLFNBQUEsT0FBQTtFQUNBLElBQUEsWUFBQSxHQUFBO0VBQ0EsTUFBQSxJQUFBLFdBQUEsVUFBQSxxQkFBQSxLQUFBLFVBQUE7R0FDQSxRQUFBLFNBQUEsU0FBQTtHQUNBLFNBQUEsUUFBQTs7R0FFQSxNQUFBLFNBQUEsT0FBQTtHQUNBLFNBQUEsT0FBQTs7RUFFQSxPQUFBLFNBQUE7O0VBRUEsS0FBQSxnQkFBQSxTQUFBLEdBQUE7O0tBRUEsSUFBQSxXQUFBLEdBQUE7S0FDQSxNQUFBLElBQUEsV0FBQSxXQUFBLHVCQUFBO01BQ0EsUUFBQSxTQUFBLElBQUE7TUFDQSxTQUFBLFFBQUE7O01BRUEsTUFBQSxTQUFBLEtBQUE7TUFDQSxTQUFBLE9BQUE7O0tBRUEsT0FBQSxTQUFBOztDQUVBLE9BQUE7OztBQUdBLFFBQUEsT0FBQTtDQUNBLFdBQUEsbUJBQUE7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0EsU0FBQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7R0FDQTtDQUNBLE9BQUEsUUFBQSxVQUFBO0VBQ0EsT0FBQTs7RUFFQSxPQUFBOztDQUVBLE9BQUEsYUFBQSxVQUFBO0VBQ0EsS0FBQTtHQUNBLEtBQUEsU0FBQSxTQUFBO0dBQ0EsT0FBQSxVQUFBO0tBQ0EsU0FBQSxNQUFBO0dBQ0EsUUFBQSxJQUFBOzs7Q0FHQSxPQUFBLGNBQUEsVUFBQTtFQUNBLE1BQUE7R0FDQSxLQUFBLFNBQUEsU0FBQTtHQUNBLE9BQUEsU0FBQTtLQUNBLFNBQUEsTUFBQTs7O0NBR0EsT0FBQSwwQkFBQSxTQUFBLEdBQUE7O0VBRUEsT0FBQSxVQUFBO0VBQ0EsT0FBQSxVQUFBO0VBQ0EsT0FBQSxRQUFBO0VBQ0EsR0FBQSxDQUFBLFFBQUEsWUFBQSxJQUFBO0dBQ0EsTUFBQSxjQUFBLElBQUEsS0FBQSxTQUFBLFNBQUE7O0lBRUEsT0FBQSxZQUFBO01BQ0EsU0FBQSxNQUFBO0lBQ0EsUUFBQSxJQUFBOzs7O0NBSUEsT0FBQSxJQUFBLGVBQUEsVUFBQTtPQUNBLE9BQUE7O0NBRUEsT0FBQSxJQUFBLGdCQUFBLFVBQUEsT0FBQSxNQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7O0NBRUEsT0FBQSxJQUFBLG1CQUFBLFVBQUEsT0FBQSxTQUFBO0VBQ0EsTUFBQTtRQUNBLE9BQUEsU0FBQTtRQUNBLElBQUEsT0FBQSxjQUFBLEtBQUE7WUFDQSxPQUFBLFVBQUE7O1FBRUEsT0FBQSx1QkFBQTtRQUNBLE9BQUEsVUFBQTs7Q0FFQSxPQUFBLGdCQUFBLFNBQUEsTUFBQTtJQUNBLE1BQUEsY0FBQTtHQUNBLEtBQUEsU0FBQSxLQUFBO0dBQ0EsT0FBQSxRQUFBOztJQUVBLE9BQUEsT0FBQTtJQUNBLEtBQUEsSUFBQSxJQUFBLEdBQUEsSUFBQSxLQUFBLFFBQUEsS0FBQTtNQUNBLElBQUEsS0FBQSxHQUFBLGVBQUEsVUFBQSxLQUFBLEdBQUEsUUFBQTtRQUNBLE9BQUEsT0FBQSxLQUFBLEtBQUEsR0FBQTthQUNBLElBQUEsS0FBQSxHQUFBLGVBQUEsV0FBQTtPQUNBOzs7OztLQUtBLFNBQUEsTUFBQTtHQUNBLFFBQUEsSUFBQTs7O0NBR0EsT0FBQSxjQUFBLFNBQUEsUUFBQTtFQUNBLE9BQUEsU0FBQTtHQUNBLE1BQUEsWUFBQTtHQUNBLEtBQUEsU0FBQSxLQUFBO0dBQ0EsT0FBQSxRQUFBOztJQUVBLE9BQUEsT0FBQTtJQUNBLElBQUE7SUFDQSxLQUFBLElBQUEsSUFBQSxHQUFBLElBQUEsS0FBQSxRQUFBLEtBQUE7TUFDQSxJQUFBLEtBQUEsR0FBQSxlQUFBLFVBQUEsS0FBQSxHQUFBLFFBQUE7UUFDQSxPQUFBLE9BQUEsS0FBQSxLQUFBLEdBQUE7YUFDQSxJQUFBLEtBQUEsR0FBQSxlQUFBLFdBQUE7Z0JBQ0EsT0FBQSxTQUFBLE9BQUEsT0FBQSxTQUFBLEtBQUEsR0FBQTs7O0tBR0EsU0FBQSxNQUFBO0dBQ0EsUUFBQSxJQUFBOzs7QUFHQSxPQUFBLElBQUEsY0FBQSxTQUFBLEVBQUEsT0FBQTtLQUNBLEdBQUEsT0FBQSxTQUFBLE1BQUE7SUFDQSxPQUFBLFVBQUE7SUFDQSxPQUFBLFVBQUE7T0FDQSxPQUFBLFFBQUE7T0FDQSxJQUFBLE9BQUEsY0FBQSxLQUFBO1dBQ0EsT0FBQSxVQUFBOzs7T0FHQSxPQUFBLGFBQUEsT0FBQTtTQUNBLElBQUEsT0FBQSxVQUFBLFNBQUE7SUFDQSxPQUFBLFFBQUE7SUFDQSxPQUFBLFVBQUE7SUFDQSxPQUFBLFVBQUE7SUFDQSxJQUFBLE9BQUEsY0FBQSxLQUFBO01BQ0EsT0FBQSxVQUFBOzs7SUFHQSxPQUFBLGVBQUEsT0FBQTs7O0FBR0EsT0FBQTs7QUFFQSxRQUFBLE9BQUE7Q0FDQSxVQUFBLFlBQUE7Q0FDQTtDQUNBO0NBQ0E7Q0FDQSxTQUFBO0VBQ0E7RUFDQTtFQUNBO0VBQ0EsY0FBQTtDQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0tBQ0EsSUFBQTtVQUNBLFFBQUE7VUFDQSxXQUFBO1VBQ0EsUUFBQTtVQUNBLFdBQUE7VUFDQSxlQUFBO1VBQ0EsV0FBQTtNQUNBLFVBQUE7O0VBRUEsTUFBQSxVQUFBLE9BQUEsVUFBQSxRQUFBO0dBQ0EsTUFBQSxjQUFBLFNBQUEsR0FBQTtJQUNBLE1BQUEsT0FBQTtLQUNBLEtBQUEsU0FBQSxJQUFBO01BQ0EsNEJBQUEsS0FBQTtPQUNBLE1BQUEsTUFBQSxnQkFBQTtPQUNBLFNBQUEsSUFBQTtLQUNBLE9BQUEsS0FBQSxzQkFBQTtNQUNBLEtBQUEsVUFBQSxJQUFBLFVBQUE7OztNQUdBLE1BQUEsY0FBQSxTQUFBLEtBQUE7VUFDQSxNQUFBLE9BQUE7bUJBQ0EsS0FBQSxTQUFBLFNBQUE7V0FDQSw0QkFBQSxRQUFBO3NCQUNBLE1BQUEsTUFBQSxlQUFBO3FCQUNBLFNBQUEsTUFBQTtzQkFDQSxRQUFBLElBQUE7OztHQUdBLE1BQUEsZ0JBQUEsU0FBQSxRQUFBO0lBQ0EsTUFBQSxNQUFBLG1CQUFBOzs7R0FHQSxNQUFBLFlBQUEsU0FBQSxPQUFBO0lBQ0EsSUFBQSxXQUFBO0tBQ0EsU0FBQTtLQUNBLFNBQUEsT0FBQTtLQUNBLFVBQUEsT0FBQTs7SUFFQSxHQUFBLFFBQUEsWUFBQSxRQUFBO0tBQ0E7O1NBRUE7O0tBRUEsTUFBQSxVQUFBO01BQ0EsS0FBQSxVQUFBLFNBQUE7O09BRUEsNEJBQUEsUUFBQTtjQUNBLE1BQUEsY0FBQSxPQUFBO2NBQ0EsTUFBQSxNQUFBLGVBQUE7Y0FDQSxRQUFBLElBQUE7UUFDQSxVQUFBLE1BQUEsT0FBQTtjQUNBLFFBQUEsSUFBQTs7OztHQUlBLE1BQUEsZUFBQSxTQUFBLE9BQUE7O0lBRUEsSUFBQSxXQUFBO0tBQ0EsU0FBQTtLQUNBLFNBQUEsT0FBQTtLQUNBLFVBQUEsT0FBQTs7O0lBR0EsR0FBQSxRQUFBLFlBQUEsUUFBQTtLQUNBOztTQUVBO0lBQ0EsTUFBQSxhQUFBO01BQ0EsS0FBQSxVQUFBLFNBQUE7T0FDQSw0QkFBQSxLQUFBO2FBQ0EsTUFBQSxjQUFBLE9BQUE7YUFDQSxNQUFBLE1BQUEsZUFBQTthQUNBLFFBQUEsSUFBQTtRQUNBLFVBQUEsTUFBQSxPQUFBO2NBQ0EsUUFBQSxJQUFBOzs7O0dBSUEsTUFBQSxrQkFBQSxVQUFBO0lBQ0EsUUFBQSxJQUFBOztHQUVBLE1BQUEsaUJBQUEsU0FBQSxPQUFBO0lBQ0EsSUFBQSxTQUFBO0tBQ0EsU0FBQTtLQUNBLFNBQUEsT0FBQTtLQUNBLFVBQUEsT0FBQTs7O0lBR0EsTUFBQSxlQUFBO0tBQ0EsS0FBQSxTQUFBLFNBQUE7S0FDQSxRQUFBLElBQUE7O01BRUEsU0FBQSxJQUFBO0tBQ0EsNEJBQUEsS0FBQTs7OztHQUlBLE1BQUEsYUFBQSxTQUFBLFFBQUE7SUFDQSxJQUFBLFFBQUEsQ0FBQSxXQUFBLFFBQUEsUUFBQTtJQUNBLE1BQUEsTUFBQSxjQUFBOzs7R0FHQSxNQUFBLGVBQUEsU0FBQSxRQUFBOztJQUVBLElBQUEsUUFBQSxDQUFBLFdBQUEsUUFBQSxRQUFBO0lBQ0EsTUFBQSxNQUFBLGNBQUE7Ozs7OztBQU1BLFFBQUEsT0FBQTtDQUNBLFFBQUEsVUFBQSxDQUFBLFNBQUEsUUFBQSxNQUFBLEdBQUEsWUFBQTtDQUNBLEtBQUEsT0FBQSxTQUFBLE1BQUE7RUFDQSxJQUFBLFdBQUEsR0FBQTtFQUNBLE1BQUEsS0FBQSxXQUFBLFdBQUEsa0JBQUE7R0FDQSxRQUFBLFNBQUEsSUFBQTtHQUNBLFNBQUEsUUFBQTs7R0FFQSxNQUFBLFNBQUEsS0FBQTtHQUNBLFNBQUEsT0FBQTs7RUFFQSxPQUFBLFNBQUE7O0NBRUEsT0FBQTs7O0FDM1dBLFFBQUEsT0FBQTtLQUNBLFdBQUEsc0JBQUEsQ0FBQSxjQUFBLFVBQUEsV0FBQSxVQUFBLFlBQUEsUUFBQSxTQUFBOztRQUVBLEVBQUEsWUFBQTtZQUNBLElBQUEsU0FBQSxVQUFBO1lBQ0EsSUFBQSxPQUFBLENBQUEsU0FBQSxZQUFBLFNBQUEsUUFBQSxXQUFBLFVBQUEsYUFBQSxVQUFBLFdBQUEsT0FBQSxVQUFBLFNBQUEsVUFBQSxXQUFBLFVBQUEsV0FBQSxRQUFBLFNBQUEsTUFBQSxPQUFBO1lBQ0EsRUFBQSxhQUFBLE1BQUE7Z0JBQ0EsSUFBQTtnQkFDQSxNQUFBO2dCQUNBLE9BQUE7Z0JBQ0EsV0FBQTtvQkFDQSxrQkFBQSxVQUFBLElBQUEsSUFBQTs7d0JBRUEsSUFBQSxPQUFBLEtBQUE7NEJBQ0EsS0FBQSxLQUFBLEdBQUEsT0FBQSxPQUFBLE1BQUE7NEJBQ0EsS0FBQSxNQUFBLEtBQUE7NEJBQ0EsS0FBQSxPQUFBLEdBQUEsT0FBQTs0QkFDQSxPQUFBOzs7Ozs7OztRQVFBLE9BQUEsY0FBQSxVQUFBLFNBQUE7O1lBRUEsRUFBQSxtTEFBQSxTQUFBO1lBQ0EsRUFBQSxjQUFBLEdBQUE7O1lBRUEsUUFBQSxLQUFBO2lCQUNBLEtBQUEsVUFBQSxVQUFBO29CQUNBLFdBQUEsTUFBQTtvQkFDQSxPQUFBLFdBQUEsU0FBQTtvQkFDQSxJQUFBLElBQUEsRUFBQSxhQUFBLE1BQUE7b0JBQ0EsSUFBQSxFQUFBLFNBQUEsR0FBQTt3QkFDQSxFQUFBLGFBQUEsSUFBQTt3QkFDQSxFQUFBLGFBQUE7d0JBQ0EsRUFBQSxZQUFBLFFBQUE7NEJBQ0EsYUFBQSxFQUFBLFlBQUEsR0FBQTsyQkFDQTs7O21CQUdBOztRQUVBLElBQUEsYUFBQSxVQUFBLFNBQUE7WUFDQSxRQUFBO2lCQUNBLEtBQUEsVUFBQSxVQUFBOztvQkFFQSxPQUFBLFdBQUEsU0FBQTttQkFDQTs7UUFFQSxXQUFBLElBQUEsWUFBQTtZQUNBOztRQUVBLElBQUEsT0FBQSxZQUFBO1lBQ0E7O1FBRUE7OztBQzFEQSxRQUFBLE9BQUE7Q0FDQSxXQUFBLHNCQUFBLENBQUEsU0FBQSxXQUFBLE9BQUEsY0FBQSxVQUFBLE9BQUEsU0FBQSxLQUFBLFlBQUE7Q0FDQSxPQUFBLE9BQUEsVUFBQTs7Ozs7SUFLQSxPQUFBLGFBQUEsV0FBQTtRQUNBLElBQUEsT0FBQTtZQUNBLEdBQUEsV0FBQTtZQUNBLEtBQUEsV0FBQTs7T0FFQSxRQUFBLElBQUE7UUFDQSxTQUFBLFdBQUE7U0FDQSxLQUFBLFNBQUEsVUFBQTs7V0FFQTs7Ozs7SUFLQSxPQUFBOzs7Ozs7Ozs7Ozs7SUNsQkEsUUFBQSxPQUFBO0tBQ0EsV0FBQSxvQkFBQSxDQUFBLFVBQUEsZUFBQSxhQUFBLFFBQUEsZUFBQSxRQUFBLGVBQUEsU0FBQSxTQUFBLFFBQUEsYUFBQSxXQUFBLE1BQUEsYUFBQSxNQUFBLGFBQUEsT0FBQTtRQUNBLElBQUEsV0FBQSxPQUFBLFdBQUEsSUFBQSxhQUFBO1lBQ0EsS0FBQSxXQUFBLFNBQUE7OztRQUdBLFNBQUEsUUFBQSxLQUFBO1lBQ0EsTUFBQTtZQUNBLElBQUEsU0FBQSxnQ0FBQSxTQUFBO2dCQUNBLE9BQUEsS0FBQSxNQUFBLFNBQUE7Ozs7UUFJQSxHQUFBLGFBQUEsU0FBQTs7WUFFQSxNQUFBLElBQUEsV0FBQSxXQUFBLGtCQUFBLGFBQUE7YUFDQSxRQUFBLFNBQUEsT0FBQTs7Z0JBRUEsSUFBQSxXQUFBO2dCQUNBLFFBQUEsUUFBQSxNQUFBLFNBQUEsS0FBQTs7b0JBRUEsVUFBQSxLQUFBLEtBQUE7OztnQkFHQSxJQUFBLGdCQUFBLFVBQUEsS0FBQTs7Z0JBRUEsU0FBQSxTQUFBLEtBQUE7O29CQUVBLFNBQUEsYUFBQTtvQkFDQSxnQkFBQTs7OzthQUlBOztZQUVBLFNBQUEsU0FBQSxLQUFBO29CQUNBLEtBQUEsV0FBQTtvQkFDQSxTQUFBO29CQUNBLGdCQUFBOzs7OztRQUtBLFNBQUEseUJBQUEsU0FBQSxnQ0FBQSxRQUFBLFNBQUE7Ozs7UUFJQSxTQUFBLG9CQUFBLFNBQUEsVUFBQTs7OztRQUlBLFNBQUEsbUJBQUEsU0FBQSxnQkFBQTs7OztRQUlBLFNBQUEscUJBQUEsU0FBQSxNQUFBOzs7O1FBSUEsU0FBQSxpQkFBQSxTQUFBLFVBQUEsVUFBQTs7OztRQUlBLFNBQUEsZ0JBQUEsU0FBQSxVQUFBOzs7O1FBSUEsU0FBQSxnQkFBQSxTQUFBLFVBQUEsVUFBQSxRQUFBLFNBQUE7WUFDQSxXQUFBLE1BQUE7Ozs7O1FBS0EsU0FBQSxjQUFBLFNBQUEsVUFBQSxVQUFBLFFBQUEsU0FBQTs7Ozs7OztRQU9BLFNBQUEsZUFBQSxTQUFBLFVBQUEsVUFBQSxRQUFBLFNBQUE7Ozs7UUFJQSxTQUFBLGlCQUFBLFNBQUEsVUFBQSxVQUFBLFFBQUEsU0FBQTtZQUNBLFdBQUEsTUFBQTs7OztRQUlBLFNBQUEsZ0JBQUE7UUFDQTtVQUNBLE1BQUE7YUFDQSxLQUFBLFNBQUEsSUFBQTtjQUNBLE9BQUEsU0FBQTs7ZUFFQSxTQUFBLE1BQUE7O2dCQUVBLEdBQUEsVUFBQTtvQkFDQSxRQUFBLElBQUE7OzthQUdBLFFBQUEsWUFBQTtnQkFDQSxPQUFBLGNBQUE7Ozs7UUFJQSxHQUFBLFVBQUE7WUFDQSxRQUFBLEtBQUEsWUFBQTs7O0FDOUdBLFFBQUEsT0FBQTtDQUNBLFFBQUEsZUFBQSxDQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREEsUUFBQSxPQUFBO0NBQ0EsV0FBQSxtQkFBQSxDQUFBLFFBQUEsU0FBQSxhQUFBLFdBQUEsU0FBQSxNQUFBLE9BQUEsV0FBQSxTQUFBO0VBQ0EsT0FBQSxTQUFBLFdBQUE7O0lBRUEsTUFBQSxLQUFBLFdBQUEsVUFBQTtLQUNBLFFBQUEsU0FBQSxNQUFBOztRQUVBLFFBQUEsU0FBQSxPQUFBO09BQ0EsTUFBQSxTQUFBLEtBQUE7Ozs7OztBQ1JBLFFBQUEsT0FBQTtHQUNBLFdBQUEsa0JBQUEsQ0FBQSxRQUFBLFVBQUEsY0FBQSxhQUFBLFVBQUEsTUFBQSxRQUFBLFlBQUEsV0FBQTtJQUNBLE9BQUEsUUFBQTtJQUNBLE9BQUEsZ0JBQUE7SUFDQSxPQUFBLGNBQUEsbUJBQUE7SUFDQSxJQUFBLE9BQUEsWUFBQTtNQUNBLEtBQUE7U0FDQSxLQUFBLFVBQUEsTUFBQTs7VUFFQSxPQUFBLE9BQUE7O1dBRUE7O0lBRUEsSUFBQSxlQUFBLFlBQUE7TUFDQSxPQUFBLFdBQUE7TUFDQSxLQUFBO1NBQ0EsS0FBQSxVQUFBLEtBQUE7VUFDQSxPQUFBLFlBQUE7VUFDQSxJQUFBLE9BQUEsSUFBQTtVQUNBLElBQUEsT0FBQSxJQUFBOztVQUVBLElBQUEsU0FBQSxLQUFBLFNBQUEsTUFBQTs7WUFFQSxPQUFBLFFBQUE7WUFDQSxPQUFBLFdBQUE7aUJBQ0EsSUFBQSxTQUFBLEtBQUEsU0FBQSxNQUFBO1lBQ0EsT0FBQSxRQUFBO1lBQ0EsT0FBQSxXQUFBO2lCQUNBLElBQUEsU0FBQSxLQUFBLFNBQUEsTUFBQTtZQUNBLE9BQUEsUUFBQTtZQUNBLE9BQUEsV0FBQTtpQkFDQTs7WUFFQSxPQUFBLFFBQUE7WUFDQSxPQUFBLFdBQUE7OztXQUdBOztJQUVBLE9BQUEsU0FBQSxVQUFBLFNBQUE7TUFDQSxLQUFBLE9BQUEsU0FBQSxLQUFBLFVBQUEsVUFBQTtRQUNBLEdBQUEsU0FBQSxXQUFBO2FBQ0EsRUFBQSxPQUFBLDZDQUFBO1NBQ0EsVUFBQSxHQUFBOzs7O0lBSUE7SUFDQTtJQUNBLFdBQUEsSUFBQSxpQkFBQSxZQUFBO01BQ0E7OztBQ2xEQSxDQUFBLFlBQUE7SUFDQTs7SUFFQSxRQUFBLE9BQUEsU0FBQTs7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QSxXQUFBOztVQUVBLEdBQUEsSUFBQSxDQUFBLE1BQUEsZUFBQSxLQUFBLFNBQUEsUUFBQTtZQUNBLElBQUEsTUFBQTtZQUNBLFFBQUEsUUFBQSxRQUFBLFNBQUEsVUFBQTtjQUNBLElBQUEsS0FBQSxTQUFBOzs7WUFHQSxPQUFBO2FBQ0EsS0FBQSxTQUFBLFdBQUE7OztZQUdBLE9BQUEsUUFBQSxVQUFBOztTQUVBLEVBQUEsWUFBQSxNQUFBO1lBQ0EsSUFBQTtZQUNBLEtBQUEsQ0FBQSxTQUFBLE9BQUE7Ozs7Ozs7QUMzQkEsUUFBQSxPQUFBO0NBQ0EsV0FBQSw0QkFBQSxTQUFBLFFBQUE7O0VBRUEsT0FBQSxPQUFBLFdBQUE7SUFDQSxPQUFBLFlBQUE7O0VBRUEsT0FBQSxLQUFBLFdBQUE7SUFDQSxPQUFBLFlBQUE7OztFQUdBLE9BQUEsU0FBQSxXQUFBO0lBQ0EsT0FBQSxZQUFBOzs7OztBQUtBLFFBQUEsT0FBQTtDQUNBLFdBQUEsMkJBQUEsU0FBQSxRQUFBOztFQUVBLE9BQUEsT0FBQSxXQUFBO0lBQ0EsT0FBQSxZQUFBOztFQUVBLE9BQUEsS0FBQSxXQUFBO0lBQ0EsT0FBQSxZQUFBOzs7RUFHQSxPQUFBLFNBQUEsV0FBQTtJQUNBLE9BQUEsWUFBQTs7OztBQUlBIiwiZmlsZSI6ImFubm90YXRlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gYW5ndWxhci1maWxlLXVwbG9hZCB2Mi4zLjRcbiBodHRwczovL2dpdGh1Yi5jb20vbmVydmdoL2FuZ3VsYXItZmlsZS11cGxvYWRcbiovXG5cbihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImFuZ3VsYXItZmlsZS11cGxvYWRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiYW5ndWxhci1maWxlLXVwbG9hZFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9LFxuLyoqKioqKi8gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bG9hZGVkOiBmYWxzZVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0dmFyIF9jb25maWcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXHRcblx0dmFyIF9jb25maWcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29uZmlnKTtcblx0XG5cdHZhciBfb3B0aW9ucyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cdFxuXHR2YXIgX29wdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb3B0aW9ucyk7XG5cdFxuXHR2YXIgX0ZpbGVVcGxvYWRlciA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cdFxuXHR2YXIgX0ZpbGVVcGxvYWRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GaWxlVXBsb2FkZXIpO1xuXHRcblx0dmFyIF9GaWxlTGlrZU9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cdFxuXHR2YXIgX0ZpbGVMaWtlT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZpbGVMaWtlT2JqZWN0KTtcblx0XG5cdHZhciBfRmlsZUl0ZW0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXHRcblx0dmFyIF9GaWxlSXRlbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GaWxlSXRlbSk7XG5cdFxuXHR2YXIgX0ZpbGVEaXJlY3RpdmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXHRcblx0dmFyIF9GaWxlRGlyZWN0aXZlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZpbGVEaXJlY3RpdmUpO1xuXHRcblx0dmFyIF9GaWxlU2VsZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcblx0XG5cdHZhciBfRmlsZVNlbGVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GaWxlU2VsZWN0KTtcblx0XG5cdHZhciBfRmlsZURyb3AgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xuXHRcblx0dmFyIF9GaWxlRHJvcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GaWxlRHJvcCk7XG5cdFxuXHR2YXIgX0ZpbGVPdmVyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcblx0XG5cdHZhciBfRmlsZU92ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRmlsZU92ZXIpO1xuXHRcblx0dmFyIF9GaWxlU2VsZWN0MyA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xuXHRcblx0dmFyIF9GaWxlU2VsZWN0NCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZpbGVTZWxlY3QzKTtcblx0XG5cdHZhciBfRmlsZURyb3AzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG5cdFxuXHR2YXIgX0ZpbGVEcm9wNCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZpbGVEcm9wMyk7XG5cdFxuXHR2YXIgX0ZpbGVPdmVyMyA9IF9fd2VicGFja19yZXF1aXJlX18oMTIpO1xuXHRcblx0dmFyIF9GaWxlT3ZlcjQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GaWxlT3ZlcjMpO1xuXHRcblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblx0XG5cdGFuZ3VsYXIubW9kdWxlKF9jb25maWcyLmRlZmF1bHQubmFtZSwgW10pLnZhbHVlKCdmaWxlVXBsb2FkZXJPcHRpb25zJywgX29wdGlvbnMyLmRlZmF1bHQpLmZhY3RvcnkoJ0ZpbGVVcGxvYWRlcicsIF9GaWxlVXBsb2FkZXIyLmRlZmF1bHQpLmZhY3RvcnkoJ0ZpbGVMaWtlT2JqZWN0JywgX0ZpbGVMaWtlT2JqZWN0Mi5kZWZhdWx0KS5mYWN0b3J5KCdGaWxlSXRlbScsIF9GaWxlSXRlbTIuZGVmYXVsdCkuZmFjdG9yeSgnRmlsZURpcmVjdGl2ZScsIF9GaWxlRGlyZWN0aXZlMi5kZWZhdWx0KS5mYWN0b3J5KCdGaWxlU2VsZWN0JywgX0ZpbGVTZWxlY3QyLmRlZmF1bHQpLmZhY3RvcnkoJ0ZpbGVEcm9wJywgX0ZpbGVEcm9wMi5kZWZhdWx0KS5mYWN0b3J5KCdGaWxlT3ZlcicsIF9GaWxlT3ZlcjIuZGVmYXVsdCkuZGlyZWN0aXZlKCdudkZpbGVTZWxlY3QnLCBfRmlsZVNlbGVjdDQuZGVmYXVsdCkuZGlyZWN0aXZlKCdudkZpbGVEcm9wJywgX0ZpbGVEcm9wNC5kZWZhdWx0KS5kaXJlY3RpdmUoJ252RmlsZU92ZXInLCBfRmlsZU92ZXI0LmRlZmF1bHQpLnJ1bihbJ0ZpbGVVcGxvYWRlcicsICdGaWxlTGlrZU9iamVjdCcsICdGaWxlSXRlbScsICdGaWxlRGlyZWN0aXZlJywgJ0ZpbGVTZWxlY3QnLCAnRmlsZURyb3AnLCAnRmlsZU92ZXInLCBmdW5jdGlvbiAoRmlsZVVwbG9hZGVyLCBGaWxlTGlrZU9iamVjdCwgRmlsZUl0ZW0sIEZpbGVEaXJlY3RpdmUsIEZpbGVTZWxlY3QsIEZpbGVEcm9wLCBGaWxlT3Zlcikge1xuXHQgICAgLy8gb25seSBmb3IgY29tcGF0aWJpbGl0eVxuXHQgICAgRmlsZVVwbG9hZGVyLkZpbGVMaWtlT2JqZWN0ID0gRmlsZUxpa2VPYmplY3Q7XG5cdCAgICBGaWxlVXBsb2FkZXIuRmlsZUl0ZW0gPSBGaWxlSXRlbTtcblx0ICAgIEZpbGVVcGxvYWRlci5GaWxlRGlyZWN0aXZlID0gRmlsZURpcmVjdGl2ZTtcblx0ICAgIEZpbGVVcGxvYWRlci5GaWxlU2VsZWN0ID0gRmlsZVNlbGVjdDtcblx0ICAgIEZpbGVVcGxvYWRlci5GaWxlRHJvcCA9IEZpbGVEcm9wO1xuXHQgICAgRmlsZVVwbG9hZGVyLkZpbGVPdmVyID0gRmlsZU92ZXI7XG5cdH1dKTtcblxuLyoqKi8gfSxcbi8qIDEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0ge1xuXHRcdFwibmFtZVwiOiBcImFuZ3VsYXJGaWxlVXBsb2FkXCJcblx0fTtcblxuLyoqKi8gfSxcbi8qIDIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGV4cG9ydHMuZGVmYXVsdCA9IHtcblx0ICAgIHVybDogJy8nLFxuXHQgICAgYWxpYXM6ICdmaWxlJyxcblx0ICAgIGhlYWRlcnM6IHsnWC1DU1JGLVRPS0VOJzogJCgnbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpLmF0dHIoJ2NvbnRlbnQnKX0sXG5cdCAgICBxdWV1ZTogW10sXG5cdCAgICBwcm9ncmVzczogMCxcblx0ICAgIGF1dG9VcGxvYWQ6IGZhbHNlLFxuXHQgICAgcmVtb3ZlQWZ0ZXJVcGxvYWQ6IGZhbHNlLFxuXHQgICAgbWV0aG9kOiAnUE9TVCcsXG5cdCAgICBmaWx0ZXJzOiBbXSxcblx0ICAgIGZvcm1EYXRhOiBbXSxcblx0ICAgIHF1ZXVlTGltaXQ6IE51bWJlci5NQVhfVkFMVUUsXG5cdCAgICB3aXRoQ3JlZGVudGlhbHM6IGZhbHNlLFxuXHQgICAgZGlzYWJsZU11bHRpcGFydDogZmFsc2Vcblx0fTtcblxuLyoqKi8gfSxcbi8qIDMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGV4cG9ydHMuZGVmYXVsdCA9IF9faWRlbnRpdHk7XG5cdFxuXHR2YXIgX2NvbmZpZyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cdFxuXHR2YXIgX2NvbmZpZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb25maWcpO1xuXHRcblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblx0XG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cdFxuXHR2YXIgX2FuZ3VsYXIgPSBhbmd1bGFyO1xuXHR2YXIgY29weSA9IF9hbmd1bGFyLmNvcHk7XG5cdHZhciBleHRlbmQgPSBfYW5ndWxhci5leHRlbmQ7XG5cdHZhciBmb3JFYWNoID0gX2FuZ3VsYXIuZm9yRWFjaDtcblx0dmFyIGlzT2JqZWN0ID0gX2FuZ3VsYXIuaXNPYmplY3Q7XG5cdHZhciBpc051bWJlciA9IF9hbmd1bGFyLmlzTnVtYmVyO1xuXHR2YXIgaXNEZWZpbmVkID0gX2FuZ3VsYXIuaXNEZWZpbmVkO1xuXHR2YXIgaXNBcnJheSA9IF9hbmd1bGFyLmlzQXJyYXk7XG5cdHZhciBlbGVtZW50ID0gX2FuZ3VsYXIuZWxlbWVudDtcblx0ZnVuY3Rpb24gX19pZGVudGl0eShmaWxlVXBsb2FkZXJPcHRpb25zLCAkcm9vdFNjb3BlLCAkaHR0cCwgJHdpbmRvdywgJHRpbWVvdXQsIEZpbGVMaWtlT2JqZWN0LCBGaWxlSXRlbSkge1xuXHQgICAgdmFyIEZpbGUgPSAkd2luZG93LkZpbGU7XG5cdCAgICB2YXIgRm9ybURhdGEgPSAkd2luZG93LkZvcm1EYXRhO1xuXHRcblx0ICAgIHZhciBGaWxlVXBsb2FkZXIgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgLyoqKioqKioqKioqKioqKioqKioqKipcblx0ICAgICAgICAgKiBQVUJMSUNcblx0ICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKi9cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEZpbGVVcGxvYWRlclxuXHQgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cblx0ICAgICAgICAgKiBAY29uc3RydWN0b3Jcblx0ICAgICAgICAgKi9cblx0XG5cdCAgICAgICAgZnVuY3Rpb24gRmlsZVVwbG9hZGVyKG9wdGlvbnMpIHtcblx0ICAgICAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZpbGVVcGxvYWRlcik7XG5cdFxuXHQgICAgICAgICAgICB2YXIgc2V0dGluZ3MgPSBjb3B5KGZpbGVVcGxvYWRlck9wdGlvbnMpO1xuXHRcblx0ICAgICAgICAgICAgZXh0ZW5kKHRoaXMsIHNldHRpbmdzLCBvcHRpb25zLCB7XG5cdCAgICAgICAgICAgICAgICBpc1VwbG9hZGluZzogZmFsc2UsXG5cdCAgICAgICAgICAgICAgICBfbmV4dEluZGV4OiAwLFxuXHQgICAgICAgICAgICAgICAgX2ZhaWxGaWx0ZXJJbmRleDogLTEsXG5cdCAgICAgICAgICAgICAgICBfZGlyZWN0aXZlczogeyBzZWxlY3Q6IFtdLCBkcm9wOiBbXSwgb3ZlcjogW10gfVxuXHQgICAgICAgICAgICB9KTtcblx0XG5cdCAgICAgICAgICAgIC8vIGFkZCBkZWZhdWx0IGZpbHRlcnNcblx0ICAgICAgICAgICAgdGhpcy5maWx0ZXJzLnVuc2hpZnQoeyBuYW1lOiAncXVldWVMaW1pdCcsIGZuOiB0aGlzLl9xdWV1ZUxpbWl0RmlsdGVyIH0pO1xuXHQgICAgICAgICAgICB0aGlzLmZpbHRlcnMudW5zaGlmdCh7IG5hbWU6ICdmb2xkZXInLCBmbjogdGhpcy5fZm9sZGVyRmlsdGVyIH0pO1xuXHQgICAgICAgIH1cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBBZGRzIGl0ZW1zIHRvIHRoZSBxdWV1ZVxuXHQgICAgICAgICAqIEBwYXJhbSB7RmlsZXxIVE1MSW5wdXRFbGVtZW50fE9iamVjdHxGaWxlTGlzdHxBcnJheTxPYmplY3Q+fSBmaWxlc1xuXHQgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cblx0ICAgICAgICAgKiBAcGFyYW0ge0FycmF5PEZ1bmN0aW9uPnxTdHJpbmd9IGZpbHRlcnNcblx0ICAgICAgICAgKi9cblx0XG5cdFxuXHQgICAgICAgIEZpbGVVcGxvYWRlci5wcm90b3R5cGUuYWRkVG9RdWV1ZSA9IGZ1bmN0aW9uIGFkZFRvUXVldWUoZmlsZXMsIG9wdGlvbnMsIGZpbHRlcnMpIHtcblx0ICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblx0XG5cdCAgICAgICAgICAgIHZhciBsaXN0ID0gdGhpcy5pc0FycmF5TGlrZU9iamVjdChmaWxlcykgPyBmaWxlcyA6IFtmaWxlc107XG5cdCAgICAgICAgICAgIHZhciBhcnJheU9mRmlsdGVycyA9IHRoaXMuX2dldEZpbHRlcnMoZmlsdGVycyk7XG5cdCAgICAgICAgICAgIHZhciBjb3VudCA9IHRoaXMucXVldWUubGVuZ3RoO1xuXHQgICAgICAgICAgICB2YXIgYWRkZWRGaWxlSXRlbXMgPSBbXTtcblx0XG5cdCAgICAgICAgICAgIGZvckVhY2gobGlzdCwgZnVuY3Rpb24gKHNvbWUgLyp7RmlsZXxIVE1MSW5wdXRFbGVtZW50fE9iamVjdH0qLykge1xuXHQgICAgICAgICAgICAgICAgdmFyIHRlbXAgPSBuZXcgRmlsZUxpa2VPYmplY3Qoc29tZSk7XG5cdFxuXHQgICAgICAgICAgICAgICAgaWYgKF90aGlzLl9pc1ZhbGlkRmlsZSh0ZW1wLCBhcnJheU9mRmlsdGVycywgb3B0aW9ucykpIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZmlsZUl0ZW0gPSBuZXcgRmlsZUl0ZW0oX3RoaXMsIHNvbWUsIG9wdGlvbnMpO1xuXHQgICAgICAgICAgICAgICAgICAgIGFkZGVkRmlsZUl0ZW1zLnB1c2goZmlsZUl0ZW0pO1xuXHQgICAgICAgICAgICAgICAgICAgIF90aGlzLnF1ZXVlLnB1c2goZmlsZUl0ZW0pO1xuXHQgICAgICAgICAgICAgICAgICAgIF90aGlzLl9vbkFmdGVyQWRkaW5nRmlsZShmaWxlSXRlbSk7XG5cdCAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBmaWx0ZXIgPSBhcnJheU9mRmlsdGVyc1tfdGhpcy5fZmFpbEZpbHRlckluZGV4XTtcblx0ICAgICAgICAgICAgICAgICAgICBfdGhpcy5fb25XaGVuQWRkaW5nRmlsZUZhaWxlZCh0ZW1wLCBmaWx0ZXIsIG9wdGlvbnMpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9KTtcblx0XG5cdCAgICAgICAgICAgIGlmICh0aGlzLnF1ZXVlLmxlbmd0aCAhPT0gY291bnQpIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuX29uQWZ0ZXJBZGRpbmdBbGwoYWRkZWRGaWxlSXRlbXMpO1xuXHQgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzcyA9IHRoaXMuX2dldFRvdGFsUHJvZ3Jlc3MoKTtcblx0ICAgICAgICAgICAgfVxuXHRcblx0ICAgICAgICAgICAgdGhpcy5fcmVuZGVyKCk7XG5cdCAgICAgICAgICAgIGlmICh0aGlzLmF1dG9VcGxvYWQpIHRoaXMudXBsb2FkQWxsKCk7XG5cdCAgICAgICAgfTtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBSZW1vdmUgaXRlbXMgZnJvbSB0aGUgcXVldWUuIFJlbW92ZSBsYXN0OiBpbmRleCA9IC0xXG5cdCAgICAgICAgICogQHBhcmFtIHtGaWxlSXRlbXxOdW1iZXJ9IHZhbHVlXG5cdCAgICAgICAgICovXG5cdFxuXHRcblx0ICAgICAgICBGaWxlVXBsb2FkZXIucHJvdG90eXBlLnJlbW92ZUZyb21RdWV1ZSA9IGZ1bmN0aW9uIHJlbW92ZUZyb21RdWV1ZSh2YWx1ZSkge1xuXHQgICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdldEluZGV4T2ZJdGVtKHZhbHVlKTtcblx0ICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLnF1ZXVlW2luZGV4XTtcblx0ICAgICAgICAgICAgaWYgKGl0ZW0uaXNVcGxvYWRpbmcpIGl0ZW0uY2FuY2VsKCk7XG5cdCAgICAgICAgICAgIHRoaXMucXVldWUuc3BsaWNlKGluZGV4LCAxKTtcblx0ICAgICAgICAgICAgaXRlbS5fZGVzdHJveSgpO1xuXHQgICAgICAgICAgICB0aGlzLnByb2dyZXNzID0gdGhpcy5fZ2V0VG90YWxQcm9ncmVzcygpO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ2xlYXJzIHRoZSBxdWV1ZVxuXHQgICAgICAgICAqL1xuXHRcblx0XG5cdCAgICAgICAgRmlsZVVwbG9hZGVyLnByb3RvdHlwZS5jbGVhclF1ZXVlID0gZnVuY3Rpb24gY2xlYXJRdWV1ZSgpIHtcblx0ICAgICAgICAgICAgd2hpbGUgKHRoaXMucXVldWUubGVuZ3RoKSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLnF1ZXVlWzBdLnJlbW92ZSgpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogVXBsb2FkcyBhIGl0ZW0gZnJvbSB0aGUgcXVldWVcblx0ICAgICAgICAgKiBAcGFyYW0ge0ZpbGVJdGVtfE51bWJlcn0gdmFsdWVcblx0ICAgICAgICAgKi9cblx0XG5cdFxuXHQgICAgICAgIEZpbGVVcGxvYWRlci5wcm90b3R5cGUudXBsb2FkSXRlbSA9IGZ1bmN0aW9uIHVwbG9hZEl0ZW0odmFsdWUpIHtcblx0ICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZXRJbmRleE9mSXRlbSh2YWx1ZSk7XG5cdCAgICAgICAgICAgIHZhciBpdGVtID0gdGhpcy5xdWV1ZVtpbmRleF07XG5cdCAgICAgICAgICAgIHZhciB0cmFuc3BvcnQgPSB0aGlzLmlzSFRNTDUgPyAnX3hoclRyYW5zcG9ydCcgOiAnX2lmcmFtZVRyYW5zcG9ydCc7XG5cdFxuXHQgICAgICAgICAgICBpdGVtLl9wcmVwYXJlVG9VcGxvYWRpbmcoKTtcblx0ICAgICAgICAgICAgaWYgKHRoaXMuaXNVcGxvYWRpbmcpIHJldHVybjtcblx0XG5cdCAgICAgICAgICAgIHRoaXMuX29uQmVmb3JlVXBsb2FkSXRlbShpdGVtKTtcblx0ICAgICAgICAgICAgaWYgKGl0ZW0uaXNDYW5jZWwpIHJldHVybjtcblx0XG5cdCAgICAgICAgICAgIGl0ZW0uaXNVcGxvYWRpbmcgPSB0cnVlO1xuXHQgICAgICAgICAgICB0aGlzLmlzVXBsb2FkaW5nID0gdHJ1ZTtcblx0ICAgICAgICAgICAgdGhpc1t0cmFuc3BvcnRdKGl0ZW0pO1xuXHQgICAgICAgICAgICB0aGlzLl9yZW5kZXIoKTtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENhbmNlbHMgdXBsb2FkaW5nIG9mIGl0ZW0gZnJvbSB0aGUgcXVldWVcblx0ICAgICAgICAgKiBAcGFyYW0ge0ZpbGVJdGVtfE51bWJlcn0gdmFsdWVcblx0ICAgICAgICAgKi9cblx0XG5cdFxuXHQgICAgICAgIEZpbGVVcGxvYWRlci5wcm90b3R5cGUuY2FuY2VsSXRlbSA9IGZ1bmN0aW9uIGNhbmNlbEl0ZW0odmFsdWUpIHtcblx0ICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cdFxuXHQgICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdldEluZGV4T2ZJdGVtKHZhbHVlKTtcblx0ICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLnF1ZXVlW2luZGV4XTtcblx0ICAgICAgICAgICAgdmFyIHByb3AgPSB0aGlzLmlzSFRNTDUgPyAnX3hocicgOiAnX2Zvcm0nO1xuXHQgICAgICAgICAgICBpZiAoIWl0ZW0pIHJldHVybjtcblx0ICAgICAgICAgICAgaXRlbS5pc0NhbmNlbCA9IHRydWU7XG5cdCAgICAgICAgICAgIGlmIChpdGVtLmlzVXBsb2FkaW5nKSB7XG5cdCAgICAgICAgICAgICAgICAvLyBJdCB3aWxsIGNhbGwgdGhpcy5fb25DYW5jZWxJdGVtKCkgJiB0aGlzLl9vbkNvbXBsZXRlSXRlbSgpIGFzeW5jaHJvbm91c2x5XG5cdCAgICAgICAgICAgICAgICBpdGVtW3Byb3BdLmFib3J0KCk7XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBkdW1teSA9IFt1bmRlZmluZWQsIDAsIHt9XTtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgb25OZXh0VGljayA9IGZ1bmN0aW9uIG9uTmV4dFRpY2soKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5fb25DYW5jZWxJdGVtLmFwcGx5KF90aGlzMiwgW2l0ZW1dLmNvbmNhdChkdW1teSkpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIuX29uQ29tcGxldGVJdGVtLmFwcGx5KF90aGlzMiwgW2l0ZW1dLmNvbmNhdChkdW1teSkpO1xuXHQgICAgICAgICAgICAgICAgICAgIH07XG5cdCAgICAgICAgICAgICAgICAgICAgJHRpbWVvdXQob25OZXh0VGljayk7IC8vIFRyaWdnZXIgY2FsbGJhY2tzIGFzeW5jaHJvbm91c2x5IChzZXRJbW1lZGlhdGUgZW11bGF0aW9uKVxuXHQgICAgICAgICAgICAgICAgfSkoKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH07XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogVXBsb2FkcyBhbGwgbm90IHVwbG9hZGVkIGl0ZW1zIG9mIHF1ZXVlXG5cdCAgICAgICAgICovXG5cdFxuXHRcblx0ICAgICAgICBGaWxlVXBsb2FkZXIucHJvdG90eXBlLnVwbG9hZEFsbCA9IGZ1bmN0aW9uIHVwbG9hZEFsbCgpIHtcblx0ICAgICAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5nZXROb3RVcGxvYWRlZEl0ZW1zKCkuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gIWl0ZW0uaXNVcGxvYWRpbmc7XG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgICAgICBpZiAoIWl0ZW1zLmxlbmd0aCkgcmV0dXJuO1xuXHRcblx0ICAgICAgICAgICAgZm9yRWFjaChpdGVtcywgZnVuY3Rpb24gKGl0ZW0pIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLl9wcmVwYXJlVG9VcGxvYWRpbmcoKTtcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgICAgIGl0ZW1zWzBdLnVwbG9hZCgpO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ2FuY2VscyBhbGwgdXBsb2Fkc1xuXHQgICAgICAgICAqL1xuXHRcblx0XG5cdCAgICAgICAgRmlsZVVwbG9hZGVyLnByb3RvdHlwZS5jYW5jZWxBbGwgPSBmdW5jdGlvbiBjYW5jZWxBbGwoKSB7XG5cdCAgICAgICAgICAgIHZhciBpdGVtcyA9IHRoaXMuZ2V0Tm90VXBsb2FkZWRJdGVtcygpO1xuXHQgICAgICAgICAgICBmb3JFYWNoKGl0ZW1zLCBmdW5jdGlvbiAoaXRlbSkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uY2FuY2VsKCk7XG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUmV0dXJucyBcInRydWVcIiBpZiB2YWx1ZSBhbiBpbnN0YW5jZSBvZiBGaWxlXG5cdCAgICAgICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuXHQgICAgICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuXHQgICAgICAgICAqIEBwcml2YXRlXG5cdCAgICAgICAgICovXG5cdFxuXHRcblx0ICAgICAgICBGaWxlVXBsb2FkZXIucHJvdG90eXBlLmlzRmlsZSA9IGZ1bmN0aW9uIGlzRmlsZSh2YWx1ZSkge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5pc0ZpbGUodmFsdWUpO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUmV0dXJucyBcInRydWVcIiBpZiB2YWx1ZSBhbiBpbnN0YW5jZSBvZiBGaWxlTGlrZU9iamVjdFxuXHQgICAgICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcblx0ICAgICAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cblx0ICAgICAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICAgICAqL1xuXHRcblx0XG5cdCAgICAgICAgRmlsZVVwbG9hZGVyLnByb3RvdHlwZS5pc0ZpbGVMaWtlT2JqZWN0ID0gZnVuY3Rpb24gaXNGaWxlTGlrZU9iamVjdCh2YWx1ZSkge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5pc0ZpbGVMaWtlT2JqZWN0KHZhbHVlKTtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFJldHVybnMgXCJ0cnVlXCIgaWYgdmFsdWUgaXMgYXJyYXkgbGlrZSBvYmplY3Rcblx0ICAgICAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG5cdCAgICAgICAgICogQHJldHVybnMge0Jvb2xlYW59XG5cdCAgICAgICAgICovXG5cdFxuXHRcblx0ICAgICAgICBGaWxlVXBsb2FkZXIucHJvdG90eXBlLmlzQXJyYXlMaWtlT2JqZWN0ID0gZnVuY3Rpb24gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IuaXNBcnJheUxpa2VPYmplY3QodmFsdWUpO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUmV0dXJucyBhIGluZGV4IG9mIGl0ZW0gZnJvbSB0aGUgcXVldWVcblx0ICAgICAgICAgKiBAcGFyYW0ge0l0ZW18TnVtYmVyfSB2YWx1ZVxuXHQgICAgICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG5cdCAgICAgICAgICovXG5cdFxuXHRcblx0ICAgICAgICBGaWxlVXBsb2FkZXIucHJvdG90eXBlLmdldEluZGV4T2ZJdGVtID0gZnVuY3Rpb24gZ2V0SW5kZXhPZkl0ZW0odmFsdWUpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGlzTnVtYmVyKHZhbHVlKSA/IHZhbHVlIDogdGhpcy5xdWV1ZS5pbmRleE9mKHZhbHVlKTtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFJldHVybnMgbm90IHVwbG9hZGVkIGl0ZW1zXG5cdCAgICAgICAgICogQHJldHVybnMge0FycmF5fVxuXHQgICAgICAgICAqL1xuXHRcblx0XG5cdCAgICAgICAgRmlsZVVwbG9hZGVyLnByb3RvdHlwZS5nZXROb3RVcGxvYWRlZEl0ZW1zID0gZnVuY3Rpb24gZ2V0Tm90VXBsb2FkZWRJdGVtcygpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMucXVldWUuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gIWl0ZW0uaXNVcGxvYWRlZDtcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgfTtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBSZXR1cm5zIGl0ZW1zIHJlYWR5IGZvciB1cGxvYWRcblx0ICAgICAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG5cdCAgICAgICAgICovXG5cdFxuXHRcblx0ICAgICAgICBGaWxlVXBsb2FkZXIucHJvdG90eXBlLmdldFJlYWR5SXRlbXMgPSBmdW5jdGlvbiBnZXRSZWFkeUl0ZW1zKCkge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5xdWV1ZS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmlzUmVhZHkgJiYgIWl0ZW0uaXNVcGxvYWRpbmc7XG5cdCAgICAgICAgICAgIH0pLnNvcnQoZnVuY3Rpb24gKGl0ZW0xLCBpdGVtMikge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0xLmluZGV4IC0gaXRlbTIuaW5kZXg7XG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogRGVzdHJveXMgaW5zdGFuY2Ugb2YgRmlsZVVwbG9hZGVyXG5cdCAgICAgICAgICovXG5cdFxuXHRcblx0ICAgICAgICBGaWxlVXBsb2FkZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95KCkge1xuXHQgICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblx0XG5cdCAgICAgICAgICAgIGZvckVhY2godGhpcy5fZGlyZWN0aXZlcywgZnVuY3Rpb24gKGtleSkge1xuXHQgICAgICAgICAgICAgICAgZm9yRWFjaChfdGhpczMuX2RpcmVjdGl2ZXNba2V5XSwgZnVuY3Rpb24gKG9iamVjdCkge1xuXHQgICAgICAgICAgICAgICAgICAgIG9iamVjdC5kZXN0cm95KCk7XG5cdCAgICAgICAgICAgICAgICB9KTtcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgfTtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDYWxsYmFja1xuXHQgICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGZpbGVJdGVtc1xuXHQgICAgICAgICAqL1xuXHRcblx0XG5cdCAgICAgICAgRmlsZVVwbG9hZGVyLnByb3RvdHlwZS5vbkFmdGVyQWRkaW5nQWxsID0gZnVuY3Rpb24gb25BZnRlckFkZGluZ0FsbChmaWxlSXRlbXMpIHt9O1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENhbGxiYWNrXG5cdCAgICAgICAgICogQHBhcmFtIHtGaWxlSXRlbX0gZmlsZUl0ZW1cblx0ICAgICAgICAgKi9cblx0XG5cdFxuXHQgICAgICAgIEZpbGVVcGxvYWRlci5wcm90b3R5cGUub25BZnRlckFkZGluZ0ZpbGUgPSBmdW5jdGlvbiBvbkFmdGVyQWRkaW5nRmlsZShmaWxlSXRlbSkge307XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ2FsbGJhY2tcblx0ICAgICAgICAgKiBAcGFyYW0ge0ZpbGV8T2JqZWN0fSBpdGVtXG5cdCAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGZpbHRlclxuXHQgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG5cdCAgICAgICAgICovXG5cdFxuXHRcblx0ICAgICAgICBGaWxlVXBsb2FkZXIucHJvdG90eXBlLm9uV2hlbkFkZGluZ0ZpbGVGYWlsZWQgPSBmdW5jdGlvbiBvbldoZW5BZGRpbmdGaWxlRmFpbGVkKGl0ZW0sIGZpbHRlciwgb3B0aW9ucykge307XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ2FsbGJhY2tcblx0ICAgICAgICAgKiBAcGFyYW0ge0ZpbGVJdGVtfSBmaWxlSXRlbVxuXHQgICAgICAgICAqL1xuXHRcblx0XG5cdCAgICAgICAgRmlsZVVwbG9hZGVyLnByb3RvdHlwZS5vbkJlZm9yZVVwbG9hZEl0ZW0gPSBmdW5jdGlvbiBvbkJlZm9yZVVwbG9hZEl0ZW0oZmlsZUl0ZW0pIHt9O1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENhbGxiYWNrXG5cdCAgICAgICAgICogQHBhcmFtIHtGaWxlSXRlbX0gZmlsZUl0ZW1cblx0ICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gcHJvZ3Jlc3Ncblx0ICAgICAgICAgKi9cblx0XG5cdFxuXHQgICAgICAgIEZpbGVVcGxvYWRlci5wcm90b3R5cGUub25Qcm9ncmVzc0l0ZW0gPSBmdW5jdGlvbiBvblByb2dyZXNzSXRlbShmaWxlSXRlbSwgcHJvZ3Jlc3MpIHt9O1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENhbGxiYWNrXG5cdCAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IHByb2dyZXNzXG5cdCAgICAgICAgICovXG5cdFxuXHRcblx0ICAgICAgICBGaWxlVXBsb2FkZXIucHJvdG90eXBlLm9uUHJvZ3Jlc3NBbGwgPSBmdW5jdGlvbiBvblByb2dyZXNzQWxsKHByb2dyZXNzKSB7fTtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDYWxsYmFja1xuXHQgICAgICAgICAqIEBwYXJhbSB7RmlsZUl0ZW19IGl0ZW1cblx0ICAgICAgICAgKiBAcGFyYW0geyp9IHJlc3BvbnNlXG5cdCAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IHN0YXR1c1xuXHQgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBoZWFkZXJzXG5cdCAgICAgICAgICovXG5cdFxuXHRcblx0ICAgICAgICBGaWxlVXBsb2FkZXIucHJvdG90eXBlLm9uU3VjY2Vzc0l0ZW0gPSBmdW5jdGlvbiBvblN1Y2Nlc3NJdGVtKGl0ZW0sIHJlc3BvbnNlLCBzdGF0dXMsIGhlYWRlcnMpIHt9O1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENhbGxiYWNrXG5cdCAgICAgICAgICogQHBhcmFtIHtGaWxlSXRlbX0gaXRlbVxuXHQgICAgICAgICAqIEBwYXJhbSB7Kn0gcmVzcG9uc2Vcblx0ICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gc3RhdHVzXG5cdCAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGhlYWRlcnNcblx0ICAgICAgICAgKi9cblx0XG5cdFxuXHQgICAgICAgIEZpbGVVcGxvYWRlci5wcm90b3R5cGUub25FcnJvckl0ZW0gPSBmdW5jdGlvbiBvbkVycm9ySXRlbShpdGVtLCByZXNwb25zZSwgc3RhdHVzLCBoZWFkZXJzKSB7fTtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDYWxsYmFja1xuXHQgICAgICAgICAqIEBwYXJhbSB7RmlsZUl0ZW19IGl0ZW1cblx0ICAgICAgICAgKiBAcGFyYW0geyp9IHJlc3BvbnNlXG5cdCAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IHN0YXR1c1xuXHQgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBoZWFkZXJzXG5cdCAgICAgICAgICovXG5cdFxuXHRcblx0ICAgICAgICBGaWxlVXBsb2FkZXIucHJvdG90eXBlLm9uQ2FuY2VsSXRlbSA9IGZ1bmN0aW9uIG9uQ2FuY2VsSXRlbShpdGVtLCByZXNwb25zZSwgc3RhdHVzLCBoZWFkZXJzKSB7fTtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDYWxsYmFja1xuXHQgICAgICAgICAqIEBwYXJhbSB7RmlsZUl0ZW19IGl0ZW1cblx0ICAgICAgICAgKiBAcGFyYW0geyp9IHJlc3BvbnNlXG5cdCAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IHN0YXR1c1xuXHQgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBoZWFkZXJzXG5cdCAgICAgICAgICovXG5cdFxuXHRcblx0ICAgICAgICBGaWxlVXBsb2FkZXIucHJvdG90eXBlLm9uQ29tcGxldGVJdGVtID0gZnVuY3Rpb24gb25Db21wbGV0ZUl0ZW0oaXRlbSwgcmVzcG9uc2UsIHN0YXR1cywgaGVhZGVycykge307XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ2FsbGJhY2tcblx0ICAgICAgICAgKi9cblx0XG5cdFxuXHQgICAgICAgIEZpbGVVcGxvYWRlci5wcm90b3R5cGUub25Db21wbGV0ZUFsbCA9IGZ1bmN0aW9uIG9uQ29tcGxldGVBbGwoKSB7fTtcblx0ICAgICAgICAvKioqKioqKioqKioqKioqKioqKioqKlxuXHQgICAgICAgICAqIFBSSVZBVEVcblx0ICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKi9cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBSZXR1cm5zIHRoZSB0b3RhbCBwcm9ncmVzc1xuXHQgICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbdmFsdWVdXG5cdCAgICAgICAgICogQHJldHVybnMge051bWJlcn1cblx0ICAgICAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICAgICAqL1xuXHRcblx0XG5cdCAgICAgICAgRmlsZVVwbG9hZGVyLnByb3RvdHlwZS5fZ2V0VG90YWxQcm9ncmVzcyA9IGZ1bmN0aW9uIF9nZXRUb3RhbFByb2dyZXNzKHZhbHVlKSB7XG5cdCAgICAgICAgICAgIGlmICh0aGlzLnJlbW92ZUFmdGVyVXBsb2FkKSByZXR1cm4gdmFsdWUgfHwgMDtcblx0XG5cdCAgICAgICAgICAgIHZhciBub3RVcGxvYWRlZCA9IHRoaXMuZ2V0Tm90VXBsb2FkZWRJdGVtcygpLmxlbmd0aDtcblx0ICAgICAgICAgICAgdmFyIHVwbG9hZGVkID0gbm90VXBsb2FkZWQgPyB0aGlzLnF1ZXVlLmxlbmd0aCAtIG5vdFVwbG9hZGVkIDogdGhpcy5xdWV1ZS5sZW5ndGg7XG5cdCAgICAgICAgICAgIHZhciByYXRpbyA9IDEwMCAvIHRoaXMucXVldWUubGVuZ3RoO1xuXHQgICAgICAgICAgICB2YXIgY3VycmVudCA9ICh2YWx1ZSB8fCAwKSAqIHJhdGlvIC8gMTAwO1xuXHRcblx0ICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodXBsb2FkZWQgKiByYXRpbyArIGN1cnJlbnQpO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUmV0dXJucyBhcnJheSBvZiBmaWx0ZXJzXG5cdCAgICAgICAgICogQHBhcmFtIHtBcnJheTxGdW5jdGlvbj58U3RyaW5nfSBmaWx0ZXJzXG5cdCAgICAgICAgICogQHJldHVybnMge0FycmF5PEZ1bmN0aW9uPn1cblx0ICAgICAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICAgICAqL1xuXHRcblx0XG5cdCAgICAgICAgRmlsZVVwbG9hZGVyLnByb3RvdHlwZS5fZ2V0RmlsdGVycyA9IGZ1bmN0aW9uIF9nZXRGaWx0ZXJzKGZpbHRlcnMpIHtcblx0ICAgICAgICAgICAgaWYgKCFmaWx0ZXJzKSByZXR1cm4gdGhpcy5maWx0ZXJzO1xuXHQgICAgICAgICAgICBpZiAoaXNBcnJheShmaWx0ZXJzKSkgcmV0dXJuIGZpbHRlcnM7XG5cdCAgICAgICAgICAgIHZhciBuYW1lcyA9IGZpbHRlcnMubWF0Y2goL1teXFxzLF0rL2cpO1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJzLmZpbHRlcihmdW5jdGlvbiAoZmlsdGVyKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gbmFtZXMuaW5kZXhPZihmaWx0ZXIubmFtZSkgIT09IC0xO1xuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFVwZGF0ZXMgaHRtbFxuXHQgICAgICAgICAqIEBwcml2YXRlXG5cdCAgICAgICAgICovXG5cdFxuXHRcblx0ICAgICAgICBGaWxlVXBsb2FkZXIucHJvdG90eXBlLl9yZW5kZXIgPSBmdW5jdGlvbiBfcmVuZGVyKCkge1xuXHQgICAgICAgICAgICBpZiAoISRyb290U2NvcGUuJCRwaGFzZSkgJHJvb3RTY29wZS4kYXBwbHkoKTtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFJldHVybnMgXCJ0cnVlXCIgaWYgaXRlbSBpcyBhIGZpbGUgKG5vdCBmb2xkZXIpXG5cdCAgICAgICAgICogQHBhcmFtIHtGaWxlfEZpbGVMaWtlT2JqZWN0fSBpdGVtXG5cdCAgICAgICAgICogQHJldHVybnMge0Jvb2xlYW59XG5cdCAgICAgICAgICogQHByaXZhdGVcblx0ICAgICAgICAgKi9cblx0XG5cdFxuXHQgICAgICAgIEZpbGVVcGxvYWRlci5wcm90b3R5cGUuX2ZvbGRlckZpbHRlciA9IGZ1bmN0aW9uIF9mb2xkZXJGaWx0ZXIoaXRlbSkge1xuXHQgICAgICAgICAgICByZXR1cm4gISEoaXRlbS5zaXplIHx8IGl0ZW0udHlwZSk7XG5cdCAgICAgICAgfTtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBSZXR1cm5zIFwidHJ1ZVwiIGlmIHRoZSBsaW1pdCBoYXMgbm90IGJlZW4gcmVhY2hlZFxuXHQgICAgICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuXHQgICAgICAgICAqIEBwcml2YXRlXG5cdCAgICAgICAgICovXG5cdFxuXHRcblx0ICAgICAgICBGaWxlVXBsb2FkZXIucHJvdG90eXBlLl9xdWV1ZUxpbWl0RmlsdGVyID0gZnVuY3Rpb24gX3F1ZXVlTGltaXRGaWx0ZXIoKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLnF1ZXVlLmxlbmd0aCA8IHRoaXMucXVldWVMaW1pdDtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFJldHVybnMgXCJ0cnVlXCIgaWYgZmlsZSBwYXNzIGFsbCBmaWx0ZXJzXG5cdCAgICAgICAgICogQHBhcmFtIHtGaWxlfE9iamVjdH0gZmlsZVxuXHQgICAgICAgICAqIEBwYXJhbSB7QXJyYXk8RnVuY3Rpb24+fSBmaWx0ZXJzXG5cdCAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcblx0ICAgICAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cblx0ICAgICAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICAgICAqL1xuXHRcblx0XG5cdCAgICAgICAgRmlsZVVwbG9hZGVyLnByb3RvdHlwZS5faXNWYWxpZEZpbGUgPSBmdW5jdGlvbiBfaXNWYWxpZEZpbGUoZmlsZSwgZmlsdGVycywgb3B0aW9ucykge1xuXHQgICAgICAgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblx0XG5cdCAgICAgICAgICAgIHRoaXMuX2ZhaWxGaWx0ZXJJbmRleCA9IC0xO1xuXHQgICAgICAgICAgICByZXR1cm4gIWZpbHRlcnMubGVuZ3RoID8gdHJ1ZSA6IGZpbHRlcnMuZXZlcnkoZnVuY3Rpb24gKGZpbHRlcikge1xuXHQgICAgICAgICAgICAgICAgX3RoaXM0Ll9mYWlsRmlsdGVySW5kZXgrKztcblx0ICAgICAgICAgICAgICAgIHJldHVybiBmaWx0ZXIuZm4uY2FsbChfdGhpczQsIGZpbGUsIG9wdGlvbnMpO1xuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENoZWNrcyB3aGV0aGVyIHVwbG9hZCBzdWNjZXNzZnVsXG5cdCAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IHN0YXR1c1xuXHQgICAgICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuXHQgICAgICAgICAqIEBwcml2YXRlXG5cdCAgICAgICAgICovXG5cdFxuXHRcblx0ICAgICAgICBGaWxlVXBsb2FkZXIucHJvdG90eXBlLl9pc1N1Y2Nlc3NDb2RlID0gZnVuY3Rpb24gX2lzU3VjY2Vzc0NvZGUoc3RhdHVzKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMCB8fCBzdGF0dXMgPT09IDMwNDtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFRyYW5zZm9ybXMgdGhlIHNlcnZlciByZXNwb25zZVxuXHQgICAgICAgICAqIEBwYXJhbSB7Kn0gcmVzcG9uc2Vcblx0ICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gaGVhZGVyc1xuXHQgICAgICAgICAqIEByZXR1cm5zIHsqfVxuXHQgICAgICAgICAqIEBwcml2YXRlXG5cdCAgICAgICAgICovXG5cdFxuXHRcblx0ICAgICAgICBGaWxlVXBsb2FkZXIucHJvdG90eXBlLl90cmFuc2Zvcm1SZXNwb25zZSA9IGZ1bmN0aW9uIF90cmFuc2Zvcm1SZXNwb25zZShyZXNwb25zZSwgaGVhZGVycykge1xuXHQgICAgICAgICAgICB2YXIgaGVhZGVyc0dldHRlciA9IHRoaXMuX2hlYWRlcnNHZXR0ZXIoaGVhZGVycyk7XG5cdCAgICAgICAgICAgIGZvckVhY2goJGh0dHAuZGVmYXVsdHMudHJhbnNmb3JtUmVzcG9uc2UsIGZ1bmN0aW9uICh0cmFuc2Zvcm1Gbikge1xuXHQgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSB0cmFuc2Zvcm1GbihyZXNwb25zZSwgaGVhZGVyc0dldHRlcik7XG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG5cdCAgICAgICAgfTtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBQYXJzZWQgcmVzcG9uc2UgaGVhZGVyc1xuXHQgICAgICAgICAqIEBwYXJhbSBoZWFkZXJzXG5cdCAgICAgICAgICogQHJldHVybnMge09iamVjdH1cblx0ICAgICAgICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIuanMvYmxvYi9tYXN0ZXIvc3JjL25nL2h0dHAuanNcblx0ICAgICAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICAgICAqL1xuXHRcblx0XG5cdCAgICAgICAgRmlsZVVwbG9hZGVyLnByb3RvdHlwZS5fcGFyc2VIZWFkZXJzID0gZnVuY3Rpb24gX3BhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG5cdCAgICAgICAgICAgIHZhciBwYXJzZWQgPSB7fSxcblx0ICAgICAgICAgICAgICAgIGtleSxcblx0ICAgICAgICAgICAgICAgIHZhbCxcblx0ICAgICAgICAgICAgICAgIGk7XG5cdFxuXHQgICAgICAgICAgICBpZiAoIWhlYWRlcnMpIHJldHVybiBwYXJzZWQ7XG5cdFxuXHQgICAgICAgICAgICBmb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiAobGluZSkge1xuXHQgICAgICAgICAgICAgICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuXHQgICAgICAgICAgICAgICAga2V5ID0gbGluZS5zbGljZSgwLCBpKS50cmltKCkudG9Mb3dlckNhc2UoKTtcblx0ICAgICAgICAgICAgICAgIHZhbCA9IGxpbmUuc2xpY2UoaSArIDEpLnRyaW0oKTtcblx0XG5cdCAgICAgICAgICAgICAgICBpZiAoa2V5KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSk7XG5cdFxuXHQgICAgICAgICAgICByZXR1cm4gcGFyc2VkO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUmV0dXJucyBmdW5jdGlvbiB0aGF0IHJldHVybnMgaGVhZGVyc1xuXHQgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJzZWRIZWFkZXJzXG5cdCAgICAgICAgICogQHJldHVybnMge0Z1bmN0aW9ufVxuXHQgICAgICAgICAqIEBwcml2YXRlXG5cdCAgICAgICAgICovXG5cdFxuXHRcblx0ICAgICAgICBGaWxlVXBsb2FkZXIucHJvdG90eXBlLl9oZWFkZXJzR2V0dGVyID0gZnVuY3Rpb24gX2hlYWRlcnNHZXR0ZXIocGFyc2VkSGVhZGVycykge1xuXHQgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG5hbWUpIHtcblx0ICAgICAgICAgICAgICAgIGlmIChuYW1lKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlZEhlYWRlcnNbbmFtZS50b0xvd2VyQ2FzZSgpXSB8fCBudWxsO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlZEhlYWRlcnM7XG5cdCAgICAgICAgICAgIH07XG5cdCAgICAgICAgfTtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBUaGUgWE1MSHR0cFJlcXVlc3QgdHJhbnNwb3J0XG5cdCAgICAgICAgICogQHBhcmFtIHtGaWxlSXRlbX0gaXRlbVxuXHQgICAgICAgICAqIEBwcml2YXRlXG5cdCAgICAgICAgICovXG5cdFxuXHRcblx0ICAgICAgICBGaWxlVXBsb2FkZXIucHJvdG90eXBlLl94aHJUcmFuc3BvcnQgPSBmdW5jdGlvbiBfeGhyVHJhbnNwb3J0KGl0ZW0pIHtcblx0ICAgICAgICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cdFxuXHQgICAgICAgICAgICB2YXIgeGhyID0gaXRlbS5feGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cdCAgICAgICAgICAgIHZhciBzZW5kYWJsZTtcblx0XG5cdCAgICAgICAgICAgIGlmICghaXRlbS5kaXNhYmxlTXVsdGlwYXJ0KSB7XG5cdCAgICAgICAgICAgICAgICBzZW5kYWJsZSA9IG5ldyBGb3JtRGF0YSgpO1xuXHQgICAgICAgICAgICAgICAgZm9yRWFjaChpdGVtLmZvcm1EYXRhLCBmdW5jdGlvbiAob2JqKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgZm9yRWFjaChvYmosIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRhYmxlLmFwcGVuZChrZXksIHZhbHVlKTtcblx0ICAgICAgICAgICAgICAgICAgICB9KTtcblx0ICAgICAgICAgICAgICAgIH0pO1xuXHRcblx0ICAgICAgICAgICAgICAgIHNlbmRhYmxlLmFwcGVuZChpdGVtLmFsaWFzLCBpdGVtLl9maWxlLCBpdGVtLmZpbGUubmFtZSk7XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICBzZW5kYWJsZSA9IGl0ZW0uX2ZpbGU7XG5cdCAgICAgICAgICAgIH1cblx0XG5cdCAgICAgICAgICAgIGlmICh0eXBlb2YgaXRlbS5fZmlsZS5zaXplICE9ICdudW1iZXInKSB7XG5cdCAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgZmlsZSBzcGVjaWZpZWQgaXMgbm8gbG9uZ2VyIHZhbGlkJyk7XG5cdCAgICAgICAgICAgIH1cblx0XG5cdCAgICAgICAgICAgIHhoci51cGxvYWQub25wcm9ncmVzcyA9IGZ1bmN0aW9uIChldmVudCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gTWF0aC5yb3VuZChldmVudC5sZW5ndGhDb21wdXRhYmxlID8gZXZlbnQubG9hZGVkICogMTAwIC8gZXZlbnQudG90YWwgOiAwKTtcblx0ICAgICAgICAgICAgICAgIF90aGlzNS5fb25Qcm9ncmVzc0l0ZW0oaXRlbSwgcHJvZ3Jlc3MpO1xuXHQgICAgICAgICAgICB9O1xuXHRcblx0ICAgICAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBoZWFkZXJzID0gX3RoaXM1Ll9wYXJzZUhlYWRlcnMoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKTtcblx0ICAgICAgICAgICAgICAgIHZhciByZXNwb25zZSA9IF90aGlzNS5fdHJhbnNmb3JtUmVzcG9uc2UoeGhyLnJlc3BvbnNlLCBoZWFkZXJzKTtcblx0ICAgICAgICAgICAgICAgIHZhciBnaXN0ID0gX3RoaXM1Ll9pc1N1Y2Nlc3NDb2RlKHhoci5zdGF0dXMpID8gJ1N1Y2Nlc3MnIDogJ0Vycm9yJztcblx0ICAgICAgICAgICAgICAgIHZhciBtZXRob2QgPSAnX29uJyArIGdpc3QgKyAnSXRlbSc7XG5cdCAgICAgICAgICAgICAgICBfdGhpczVbbWV0aG9kXShpdGVtLCByZXNwb25zZSwgeGhyLnN0YXR1cywgaGVhZGVycyk7XG5cdCAgICAgICAgICAgICAgICBfdGhpczUuX29uQ29tcGxldGVJdGVtKGl0ZW0sIHJlc3BvbnNlLCB4aHIuc3RhdHVzLCBoZWFkZXJzKTtcblx0ICAgICAgICAgICAgfTtcblx0XG5cdCAgICAgICAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIGhlYWRlcnMgPSBfdGhpczUuX3BhcnNlSGVhZGVycyh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpO1xuXHQgICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gX3RoaXM1Ll90cmFuc2Zvcm1SZXNwb25zZSh4aHIucmVzcG9uc2UsIGhlYWRlcnMpO1xuXHQgICAgICAgICAgICAgICAgX3RoaXM1Ll9vbkVycm9ySXRlbShpdGVtLCByZXNwb25zZSwgeGhyLnN0YXR1cywgaGVhZGVycyk7XG5cdCAgICAgICAgICAgICAgICBfdGhpczUuX29uQ29tcGxldGVJdGVtKGl0ZW0sIHJlc3BvbnNlLCB4aHIuc3RhdHVzLCBoZWFkZXJzKTtcblx0ICAgICAgICAgICAgfTtcblx0XG5cdCAgICAgICAgICAgIHhoci5vbmFib3J0ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIGhlYWRlcnMgPSBfdGhpczUuX3BhcnNlSGVhZGVycyh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpO1xuXHQgICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gX3RoaXM1Ll90cmFuc2Zvcm1SZXNwb25zZSh4aHIucmVzcG9uc2UsIGhlYWRlcnMpO1xuXHQgICAgICAgICAgICAgICAgX3RoaXM1Ll9vbkNhbmNlbEl0ZW0oaXRlbSwgcmVzcG9uc2UsIHhoci5zdGF0dXMsIGhlYWRlcnMpO1xuXHQgICAgICAgICAgICAgICAgX3RoaXM1Ll9vbkNvbXBsZXRlSXRlbShpdGVtLCByZXNwb25zZSwgeGhyLnN0YXR1cywgaGVhZGVycyk7XG5cdCAgICAgICAgICAgIH07XG5cdFxuXHQgICAgICAgICAgICB4aHIub3BlbihpdGVtLm1ldGhvZCwgaXRlbS51cmwsIHRydWUpO1xuXHRcblx0ICAgICAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IGl0ZW0ud2l0aENyZWRlbnRpYWxzO1xuXHRcblx0ICAgICAgICAgICAgZm9yRWFjaChpdGVtLmhlYWRlcnMsIGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSkge1xuXHQgICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpO1xuXHQgICAgICAgICAgICB9KTtcblx0XG5cdCAgICAgICAgICAgIHhoci5zZW5kKHNlbmRhYmxlKTtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFRoZSBJRnJhbWUgdHJhbnNwb3J0XG5cdCAgICAgICAgICogQHBhcmFtIHtGaWxlSXRlbX0gaXRlbVxuXHQgICAgICAgICAqIEBwcml2YXRlXG5cdCAgICAgICAgICovXG5cdFxuXHRcblx0ICAgICAgICBGaWxlVXBsb2FkZXIucHJvdG90eXBlLl9pZnJhbWVUcmFuc3BvcnQgPSBmdW5jdGlvbiBfaWZyYW1lVHJhbnNwb3J0KGl0ZW0pIHtcblx0ICAgICAgICAgICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cdFxuXHQgICAgICAgICAgICB2YXIgZm9ybSA9IGVsZW1lbnQoJzxmb3JtIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIiAvPicpO1xuXHQgICAgICAgICAgICB2YXIgaWZyYW1lID0gZWxlbWVudCgnPGlmcmFtZSBuYW1lPVwiaWZyYW1lVHJhbnNwb3J0JyArIERhdGUubm93KCkgKyAnXCI+Jyk7XG5cdCAgICAgICAgICAgIHZhciBpbnB1dCA9IGl0ZW0uX2lucHV0O1xuXHRcblx0ICAgICAgICAgICAgaWYgKGl0ZW0uX2Zvcm0pIGl0ZW0uX2Zvcm0ucmVwbGFjZVdpdGgoaW5wdXQpOyAvLyByZW1vdmUgb2xkIGZvcm1cblx0ICAgICAgICAgICAgaXRlbS5fZm9ybSA9IGZvcm07IC8vIHNhdmUgbGluayB0byBuZXcgZm9ybVxuXHRcblx0ICAgICAgICAgICAgaW5wdXQucHJvcCgnbmFtZScsIGl0ZW0uYWxpYXMpO1xuXHRcblx0ICAgICAgICAgICAgZm9yRWFjaChpdGVtLmZvcm1EYXRhLCBmdW5jdGlvbiAob2JqKSB7XG5cdCAgICAgICAgICAgICAgICBmb3JFYWNoKG9iaiwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbWVudF8gPSBlbGVtZW50KCc8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCInICsga2V5ICsgJ1wiIC8+Jyk7XG5cdCAgICAgICAgICAgICAgICAgICAgZWxlbWVudF8udmFsKHZhbHVlKTtcblx0ICAgICAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZChlbGVtZW50Xyk7XG5cdCAgICAgICAgICAgICAgICB9KTtcblx0ICAgICAgICAgICAgfSk7XG5cdFxuXHQgICAgICAgICAgICBmb3JtLnByb3Aoe1xuXHQgICAgICAgICAgICAgICAgYWN0aW9uOiBpdGVtLnVybCxcblx0ICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuXHQgICAgICAgICAgICAgICAgdGFyZ2V0OiBpZnJhbWUucHJvcCgnbmFtZScpLFxuXHQgICAgICAgICAgICAgICAgZW5jdHlwZTogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxuXHQgICAgICAgICAgICAgICAgZW5jb2Rpbmc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyAvLyBvbGQgSUVcblx0ICAgICAgICAgICAgfSk7XG5cdFxuXHQgICAgICAgICAgICBpZnJhbWUuYmluZCgnbG9hZCcsIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBodG1sID0gJyc7XG5cdCAgICAgICAgICAgICAgICB2YXIgc3RhdHVzID0gMjAwO1xuXHRcblx0ICAgICAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICAgICAgLy8gRml4IGZvciBsZWdhY3kgSUUgYnJvd3NlcnMgdGhhdCBsb2FkcyBpbnRlcm5hbCBlcnJvciBwYWdlXG5cdCAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBmYWlsZWQgV1MgcmVzcG9uc2UgcmVjZWl2ZWQuIEluIGNvbnNlcXVlbmNlIGlmcmFtZVxuXHQgICAgICAgICAgICAgICAgICAgIC8vIGNvbnRlbnQgYWNjZXNzIGRlbmllZCBlcnJvciBpcyB0aHJvd24gYmVjb3VzZSB0cnlpbmcgdG9cblx0ICAgICAgICAgICAgICAgICAgICAvLyBhY2Nlc3MgY3Jvc3MgZG9tYWluIHBhZ2UuIFdoZW4gc3VjaCB0aGluZyBvY2N1cnMgbm90aWZ5aW5nXG5cdCAgICAgICAgICAgICAgICAgICAgLy8gd2l0aCBlbXB0eSByZXNwb25zZSBvYmplY3QuIFNlZSBtb3JlIGluZm8gYXQ6XG5cdCAgICAgICAgICAgICAgICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNTEzNjIvYWNjZXNzLWlzLWRlbmllZC1lcnJvci1vbi1hY2Nlc3NpbmctaWZyYW1lLWRvY3VtZW50LW9iamVjdFxuXHQgICAgICAgICAgICAgICAgICAgIC8vIE5vdGUgdGhhdCBpZiBub24gc3RhbmRhcmQgNHh4IG9yIDV4eCBlcnJvciBjb2RlIHJldHVybmVkXG5cdCAgICAgICAgICAgICAgICAgICAgLy8gZnJvbSBXUyB0aGVuIHJlc3BvbnNlIGNvbnRlbnQgY2FuIGJlIGFjY2Vzc2VkIHdpdGhvdXQgZXJyb3Jcblx0ICAgICAgICAgICAgICAgICAgICAvLyBidXQgJ1hIUicgc3RhdHVzIGJlY29tZXMgMjAwLiBJbiBvcmRlciB0byBhdm9pZCBjb25mdXNpb25cblx0ICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm5pbmcgcmVzcG9uc2UgdmlhIHNhbWUgJ3N1Y2Nlc3MnIGV2ZW50IGhhbmRsZXIuXG5cdFxuXHQgICAgICAgICAgICAgICAgICAgIC8vIGZpeGVkIGFuZ3VsYXIuY29udGVudHMoKSBmb3IgaWZyYW1lc1xuXHQgICAgICAgICAgICAgICAgICAgIGh0bWwgPSBpZnJhbWVbMF0uY29udGVudERvY3VtZW50LmJvZHkuaW5uZXJIVE1MO1xuXHQgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuXHQgICAgICAgICAgICAgICAgICAgIC8vIGluIGNhc2Ugd2UgcnVuIGludG8gdGhlIGFjY2Vzcy1pcy1kZW5pZWQgZXJyb3Igb3Igd2UgaGF2ZSBhbm90aGVyIGVycm9yIG9uIHRoZSBzZXJ2ZXIgc2lkZVxuXHQgICAgICAgICAgICAgICAgICAgIC8vIChpbnRlbnRpb25hbCA1MDAsNDAuLi4gZXJyb3JzKSwgd2UgYXQgbGVhc3Qgc2F5ICdzb21ldGhpbmcgd2VudCB3cm9uZycgLT4gNTAwXG5cdCAgICAgICAgICAgICAgICAgICAgc3RhdHVzID0gNTAwO1xuXHQgICAgICAgICAgICAgICAgfVxuXHRcblx0ICAgICAgICAgICAgICAgIHZhciB4aHIgPSB7IHJlc3BvbnNlOiBodG1sLCBzdGF0dXM6IHN0YXR1cywgZHVtbXk6IHRydWUgfTtcblx0ICAgICAgICAgICAgICAgIHZhciBoZWFkZXJzID0ge307XG5cdCAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBfdGhpczYuX3RyYW5zZm9ybVJlc3BvbnNlKHhoci5yZXNwb25zZSwgaGVhZGVycyk7XG5cdFxuXHQgICAgICAgICAgICAgICAgX3RoaXM2Ll9vblN1Y2Nlc3NJdGVtKGl0ZW0sIHJlc3BvbnNlLCB4aHIuc3RhdHVzLCBoZWFkZXJzKTtcblx0ICAgICAgICAgICAgICAgIF90aGlzNi5fb25Db21wbGV0ZUl0ZW0oaXRlbSwgcmVzcG9uc2UsIHhoci5zdGF0dXMsIGhlYWRlcnMpO1xuXHQgICAgICAgICAgICB9KTtcblx0XG5cdCAgICAgICAgICAgIGZvcm0uYWJvcnQgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgeGhyID0geyBzdGF0dXM6IDAsIGR1bW15OiB0cnVlIH07XG5cdCAgICAgICAgICAgICAgICB2YXIgaGVhZGVycyA9IHt9O1xuXHQgICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlO1xuXHRcblx0ICAgICAgICAgICAgICAgIGlmcmFtZS51bmJpbmQoJ2xvYWQnKS5wcm9wKCdzcmMnLCAnamF2YXNjcmlwdDpmYWxzZTsnKTtcblx0ICAgICAgICAgICAgICAgIGZvcm0ucmVwbGFjZVdpdGgoaW5wdXQpO1xuXHRcblx0ICAgICAgICAgICAgICAgIF90aGlzNi5fb25DYW5jZWxJdGVtKGl0ZW0sIHJlc3BvbnNlLCB4aHIuc3RhdHVzLCBoZWFkZXJzKTtcblx0ICAgICAgICAgICAgICAgIF90aGlzNi5fb25Db21wbGV0ZUl0ZW0oaXRlbSwgcmVzcG9uc2UsIHhoci5zdGF0dXMsIGhlYWRlcnMpO1xuXHQgICAgICAgICAgICB9O1xuXHRcblx0ICAgICAgICAgICAgaW5wdXQuYWZ0ZXIoZm9ybSk7XG5cdCAgICAgICAgICAgIGZvcm0uYXBwZW5kKGlucHV0KS5hcHBlbmQoaWZyYW1lKTtcblx0XG5cdCAgICAgICAgICAgIGZvcm1bMF0uc3VibWl0KCk7XG5cdCAgICAgICAgfTtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBJbm5lciBjYWxsYmFja1xuXHQgICAgICAgICAqIEBwYXJhbSB7RmlsZXxPYmplY3R9IGl0ZW1cblx0ICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gZmlsdGVyXG5cdCAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcblx0ICAgICAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICAgICAqL1xuXHRcblx0XG5cdCAgICAgICAgRmlsZVVwbG9hZGVyLnByb3RvdHlwZS5fb25XaGVuQWRkaW5nRmlsZUZhaWxlZCA9IGZ1bmN0aW9uIF9vbldoZW5BZGRpbmdGaWxlRmFpbGVkKGl0ZW0sIGZpbHRlciwgb3B0aW9ucykge1xuXHQgICAgICAgICAgICB0aGlzLm9uV2hlbkFkZGluZ0ZpbGVGYWlsZWQoaXRlbSwgZmlsdGVyLCBvcHRpb25zKTtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIElubmVyIGNhbGxiYWNrXG5cdCAgICAgICAgICogQHBhcmFtIHtGaWxlSXRlbX0gaXRlbVxuXHQgICAgICAgICAqL1xuXHRcblx0XG5cdCAgICAgICAgRmlsZVVwbG9hZGVyLnByb3RvdHlwZS5fb25BZnRlckFkZGluZ0ZpbGUgPSBmdW5jdGlvbiBfb25BZnRlckFkZGluZ0ZpbGUoaXRlbSkge1xuXHQgICAgICAgICAgICB0aGlzLm9uQWZ0ZXJBZGRpbmdGaWxlKGl0ZW0pO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogSW5uZXIgY2FsbGJhY2tcblx0ICAgICAgICAgKiBAcGFyYW0ge0FycmF5PEZpbGVJdGVtPn0gaXRlbXNcblx0ICAgICAgICAgKi9cblx0XG5cdFxuXHQgICAgICAgIEZpbGVVcGxvYWRlci5wcm90b3R5cGUuX29uQWZ0ZXJBZGRpbmdBbGwgPSBmdW5jdGlvbiBfb25BZnRlckFkZGluZ0FsbChpdGVtcykge1xuXHQgICAgICAgICAgICB0aGlzLm9uQWZ0ZXJBZGRpbmdBbGwoaXRlbXMpO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogIElubmVyIGNhbGxiYWNrXG5cdCAgICAgICAgICogQHBhcmFtIHtGaWxlSXRlbX0gaXRlbVxuXHQgICAgICAgICAqIEBwcml2YXRlXG5cdCAgICAgICAgICovXG5cdFxuXHRcblx0ICAgICAgICBGaWxlVXBsb2FkZXIucHJvdG90eXBlLl9vbkJlZm9yZVVwbG9hZEl0ZW0gPSBmdW5jdGlvbiBfb25CZWZvcmVVcGxvYWRJdGVtKGl0ZW0pIHtcblx0ICAgICAgICAgICAgaXRlbS5fb25CZWZvcmVVcGxvYWQoKTtcblx0ICAgICAgICAgICAgdGhpcy5vbkJlZm9yZVVwbG9hZEl0ZW0oaXRlbSk7XG5cdCAgICAgICAgfTtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBJbm5lciBjYWxsYmFja1xuXHQgICAgICAgICAqIEBwYXJhbSB7RmlsZUl0ZW19IGl0ZW1cblx0ICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gcHJvZ3Jlc3Ncblx0ICAgICAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICAgICAqL1xuXHRcblx0XG5cdCAgICAgICAgRmlsZVVwbG9hZGVyLnByb3RvdHlwZS5fb25Qcm9ncmVzc0l0ZW0gPSBmdW5jdGlvbiBfb25Qcm9ncmVzc0l0ZW0oaXRlbSwgcHJvZ3Jlc3MpIHtcblx0ICAgICAgICAgICAgdmFyIHRvdGFsID0gdGhpcy5fZ2V0VG90YWxQcm9ncmVzcyhwcm9ncmVzcyk7XG5cdCAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MgPSB0b3RhbDtcblx0ICAgICAgICAgICAgaXRlbS5fb25Qcm9ncmVzcyhwcm9ncmVzcyk7XG5cdCAgICAgICAgICAgIHRoaXMub25Qcm9ncmVzc0l0ZW0oaXRlbSwgcHJvZ3Jlc3MpO1xuXHQgICAgICAgICAgICB0aGlzLm9uUHJvZ3Jlc3NBbGwodG90YWwpO1xuXHQgICAgICAgICAgICB0aGlzLl9yZW5kZXIoKTtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIElubmVyIGNhbGxiYWNrXG5cdCAgICAgICAgICogQHBhcmFtIHtGaWxlSXRlbX0gaXRlbVxuXHQgICAgICAgICAqIEBwYXJhbSB7Kn0gcmVzcG9uc2Vcblx0ICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gc3RhdHVzXG5cdCAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGhlYWRlcnNcblx0ICAgICAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICAgICAqL1xuXHRcblx0XG5cdCAgICAgICAgRmlsZVVwbG9hZGVyLnByb3RvdHlwZS5fb25TdWNjZXNzSXRlbSA9IGZ1bmN0aW9uIF9vblN1Y2Nlc3NJdGVtKGl0ZW0sIHJlc3BvbnNlLCBzdGF0dXMsIGhlYWRlcnMpIHtcblx0ICAgICAgICAgICAgaXRlbS5fb25TdWNjZXNzKHJlc3BvbnNlLCBzdGF0dXMsIGhlYWRlcnMpO1xuXHQgICAgICAgICAgICB0aGlzLm9uU3VjY2Vzc0l0ZW0oaXRlbSwgcmVzcG9uc2UsIHN0YXR1cywgaGVhZGVycyk7XG5cdCAgICAgICAgfTtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBJbm5lciBjYWxsYmFja1xuXHQgICAgICAgICAqIEBwYXJhbSB7RmlsZUl0ZW19IGl0ZW1cblx0ICAgICAgICAgKiBAcGFyYW0geyp9IHJlc3BvbnNlXG5cdCAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IHN0YXR1c1xuXHQgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBoZWFkZXJzXG5cdCAgICAgICAgICogQHByaXZhdGVcblx0ICAgICAgICAgKi9cblx0XG5cdFxuXHQgICAgICAgIEZpbGVVcGxvYWRlci5wcm90b3R5cGUuX29uRXJyb3JJdGVtID0gZnVuY3Rpb24gX29uRXJyb3JJdGVtKGl0ZW0sIHJlc3BvbnNlLCBzdGF0dXMsIGhlYWRlcnMpIHtcblx0ICAgICAgICAgICAgaXRlbS5fb25FcnJvcihyZXNwb25zZSwgc3RhdHVzLCBoZWFkZXJzKTtcblx0ICAgICAgICAgICAgdGhpcy5vbkVycm9ySXRlbShpdGVtLCByZXNwb25zZSwgc3RhdHVzLCBoZWFkZXJzKTtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIElubmVyIGNhbGxiYWNrXG5cdCAgICAgICAgICogQHBhcmFtIHtGaWxlSXRlbX0gaXRlbVxuXHQgICAgICAgICAqIEBwYXJhbSB7Kn0gcmVzcG9uc2Vcblx0ICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gc3RhdHVzXG5cdCAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGhlYWRlcnNcblx0ICAgICAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICAgICAqL1xuXHRcblx0XG5cdCAgICAgICAgRmlsZVVwbG9hZGVyLnByb3RvdHlwZS5fb25DYW5jZWxJdGVtID0gZnVuY3Rpb24gX29uQ2FuY2VsSXRlbShpdGVtLCByZXNwb25zZSwgc3RhdHVzLCBoZWFkZXJzKSB7XG5cdCAgICAgICAgICAgIGl0ZW0uX29uQ2FuY2VsKHJlc3BvbnNlLCBzdGF0dXMsIGhlYWRlcnMpO1xuXHQgICAgICAgICAgICB0aGlzLm9uQ2FuY2VsSXRlbShpdGVtLCByZXNwb25zZSwgc3RhdHVzLCBoZWFkZXJzKTtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIElubmVyIGNhbGxiYWNrXG5cdCAgICAgICAgICogQHBhcmFtIHtGaWxlSXRlbX0gaXRlbVxuXHQgICAgICAgICAqIEBwYXJhbSB7Kn0gcmVzcG9uc2Vcblx0ICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gc3RhdHVzXG5cdCAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGhlYWRlcnNcblx0ICAgICAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICAgICAqL1xuXHRcblx0XG5cdCAgICAgICAgRmlsZVVwbG9hZGVyLnByb3RvdHlwZS5fb25Db21wbGV0ZUl0ZW0gPSBmdW5jdGlvbiBfb25Db21wbGV0ZUl0ZW0oaXRlbSwgcmVzcG9uc2UsIHN0YXR1cywgaGVhZGVycykge1xuXHQgICAgICAgICAgICBpdGVtLl9vbkNvbXBsZXRlKHJlc3BvbnNlLCBzdGF0dXMsIGhlYWRlcnMpO1xuXHQgICAgICAgICAgICB0aGlzLm9uQ29tcGxldGVJdGVtKGl0ZW0sIHJlc3BvbnNlLCBzdGF0dXMsIGhlYWRlcnMpO1xuXHRcblx0ICAgICAgICAgICAgdmFyIG5leHRJdGVtID0gdGhpcy5nZXRSZWFkeUl0ZW1zKClbMF07XG5cdCAgICAgICAgICAgIHRoaXMuaXNVcGxvYWRpbmcgPSBmYWxzZTtcblx0XG5cdCAgICAgICAgICAgIGlmIChpc0RlZmluZWQobmV4dEl0ZW0pKSB7XG5cdCAgICAgICAgICAgICAgICBuZXh0SXRlbS51cGxvYWQoKTtcblx0ICAgICAgICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICAgICAgfVxuXHRcblx0ICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlQWxsKCk7XG5cdCAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MgPSB0aGlzLl9nZXRUb3RhbFByb2dyZXNzKCk7XG5cdCAgICAgICAgICAgIHRoaXMuX3JlbmRlcigpO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgLyoqKioqKioqKioqKioqKioqKioqKipcblx0ICAgICAgICAgKiBTVEFUSUNcblx0ICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKi9cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBSZXR1cm5zIFwidHJ1ZVwiIGlmIHZhbHVlIGFuIGluc3RhbmNlIG9mIEZpbGVcblx0ICAgICAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG5cdCAgICAgICAgICogQHJldHVybnMge0Jvb2xlYW59XG5cdCAgICAgICAgICogQHByaXZhdGVcblx0ICAgICAgICAgKi9cblx0XG5cdFxuXHQgICAgICAgIEZpbGVVcGxvYWRlci5pc0ZpbGUgPSBmdW5jdGlvbiBpc0ZpbGUodmFsdWUpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIEZpbGUgJiYgdmFsdWUgaW5zdGFuY2VvZiBGaWxlO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUmV0dXJucyBcInRydWVcIiBpZiB2YWx1ZSBhbiBpbnN0YW5jZSBvZiBGaWxlTGlrZU9iamVjdFxuXHQgICAgICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcblx0ICAgICAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cblx0ICAgICAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICAgICAqL1xuXHRcblx0XG5cdCAgICAgICAgRmlsZVVwbG9hZGVyLmlzRmlsZUxpa2VPYmplY3QgPSBmdW5jdGlvbiBpc0ZpbGVMaWtlT2JqZWN0KHZhbHVlKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIEZpbGVMaWtlT2JqZWN0O1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUmV0dXJucyBcInRydWVcIiBpZiB2YWx1ZSBpcyBhcnJheSBsaWtlIG9iamVjdFxuXHQgICAgICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcblx0ICAgICAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cblx0ICAgICAgICAgKi9cblx0XG5cdFxuXHQgICAgICAgIEZpbGVVcGxvYWRlci5pc0FycmF5TGlrZU9iamVjdCA9IGZ1bmN0aW9uIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBpc09iamVjdCh2YWx1ZSkgJiYgJ2xlbmd0aCcgaW4gdmFsdWU7XG5cdCAgICAgICAgfTtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBJbmhlcml0cyBhIHRhcmdldCAoQ2xhc3NfMSkgYnkgYSBzb3VyY2UgKENsYXNzXzIpXG5cdCAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gdGFyZ2V0XG5cdCAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gc291cmNlXG5cdCAgICAgICAgICovXG5cdFxuXHRcblx0ICAgICAgICBGaWxlVXBsb2FkZXIuaW5oZXJpdCA9IGZ1bmN0aW9uIGluaGVyaXQodGFyZ2V0LCBzb3VyY2UpIHtcblx0ICAgICAgICAgICAgdGFyZ2V0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc291cmNlLnByb3RvdHlwZSk7XG5cdCAgICAgICAgICAgIHRhcmdldC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSB0YXJnZXQ7XG5cdCAgICAgICAgICAgIHRhcmdldC5zdXBlcl8gPSBzb3VyY2U7XG5cdCAgICAgICAgfTtcblx0XG5cdCAgICAgICAgcmV0dXJuIEZpbGVVcGxvYWRlcjtcblx0ICAgIH0oKTtcblx0XG5cdCAgICAvKioqKioqKioqKioqKioqKioqKioqKlxuXHQgICAgICogUFVCTElDXG5cdCAgICAgKioqKioqKioqKioqKioqKioqKioqKi9cblx0ICAgIC8qKlxuXHQgICAgICogQ2hlY2tzIGEgc3VwcG9ydCB0aGUgaHRtbDUgdXBsb2FkZXJcblx0ICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuXHQgICAgICogQHJlYWRvbmx5XG5cdCAgICAgKi9cblx0XG5cdFxuXHQgICAgRmlsZVVwbG9hZGVyLnByb3RvdHlwZS5pc0hUTUw1ID0gISEoRmlsZSAmJiBGb3JtRGF0YSk7XG5cdCAgICAvKioqKioqKioqKioqKioqKioqKioqKlxuXHQgICAgICogU1RBVElDXG5cdCAgICAgKioqKioqKioqKioqKioqKioqKioqKi9cblx0ICAgIC8qKlxuXHQgICAgICogQGJvcnJvd3MgRmlsZVVwbG9hZGVyLnByb3RvdHlwZS5pc0hUTUw1XG5cdCAgICAgKi9cblx0ICAgIEZpbGVVcGxvYWRlci5pc0hUTUw1ID0gRmlsZVVwbG9hZGVyLnByb3RvdHlwZS5pc0hUTUw1O1xuXHRcblx0ICAgIHJldHVybiBGaWxlVXBsb2FkZXI7XG5cdH1cblx0XG5cdF9faWRlbnRpdHkuJGluamVjdCA9IFsnZmlsZVVwbG9hZGVyT3B0aW9ucycsICckcm9vdFNjb3BlJywgJyRodHRwJywgJyR3aW5kb3cnLCAnJHRpbWVvdXQnLCAnRmlsZUxpa2VPYmplY3QnLCAnRmlsZUl0ZW0nXTtcblxuLyoqKi8gfSxcbi8qIDQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGV4cG9ydHMuZGVmYXVsdCA9IF9faWRlbnRpdHk7XG5cdFxuXHR2YXIgX2NvbmZpZyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cdFxuXHR2YXIgX2NvbmZpZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb25maWcpO1xuXHRcblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblx0XG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cdFxuXHR2YXIgX2FuZ3VsYXIgPSBhbmd1bGFyO1xuXHR2YXIgY29weSA9IF9hbmd1bGFyLmNvcHk7XG5cdHZhciBpc0VsZW1lbnQgPSBfYW5ndWxhci5pc0VsZW1lbnQ7XG5cdHZhciBpc1N0cmluZyA9IF9hbmd1bGFyLmlzU3RyaW5nO1xuXHRmdW5jdGlvbiBfX2lkZW50aXR5KCkge1xuXHRcblx0ICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBGaWxlTGlrZU9iamVjdFxuXHQgICAgICAgICAqIEBwYXJhbSB7RmlsZXxIVE1MSW5wdXRFbGVtZW50fE9iamVjdH0gZmlsZU9ySW5wdXRcblx0ICAgICAgICAgKiBAY29uc3RydWN0b3Jcblx0ICAgICAgICAgKi9cblx0XG5cdCAgICAgICAgZnVuY3Rpb24gRmlsZUxpa2VPYmplY3QoZmlsZU9ySW5wdXQpIHtcblx0ICAgICAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZpbGVMaWtlT2JqZWN0KTtcblx0XG5cdCAgICAgICAgICAgIHZhciBpc0lucHV0ID0gaXNFbGVtZW50KGZpbGVPcklucHV0KTtcblx0ICAgICAgICAgICAgdmFyIGZha2VQYXRoT3JPYmplY3QgPSBpc0lucHV0ID8gZmlsZU9ySW5wdXQudmFsdWUgOiBmaWxlT3JJbnB1dDtcblx0ICAgICAgICAgICAgdmFyIHBvc3RmaXggPSBpc1N0cmluZyhmYWtlUGF0aE9yT2JqZWN0KSA/ICdGYWtlUGF0aCcgOiAnT2JqZWN0Jztcblx0ICAgICAgICAgICAgdmFyIG1ldGhvZCA9ICdfY3JlYXRlRnJvbScgKyBwb3N0Zml4O1xuXHQgICAgICAgICAgICB0aGlzW21ldGhvZF0oZmFrZVBhdGhPck9iamVjdCk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENyZWF0ZXMgZmlsZSBsaWtlIG9iamVjdCBmcm9tIGZha2UgcGF0aCBzdHJpbmdcblx0ICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuXHQgICAgICAgICAqIEBwcml2YXRlXG5cdCAgICAgICAgICovXG5cdFxuXHRcblx0ICAgICAgICBGaWxlTGlrZU9iamVjdC5wcm90b3R5cGUuX2NyZWF0ZUZyb21GYWtlUGF0aCA9IGZ1bmN0aW9uIF9jcmVhdGVGcm9tRmFrZVBhdGgocGF0aCkge1xuXHQgICAgICAgICAgICB0aGlzLmxhc3RNb2RpZmllZERhdGUgPSBudWxsO1xuXHQgICAgICAgICAgICB0aGlzLnNpemUgPSBudWxsO1xuXHQgICAgICAgICAgICB0aGlzLnR5cGUgPSAnbGlrZS8nICsgcGF0aC5zbGljZShwYXRoLmxhc3RJbmRleE9mKCcuJykgKyAxKS50b0xvd2VyQ2FzZSgpO1xuXHQgICAgICAgICAgICB0aGlzLm5hbWUgPSBwYXRoLnNsaWNlKHBhdGgubGFzdEluZGV4T2YoJy8nKSArIHBhdGgubGFzdEluZGV4T2YoJ1xcXFwnKSArIDIpO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBmaWxlIGxpa2Ugb2JqZWN0IGZyb20gb2JqZWN0XG5cdCAgICAgICAgICogQHBhcmFtIHtGaWxlfEZpbGVMaWtlT2JqZWN0fSBvYmplY3Rcblx0ICAgICAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICAgICAqL1xuXHRcblx0XG5cdCAgICAgICAgRmlsZUxpa2VPYmplY3QucHJvdG90eXBlLl9jcmVhdGVGcm9tT2JqZWN0ID0gZnVuY3Rpb24gX2NyZWF0ZUZyb21PYmplY3Qob2JqZWN0KSB7XG5cdCAgICAgICAgICAgIHRoaXMubGFzdE1vZGlmaWVkRGF0ZSA9IGNvcHkob2JqZWN0Lmxhc3RNb2RpZmllZERhdGUpO1xuXHQgICAgICAgICAgICB0aGlzLnNpemUgPSBvYmplY3Quc2l6ZTtcblx0ICAgICAgICAgICAgdGhpcy50eXBlID0gb2JqZWN0LnR5cGU7XG5cdCAgICAgICAgICAgIHRoaXMubmFtZSA9IG9iamVjdC5uYW1lO1xuXHQgICAgICAgIH07XG5cdFxuXHQgICAgICAgIHJldHVybiBGaWxlTGlrZU9iamVjdDtcblx0ICAgIH0oKTtcblx0fVxuXG4vKioqLyB9LFxuLyogNSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0ZXhwb3J0cy5kZWZhdWx0ID0gX19pZGVudGl0eTtcblx0XG5cdHZhciBfY29uZmlnID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblx0XG5cdHZhciBfY29uZmlnMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbmZpZyk7XG5cdFxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXHRcblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblx0XG5cdHZhciBfYW5ndWxhciA9IGFuZ3VsYXI7XG5cdHZhciBjb3B5ID0gX2FuZ3VsYXIuY29weTtcblx0dmFyIGV4dGVuZCA9IF9hbmd1bGFyLmV4dGVuZDtcblx0dmFyIGVsZW1lbnQgPSBfYW5ndWxhci5lbGVtZW50O1xuXHR2YXIgaXNFbGVtZW50ID0gX2FuZ3VsYXIuaXNFbGVtZW50O1xuXHRmdW5jdGlvbiBfX2lkZW50aXR5KCRjb21waWxlLCBGaWxlTGlrZU9iamVjdCkge1xuXHRcblx0ICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBGaWxlSXRlbVxuXHQgICAgICAgICAqIEBwYXJhbSB7RmlsZVVwbG9hZGVyfSB1cGxvYWRlclxuXHQgICAgICAgICAqIEBwYXJhbSB7RmlsZXxIVE1MSW5wdXRFbGVtZW50fE9iamVjdH0gc29tZVxuXHQgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG5cdCAgICAgICAgICogQGNvbnN0cnVjdG9yXG5cdCAgICAgICAgICovXG5cdFxuXHQgICAgICAgIGZ1bmN0aW9uIEZpbGVJdGVtKHVwbG9hZGVyLCBzb21lLCBvcHRpb25zKSB7XG5cdCAgICAgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGaWxlSXRlbSk7XG5cdFxuXHQgICAgICAgICAgICB2YXIgaXNJbnB1dCA9IGlzRWxlbWVudChzb21lKTtcblx0ICAgICAgICAgICAgdmFyIGlucHV0ID0gaXNJbnB1dCA/IGVsZW1lbnQoc29tZSkgOiBudWxsO1xuXHQgICAgICAgICAgICB2YXIgZmlsZSA9ICFpc0lucHV0ID8gc29tZSA6IG51bGw7XG5cdFxuXHQgICAgICAgICAgICBleHRlbmQodGhpcywge1xuXHQgICAgICAgICAgICAgICAgdXJsOiB1cGxvYWRlci51cmwsXG5cdCAgICAgICAgICAgICAgICBhbGlhczogdXBsb2FkZXIuYWxpYXMsXG5cdCAgICAgICAgICAgICAgICBoZWFkZXJzOiBjb3B5KHVwbG9hZGVyLmhlYWRlcnMpLFxuXHQgICAgICAgICAgICAgICAgZm9ybURhdGE6IGNvcHkodXBsb2FkZXIuZm9ybURhdGEpLFxuXHQgICAgICAgICAgICAgICAgcmVtb3ZlQWZ0ZXJVcGxvYWQ6IHVwbG9hZGVyLnJlbW92ZUFmdGVyVXBsb2FkLFxuXHQgICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB1cGxvYWRlci53aXRoQ3JlZGVudGlhbHMsXG5cdCAgICAgICAgICAgICAgICBkaXNhYmxlTXVsdGlwYXJ0OiB1cGxvYWRlci5kaXNhYmxlTXVsdGlwYXJ0LFxuXHQgICAgICAgICAgICAgICAgbWV0aG9kOiB1cGxvYWRlci5tZXRob2Rcblx0ICAgICAgICAgICAgfSwgb3B0aW9ucywge1xuXHQgICAgICAgICAgICAgICAgdXBsb2FkZXI6IHVwbG9hZGVyLFxuXHQgICAgICAgICAgICAgICAgZmlsZTogbmV3IEZpbGVMaWtlT2JqZWN0KHNvbWUpLFxuXHQgICAgICAgICAgICAgICAgaXNSZWFkeTogZmFsc2UsXG5cdCAgICAgICAgICAgICAgICBpc1VwbG9hZGluZzogZmFsc2UsXG5cdCAgICAgICAgICAgICAgICBpc1VwbG9hZGVkOiBmYWxzZSxcblx0ICAgICAgICAgICAgICAgIGlzU3VjY2VzczogZmFsc2UsXG5cdCAgICAgICAgICAgICAgICBpc0NhbmNlbDogZmFsc2UsXG5cdCAgICAgICAgICAgICAgICBpc0Vycm9yOiBmYWxzZSxcblx0ICAgICAgICAgICAgICAgIHByb2dyZXNzOiAwLFxuXHQgICAgICAgICAgICAgICAgaW5kZXg6IG51bGwsXG5cdCAgICAgICAgICAgICAgICBfZmlsZTogZmlsZSxcblx0ICAgICAgICAgICAgICAgIF9pbnB1dDogaW5wdXRcblx0ICAgICAgICAgICAgfSk7XG5cdFxuXHQgICAgICAgICAgICBpZiAoaW5wdXQpIHRoaXMuX3JlcGxhY2VOb2RlKGlucHV0KTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgLyoqKioqKioqKioqKioqKioqKioqKipcblx0ICAgICAgICAgKiBQVUJMSUNcblx0ICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKi9cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBVcGxvYWRzIGEgRmlsZUl0ZW1cblx0ICAgICAgICAgKi9cblx0XG5cdFxuXHQgICAgICAgIEZpbGVJdGVtLnByb3RvdHlwZS51cGxvYWQgPSBmdW5jdGlvbiB1cGxvYWQoKSB7XG5cdCAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZGVyLnVwbG9hZEl0ZW0odGhpcyk7XG5cdCAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkZXIuX29uQ29tcGxldGVJdGVtKHRoaXMsICcnLCAwLCBbXSk7XG5cdCAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZGVyLl9vbkVycm9ySXRlbSh0aGlzLCAnJywgMCwgW10pO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfTtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDYW5jZWxzIHVwbG9hZGluZyBvZiBGaWxlSXRlbVxuXHQgICAgICAgICAqL1xuXHRcblx0XG5cdCAgICAgICAgRmlsZUl0ZW0ucHJvdG90eXBlLmNhbmNlbCA9IGZ1bmN0aW9uIGNhbmNlbCgpIHtcblx0ICAgICAgICAgICAgdGhpcy51cGxvYWRlci5jYW5jZWxJdGVtKHRoaXMpO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUmVtb3ZlcyBhIEZpbGVJdGVtXG5cdCAgICAgICAgICovXG5cdFxuXHRcblx0ICAgICAgICBGaWxlSXRlbS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuXHQgICAgICAgICAgICB0aGlzLnVwbG9hZGVyLnJlbW92ZUZyb21RdWV1ZSh0aGlzKTtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENhbGxiYWNrXG5cdCAgICAgICAgICogQHByaXZhdGVcblx0ICAgICAgICAgKi9cblx0XG5cdFxuXHQgICAgICAgIEZpbGVJdGVtLnByb3RvdHlwZS5vbkJlZm9yZVVwbG9hZCA9IGZ1bmN0aW9uIG9uQmVmb3JlVXBsb2FkKCkge307XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ2FsbGJhY2tcblx0ICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gcHJvZ3Jlc3Ncblx0ICAgICAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICAgICAqL1xuXHRcblx0XG5cdCAgICAgICAgRmlsZUl0ZW0ucHJvdG90eXBlLm9uUHJvZ3Jlc3MgPSBmdW5jdGlvbiBvblByb2dyZXNzKHByb2dyZXNzKSB7fTtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDYWxsYmFja1xuXHQgICAgICAgICAqIEBwYXJhbSB7Kn0gcmVzcG9uc2Vcblx0ICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gc3RhdHVzXG5cdCAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGhlYWRlcnNcblx0ICAgICAgICAgKi9cblx0XG5cdFxuXHQgICAgICAgIEZpbGVJdGVtLnByb3RvdHlwZS5vblN1Y2Nlc3MgPSBmdW5jdGlvbiBvblN1Y2Nlc3MocmVzcG9uc2UsIHN0YXR1cywgaGVhZGVycykge307XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ2FsbGJhY2tcblx0ICAgICAgICAgKiBAcGFyYW0geyp9IHJlc3BvbnNlXG5cdCAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IHN0YXR1c1xuXHQgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBoZWFkZXJzXG5cdCAgICAgICAgICovXG5cdFxuXHRcblx0ICAgICAgICBGaWxlSXRlbS5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIG9uRXJyb3IocmVzcG9uc2UsIHN0YXR1cywgaGVhZGVycykge307XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ2FsbGJhY2tcblx0ICAgICAgICAgKiBAcGFyYW0geyp9IHJlc3BvbnNlXG5cdCAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IHN0YXR1c1xuXHQgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBoZWFkZXJzXG5cdCAgICAgICAgICovXG5cdFxuXHRcblx0ICAgICAgICBGaWxlSXRlbS5wcm90b3R5cGUub25DYW5jZWwgPSBmdW5jdGlvbiBvbkNhbmNlbChyZXNwb25zZSwgc3RhdHVzLCBoZWFkZXJzKSB7fTtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDYWxsYmFja1xuXHQgICAgICAgICAqIEBwYXJhbSB7Kn0gcmVzcG9uc2Vcblx0ICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gc3RhdHVzXG5cdCAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGhlYWRlcnNcblx0ICAgICAgICAgKi9cblx0XG5cdFxuXHQgICAgICAgIEZpbGVJdGVtLnByb3RvdHlwZS5vbkNvbXBsZXRlID0gZnVuY3Rpb24gb25Db21wbGV0ZShyZXNwb25zZSwgc3RhdHVzLCBoZWFkZXJzKSB7fTtcblx0ICAgICAgICAvKioqKioqKioqKioqKioqKioqKioqKlxuXHQgICAgICAgICAqIFBSSVZBVEVcblx0ICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKi9cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBJbm5lciBjYWxsYmFja1xuXHQgICAgICAgICAqL1xuXHRcblx0XG5cdCAgICAgICAgRmlsZUl0ZW0ucHJvdG90eXBlLl9vbkJlZm9yZVVwbG9hZCA9IGZ1bmN0aW9uIF9vbkJlZm9yZVVwbG9hZCgpIHtcblx0ICAgICAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcblx0ICAgICAgICAgICAgdGhpcy5pc1VwbG9hZGluZyA9IGZhbHNlO1xuXHQgICAgICAgICAgICB0aGlzLmlzVXBsb2FkZWQgPSBmYWxzZTtcblx0ICAgICAgICAgICAgdGhpcy5pc1N1Y2Nlc3MgPSBmYWxzZTtcblx0ICAgICAgICAgICAgdGhpcy5pc0NhbmNlbCA9IGZhbHNlO1xuXHQgICAgICAgICAgICB0aGlzLmlzRXJyb3IgPSBmYWxzZTtcblx0ICAgICAgICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XG5cdCAgICAgICAgICAgIHRoaXMub25CZWZvcmVVcGxvYWQoKTtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIElubmVyIGNhbGxiYWNrXG5cdCAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IHByb2dyZXNzXG5cdCAgICAgICAgICogQHByaXZhdGVcblx0ICAgICAgICAgKi9cblx0XG5cdFxuXHQgICAgICAgIEZpbGVJdGVtLnByb3RvdHlwZS5fb25Qcm9ncmVzcyA9IGZ1bmN0aW9uIF9vblByb2dyZXNzKHByb2dyZXNzKSB7XG5cdCAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MgPSBwcm9ncmVzcztcblx0ICAgICAgICAgICAgdGhpcy5vblByb2dyZXNzKHByb2dyZXNzKTtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIElubmVyIGNhbGxiYWNrXG5cdCAgICAgICAgICogQHBhcmFtIHsqfSByZXNwb25zZVxuXHQgICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzdGF0dXNcblx0ICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gaGVhZGVyc1xuXHQgICAgICAgICAqIEBwcml2YXRlXG5cdCAgICAgICAgICovXG5cdFxuXHRcblx0ICAgICAgICBGaWxlSXRlbS5wcm90b3R5cGUuX29uU3VjY2VzcyA9IGZ1bmN0aW9uIF9vblN1Y2Nlc3MocmVzcG9uc2UsIHN0YXR1cywgaGVhZGVycykge1xuXHQgICAgICAgICAgICB0aGlzLmlzUmVhZHkgPSBmYWxzZTtcblx0ICAgICAgICAgICAgdGhpcy5pc1VwbG9hZGluZyA9IGZhbHNlO1xuXHQgICAgICAgICAgICB0aGlzLmlzVXBsb2FkZWQgPSB0cnVlO1xuXHQgICAgICAgICAgICB0aGlzLmlzU3VjY2VzcyA9IHRydWU7XG5cdCAgICAgICAgICAgIHRoaXMuaXNDYW5jZWwgPSBmYWxzZTtcblx0ICAgICAgICAgICAgdGhpcy5pc0Vycm9yID0gZmFsc2U7XG5cdCAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MgPSAxMDA7XG5cdCAgICAgICAgICAgIHRoaXMuaW5kZXggPSBudWxsO1xuXHQgICAgICAgICAgICB0aGlzLm9uU3VjY2VzcyhyZXNwb25zZSwgc3RhdHVzLCBoZWFkZXJzKTtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIElubmVyIGNhbGxiYWNrXG5cdCAgICAgICAgICogQHBhcmFtIHsqfSByZXNwb25zZVxuXHQgICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzdGF0dXNcblx0ICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gaGVhZGVyc1xuXHQgICAgICAgICAqIEBwcml2YXRlXG5cdCAgICAgICAgICovXG5cdFxuXHRcblx0ICAgICAgICBGaWxlSXRlbS5wcm90b3R5cGUuX29uRXJyb3IgPSBmdW5jdGlvbiBfb25FcnJvcihyZXNwb25zZSwgc3RhdHVzLCBoZWFkZXJzKSB7XG5cdCAgICAgICAgICAgIHRoaXMuaXNSZWFkeSA9IGZhbHNlO1xuXHQgICAgICAgICAgICB0aGlzLmlzVXBsb2FkaW5nID0gZmFsc2U7XG5cdCAgICAgICAgICAgIHRoaXMuaXNVcGxvYWRlZCA9IHRydWU7XG5cdCAgICAgICAgICAgIHRoaXMuaXNTdWNjZXNzID0gZmFsc2U7XG5cdCAgICAgICAgICAgIHRoaXMuaXNDYW5jZWwgPSBmYWxzZTtcblx0ICAgICAgICAgICAgdGhpcy5pc0Vycm9yID0gdHJ1ZTtcblx0ICAgICAgICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XG5cdCAgICAgICAgICAgIHRoaXMuaW5kZXggPSBudWxsO1xuXHQgICAgICAgICAgICB0aGlzLm9uRXJyb3IocmVzcG9uc2UsIHN0YXR1cywgaGVhZGVycyk7XG5cdCAgICAgICAgfTtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBJbm5lciBjYWxsYmFja1xuXHQgICAgICAgICAqIEBwYXJhbSB7Kn0gcmVzcG9uc2Vcblx0ICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gc3RhdHVzXG5cdCAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGhlYWRlcnNcblx0ICAgICAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICAgICAqL1xuXHRcblx0XG5cdCAgICAgICAgRmlsZUl0ZW0ucHJvdG90eXBlLl9vbkNhbmNlbCA9IGZ1bmN0aW9uIF9vbkNhbmNlbChyZXNwb25zZSwgc3RhdHVzLCBoZWFkZXJzKSB7XG5cdCAgICAgICAgICAgIHRoaXMuaXNSZWFkeSA9IGZhbHNlO1xuXHQgICAgICAgICAgICB0aGlzLmlzVXBsb2FkaW5nID0gZmFsc2U7XG5cdCAgICAgICAgICAgIHRoaXMuaXNVcGxvYWRlZCA9IGZhbHNlO1xuXHQgICAgICAgICAgICB0aGlzLmlzU3VjY2VzcyA9IGZhbHNlO1xuXHQgICAgICAgICAgICB0aGlzLmlzQ2FuY2VsID0gdHJ1ZTtcblx0ICAgICAgICAgICAgdGhpcy5pc0Vycm9yID0gZmFsc2U7XG5cdCAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuXHQgICAgICAgICAgICB0aGlzLmluZGV4ID0gbnVsbDtcblx0ICAgICAgICAgICAgdGhpcy5vbkNhbmNlbChyZXNwb25zZSwgc3RhdHVzLCBoZWFkZXJzKTtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIElubmVyIGNhbGxiYWNrXG5cdCAgICAgICAgICogQHBhcmFtIHsqfSByZXNwb25zZVxuXHQgICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzdGF0dXNcblx0ICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gaGVhZGVyc1xuXHQgICAgICAgICAqIEBwcml2YXRlXG5cdCAgICAgICAgICovXG5cdFxuXHRcblx0ICAgICAgICBGaWxlSXRlbS5wcm90b3R5cGUuX29uQ29tcGxldGUgPSBmdW5jdGlvbiBfb25Db21wbGV0ZShyZXNwb25zZSwgc3RhdHVzLCBoZWFkZXJzKSB7XG5cdCAgICAgICAgICAgIHRoaXMub25Db21wbGV0ZShyZXNwb25zZSwgc3RhdHVzLCBoZWFkZXJzKTtcblx0ICAgICAgICAgICAgaWYgKHRoaXMucmVtb3ZlQWZ0ZXJVcGxvYWQpIHRoaXMucmVtb3ZlKCk7XG5cdCAgICAgICAgfTtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBEZXN0cm95cyBhIEZpbGVJdGVtXG5cdCAgICAgICAgICovXG5cdFxuXHRcblx0ICAgICAgICBGaWxlSXRlbS5wcm90b3R5cGUuX2Rlc3Ryb3kgPSBmdW5jdGlvbiBfZGVzdHJveSgpIHtcblx0ICAgICAgICAgICAgaWYgKHRoaXMuX2lucHV0KSB0aGlzLl9pbnB1dC5yZW1vdmUoKTtcblx0ICAgICAgICAgICAgaWYgKHRoaXMuX2Zvcm0pIHRoaXMuX2Zvcm0ucmVtb3ZlKCk7XG5cdCAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9mb3JtO1xuXHQgICAgICAgICAgICBkZWxldGUgdGhpcy5faW5wdXQ7XG5cdCAgICAgICAgfTtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBQcmVwYXJlcyB0byB1cGxvYWRpbmdcblx0ICAgICAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICAgICAqL1xuXHRcblx0XG5cdCAgICAgICAgRmlsZUl0ZW0ucHJvdG90eXBlLl9wcmVwYXJlVG9VcGxvYWRpbmcgPSBmdW5jdGlvbiBfcHJlcGFyZVRvVXBsb2FkaW5nKCkge1xuXHQgICAgICAgICAgICB0aGlzLmluZGV4ID0gdGhpcy5pbmRleCB8fCArK3RoaXMudXBsb2FkZXIuX25leHRJbmRleDtcblx0ICAgICAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFJlcGxhY2VzIGlucHV0IGVsZW1lbnQgb24gaGlzIGNsb25lXG5cdCAgICAgICAgICogQHBhcmFtIHtKUUxpdGV8alF1ZXJ5fSBpbnB1dFxuXHQgICAgICAgICAqIEBwcml2YXRlXG5cdCAgICAgICAgICovXG5cdFxuXHRcblx0ICAgICAgICBGaWxlSXRlbS5wcm90b3R5cGUuX3JlcGxhY2VOb2RlID0gZnVuY3Rpb24gX3JlcGxhY2VOb2RlKGlucHV0KSB7XG5cdCAgICAgICAgICAgIHZhciBjbG9uZSA9ICRjb21waWxlKGlucHV0LmNsb25lKCkpKGlucHV0LnNjb3BlKCkpO1xuXHQgICAgICAgICAgICBjbG9uZS5wcm9wKCd2YWx1ZScsIG51bGwpOyAvLyBGRiBmaXhcblx0ICAgICAgICAgICAgaW5wdXQuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblx0ICAgICAgICAgICAgaW5wdXQuYWZ0ZXIoY2xvbmUpOyAvLyByZW1vdmUganF1ZXJ5IGRlcGVuZGVuY3lcblx0ICAgICAgICB9O1xuXHRcblx0ICAgICAgICByZXR1cm4gRmlsZUl0ZW07XG5cdCAgICB9KCk7XG5cdH1cblx0XG5cdF9faWRlbnRpdHkuJGluamVjdCA9IFsnJGNvbXBpbGUnLCAnRmlsZUxpa2VPYmplY3QnXTtcblxuLyoqKi8gfSxcbi8qIDYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGV4cG9ydHMuZGVmYXVsdCA9IF9faWRlbnRpdHk7XG5cdFxuXHR2YXIgX2NvbmZpZyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cdFxuXHR2YXIgX2NvbmZpZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb25maWcpO1xuXHRcblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblx0XG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cdFxuXHR2YXIgX2FuZ3VsYXIgPSBhbmd1bGFyO1xuXHR2YXIgZXh0ZW5kID0gX2FuZ3VsYXIuZXh0ZW5kO1xuXHRmdW5jdGlvbiBfX2lkZW50aXR5KCkge1xuXHQgICAgdmFyIEZpbGVEaXJlY3RpdmUgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBpbnN0YW5jZSBvZiB7RmlsZURpcmVjdGl2ZX0gb2JqZWN0XG5cdCAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcblx0ICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy51cGxvYWRlclxuXHQgICAgICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG9wdGlvbnMuZWxlbWVudFxuXHQgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLmV2ZW50c1xuXHQgICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLnByb3Bcblx0ICAgICAgICAgKiBAY29uc3RydWN0b3Jcblx0ICAgICAgICAgKi9cblx0XG5cdCAgICAgICAgZnVuY3Rpb24gRmlsZURpcmVjdGl2ZShvcHRpb25zKSB7XG5cdCAgICAgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGaWxlRGlyZWN0aXZlKTtcblx0XG5cdCAgICAgICAgICAgIGV4dGVuZCh0aGlzLCBvcHRpb25zKTtcblx0ICAgICAgICAgICAgdGhpcy51cGxvYWRlci5fZGlyZWN0aXZlc1t0aGlzLnByb3BdLnB1c2godGhpcyk7XG5cdCAgICAgICAgICAgIHRoaXMuX3NhdmVMaW5rcygpO1xuXHQgICAgICAgICAgICB0aGlzLmJpbmQoKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQmluZHMgZXZlbnRzIGhhbmRsZXNcblx0ICAgICAgICAgKi9cblx0XG5cdFxuXHQgICAgICAgIEZpbGVEaXJlY3RpdmUucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiBiaW5kKCkge1xuXHQgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5ldmVudHMpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBwcm9wID0gdGhpcy5ldmVudHNba2V5XTtcblx0ICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5iaW5kKGtleSwgdGhpc1twcm9wXSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9O1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFVuYmluZHMgZXZlbnRzIGhhbmRsZXNcblx0ICAgICAgICAgKi9cblx0XG5cdFxuXHQgICAgICAgIEZpbGVEaXJlY3RpdmUucHJvdG90eXBlLnVuYmluZCA9IGZ1bmN0aW9uIHVuYmluZCgpIHtcblx0ICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuZXZlbnRzKSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQudW5iaW5kKGtleSwgdGhpcy5ldmVudHNba2V5XSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9O1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIERlc3Ryb3lzIGRpcmVjdGl2ZVxuXHQgICAgICAgICAqL1xuXHRcblx0XG5cdCAgICAgICAgRmlsZURpcmVjdGl2ZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cdCAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMudXBsb2FkZXIuX2RpcmVjdGl2ZXNbdGhpcy5wcm9wXS5pbmRleE9mKHRoaXMpO1xuXHQgICAgICAgICAgICB0aGlzLnVwbG9hZGVyLl9kaXJlY3RpdmVzW3RoaXMucHJvcF0uc3BsaWNlKGluZGV4LCAxKTtcblx0ICAgICAgICAgICAgdGhpcy51bmJpbmQoKTtcblx0ICAgICAgICAgICAgLy8gdGhpcy5lbGVtZW50ID0gbnVsbDtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFNhdmVzIGxpbmtzIHRvIGZ1bmN0aW9uc1xuXHQgICAgICAgICAqIEBwcml2YXRlXG5cdCAgICAgICAgICovXG5cdFxuXHRcblx0ICAgICAgICBGaWxlRGlyZWN0aXZlLnByb3RvdHlwZS5fc2F2ZUxpbmtzID0gZnVuY3Rpb24gX3NhdmVMaW5rcygpIHtcblx0ICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuZXZlbnRzKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgcHJvcCA9IHRoaXMuZXZlbnRzW2tleV07XG5cdCAgICAgICAgICAgICAgICB0aGlzW3Byb3BdID0gdGhpc1twcm9wXS5iaW5kKHRoaXMpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfTtcblx0XG5cdCAgICAgICAgcmV0dXJuIEZpbGVEaXJlY3RpdmU7XG5cdCAgICB9KCk7XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBNYXAgb2YgZXZlbnRzXG5cdCAgICAgKiBAdHlwZSB7T2JqZWN0fVxuXHQgICAgICovXG5cdFxuXHRcblx0ICAgIEZpbGVEaXJlY3RpdmUucHJvdG90eXBlLmV2ZW50cyA9IHt9O1xuXHRcblx0ICAgIHJldHVybiBGaWxlRGlyZWN0aXZlO1xuXHR9XG5cbi8qKiovIH0sXG4vKiA3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRleHBvcnRzLmRlZmF1bHQgPSBfX2lkZW50aXR5O1xuXHRcblx0dmFyIF9jb25maWcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXHRcblx0dmFyIF9jb25maWcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29uZmlnKTtcblx0XG5cdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cdFxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXHRcblx0ZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cdFxuXHRmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblx0XG5cdHZhciBfYW5ndWxhciA9IGFuZ3VsYXI7XG5cdHZhciBleHRlbmQgPSBfYW5ndWxhci5leHRlbmQ7XG5cdGZ1bmN0aW9uIF9faWRlbnRpdHkoJGNvbXBpbGUsIEZpbGVEaXJlY3RpdmUpIHtcblx0XG5cdCAgICByZXR1cm4gZnVuY3Rpb24gKF9GaWxlRGlyZWN0aXZlKSB7XG5cdCAgICAgICAgX2luaGVyaXRzKEZpbGVTZWxlY3QsIF9GaWxlRGlyZWN0aXZlKTtcblx0XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBpbnN0YW5jZSBvZiB7RmlsZVNlbGVjdH0gb2JqZWN0XG5cdCAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcblx0ICAgICAgICAgKiBAY29uc3RydWN0b3Jcblx0ICAgICAgICAgKi9cblx0XG5cdCAgICAgICAgZnVuY3Rpb24gRmlsZVNlbGVjdChvcHRpb25zKSB7XG5cdCAgICAgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGaWxlU2VsZWN0KTtcblx0XG5cdCAgICAgICAgICAgIHZhciBleHRlbmRlZE9wdGlvbnMgPSBleHRlbmQob3B0aW9ucywge1xuXHQgICAgICAgICAgICAgICAgLy8gTWFwIG9mIGV2ZW50c1xuXHQgICAgICAgICAgICAgICAgZXZlbnRzOiB7XG5cdCAgICAgICAgICAgICAgICAgICAgJGRlc3Ryb3k6ICdkZXN0cm95Jyxcblx0ICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6ICdvbkNoYW5nZSdcblx0ICAgICAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgICAgICAvLyBOYW1lIG9mIHByb3BlcnR5IGluc2lkZSB1cGxvYWRlci5fZGlyZWN0aXZlIG9iamVjdFxuXHQgICAgICAgICAgICAgICAgcHJvcDogJ3NlbGVjdCdcblx0ICAgICAgICAgICAgfSk7XG5cdFxuXHQgICAgICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfRmlsZURpcmVjdGl2ZS5jYWxsKHRoaXMsIGV4dGVuZGVkT3B0aW9ucykpO1xuXHRcblx0ICAgICAgICAgICAgaWYgKCFfdGhpcy51cGxvYWRlci5pc0hUTUw1KSB7XG5cdCAgICAgICAgICAgICAgICBfdGhpcy5lbGVtZW50LnJlbW92ZUF0dHIoJ211bHRpcGxlJyk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgX3RoaXMuZWxlbWVudC5wcm9wKCd2YWx1ZScsIG51bGwpOyAvLyBGRiBmaXhcblx0ICAgICAgICAgICAgcmV0dXJuIF90aGlzO1xuXHQgICAgICAgIH1cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBSZXR1cm5zIG9wdGlvbnNcblx0ICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R8dW5kZWZpbmVkfVxuXHQgICAgICAgICAqL1xuXHRcblx0XG5cdCAgICAgICAgRmlsZVNlbGVjdC5wcm90b3R5cGUuZ2V0T3B0aW9ucyA9IGZ1bmN0aW9uIGdldE9wdGlvbnMoKSB7fTtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBSZXR1cm5zIGZpbHRlcnNcblx0ICAgICAgICAgKiBAcmV0dXJuIHtBcnJheTxGdW5jdGlvbj58U3RyaW5nfHVuZGVmaW5lZH1cblx0ICAgICAgICAgKi9cblx0XG5cdFxuXHQgICAgICAgIEZpbGVTZWxlY3QucHJvdG90eXBlLmdldEZpbHRlcnMgPSBmdW5jdGlvbiBnZXRGaWx0ZXJzKCkge307XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogSWYgcmV0dXJucyBcInRydWVcIiB0aGVuIEhUTUxJbnB1dEVsZW1lbnQgd2lsbCBiZSBjbGVhcmVkXG5cdCAgICAgICAgICogQHJldHVybnMge0Jvb2xlYW59XG5cdCAgICAgICAgICovXG5cdFxuXHRcblx0ICAgICAgICBGaWxlU2VsZWN0LnByb3RvdHlwZS5pc0VtcHR5QWZ0ZXJTZWxlY3Rpb24gPSBmdW5jdGlvbiBpc0VtcHR5QWZ0ZXJTZWxlY3Rpb24oKSB7XG5cdCAgICAgICAgICAgIHJldHVybiAhIXRoaXMuZWxlbWVudC5hdHRyKCdtdWx0aXBsZScpO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogRXZlbnQgaGFuZGxlclxuXHQgICAgICAgICAqL1xuXHRcblx0XG5cdCAgICAgICAgRmlsZVNlbGVjdC5wcm90b3R5cGUub25DaGFuZ2UgPSBmdW5jdGlvbiBvbkNoYW5nZSgpIHtcblx0ICAgICAgICAgICAgdmFyIGZpbGVzID0gdGhpcy51cGxvYWRlci5pc0hUTUw1ID8gdGhpcy5lbGVtZW50WzBdLmZpbGVzIDogdGhpcy5lbGVtZW50WzBdO1xuXHQgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHRoaXMuZ2V0T3B0aW9ucygpO1xuXHQgICAgICAgICAgICB2YXIgZmlsdGVycyA9IHRoaXMuZ2V0RmlsdGVycygpO1xuXHRcblx0ICAgICAgICAgICAgaWYgKCF0aGlzLnVwbG9hZGVyLmlzSFRNTDUpIHRoaXMuZGVzdHJveSgpO1xuXHQgICAgICAgICAgICB0aGlzLnVwbG9hZGVyLmFkZFRvUXVldWUoZmlsZXMsIG9wdGlvbnMsIGZpbHRlcnMpO1xuXHQgICAgICAgICAgICBpZiAodGhpcy5pc0VtcHR5QWZ0ZXJTZWxlY3Rpb24oKSkge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnByb3AoJ3ZhbHVlJywgbnVsbCk7XG5cdCAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVwbGFjZVdpdGgoJGNvbXBpbGUodGhpcy5lbGVtZW50LmNsb25lKCkpKHRoaXMuc2NvcGUpKTsgLy8gSUUgZml4XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9O1xuXHRcblx0ICAgICAgICByZXR1cm4gRmlsZVNlbGVjdDtcblx0ICAgIH0oRmlsZURpcmVjdGl2ZSk7XG5cdH1cblx0XG5cdF9faWRlbnRpdHkuJGluamVjdCA9IFsnJGNvbXBpbGUnLCAnRmlsZURpcmVjdGl2ZSddO1xuXG4vKioqLyB9LFxuLyogOCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0ZXhwb3J0cy5kZWZhdWx0ID0gX19pZGVudGl0eTtcblx0XG5cdHZhciBfY29uZmlnID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblx0XG5cdHZhciBfY29uZmlnMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbmZpZyk7XG5cdFxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXHRcblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblx0XG5cdGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXHRcblx0ZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cdFxuXHR2YXIgX2FuZ3VsYXIgPSBhbmd1bGFyO1xuXHR2YXIgZXh0ZW5kID0gX2FuZ3VsYXIuZXh0ZW5kO1xuXHR2YXIgZm9yRWFjaCA9IF9hbmd1bGFyLmZvckVhY2g7XG5cdGZ1bmN0aW9uIF9faWRlbnRpdHkoRmlsZURpcmVjdGl2ZSkge1xuXHRcblx0ICAgIHJldHVybiBmdW5jdGlvbiAoX0ZpbGVEaXJlY3RpdmUpIHtcblx0ICAgICAgICBfaW5oZXJpdHMoRmlsZURyb3AsIF9GaWxlRGlyZWN0aXZlKTtcblx0XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBpbnN0YW5jZSBvZiB7RmlsZURyb3B9IG9iamVjdFxuXHQgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG5cdCAgICAgICAgICogQGNvbnN0cnVjdG9yXG5cdCAgICAgICAgICovXG5cdFxuXHQgICAgICAgIGZ1bmN0aW9uIEZpbGVEcm9wKG9wdGlvbnMpIHtcblx0ICAgICAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZpbGVEcm9wKTtcblx0XG5cdCAgICAgICAgICAgIHZhciBleHRlbmRlZE9wdGlvbnMgPSBleHRlbmQob3B0aW9ucywge1xuXHQgICAgICAgICAgICAgICAgLy8gTWFwIG9mIGV2ZW50c1xuXHQgICAgICAgICAgICAgICAgZXZlbnRzOiB7XG5cdCAgICAgICAgICAgICAgICAgICAgJGRlc3Ryb3k6ICdkZXN0cm95Jyxcblx0ICAgICAgICAgICAgICAgICAgICBkcm9wOiAnb25Ecm9wJyxcblx0ICAgICAgICAgICAgICAgICAgICBkcmFnb3ZlcjogJ29uRHJhZ092ZXInLFxuXHQgICAgICAgICAgICAgICAgICAgIGRyYWdsZWF2ZTogJ29uRHJhZ0xlYXZlJ1xuXHQgICAgICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgICAgIC8vIE5hbWUgb2YgcHJvcGVydHkgaW5zaWRlIHVwbG9hZGVyLl9kaXJlY3RpdmUgb2JqZWN0XG5cdCAgICAgICAgICAgICAgICBwcm9wOiAnZHJvcCdcblx0ICAgICAgICAgICAgfSk7XG5cdFxuXHQgICAgICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0ZpbGVEaXJlY3RpdmUuY2FsbCh0aGlzLCBleHRlbmRlZE9wdGlvbnMpKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUmV0dXJucyBvcHRpb25zXG5cdCAgICAgICAgICogQHJldHVybiB7T2JqZWN0fHVuZGVmaW5lZH1cblx0ICAgICAgICAgKi9cblx0XG5cdFxuXHQgICAgICAgIEZpbGVEcm9wLnByb3RvdHlwZS5nZXRPcHRpb25zID0gZnVuY3Rpb24gZ2V0T3B0aW9ucygpIHt9O1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFJldHVybnMgZmlsdGVyc1xuXHQgICAgICAgICAqIEByZXR1cm4ge0FycmF5PEZ1bmN0aW9uPnxTdHJpbmd8dW5kZWZpbmVkfVxuXHQgICAgICAgICAqL1xuXHRcblx0XG5cdCAgICAgICAgRmlsZURyb3AucHJvdG90eXBlLmdldEZpbHRlcnMgPSBmdW5jdGlvbiBnZXRGaWx0ZXJzKCkge307XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogRXZlbnQgaGFuZGxlclxuXHQgICAgICAgICAqL1xuXHRcblx0XG5cdCAgICAgICAgRmlsZURyb3AucHJvdG90eXBlLm9uRHJvcCA9IGZ1bmN0aW9uIG9uRHJvcChldmVudCkge1xuXHQgICAgICAgICAgICB2YXIgdHJhbnNmZXIgPSB0aGlzLl9nZXRUcmFuc2ZlcihldmVudCk7XG5cdCAgICAgICAgICAgIGlmICghdHJhbnNmZXIpIHJldHVybjtcblx0ICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLmdldE9wdGlvbnMoKTtcblx0ICAgICAgICAgICAgdmFyIGZpbHRlcnMgPSB0aGlzLmdldEZpbHRlcnMoKTtcblx0ICAgICAgICAgICAgdGhpcy5fcHJldmVudEFuZFN0b3AoZXZlbnQpO1xuXHQgICAgICAgICAgICBmb3JFYWNoKHRoaXMudXBsb2FkZXIuX2RpcmVjdGl2ZXMub3ZlciwgdGhpcy5fcmVtb3ZlT3ZlckNsYXNzLCB0aGlzKTtcblx0ICAgICAgICAgICAgdGhpcy51cGxvYWRlci5hZGRUb1F1ZXVlKHRyYW5zZmVyLmZpbGVzLCBvcHRpb25zLCBmaWx0ZXJzKTtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEV2ZW50IGhhbmRsZXJcblx0ICAgICAgICAgKi9cblx0XG5cdFxuXHQgICAgICAgIEZpbGVEcm9wLnByb3RvdHlwZS5vbkRyYWdPdmVyID0gZnVuY3Rpb24gb25EcmFnT3ZlcihldmVudCkge1xuXHQgICAgICAgICAgICB2YXIgdHJhbnNmZXIgPSB0aGlzLl9nZXRUcmFuc2ZlcihldmVudCk7XG5cdCAgICAgICAgICAgIGlmICghdGhpcy5faGF2ZUZpbGVzKHRyYW5zZmVyLnR5cGVzKSkgcmV0dXJuO1xuXHQgICAgICAgICAgICB0cmFuc2Zlci5kcm9wRWZmZWN0ID0gJ2NvcHknO1xuXHQgICAgICAgICAgICB0aGlzLl9wcmV2ZW50QW5kU3RvcChldmVudCk7XG5cdCAgICAgICAgICAgIGZvckVhY2godGhpcy51cGxvYWRlci5fZGlyZWN0aXZlcy5vdmVyLCB0aGlzLl9hZGRPdmVyQ2xhc3MsIHRoaXMpO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogRXZlbnQgaGFuZGxlclxuXHQgICAgICAgICAqL1xuXHRcblx0XG5cdCAgICAgICAgRmlsZURyb3AucHJvdG90eXBlLm9uRHJhZ0xlYXZlID0gZnVuY3Rpb24gb25EcmFnTGVhdmUoZXZlbnQpIHtcblx0ICAgICAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQgPT09IHRoaXMuZWxlbWVudFswXSkgcmV0dXJuO1xuXHQgICAgICAgICAgICB0aGlzLl9wcmV2ZW50QW5kU3RvcChldmVudCk7XG5cdCAgICAgICAgICAgIGZvckVhY2godGhpcy51cGxvYWRlci5fZGlyZWN0aXZlcy5vdmVyLCB0aGlzLl9yZW1vdmVPdmVyQ2xhc3MsIHRoaXMpO1xuXHQgICAgICAgIH07XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogSGVscGVyXG5cdCAgICAgICAgICovXG5cdFxuXHRcblx0ICAgICAgICBGaWxlRHJvcC5wcm90b3R5cGUuX2dldFRyYW5zZmVyID0gZnVuY3Rpb24gX2dldFRyYW5zZmVyKGV2ZW50KSB7XG5cdCAgICAgICAgICAgIHJldHVybiBldmVudC5kYXRhVHJhbnNmZXIgPyBldmVudC5kYXRhVHJhbnNmZXIgOiBldmVudC5vcmlnaW5hbEV2ZW50LmRhdGFUcmFuc2ZlcjsgLy8galF1ZXJ5IGZpeDtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEhlbHBlclxuXHQgICAgICAgICAqL1xuXHRcblx0XG5cdCAgICAgICAgRmlsZURyb3AucHJvdG90eXBlLl9wcmV2ZW50QW5kU3RvcCA9IGZ1bmN0aW9uIF9wcmV2ZW50QW5kU3RvcChldmVudCkge1xuXHQgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHQgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFJldHVybnMgXCJ0cnVlXCIgaWYgdHlwZXMgY29udGFpbnMgZmlsZXNcblx0ICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gdHlwZXNcblx0ICAgICAgICAgKi9cblx0XG5cdFxuXHQgICAgICAgIEZpbGVEcm9wLnByb3RvdHlwZS5faGF2ZUZpbGVzID0gZnVuY3Rpb24gX2hhdmVGaWxlcyh0eXBlcykge1xuXHQgICAgICAgICAgICBpZiAoIXR5cGVzKSByZXR1cm4gZmFsc2U7XG5cdCAgICAgICAgICAgIGlmICh0eXBlcy5pbmRleE9mKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gdHlwZXMuaW5kZXhPZignRmlsZXMnKSAhPT0gLTE7XG5cdCAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZXMuY29udGFpbnMpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiB0eXBlcy5jb250YWlucygnRmlsZXMnKTtcblx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH07XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ2FsbGJhY2tcblx0ICAgICAgICAgKi9cblx0XG5cdFxuXHQgICAgICAgIEZpbGVEcm9wLnByb3RvdHlwZS5fYWRkT3ZlckNsYXNzID0gZnVuY3Rpb24gX2FkZE92ZXJDbGFzcyhpdGVtKSB7XG5cdCAgICAgICAgICAgIGl0ZW0uYWRkT3ZlckNsYXNzKCk7XG5cdCAgICAgICAgfTtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDYWxsYmFja1xuXHQgICAgICAgICAqL1xuXHRcblx0XG5cdCAgICAgICAgRmlsZURyb3AucHJvdG90eXBlLl9yZW1vdmVPdmVyQ2xhc3MgPSBmdW5jdGlvbiBfcmVtb3ZlT3ZlckNsYXNzKGl0ZW0pIHtcblx0ICAgICAgICAgICAgaXRlbS5yZW1vdmVPdmVyQ2xhc3MoKTtcblx0ICAgICAgICB9O1xuXHRcblx0ICAgICAgICByZXR1cm4gRmlsZURyb3A7XG5cdCAgICB9KEZpbGVEaXJlY3RpdmUpO1xuXHR9XG5cdFxuXHRfX2lkZW50aXR5LiRpbmplY3QgPSBbJ0ZpbGVEaXJlY3RpdmUnXTtcblxuLyoqKi8gfSxcbi8qIDkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGV4cG9ydHMuZGVmYXVsdCA9IF9faWRlbnRpdHk7XG5cdFxuXHR2YXIgX2NvbmZpZyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cdFxuXHR2YXIgX2NvbmZpZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb25maWcpO1xuXHRcblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblx0XG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cdFxuXHRmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblx0XG5cdGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXHRcblx0dmFyIF9hbmd1bGFyID0gYW5ndWxhcjtcblx0dmFyIGV4dGVuZCA9IF9hbmd1bGFyLmV4dGVuZDtcblx0ZnVuY3Rpb24gX19pZGVudGl0eShGaWxlRGlyZWN0aXZlKSB7XG5cdFxuXHQgICAgcmV0dXJuIGZ1bmN0aW9uIChfRmlsZURpcmVjdGl2ZSkge1xuXHQgICAgICAgIF9pbmhlcml0cyhGaWxlT3ZlciwgX0ZpbGVEaXJlY3RpdmUpO1xuXHRcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGluc3RhbmNlIG9mIHtGaWxlRHJvcH0gb2JqZWN0XG5cdCAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcblx0ICAgICAgICAgKiBAY29uc3RydWN0b3Jcblx0ICAgICAgICAgKi9cblx0XG5cdCAgICAgICAgZnVuY3Rpb24gRmlsZU92ZXIob3B0aW9ucykge1xuXHQgICAgICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRmlsZU92ZXIpO1xuXHRcblx0ICAgICAgICAgICAgdmFyIGV4dGVuZGVkT3B0aW9ucyA9IGV4dGVuZChvcHRpb25zLCB7XG5cdCAgICAgICAgICAgICAgICAvLyBNYXAgb2YgZXZlbnRzXG5cdCAgICAgICAgICAgICAgICBldmVudHM6IHtcblx0ICAgICAgICAgICAgICAgICAgICAkZGVzdHJveTogJ2Rlc3Ryb3knXG5cdCAgICAgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICAgICAgLy8gTmFtZSBvZiBwcm9wZXJ0eSBpbnNpZGUgdXBsb2FkZXIuX2RpcmVjdGl2ZSBvYmplY3Rcblx0ICAgICAgICAgICAgICAgIHByb3A6ICdvdmVyJyxcblx0ICAgICAgICAgICAgICAgIC8vIE92ZXIgY2xhc3Ncblx0ICAgICAgICAgICAgICAgIG92ZXJDbGFzczogJ252LWZpbGUtb3Zlcidcblx0ICAgICAgICAgICAgfSk7XG5cdFxuXHQgICAgICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0ZpbGVEaXJlY3RpdmUuY2FsbCh0aGlzLCBleHRlbmRlZE9wdGlvbnMpKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQWRkcyBvdmVyIGNsYXNzXG5cdCAgICAgICAgICovXG5cdFxuXHRcblx0ICAgICAgICBGaWxlT3Zlci5wcm90b3R5cGUuYWRkT3ZlckNsYXNzID0gZnVuY3Rpb24gYWRkT3ZlckNsYXNzKCkge1xuXHQgICAgICAgICAgICB0aGlzLmVsZW1lbnQuYWRkQ2xhc3ModGhpcy5nZXRPdmVyQ2xhc3MoKSk7XG5cdCAgICAgICAgfTtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBSZW1vdmVzIG92ZXIgY2xhc3Ncblx0ICAgICAgICAgKi9cblx0XG5cdFxuXHQgICAgICAgIEZpbGVPdmVyLnByb3RvdHlwZS5yZW1vdmVPdmVyQ2xhc3MgPSBmdW5jdGlvbiByZW1vdmVPdmVyQ2xhc3MoKSB7XG5cdCAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyh0aGlzLmdldE92ZXJDbGFzcygpKTtcblx0ICAgICAgICB9O1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFJldHVybnMgb3ZlciBjbGFzc1xuXHQgICAgICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG5cdCAgICAgICAgICovXG5cdFxuXHRcblx0ICAgICAgICBGaWxlT3Zlci5wcm90b3R5cGUuZ2V0T3ZlckNsYXNzID0gZnVuY3Rpb24gZ2V0T3ZlckNsYXNzKCkge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5vdmVyQ2xhc3M7XG5cdCAgICAgICAgfTtcblx0XG5cdCAgICAgICAgcmV0dXJuIEZpbGVPdmVyO1xuXHQgICAgfShGaWxlRGlyZWN0aXZlKTtcblx0fVxuXHRcblx0X19pZGVudGl0eS4kaW5qZWN0ID0gWydGaWxlRGlyZWN0aXZlJ107XG5cbi8qKiovIH0sXG4vKiAxMCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0ZXhwb3J0cy5kZWZhdWx0ID0gX19pZGVudGl0eTtcblx0XG5cdHZhciBfY29uZmlnID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblx0XG5cdHZhciBfY29uZmlnMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbmZpZyk7XG5cdFxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXHRcblx0ZnVuY3Rpb24gX19pZGVudGl0eSgkcGFyc2UsIEZpbGVVcGxvYWRlciwgRmlsZVNlbGVjdCkge1xuXHRcblx0ICAgIHJldHVybiB7XG5cdCAgICAgICAgbGluazogZnVuY3Rpb24gbGluayhzY29wZSwgZWxlbWVudCwgYXR0cmlidXRlcykge1xuXHQgICAgICAgICAgICB2YXIgdXBsb2FkZXIgPSBzY29wZS4kZXZhbChhdHRyaWJ1dGVzLnVwbG9hZGVyKTtcblx0XG5cdCAgICAgICAgICAgIGlmICghKHVwbG9hZGVyIGluc3RhbmNlb2YgRmlsZVVwbG9hZGVyKSkge1xuXHQgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJVcGxvYWRlclwiIG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgRmlsZVVwbG9hZGVyJyk7XG5cdCAgICAgICAgICAgIH1cblx0XG5cdCAgICAgICAgICAgIHZhciBvYmplY3QgPSBuZXcgRmlsZVNlbGVjdCh7XG5cdCAgICAgICAgICAgICAgICB1cGxvYWRlcjogdXBsb2FkZXIsXG5cdCAgICAgICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxuXHQgICAgICAgICAgICAgICAgc2NvcGU6IHNjb3BlXG5cdCAgICAgICAgICAgIH0pO1xuXHRcblx0ICAgICAgICAgICAgb2JqZWN0LmdldE9wdGlvbnMgPSAkcGFyc2UoYXR0cmlidXRlcy5vcHRpb25zKS5iaW5kKG9iamVjdCwgc2NvcGUpO1xuXHQgICAgICAgICAgICBvYmplY3QuZ2V0RmlsdGVycyA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBhdHRyaWJ1dGVzLmZpbHRlcnM7XG5cdCAgICAgICAgICAgIH07XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0fVxuXHRcblx0X19pZGVudGl0eS4kaW5qZWN0ID0gWyckcGFyc2UnLCAnRmlsZVVwbG9hZGVyJywgJ0ZpbGVTZWxlY3QnXTtcblxuLyoqKi8gfSxcbi8qIDExICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRleHBvcnRzLmRlZmF1bHQgPSBfX2lkZW50aXR5O1xuXHRcblx0dmFyIF9jb25maWcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXHRcblx0dmFyIF9jb25maWcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29uZmlnKTtcblx0XG5cdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cdFxuXHRmdW5jdGlvbiBfX2lkZW50aXR5KCRwYXJzZSwgRmlsZVVwbG9hZGVyLCBGaWxlRHJvcCkge1xuXHRcblx0ICAgIHJldHVybiB7XG5cdCAgICAgICAgbGluazogZnVuY3Rpb24gbGluayhzY29wZSwgZWxlbWVudCwgYXR0cmlidXRlcykge1xuXHQgICAgICAgICAgICB2YXIgdXBsb2FkZXIgPSBzY29wZS4kZXZhbChhdHRyaWJ1dGVzLnVwbG9hZGVyKTtcblx0XG5cdCAgICAgICAgICAgIGlmICghKHVwbG9hZGVyIGluc3RhbmNlb2YgRmlsZVVwbG9hZGVyKSkge1xuXHQgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJVcGxvYWRlclwiIG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgRmlsZVVwbG9hZGVyJyk7XG5cdCAgICAgICAgICAgIH1cblx0XG5cdCAgICAgICAgICAgIGlmICghdXBsb2FkZXIuaXNIVE1MNSkgcmV0dXJuO1xuXHRcblx0ICAgICAgICAgICAgdmFyIG9iamVjdCA9IG5ldyBGaWxlRHJvcCh7XG5cdCAgICAgICAgICAgICAgICB1cGxvYWRlcjogdXBsb2FkZXIsXG5cdCAgICAgICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50XG5cdCAgICAgICAgICAgIH0pO1xuXHRcblx0ICAgICAgICAgICAgb2JqZWN0LmdldE9wdGlvbnMgPSAkcGFyc2UoYXR0cmlidXRlcy5vcHRpb25zKS5iaW5kKG9iamVjdCwgc2NvcGUpO1xuXHQgICAgICAgICAgICBvYmplY3QuZ2V0RmlsdGVycyA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBhdHRyaWJ1dGVzLmZpbHRlcnM7XG5cdCAgICAgICAgICAgIH07XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0fVxuXHRcblx0X19pZGVudGl0eS4kaW5qZWN0ID0gWyckcGFyc2UnLCAnRmlsZVVwbG9hZGVyJywgJ0ZpbGVEcm9wJ107XG5cbi8qKiovIH0sXG4vKiAxMiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0ZXhwb3J0cy5kZWZhdWx0ID0gX19pZGVudGl0eTtcblx0XG5cdHZhciBfY29uZmlnID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblx0XG5cdHZhciBfY29uZmlnMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbmZpZyk7XG5cdFxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXHRcblx0ZnVuY3Rpb24gX19pZGVudGl0eShGaWxlVXBsb2FkZXIsIEZpbGVPdmVyKSB7XG5cdFxuXHQgICAgcmV0dXJuIHtcblx0ICAgICAgICBsaW5rOiBmdW5jdGlvbiBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG5cdCAgICAgICAgICAgIHZhciB1cGxvYWRlciA9IHNjb3BlLiRldmFsKGF0dHJpYnV0ZXMudXBsb2FkZXIpO1xuXHRcblx0ICAgICAgICAgICAgaWYgKCEodXBsb2FkZXIgaW5zdGFuY2VvZiBGaWxlVXBsb2FkZXIpKSB7XG5cdCAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcIlVwbG9hZGVyXCIgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBGaWxlVXBsb2FkZXInKTtcblx0ICAgICAgICAgICAgfVxuXHRcblx0ICAgICAgICAgICAgdmFyIG9iamVjdCA9IG5ldyBGaWxlT3Zlcih7XG5cdCAgICAgICAgICAgICAgICB1cGxvYWRlcjogdXBsb2FkZXIsXG5cdCAgICAgICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50XG5cdCAgICAgICAgICAgIH0pO1xuXHRcblx0ICAgICAgICAgICAgb2JqZWN0LmdldE92ZXJDbGFzcyA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBhdHRyaWJ1dGVzLm92ZXJDbGFzcyB8fCBvYmplY3Qub3ZlckNsYXNzO1xuXHQgICAgICAgICAgICB9O1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdH1cblx0XG5cdF9faWRlbnRpdHkuJGluamVjdCA9IFsnRmlsZVVwbG9hZGVyJywgJ0ZpbGVPdmVyJ107XG5cbi8qKiovIH1cbi8qKioqKiovIF0pXG59KTtcbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFuZ3VsYXItZmlsZS11cGxvYWQuanMubWFwIiwiLy8gLS1BdXRob3IgTXVyYWdpamltYW5hIFJpY2hhcmQgPGJlYXN0YXI0NTdAZ21haWwuY29tPlxuXG4kLmFqYXhQcmVmaWx0ZXIoZnVuY3Rpb24gKG9wdGlvbnMsIG9yaWdpbmFsT3B0aW9ucywganFYSFIpIHtcbiAgb3B0aW9ucy5hc3luYyA9IHRydWU7XG59KTtcbnZhciBMb2dnZXIgPSBhbmd1bGFyLm1vZHVsZShcIkxvZ2dlclwiLCBbXSlcblxuLmNvbmZpZyhbJyRzY2VQcm92aWRlcicsICckaHR0cFByb3ZpZGVyJywgZnVuY3Rpb24gKCRzY2VQcm92aWRlciwgJGh0dHBQcm92aWRlcikge1xuICBcbiAgICBkZWxldGUgJGh0dHBQcm92aWRlci5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1SZXF1ZXN0ZWQtV2l0aCddO1xuXG4gICAgJGh0dHBQcm92aWRlci5kZWZhdWx0cy5oZWFkZXJzLnBvc3QuQWNjZXB0ID0gJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdCc7XG4gICAgJGh0dHBQcm92aWRlci5kZWZhdWx0cy5oZWFkZXJzLnBvc3QuQWNjZXB0ID0gJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdCc7XG4gICAgLy8gJGh0dHBQcm92aWRlci5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbi5hdXRob3JpemF0aW9uID0gJ0JlYXJlciBXaUZCRHdGSHhXUXkySEVLNlpHcFhCOGNPZmtZdzRPUm5JT1ZyQk1aJztcbiAgICAkaHR0cFByb3ZpZGVyLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLUNTUkYtVE9LRU4nXSA9ICQoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5hdHRyKCdjb250ZW50Jyk7XG4gICAgJGh0dHBQcm92aWRlci5kZWZhdWx0cy51c2VYRG9tYWluID0gdHJ1ZTtcbiAgICAkc2NlUHJvdmlkZXIuZW5hYmxlZChmYWxzZSk7XG5cbiAgfV0pXG4gIC5ydW4oWyckcm9vdFNjb3BlJywgZnVuY3Rpb24gKCRyb290U2NvcGUpIHtcblxuICAgICRyb290U2NvcGUuZW5kUG9pbnQ9J2h0dHBzOi8vc3RyZWFtdXBib3guY29tJztcbiAgICAvLyAkcm9vdFNjb3BlLmVuZFBvaW50ID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMCc7XG5cblxuICB9XSlcbiAgLmRpcmVjdGl2ZSgnc29jaWFsaXRlJywgW2Z1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3Mvc29jaWFsaXRlLmh0bWwnLFxuICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCwgYXR0cikge1xuXG4gICAgICB9XG4gICAgfTtcbiAgfV0pXG4gIC5jb250cm9sbGVyKCdzb2NpYWxpdGUnLCBbJyRyb290U2NvcGUnLCAnJGh0dHAnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJGh0dHApIHtcbiAgICB2YXIgZ29vZ2xlVXNlciA9IHt9O1xuICAgIHZhciBzdGFydEFwcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGdhcGkubG9hZCgnYXV0aDInLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLy9SZXRyaWV2ZSB0aGUgc2luZ2xldG9uIGZvciB0aGUgR29vZ2xlQXV0aCBsaWJyYXJ5IGFuZCBzZXQgdXAgdGhlIGNsaWVudC5cbiAgICAgICAgYXV0aDIgPSBnYXBpLmF1dGgyLmluaXQoe1xuXG4gICAgICAgICAgY2xpZW50X2lkOiAnNTQzNTU4OTMzMTExLWplbTg3aTVpOGFzcGEyNDdxcWdyOTAwYTVsZmhzNnN0LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJyxcbiAgICAgICAgICBjb29raWVwb2xpY3k6ICdzaW5nbGVfaG9zdF9vcmlnaW4nLFxuXG4gICAgICAgIH0pO1xuICAgICAgICBhdHRhY2hTaWduaW4oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbUJ0bicpKTtcbiAgICAgIH0pO1xuICAgIH07XG5cblxuICAgIGZ1bmN0aW9uIGF0dGFjaFNpZ25pbihlbGVtZW50KSB7XG5cbiAgICAgIGF1dGgyLmF0dGFjaENsaWNrSGFuZGxlcihlbGVtZW50LCB7fSxcbiAgICAgICAgZnVuY3Rpb24gKGdvb2dsZVVzZXIpIHtcbiAgICAgICAgICB2YXIgcGFyYW1zID0ge1xuICAgICAgICAgICAgdXNlcm5hbWU6IGdvb2dsZVVzZXIuZ2V0QmFzaWNQcm9maWxlKCkuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgZW1haWw6IGdvb2dsZVVzZXIuZ2V0QmFzaWNQcm9maWxlKCkuZ2V0RW1haWwoKSxcbiAgICAgICAgICAgIGxvZ2luVHlwZTogJ3NvY2lhbGl0ZS1sb2dpbidcbiAgICAgICAgICB9XG4gICAgICAgICAgJGh0dHAucG9zdCgkcm9vdFNjb3BlLmVuZFBvaW50ICsgJy9sb2dpbicsIHBhcmFtcylcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICB9KS5lcnJvcihmdW5jdGlvbiAoZSkge1xuXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgZ29vZ2xlVXNlci5nZXRCYXNpY1Byb2ZpbGUoKS5nZXRFbWFpbCgpO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICBhbGVydChKU09OLnN0cmluZ2lmeShlcnJvciwgdW5kZWZpbmVkLCAyKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLy8gc3RhcnRBcHAoKTtcblxuXG4gIH1dKVxuLmNvbnN0YW50KCdERUJVRycsIHRydWUpO1xuTG9nZ2VyLmRpcmVjdGl2ZSgnc2lnbnVwJywgW2Z1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBRScsXG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3NpZ251cC5odG1sJ1xuXG4gICAgfTtcbiAgfV0pXG4gIC5kaXJlY3RpdmUoJ2xvZ2luJywgW2Z1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBRScsXG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2xvZ2luLmh0bWwnXG4gICAgfTtcbiAgfV0pXG4gIC5kaXJlY3RpdmUoJ3Nob3J0Y3V0JywgW2Z1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBRScsXG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3Nob3J0Y3V0Lmh0bWwnXG4gICAgfTtcbiAgfV0pO1xuXG5cbmFuZ3VsYXIubW9kdWxlKFwic3luY1wiLCBbXCJuZ1JvdXRlXCIsIFwiYW5ndWxhckZpbGVVcGxvYWRcIiwgXCJuZ01hdGVyaWFsXCIsIFwibWF0ZXJpYWwuc3ZnQXNzZXRzQ2FjaGVcIiwgXCJwYXNjYWxwcmVjaHQudHJhbnNsYXRlXCIsIFwibmdTYW5pdGl6ZVwiLCBcInBkZlwiLCBcInVpLnJvdXRlclwiLCBcInVpLmJvb3RzdHJhcFwiLCBcInVpLnNlbGVjdFwiXSlcbiAgLmNvbmZpZyhbJyRzY2VQcm92aWRlcicsICckaHR0cFByb3ZpZGVyJywgJyRsb2NhdGlvblByb3ZpZGVyJywgZnVuY3Rpb24gKCRzY2VQcm92aWRlciwgJGh0dHBQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpIHtcbiAgICBkZWxldGUgJGh0dHBQcm92aWRlci5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1SZXF1ZXN0ZWQtV2l0aCddO1xuICAgICRodHRwUHJvdmlkZXIuZGVmYXVsdHMuaGVhZGVycy5wb3N0LkFjY2VwdCA9ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHQnO1xuICAgICRodHRwUHJvdmlkZXIuZGVmYXVsdHMuaGVhZGVycy5wb3N0LkFjY2VwdCA9ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHQnO1xuICBcbiAgXG4gICAgLy8gJGh0dHBQcm92aWRlci5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbi5hdXRob3JpemF0aW9uID0gJ0JlYXJlciBXaUZCRHdGSHhXUXkySEVLNlpHcFhCOGNPZmtZdzRPUm5JT1ZyQk1aJztcbiAgICAkaHR0cFByb3ZpZGVyLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLUNTUkYtVE9LRU4nXSA9ICQoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5hdHRyKCdjb250ZW50Jyk7XG4gICAgJGh0dHBQcm92aWRlci5kZWZhdWx0cy51c2VYRG9tYWluID0gdHJ1ZTtcbiAgICAkc2NlUHJvdmlkZXIuZW5hYmxlZChmYWxzZSk7XG5cbiAgICAvLyAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUoe1xuICAgIC8vICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvLyAgIHJlcXVpcmVCYXNlOiB0cnVlXG4gICAgLy8gfSk7XG4gICAgLy8gJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHRydWUpO1xuIFxuICB9XSlcbiAgLmNvbnN0YW50KCdERUJVRycsIGZhbHNlKVxuXG4gIC5ydW4oWyckcm9vdFNjb3BlJywgJyRsb2cnLCAnJGxvY2F0aW9uJywgJyRzdGF0ZVBhcmFtcycsICdVc2VyJywgJ1NoYXJlJywnREVCVUcnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJGxvZywgJGxvY2F0aW9uLCAkc3RhdGVQYXJhbXMsIFVzZXIsIFNoYXJlLERFQlVHKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZvbGRlcklkJywgMCk7XG4gICAgLy8gJHJvb3RTY29wZS5lbmRQb2ludCA9ICdodHRwOi8vbG9jYWxob3N0OjgwMDAnO1xuICAgICRyb290U2NvcGUuZW5kUG9pbnQ9J2h0dHBzOi8vc3RyZWFtdXBib3guY29tJztcblxuICAgICRyb290U2NvcGUubm90aWZpY2F0aW9uTGlzdCA9IDA7XG4gICAgVXNlci5nZXQoKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgJHJvb3RTY29wZS51c2VyID0gdXNlcjtcbiAgICAgICAgaWYoREVCVUc9PT0gdHJ1ZSlcbiAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgICAgIH0pLmNhdGNoKCk7XG5cbiAgICBTaGFyZS5hbGxzc2hhcmVkRmlsZXMoKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKGFsbGZpbGUpIHtcbiAgICAgICAgJHJvb3RTY29wZS5jb3VudGFsbCA9IGFsbGZpbGU7XG5cbiAgICAgIH0pLmNhdGNoKCk7XG5cbiAgICBVc2VyLm5vdGlmaWNhdGlvbkxpc3QoKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKGNvdW50ZXIpIHtcbiAgICAgICAgJHJvb3RTY29wZS5ub3RpZmljYXRpb25MaXN0ID0gY291bnRlcjtcblxuICAgICAgfSkuY2F0Y2goKTtcblxuICAgICRyb290U2NvcGUuTGVmdE1lbnVuZWVkZWQgPSB0cnVlO1xuICAgICRyb290U2NvcGUuY29sb3IgPSAnYmx1ZSc7XG4gICAgdmFyIGNhc2hlZF9mb2xkZXJzID0gW10sXG4gICAgZm9sZGVyX2lkcyA9IFtdO1xuICAgICRyb290U2NvcGUuJG9uKCckbG9jYXRpb25DaGFuZ2VTdWNjZXNzJywgZnVuY3Rpb24gKCkge1xuICAgICAgXG4gICAgICAvL3N0YXJ0IGJyb2FkY2FzdGluZyBjdXJyZW50IG5hdmlnYXRlZCBmb2xkZXJJZFxuICAgICAgaWYoJHJvb3RTY29wZS5hY3R1YWxMb2NhdGlvbiAhPT0gdW5kZWZpbmVkKXtcblxuICAgICAgICB2YXIgY3VycmVudEZvbGRlcklkID0gJHJvb3RTY29wZS5hY3R1YWxMb2NhdGlvbi5yZXBsYWNlKCcvJywgJycpO1xuICAgICAgICBpZihjdXJyZW50Rm9sZGVySWQgIT09J0ZpbGVzJyl7XG4gICAgICAgICAgJHJvb3RTY29wZS4kZW1pdCgnZm9sZGVyOmlkJywgY3VycmVudEZvbGRlcklkKTtcbiAgICAgICAgfVxuICAgICAgICAgXG4gICAgICB9XG4gICAgICBcbiAgICAgIFxuICAgICAgJHJvb3RTY29wZS5hY3R1YWxMb2NhdGlvbiA9ICRsb2NhdGlvbi5wYXRoKCk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9KTtcblxuICAgICRyb290U2NvcGUuJHdhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAkbG9jYXRpb24ucGF0aCgpO1xuICAgIH0sIGZ1bmN0aW9uIChuZXdMb2NhdGlvbiwgb2xkTG9jYXRpb24pIHtcblxuICAgICAgaWYgKCRyb290U2NvcGUuYWN0dWFsTG9jYXRpb24gIT09IG5ld0xvY2F0aW9uKSB7XG4gICAgICAgIGNhc2hlZF9mb2xkZXJzLnB1c2gobmV3TG9jYXRpb24pO1xuICAgICAgICBmb2xkZXJfaWRzLnB1c2goJHN0YXRlUGFyYW1zLmZvbGRlcklkKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdMb2NhdGlvbiA9PT0gXCIvRmlsZXNcIikge1xuICAgICAgICAkcm9vdFNjb3BlLkxlZnRNZW51bmVlZGVkID0gdHJ1ZTtcbiAgICAgICAgY2FzaGVkX2ZvbGRlcnMgPSBbXTtcbiAgICAgIH1cbiAgICAgIGlmICgkcm9vdFNjb3BlLmFjdHVhbExvY2F0aW9uID09PSBuZXdMb2NhdGlvbikge1xuICAgICAgICB2YXIgaW5kZXggPSBjYXNoZWRfZm9sZGVycy5pbmRleE9mKG9sZExvY2F0aW9uKTtcbiAgICAgICAgY2FzaGVkX2ZvbGRlcnMucG9wKGluZGV4KTtcbiAgICAgICAgdmFyIGluZGV4ZXJPZkZvbGRlciA9IGZvbGRlcl9pZHMucG9wKCk7XG4gICAgICAgIGluZGV4ZXJPZkZvbGRlciA9IGZvbGRlcl9pZHMucG9wKCk7XG4gICAgICAgICRyb290U2NvcGUuJGVtaXQoJ2FwcDpvbjpicm93c2VyOmJhY2snLCBpbmRleGVyT2ZGb2xkZXIpO1xuXG4gICAgICB9XG5cbiAgICB9KTtcbiAgfV0pXG4gIC5maWx0ZXIoJ3Byb3BzRmlsdGVyJywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoaXRlbXMsIHByb3BzKSB7XG4gICAgICB2YXIgb3V0ID0gW107XG5cbiAgICAgIGlmIChhbmd1bGFyLmlzQXJyYXkoaXRlbXMpKSB7XG4gICAgICAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICB2YXIgaXRlbU1hdGNoZXMgPSBmYWxzZTtcbiAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHByb3BzKTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwcm9wID0ga2V5c1tpXTtcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gcHJvcHNbcHJvcF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGlmIChpdGVtW3Byb3BdLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRleHQpICE9PSAtMSkge1xuICAgICAgICAgICAgICBpdGVtTWF0Y2hlcyA9IHRydWU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpdGVtTWF0Y2hlcykge1xuICAgICAgICAgICAgb3V0LnB1c2goaXRlbSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG91dCA9IGl0ZW1zO1xuICAgICAgfVxuICAgICAgdGhpcy5lbmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuZGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLmVuYWJsZVNlYXJjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zZWFyY2hFbmFibGVkID0gdHJ1ZTtcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuZGlzYWJsZVNlYXJjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zZWFyY2hFbmFibGVkID0gZmFsc2U7XG4gICAgICB9O1xuICAgICAgdGhpcy5jb3VudGVyID0gMDtcbiAgICAgIHRoaXMub25TZWxlY3RDYWxsYmFjayA9IGZ1bmN0aW9uIChpdGVtLCBtb2RlbCkge1xuICAgICAgICB0aGlzLmNvdW50ZXIrKztcbiAgICAgICAgdGhpcy5ldmVudFJlc3VsdCA9IHtcbiAgICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICAgIG1vZGVsOiBtb2RlbFxuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgdGhpcy5yZW1vdmVkID0gZnVuY3Rpb24gKGl0ZW0sIG1vZGVsKSB7XG4gICAgICAgIHRoaXMubGFzdFJlbW92ZWQgPSB7XG4gICAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgICBtb2RlbDogbW9kZWxcbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuZmlyc3RMZXR0ZXJHcm91cEZuID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0ubmFtZVswXTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gb3V0O1xuICAgIH07XG4gIH0pXG4gIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsICckdXJsUm91dGVyUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuXG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgnSG9tZScsIHtcbiAgICAgICAgdXJsOiBcIi9GaWxlc1wiLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJy92aWV3cy9tYWluLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnRmlsZXNDb250cm9sbGVyJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnU2V0dGluZ3MnLCB7XG4gICAgICAgIHVybDogXCIvU2V0dGluZ3NcIixcbiAgICAgICAgdGVtcGxhdGVVcmw6ICcvdmlld3Mvc2V0dGluZ3MuaHRtbCdcbiAgICAgIH0pXG5cbiAgICAuc3RhdGUoJ01lc3NhZ2VzJywge1xuICAgICAgdXJsOiBcIi9NZXNzYWdlc1wiLFxuICAgICAgdGVtcGxhdGVVcmw6ICcvdmlld3MvbWVzc2FnZS5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdUd2VldGluZ1dheU1lc3NhZ2UnLFxuICAgIH0pXG5cbiAgICAuc3RhdGUoJ1VwZ3JhZGUnLCB7XG4gICAgICAgIHVybDogXCIvVXBncmFkZVwiLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJy92aWV3cy91cGdyYWRlLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnRmlsZXNDb250cm9sbGVyJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgncHJldmlldycsIHtcbiAgICAgICAgdXJsOiAnLyEvOnByZXZpZXcvOmV4dGVuc2lvbi86b2YvOnVzZXIvOmZvbGRlcicsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnL3ZpZXdzL2ZpbGVQcmV2aWV3Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAncHJldmlld0NvbnRyb2xsZXInXG5cbiAgICAgIH0pLnN0YXRlKCdiaW5zJywge1xuICAgICAgICB1cmw6IFwiL2JpbnMvXCIsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnL3ZpZXdzL2RvY3NfSW5CaW4uaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdGb2xkZXJDb250cm9sbGVyJyxcbiAgICAgICAgcmVxdWlyZUxvZ2luOiB0cnVlXG4gICAgICB9KS5zdGF0ZSgnRmlsZXNiaW5zJywge1xuICAgICAgICB1cmw6IFwiL2JpbnMvXCIsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnL3ZpZXdzL2RvY3NfSW5CaW4uaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdGaWxlc0NvbnRyb2xsZXInLFxuICAgICAgICByZXF1aXJlTG9naW46IHRydWVcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ3NoYXJlZHJlY2VpdmVkJywge1xuICAgICAgICB1cmw6ICcvc2hhcmVkcmVjZWl2ZWQve2ZvbGRlck5hbWU6W2EtekEtWjAtOS9dKn0nLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBmb2xkZXJJZDogbnVsbCxcbiAgICAgICAgICBWaXNpYmxlTmFtZTogbnVsbFxuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZVVybDogJy92aWV3cy9zaGFyZWRGb2xkZXJzLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnRm9sZGVyQ29udHJvbGxlcidcbiAgICAgIH0pXG5cbiAgICAuc3RhdGUoJ3NoYXJlZHNlbmQnLCB7XG4gICAgICB1cmw6ICcvc2hhcmVkc2VuZC97Zm9sZGVyTmFtZTpbYS16QS1aMC05L10qfScsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgZm9sZGVySWQ6IG51bGwsXG4gICAgICAgIFZpc2libGVOYW1lOiBudWxsXG4gICAgICB9LFxuICAgICAgdGVtcGxhdGVVcmw6ICcvdmlld3Mvc2hhcmVkX3NlbmRfRmlsZXMuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnRmlsZXNDb250cm9sbGVyJ1xuICAgIH0pXG5cblxuICAgIC5zdGF0ZSgnZm9sZGVyJywge1xuXG4gICAgICAgIHVybDogJy97Zm9sZGVySWQ6W2EtekEtWjAtOV9ALi8jJistL10qfScsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGZvbGRlcklkOiBudWxsLFxuICAgICAgICAgIFZpc2libGVOYW1lOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnL3ZpZXdzL2ZpbGVzLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnRm9sZGVyQ29udHJvbGxlcidcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ0dyb3VwcycsIHtcbiAgICAgICAgdXJsOiBcIi9Hcm91cHNcIixcbiAgICAgICAgdGVtcGxhdGVVcmw6ICcvdmlld3MvZ3JvdXBzLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnR3JvdXBDb250cm9sbGVyJyxcbiAgICAgICAgcmVxdWlyZUxvZ2luOiB0cnVlXG4gICAgICB9KTtcblxuICAgICR1cmxSb3V0ZXJQcm92aWRlci53aGVuKCcvaG9tZScsICcvaG9tZScpLm90aGVyd2lzZSgnL0ZpbGVzJyk7XG4gICAgXG4gIH1dKVxuICAvL2FwcGxpY2F0aW9uIGNvbXBvbmVudHNcbiAgLmRpcmVjdGl2ZSgnZmlsZXMnLCBbZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgdGVtcGxhdGVVcmw6ICcvdmlld3MvY29tcG9uZW50cy9maWxlcy5odG1sJyxcbiAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwsIGF0dHIpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZWxbMF0ucXVlcnlTZWxlY3RvcignI3NoYXJlQnRuX2ZpbGUnKSk7XG4gICAgICB9XG4gICAgfTtcblxuICB9XSlcbiAgLmRpcmVjdGl2ZSgnbmdSaWdodENsaWNrJywgWyckcGFyc2UnLCBmdW5jdGlvbiAoJHBhcnNlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgIHZhciBmbiA9ICRwYXJzZShhdHRycy5uZ1JpZ2h0Q2xpY2spO1xuICAgICAgZWxlbWVudC5iaW5kKCdjb250ZXh0bWVudScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBzY29wZS4kYXBwbHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZm4oc2NvcGUsIHtcbiAgICAgICAgICAgICRldmVudDogZXZlbnRcblxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1dKVxuICAuZGlyZWN0aXZlKCdmb2xkZXJzJywgW2Z1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAnL3ZpZXdzL2NvbXBvbmVudHMvZm9sZGVycy5odG1sJyxcbiAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwsIGlBdHRycykge1xuICAgICAgIFxuJChcInRyXCIpLm5vdCgnOmZpcnN0JykubW91c2VvdmVyKFxuICBmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS5jc3MoXCJiYWNrZ3JvdW5kXCIsXCJ5ZWxsb3dcIik7XG4gICAgdmFyIHZhbHVlPSQoXCJpbnB1dFt0eXBlPXRleHRdLnNlbGVjdG9yaWRcIikudmFsKCk7XG4gICAgdmFyIHN0ciA9ICdzaGFyZWJ0bnMnK3ZhbHVlO1xuICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHN0cikuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLmNzcyhcImJhY2tncm91bmRcIixcIlwiKTtcbiAgICB2YXIgdmFsdWU9JChcImlucHV0W3R5cGU9dGV4dF0uc2VsZWN0b3JpZFwiKS52YWwoKTtcbiAgICB2YXIgc3RyID0gJ3NoYXJlYnRucycrdmFsdWU7XG4gICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3RyKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG4pO1xuICAgICAgfVxuICAgIH07XG4gIH1dKVxuICAuZGlyZWN0aXZlKCdmcmVjZWl2ZWRTaGFyZWQnLCBbZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgdGVtcGxhdGVVcmw6ICcvdmlld3MvY29tcG9uZW50cy9zaGFyZWRGaWxlcy5odG1sJyxcbiAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwsIGZBdHRyc3MpIHtcblxuICAgICAgfVxuICAgIH07XG4gIH1dKVxuXG4uZGlyZWN0aXZlKCdyZWNlaXZlZFNoYXJlZCcsIFtmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICB0ZW1wbGF0ZVVybDogJy92aWV3cy9jb21wb25lbnRzL3NoYXJlZEZvbGRlcnMuaHRtbCcsXG4gICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCwgZmRBdHRycykge1xuXG4gICAgfVxuICB9O1xufV0pXG5cblxuLmRpcmVjdGl2ZSgnc2VuZGZpbGVzU2hhcmVkJywgW2Z1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAnL3ZpZXdzL2NvbXBvbmVudHMvc2VuZEZpbGVzaGFyZWQuaHRtbCcsXG4gICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsLCBmZEF0dHJzKSB7XG5cbiAgICAgIH1cbiAgICB9O1xuICB9XSlcbiAgLmRpcmVjdGl2ZSgnc2VuZFNoYXJlZCcsIFtmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICB0ZW1wbGF0ZVVybDogJy92aWV3cy9jb21wb25lbnRzL3NoYXJlZF9zZW5kX0ZpbGVzLmh0bWwnLFxuICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCwgZmRBdHRycykge1xuXG4gICAgICB9XG4gICAgfTtcbiAgfV0pXG4gIC5kaXJlY3RpdmUoJ2ZvbGRlckJpbnMnLCBbZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgdGVtcGxhdGVVcmw6ICcvdmlld3MvY29tcG9uZW50cy9mb2xkZXJSY3lsZWJpbi5odG1sJyxcbiAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwsIFJjeWZkQXR0cnMpIHtcblxuICAgICAgfVxuICAgIH07XG4gIH1dKVxuICAuZGlyZWN0aXZlKCdmaWxlc0JpbnMnLCBbZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgdGVtcGxhdGVVcmw6ICcvdmlld3MvY29tcG9uZW50cy9maWxlUmVjeWNsZWJpbi5odG1sJyxcbiAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwsIHJjeWxmbHNBdHRycykge1xuXG4gICAgICB9XG4gICAgfTtcbiAgfV0pOyBcblxuXG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1kb25lIHdpdGggTXVyYWdpamltYW5hIFJpY2hhcmQgPGJlYXN0YXI0NTdAZ21haWwuY29tPi0tLS0tLS0tLS0tLS0tLS8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tZGVhbCB3aXRoIHVzZXIncyBhY3Rpb25zIGFuZCBpbnRlcmFjdGlvbiB3aXRoIG90aGVyIHVzZXJzLS0tLS0tLS0tLS0tLS0tLy8iLCIvKiBnbG9iYWwgJHdpbmRvdyAqL1xuLyogZ2xvYmFsIExvZ2dlciAqL1xuXG5Mb2dnZXIuY29udHJvbGxlcignbG9naW5Db250cm9sbGVyJywgWyckc2NvcGUnLCAnJGh0dHAnLCAnJHJvb3RTY29wZScsICckd2luZG93JywgZnVuY3Rpb24gKCRzY29wZSwgJGh0dHAsICRyb290U2NvcGUsICR3aW5kb3cpIHtcbiAgIFxuICAgICRzY29wZS5sb2dpbiA9IGZ1bmN0aW9uIChpbmZvKSB7XG5cbiAgICAgICAgZnVuY3Rpb24gbm90VmVyaWZpZWQoKSB7XG4gICAgICAgICAgICAkd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3ZlcmlmaWNhdGlvbic7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcmVkaXJlY3RpbmdBZG1pbigpIHtcbiAgICAgICAgICAgICR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvYWRtaW4nO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHJlZGlyZWN0aW5nKCkge1xuICAgICAgICAgICAgJHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9ob21lJztcbiAgICAgICAgfVxuICAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAnTG9naW4tU3VjY2Vzcyc6ICdXZSBhcmUgcmVkaXJlY3RpbmcgeW91Li4nLFxuICAgICAgICAgICAgJ1NpZ25VcEluUHJvZ3Jlc3MnIDogJ1dhaXQgd2UgYXJlIHNldHRpbmcgdXAgeW91ciBhY2NvdW50LidcbiAgICAgICAgfTtcbiAgICAgICAgZnVuY3Rpb24gbWVzc2FnZVJlbW92ZSgpe1xuICAgICAgICAgICAgICAgICQoJy5yZWdpc3Rlci1mb3JtLW1haW4tbWVzc2FnZScpLnJlbW92ZUNsYXNzKCdzaG93IGVycm9yJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAkaHR0cC5wb3N0KCRyb290U2NvcGUuZW5kUG9pbnQgKyAnL2xvZ2luJywgaW5mbylcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICQoJy5sb2dpbi1mb3JtLW1haW4tbWVzc2FnZScpLmFkZENsYXNzKCdzaG93IHN1Y2Nlc3MnKS5odG1sKG9wdGlvbnNbJ0xvZ2luLVN1Y2Nlc3MnXSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChtZXNzYWdlUmVtb3ZlLCAyMDAwKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5zdGF0dXMpO1xuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PT0gMzAwKXtcbiAgICAgICAgICAgICAgICAgICAgbm90VmVyaWZpZWQoKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RpbmcoKTsgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9KTtcblxuICAgIH07XG59XSk7IiwiYW5ndWxhci5tb2R1bGUoXCJMb2dnZXJcIilcbi5jb250cm9sbGVyKCdSZWdpc3RlckNvbnRyb2xsZXInLCBbJyRzY29wZScsJyRyb290U2NvcGUnLCckaHR0cCcsJ0RFQlVHJyxmdW5jdGlvbiAoJHNjb3BlLCRyb290U2NvcGUsJGh0dHAsREVCVUcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgJ3Bhc3N3b3JkLW5vdE1hdGNoJzogJ3Bhc3N3b3JkIGRvIG5vdCBtYXRjaCcsXG4gICAgICAgICdTaWduVXBJblByb2dyZXNzJyA6ICdXYWl0IHdlIGFyZSBzZXR0aW5nIHVwIHlvdXIgYWNjb3VudC4nLFxuXG4gICAgfTtcbiAgICBmdW5jdGlvbiBtZXNzYWdlUmVtb3ZlKCl7XG4gICAgICAgICAgICAkKCcucmVnaXN0ZXItZm9ybS1tYWluLW1lc3NhZ2UnKS5yZW1vdmVDbGFzcygnc2hvdyBlcnJvcicpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZWRpcmVjdGluZygpe1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy92ZXJpZmljYXRpb24nO1xuICAgICAgICAgICAgXG4gICAgfVxuICAgICRzY29wZS5yZWdpc3Rlcj1mdW5jdGlvbih1c2VyKXtcbiAgICAgICAgXG4gICAgICAkKCcucmVnaXN0ZXItZm9ybS1tYWluLW1lc3NhZ2UnKS5hZGRDbGFzcygnc2hvdyBzdWNjZXNzJykuaHRtbChvcHRpb25zLlNpZ25VcEluUHJvZ3Jlc3MpO1xuICAgICAgICBpZigkKCcjcGFzc3dvcmQnKS52YWwoKSAhPT0gJCgnI3Bhc3N3b3JkLWNvbmZpcm0nKS52YWwoKSl7XG4gICAgICAgICAgJCgnLnJlZ2lzdGVyLWZvcm0tbWFpbi1tZXNzYWdlJykuYWRkQ2xhc3MoJ3Nob3cgZXJyb3InKS5odG1sKG9wdGlvbnNbJ3Bhc3N3b3JkLW5vdE1hdGNoJ10pO1xuICAgICAgICAgIHNldFRpbWVvdXQobWVzc2FnZVJlbW92ZSwgMjAwMCk7XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgdmFyIHBhcmFtcyA9e1xuICAgICAgICAgICAgbmFtZSA6ICQoJyNpbnB1dC1uYW1lJykudmFsKCksXG4gICAgICAgICAgICBlbWFpbDogJCgnI2lucHV0LWVtYWlsJykudmFsKCksXG4gICAgICAgICAgICBwaG9uZTogJCgnI2lucHV0LXBob25lJykudmFsKCksXG4gICAgICAgICAgICBwYXNzd29yZDogJCgnI2lucHV0LXBhc3N3b3JkJykudmFsKClcbiAgICAgICAgfTtcbiAgICAgICAgJGh0dHAucG9zdCgkcm9vdFNjb3BlLmVuZFBvaW50ICsgJy9yZWdpc3RlcicsIHBhcmFtcylcbiAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT09IDIwMCl7XG4gICAgICAgICAgICAgICAgIHJlZGlyZWN0aW5nKCk7XG4gICAgICAgICAgICB9ZWxzZSBpZihkYXRhLnN0YXR1cyA9PT0zMDAxKXtcbiAgICAgICAgICAgICAgICAgJCgnLnJlZ2lzdGVyLWZvcm0tbWFpbi1tZXNzYWdlJykuYWRkQ2xhc3MoJ3Nob3cgc3VjY2VzcycpLmh0bWwoZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KG1lc3NhZ2VSZW1vdmUsIDIwMDApO1xuICAgICAgICAgICAgfWVsc2UgaWYoZGF0YS5zdGF0dXMgPT09MzAwMil7XG4gICAgICAgICAgICAgICAgJCgnLnJlZ2lzdGVyLWZvcm0tbWFpbi1tZXNzYWdlJykuYWRkQ2xhc3MoJ3Nob3cgc3VjY2VzcycpLmh0bWwoZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KG1lc3NhZ2VSZW1vdmUsIDIwMDApO1xuICAgICAgICAgICAgfWVsc2UgaWYoZGF0YS5zdGF0dXMgPT09MzAwMyl7XG4gICAgICAgICAgICAgICAgJCgnLnJlZ2lzdGVyLWZvcm0tbWFpbi1tZXNzYWdlJykuYWRkQ2xhc3MoJ3Nob3cgc3VjY2VzcycpLmh0bWwoZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KG1lc3NhZ2VSZW1vdmUsIDIwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYoREVCVUcgPT09IHRydWUpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgfTtcbn1dKVxuLmRpcmVjdGl2ZSgndW5pcXVlUGhvbmUnLCBbJ2lzUGhvbmVBdmFpbGFibGUnLGZ1bmN0aW9uKGlzUGhvbmVBdmFpbGFibGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICByZXF1aXJlOiAnbmdNb2RlbCcsXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycywgbmdNb2RlbCkge1xuICAgICAgICAgICAgbmdNb2RlbC4kYXN5bmNWYWxpZGF0b3JzLnVuaXF1ZVBob25lID0gaXNQaG9uZUF2YWlsYWJsZTtcbiAgICAgICAgfVxuICAgIH07XG59XSlcbi5mYWN0b3J5KCdpc1Bob25lQXZhaWxhYmxlJywgWyckcScsJyRodHRwJywnJHJvb3RTY29wZScsZnVuY3Rpb24oJHEsICRodHRwLCRyb290U2NvcGUpIHtcbiAgICAgZnVuY3Rpb24gbWVzc2FnZVJlbW92ZSgpe1xuICAgICAgICAgXG4gICAgICAgICAgICAkKCcucmVnaXN0ZXItZm9ybS1tYWluLW1lc3NhZ2UnKS5yZW1vdmVDbGFzcygnc2hvdyBzdWNjZXNzJyk7XG4gICAgIH1cbiAgICAgIGZ1bmN0aW9uIHVzZXJuYW1lVGFrZW4oKXtcbiAgICAgICAgICAgICQoJy5yZWdpc3Rlci1mb3JtLW1haW4tbWVzc2FnZScpLnJlbW92ZUNsYXNzKCdzaG93IGVycm9yJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAnbXNnLXBob25lLWF2YWlsYWJsZSc6ICdwaG9uZSBudW1iZXIgYXZhaWxhYmxlJyxcbiAgICAgICAgJ21zZy1waG9uZS10YWtlbic6ICdwaG9uZSBudW1iZXIgdGFrZW4nLFxuICAgICAgICAndXNlQUpBWCc6IHRydWUsXG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24ocGhvbmUpIHtcblxuXG4gICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAgICAgJGh0dHAuZ2V0KCRyb290U2NvcGUuZW5kUG9pbnQgKyAnL3VzZXJzP3Bob25lPScgKyBwaG9uZSkuc3VjY2VzcyhmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIGlmKGRhdGEgID09PSAncGhvbmUtYXZhaWxhYmxlJyl7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAkKCcucmVnaXN0ZXItZm9ybS1tYWluLW1lc3NhZ2UnKS5hZGRDbGFzcygnc2hvdyBzdWNjZXNzJykuaHRtbChvcHRpb25zWydtc2ctcGhvbmUtYXZhaWxhYmxlJ10pO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQobWVzc2FnZVJlbW92ZSwgMjAwMCk7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1lbHNlIGlmKGRhdGEgPT09ICdwaG9uZS10YWtlbicpe1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICQoJy5yZWdpc3Rlci1mb3JtLW1haW4tbWVzc2FnZScpLmFkZENsYXNzKCdzaG93IGVycm9yJykuaHRtbChvcHRpb25zWydtc2ctcGhvbmUtdGFrZW4nXSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCh1c2VybmFtZVRha2VuLCAyMDAwKTtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XG4gICAgICAgIH0pLmVycm9yKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9O1xufV0pO1xuYW5ndWxhci5tb2R1bGUoXCJMb2dnZXJcIilcbi5kaXJlY3RpdmUoJ3VuaXF1ZVVzZXJuYW1lJywgWydpc1VzZXJuYW1lQXZhaWxhYmxlJyxmdW5jdGlvbihpc1VzZXJuYW1lQXZhaWxhYmxlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgICAgcmVxdWlyZTogJ25nTW9kZWwnLFxuICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIG5nTW9kZWwpIHtcbiAgICAgICAgICAgIG5nTW9kZWwuJGFzeW5jVmFsaWRhdG9ycy51bmlxdWVVc2VybmFtZSA9IGlzVXNlcm5hbWVBdmFpbGFibGU7XG4gICAgICAgIH1cbiAgICB9O1xufV0pXG5cbmFuZ3VsYXIubW9kdWxlKFwiTG9nZ2VyXCIpXG4uZmFjdG9yeSgnaXNVc2VybmFtZUF2YWlsYWJsZScsIFsnJHEnLCckaHR0cCcsJyRyb290U2NvcGUnLGZ1bmN0aW9uKCRxLCAkaHR0cCwkcm9vdFNjb3BlKSB7XG4gICAgIGZ1bmN0aW9uIG1lc3NhZ2VSZW1vdmUoKXtcbiAgICAgICAgIFxuICAgICAgICAgICAgJCgnLnJlZ2lzdGVyLWZvcm0tbWFpbi1tZXNzYWdlJykucmVtb3ZlQ2xhc3MoJ3Nob3cgc3VjY2VzcycpO1xuICAgICB9XG4gICAgICBmdW5jdGlvbiB1c2VybmFtZVRha2VuKCl7XG4gICAgICAgICAgICAkKCcucmVnaXN0ZXItZm9ybS1tYWluLW1lc3NhZ2UnKS5yZW1vdmVDbGFzcygnc2hvdyBlcnJvcicpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgJ21zZy11c2VybmFtZS1hdmFpbGFibGUnOiAndXNlciBuYW1lIGF2YWlsYWJsZScsXG4gICAgICAgICdtc2ctdXNlcm5hbWUtdGFrZW4nOiAndXNlcm5hbWUgdGFrZW4nLFxuICAgICAgICAndXNlQUpBWCc6IHRydWUsXG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24odXNlcm5hbWUpIHtcblxuICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuXG4gICAgICAgICRodHRwLmdldCgkcm9vdFNjb3BlLmVuZFBvaW50ICsgJy91c2Vycz91c2VybmFtZT0nICsgdXNlcm5hbWUpLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBpZihkYXRhICA9PT0gJ2F2YWlsYWJsZScpe1xuICAgICAgICAgICAgICAgICQoJy5yZWdpc3Rlci1mb3JtLW1haW4tbWVzc2FnZScpLmFkZENsYXNzKCdzaG93IHN1Y2Nlc3MnKS5odG1sKG9wdGlvbnNbJ21zZy11c2VybmFtZS1hdmFpbGFibGUnXSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChtZXNzYWdlUmVtb3ZlLCAyMDAwKTtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfWVsc2UgaWYoZGF0YSA9PT0gJ3Rha2VuJyl7XG4gICAgICAgICAgICAgICAgJCgnLnJlZ2lzdGVyLWZvcm0tbWFpbi1tZXNzYWdlJykuYWRkQ2xhc3MoJ3Nob3cgZXJyb3InKS5odG1sKG9wdGlvbnNbJ21zZy11c2VybmFtZS10YWtlbiddKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHVzZXJuYW1lVGFrZW4sIDIwMDApO1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcbiAgICAgICAgfSkuZXJyb3IoZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH07XG59XSk7XG5hbmd1bGFyLm1vZHVsZShcIkxvZ2dlclwiKVxuLmRpcmVjdGl2ZSgndW5pcXVlRW1haWwnLCBbJ2lzRW1haWxBdmFpbGFibGUnLGZ1bmN0aW9uKGlzRW1haWxBdmFpbGFibGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICByZXF1aXJlOiAnbmdNb2RlbCcsXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycywgbmdNb2RlbCkge1xuICAgICAgICAgICAgbmdNb2RlbC4kYXN5bmNWYWxpZGF0b3JzLnVuaXF1ZUVtYWlsID0gaXNFbWFpbEF2YWlsYWJsZTtcbiAgICAgICAgfVxuICAgIH07XG59XSk7XG5hbmd1bGFyLm1vZHVsZShcIkxvZ2dlclwiKVxuLmZhY3RvcnkoJ2lzRW1haWxBdmFpbGFibGUnLCBbJyRxJywnJGh0dHAnLCckcm9vdFNjb3BlJyxmdW5jdGlvbiAoJHEsICRodHRwLCAkcm9vdFNjb3BlKSB7XG4gICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAnbXNnLXVzZXJuYW1lLWF2YWlsYWJsZSc6ICd1c2VyIG5hbWUgYXZhaWxhYmxlJyxcbiAgICAgICAgJ21zZy11c2VybmFtZS10YWtlbic6ICd1c2VybmFtZSB0YWtlbicsXG4gICAgICAgICdtc2ctZW1haWwtYXZhaWxhYmxlJzogJ2VtYWlsIGF2YWlsYWJsZScsXG4gICAgICAgICdtc2ctZW1haWwtdGFrZW4nOiAnZW1haWwgdGFrZW4nLFxuICAgICAgICAndXNlQUpBWCc6IHRydWUsXG4gICAgfTtcbiAgICBmdW5jdGlvbiBtZXNzYWdlRW1haWxUYWtlbigpe1xuICAgICAgICAkKCcucmVnaXN0ZXItZm9ybS1tYWluLW1lc3NhZ2UnKS5yZW1vdmVDbGFzcygnc2hvdyBlcnJvcicpO1xuICAgIH1cbiAgICAgZnVuY3Rpb24gbWVzc2FnZVJlbW92ZSgpe1xuICAgICAgICAgICAgICAgICAgICAkKCcucmVnaXN0ZXItZm9ybS1tYWluLW1lc3NhZ2UnKS5yZW1vdmVDbGFzcygnc2hvdyBzdWNjZXNzJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgIHJldHVybiBmdW5jdGlvbihlbWFpbCkge1xuICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcblxuICAgICAgICAkaHR0cC5nZXQoJHJvb3RTY29wZS5lbmRQb2ludCArICcvdXNlcnM/ZW1haWw9JyArIGVtYWlsKS5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpe1xuXG4gICAgICAgICAgICBpZihkYXRhID09PSAnZW1haWwtYXZhaWxhYmxlJyl7XG4gICAgICAgICAgICAgICAgJCgnLnJlZ2lzdGVyLWZvcm0tbWFpbi1tZXNzYWdlJykuYWRkQ2xhc3MoJ3Nob3cgc3VjY2VzcycpLmh0bWwob3B0aW9uc1snbXNnLWVtYWlsLWF2YWlsYWJsZSddKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KG1lc3NhZ2VSZW1vdmUsIDIwMDApO1xuICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIH1lbHNlIGlmKGRhdGEgPT09ICdlbWFpbC10YWtlbicpe1xuICAgICAgICAgICAgICAgICQoJy5yZWdpc3Rlci1mb3JtLW1haW4tbWVzc2FnZScpLmFkZENsYXNzKCdzaG93IGVycm9yJykuaHRtbChvcHRpb25zWydtc2ctZW1haWwtdGFrZW4nXSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChtZXNzYWdlRW1haWxUYWtlbiwgMjAwMCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XG4gICAgICAgICB9KS5lcnJvcihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgICAgIH0pO1xuICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcbn1dKTtcbiIsImFuZ3VsYXIubW9kdWxlKCdzeW5jJykuc2VydmljZSgnQ2hlY2tpbmdlbXB0eScsWyckaHR0cCcsJyRxJywnJHJvb3RTY29wZScsZnVuY3Rpb24oJGh0dHAsJHEsJHJvb3RTY29wZSl7XG4gIHRoaXMuY2hlY2thbGxGb2xkZXJGaWxlICA9IGZ1bmN0aW9uKGlkKXtcbiAgICB2YXIgZGlmZmVyID0gJHEuZGVmZXIoKTtcbiAgICAkaHR0cC5nZXQoJHJvb3RTY29wZS5lbmRQb2ludCArICcvYXBpL2NoZWNrYWxsRm9sZGVyRmlsZS8nICtpZClcbiAgICAuc3VjY2VzcyhmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICBkaWZmZXIucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgfSxmdW5jdGlvbihlcnIpe1xuICAgICAgZGlmZmVyLnJlamVjdChlcnIpO1xuICAgIH0pO1xuICAgIHJldHVybiBkaWZmZXIucHJvbWlzZTtcbiAgfTtcbiAgcmV0dXJuIHRoaXM7IFxufV0pO1xuIiwiYW5ndWxhci5tb2R1bGUoJ3N5bmMnKS5cbnNlcnZpY2UoJ0VuY3J5cHRlcicsIFsnJGh0dHAnLCAnJHEnLCAnJHJvb3RTY29wZScsIGZ1bmN0aW9uIEVuY3J5cHRlcigkaHR0cCwgJHEsICRyb290U2NvcGUpIHtcbiAgICB0aGlzLmtleSA9IGZ1bmN0aW9uIChrZXkpIHtcblxuICAgICAgICB2YXIgcHJvbWlzcyA9ICRxLmRlZmVyKCk7XG4gICAgICAgICRodHRwLnBvc3QoJHJvb3RTY29wZS5lbmRQb2ludCArICcvZW5jcnlwdCcsIGtleSlcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnZm9sZGVyOmxpc3QnKTtcbiAgICAgICAgICAgICAgICBwcm9taXNzLnJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNzLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzcy5wcm9taXNlO1xuICAgIH07XG59XSk7IiwiYW5ndWxhci5tb2R1bGUoJ3N5bmMnKS5cbnNlcnZpY2UoJ0ZpbGVzJywgWyckaHR0cCcsJyRxJywnJHJvb3RTY29wZScsZnVuY3Rpb24gRmlsZXMgKCRodHRwLCRxLCRyb290U2NvcGUpIHtcbiAgICB0aGlzLmdldEdyb3VwRmlsZXMgPWZ1bmN0aW9uKGdyb3VwSWQpIHtcbiAgICAgICAgdmFyIGRpZmZlcmVkID0gJHEuZGVmZXIoKTtcbiAgICAgICAgXG4gICAgICAgICRodHRwLmdldCgkcm9vdFNjb3BlLmVuZFBvaW50ICsnL2FwaS9ncm91cHMvJytncm91cElkKycvZ3JvdXBmaWxlcycpXG4gICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgICAgIGRpZmZlcmVkLnJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgIGRpZmZlcmVkLnJlamVjdChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZGlmZmVyZWQucHJvbWlzZTtcbiAgICB9O1xuICAgIHRoaXMuZGVsZXRlID1mdW5jdGlvbihpZCkge1xuICAgICAgICB2YXIgZGlmZmVyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgIFxuICAgICAgICAkaHR0cC5nZXQoJHJvb3RTY29wZS5lbmRQb2ludCArJy9hcGkvZmlsZURlbGV0ZS8nK2lkKVxuXG4gICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgICAgIGRpZmZlcmVkLnJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgIGRpZmZlcmVkLnJlamVjdChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZGlmZmVyZWQucHJvbWlzZTtcbiAgICB9O1xuXG4gIHRoaXMuZmlsZXJlc3RvcmUgPWZ1bmN0aW9uKGlkKSB7XG4gICAgICAgIHZhciBkaWZmZXJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgIFxuICAgICAgICAkaHR0cC5nZXQoJHJvb3RTY29wZS5lbmRQb2ludCArJy9hcGkvZmlsZXJlc3RvcmUvJytpZClcbiAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgICAgZGlmZmVyZWQucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5lcnJvcihmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgZGlmZmVyZWQucmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkaWZmZXJlZC5wcm9taXNlO1xuICAgIH07XG4gICAgICB0aGlzLmRlbGV0ZW9uYmluc19maWxlcyA9ZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgdmFyIGRpZmZlcmVkID0gJHEuZGVmZXIoKTtcbiAgICAgICAgXG4gICAgICAgICRodHRwLmRlbGV0ZSgkcm9vdFNjb3BlLmVuZFBvaW50ICsnL2FwaS9kZWxldGVvbmJpbnNfZmlsZXMvJytpZClcbiAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgICAgZGlmZmVyZWQucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5lcnJvcihmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgZGlmZmVyZWQucmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkaWZmZXJlZC5wcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmZpbGVDb3B5ID1mdW5jdGlvbihmb2xkZXJfaWQsZmlsZV9pZCkge1xuICAgICAgICB2YXIgZGlmZmVyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgICBcbiAgICAgICAgJGh0dHAucG9zdCgkcm9vdFNjb3BlLmVuZFBvaW50ICsnL2FwaS9maWxlQ29weS8nK2ZvbGRlcl9pZCsnLycrZmlsZV9pZClcbiAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgICAgZGlmZmVyZWQucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5lcnJvcihmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgZGlmZmVyZWQucmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkaWZmZXJlZC5wcm9taXNlO1xuICAgIH07XG4gICAgdGhpcy5nZXRTaGFyZWJsZU5hbWUgPSBmdW5jdGlvbihpZCkge1xuICAgICAgICB2YXIgZGlmZmVyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgIFxuICAgICAgICAkaHR0cC5nZXQoJHJvb3RTY29wZS5lbmRQb2ludCArJy9hcGkvc2hhcmVibGVMaW5rLycraWQpXG4gICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgICAgIGRpZmZlcmVkLnJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgIGRpZmZlcmVkLnJlamVjdChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZGlmZmVyZWQucHJvbWlzZTtcbiAgICB9O1xuICAgIHRoaXMuY3JlYXp5ID0gZnVuY3Rpb24ob2JqZWN0KXtcbiAgICAgICAgdmFyIGRpZmZlcmVkID0gJHEuZGVmZXIoKTtcbiAgICAgICBcbiAgICAgICAgJGh0dHAuZ2V0KCRyb290U2NvcGUuZW5kUG9pbnQgKycvYXBpLz8rcXVlcnk9JysncXVlcnkrRmV0Y2hVc2Vycycrb2JqZWN0KVxuICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICAgICBkaWZmZXJlZC5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICBkaWZmZXJlZC5yZWplY3QoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGRpZmZlcmVkLnByb21pc2U7XG4gICAgfTtcbiAgICB0aGlzLnNpbmdsZSA9IGZ1bmN0aW9uKGZpbGUpe1xuICAgICAgdmFyIHByb21pc2UgPSAkcS5kZWZlcigpO1xuICAgICAgJGh0dHAuZ2V0KCRyb290U2NvcGUuZW5kUG9pbnQrICcvcHJldmlldy8nKyBmaWxlKVxuICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICBwcm9taXNlLnJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfSlcbiAgICAgIC5lcnJvcihmdW5jdGlvbihlcnIpe1xuICAgICAgICBwcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcHJvbWlzZS5wcm9taXNlO1xuICAgIH07XG4gICAgdGhpcy5nZXRCb3hGaWxlcyA9IGZ1bmN0aW9uKGZvbGRlcklkKXtcbiAgICAgICAgdmFyIGdyb3VwSWQgPSAxO1xuICAgICAgICB2YXIgZGlmZmVyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgICBcbiAgICAgICAgJGh0dHAuZ2V0KCRyb290U2NvcGUuZW5kUG9pbnQgKyAnL2FwaS9maWxlcy8nK2dyb3VwSWQrJy9ib3hmaWxlcy8nICtmb2xkZXJJZClcbiAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICBcbiAgICAgICAgICBkaWZmZXJlZC5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGVycil7XG4gICAgICAgICAgZGlmZmVyZWQucmVqZWN0KGVycik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZGlmZmVyZWQucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgICAgdGhpcy5nZXRmaWxlc0luYmlucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIElkID0gXCJGaWxlc1wiO1xuICAgICAgICB2YXIgcHJvbWlzcyA9ICRxLmRlZmVyKCk7XG4gICAgICAgICRodHRwLmdldCgkcm9vdFNjb3BlLmVuZFBvaW50ICsgJy9hcGkvRmlsZXNiaW5zL2xpc3QvJyArIElkKVxuXG5cbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHByb21pc3MucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHByb21pc3MucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNzLnByb21pc2U7XG4gICAgfTtcblxuICAgICAgIHRoaXMucmVjZWl2ZVNoYXJlZEZpbGVzID0gZnVuY3Rpb24oZm9sZGVySWQpe1xuICAgICAgICAgXG4gICAgICAgIHZhciBncm91cElkID0gMTtcbiAgICAgICAgdmFyIGRpZmZlcmVkID0gJHEuZGVmZXIoKTtcbiAgICAgICAgJGh0dHAuZ2V0KCRyb290U2NvcGUuZW5kUG9pbnQgKyAnL2FwaS9zaGFyZWRyZWNlaXZlZGYvJytncm91cElkKycvc2hhcmVkYm94ZmlsZXMvJyArZm9sZGVySWQpXG5cbiAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICBcbiAgICAgICAgICBkaWZmZXJlZC5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGVycil7XG4gICAgICAgICAgZGlmZmVyZWQucmVqZWN0KGVycik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZGlmZmVyZWQucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgICB0aGlzLnNlbmRTaGFyZWRib3hGaWxlcyA9IGZ1bmN0aW9uKGZvbGRlcklkKXtcbiAgICAgICAgIFxuICAgICAgICB2YXIgZ3JvdXBJZCA9IDE7XG4gICAgICAgIHZhciBkaWZmZXJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgIFxuICAgICAgICAkaHR0cC5nZXQoJHJvb3RTY29wZS5lbmRQb2ludCArICcvYXBpL3NoYXJlZHNlbmQvJytncm91cElkKycvc2hhcmVkYm94ZmlsZXMvJyArZm9sZGVySWQpXG4gICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgXG4gICAgICAgICAgZGlmZmVyZWQucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5lcnJvcihmdW5jdGlvbihlcnIpe1xuICAgICAgICAgIGRpZmZlcmVkLnJlamVjdChlcnIpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGRpZmZlcmVkLnByb21pc2U7XG4gICAgfTtcbiAgICBcblxuXG4gICAgdGhpcy5nZXRNaW1lVHlwZSA9IGZ1bmN0aW9uKGZpbGVfbmFtZSl7XG4gICAgICB2YXIgcHJvbWlzZSA9ICRxLmRlZmVyKCk7XG4gICAgICAkaHR0cC5nZXQoJHJvb3RTY29wZS5lbmRQb2ludCArICcvYXBpL2ZpbGVzL21pbWVUeXBlLycrIGZpbGVfbmFtZSlcbiAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgICBwcm9taXNlLnJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfSlcbiAgICAgIC5lcnJvcihmdW5jdGlvbihlcnIpe1xuICAgICAgICAgIHByb21pc2UucmVqZWN0KGVycik7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBwcm9taXNlLnByb21pc2U7XG4gICAgfTtcbiAgICB0aGlzLmRvd25sb2FkRmlsZSA9IGZ1bmN0aW9uKGZpbGVfbmFtZSl7XG5cbiAgICAgIHZhciBwcm9taXNlID0gJHEuZGVmZXIoKTtcbiAgICAgIFxuICAgICAgJGh0dHAuZ2V0KCRyb290U2NvcGUuZW5kUG9pbnQrICcvYXBpL2ZpbGVzL2Rvd25sb2FkLycrZmlsZV9uYW1lKycvb2YvJysgJ1N0cmltVXAnKVxuICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICBwcm9taXNlLnJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfSlcbiAgICAgIC5lcnJvcihmdW5jdGlvbihlcnIpe1xuICAgICAgICBwcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcHJvbWlzZS5wcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLm1ha2VQdWJsaWMgPSBmdW5jdGlvbihmaWxlT2JqZWN0KXtcbiAgICAgICAgdmFyIGRpZmZlciA9ICRxLmRlZmVyKCk7XG4gICAgICAgICRodHRwLnBvc3QoJHJvb3RTY29wZS5lbmRQb2ludCArICcvYXBpL21ha2VQdWJsaWMnLGZpbGVPYmplY3QpXG4gICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgICAgIGRpZmZlci5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0sZnVuY3Rpb24oZXJyKXtcbiAgICAgICAgICAgICAgICBkaWZmZXIucmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGRpZmZlci5wcm9taXNlO1xuICAgIH1cbiAgICB0aGlzLmNvdW50ZmlsZXMgID0gZnVuY3Rpb24oaWQpe1xuICAgIHZhciBkaWZmZXIgPSAkcS5kZWZlcigpO1xuICAgICRodHRwLmdldCgkcm9vdFNjb3BlLmVuZFBvaW50ICsgJy9hcGkvY291bnRmaWxlcy8nICtpZClcbiAgICAuc3VjY2VzcyhmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICBkaWZmZXIucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgfSxmdW5jdGlvbihlcnIpe1xuICAgICAgZGlmZmVyLnJlamVjdChlcnIpO1xuICAgIH0pO1xuICAgIHJldHVybiBkaWZmZXIucHJvbWlzZTtcbiAgfTtcbiAgICByZXR1cm4gdGhpcztcbn1dKTtcbiIsImFuZ3VsYXIubW9kdWxlKCdzeW5jJykuc2VydmljZSgnRm9sZGVyJywgWyckaHR0cCcsICckcScsICckcm9vdFNjb3BlJywgZnVuY3Rpb24gKCRodHRwLCAkcSwgJHJvb3RTY29wZSkge1xuXG5cbiAgdGhpcy5mb2xkZXJyZXN0b3JlID1mdW5jdGlvbihpZCkge1xuICAgICAgICB2YXIgZGlmZmVyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgICAvL2Rvd24gZW5kcG9pbnQgcmV0dXJuIGFsbCBmaWxlcyBJIG93blxuICAgICAgICAkaHR0cC5nZXQoJHJvb3RTY29wZS5lbmRQb2ludCArICcvYXBpL2ZvbGRlcnJlc3RvcmUvJyArIGlkKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgZGlmZmVyZWQucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGRpZmZlcmVkLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGRpZmZlcmVkLnByb21pc2U7XG4gICAgfTtcbiAgICAgIHRoaXMuZGVsZXRlb25iaW5zX2ZvbGRlcnMgPWZ1bmN0aW9uKGlkKSB7XG4gICAgICAgIHZhciBkaWZmZXJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgIC8vZG93biBlbmRwb2ludCByZXR1cm4gYWxsIGZpbGVzIEkgb3duXG4gICAgICAgICRodHRwLmRlbGV0ZSgkcm9vdFNjb3BlLmVuZFBvaW50ICsnL2FwaS9kZWxldGVvbmJpbnNfZm9sZGVycy8nK2lkKVxuICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICAgICBkaWZmZXJlZC5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICBkaWZmZXJlZC5yZWplY3QoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGRpZmZlcmVkLnByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuY3JlYXRlRm9sZGVyID0gZnVuY3Rpb24gKG5hbWUpIHtcblxuICAgICAgICB2YXIgcHJvbWlzcyA9ICRxLmRlZmVyKCk7XG4gICAgICAgICRodHRwLnBvc3QoJHJvb3RTY29wZS5lbmRQb2ludCArICcvYXBpL2NyZWF0ZUZvbGRlcicsIG5hbWUpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2ZvbGRlcjpsaXN0Jyk7XG4gICAgICAgICAgICAgICAgcHJvbWlzcy5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzcy5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc3MucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgICAgdGhpcy5yZW5hbWVmb2xkZXIgPSBmdW5jdGlvbiAobmFtZSkge1xuXG4gICAgICAgIHZhciBwcm9taXNzID0gJHEuZGVmZXIoKTtcbiAgICAgICAgJGh0dHAucG9zdCgkcm9vdFNjb3BlLmVuZFBvaW50ICsgJy9hcGkvcmVuYW1lZm9sZGVyJywgbmFtZSlcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnZm9sZGVyOmxpc3QnKTtcbiAgICAgICAgICAgICAgICBwcm9taXNzLnJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNzLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzcy5wcm9taXNlO1xuICAgIH07XG5cblxuICAgIHRoaXMuZ2V0Rm9sZGVycyA9IGZ1bmN0aW9uIChGb2xkZXJuYW1lcykge1xuXG4gICAgICAgIHZhciBwcm9taXNzID0gJHEuZGVmZXIoKTtcbiAgICAgICAgJGh0dHAuZ2V0KCRyb290U2NvcGUuZW5kUG9pbnQgKyAnL2FwaS9mb2xkZXJzL2xpc3QvJyArIEZvbGRlcm5hbWVzKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzcy5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzcy5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc3MucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgIFxuXG50aGlzLmdldGZvbGRlckluYmlucyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgSWQgPSBcIkZvbGRlcnNcIjtcbiAgICAgICAgdmFyIHByb21pc3MgPSAkcS5kZWZlcigpO1xuICAgICAgICAkaHR0cC5nZXQoJHJvb3RTY29wZS5lbmRQb2ludCArICcvYXBpL2JpbnMvbGlzdC8nICsgSWQpXG5cbi5zdWNjZXNzKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHByb21pc3MucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHByb21pc3MucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNzLnByb21pc2U7XG4gICAgfTtcblxuICAgICB0aGlzLnNlbmRTaGFyZWRGb2xkZXIgPSBmdW5jdGlvbiAoRm9sZGVybmFtZXMpe1xuICAgICAgICB2YXIgcHJvbWlzcyA9ICRxLmRlZmVyKCk7XG4gICAgICAgICRodHRwLmdldCgkcm9vdFNjb3BlLmVuZFBvaW50ICsgJy9hcGkvc2hhcmVkc2VuZC9saXN0LycgKyBGb2xkZXJuYW1lcylcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHByb21pc3MucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHByb21pc3MucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNzLnByb21pc2U7XG4gICAgfTtcbiAgICAgICB0aGlzLnJlY2VpdmVTaGFyZWRGb2xkZXIgPSBmdW5jdGlvbiAoRm9sZGVybmFtZXMpe1xuICAgICAgICB2YXIgcHJvbWlzcyA9ICRxLmRlZmVyKCk7XG4gICAgICAgICRodHRwLmdldCgkcm9vdFNjb3BlLmVuZFBvaW50ICsgJy9hcGkvc2hhcmVkcmVjZWl2ZWQvbGlzdC8nICsgRm9sZGVybmFtZXMpXG4gICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHByb21pc3MucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHByb21pc3MucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNzLnByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuZGVsZXRlRm9sZGVycyA9IGZ1bmN0aW9uIChmb2xkZXJfaWQpIHtcblxuICAgICAgICB2YXIgcHJvbWlzcyA9ICRxLmRlZmVyKCk7XG4gICAgICAgICRodHRwLmdldCgkcm9vdFNjb3BlLmVuZFBvaW50ICsgJy9hcGkva2VlcGZvbGRlcnNvbmJpbi8nICsgZm9sZGVyX2lkKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdmb2xkZXI6bGlzdCcpO1xuICAgICAgICAgICAgICAgIHByb21pc3MucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHByb21pc3MucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgcmV0dXJuIHByb21pc3MucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgXG5cbiAgICB0aGlzLnBhdGggPSBmdW5jdGlvbiAoY2hpbGRfaWQpIHtcblxuICAgICAgICB2YXIgcHJvbWlzcyA9ICRxLmRlZmVyKCk7XG4gICAgICAgICRodHRwLmdldCgkcm9vdFNjb3BlLmVuZFBvaW50ICsgJy9hcGkvZ21lUGF0aC8nICsgY2hpbGRfaWQpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgcHJvbWlzcy5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzcy5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9taXNzLnByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuY291bnRmb2xkZXJzICA9IGZ1bmN0aW9uKGlkKXtcbiAgICB2YXIgZGlmZmVyID0gJHEuZGVmZXIoKTtcbiAgICAkaHR0cC5nZXQoJHJvb3RTY29wZS5lbmRQb2ludCArICcvYXBpL2NvdW50Zm9sZGVycy8nICtpZClcbiAgICAuc3VjY2VzcyhmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICBkaWZmZXIucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgfSxmdW5jdGlvbihlcnIpe1xuICAgICAgZGlmZmVyLnJlamVjdChlcnIpO1xuICAgIH0pO1xuICAgIHJldHVybiBkaWZmZXIucHJvbWlzZTtcbiAgfTtcbiAgICByZXR1cm4gdGhpcztcblxufV0pOyIsImFuZ3VsYXIubW9kdWxlKCdzeW5jJykuXG5zZXJ2aWNlKCdNZXNzYWdlJywgWyckaHR0cCcsJyRxJywnJHJvb3RTY29wZScsZnVuY3Rpb24gRmlsZXMgKCRodHRwLCRxLCRyb290U2NvcGUpIHtcbiAgICB0aGlzLnNlbmQgPWZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgdmFyIGRpZmZlcmVkID0gJHEuZGVmZXIoKTtcbiAgICAgICAgLy9kb3duIGVuZHBvaW50IHJldHVybiBhbGwgZmlsZXMgSSBvd25cbiAgICAgICAgJGh0dHAucG9zdCgkcm9vdFNjb3BlLmVuZFBvaW50ICsnL2FwaS9tZXNzYWdlJyxtZXNzYWdlKVxuICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICAgICBkaWZmZXJlZC5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICBkaWZmZXJlZC5yZWplY3QoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGRpZmZlcmVkLnByb21pc2U7XG4gICAgfTtcbiAgICB0aGlzLmdldCA9ZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkaWZmZXJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgIC8vZG93biBlbmRwb2ludCByZXR1cm4gYWxsIGZpbGVzIEkgb3duXG4gICAgICAgICRodHRwLmdldCgkcm9vdFNjb3BlLmVuZFBvaW50ICsnL2FwaS9tZXNzYWdlL2xpc3QnKVxuICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICAgICBkaWZmZXJlZC5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICBkaWZmZXJlZC5yZWplY3QoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGRpZmZlcmVkLnByb21pc2U7XG4gICAgfTtcbn1dKTsiLCJhbmd1bGFyLm1vZHVsZSgnc3luYycpLnNlcnZpY2UoJ1Blb3BsZScsIFsnJHEnLCckaHR0cCcsJyRyb290U2NvcGUnLGZ1bmN0aW9uICgkcSwgJGh0dHAsICRyb290U2NvcGUpIHtcblx0dGhpcy5nZXQgID0gZnVuY3Rpb24gKCl7XG5cdFx0dmFyIGRpZmZlcmVkID0gJHEuZGVmZXIoKTtcblx0XHQkaHR0cC5nZXQoJHJvb3RTY29wZS5lbmRQb2ludCArICcvYXBpL3YxL3N1Z2dlc3Rpb25zJylcblx0XHQuc3VjY2VzcyhmdW5jdGlvbihyZXNwb25zZSl7XG5cdFx0XHRkaWZmZXJlZC5yZXNvbHZlKHJlc3BvbnNlKTtcblx0XHR9KVxuXHRcdC5lcnJvcihmdW5jdGlvbihlcnJvcikge1xuXHRcdFx0ZGlmZmVyZWQucmVqZWN0KGVycm9yKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gZGlmZmVyZWQucHJvbWlzZTtcblx0fTtcblx0dGhpcy5hbGxJZm9sbG93ID0gZnVuY3Rpb24gKCkge1xuXHRcdHZhciBkaWZmZXJlZCA9ICRxLmRlZmVyKCk7XG5cdFx0JGh0dHAuZ2V0KCRyb290U2NvcGUuZW5kUG9pbnQgKyAnL2FwaS92MS9tZS9mb2xsb3dpbmdzJylcblx0XHQuc3VjY2VzcyhmdW5jdGlvbihyZXNwb25zZSl7XG5cdFx0XHRkaWZmZXJlZC5yZXNvbHZlKHJlc3BvbnNlKTtcblx0XHR9KVxuXHRcdC5lcnJvcihmdW5jdGlvbihlcnIpe1xuXHRcdFx0ZGlmZmVyZWQucmVqZWN0KGVycik7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGRpZmZlcmVkLnByb21pc2U7XG5cdH07XG5cdHRoaXMudW5Gb2xsb3cgPSBmdW5jdGlvbihpZCl7XG5cdFx0dmFyIGRpZmZlcmVkID0gJHEuZGVmZXIoKTtcblx0XHQkaHR0cC5kZWxldGUoJHJvb3RTY29wZS5lbmRQb2ludCArICcvYXBpL3YxL21lL2ZvbGxvd2luZy8nICtpZClcblx0XHQuc3VjY2VzcyhmdW5jdGlvbihyZXNwb25zZSl7XG5cdFx0XHRkaWZmZXJlZC5yZXNvbHZlKHJlc3BvbnNlKTtcblx0XHR9KVxuXHRcdC5lcnJvcihmdW5jdGlvbihlcnIpe1xuXHRcdFx0ZGlmZmVyZWQucmVqZWN0KGVycik7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGRpZmZlcmVkLnByb21pc2U7XG5cdH07XG5cdHRoaXMuZm9sbG93ID0gZnVuY3Rpb24ocGFyYW0pe1xuXHRcdHZhciBkaWZmZXJlZCA9ICRxLmRlZmVyKCk7XG5cdFx0JGh0dHAucHV0KCRyb290U2NvcGUuZW5kUG9pbnQgKyAnL2FwaS92MS9tZS9mb2xsb3dpbmdzJywgcGFyYW0pXG5cdFx0LnN1Y2Nlc3MoZnVuY3Rpb24ocmVzcG9uc2Upe1xuXHRcdFx0ZGlmZmVyZWQucmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0fSlcblx0XHQuZXJyb3IoZnVuY3Rpb24oZXJyb3Ipe1xuXHRcdFx0ZGlmZmVyZWQucmVqZWN0KGVycm9yKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gZGlmZmVyZWQucHJvbWlzZTtcblx0fTtcblx0cmV0dXJuIHRoaXM7XG59XSk7XG4iLCIvKiBnbG9iYWwgc3luYyAqL1xuYW5ndWxhci5tb2R1bGUoJ3N5bmMnKVxuLnNlcnZpY2UoJ1NldHRpbmdzJywgWyckaHR0cCcsJyRyb290U2NvcGUnLCckcScsZnVuY3Rpb24gKCRodHRwLCRyb290U2NvcGUsJHEpIHtcblx0dGhpcy5jdXJyZW50ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgXG4gICAgICAgIHZhciBkaWZmZXJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgICRodHRwLmdldCgkcm9vdFNjb3BlLmVuZFBvaW50ICsgJy9hcGkvdjEvc2V0dGluZ3MnKVxuICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihyZXNwKXtcbiAgICAgICAgICAgIGRpZmZlcmVkLnJlc29sdmUocmVzcCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5lcnJvcihmdW5jdGlvbihlcnIpe1xuICAgICAgICAgICAgZGlmZmVyZWQucmVqZWN0KGVycik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZGlmZmVyZWQucHJvbWlzZTtcbiAgICB9O1xuICAgIHRoaXMubWFrZVB1YmxpYyA9IGZ1bmN0aW9uKHBhcmFtKSB7XG4gICAgICAgIHZhciBkaWZmZXJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgICRodHRwLnBvc3QoJHJvb3RTY29wZS5lbmRQb2ludCArICcvYXBpL3NldHRpbmdzJyxwYXJhbSlcbiAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24ocmVzKXtcbiAgICAgICAgICAgIGRpZmZlcmVkLnJlc29sdmUocmVzKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgZGlmZmVyZWQucmVqZWN0KGVycik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZGlmZmVyZWQucHJvbWlzZTtcbiAgICB9O1xuXG5cbiAgICBcdHRoaXMuY2hlY2tlbXB0eWJpbnMgPSBmdW5jdGlvbigpe1xuXG5cdFx0dmFyIGRpZmZlcmVkID0gJHEuZGVmZXIoKTtcblx0XHQkaHR0cC5nZXQoJHJvb3RTY29wZS5lbmRQb2ludCArICcvYXBpL3YxL2NoZWNrZW1wdHliaW5zJylcblx0XHQuc3VjY2VzcyhmdW5jdGlvbihyZXNwb25zZSl7XG5cdFx0XHRkaWZmZXJlZC5yZXNvbHZlKHJlc3BvbnNlKTtcblx0XHR9KVxuXHRcdC5lcnJvcihmdW5jdGlvbihlcnIpe1xuXHRcdFx0ZGlmZmVyZWQucmVqZWN0KGVycik7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGRpZmZlcmVkLnByb21pc2U7XG5cdH07XG5cbiAgICByZXR1cm4gdGhpcztcbn1dKTtcbiIsImFuZ3VsYXIubW9kdWxlKCdzeW5jJylcbi5zZXJ2aWNlKCdTaGFyZScsWyckbG9nJywnJGh0dHAnLCckcScsJyRyb290U2NvcGUnLCBmdW5jdGlvbiAoJGxvZywkaHR0cCwkcSwkcm9vdFNjb3BlKSB7XG5cdFxuXHR0aGlzLnNoYXJlID0gZnVuY3Rpb24oc2hhcmVibGVPYmope1xuXHRcdHZhciBkaWZmZXJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgICRodHRwLnBvc3QoJHJvb3RTY29wZS5lbmRQb2ludCArICcvYXBpL3YxL3NoYXJlJyxzaGFyZWJsZU9iailcbiAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgICAgZGlmZmVyZWQucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5lcnJvcihmdW5jdGlvbihlcnIpe1xuICAgICAgICAgICAgZGlmZmVyZWQucmVqZWN0KGVycik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZGlmZmVyZWQucHJvbWlzZTtcblx0fTtcblxuXHR0aGlzLmFsbHNzaGFyZWRGaWxlcyA9IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIHByb21pc2UgPSAkcS5kZWZlcigpO1xuXHRcdCRodHRwLmdldCgkcm9vdFNjb3BlLmVuZFBvaW50ICtcIi9hcGkvY291bnRzaGFyZWRcIilcblx0XHQuc3VjY2VzcyhmdW5jdGlvbihyZXMpe1xuXHRcdFx0XG5cdFx0XHRwcm9taXNlLnJlc29sdmUocmVzKTtcblx0XHR9KVxuXHRcdC5lcnJvcihmdW5jdGlvbigpIHtcblxuXHRcdFx0cHJvbWlzZS5yZWplY3QoKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gcHJvbWlzZS5wcm9taXNlO1xuXHR9O1xuXHRcbnRoaXMuU2VuZHNoYXJlZERhdGEgPSBmdW5jdGlvbihEYXRhVG9zaGFyZSkge1xuIFxuXG4gICB2YXIgcHJvbWlzcyA9ICRxLmRlZmVyKCk7XG4gICAkaHR0cC5wb3N0KCRyb290U2NvcGUuZW5kUG9pbnQgKycvYXBpL3NoYXJpbmcnLERhdGFUb3NoYXJlKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcHJvbWlzcy5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNzLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzcy5wcm9taXNlO1xuICAgIH07XG5cdHRoaXMuZ2V0VXNlciA9IGZ1bmN0aW9uKHVzZXIpe1xuXG5cdFx0dmFyIGRpZmZlcmVkID0gJHEuZGVmZXIoKTtcblx0XHQkaHR0cC5nZXQoJHJvb3RTY29wZS5lbmRQb2ludCArICcvYXBpL3YxL21lL3VzZXJzLycrIHVzZXIpXG5cdFx0LnN1Y2Nlc3MoZnVuY3Rpb24ocmVzcG9uc2Upe1xuXHRcdFx0ZGlmZmVyZWQucmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0fSlcblx0XHQuZXJyb3IoZnVuY3Rpb24oZXJyKXtcblx0XHRcdGRpZmZlcmVkLnJlamVjdChlcnIpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBkaWZmZXJlZC5wcm9taXNlO1xuXHR9O1xuXHR0aGlzLmZpbGVNaW1lID0gZnVuY3Rpb24oZmlsZSl7XG5cdFx0dmFyIGRpZmZlcmVkID0gJHEuZGVmZXIoKTtcblx0XHQkaHR0cC5nZXQoJHJvb3RTY29wZS5lbmRQb2ludCArICcvYXBpL3YxL21pbWVUeXBlLycrIGZpbGUpXG5cdFx0LnN1Y2Nlc3MoZnVuY3Rpb24ocmVzcG9uc2Upe1xuXHRcdFx0ZGlmZmVyZWQucmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0fSlcblx0XHQuZXJyb3IoZnVuY3Rpb24oZXJyKXtcblx0XHRcdGRpZmZlcmVkLnJlamVjdChlcnIpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBkaWZmZXJlZC5wcm9taXNlO1xuXHR9O1xuICAgIHJldHVybiB0aGlzO1xufV0pOyIsImFuZ3VsYXIubW9kdWxlKCdzeW5jJykuc2VydmljZSgnU01TJyxbJyRodHRwJywnJHEnLCckcm9vdFNjb3BlJyxmdW5jdGlvbigkaHR0cCwkcSwkcm9vdFNjb3BlKXtcbiAgdGhpcy5zZW5kICA9IGZ1bmN0aW9uKG1lc3NhZ2Upe1xuICAgIHZhciBkaWZmZXIgPSAkcS5kZWZlcigpO1xuICAgICRodHRwLnBvc3QoJHJvb3RTY29wZS5lbmRQb2ludCArICcvYXBpL3YxL21lc3NhZ2VzL3NlbmQnLG1lc3NhZ2UpXG4gICAgLnN1Y2Nlc3MoZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgZGlmZmVyLnJlc29sdmUocmVzcG9uc2UpO1xuICAgIH0sZnVuY3Rpb24oZXJyKXtcbiAgICAgIGRpZmZlci5yZWplY3QoZXJyKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZGlmZmVyLnByb21pc2U7XG4gIH07XG4gIHJldHVybiB0aGlzO1xufV0pO1xuIiwiYW5ndWxhci5tb2R1bGUoJ3N5bmMnKVxuLnNlcnZpY2UoJ1N1YkZvbGRlcicsIFsnJGh0dHAnLCAnJHEnLCAnJHJvb3RTY29wZScsIGZ1bmN0aW9uKCRodHRwLCAkcSwgJHJvb3RTY29wZSkgXG5cdHtcblxuXG5cdHRoaXMuY3JlYXRlU3ViRm9sZGVyID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgICB2YXIgcHJvbWlzcyA9ICRxLmRlZmVyKCk7XG4gICAgICAgICRodHRwLnBvc3QoJHJvb3RTY29wZS5lbmRQb2ludCArJy9hcGkvdjEvc3ViZm9sZGVyJyxuYW1lKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNzLnJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgIHByb21pc3MucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJvbWlzcy5wcm9taXNlO1xuICAgIH07XG4gICAgdGhpcy5nZXRTdWJGb2xkZXJzID0gZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgdmFyIHByb21pc3MgPSAkcS5kZWZlcigpO1xuICAgICAgICAkaHR0cC5nZXQoJHJvb3RTY29wZS5lbmRQb2ludCArJy9hcGkvdjEvc3ViZm9sZGVyL2xpc3QvJytpZClcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKHJlc3BvbnNlKSBcblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb21pc3MucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzcy5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9taXNzLnByb21pc2U7XG4gICAgfTtcbiAgICBcblxuICByZXR1cm4gdGhpcztcbn1dKTsiLCJhbmd1bGFyLm1vZHVsZSgnc3luYycpXG4uc2VydmljZSgnVGVzdCcsW2Z1bmN0aW9uKCl7XG4gICAgdGhpcy50ZXN0aW5nTWV0aG9kID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7bmFtZToncmljaGFyZCd9O1xuICAgIH07XG4gICAgcmV0dXJuIHRoaXM7XG59XSk7IiwiYW5ndWxhci5tb2R1bGUoJ3N5bmMnKS5zZXJ2aWNlKCdVc2VyJywgWyckaHR0cCcsJyRxJywnJHJvb3RTY29wZScsZnVuY3Rpb24gRmlsZXMgKCRodHRwLCRxLCRyb290U2NvcGUpIHtcblx0dGhpcy5nZXQgPSBmdW5jdGlvbigpe1xuXHRcdHZhciBwcm9taXNlID0gJHEuZGVmZXIoKTtcblx0XHQkaHR0cC5nZXQoJHJvb3RTY29wZS5lbmRQb2ludCArXCIvYXBpL3VzZXJcIilcblx0XHQuc3VjY2VzcyhmdW5jdGlvbihyZXMpe1xuXHRcdFx0XG5cdFx0XHRwcm9taXNlLnJlc29sdmUocmVzKTtcblx0XHR9KVxuXHRcdC5lcnJvcihmdW5jdGlvbigpIHtcblx0XHRcdHByb21pc2UucmVqZWN0KCk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIHByb21pc2UucHJvbWlzZTtcblx0fTtcbiAgdGhpcy5mb2xsb3dlckVtYWlscyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBkaWZmZXJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAkaHR0cC5nZXQoJHJvb3RTY29wZS5lbmRQb2ludCArICcvYXBpL2VtYWlsT2ZteUZvbGxvd2VycycpXG4gICAgICAuc3VjY2VzcyhmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgIGRpZmZlcmVkLnJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfSlcbiAgICAgIC5lcnJvcihmdW5jdGlvbihlcnIpe1xuICAgICAgICBkaWZmZXJlZC5yZWplY3QoZXJyKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGRpZmZlcmVkLnByb21pc2U7XG4gIH07XG5cblx0dGhpcy5yZXBvcnQgPSBmdW5jdGlvbihlcnJvcikge1xuICAgIHZhciBkaWZmZXJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAkaHR0cC5wb3N0KCRyb290U2NvcGUuZW5kUG9pbnQgKyAnL2FwaS9idWdzJywgZXJyb3IpXG4gICAgICAuc3VjY2VzcyhmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgIGRpZmZlcmVkLnJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfSlcbiAgICAgIC5lcnJvcihmdW5jdGlvbihlcnIpe1xuICAgICAgICBkaWZmZXJlZC5yZWplY3QoZXJyKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGRpZmZlcmVkLnByb21pc2U7XG4gIH07XG5cdHRoaXMuZ3JvdXBzID0gZnVuY3Rpb24odXNlcil7XG4gICAgICB2YXIgZGlmZmVyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgJGh0dHAuZ2V0KCRyb290U2NvcGUuZW5kUG9pbnQgKyAnL2FwaS9tZS9ncm91cHMnKVxuICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICBkaWZmZXJlZC5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH0pXG4gICAgICAuZXJyb3IoZnVuY3Rpb24oZXJyKXtcbiAgICAgICAgZGlmZmVyZWQucmVqZWN0KGVycik7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBkaWZmZXJlZC5wcm9taXNlO1xuICAgIH07XG5cdFx0dGhpcy5kaXNrVXNhZ2UgPSBmdW5jdGlvbih1c2VyKXtcbiAgICAgIHZhciBkaWZmZXJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAkaHR0cC5nZXQoJHJvb3RTY29wZS5lbmRQb2ludCArICcvYXBpL2Rpc2tVc2FnZScpXG4gICAgICAuc3VjY2VzcyhmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgIGRpZmZlcmVkLnJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfSlcbiAgICAgIC5lcnJvcihmdW5jdGlvbihlcnIpe1xuICAgICAgICBkaWZmZXJlZC5yZWplY3QoZXJyKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGRpZmZlcmVkLnByb21pc2U7XG4gICAgfTtcbiAgICB0aGlzLm5vdGlmaWNhdGlvbkxpc3QgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBkaWZmZXJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAkaHR0cC5nZXQoJHJvb3RTY29wZS5lbmRQb2ludCArICcvYXBpL25vdGlmaWNhdGlvbkxpc3RzJylcblxuICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICBkaWZmZXJlZC5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH0pXG4gICAgICAuZXJyb3IoZnVuY3Rpb24oZXJyKXtcbiAgICAgICAgZGlmZmVyZWQucmVqZWN0KGVycik7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBkaWZmZXJlZC5wcm9taXNlO1xuICAgIH1cblx0cmV0dXJuIHRoaXM7XG59XSk7XG4iLCIvKiBnbG9iYWwgc3luYyAqL1xuYW5ndWxhci5tb2R1bGUoJ3N5bmMnKVxuLnNlcnZpY2UoJ05vdGlmaWNhdGlvbicsIFsnJGh0dHAnLCAnJHEnLCAnJHJvb3RTY29wZScsIGZ1bmN0aW9uIE5vdGlmaWNhdGlvbigkaHR0cCwgJHEsICRyb290U2NvcGUpIHtcbiAgICB0aGlzLmdldE5vdGlmaWNhdGlvbiA9IGZ1bmN0aW9uICh1c2VyX2lkKSB7XG4gICAgICAgIHZhciBkaWZmZXJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgICRodHRwLmdldCgkcm9vdFNjb3BlLmVuZFBvaW50ICsgJy9hcGkvdjEvbm90aWZpY2F0aW9ucycsIHtjYWNoZTogZmFsc2V9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgZGlmZmVyZWQucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGRpZmZlcmVkLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGRpZmZlcmVkLnByb21pc2U7XG4gICAgfTtcbiAgICB0aGlzLmNyZWF0ZU5vdGlmaWNhdGlvbiA9IGZ1bmN0aW9uIChOb3RpZmljYXRpb24pIHtcbiAgICAgICAgdmFyIGRpZmZlcmVkID0gJHEuZGVmZXIoKTtcbiAgICAgICAgJGh0dHAucG9zdCgkcm9vdFNjb3BlLmVuZFBvaW50ICsgJy9hcGkvdjEvbm90aWZpY2F0aW9ucycsIE5vdGlmaWNhdGlvbilcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGRpZmZlcmVkLnJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBkaWZmZXJlZC5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkaWZmZXJlZC5wcm9taXNlO1xuICAgIH07XG4gICAgdGhpcy5kZWxldGVOb3RpZmljYXRpb24gPSBmdW5jdGlvbiAobm90aWZpY2F0aW9uKSB7XG4gICAgICAgIHZhciBkaWZmZXJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgICRodHRwLmRlbGV0ZSgkcm9vdFNjb3BlLmVuZFBvaW50ICsgJy9hcGkvdjEvbm90aWZpY2F0aW9ucy8nICsgbm90aWZpY2F0aW9uKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgZGlmZmVyZWQucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGRpZmZlcmVkLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBkaWZmZXJlZC5wcm9taXNlO1xuICAgIH07XG4gICAgcmV0dXJuIHRoaXM7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKCdzeW5jJylcbi5jb250cm9sbGVyKCdub3RpZmljYXRpb25Db250cm9sbGVyJywgWyckc2NvcGUnLCdOb3RpZmljYXRpb24nLCckbG9nJywgZnVuY3Rpb24gKCRzY29wZSxOb3RpZmljYXRpb24sJGxvZykge1xuICAgICRzY29wZS5pbml0ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgJHNjb3BlLmdldE5vdGlmaWNhdGlvbigpO1xuICAgIH07XG4gICAgJHNjb3BlLmNsZWFyTm90aWZpY2F0aW9uID0gZnVuY3Rpb24obm90aWZpY2F0aW9uKXtcblxuXG4gICAgICBOb3RpZmljYXRpb24uY2xlYXJOb3RpZmljYXRpb24obm90aWZpY2F0aW9uKVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAvL2xvYWQgcmVtYWluaW5nIG5vdGlmaWNhdGlvblxuICAgICAgICAkc2NvcGUuZ2V0Tm90aWZpY2F0aW9uKCk7XG4gICAgICB9LGZ1bmN0aW9uKGVycil7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgICB9O1xuICAgICRzY29wZS5nZXROb3RpZmljYXRpb24gPSBmdW5jdGlvbigpe1xuICAgICAgICBOb3RpZmljYXRpb24uZ2V0Tm90aWZpY2F0aW9uKClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcbiAgICAgICAgICAgIC8vICRsb2cuaW5mbyhyZXN1bHQpO1xuICAgICAgICAgICAgJHNjb3BlLm5vdGlmaWNhdGlvbnMgPSByZXN1bHQ7XG4gICAgICAgICAgICBcbiAgICAgICAgfSxmdW5jdGlvbihlcnJvcil7XG4gICAgICAgICAgICAvLyAkbG9nLmluZm8oZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgICRzY29wZS5pbml0KCk7XG59XSk7XG5hbmd1bGFyLm1vZHVsZSgnc3luYycpXG4uZGlyZWN0aXZlKCdub3RpZnknLFtmdW5jdGlvbigpe1xuICBmdW5jdGlvbiBub3RpZnlCcm93c2VyKHRpdGxlLGRlc2MsdXJsKVxuICAgICAge1xuICAgICAgICBpZiAoIU5vdGlmaWNhdGlvbikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Rlc2t0b3Agbm90aWZpY2F0aW9ucyBub3QgYXZhaWxhYmxlIGluIHlvdXIgYnJvd3Nlci4uJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gIT09IFwiZ3JhbnRlZFwiKXtcbiAgICAgICAgICBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB2YXIgbm90aWZpY2F0aW9uID0gbmV3IE5vdGlmaWNhdGlvbih0aXRsZSwge1xuICAgICAgICAgICAgaWNvbjonaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1hQ0ZpSzRiYVhYNC9Wam1HSm9qc1FfSS9BQUFBQUFBQU5KZy9oLXNMVlgxTTV6QS9zNDgtSWM0Mi9lZ2dzbWFsbC5wbmcnLFxuICAgICAgICAgICAgYm9keTogZGVzYyxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgbm90aWZpY2F0aW9uIGZyb20gTm90aWZpY2F0aW9uIENlbnRlciB3aGVuIGNsaWNrZWQuXG4gICAgICAgIG5vdGlmaWNhdGlvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgd2luZG93Lm9wZW4odXJsKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gQ2FsbGJhY2sgZnVuY3Rpb24gd2hlbiB0aGUgbm90aWZpY2F0aW9uIGlzIGNsb3NlZC5cbiAgICAgICAgbm90aWZpY2F0aW9uLm9uY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ05vdGlmaWNhdGlvbiBjbG9zZWQnKTtcbiAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICByZXR1cm57XG4gICAgcmVzdHJpY3Q6J0FFJyxcbiAgICBzY29wZTp7XG5cbiAgICB9LFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbCwgaUF0dHJzKXtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgdmFyIHRpdGxlPSdUaGlzIHdpbGwgYmUgdGl0bGUnO1xuICAgICAgICAgICAgICB2YXIgZGVzYz0nTW9zdCBwb3B1bGFyIGFydGljbGUuJztcbiAgICAgICAgICAgICAgdmFyIHVybD0nc3luYy5jb206ODAwMCc7XG4gICAgICAgICAgICAgIG5vdGlmeUJyb3dzZXIodGl0bGUsZGVzYyx1cmwpO1xuICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKXtcbiAgICAgICAgICAgICAgICBpZiAoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gIT09IFwiZ3JhbnRlZFwiKXtcbiAgICAgICAgICAgICAgICAgIE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIFxuICAgIH1cbiAgfTtcbn1dKTtcbiIsImFuZ3VsYXIubW9kdWxlKCdzeW5jJylcbi5mYWN0b3J5KCd1c2VySW50ZXJhY3Rpb25Ob3RpZmljYXRpb24nLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKG1lc3NhZ2UsIFwiU3VjY2Vzc1wiKTtcbiAgICAgICAgfSxcbiAgICAgICAgd2FybjogZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKG1lc3NhZ2UsIFwiSGV5XCIpO1xuICAgICAgICB9LFxuICAgICAgICBpbmZvOiBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICAgICAgdG9hc3RyLmluZm8obWVzc2FnZSwgXCJGWUlcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICAgICAgdG9hc3RyLmVycm9yKG1lc3NhZ2UsIFwiT2ggTm9cIik7XG4gICAgICAgIH1cbiAgICB9O1xufSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnc3luYycpXG4uZmFjdG9yeSgndXNlckludGVyYWN0aW9uTm90aWZpY2F0aW9uJywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhtZXNzYWdlLCBcIlN1Y2Nlc3NcIik7XG4gICAgICAgIH0sXG4gICAgICAgIHdhcm46IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgICAgICB0b2FzdHIud2FybmluZyhtZXNzYWdlLCBcIkhleVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgaW5mbzogZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHRvYXN0ci5pbmZvKG1lc3NhZ2UsIFwiRllJXCIpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihtZXNzYWdlLCBcIk9oIE5vXCIpO1xuICAgICAgICB9XG4gICAgfTtcbn0pO1xuIiwiYW5ndWxhci5tb2R1bGUoJ3N5bmMnKVxuXHQuY29udHJvbGxlcignZGlhbG9nQ29udHJvbGxlcicsIFsnJHNjb3BlJywgJyR1aWJNb2RhbCcsICckbWREaWFsb2cnLCAnJG1kTWVkaWEnLCAndXJsU2hvcnRlbmVyJywgJ1NoYXJlJywgJ1VzZXInLCAnJHJvb3RTY29wZScsICdGaWxlcycsICdGb2xkZXInLCAnJGh0dHAnLCAnRW5jcnlwdGVyJyxcblx0XHRmdW5jdGlvbiAoJHNjb3BlLCAkdWliTW9kYWwsICRtZERpYWxvZywgJG1kTWVkaWEsIHVybFNob3J0ZW5lciwgU2hhcmUsIFVzZXIsICRyb290U2NvcGUsIEZpbGVzLCBGb2xkZXIsICRodHRwLCBFbmNyeXB0ZXIpIHtcblxuXG5cdFx0XHRmdW5jdGlvbiBEaWFsb2dDb250cm9sbGVyKCRzY29wZSwgJG1kRGlhbG9nKSB7XG5cblx0XHRcdFx0JHNjb3BlLmhpZGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0JG1kRGlhbG9nLmhpZGUoKTtcblx0XHRcdFx0fTtcblx0XHRcdFx0JHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHQkbWREaWFsb2cuY2FuY2VsKCk7XG5cdFx0XHRcdH07XG5cblxuXHRcdFx0fVxuXHRcdFx0JHNjb3BlLmN1c3RvbUZ1bGxzY3JlZW4gPSAkbWRNZWRpYSgneHMnKSB8fCAkbWRNZWRpYSgnc20nKTtcblx0XHRcdCRzY29wZS5zZXR0aW5ncyA9IGZ1bmN0aW9uIChpZCwgdHlwZSkge1xuXHRcdFx0XHQkcm9vdFNjb3BlLmlkID0gaWQ7XG5cdFx0XHRcdCRyb290U2NvcGUudHlwZSA9IHR5cGU7XG5cdFx0XHRcdCRtZERpYWxvZy5zaG93KHtcblx0XHRcdFx0XHRwYXJlbnQ6IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5ib2R5KSxcblx0XHRcdFx0XHRjb250cm9sbGVyOiBEaWFsb2dDb250cm9sbGVyLFxuXHRcdFx0XHRcdHRlbXBsYXRlVXJsOiAnL3ZpZXdzL3NldHRpbmdzLnRwbC5odG1sJyxcblx0XHRcdFx0XHRjbGlja091dHNpZGVUb0Nsb3NlOiBmYWxzZVxuXHRcdFx0XHR9KS5jYXRjaCgpO1xuXG5cdFx0XHR9O1xuXHRcdFx0JChcIiNuZXV0cmFsXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XG5cdFx0XHR9KTtcblx0XHRcdCQoXCIjY29ubmVjdFwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHR9KTtcblx0XHRcdCQoXCIjYnVnUmVwb3J0XCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdH0pO1xuXHRcdFx0JChcIiNsaWtlc1wiKS5jbGljayhmdW5jdGlvbiAoZSkge1xuXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdFx0fSk7XG5cdFx0XHQkKFwiI3VwbG9hZFwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHR9KTtcblx0XHRcdCQoXCIjcHJvcGVydGllc1wiKS5jbGljayhmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHR9KTtcblx0XHRcdCQoXCIjRGVsZXRlZG9jc1wiKS5jbGljayhmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHR9KTtcblx0XHRcdCQoXCIjUmVuYW1lZG9jc1wiKS5jbGljayhmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0JChcIiNkb3dubG9hZHBvcFwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0JHNjb3BlLnVwbG9hZCA9IGZ1bmN0aW9uICh0eXBlKSB7XG5cdFx0XHRcdC8vbWFrZSBhIHR5cGUgdG8gYmUgYWNjZXNzaWJsZSBvbiBjaGlsZCBzY29wZSBkbyBub3QgZGVsZXRlIGl0IVxuXHRcdFx0XHQkcm9vdFNjb3BlLmZpbGVUeXBlID0gdHlwZTtcblx0XHRcdFx0JG1kRGlhbG9nLnNob3coe1xuXHRcdFx0XHRcdHBhcmVudDogYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmJvZHkpLFxuXHRcdFx0XHRcdGNvbnRyb2xsZXI6IERpYWxvZ0NvbnRyb2xsZXIsXG5cdFx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvdmlld3MvdXBsb2FkLnRwbC5odG1sJyxcblx0XHRcdFx0XHRjbGlja091dHNpZGVUb0Nsb3NlOiBmYWxzZVxuXHRcdFx0XHR9KS5jYXRjaCgpO1xuXHRcdFx0fTtcblxuXHRcdFx0JHNjb3BlLnByb3BlcnRpZXMgPSBmdW5jdGlvbiAoZmlkLCBmbmFtZSwgZnNpemUsIGZ0eXBlLCBmY3JlYXRlZF9hdCkge1xuXG5cblx0XHRcdFx0ZnVuY3Rpb24gcHJvcGVydGllc0NvbnRyb2xsZXIoJHNjb3BlLCAkbWREaWFsb2cpIHtcblxuXHRcdFx0XHRcdCRzY29wZS5oaWRlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0JG1kRGlhbG9nLmhpZGUoKTtcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdCRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHQkbWREaWFsb2cuY2FuY2VsKCk7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHQkc2NvcGUuZmlkID0gZmlkO1xuXHRcdFx0XHRcdCRzY29wZS5mbmFtZSA9IGZuYW1lO1xuXHRcdFx0XHRcdCRzY29wZS5mc2l6ZSA9IGZzaXplO1xuXHRcdFx0XHRcdCRzY29wZS5mdHlwZSA9IGZ0eXBlO1xuXHRcdFx0XHRcdCRzY29wZS5mY3JlYXRlZF9hdCA9IGZjcmVhdGVkX2F0O1xuXG5cblx0XHRcdFx0XHRGb2xkZXIuY291bnRmb2xkZXJzKCRzY29wZS5maWQpXG5cdFx0XHRcdFx0XHQudGhlbihmdW5jdGlvbiAobnViZXJfZm9sZGVyKSB7XG5cblx0XHRcdFx0XHRcdFx0JHNjb3BlLm51YmVyX2ZvbGRlciA9IG51YmVyX2ZvbGRlcjtcblxuXHRcdFx0XHRcdFx0fSwgZnVuY3Rpb24gKGVycikge1xuXHRcdFx0XHRcdFx0XHRpZiAoREVCVUcgPT09IHRydWUpXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyKTtcblx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0RmlsZXMuY291bnRmaWxlcygkc2NvcGUuZmlkKVxuXHRcdFx0XHRcdFx0LnRoZW4oZnVuY3Rpb24gKG51YmVyX2ZpbGVzKSB7XG5cblx0XHRcdFx0XHRcdFx0JHNjb3BlLm51YmVyX2ZpbGVzID0gbnViZXJfZmlsZXM7XG5cblx0XHRcdFx0XHRcdH0sIGZ1bmN0aW9uIChlcnIpIHtcblx0XHRcdFx0XHRcdFx0aWYgKERFQlVHID09PSB0cnVlKVxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycik7XG5cdFx0XHRcdFx0XHR9KTtcblxuXG5cblx0XHRcdFx0fVxuXG5cblxuXHRcdFx0XHQkbWREaWFsb2cuc2hvdyh7XG5cblx0XHRcdFx0XHRwYXJlbnQ6IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5ib2R5KSxcblx0XHRcdFx0XHRjb250cm9sbGVyOiBwcm9wZXJ0aWVzQ29udHJvbGxlcixcblx0XHRcdFx0XHR0ZW1wbGF0ZVVybDogJy92aWV3cy9wcm9wZXJ0eS50cGwuaHRtbCcsXG5cdFx0XHRcdFx0Y2xpY2tPdXRzaWRlVG9DbG9zZTogZmFsc2Vcblx0XHRcdFx0fSkuY2F0Y2goKTtcblx0XHRcdH07XG5cdFx0XHQkc2NvcGUuZG93bmxvYWRwb3AgPSBmdW5jdGlvbiAoKSB7XG5cblxuXHRcdFx0XHQkbWREaWFsb2cuc2hvdyh7XG5cblx0XHRcdFx0XHRwYXJlbnQ6IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5ib2R5KSxcblx0XHRcdFx0XHRjb250cm9sbGVyOiBEaWFsb2dDb250cm9sbGVyLFxuXHRcdFx0XHRcdHRlbXBsYXRlVXJsOiAnL3ZpZXdzL2Rvd25sb2FkLnRwbC5odG1sJyxcblx0XHRcdFx0XHRjbGlja091dHNpZGVUb0Nsb3NlOiBmYWxzZVxuXHRcdFx0XHR9KS5jYXRjaCgpO1xuXHRcdFx0fTtcblxuXHRcdFx0JHNjb3BlLkRlbGV0ZWRvY3MgPSBmdW5jdGlvbiAoZGlyX2lkLCBkaXJfbmFtZSkge1xuXG5cdFx0XHRcdGZ1bmN0aW9uIGRlbGV0ZUNvbnRyb2xsZXIoJHNjb3BlLCAkbWREaWFsb2cpIHtcblx0XHRcdFx0XHQkc2NvcGUuaGlkZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdCRtZERpYWxvZy5oaWRlKCk7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHQkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0JG1kRGlhbG9nLmNhbmNlbCgpO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0JHNjb3BlLmRpcl9pZCA9IGRpcl9pZDtcblx0XHRcdFx0XHQkc2NvcGUuZGlyX25hbWUgPSBkaXJfbmFtZTtcblx0XHRcdFx0fVxuXHRcdFx0XHQkbWREaWFsb2cuc2hvdyh7XG5cblx0XHRcdFx0XHRwYXJlbnQ6IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5ib2R5KSxcblx0XHRcdFx0XHRjb250cm9sbGVyOiBkZWxldGVDb250cm9sbGVyLFxuXHRcdFx0XHRcdHRlbXBsYXRlVXJsOiAnL3ZpZXdzL2RlbGV0ZW1zZy50cGwuaHRtbCcsXG5cdFx0XHRcdFx0Y2xpY2tPdXRzaWRlVG9DbG9zZTogZmFsc2Vcblx0XHRcdFx0fSkuY2F0Y2goKTtcblx0XHRcdH07XG5cblx0XHRcdCRzY29wZS5SZW5hbWVkb2NzID0gZnVuY3Rpb24gKGRpcl9pZCwgZGlyX25hbWUpIHtcblxuXHRcdFx0XHRmdW5jdGlvbiByZW5hbWVDb250cm9sbGVyKCRzY29wZSwgJG1kRGlhbG9nKSB7XG5cdFx0XHRcdFx0JHNjb3BlLmhpZGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHQkbWREaWFsb2cuaGlkZSgpO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0JHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdCRtZERpYWxvZy5jYW5jZWwoKTtcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdCRzY29wZS5kaXJfaWQgPSBkaXJfaWQ7XG5cdFx0XHRcdFx0JHNjb3BlLmRpcl9uYW1lID0gZGlyX25hbWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0JG1kRGlhbG9nLnNob3coe1xuXHRcdFx0XHRcdHBhcmVudDogYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmJvZHkpLFxuXHRcdFx0XHRcdGNvbnRyb2xsZXI6IHJlbmFtZUNvbnRyb2xsZXIsXG5cdFx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvdmlld3MvcmVuYW1lLnRwbC5odG1sJyxcblx0XHRcdFx0XHRjbGlja091dHNpZGVUb0Nsb3NlOiBmYWxzZVxuXHRcdFx0XHR9KS5jYXRjaCgpO1xuXHRcdFx0fTtcblxuXHRcdFx0JHNjb3BlLnJlcG9ydEJ1ZyA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHQkbWREaWFsb2cuc2hvdyh7XG5cdFx0XHRcdFx0cGFyZW50OiBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQuYm9keSksXG5cdFx0XHRcdFx0Y29udHJvbGxlcjogRGlhbG9nQ29udHJvbGxlcixcblx0XHRcdFx0XHR0ZW1wbGF0ZVVybDogJy92aWV3cy9idWcudHBsLmh0bWwnLFxuXHRcdFx0XHRcdGNsaWNrT3V0c2lkZVRvQ2xvc2U6IGZhbHNlXG5cdFx0XHRcdH0pLmNhdGNoKCk7XG5cdFx0XHR9O1xuXG5cdFx0XHQkc2NvcGUuc2hhcmUgPSBmdW5jdGlvbiAoc2hhcmVibGVfaWQsIHR5cGUpIHtcblxuXG5cdFx0XHRcdGZ1bmN0aW9uIHNoYXJlYmxlTGluaygkc2NvcGUsICRtZERpYWxvZykge1xuXG5cdFx0XHRcdFx0JHNjb3BlLmhpZGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHQkbWREaWFsb2cuaGlkZSgpO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0JHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdCRtZERpYWxvZy5jYW5jZWwoKTtcblx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0VXNlci5mb2xsb3dlckVtYWlscygpXG5cdFx0XHRcdFx0XHQudGhlbihmdW5jdGlvbiAoZW1haWxzKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBlbWFpbHNpID0gW107XG5cdFx0XHRcdFx0XHRcdGFuZ3VsYXIuZm9yRWFjaChlbWFpbHMsIGZ1bmN0aW9uIChlbWFpbCkge1xuXHRcdFx0XHRcdFx0XHRcdGVtYWlsc2kucHVzaChlbWFpbC5lbWFpbCk7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHQkc2NvcGUuZW1haWxzb24gPSBKU09OLnN0cmluZ2lmeShlbWFpbHNpKTtcblxuXHRcdFx0XHRcdFx0fSkuY2F0Y2goKTtcblxuXG5cdFx0XHRcdFx0JHNjb3BlLk5ld3NoYXJlZCA9IHt9O1xuXG5cdFx0XHRcdFx0JHNjb3BlLk5ld3NoYXJlZC5zaGFyZWRfdG8gPSBbXTtcblxuXHRcdFx0XHRcdFVzZXIuZ2V0KClcblx0XHRcdFx0XHRcdC50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG5cblx0XHRcdFx0XHRcdFx0JHNjb3BlLnVzZXJOYW1lID0gdXNlci5uYW1lO1xuXHRcdFx0XHRcdFx0fSkuY2F0Y2goKTtcblxuXG5cdFx0XHRcdFx0JHNjb3BlLnNoYXJlX3R5cGUgPSB0eXBlO1xuXG5cdFx0XHRcdFx0JHNjb3BlLmZvbGRlcl9pZCA9IHNoYXJlYmxlX2lkO1xuXG5cblx0XHRcdFx0XHRpZiAodHlwZSA9PT0gJ0ZvbGRlcicpIHtcblx0XHRcdFx0XHRcdHZhciBwYXJhbXMgPSB7XG5cdFx0XHRcdFx0XHRcdCdmb2xkZXJfaWQnOiBzaGFyZWJsZV9pZCxcblx0XHRcdFx0XHRcdFx0J3R5cGUnOiAnRm9sZGVyJyxcblx0XHRcdFx0XHRcdFx0J3VzZXJfaWQnOiAkcm9vdFNjb3BlLnVzZXIuaWRcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRFbmNyeXB0ZXIua2V5KHBhcmFtcylcblx0XHRcdFx0XHRcdFx0LnRoZW4oZnVuY3Rpb24gKHByZXBhcmVkVXJsKSB7XG5cblx0XHRcdFx0XHRcdFx0XHR2YXIgcHJlcCA9ICRyb290U2NvcGUuZW5kUG9pbnQgKyAnL2hvbWUvJyArIHByZXBhcmVkVXJsO1xuXHRcdFx0XHRcdFx0XHRcdCRodHRwLnBvc3QoJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3VybHNob3J0ZW5lci92MS91cmw/a2V5PUFJemFTeURTbjd6N1YxZjZIM3lYcmdBbGdWR3c1MmRTRW1xQUxJYycsIHtcblx0XHRcdFx0XHRcdFx0XHRcdGxvbmdVcmw6IHByZXBcblx0XHRcdFx0XHRcdFx0XHR9KS5zdWNjZXNzKGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZykge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQkc2NvcGUuc2hhcmVibGVfbGluayA9IGRhdGEuaWQ7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZG9jdW1lbnRfbGlua1wiKTtcblx0XHRcdFx0XHRcdFx0XHRcdGEudmFsdWUgPSBkYXRhLmlkO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQkc2NvcGUuc2hhcmVibGVfbGluayA9IGRhdGEuaWQ7XG5cblxuXHRcdFx0XHRcdFx0XHRcdH0pLlxuXHRcdFx0XHRcdFx0XHRcdGVycm9yKGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZykge1xuXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH0pLmNhdGNoKCk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0eXBlID09PSBcIkZpbGVcIikge1xuXG5cdFx0XHRcdFx0XHR2YXIgcGFyYW1zX2ZpbGUgPSB7XG5cdFx0XHRcdFx0XHRcdCdmaWxlX2lkJzogc2hhcmVibGVfaWQsXG5cdFx0XHRcdFx0XHRcdCd0eXBlJzogJ0ZpbGUnLFxuXHRcdFx0XHRcdFx0XHQndXNlcl9pZCc6ICRyb290U2NvcGUudXNlci5pZFxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdEVuY3J5cHRlci5rZXkocGFyYW1zX2ZpbGUpXG5cdFx0XHRcdFx0XHRcdC50aGVuKGZ1bmN0aW9uIChwcmVwYXJlZFVybCkge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHByZXBhcmVkVXJsKTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcHJlcCA9ICRyb290U2NvcGUuZW5kUG9pbnQgKyAnL3NoYXJlZC8nICsgcHJlcGFyZWRVcmw7XG5cdFx0XHRcdFx0XHRcdFx0JGh0dHAucG9zdCgnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vdXJsc2hvcnRlbmVyL3YxL3VybD9rZXk9QUl6YVN5RFNuN3o3VjFmNkgzeVhyZ0FsZ1ZHdzUyZFNFbXFBTEljJywge1xuXHRcdFx0XHRcdFx0XHRcdFx0bG9uZ1VybDogcHJlcFxuXHRcdFx0XHRcdFx0XHRcdH0pLnN1Y2Nlc3MoZnVuY3Rpb24gKGRhdGEsIHN0YXR1cywgaGVhZGVycywgY29uZmlnKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdCRzY29wZS5zaGFyZWJsZV9saW5rID0gZGF0YS5pZDtcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkb2N1bWVudF9saW5rXCIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0YS52YWx1ZSA9IGRhdGEuaWQ7XG5cblx0XHRcdFx0XHRcdFx0XHRcdCRzY29wZS5zaGFyZWJsZV9saW5rID0gZGF0YS5pZDtcblxuXG5cdFx0XHRcdFx0XHRcdFx0fSkuXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IoZnVuY3Rpb24gKGRhdGEsIHN0YXR1cywgaGVhZGVycywgY29uZmlnKSB7XG5cblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fSkuY2F0Y2goKTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0JG1kRGlhbG9nLnNob3coe1xuXHRcdFx0XHRcdHBhcmVudDogYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmJvZHkpLFxuXHRcdFx0XHRcdGNvbnRyb2xsZXI6IHNoYXJlYmxlTGluayxcblx0XHRcdFx0XHR0ZW1wbGF0ZVVybDogJy92aWV3cy9zaGFyZS50cGwuaHRtbCcsXG5cdFx0XHRcdFx0Y2xpY2tPdXRzaWRlVG9DbG9zZTogZmFsc2Vcblx0XHRcdFx0fSkuY2F0Y2goKTtcblx0XHRcdH07XG5cdFx0XHQkc2NvcGUubWFrZVB1YmxpYyA9IGZ1bmN0aW9uKGZpbGVPYmplY3Qpe1xuXHRcdFx0XHRGaWxlcy5tYWtlUHVibGljKGZpbGVPYmplY3QpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblx0XHRcdFx0fSkuY2F0Y2goKTtcblx0XHRcdFx0JC5ub3RpZnkoXCJBIEZpbGUgaXMgbm93IHZpc2libGUgaW4gcHVibGljLlwiLCBcInN1Y2Nlc3NcIik7XG5cdFx0XHR9XG5cblx0XHR9XG5cdF0pOyIsImFuZ3VsYXIubW9kdWxlKCdzeW5jJylcbi5zZXJ2aWNlKCdQb3N0JywgWyckaHR0cCcsICckcScsICckcm9vdFNjb3BlJywgZnVuY3Rpb24gUG9zdCgkaHR0cCwgJHEsICRyb290U2NvcGUpIHtcbiAgICB0aGlzLmdldFBvc3QgPSBmdW5jdGlvbiAodXNlcl9pZCkge1xuICAgICAgICB2YXIgZGlmZmVyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgICAkaHR0cC5nZXQoJHJvb3RTY29wZS5lbmRQb2ludCArICcvYXBpL3YxL21lL3Bvc3RzP3VzZXJfaWQnICsgdXNlcl9pZCwge2NhY2hlOiBmYWxzZX0pXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgICAgICAgICAgICAgIGRpZmZlcmVkLnJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBkaWZmZXJlZC5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkaWZmZXJlZC5wcm9taXNlO1xuICAgIH07XG4gICAgdGhpcy5wYXJ0aWNpcGF0ZSA9IGZ1bmN0aW9uKG9iail7XG4gICAgICB2YXIgZGlmZmVyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgJGh0dHAucHV0KCRyb290U2NvcGUuZW5kUG9pbnQgKyAnL2FwaS92MS9tZS9wb3N0cy8nLG9iailcbiAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgZGlmZmVyZWQucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9KVxuICAgICAgLmVycm9yKGZ1bmN0aW9uKGVycil7XG4gICAgICAgIGRpZmZlcmVkLnJlamVjdChlcnIpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZGlmZmVyZWQucHJvbWlzZTtcbiAgICB9O1xuICAgIHRoaXMuY3JlYXRlUG9zdCA9IGZ1bmN0aW9uIChwb3N0KSB7XG4gICAgICAgIHZhciBkaWZmZXJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgICRodHRwLnBvc3QoJHJvb3RTY29wZS5lbmRQb2ludCArICcvYXBpL3YxL21lL3Bvc3RzJywgcG9zdClcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGRpZmZlcmVkLnJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBkaWZmZXJlZC5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkaWZmZXJlZC5wcm9taXNlO1xuICAgIH07XG4gICAgdGhpcy5kZWxldGVQb3N0ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciBkaWZmZXJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgICRodHRwLmRlbGV0ZSgkcm9vdFNjb3BlLmVuZFBvaW50ICsgJy9hcGkvdjEvbWUvcG9zdHMvJyArIGlkKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgZGlmZmVyZWQucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGRpZmZlcmVkLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGRpZmZlcmVkLnByb21pc2U7XG4gICAgfTtcbiAgICByZXR1cm4gdGhpcztcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoJ3N5bmMnKVxuLmNvbnRyb2xsZXIoJ1Bvc3RpbmdDb250cm9sbGVyJywgW1xuICAnJHNjb3BlJyxcbiAgJ1Bvc3QnLFxuICAnJHRpbWVvdXQnLFxuICAnVXNlcicsXG4gICckaW50ZXJ2YWwnLFxuICAnTm90aWZpY2F0aW9uJyxcbiAgLy8gJyRpb25pY0xpc3REZWxlZ2F0ZScsXG4gICckbG9nJyxcbiAgJ3VzZXJJbnRlcmFjdGlvbk5vdGlmaWNhdGlvbicsXG4gIGZ1bmN0aW9uIChcbiAgJHNjb3BlLFxuICBQb3N0LFxuICAkdGltZW91dCxcbiAgVXNlcixcbiAgJGludGVydmFsLFxuICBOb3RpZmljYXRpb24sXG4gICRpb25pY0xpc3REZWxlZ2F0ZSxcbiAgJGxvZyxcbiAgdXNlckludGVyYWN0aW9uTm90aWZpY2F0aW9uXG4pIHtcblxuICAgICRzY29wZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkc2NvcGUucG9zdExvYWRlcigpO1xuICAgICAgICAkc2NvcGUuZ2V0VXNlcigpO1xuXG4gICAgfTtcblxuICAgICRpbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICRzY29wZS5wb3N0TG9hZGVyKCk7XG4gICAgfSwgODAwMCk7XG4gICAgJHNjb3BlLmdldFVzZXIgPWZ1bmN0aW9uKCl7XG5cbiAgICAgIFVzZXIuX2lkKClcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcblxuICAgICAgICAkc2NvcGUudXNlciA9IHJlc3BvbnNlO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICB9LGZ1bmN0aW9uKGVycil7XG4gICAgICAgIC8vcXVpdCBzbGludGx5XG4gICAgICB9KTtcbiAgICB9O1xuICAgICRzY29wZS5sb2FkTW9yZSA9IGZ1bmN0aW9uKCl7XG5cbiAgICB9O1xuICAgICRzY29wZS5wYXJ0aWNpcGF0ZUludG9Qb3N0ID0gZnVuY3Rpb24ocG9zdCx1c2VyKXtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXIpO1xuICAgICAgdmFyIG9iaiA9e1xuICAgICAgICAncG9zdF9pZCc6cG9zdCxcbiAgICAgICAgJ3VzZXJfaWQnOnVzZXJcbiAgICAgIH07XG4gICAgICBQb3N0LnBhcnRpY2lwYXRlKG9iailcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgJHNjb3BlLnBvc3RMb2FkZXIoKTtcbiAgICAgIH0sZnVuY3Rpb24oZXJyKXtcbiAgICAgICAgLy9xdWl0IHNsZW50bHlcblxuICAgICAgfSk7XG4gICAgfTtcbiAgICAkc2NvcGUucG9zdExvYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHNjb3BlLmRhdGFMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgUG9zdC5nZXRQb3N0KClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICh0cmVlKSB7XG5cbiAgICAgICAgICAgICAgICAkc2NvcGUucG9zdHMgPXRyZWU7XG4gICAgICAgICAgICAgICAgLy9uYXZpZ2F0ZSB0cm91Z2ggdHJlZSByZXNwb25zZSB3aGljaCBpcyByZXF1aXJlIG11Y2ggYXR0ZW50aW9uXG4gICAgICAgICAgICAgICAgJHNjb3BlLmZyaWVuZHM9W107XG4gICAgICAgICAgICAgICAgJHNjb3BlLnJlcGxpZXM9W107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmVlW2ldLmhhc093blByb3BlcnR5LmZyaWVuZHMgJiYgdHJlZVtpXS5yZXBsaWVzICAmJiB0cmVlW2ldLmZyaWVuZHMgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZyaWVuZHMucHVzaCh0cmVlW2ldLmZyaWVuZHMpO1xuICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5yZXBsaWVzLnB1c2godHJlZVtpXS5yZXBsaWVzKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0cmVlW2ldLmhhc093blByb3BlcnR5KCdmcmllbmRzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mcmllbmRzID0gZnJpZW5kcy5jb25jYXQodHJhdmVyc2UodHJlZVtpXS5mcmllbmRzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUucmVwbGllcyA9IHJlcGxpZXMuY29uY2F0KHRyYXZlcnNlKHRyZWVbaV0ucmVwbGllcykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgJHNjb3BlLmltYWdlRGVzYyA9IGZ1bmN0aW9uKGluZGV4KXtcbiAgICAgIC8vc2hvdyBpbWFnZXMgd2l0aCBkaWZmZXJlbnQgcGl4ZWxcbiAgICAgIHN3aXRjaCAoaW5kZXgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHJldHVybiAnNjBweCc7XG5cbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gXCI2MHB4XCI7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gXCI2MHB4XCI7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICByZXR1cm4gXCI2MHB4XCI7XG5cbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICByZXR1cm4gXCI2MHB4XCI7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiNjBweFwiO1xuXG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgfTtcbiAgICAkc2NvcGUuc2hhcmUgPSBmdW5jdGlvbihpZCl7XG4gICAgICAgICRpb25pY0xpc3REZWxlZ2F0ZS5jbG9zZU9wdGlvbkJ1dHRvbnMoKTtcbiAgICAgICAgJGxvZy5pbmZvKGlkKTtcbiAgICB9O1xuICAgICRzY29wZS5jcmVhdGVQb3N0ID0gZnVuY3Rpb24gKHBvc3RpbmcpIHtcbiAgICAgIC8vaWYgaW1hZ2UgaXMgdXBsb2FkZWQgdXBsb2FkZWRcbiAgICAgICAgdmFyIF90aGlzID0geyBtZXNzYWdlOiBwb3N0aW5nIH07XG4gICAgICAgIFBvc3QuY3JlYXRlUG9zdChfdGhpcylcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChwb3N0Q3JlYXRlZCkge1xuICAgICAgICAgICAgICAgICAgJHNjb3BlLm1lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgICAgICAgICRzY29wZS5wb3N0cy5wdXNoKHBvc3RDcmVhdGVkKTtcbiAgICAgICAgICAgICAgICAgIHVzZXJJbnRlcmFjdGlvbk5vdGlmaWNhdGlvbi5zdWNjZXNzKFwiTmV3IFBvc3QgZmVlZCBjcmVhdGVkIVwiKTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmluaXQoKTtcbn1dKTtcbmFuZ3VsYXIubW9kdWxlKCdzeW5jJylcbi5kaXJlY3RpdmUoJ2ZlZWRzVXBsb2FkZXInLFtmdW5jdGlvbigpe1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQUUnLFxuICAgIHJlcGxhY2U6IGZhbHNlLFxuICAgIHRlbXBsYXRlVXJsOiAnQXBwL2pzL3NjcmlwdHMvdmlld3MvZmVlZEF0dGFjaG1lbnQuaHRtbCcsXG4gICAgc2NvcGU6IHtcbiAgICAgIGFjdGlvbjogJ0AnXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBbJyRzY29wZScsIGZ1bmN0aW9uICgkc2NvcGUpIHtcbiAgICAgICRzY29wZS5wcm9ncmVzcyA9IDA7XG4gICAgICAkc2NvcGUuYXZhdGFyID0gJyc7XG4gICAgICAkc2NvcGUuc2VuZEZpbGUgPSBmdW5jdGlvbihlbCkge1xuICAgICAgICB2YXIgJGZvcm0gPSAkKGVsKS5wYXJlbnRzKCdmb3JtJyk7XG4gICAgICAgIGlmICgkKGVsKS52YWwoKSA9PT0gJycpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgJGZvcm0uYXR0cignYWN0aW9uJywgJHNjb3BlLmFjdGlvbik7XG4gICAgICAgICRzY29wZS4kYXBwbHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJHNjb3BlLnByb2dyZXNzID0gMDtcbiAgICAgICAgfSk7XG4gICAgICAgICRmb3JtLmFqYXhTdWJtaXQoe1xuICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgXHRiZWZvcmVTZW5kOiBmdW5jdGlvbiAoeGhyKSB7XG4gICAgICAgIFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcignYXV0aG9yaXphdGlvbicsICdCZWFyZXIgT3FGaXJRUzQ0UlFUalJ1V25pWGpkSFpKUVhkQ3VFeDQ5cnE4Slk1QScpO1xuICAgICAgICBcdH0sXG4gICAgICAgICAgdXBsb2FkUHJvZ3Jlc3M6IGZ1bmN0aW9uKGV2dCwgcG9zLCB0b3QsIHBlcmNDb21wbGV0ZSkge1xuICAgICAgICAgICAgJHNjb3BlLiRhcHBseShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgLy8gdXBsb2FkIHRoZSBwcm9ncmVzcyBiYXIgZHVyaW5nIHRoZSB1cGxvYWRcbiAgICAgICAgICAgICAgLy8gJHNjb3BlLnByb2dyZXNzID0gcGVyY2VudENvbXBsZXRlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oZXZ0LCBzdGF0dXNUZXh0LCByZXNwb25zZSwgZm9ybSkge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBhY3Rpb24gYXR0cmlidXRlIGZyb20gdGhlIGZvcm1cbiAgICAgICAgICAgICRmb3JtLnJlbW92ZUF0dHIoJ2FjdGlvbicpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UsIHN0YXR1cywgeGhyLCBmb3JtKSB7XG4gICAgICAgICAgICB2YXIgYXIgPSAkKGVsKS52YWwoKS5zcGxpdCgnXFxcXCcpLFxuICAgICAgICAgICAgICBmaWxlbmFtZSA9ICBhclthci5sZW5ndGgtMV07XG4gICAgICAgICAgICAvLyByZW1vdmUgdGhlIGFjdGlvbiBhdHRyaWJ1dGUgZnJvbSB0aGUgZm9ybVxuICAgICAgICAgICAgJGZvcm0ucmVtb3ZlQXR0cignYWN0aW9uJyk7XG4gICAgICAgICAgICAkc2NvcGUuJGFwcGx5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAkc2NvcGUuYXZhdGFyID0gZmlsZW5hbWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfV0sXG4gICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW0sIGF0dHJzLCBjdHJsKSB7XG5cbiAgICAgIGVsZW0uZmluZCgnLmZha2UtdXBsb2FkZXInKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgZWxlbS5maW5kKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpLmNsaWNrKCk7XG4gICAgICB9KTtcblxuICAgIH1cbiAgfTtcbn1dKTtcbiIsImFuZ3VsYXIubW9kdWxlKFwic3luY1wiKVxuICAgIC5jb250cm9sbGVyKCdDaGVja2luZ2VtcHR5Q29udHJvbGxlcicsIFsnJHNjb3BlJywgJ0NoZWNraW5nZW1wdHknLCAnVXNlcicsICdERUJVRycsICckc3RhdGVQYXJhbXMnLCAnJHJvb3RTY29wZScsICckdWliTW9kYWwnLCAnJG1kRGlhbG9nJywgJyRtZE1lZGlhJywgZnVuY3Rpb24gKCRzY29wZSwgQ2hlY2tpbmdlbXB0eSwgVXNlciwgREVCVUcsICRzdGF0ZVBhcmFtcywgJHJvb3RTY29wZSwgJHVpYk1vZGFsLCAkbWREaWFsb2csICRtZE1lZGlhKSB7XG5cblxuICAgICAgICB2YXIgZ2V0dXNlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIFVzZXIuZ2V0KClcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnVzZXJfaWQgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgpO1xuICAgICAgICB9O1xuXG5cblxuICAgICAgICB2YXIgY2hlY2thbGxGb2xkZXJGaWxlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBDaGVja2luZ2VtcHR5LmNoZWNrYWxsRm9sZGVyRmlsZSgkc3RhdGVQYXJhbXMuZm9sZGVySWQpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGZvbGRlcnMpIHtcblxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuY2hlY2thbGxzID0gZm9sZGVycztcbiAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChERUJVRyA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgICRzY29wZS4kb24oJ2ZvbGRlcjpsaXN0JywgZnVuY3Rpb24gKGV2ZW50LCBhcmdzKSB7XG4gICAgICAgICAgICBjaGVja2FsbEZvbGRlckZpbGUoKTtcblxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBnZXR1c2VyKCk7XG4gICAgICAgICAgICBjaGVja2FsbEZvbGRlckZpbGUoKTtcblxuICAgICAgICB9O1xuICAgICAgICBpbml0KCk7XG5cblxuXG5cbiAgICB9XSkuZmFjdG9yeShcImNhY2hlRmFjdG9yeVwiLCBmdW5jdGlvbiAoJGNhY2hlRmFjdG9yeSkge1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuICRjYWNoZUZhY3RvcnkoXCJ1c2VyRGF0YVwiKTtcbiAgICB9KTsiLCJhbmd1bGFyLm1vZHVsZSgnc3luYycpLmNvbnRyb2xsZXIoJ0ZpbGVzQ29udHJvbGxlcicsIFsnJHNjb3BlJywgJ0ZpbGVzJywgJyRsb2cnLCAnJHdpbmRvdycsICdVc2VyJywgJyR0aW1lb3V0JywgJyRzdGF0ZVBhcmFtcycsICckcm9vdFNjb3BlJywgJyRleGNlcHRpb25IYW5kbGVyJywgJyRjYWNoZUZhY3RvcnknLCAnREVCVUcnLCAnJHVpYk1vZGFsJywgJyRtZERpYWxvZycsICckbWRNZWRpYScsXG4gICAgZnVuY3Rpb24gKCRzY29wZSwgRmlsZXMsICRsb2csICR3aW5kb3csIFVzZXIsICR0aW1lb3V0LCAkc3RhdGVQYXJhbXMsICRyb290U2NvcGUsICRleGNlcHRpb25IYW5kbGVyLCAkY2FjaGVGYWN0b3J5LCBERUJVRywgJHVpYk1vZGFsLCAkbWREaWFsb2csICRtZE1lZGlhKSB7XG4gICAgICAgICRzY29wZS5maWxlcyA9IFtdO1xuICAgIFxuICAgICAgICB2YXIgX2xvYWRGaWxlcyA9IGZ1bmN0aW9uIChmb2xkZXJJZCkge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICRzY29wZS5kYXRhTG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgRmlsZXMuZ2V0Qm94RmlsZXMoZm9sZGVySWQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZpbGVzID0gcmVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5maW5hbGx5KGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRhdGFMb2FkaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfbG9hZHJlY2VpdmVkRmlsZXMgPSBmdW5jdGlvbiAoZm9sZGVySWQpIHtcblxuICAgICAgICAgICAgICAgICRzY29wZS5kYXRhTG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgRmlsZXMucmVjZWl2ZVNoYXJlZEZpbGVzKGZvbGRlcklkKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc2hhcmVkZmlsZXMgPSByZXM7XG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5maW5hbGx5KGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRhdGFMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF9zZW5kU2hhcmVkYm94RmlsZXMgPSBmdW5jdGlvbiAoZm9sZGVySWQpIHtcblxuICAgICAgICAgICAgJHNjb3BlLmRhdGFMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIEZpbGVzLnNlbmRTaGFyZWRib3hGaWxlcyhmb2xkZXJJZClcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5zZW5kZmlsZXMgPSByZXM7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5maW5hbGx5KGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YUxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfZ2V0ZmlsZXNJbmJpbnMgPSBmdW5jdGlvbiAoZm9sZGVySWQpIHtcblxuICAgICAgICAgICAgJHNjb3BlLmRhdGFMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIEZpbGVzLmdldGZpbGVzSW5iaW5zKGZvbGRlcklkKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmJpbnNfZmlsZXMgPSByZXM7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChERUJVRyA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgJHNjb3BlLmZpbGVyZXN0b3JlID0gZnVuY3Rpb24gKGZpbGVzX2lkKSB7XG5cbiAgICAgICAgICAgIEZpbGVzLmZpbGVyZXN0b3JlKGZpbGVzX2lkKVxuXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuRGVsZXRlZm9sZGVyID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAkLm5vdGlmeShcIk5vdCBSZXN0b3JlZFwiLCBcImVycm9yXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgJC5ub3RpZnkoXCJGaWxlIFJlc3RvcmVkLlwiLCBcInN1Y2Nlc3NcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgX2dldGZpbGVzSW5iaW5zKCRzdGF0ZVBhcmFtcy5maWxlc19pZCk7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoREVCVUcgPT09IHRydWUpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgJHNjb3BlLmRlbGV0ZW9uYmluc19maWxlcyA9IGZ1bmN0aW9uIChmaWxlc19pZCkge1xuXG4gICAgICAgICAgICBGaWxlcy5kZWxldGVvbmJpbnNfZmlsZXMoZmlsZXNfaWQpXG5cbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5EZWxldGVmb2xkZXIgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAkLm5vdGlmeShcIkEgIERlbGV0ZWRcIiwgXCJlcnJvclwiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgICQubm90aWZ5KFwiRmlsZSBEZWxldGVkLlwiLCBcImVycm9yXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIF9nZXRmaWxlc0luYmlucygkc3RhdGVQYXJhbXMuZmlsZXNfaWQpO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuXG4gICAgICAgICAgICAgICAgaWYgKERFQlVHID09PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgJHJvb3RTY29wZS4kb24oJ2FwcDpvbjpicm93c2VyOmJhY2snLCBmdW5jdGlvbiAoZSwgaWQpIHtcblxuICAgICAgICB9KTtcbiAgICAgICAgJHJvb3RTY29wZS4kb24oJ2ZvbGRlcjppZCcsIGZ1bmN0aW9uIChyLCBmb2xkZXJJZCkge1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIChmb2xkZXJJZCkgPT09ICdudW1iZXInKSB7XG5cbiAgICAgICAgICAgICAgICBfbG9hZEZpbGVzKGZvbGRlcklkKTtcbiAgICAgICAgICAgICAgICBfbG9hZHJlY2VpdmVkRmlsZXMoZm9sZGVySWQpO1xuICAgICAgICAgICAgICAgIF9zZW5kU2hhcmVkYm94RmlsZXMoJHN0YXRlUGFyYW1zLmZvbGRlcklkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICAkcm9vdFNjb3BlLiRvbignZmlsZTpsaXN0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX2xvYWRGaWxlcygkc3RhdGVQYXJhbXMuZm9sZGVySWQpO1xuXG4gICAgICAgICAgICBfbG9hZHJlY2VpdmVkRmlsZXMoJHN0YXRlUGFyYW1zLmZvbGRlcklkKTtcblxuICAgICAgICAgICAgX2dldGZpbGVzSW5iaW5zKCRzdGF0ZVBhcmFtcy5mb2xkZXJJZCk7XG5cbiAgICAgICAgICAgIF9zZW5kU2hhcmVkYm94RmlsZXMoJHN0YXRlUGFyYW1zLmZvbGRlcklkKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICAkc2NvcGUuZmlsZVR5cGUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICAgICAgdmFyIGNhc2VzID0ge1xuICAgICAgICAgICAgICAgICdwZGYnOiAnaW1nL3BkZi5wbmcnLFxuICAgICAgICAgICAgICAgICdwbmcnOiAnaW1hZ2VzL2ljb241LnBuZycsXG4gICAgICAgICAgICAgICAgJ2pwZyc6ICdpbWFnZXMvaWNvbjUucG5nJyxcbiAgICAgICAgICAgICAgICAnZG9jeCc6ICdpbWcvd29yZC5wbmcnLFxuICAgICAgICAgICAgICAgICdKcGcnOiAnaW1nL2ljb241LnBuZydcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoY2FzZXNbdHlwZV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FzZXNbdHlwZV07XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhc2VzLmRvY3g7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgICRzY29wZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX2xvYWRGaWxlcygkc3RhdGVQYXJhbXMuZm9sZGVySWQpO1xuICAgICAgICAgICAgX2xvYWRyZWNlaXZlZEZpbGVzKCRzdGF0ZVBhcmFtcy5mb2xkZXJJZCk7XG4gICAgICAgICAgICBfZ2V0ZmlsZXNJbmJpbnMoJHN0YXRlUGFyYW1zLmZvbGRlcklkKTtcbiAgICAgICAgICAgIF9zZW5kU2hhcmVkYm94RmlsZXMoJHN0YXRlUGFyYW1zLmZvbGRlcklkKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIHByZXBhcmUodXJsKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImZvbGRlcklkXCIpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmb2xkZXJJZFwiLDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc3VjY2Vzcyh1cmwpIHtcbiAgICAgICAgICAgIC8vY2xlYXIgYW55IGxvY2FsU3RvcmFnZSBJZCB0aGF0IGlzIGJlaW5nIHNlbnQgYmVmb3JlXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImZvbGRlcklkXCIpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmb2xkZXJJZFwiLDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgLy8gJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdkaWFsb2dzLndhaXQuY29tcGxldGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGVycm9yKHJlc3BvbnNlLCB1cmwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgICRzY29wZS5pbml0KCk7XG5cbiAgICAgICAgJHNjb3BlLnBhc3RlRmlsZUluRm9sZGVyID0gZnVuY3Rpb24gKGlkKSB7XG5cbiAgICAgICAgICAgIEZpbGVzLmZpbGVDb3B5KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaWxlX2hhbmRsZScpLCBpZClcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRlbWl0KFwiZmlsZTpsaXN0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJC5ub3RpZnkoXCJBIEZpbGUgY29waWVkIGludG8gRm9sZGVyXCIsIFwic3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDMwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJC5ub3RpZnkoJ0EgZmlsZSBFeGlzdCBpbiBGb2xkZXInLCBcImVycm9yXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgpO1xuXG4gICAgICAgIH07XG4gICAgICAgICQoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAkc2NvcGUuc2hhcmVfZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgJHNjb3BlLnBhc3RlX2VuYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBEaWFsb2dDb250cm9sbGVyKCRzY29wZSwgJG1kRGlhbG9nKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICRtZERpYWxvZy5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkbWREaWFsb2cuY2FuY2VsKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAkc2NvcGUuZmlsZUlkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmaWxlX2hhbmRsZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICRzY29wZS5vblJpZ2h0Q2xpY2sgPSBmdW5jdGlvbiAoaWQsdXNlcklkLGZvbGRlcklkKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmaWxlX2hhbmRsZVwiKSA9PT0gbnVsbCAmJiAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikgPT09IG51bGwgICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZm9sZGVySWRcIikgPT09IG51bGwgfHwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmb2xkZXJJZFwiKSAhPT0wICkge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmlsZV9oYW5kbGUnLCBpZCk7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VySWQnLCB1c2VySWQpO1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZm9sZGVySWQnLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZvbGRlcklkXCIpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZmlsZV9oYW5kbGUnKTtcblxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmlsZV9oYW5kbGUnLCBpZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXJJZCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VySWQnLCB1c2VySWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdmb2xkZXJJZCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmb2xkZXJJZCcsIGZvbGRlcklkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgJC5jb250ZXh0TWVudSh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcuY29udGV4dC1tZW51LWZpbGUnLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoa2V5LCBvcHRpb25zKSB7XG5cblxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBcImNvcHlcIilcblxuICAgICAgICAgICAgICAgICAgICAgICAgJG1kRGlhbG9nLnNob3coe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5ib2R5KSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogRGlhbG9nQ29udHJvbGxlcixcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvdmlld3MvY29weS1maWxlLnRwbC5odG1sJyxcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tPdXRzaWRlVG9DbG9zZTogZmFsc2VcblxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBcImRvd25sb2FkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICQuZmlsZURvd25sb2FkKCRyb290U2NvcGUuZW5kUG9pbnQgKyAnL2Rvd25sb2Fkcy9maWxlLycgK2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmlsZV9oYW5kbGVcIikgKyAnLycgK2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZm9sZGVySWRcIikrJy8nK251bGwrJy8nICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIiksIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXBhcmVDYWxsYmFjazogcHJlcGFyZSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NDYWxsYmFjazogc3VjY2VzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsQ2FsbGJhY2s6IGVycm9yXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKGtleSA9PT0gXCJwdWJsaWNcIil7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAkbWREaWFsb2cuc2hvdyh7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5ib2R5KSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IERpYWxvZ0NvbnRyb2xsZXIsXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy92aWV3cy9wdWJsaWMtZmlsZS50cGwuaHRtbCcsXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja091dHNpZGVUb0Nsb3NlOiBmYWxzZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKGtleSA9PT0gXCJkb3dubG9hZFppcFwiKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICQuZmlsZURvd25sb2FkKCRyb290U2NvcGUuZW5kUG9pbnQgKyAnL2Rvd25sb2Fkcy9maWxlLycgK2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmlsZV9oYW5kbGVcIikgKyAnLycgK2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZm9sZGVySWRcIikrJy8nK251bGwrJy8nICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikrJy96aXAnLCB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVwYXJlQ2FsbGJhY2s6IHByZXBhcmUsXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzQ2FsbGJhY2s6IHN1Y2Nlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbENhbGxiYWNrOiBlcnJvclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gXCJkZWxldGVcIilcblxuICAgICAgICAgICAgICAgICAgICAgICAgRmlsZXMuZGVsZXRlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaWxlX2hhbmRsZScpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRlbWl0KCdmaWxlOmxpc3QnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQubm90aWZ5KFwiQSBGaWxlIHNhdmVkIGluIFJlY3ljbGUgQmluLlwiLCBcInN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgpO1xuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpdGVtczoge1xuICAgICAgICAgICAgICAgICAgICBcImVkaXRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJFZGl0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcImVkaXRcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcImN1dFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIk1vdmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwiY3V0XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJjb3B5XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQ29weVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJjb3B5XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJkb3dubG9hZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImRvd25sb2FkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcImZhLWNsb3VkLWRvd25sb2FkXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJkb3dubG9hZFppcFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImRvd25sb2FkWmlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcImZhLWNsb3VkLWRvd25sb2FkXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtYWtlIGZpbGUgcHVibGljXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcInBhc3RlXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJkZWxldGVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJEZWxldGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwiZGVsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJzZXAxXCI6IFwiLS0tLS0tLS0tXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicXVpdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlF1aXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2NvbnRleHQtbWVudS1pY29uIGNvbnRleHQtbWVudS1pY29uLXF1aXQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJy5jb250ZXh0LW1lbnUtZmlsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrZWQnLCB0aGlzKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cbl0pOyIsImFuZ3VsYXIubW9kdWxlKFwic3luY1wiKVxuICAgIC5jb250cm9sbGVyKCdGb2xkZXJDb250cm9sbGVyJywgWyckc2NvcGUnLCAnRm9sZGVyJywgJ1VzZXInLCAnREVCVUcnLCAnJHN0YXRlUGFyYW1zJywgJyRyb290U2NvcGUnLCAnRmlsZXMnLCAnJHVpYk1vZGFsJywgJyRtZERpYWxvZycsICckbWRNZWRpYScsIGZ1bmN0aW9uICgkc2NvcGUsIEZvbGRlciwgVXNlciwgREVCVUcsICRzdGF0ZVBhcmFtcywgJHJvb3RTY29wZSwgRmlsZXMsICR1aWJNb2RhbCwgJG1kRGlhbG9nLCAkbWRNZWRpYSkge1xuXG4gICAgICAgICRzY29wZS5mb2xkZXJzID0gW107XG4gICAgICAgICRzY29wZS5zX2ZvbGRlciA9IFtdO1xuICAgICAgICAkc2NvcGUuc2hhcmVfZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICRzY29wZS5wYXN0ZV9lbmFibGVkID0gZmFsc2U7XG5cbiAgICAgICAgJHNjb3BlLnR5cGUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICAgICAgdmFyIGNhc2VzID0ge1xuICAgICAgICAgICAgICAgICdmb2xkZXInOiAnaW1nL3Nib3gtZm9sZGVyLnBuZycsXG4gICAgICAgICAgICAgICAgJ3ppcCc6ICdpbWcvc2JveC1mb2xkZXIucG5nJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChjYXNlc1t0eXBlXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYXNlc1t0eXBlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGdldHVzZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBVc2VyLmdldCgpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS51c2VyX2lkID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKTtcbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUuc3RydWN0dXJlID0gJyc7XG4gICAgICAgIHZhciBnZXRGb2xkZXJzID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBGb2xkZXIuZ2V0Rm9sZGVycygkc3RhdGVQYXJhbXMuZm9sZGVySWQpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGZvbGRlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRtcCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGhlYWQgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICBhbmd1bGFyLmZvckVhY2goZm9sZGVycywgZnVuY3Rpb24gKHNpbmdsZSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RyID0gc2luZ2xlLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0bXAucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21OYW1lJzogc3RyLnJlcGxhY2UoJy0nLCAnICAnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6IHNpbmdsZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IHNpbmdsZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc2l6ZSc6IHNpbmdsZS5zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0eXBlJzogc2luZ2xlLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NyZWF0ZWRfYXQnOiBzaW5nbGUuY3JlYXRlZF9hdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY29weV9jb3VudCc6IHNpbmdsZS5jb3B5X2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZWFkLnB1c2goW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbU5hbWUnOiBzdHIucmVwbGFjZSgnLScsICcgICcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzogc2luZ2xlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogc2luZ2xlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzaXplJzogc2luZ2xlLnNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiBzaW5nbGUudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY3JlYXRlZF9hdCc6IHNpbmdsZS5jcmVhdGVkX2F0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjb3B5X2NvdW50Jzogc2luZ2xlLmNvcHlfY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dKTtcblxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZvbGRlcnMgPSB0bXA7XG5cbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnRoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhlYWQubGVuZ3RoID09PSAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS50aGVhZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChERUJVRyA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBnZXRmb2xkZXJJbmJpbnMgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIEZvbGRlci5nZXRmb2xkZXJJbmJpbnMoJHN0YXRlUGFyYW1zLmZvbGRlcklkKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChmb2xkZXJzKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmJpbnNfZm9sZGVycyA9IGZvbGRlcnM7XG5cbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChERUJVRyA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHNlbmRTaGFyZWRGb2xkZXIgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIEZvbGRlci5zZW5kU2hhcmVkRm9sZGVyKCRzdGF0ZVBhcmFtcy5mb2xkZXJJZClcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoc2RfZm9sZGVyKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnNkX2ZvbGRlciA9IHNkX2ZvbGRlcjtcblxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKERFQlVHID09PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgcmVjZWl2ZVNoYXJlZEZvbGRlciA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgRm9sZGVyLnJlY2VpdmVTaGFyZWRGb2xkZXIoJHN0YXRlUGFyYW1zLmZvbGRlcklkKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyY19mb2xkZXIpIHtcblxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUucmNfZm9sZGVyID0gcmNfZm9sZGVyO1xuXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoREVCVUcgPT09IHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgICRzY29wZS5mb2xkZXJyZXN0b3JlID0gZnVuY3Rpb24gKGZpbGVzX2lkKSB7XG5cbiAgICAgICAgICAgIEZvbGRlci5mb2xkZXJyZXN0b3JlKGZpbGVzX2lkKVxuXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5EZWxldGVmb2xkZXIgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkLm5vdGlmeShcIkEgIEZvbGRlciBSZXN0b3JlZFwiLCBcImVycm9yXCIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJC5ub3RpZnkoXCJGb2xkZXIgUmVzdG9yZWQuXCIsIFwic3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldGZvbGRlckluYmlucygkc3RhdGVQYXJhbXMuZmlsZXNfaWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChERUJVRyA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgICRzY29wZS5kZWxldGVvbmJpbnNfZm9sZGVycyA9IGZ1bmN0aW9uIChmaWxlc19pZCkge1xuXG4gICAgICAgICAgICBGb2xkZXIuZGVsZXRlb25iaW5zX2ZvbGRlcnMoZmlsZXNfaWQpXG5cbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLkRlbGV0ZWZvbGRlciA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQubm90aWZ5KFwiTm90IGRlbGV0ZWRcIiwgXCJlcnJvclwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJC5ub3RpZnkoXCJGb2xkZXIgRGVsZXRlZC5cIiwgXCJlcnJvclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldGZvbGRlckluYmlucygkc3RhdGVQYXJhbXMuZmlsZXNfaWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChERUJVRyA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgICRzY29wZS4kb24oJ2ZvbGRlcjpsaXN0JywgZnVuY3Rpb24gKGV2ZW50LCBhcmdzKSB7XG4gICAgICAgICAgICBnZXRGb2xkZXJzKCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHNjb3BlLiRvbignc2hhcmVkc2VuZDpsaXN0JywgZnVuY3Rpb24gKGV2ZW50LCBhcmdzKSB7XG5cbiAgICAgICAgICAgIHNlbmRTaGFyZWRGb2xkZXIoKTtcbiAgICAgICAgfSk7XG4gICAgICAgICRzY29wZS4kb24oJ3NoYXJlZHJlY2VpdmVkOmxpc3QnLCBmdW5jdGlvbiAoZXZlbnQsIGFyZ3MpIHtcbiAgICAgICAgICAgIHJlY2VpdmVTaGFyZWRGb2xkZXIoKTtcbiAgICAgICAgfSk7XG4gICAgICAgICRzY29wZS4kb24oJ2JpbnNmb2xkZXI6bGlzdCcsIGZ1bmN0aW9uIChldmVudCwgYXJncykge1xuICAgICAgICAgICAgZ2V0Zm9sZGVySW5iaW5zKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRyb290U2NvcGUuJG9uKCdmb2xkZXI6c3RydWN0dXJlJywgJ3NoYXJlZHNlbmQ6c3RydWN0dXJlJywgJ3NoYXJlZHJlY2VpdmVkOnN0cnVjdHVyZScsICdiaW5zZm9sZGVyOnN0cnVjdHVyZScsIGZ1bmN0aW9uIChyLCBzdHJ1Y3R1cmUpIHtcblxuICAgICAgICAgICAgJHNjb3BlLnN0cnVjdHVyZSA9IHN0cnVjdHVyZTtcblxuICAgICAgICB9KTtcblxuICAgICAgICAkc2NvcGUuc2hvd0ZpbGVzSW4gPSBmdW5jdGlvbiAoZm9sZGVyX2lkKSB7XG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmb2xkZXJJZFwiKSA9PT0gbnVsbCkge1xuXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZvbGRlcklkJywgZm9sZGVyX2lkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZm9sZGVySWQnKTtcblxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmb2xkZXJJZCcsIGZvbGRlcl9pZCk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHJvb3RTY29wZS4kZW1pdCgnZm9sZGVyOmlkJywgZm9sZGVyX2lkKTtcbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUuc2hvd3NlbmRzaGFyZWQgPSBmdW5jdGlvbiAoZm9sZGVyX2lkKSB7XG4gICAgICAgICAgICAkcm9vdFNjb3BlLiRlbWl0KCdzaGFyZWRzZW5kOmlkJywgZm9sZGVyX2lkKTtcbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUuc2hvd3JlY2VpdmVkc2hhcmVkID0gZnVuY3Rpb24gKGZvbGRlcl9pZCkge1xuICAgICAgICAgICAgJHJvb3RTY29wZS4kZW1pdCgnc2hhcmVkcmVjZWl2ZWQ6aWQnLCBmb2xkZXJfaWQpO1xuICAgICAgICB9O1xuXG4gICAgICAgICRzY29wZS5kZWxldGVfRm9sZGVyID0gZnVuY3Rpb24gKGZvbGRlcl9pZCkge1xuXG4gICAgICAgICAgICBGb2xkZXIuZGVsZXRlRm9sZGVycyhmb2xkZXJfaWQpXG5cbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLkRlbGV0ZWZvbGRlcnMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkLm5vdGlmeShcIkZvbGRlciBub3QgZGVsZXRlZC5cIiwgXCJlcnJvclwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJHJvb3RTY29wZS4kZW1pdCgnZm9sZGVyOmxpc3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQubm90aWZ5KFwiRm9sZGVyIHNhdmVkIGluIHJlY3ljbGUgYmluLlwiLCBcInN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRGb2xkZXJzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKERFQlVHID09PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUuY3JlYXRlID0gZnVuY3Rpb24gKGZvbGRlcikge1xuXG4gICAgICAgICAgICB2YXIgY3JlYXRpbmdGb2xkZXIgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgRm9sZGVyLmNyZWF0ZUZvbGRlcihwYXJhbXMpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZm9sZGVyQ3JlYXRlZCA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQubm90aWZ5KFwiQSAgRm9sZGVyIEV4aXN0XCIsIFwiZXJyb3JcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLm5vdGlmeShcIkEgRm9sZGVyIENyZWF0ZWRcIiwgXCJzdWNjZXNzXCIpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChERUJVRyA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIFwicGFyZW50X2ZvbGRlclwiOiAkc3RhdGVQYXJhbXMuZm9sZGVySWQsXG4gICAgICAgICAgICAgICAgXCJuZXN0ZWRfbmFtZVwiOiBmb2xkZXIsXG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNyZWF0aW5nRm9sZGVyKHBhcmFtcyk7XG4gICAgICAgIH07XG5cblxuICAgICAgICAkc2NvcGUucmVuYW1lZm9sZGVyID0gZnVuY3Rpb24gKGZvbGRlcikge1xuXG4gICAgICAgICAgICBGb2xkZXIucmVuYW1lZm9sZGVyKGZvbGRlcilcblxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZm9sZGVyY2hhbmdlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJC5ub3RpZnkoXCJBICBOb3QgcmVuYW1lZFwiLCBcImVycm9yXCIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkLm5vdGlmeShcIkEgRm9sZGVyIHJlbmFtZWRcIiwgXCJzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Rm9sZGVycygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChERUJVRyA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBnZXR1c2VyKCk7XG4gICAgICAgICAgICBnZXRGb2xkZXJzKCk7XG4gICAgICAgICAgICByZWNlaXZlU2hhcmVkRm9sZGVyKCk7XG4gICAgICAgICAgICBzZW5kU2hhcmVkRm9sZGVyKCk7XG4gICAgICAgICAgICBnZXRmb2xkZXJJbmJpbnMoKTtcbiAgICAgICAgfTtcbiAgICAgICAgaW5pdCgpO1xuXG4gICAgICAgICQoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAkc2NvcGUuc2hhcmVfZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgJHNjb3BlLnBhc3RlX2VuYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBEaWFsb2dDb250cm9sbGVyKCRzY29wZSwgJG1kRGlhbG9nKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICRtZERpYWxvZy5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkbWREaWFsb2cuY2FuY2VsKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICRzY29wZS5vblJpZ2h0Q2xpY2sgPSBmdW5jdGlvbiAoZm9sZGVySWQsdXNlcklkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZm9sZGVySWRcIikgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZvbGRlcklkJywgZm9sZGVySWQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdmb2xkZXJJZCcpO1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZm9sZGVySWQnLCBmb2xkZXJJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJC5jb250ZXh0TWVudSh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcuY29udGV4dC1tZW51LWZvbGRlcicsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uIChrZXksIG9wdGlvbnMpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBcImNvcHlcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbWREaWFsb2cuc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQuYm9keSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogRGlhbG9nQ29udHJvbGxlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy92aWV3cy9jb3B5LWZpbGUudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrT3V0c2lkZVRvQ2xvc2U6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgpO1xuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBcImRlbGV0ZVwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIEZvbGRlci5kZWxldGVGb2xkZXJzKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmb2xkZXJJZCcpKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuRGVsZXRlZm9sZGVycyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5ub3RpZnkoXCJGb2xkZXIgbm90IGRlbGV0ZWQuXCIsIFwiZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRlbWl0KCdmb2xkZXI6bGlzdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLm5vdGlmeShcIkZvbGRlciBzYXZlZCBpbiByZWN5Y2xlIGJpbi5cIiwgXCJzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRGb2xkZXJzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKERFQlVHID09PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiZWRpdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkVkaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwiZWRpdFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiY3V0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQ3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcImN1dFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiY29weVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkNvcHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwiY29weVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwicGFzdGVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJQYXN0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJwYXN0ZVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiZGVsZXRlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiRGVsZXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcImRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwic2VwMVwiOiBcIi0tLS0tLS0tLVwiLFxuICAgICAgICAgICAgICAgICAgICBcInF1aXRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJRdWl0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdjb250ZXh0LW1lbnUtaWNvbiBjb250ZXh0LW1lbnUtaWNvbi1xdWl0JztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCcuY29udGV4dC1tZW51LWZvbGRlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrZWQnLCB0aGlzKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuXG5cbiAgICB9XSkuZmFjdG9yeShcImNhY2hlRmFjdG9yeVwiLCBmdW5jdGlvbiAoJGNhY2hlRmFjdG9yeSkge1xuXG4gICAgICAgIHJldHVybiAkY2FjaGVGYWN0b3J5KFwidXNlckRhdGFcIik7XG5cbiAgICB9KTsiLCJhbmd1bGFyLm1vZHVsZSgnc3luYycpXG4gICAgLmNvbnRyb2xsZXIoJ3ByZXZpZXdDb250cm9sbGVyJywgW1xuICAgICAgICAnJHNjb3BlJywgJ3BkZkRlbGVnYXRlJywgJyR0aW1lb3V0JywgJyRzdGF0ZVBhcmFtcycsICckcm9vdFNjb3BlJywgJyRleGNlcHRpb25IYW5kbGVyJywgJ0ZpbGVzJyxcbiAgICAgICAgZnVuY3Rpb24gKFxuICAgICAgICAgICAgJHNjb3BlLCBwZGZEZWxlZ2F0ZSwgJHRpbWVvdXQsICRzdGF0ZVBhcmFtcywgJHJvb3RTY29wZSwgJGV4Y2VwdGlvbkhhbmRsZXIsIEZpbGVzKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICgkc3RhdGVQYXJhbXMucHJldmlldyAmJiAkc3RhdGVQYXJhbXMuZXh0ZW5zaW9uID09PSAncGRmJykge1xuICAgICAgICAgICAgICAgICRzY29wZS5wcmV2aWV3YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnBkZlVybCA9ICRyb290U2NvcGUuZW5kUG9pbnQgKyAnL3ByZXZpZXcvJyArICRzdGF0ZVBhcmFtcy5wcmV2aWV3ICsgJy9vZi8nICsgJHN0YXRlUGFyYW1zLnVzZXI7XG4gICAgICAgICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBkZkRlbGVnYXRlLiRnZXRCeUhhbmRsZSgnbXktcGRmLWNvbnRhaW5lcicpLnpvb21JbigwLjUpO1xuICAgICAgICAgICAgICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKG5ldyBFcnJvcihlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICgkc3RhdGVQYXJhbXMucHJldmlldyAmJiAkc3RhdGVQYXJhbXMuZXh0ZW5zaW9uID09PSAnanBnJyB8fCAkc3RhdGVQYXJhbXMuZXh0ZW5zaW9uID09PSAncG5nJykge1xuICAgICAgICAgICAgICAgICRzY29wZS5maWxlX25hbWUgPSAkc3RhdGVQYXJhbXMucHJldmlldztcbiAgICAgICAgICAgICAgICAkc2NvcGUucHJldmlld2FibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLmZvbGRlcl9pZCA9ICRzdGF0ZVBhcmFtcy5mb2xkZXI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vc2VuZCBhIGZpbGVuYW1lIHRvIGEgZG93bmxvYWQgYnV0dG9uXG4gICAgICAgICAgICAgICAgJHNjb3BlLmZpbGVfbmFtZSA9ICRzdGF0ZVBhcmFtcy5wcmV2aWV3O1xuICAgICAgICAgICAgICAgICRzY29wZS5wcmV2aWV3YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICRyb290U2NvcGUuZm9sZGVyX2lkID0gJHN0YXRlUGFyYW1zLmZvbGRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHNjb3BlLmdvTmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuaW5jcmVtZW50ID0gMTtcbiAgICAgICAgICAgICAgICBwZGZEZWxlZ2F0ZS4kZ2V0QnlIYW5kbGUoJ215LXBkZi1jb250YWluZXInKS5uZXh0KCRzY29wZS5pbmNyZW1lbnQgKyAxKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAkc2NvcGUuZG9ud2xvYWQgPSBcIkRvd25sb2FkXCI7XG4gICAgICAgICAgICAkc2NvcGUuZ29QcmV2ID0gZnVuY3Rpb24gKHBhZ2UpIHtcbiAgICAgICAgICAgICAgICBwZGZEZWxlZ2F0ZS4kZ2V0QnlIYW5kbGUoJ215LXBkZi1jb250YWluZXInKS5wcmV2KCRzY29wZS5pbmNyZW1lbnQgLSAxKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICBdKTtcblxuYW5ndWxhci5tb2R1bGUoJ3N5bmMnKVxuICAgIC5kaXJlY3RpdmUoJ2ZpbGVEb3dubG9hZCcsIFsnJHN0YXRlUGFyYW1zJywgJyRyb290U2NvcGUnLCBmdW5jdGlvbiAoJHN0YXRlUGFyYW1zLCAkcm9vdFNjb3BlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgICAgb2JqOiAnPScsXG4gICAgICAgICAgICAgICAgbmFtZTogJz0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGU6ICc8c3BhbiAgZGF0YS1uZy1jbGljaz1cImRvd25sb2FkKG9iailcIj57e25hbWV9fTwvc3Bhbj4nLFxuICAgICAgICAgICAgY29udHJvbGxlcjogWyckcm9vdFNjb3BlJywgJyRzY29wZScsICckZWxlbWVudCcsICckYXR0cnMnLCAnJHRpbWVvdXQnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzLCAkdGltZW91dCkge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGZha2VQcm9ncmVzcygpIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkc2NvcGUucHJvZ3Jlc3MgPCA5NSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5wcm9ncmVzcyArPSAoOTYgLSAkc2NvcGUucHJvZ3Jlc3MpIC8gMjtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFrZVByb2dyZXNzKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgMjUwKTtcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICRzY29wZS5wcm9ncmVzcyA9IDA7XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBwcmVwYXJlKHVybCkge1xuICAgICAgICAgICAgICAgICAgICBmYWtlUHJvZ3Jlc3MoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzdWNjZXNzKHVybCkge1xuICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2RpYWxvZ3Mud2FpdC5jb21wbGV0ZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGVycm9yKHJlc3BvbnNlLCB1cmwpIHtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICRzY29wZS5kb3dubG9hZCA9IGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbGUpO1xuICAgICAgICAgICAgICAgICAgICAkLmZpbGVEb3dubG9hZCgkcm9vdFNjb3BlLmVuZFBvaW50ICsgJy9kb3dubG9hZHMvZmlsZS8nICsgZmlsZSArICcvJyArICRyb290U2NvcGUuZm9sZGVyX2lkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVwYXJlQ2FsbGJhY2s6IHByZXBhcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzQ2FsbGJhY2s6IHN1Y2Nlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWlsQ2FsbGJhY2s6IGVycm9yXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XVxuICAgICAgICB9O1xuICAgIH1dKTtcblxuIiwiYW5ndWxhci5tb2R1bGUoXCJzeW5jXCIpXG4gICAgLmNvbnRyb2xsZXIoJ0ZpbGVTaGFyZWRDb250cm9sbGVyJywgWyckc2NvcGUnLCAnU2hhcmUnLCAnVXNlcicsICdERUJVRycsICckc3RhdGVQYXJhbXMnLCAnJHJvb3RTY29wZScsIGZ1bmN0aW9uICgkc2NvcGUsIFNoYXJlLCBVc2VyLCBERUJVRywgJHN0YXRlUGFyYW1zLCAkcm9vdFNjb3BlKSB7XG5cbiAgICAgICAgJHNjb3BlLnNoYXJlID0gZnVuY3Rpb24gKGRvY3VtZW50cykge1xuXG4gICAgICAgICAgICB2YXIgc2hhcmVkX3RvX2VtYWlsID0gJChcIiN0YWdcIikudGFnZ2luZyhcImdldFRhZ3NcIik7XG5cbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgXCJzaGFyZWRfdG9fZW1haWxcIjogc2hhcmVkX3RvX2VtYWlsLFxuICAgICAgICAgICAgICAgIFwic2hhcmVkX2RvY3NfaWRcIjogZG9jdW1lbnRzLnNoYXJlZF9kb2NzX2lkLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvY3VtZW50X2xpbmtcIikuaW5uZXJIVE1MLFxuICAgICAgICAgICAgICAgIFwiYWNjZXNzTGlua19zdGF0dXNcIjogZG9jdW1lbnRzLmFjY2Vzc0xpbmtfc3RhdHVzLFxuICAgICAgICAgICAgICAgIFwiYWNjZXNzTGlua19wc3dkXCI6IGRvY3VtZW50cy5hY2Nlc3NMaW5rX3Bzd2QsXG4gICAgICAgICAgICAgICAgXCJkb2NzX3R5cGVcIjogZG9jdW1lbnRzLmRvY3NfdHlwZSxcbiAgICAgICAgICAgICAgICBcInNoYXJlZF9tYW5hZ2VyXCI6IGRvY3VtZW50cy5zaGFyZWRfbWFuYWdlcixcblxuICAgICAgICAgICAgICAgIFwic2hhcmVkX3Blcm1pc3Npb25cIjogZG9jdW1lbnRzLnNoYXJlZF9wZXJtaXNzaW9uLFxuXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgU2hhcmUuU2VuZHNoYXJlZERhdGEocGFyYW1zKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5Eb2NzaGFyZWQgPT09IGZhbHNlKSB7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgJC5ub3RpZnkoXCJEb2NzaGFyZWQgIGV4aXN0IVwiLCBcInN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICQubm90aWZ5KFwiU3VjY2Vzc2ZseSBzaGFyZWRcIiwgXCJzdWNjZXNzXCIpO1xuXG5cblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKERFQlVHID09PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgIH1dKTsiLCIvKiBnbG9iYWwgc3luYyAqL1xuXG5hbmd1bGFyLm1vZHVsZSgnc3luYycpXG4uY29udHJvbGxlcignRm9sbG93Q29udHJvbGxlcicsIFsnJHNjb3BlJywnUGVvcGxlJyxmdW5jdGlvbiAoJHNjb3BlLCBQZW9wbGUpIHtcblx0XHQkc2NvcGUuaW5pdCA9IGZ1bmN0aW9uKCl7XG5cdFx0XHQkc2NvcGUuZ2V0UGVvcGxlVG9Gb2xsb3coKTtcblx0XHR9O1xuXHRcdCRzY29wZS5nZXRQZW9wbGVUb0ZvbGxvdyAgPSBmdW5jdGlvbigpe1xuXHRcdFx0UGVvcGxlLmdldCgpXG5cdFx0XHQudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblx0XHRcdFx0XG5cdFx0XHRcdCRzY29wZS5wZW9wbGUgPSByZXNwb25zZTtcblx0XHRcdH0sIGZ1bmN0aW9uKGVycm9yKXtcblxuXHRcdFx0fSk7XG5cdFx0fTtcblx0XHQkc2NvcGUuJG9uKCdmb2xsb3dNZW1iZXInLGZ1bmN0aW9uKGV2ZW50LHBhcmFtcyl7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0UGVvcGxlLmZvbGxvdyhwYXJhbXMpXG5cdFx0XHQudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG5cdFx0XHRcdC8vY29uc29sZS5sb2cocmVzcG9uc2UpO1xuXHRcdFx0XHQkc2NvcGUuZ2V0UGVvcGxlVG9Gb2xsb3coKTtcblx0XHRcdH0sZnVuY3Rpb24oZXJyb3Ipe1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHQkc2NvcGUuZm9sbG93ID0gZnVuY3Rpb24oaWQpe1xuXHRcdFx0dmFyIGZvbGxvdyA9e2lkOiBpZCwgb3B0aW9uOidhZGRQZW9wbGUnfTtcblx0XHRcdCRzY29wZS4kZW1pdChcImZvbGxvd01lbWJlclwiLCBmb2xsb3cpO1xuXHRcdH07XG5cdFx0JHNjb3BlLmluaXQoKTtcbn1dKTtcbiIsIi8qIGdsb2JhbCBGaWxlcyAqL1xuLyogZ2xvYmFsIHN5bmMgKi9cbi8qIGdsb2JhbCAkc2NvcGUgKi9cbi8qIGdsb2JhbCBhbmd1bGFyICovXG4vKkF1dGhvciBNdXJhZ2lqaW1hbmEgRm91bmRlciAmIENFTyBvZiBzeW5jIGNhbGwgaGltIG9uIFN0cmltVXBAZ21haWwuY29tKi9cblxuYW5ndWxhci5tb2R1bGUoJ3N5bmMnKVxuLnNlcnZpY2UoJ0dyb3VwJywgW1xuXHQnJGh0dHAnLFxuXHQnJHJvb3RTY29wZScsXG5cdCckcScsZnVuY3Rpb24gR3JvdXAgKFxuXHRcdCRodHRwLFxuXHRcdCRyb290U2NvcGUsXG5cdFx0JHEpIHtcblx0dGhpcy5jcmVhdGUgXHRcdD1cdGZ1bmN0aW9uKG5hbWUpe1xuXHRcdHZhciBkaWZmZXJlZCBcdD1cdCRxLmRlZmVyKCk7XG5cdFx0JGh0dHAucG9zdCgkcm9vdFNjb3BlLmVuZFBvaW50ICsgJy9hcGkvdjEvbWUvZ3JvdXBzJywgbmFtZSlcblx0XHQuc3VjY2VzcyhmdW5jdGlvbihyZXNwb25zZSl7XG5cdFx0XHRkaWZmZXJlZC5yZXNvbHZlKHJlc3BvbnNlKTtcblx0XHR9KVxuXHRcdC5lcnJvcihmdW5jdGlvbihlcnJvcikge1xuXHRcdFx0ZGlmZmVyZWQucmVqZWN0KGVycm9yKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gZGlmZmVyZWQucHJvbWlzZTtcblx0fTtcblx0dGhpcy5kZWxldGUgXHRcdD1cdGZ1bmN0aW9uKGlkKXtcblx0XHR2YXIgZGlmZmVyZWQgXHQ9XHQkcS5kZWZlcigpO1xuXHRcdCRodHRwLmRlbGV0ZSgkcm9vdFNjb3BlLmVuZFBvaW50ICsgJy9hcGkvdjEvbWUvZ3JvdXBzLycraWQpXG5cdFx0LnN1Y2Nlc3MoZnVuY3Rpb24ocmVzcG9uc2Upe1xuXHRcdFx0ZGlmZmVyZWQucmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0fSlcblx0XHQuZXJyb3IoZnVuY3Rpb24oZXJyb3IpIHtcblx0XHRcdGRpZmZlcmVkLnJlamVjdChlcnJvcik7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGRpZmZlcmVkLnByb21pc2U7XG5cdH07XG5cdHRoaXMubXlHcm91cHNcdFx0PVx0ZnVuY3Rpb24oKXtcblx0XHR2YXIgZGlmZmVyZWQgXHQ9XHQkcS5kZWZlcigpO1xuXG5cdFx0JGh0dHAuZ2V0KCRyb290U2NvcGUuZW5kUG9pbnQgKyAnL2FwaS92MS9tZS9ncm91cHMnKVxuXHRcdC5zdWNjZXNzKGZ1bmN0aW9uKHJlc3BvbnNlKXtcblx0XHRcdGRpZmZlcmVkLnJlc29sdmUocmVzcG9uc2UpO1xuXHRcdH0pXG5cdFx0LmVycm9yKGZ1bmN0aW9uKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnZGlmZmVyZWQgc2xvdzonICsgZXJyb3IpO1xuXHRcdFx0ZGlmZmVyZWQucmVqZWN0KGVycm9yKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gZGlmZmVyZWQucHJvbWlzZTtcblx0fTtcblxuXHR0aGlzLmFkZFBlb3BsZSBcdD1cdGZ1bmN0aW9uKG1lbWJlcil7XG5cdFx0dmFyIGRpZmZlcmVkIFx0PVx0JHEuZGVmZXIoKTtcblx0XHQkaHR0cC5wdXQoJHJvb3RTY29wZS5lbmRQb2ludCArICcvYXBpL3YxL21lL2dyb3Vwcy8nK0pTT04uc3RyaW5naWZ5KG1lbWJlcikpXG5cdFx0LnN1Y2Nlc3MoZnVuY3Rpb24ocmVzcG9uc2Upe1xuXHRcdFx0ZGlmZmVyZWQucmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0fSlcblx0XHQuZXJyb3IoZnVuY3Rpb24oZXJyb3IpIHtcblx0XHRcdGRpZmZlcmVkLnJlc29sdmUoZXJyb3IpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBkaWZmZXJlZC5wcm9taXNlO1xuXHR9O1xuXHR0aGlzLmFkZEZpbGVUb0dyb3VwID0gZnVuY3Rpb24oZmlsZU9iail7XG5cdFx0dmFyIGRpZmZlcmVkID0gJHEuZGVmZXIoKTtcblx0XHQkaHR0cC5wdXQoJHJvb3RTY29wZS5lbmRQb2ludCArICcvYXBpL3YxL21lL2dyb3Vwcy8nKyBKU09OLnN0cmluZ2lmeShmaWxlT2JqKSlcblx0XHQuc3VjY2VzcyhmdW5jdGlvbihyZXNwb25zZSl7XG5cdFx0XHRkaWZmZXJlZC5yZXNvbHZlKHJlc3BvbnNlKTtcblx0XHR9KVxuXHRcdC5lcnJvcihmdW5jdGlvbihlcnIpe1xuXHRcdFx0ZGlmZmVyZWQucmVqZWN0KGVycik7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGRpZmZlcmVkLnByb21pc2U7XG5cdH07XG5cdHRoaXMucmVtb3ZlUGVvcGxlIFx0PVx0ZnVuY3Rpb24obWVtYmVyKXtcblx0XHR2YXIgZGlmZmVyZWQgXHQ9XHQkcS5kZWZlcigpO1xuXHRcdCRodHRwLnB1dCgkcm9vdFNjb3BlLmVuZFBvaW50ICsnL2FwaS92MS9tZS9ncm91cHMvJytKU09OLnN0cmluZ2lmeShtZW1iZXIpKVxuXHRcdC5zdWNjZXNzKGZ1bmN0aW9uKHJlc3BvbnNlKXtcblx0XHRcdGRpZmZlcmVkLnJlc29sdmUocmVzcG9uc2UpO1xuXHRcdH0pXG5cdFx0LmVycm9yKGZ1bmN0aW9uKGVycm9yKSB7XG5cdFx0XHRkaWZmZXJlZC5yZWplY3QoZXJyb3IpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBkaWZmZXJlZC5wcm9taXNlO1xuXHR9O1xuICB0aGlzLnN1Z2dlc3RQZW9wbGUgPSBmdW5jdGlvbihpZCl7XG5cbiAgICBcdHZhciBkaWZmZXJlZCA9ICRxLmRlZmVyKCk7XG4gICAgXHQkaHR0cC5nZXQoJHJvb3RTY29wZS5lbmRQb2ludCArICcvYXBpL3YxL21lL2dyb3Vwcy8nICsgaWQpXG4gICAgXHQuc3VjY2VzcyhmdW5jdGlvbihyZXMpe1xuICAgIFx0XHRkaWZmZXJlZC5yZXNvbHZlKHJlcyk7XG4gICAgXHR9KVxuICAgIFx0LmVycm9yKGZ1bmN0aW9uKGVycikge1xuICAgIFx0XHRkaWZmZXJlZC5yZWplY3QoZXJyKTtcbiAgICBcdH0pO1xuICAgIFx0cmV0dXJuIGRpZmZlcmVkLnByb21pc2U7XG4gICAgfTtcblx0cmV0dXJuIHRoaXM7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKCdzeW5jJylcbi5jb250cm9sbGVyKCdHcm91cENvbnRyb2xsZXInLCBbXG5cdCckc2NvcGUnLFxuXHQnR3JvdXAnLFxuXHQnVXNlcicsXG5cdCdGaWxlcycsXG5cdCd1c2VySW50ZXJhY3Rpb25Ob3RpZmljYXRpb24nLFxuXHRmdW5jdGlvbiBHcm91cENvbnRyb2xsZXIgKFxuXHRcdCRzY29wZSxcblx0XHRHcm91cCxcblx0XHRVc2VyLFxuXHRcdEZpbGVzLFxuXHRcdHVzZXJJbnRlcmFjdGlvbk5vdGlmaWNhdGlvblxuXHQpIHtcblx0JHNjb3BlLmluaXQgXHQ9XHRmdW5jdGlvbigpe1xuXHRcdCRzY29wZS5teUdyb3VwcygpO1xuXG5cdFx0JHNjb3BlLnN1Z2dlc3RlZFBlb3BsZVRvR3JvdXAoKTsvL29mY2F1c2UgdGhleSBhcmUgYXJsZWFkeSB5b3VyIGZyaWVuZCBidXQgbm90IHBhcnRpY2lwYW50IGluIHlvdXIgc3R1ZmYgd29yayFcblx0fTtcblx0JHNjb3BlLnVzZXJJZCBcdFx0XHRcdD1cdGZ1bmN0aW9uKCl7XG5cdFx0VXNlci5faWQoKVxuXHRcdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcblx0XHRcdCRzY29wZS51c2VySWQgXHQ9XHRyZXNwb25zZTtcblx0XHR9LCBmdW5jdGlvbihlcnJvcil7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0fSk7XG5cdH07XG5cdCRzY29wZS5teUdyb3VwcyBcdFx0XHQ9XHRmdW5jdGlvbigpe1xuXHRcdEdyb3VwLm15R3JvdXBzKClcblx0XHQudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG5cdFx0XHQkc2NvcGUuZ3JvdXAgXHQ9IHJlc3BvbnNlO1xuXHRcdH0sIGZ1bmN0aW9uKGVycm9yKXtcblx0XHR9KTtcblx0fTtcblx0JHNjb3BlLnN1Z2dlc3RlZFBlb3BsZVRvR3JvdXAgXHQ9XHRmdW5jdGlvbihpZCl7XG5cdFx0Ly9jbGVhcmluZyBhbGwgdmlldyByZW5kZXJlZCBiZWZvcmVcblx0XHQkc2NvcGUuc2hvd0ZpbGVzPWZhbHNlO1xuXHRcdCRzY29wZS5zaG93R3JvdXA9ZmFsc2U7XG5cdFx0JHNjb3BlLnNob3dCb3g9ZmFsc2U7XG5cdFx0aWYoIWFuZ3VsYXIuaXNVbmRlZmluZWQoaWQpKXtcblx0XHRcdEdyb3VwLnN1Z2dlc3RQZW9wbGUoaWQpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cdFx0XHRcdCRzY29wZS5mb2xsb3dlcnMgPSByZXNwb25zZTtcblx0XHRcdH0sIGZ1bmN0aW9uKGVycm9yKXtcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXHQkc2NvcGUuJG9uKCdyZWZyZXNoR3JvdXAnLGZ1bmN0aW9uKCl7XG4gICAgICAgJHNjb3BlLmluaXQoKTtcbiAgXHR9KTtcblx0JHNjb3BlLiRvbignZ3JvdXBEZWxldGVkJywgZnVuY3Rpb24gKGV2ZW50LCBhcmdzKSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHQkc2NvcGUubXlHcm91cHMoKTtcblx0fSk7XG5cdCRzY29wZS4kb24oJ2dyb3VwVG9iaW5kd2l0aCcsIGZ1bmN0aW9uIChldmVudCwgZ3JvdXBpZCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICRzY29wZS5lbWl0dGVkID1ncm91cGlkO1xuICAgICAgICBpZiggJHNjb3BlLnNob3dGaWxlcyA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAkc2NvcGUuc2hvd0ZpbGVzPWZhbHNlO1xuICAgICAgICB9XG4gICAgICAgICRzY29wZS5zdWdnZXN0ZWRQZW9wbGVUb0dyb3VwKGdyb3VwaWQpO1xuICAgICAgICAkc2NvcGUuYWRkUGVvcGxlPXRydWU7XG5cdH0pO1xuXHQkc2NvcGUuZ2V0R3JvdXBGaWxlcyA9IGZ1bmN0aW9uKG93bmVyKXtcbiAgICBGaWxlcy5nZXRHcm91cEZpbGVzKG93bmVyKVxuXHRcdC50aGVuKGZ1bmN0aW9uKHRyZWUpe1xuXHRcdFx0JHNjb3BlLmZpbGVzID0gdHJlZTtcblx0XHRcdFx0Ly9uYXZpZ2F0ZSB0cm91Z2ggdHJlZSByZXNwb25zZSB3aGljaCBpcyByZXF1aXJlIG11Y2ggYXR0ZW50aW9uXG5cdFx0XHRcdCRzY29wZS5ncm91cHM9W107XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdHJlZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0aWYgKHRyZWVbaV0uaGFzT3duUHJvcGVydHkuZ3JvdXBzICYmIHRyZWVbaV0uZ3JvdXBzKSB7XG5cdFx0XHRcdFx0XHRcdFx0JHNjb3BlLmdyb3Vwcy5wdXNoKHRyZWVbaV0uZnJpZW5kcyk7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHRyZWVbaV0uaGFzT3duUHJvcGVydHkoJ2dyb3VwcycpKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdFx0XHQvL0ZJWE1FIGdyb3VwcyBpcyBub3QgZGVmaW5lZCBoZXJlXG5cdFx0XHRcdFx0XHRcdFx0Ly8gJHNjb3BlLmdyb3VwcyA9IGdyb3Vwcy5jb25jYXQodHJhdmVyc2UodHJlZVtpXS5ncm91cHMpKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdH0sIGZ1bmN0aW9uKGVycm9yKXtcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHR9KTtcbiAgfTtcblx0JHNjb3BlLmdldEJveEZpbGVzID0gZnVuY3Rpb24oZ3JvdXBJZCl7XG5cdFx0JHNjb3BlLmVtaXR0ZWQgPWdyb3VwSWQ7XG4gIFx0RmlsZXMuZ2V0Qm94RmlsZXMoZ3JvdXBJZClcblx0XHQudGhlbihmdW5jdGlvbih0cmVlKXtcblx0XHRcdCRzY29wZS5maWxlcyA9IHRyZWU7XG5cdFx0XHRcdC8vbmF2aWdhdGUgdHJvdWdoIHRyZWUgcmVzcG9uc2Ugd2hpY2ggaXMgcmVxdWlyZSBtdWNoIGF0dGVudGlvblxuXHRcdFx0XHQkc2NvcGUuZ3JvdXBzPVtdO1xuXHRcdFx0XHR2YXIgZ3JvdXBzO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRyZWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdGlmICh0cmVlW2ldLmhhc093blByb3BlcnR5Lmdyb3VwcyAmJiB0cmVlW2ldLmdyb3Vwcykge1xuXHRcdFx0XHRcdFx0XHRcdCRzY29wZS5ncm91cHMucHVzaCh0cmVlW2ldLmZyaWVuZHMpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICh0cmVlW2ldLmhhc093blByb3BlcnR5KCdncm91cHMnKSkge1xuXHRcdFx0XHQgICAgICAgICAgICAkc2NvcGUuZ3JvdXBzID0gZ3JvdXBzLmNvbmNhdCh0cmF2ZXJzZSh0cmVlW2ldLmdyb3VwcykpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0fSwgZnVuY3Rpb24oZXJyb3Ipe1xuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdH0pO1xuICB9O1xuJHNjb3BlLiRvbignc2hvd09wdGlvbnMnLGZ1bmN0aW9uKF8scGFyYW1zKXtcbiAgICAgaWYocGFyYW1zLm93bmVyID09PVwiYm94XCIpe1xuXHRcdFx0ICRzY29wZS5hZGRQZW9wbGU9ZmFsc2U7XG5cdFx0XHQgJHNjb3BlLnNob3dHcm91cD1mYWxzZTtcbiAgICAgICAkc2NvcGUuc2hvd0JveD10cnVlO1xuICAgICAgIGlmKCAkc2NvcGUuYWRkUGVvcGxlID09PSB0cnVlKXtcbiAgICAgICAgICAgJHNjb3BlLmFkZFBlb3BsZT1mYWxzZTtcbiAgICAgICB9XG5cdFx0XHQgLy9zZXQgZmlsZXMgc2NvcGUgdG8gc2hvdyBmaWxlcyBvZiBib3ggZmlsZXMgaXMgcmVwZWF0ZWQgaW4gdmlldyBkaXJlY3RpdmVcbiAgICAgICAkc2NvcGUuZ2V0Qm94RmlsZXMgKHBhcmFtcy5ncm91cF9pZCk7XG5cdFx0IH1lbHNlIGlmIChwYXJhbXMub3duZXIgPT09IFwiZ3JvdXBcIikge1xuXHRcdFx0ICRzY29wZS5zaG93Qm94PWZhbHNlO1xuXHRcdFx0ICRzY29wZS5hZGRQZW9wbGU9ZmFsc2U7XG5cdFx0XHQgJHNjb3BlLnNob3dHcm91cD10cnVlO1xuXHRcdFx0IGlmKCAkc2NvcGUuYWRkUGVvcGxlID09PSB0cnVlKXtcblx0XHRcdFx0XHQgJHNjb3BlLmFkZFBlb3BsZT1mYWxzZTtcblx0XHRcdCB9XG5cdFx0XHQgLy9jaGFuZ2UgZmlsZXMgdG8gbmV3IHNjb3BlIGZpbGVzIHRvIHNob3cgZmlsZXMgb2YgZ3JvdXBzICBpcyByZXBlYXRlZCBpbiB2aWV3IGRpcmVjdGl2ZVxuXHRcdFx0ICRzY29wZS5nZXRHcm91cEZpbGVzIChwYXJhbXMuZ3JvdXBfaWQpO1xuXHRcdCB9XG59KTtcbiRzY29wZS5pbml0KCk7XG59XSk7XG5hbmd1bGFyLm1vZHVsZSgnc3luYycpXG4uZGlyZWN0aXZlKCdteUdyb3VwcycsIFtcblx0J0dyb3VwJyxcblx0J1JlcG9ydCcsXG5cdCd1c2VySW50ZXJhY3Rpb25Ob3RpZmljYXRpb24nLFxuXHRmdW5jdGlvbiBteUdyb3VwcyAoXG5cdFx0R3JvdXAsXG5cdFx0UmVwb3J0LFxuXHRcdHVzZXJJbnRlcmFjdGlvbk5vdGlmaWNhdGlvbixcblx0XHROb3RpZmljYXRpb24pIHtcblx0cmV0dXJuIHtcblx0XHRwcmlvcml0eTogMTAsXG5cdFx0dGVtcGxhdGVVcmw6ICdBcHAvc2NyaXB0cy9qcy9kaXJlY3RpdmVzL2dyb3Vwcy5odG1sJyxcblx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdHNjb3BlOiB7XG5cdFx0XHQgIGlkOiAnPXVzZXJJZCcsXG4gICAgICAgICAgZ3JvdXBzOiAnPScsXG4gICAgICAgICAgZm9sbG93ZXJzOiAnPScsXG4gICAgICAgICAgZW1pdHRlZDonPScsXG4gICAgICAgICAgc2hvd1Blb3BsZTonPScsXG4gICAgICAgICAgc2hvd0dyb3VwICAgOiAgJz0nLFxuICAgICAgICAgIGZpbGVzICAgOiAgJz0nLFxuXHQgIFx0XHRcdHNob3dCb3g6ICAnPSdcblx0XHR9LFxuXHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgaUVsZW1lbnQsIGlBdHRycykge1xuXHRcdFx0c2NvcGUuZGVsZXRlR3JvdXAgPSBmdW5jdGlvbihpZCl7XG5cdFx0XHRcdEdyb3VwLmRlbGV0ZShpZClcblx0XHRcdFx0LnRoZW4oZnVuY3Rpb24ocmVzKXtcblx0XHRcdFx0XHRcdHVzZXJJbnRlcmFjdGlvbk5vdGlmaWNhdGlvbi5pbmZvKFwiR3JvdXAgZGVsZXRlZFwiKTtcblx0XHRcdFx0XHQgXHRzY29wZS4kZW1pdChcImdyb3VwRGVsZXRlZFwiLCAnZ3JvdXAgZGVsZXRlZCcpO1xuXHRcdFx0XHR9LCBmdW5jdGlvbihlcnIpe1xuXHRcdFx0XHRcdFJlcG9ydC5zZW5kKCdkZWxldGUgZ3JvdXAgZXJyb3I6JytlcnIpXG5cdFx0XHRcdFx0LnRoZW4oZnVuY3Rpb24oKXt9LCBmdW5jdGlvbigpe30pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH07XG4gICAgICBzY29wZS5jcmVhdGVHcm91cFx0PVx0ZnVuY3Rpb24obmFtZSl7XG4gICAgICAgICAgR3JvdXAuY3JlYXRlKG5hbWUpXG4gICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dXNlckludGVyYWN0aW9uTm90aWZpY2F0aW9uLnN1Y2Nlc3MoXCJDcmVhdGVkIG5ldyBHcm91cFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICBzY29wZS4kZW1pdCgncmVmcmVzaEdyb3VwJyxudWxsKTtcbiAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKXtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfTtcblx0XHRcdHNjb3BlLmluaXRBZGRQZW9wbGUgPSBmdW5jdGlvbihncm91cGlkKXtcblx0XHRcdFx0c2NvcGUuJGVtaXQoXCJncm91cFRvYmluZHdpdGhcIiwgZ3JvdXBpZCk7XG5cdFx0XHR9O1xuXG5cdFx0XHRzY29wZS5hZGRQZW9wbGUgPSBmdW5jdGlvbihwYXJhbXMpe1xuXHRcdFx0XHR2YXIgbmV3UGFyYW1zID17XG5cdFx0XHRcdFx0J29wdGlvbic6J2FkZE1lbWJlcicsXG5cdFx0XHRcdFx0J3VzZXJJZCc6cGFyYW1zLnVzZXJJZCxcblx0XHRcdFx0XHQnZ3JvdXBJZCc6cGFyYW1zLmdyb3VwSWRcblx0XHRcdFx0fTtcblx0XHRcdFx0aWYoYW5ndWxhci5pc1VuZGVmaW5lZChwYXJhbXMpKXtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0Ly93b24ndCBoYXBwZW4hb3IgaWYgdGkgaGFwcGVuIHdlIHF1aXRcblx0XHRcdFx0fWVsc2V7XG5cblx0XHRcdFx0XHRHcm91cC5hZGRQZW9wbGUobmV3UGFyYW1zKVxuXHRcdFx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSl7XG5cdFx0XHRcdFx0XHQvL3JlZnJlc2ggZ3JvdXAgd2l0aCBuZXcgbWVtYmVyIHN0YXR1c1xuXHRcdFx0XHRcdFx0XHR1c2VySW50ZXJhY3Rpb25Ob3RpZmljYXRpb24uc3VjY2VzcyhcIkFkZGVkIE1lbWJlciBpbiBncm91cC5cIik7XG4gICAgICAgICAgICAgIHNjb3BlLmluaXRBZGRQZW9wbGUocGFyYW1zLmdyb3VwSWQpO1xuICAgICAgICAgICAgICBzY29wZS4kZW1pdCgncmVmcmVzaEdyb3VwJywnJyk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblx0XHRcdFx0XHR9LCBmdW5jdGlvbiAoZXJyb3Isc3RhdHVzKXtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0c2NvcGUucmVtb3ZlUGVvcGxlID0gZnVuY3Rpb24ocGFyYW1zKXtcblxuXHRcdFx0XHR2YXIgbmV3UGFyYW1zID17XG5cdFx0XHRcdFx0J29wdGlvbic6J3JlbW92ZU1lbWJlcicsXG5cdFx0XHRcdFx0J3VzZXJJZCc6cGFyYW1zLnVzZXJJZCxcblx0XHRcdFx0XHQnZ3JvdXBJZCc6cGFyYW1zLmdyb3VwSWRcblx0XHRcdFx0fTtcblxuXHRcdFx0XHRpZihhbmd1bGFyLmlzVW5kZWZpbmVkKHBhcmFtcykpe1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHQvL3dvbid0IGhhcHBlbiFvciBpZiB0aSBoYXBwZW4gd2UgcXVpdCB0b28gYmFkIGhpZXJhY2h5IVxuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0R3JvdXAucmVtb3ZlUGVvcGxlKG5ld1BhcmFtcylcblx0XHRcdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2Upe1xuXHRcdFx0XHRcdFx0XHR1c2VySW50ZXJhY3Rpb25Ob3RpZmljYXRpb24uaW5mbyhcIlJlbW92ZWQgTWVtYmVyIGluIGdyb3VwLlwiKTtcblx0ICAgICAgICAgICAgc2NvcGUuaW5pdEFkZFBlb3BsZShwYXJhbXMuZ3JvdXBJZCk7XG5cdCAgICAgICAgICAgIHNjb3BlLiRlbWl0KCdyZWZyZXNoR3JvdXAnLCcnKTtcbiAgICAgICAgICAgIFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xuXHRcdFx0XHRcdH0sIGZ1bmN0aW9uIChlcnJvcixzdGF0dXMpe1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRzY29wZS5yZW1vdmVGcm9tR3JvdXAgPSBmdW5jdGlvbigpe1xuXHRcdFx0XHRjb25zb2xlLmxvZygnd2UgY2FuIHJlbW92ZSBmaWxlIGluIGdyb3VwJyk7XG5cdFx0XHR9O1xuXHRcdFx0c2NvcGUuYWRkRmlsZVRvR3JvdXAgPSBmdW5jdGlvbihwYXJhbXMpe1xuXHRcdFx0XHR2YXIgZmlsZU9iaiA9e1xuXHRcdFx0XHRcdCdvcHRpb24nOidhZGRGaWxlcycsXG5cdFx0XHRcdFx0J2ZpbGVJZCc6cGFyYW1zLmZpbGVJZCxcblx0XHRcdFx0XHQnZ3JvdXBJZCc6cGFyYW1zLmdyb3VwSWRcblx0XHRcdFx0fTtcblxuXHRcdFx0XHRHcm91cC5hZGRGaWxlVG9Hcm91cChmaWxlT2JqKVxuXHRcdFx0XHQudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xuXHRcdFx0XHRcdC8vIHVzZXJJbnRlcmFjdGlvbk5vdGlmaWNhdGlvbi5zdWNjZXNzKFwiQSBmaWxlIGlzIGFkZGVkIGluIGdyb3VwXCIpO1xuXHRcdFx0XHR9LGZ1bmN0aW9uKGVycil7XG5cdFx0XHRcdFx0dXNlckludGVyYWN0aW9uTm90aWZpY2F0aW9uLndhcm4oXCJTb21lIGVycm9yIG9jY3VyZWQgZHVyaW5nIGFkZGluZyBmaWxlXCIpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0fTtcblx0XHRcdHNjb3BlLmZpbGVzSW5Cb3ggPSBmdW5jdGlvbihncm91cGlkKXtcblx0XHRcdFx0dmFyIHBhcmFtcyA9eydncm91cF9pZCc6Z3JvdXBpZCwnb3duZXInOidib3gnfTtcblx0XHRcdFx0c2NvcGUuJGVtaXQoJ3Nob3dPcHRpb25zJyxwYXJhbXMpO1xuXG5cdFx0XHR9O1xuXHRcdFx0c2NvcGUuZmlsZXNJbkdyb3VwID0gZnVuY3Rpb24oZ3JvdXBpZCl7XG5cblx0XHRcdFx0dmFyIHBhcmFtcyA9eydncm91cF9pZCc6Z3JvdXBpZCwnb3duZXInOidncm91cCd9O1xuXHRcdFx0XHRzY29wZS4kZW1pdCgnc2hvd09wdGlvbnMnLHBhcmFtcyk7XG5cdFx0XHR9O1xuXHRcdH1cblx0fTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoJ3N5bmMnKVxuLnNlcnZpY2UoJ1JlcG9ydCcsIFtmdW5jdGlvbiBSZXBvcnQgKCRodHRwLCRxLCRyb290U2NvcGUpIHtcblx0dGhpcy5zZW5kID0gZnVuY3Rpb24oaXNzdWUpe1xuXHRcdHZhciBkaWZmZXJlZCA9ICRxLmRlZmVyKCk7XG5cdFx0JGh0dHAucG9zdCgkcm9vdFNjb3BlLmVuZFBvaW50ICsgJy9hcGkvdjEvaXNzdWVzJywgaXNzdWUpXG5cdFx0LnN1Y2Nlc3MoZnVuY3Rpb24ocmVzKXtcblx0XHRcdGRpZmZlcmVkLnJlc29sdmUocmVzKTtcblx0XHR9KVxuXHRcdC5lcnJvcihmdW5jdGlvbihlcnIpIHtcblx0XHRcdGRpZmZlcmVkLnJlamVjdChlcnIpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBkaWZmZXJlZC5wcm9taXNlO1xuXHR9O1xuXHRyZXR1cm4gdGhpcztcbn1dKTtcbiIsImFuZ3VsYXIubW9kdWxlKCdzeW5jJylcbiAgICAuY29udHJvbGxlcignVHdlZXRpbmdXYXlNZXNzYWdlJywgWyckcm9vdFNjb3BlJywgJyRzY29wZScsICdNZXNzYWdlJywgZnVuY3Rpb24gKCRyb290U2NvcGUsICRzY29wZSwgTWVzc2FnZSkge1xuXG4gICAgICAgICQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGplcmVteSA9IGRlY29kZVVSSShcIkolQzMlQTlyJUMzJUE5bXlcIikgLy8gSsOpcsOpbXlcbiAgICAgICAgICAgIHZhciB0YWdzID0gW1wiSmFjb2JcIiwgXCJJc2FiZWxsYVwiLCBcIkV0aGFuXCIsIFwiRW1tYVwiLCBcIk1pY2hhZWxcIiwgXCJPbGl2aWFcIiwgXCJBbGV4YW5kZXJcIiwgXCJTb3BoaWFcIiwgXCJXaWxsaWFtXCIsIFwiQXZhXCIsIFwiSm9zaHVhXCIsIFwiRW1pbHlcIiwgXCJEYW5pZWxcIiwgXCJNYWRpc29uXCIsIFwiSmF5ZGVuXCIsIFwiQWJpZ2FpbFwiLCBcIk5vYWhcIiwgXCJDaGxvZVwiLCBcIuS9oOWlvVwiLCBcIuS9oOS9oOS9oFwiLCBqZXJlbXldO1xuICAgICAgICAgICAgJCgnI2NoYXREYXRhJykuYXR3aG8oe1xuICAgICAgICAgICAgICAgIGF0OiBcIiNcIixcbiAgICAgICAgICAgICAgICBkYXRhOiB0YWdzLFxuICAgICAgICAgICAgICAgIGxpbWl0OiAyMDAsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgIGFmdGVyTWF0Y2hGYWlsZWQ6IGZ1bmN0aW9uIChhdCwgZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDMyIGlzIHNwYWNlYmFyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXQgPT09ICcjJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3MucHVzaChlbC50ZXh0KCkudHJpbSgpLnNsaWNlKDEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGVsLnNhdmUodGFncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnNlcnQoZWwudGV4dCgpLnRyaW0oKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgICRzY29wZS5zZW5kTWVzc2FnZSA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgJCgnPGF1ZGlvIGlkPVwiY2hhdEF1ZGlvXCI+PHNvdXJjZSBzcmM9XCJhdWRpby9ub3RpZnkub2dnXCIgdHlwZT1cImF1ZGlvL29nZ1wiPjxzb3VyY2Ugc3JjPVwiYXVkaW8vbm90aWZ5Lm1wM1wiIHR5cGU9XCJhdWRpby9tcGVnXCI+PHNvdXJjZSBzcmM9XCJhdWRpby9ub3RpZnkud2F2XCIgdHlwZT1cImF1ZGlvL3dhdlwiPjwvYXVkaW8+JykuYXBwZW5kVG8oJ2JvZHknKTtcbiAgICAgICAgICAgICQoJyNjaGF0QXVkaW8nKVswXS5wbGF5KCk7XG5cbiAgICAgICAgICAgIE1lc3NhZ2Uuc2VuZChtZXNzYWdlKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRlbWl0KFwibWVzc2FnZTpsaXN0XCIpO1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUubWVzc2FnZXMgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9ICQoXCIjY2hhdERhdGFcIikudmFsKCkudHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2NoYXREYXRhXCIpLnZhbCgnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2NoYXREYXRhXCIpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2NoYXRCb3hcIikuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzY3JvbGxUb3BcIjogJCgnI2NoYXRCb3gnKVswXS5zY3JvbGxIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIFwic2xvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGdldE1lc3NhZ2UgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICAgICAgTWVzc2FnZS5nZXQoKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5tZXNzYWdlcyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKTtcbiAgICAgICAgfTtcbiAgICAgICAgJHJvb3RTY29wZS4kb24oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZ2V0TWVzc2FnZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBnZXRNZXNzYWdlKCk7XG4gICAgICAgIH07XG4gICAgICAgIGluaXQoKTtcblxuICAgIH1dKTsiLCJhbmd1bGFyLm1vZHVsZSgnc3luYycpXG4uY29udHJvbGxlcignU2V0dGluZ3NDb250cm9sbGVyJywgWyckc2NvcGUnLCdTZXR0aW5ncycsJyRsb2cnLCckcm9vdFNjb3BlJywgZnVuY3Rpb24gKCRzY29wZSxTZXR0aW5ncywkbG9nLCRyb290U2NvcGUpIHtcblx0JHNjb3BlLmluaXQgPSBmdW5jdGlvbigpe1xuXG5cbiAgICB9O1xuXG4gICAgJHNjb3BlLm1ha2VQdWJsaWMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHBhcmFtID17XG4gICAgICAgICAgICBpZDokcm9vdFNjb3BlLmlkLFxuICAgICAgICAgICAgdHlwZTokcm9vdFNjb3BlLnR5cGVcbiAgICAgICAgfTtcbiAgICAgICBjb25zb2xlLmxvZyhwYXJhbSk7XG4gICAgICAgIFNldHRpbmdzLm1ha2VQdWJsaWMocGFyYW0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgfSkuY2F0Y2goKTtcblxuXG4gICAgfTtcblxuICAgICRzY29wZS5pbml0KCk7XG59XSk7XG4iLCIvKiBnbG9iYWwgc3luYyAqL1xuLyogZ2xvYmFsIGFuZ3VsYXIgKi9cblxuICAgIGFuZ3VsYXIubW9kdWxlKCdzeW5jJylcbiAgICAuY29udHJvbGxlcignVXBsb2FkQ29udHJvbGxlcicsIFsnJHNjb3BlJywgJ0ZpbGVVcGxvYWRlcicsJyRyb290U2NvcGUnLCdGaWxlcycsJyRzdGF0ZVBhcmFtcycsJ0RFQlVHJywnY2FjaGVGYWN0b3J5JywnJGh0dHAnLCBmdW5jdGlvbigkc2NvcGUsIEZpbGVVcGxvYWRlciwkcm9vdFNjb3BlLEZpbGVzLCRzdGF0ZVBhcmFtcyxERUJVRyxjYWNoZUZhY3RvcnksJGh0dHApIHtcbiAgICAgICAgdmFyIHVwbG9hZGVyID0gJHNjb3BlLnVwbG9hZGVyID0gbmV3IEZpbGVVcGxvYWRlcih7XG4gICAgICAgICAgICB1cmw6ICRyb290U2NvcGUuZW5kUG9pbnQrJy9hcGkvdXBsb2FkJ1xuICAgICAgICB9KTtcbiAgICAgICAgLy9GSUxURVJTXG4gICAgICAgIHVwbG9hZGVyLmZpbHRlcnMucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiAnY3VzdG9tRmlsdGVyJyxcbiAgICAgICAgICAgIGZuOiBmdW5jdGlvbihpdGVtIC8qe0ZpbGV8RmlsZUxpa2VPYmplY3R9Ki8sIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5xdWV1ZS5sZW5ndGggPCAxMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYoJHN0YXRlUGFyYW1zLmZvbGRlcklkKXtcbiAgICAgICAgICAgXG4gICAgICAgICAgICAkaHR0cC5nZXQoJHJvb3RTY29wZS5lbmRQb2ludCArICcvYXBpL2dtZVBhdGgvJyArICRzdGF0ZVBhcmFtcy5mb2xkZXJJZClcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKHBhdGhzKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdmFyIGZ1bGxfcGF0aD0gW107XG4gICAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHBhdGhzLGZ1bmN0aW9uKHBhdGgpe1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZnVsbF9wYXRoLnB1c2gocGF0aC5uYW1lKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgY29tYmluZWRfcGF0aCA9IGZ1bGxfcGF0aC5qb2luKCcvJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB1cGxvYWRlci5mb3JtRGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZm9sZGVySWQ6JHN0YXRlUGFyYW1zLmZvbGRlcklkLFxuICAgICAgICAgICAgICAgICAgICBmb2xkZXJTdHJ1Y3R1cmU6Y29tYmluZWRfcGF0aFxuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHVwbG9hZGVyLmZvcm1EYXRhLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiRyb290U2NvcGUuZmlsZVR5cGUsXG4gICAgICAgICAgICAgICAgICAgIGZvbGRlcklkOnVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgZm9sZGVyU3RydWN0dXJlOnVuZGVmaW5lZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAvL0NBTExCQUNLU1xuICAgICAgICB1cGxvYWRlci5vbldoZW5BZGRpbmdGaWxlRmFpbGVkID0gZnVuY3Rpb24oaXRlbSAvKntGaWxlfEZpbGVMaWtlT2JqZWN0fSovLCBmaWx0ZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIC8vIGlmKERFQlVHID09PSB0cnVlKVxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUuaW5mbygnb25XaGVuQWRkaW5nRmlsZUZhaWxlZCcsIGl0ZW0sIGZpbHRlciwgb3B0aW9ucyk7XG4gICAgICAgIH07XG4gICAgICAgIHVwbG9hZGVyLm9uQWZ0ZXJBZGRpbmdGaWxlID0gZnVuY3Rpb24oZmlsZUl0ZW0pIHtcbiAgICAgICAgICAgIC8vIGlmKERFQlVHID09PSB0cnVlKVxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUuaW5mbygnb25BZnRlckFkZGluZ0ZpbGUnLCBmaWxlSXRlbSk7XG4gICAgICAgIH07XG4gICAgICAgIHVwbG9hZGVyLm9uQWZ0ZXJBZGRpbmdBbGwgPSBmdW5jdGlvbihhZGRlZEZpbGVJdGVtcykge1xuICAgICAgICAgICAgLy8gaWYoREVCVUcgPT09IHRydWUpXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5pbmZvKCdvbkFmdGVyQWRkaW5nQWxsJywgYWRkZWRGaWxlSXRlbXMpO1xuICAgICAgICB9O1xuICAgICAgICB1cGxvYWRlci5vbkJlZm9yZVVwbG9hZEl0ZW0gPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAvLyBpZihERUJVRyA9PT0gdHJ1ZSlcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmluZm8oJ29uQmVmb3JlVXBsb2FkSXRlbScsIGl0ZW0pO1xuICAgICAgICB9O1xuICAgICAgICB1cGxvYWRlci5vblByb2dyZXNzSXRlbSA9IGZ1bmN0aW9uKGZpbGVJdGVtLCBwcm9ncmVzcykge1xuICAgICAgICAgICAgLy8gaWYoREVCVUcgPT09IHRydWUpXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5pbmZvKCdvblByb2dyZXNzSXRlbScsIGZpbGVJdGVtLCBwcm9ncmVzcyk7XG4gICAgICAgIH07XG4gICAgICAgIHVwbG9hZGVyLm9uUHJvZ3Jlc3NBbGwgPSBmdW5jdGlvbihwcm9ncmVzcykge1xuICAgICAgICAgICAgLy8gaWYoREVCVUcgPT09IHRydWUpXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5pbmZvKCdvblByb2dyZXNzQWxsJywgcHJvZ3Jlc3MpO1xuICAgICAgICB9O1xuICAgICAgICB1cGxvYWRlci5vblN1Y2Nlc3NJdGVtID0gZnVuY3Rpb24oZmlsZUl0ZW0sIHJlc3BvbnNlLCBzdGF0dXMsIGhlYWRlcnMpIHtcbiAgICAgICAgICAgICRyb290U2NvcGUuJGVtaXQoJ2ZpbGU6dXBsb2FkZWQnKTtcblxuICAgICAgICAgICAgLy8gaWYoREVCVUcgPT09IHRydWUpXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5pbmZvKCdvblN1Y2Nlc3NJdGVtJywgZmlsZUl0ZW0sIHJlc3BvbnNlLCBzdGF0dXMsIGhlYWRlcnMpO1xuICAgICAgICB9O1xuICAgICAgICB1cGxvYWRlci5vbkVycm9ySXRlbSA9IGZ1bmN0aW9uKGZpbGVJdGVtLCByZXNwb25zZSwgc3RhdHVzLCBoZWFkZXJzKSB7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdFcnJvciBoZXJlJyk7XG5cbiAgICAgICAgICAgIC8vIGlmKERFQlVHID09PSB0cnVlKVxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUuaW5mbygnb25FcnJvckl0ZW0nLCBmaWxlSXRlbSwgcmVzcG9uc2UsIHN0YXR1cywgaGVhZGVycyk7XG4gICAgfTtcbiAgICAgICAgdXBsb2FkZXIub25DYW5jZWxJdGVtID0gZnVuY3Rpb24oZmlsZUl0ZW0sIHJlc3BvbnNlLCBzdGF0dXMsIGhlYWRlcnMpIHtcbiAgICAgICAgICAgIC8vIGlmKERFQlVHID09PSB0cnVlKVxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUuaW5mbygnb25DYW5jZWxJdGVtJywgZmlsZUl0ZW0sIHJlc3BvbnNlLCBzdGF0dXMsIGhlYWRlcnMpO1xuICAgICAgICB9O1xuICAgICAgICB1cGxvYWRlci5vbkNvbXBsZXRlSXRlbSA9IGZ1bmN0aW9uKGZpbGVJdGVtLCByZXNwb25zZSwgc3RhdHVzLCBoZWFkZXJzKSB7XG4gICAgICAgICAgICAkcm9vdFNjb3BlLiRlbWl0KCdmaWxlOmxpc3QnKTtcbiAgICAgICAgICAgIC8vIGlmKERFQlVHID09PSB0cnVlKVxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUuaW5mbygnb25Db21wbGV0ZUl0ZW0nLCBmaWxlSXRlbSwgcmVzcG9uc2UsIHN0YXR1cywgaGVhZGVycyk7XG4gICAgICAgIH07XG4gICAgICAgIHVwbG9hZGVyLm9uQ29tcGxldGVBbGwgPSBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICBGaWxlcy5nZXRCb3hGaWxlcygpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXMpe1xuICAgICAgICAgICAgICAkc2NvcGUuZmlsZXMgXHQ9XHRyZXM7XG5cbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKXtcblxuICAgICAgICAgICAgICAgIGlmKERFQlVHID09PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmluYWxseShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmRhdGFMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgIH0pO1xuICAgICAgICAgICBcbiAgICAgICAgfTtcbiAgICAgICAgaWYoREVCVUcgPT09IHRydWUpXG4gICAgICAgICAgICBjb25zb2xlLmluZm8oJ3VwbG9hZGVyJywgdXBsb2FkZXIpO1xufV0pO1xuIiwiYW5ndWxhci5tb2R1bGUoJ3N5bmMnKVxuLnNlcnZpY2UoJ3VybFNob3J0ZW5lcicsW2Z1bmN0aW9uKCl7XG4gIFxuICAvLyB0aGlzLm1ha2VTaG9ydCA9IGZ1bmN0aW9uKGxvbmdVcmwpXG4gIC8vIHtcbiAgLy8gICAvLyAgdmFyIGxvbmdVcmw9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb25ndXJsXCIpLnZhbHVlO1xuICAvLyAgIHZhciByZXF1ZXN0ID0gZ2FwaS5jbGllbnQudXJsc2hvcnRlbmVyLnVybC5pbnNlcnQoe1xuICAvLyAgICAgJ3Jlc291cmNlJzoge1xuICAvLyAgICAgICAnbG9uZ1VybCc6IGxvbmdVcmxcbiAgLy8gXHR9XG4gIC8vICAgICB9KTtcbiAgLy8gICAgIHJlcXVlc3QuZXhlY3V0ZShmdW5jdGlvbihyZXNwb25zZSlcbiAgLy8gXHR7XG4gIFxuICAvLyBcdFx0aWYocmVzcG9uc2UuaWQgIT0gbnVsbClcbiAgLy8gXHRcdHtcbiAgLy8gXHRcdFx0c3RyID1cIjxiPkxvbmcgVVJMOjwvYj5cIitsb25nVXJsK1wiPGJyPlwiO1xuICAvLyBcdFx0XHRzdHIgKz1cIjxiPnlvdXIgRmlsZSBpczo8L2I+IDxhIGhyZWY9J1wiK3Jlc3BvbnNlLmlkK1wiJz5cIityZXNwb25zZS5pZCtcIjwvYT48YnI+XCI7XG4gIC8vIFx0XHRcdHJldHVybiBzdHI7XG4gIC8vIFx0XHR9XG4gIC8vIFx0XHRlbHNlXG4gIC8vIFx0XHR7XG4gIC8vIFx0XHRcdGNvbnNvbGUubG9nKFwiZXJyb3I6IHVuYWJsZSB0byBjcmVhdGUgc2hvcnQgdXJsXCIpO1xuICAvLyBcdFx0fVxuICBcbiAgLy8gICAgIH0pO1xuICAvLyAgfVxuICBcbiAgLy8gdGhpcy5nZXRTaG9ydEluZm8gPSBmdW5jdGlvbigpXG4gIC8vICB7XG4gIC8vICAgICAgdmFyIHNob3J0VXJsPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hvcnR1cmxcIikudmFsdWU7XG4gIFxuICAvLyAgICAgIHZhciByZXF1ZXN0ID0gZ2FwaS5jbGllbnQudXJsc2hvcnRlbmVyLnVybC5nZXQoe1xuICAvLyAgICAgICAgJ3Nob3J0VXJsJzogc2hvcnRVcmwsXG4gIC8vICBcdCAgICAgJ3Byb2plY3Rpb24nOidGVUxMJ1xuICAvLyAgICAgIH0pO1xuICAvLyAgICAgIHJlcXVlc3QuZXhlY3V0ZShmdW5jdGlvbihyZXNwb25zZSlcbiAgLy8gIFx0e1xuICAvLyAgXHRcdGlmKHJlc3BvbnNlLmxvbmdVcmwhPSBudWxsKVxuICAvLyAgXHRcdHtcbiAgLy8gIFx0XHRcdHN0ciA9XCI8Yj5Mb25nIFVSTDo8L2I+XCIrcmVzcG9uc2UubG9uZ1VybCtcIjxicj5cIjtcbiAgLy8gIFx0XHRcdHN0ciArPVwiPGI+Q3JlYXRlIE9uOjwvYj5cIityZXNwb25zZS5jcmVhdGVkK1wiPGJyPlwiO1xuICAvLyAgXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdXRwdXRcIikuaW5uZXJIVE1MID0gc3RyO1xuICAvLyAgXHRcdH1cbiAgLy8gIFx0XHRlbHNlXG4gIC8vICBcdFx0e1xuICAvLyAgXHRcdFx0Y29uc29sZS5sb2coXCJlcnJvcjogdW5hYmxlIHRvIGdldCBVUkwgaW5mb3JtYXRpb25cIik7XG4gIC8vICBcdFx0fVxuICBcbiAgLy8gICAgICB9KTtcbiAgXG4gIC8vICB9XG4gIC8vICBmdW5jdGlvbiBsb2FkKClcbiAgLy8gIHtcbiAgLy8gIFx0Z2FwaS5jbGllbnQuc2V0QXBpS2V5KCdBSXphU3lEU243ejdWMWY2SDN5WHJnQWxnVkd3NTJkU0VtcUFMSWMnKTsgLy9nZXQgeW91ciBvd25uIEJyb3dzZXIgQVBJIEtFWVxuICAvLyAgXHRnYXBpLmNsaWVudC5sb2FkKCd1cmxzaG9ydGVuZXInLCAndjEnLGZ1bmN0aW9uKCl7fSk7XG4gIC8vICB9XG4gIC8vICB3aW5kb3cub25sb2FkID0gbG9hZDtcbn1dKTtcbiIsImFuZ3VsYXIubW9kdWxlKCdzeW5jJylcbi5jb250cm9sbGVyKCdsb2dvdXRDb250cm9sbGVyJyxbJyRodHRwJywnJHNjb3BlJywnJHJvb3RTY29wZScsJyR3aW5kb3cnLCBmdW5jdGlvbigkaHR0cCwkc2NvcGUsJHJvb3RTY29wZSwkd2luZG93KSB7XG4gICRzY29wZS5sb2dvdXQgPSBmdW5jdGlvbigpIHtcblxuICAgICRodHRwLnBvc3QoJHJvb3RTY29wZS5lbmRQb2ludCArJy9sb2dvdXQnKVxuICAgIC5zdWNjZXNzKGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgICBcbiAgICAgICAgJHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xuICAgIH0pLmVycm9yKGZ1bmN0aW9uKGVycikge1xuICAgICAgXG5cbiAgICB9KVxuICB9O1xufV0pIiwiYW5ndWxhci5tb2R1bGUoJ3N5bmMnKVxuICAuY29udHJvbGxlcigndXNlckNvbnRyb2xsZXInLCBbJ1VzZXInLCAnJHNjb3BlJywgJyRyb290U2NvcGUnLCAnJGludGVydmFsJywgZnVuY3Rpb24gKFVzZXIsICRzY29wZSwgJHJvb3RTY29wZSwgJGludGVydmFsKSB7XG4gICAgJHNjb3BlLmNvbG9yID0gXCJibHVlXCI7XG4gICAgJHNjb3BlLmFjY291bnRPYmplY3QgPSB7fTtcbiAgICAkc2NvcGUuYWNjb3VudE9iamVjdC5zZWxlY3RlZEFjY291bnRzID0gW107XG4gICAgdmFyIHVzZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBVc2VyLmdldCgpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG5cbiAgICAgICAgICAkc2NvcGUudXNlciA9IHVzZXI7XG5cbiAgICAgICAgfSkuY2F0Y2goKTtcbiAgICB9O1xuICAgIHZhciBnZXREaXNrVXNhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAkc2NvcGUuU2hvd0Rpc2sgPSBmYWxzZTtcbiAgICAgIFVzZXIuZGlza1VzYWdlKClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICRzY29wZS51c2FnZURpc2sgPSByZXM7XG4gICAgICAgICAgdmFyIHNpemUgPSByZXMuc2l6ZTtcbiAgICAgICAgICB2YXIgdW5pdCA9IHJlcy51bml0O1xuXG4gICAgICAgICAgaWYgKHNpemUgPT09IDEgJiYgdW5pdCA9PT0gXCJLQlwiKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICRzY29wZS5jb2xvciA9IFwiIzBhOWJjZlwiO1xuICAgICAgICAgICAgJHNjb3BlLlNob3dEaXNrID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHNpemUgPT09IDEgJiYgdW5pdCA9PT0gXCJHQlwiKSB7XG4gICAgICAgICAgICAkc2NvcGUuY29sb3IgPSBcIm9yYW5nZVwiO1xuICAgICAgICAgICAgJHNjb3BlLlNob3dEaXNrID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHNpemUgPT09IDIgJiYgdW5pdCA9PT0gXCJHQlwiKSB7XG4gICAgICAgICAgICAkc2NvcGUuY29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgJHNjb3BlLlNob3dEaXNrID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAkc2NvcGUuY29sb3IgPSBcIiMwYTliY2ZcIjsgLy9ibHVlXG4gICAgICAgICAgICAkc2NvcGUuU2hvd0Rpc2sgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICB9KS5jYXRjaCgpO1xuICAgIH07XG4gICAgJHNjb3BlLnJlcG9ydCA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICBVc2VyLnJlcG9ydChtZXNzYWdlKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT09IDIwMClcbiAgICAgICAgICAgICAkLm5vdGlmeShcIllvdXIgSXNzdWUgaXMgYmVpbmcgcHJvY2Vzc2VkIHRoYW5rIHlvdS4uXCIsIFwic3VjY2Vzc1wiKTtcbiAgICAgIH0sIGZ1bmN0aW9uIChlKSB7XG5cbiAgICAgIH0pXG4gICAgfTtcbiAgICBnZXREaXNrVXNhZ2UoKTtcbiAgICB1c2VyKCk7XG4gICAgJHJvb3RTY29wZS4kb24oJ2ZpbGU6dXBsb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB1c2VyKCk7XG4gICAgfSk7XG4gIH1dKTsiLCIoZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcbiBcbiAgICBhbmd1bGFyLm1vZHVsZSgndmlkZW8nLCBbIF0pO1xufSkoKTtcbmFuZ3VsYXIuYm9vdHN0cmFwKCQoXCIjb25lXCIpLCBbJ3ZpZGVvJ10pOyIsIihmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhclxuICAgICAgICAubW9kdWxlKCd2aWRlby5jb3JlLnNlcnZpY2VzJywgW10pXG4gICAgICAgIC5mYWN0b3J5KCd0b2tlblNlcnZpY2UnLCB0b2tlblNlcnZpY2UpO1xuXG4gICAgdG9rZW5TZXJ2aWNlLiRpbmplY3QgPSBbJyRodHRwJ107XG5cbiAgICBmdW5jdGlvbiB0b2tlblNlcnZpY2UoJGh0dHApIHtcbiAgICAgICAgdmFyIHNlcnZpY2UgPSB7XG4gICAgICAgICAgICBnZXRUb2tlbjogZnVuY3Rpb24gZ2V0VG9rZW4oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCgnL3Rva2VuJylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1hIUiBGYWlsZWQgZm9yIGdldFRva2VuLicgKyBlcnJvci5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBzZXJ2aWNlO1xuICAgIH1cbn0pKCk7XG4iLCIvLyB2YXIgYWNjZXNzVG9rZW4gPSAnZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUlzSW1OMGVTSTZJblIzYVd4cGJ5MW1jR0U3ZGoweEluMC5leUpxZEdraU9pSlRTelF4T1RnME9HRmpZV00yTm1JeU9EazJaVFJpT1RSaFkyVXlNVGsyTmpZd0xURTBOemM1T0Rnd05ESWlMQ0pwYzNNaU9pSlRTelF4T1RnME9HRmpZV00yTm1JeU9EazJaVFJpT1RSaFkyVXlNVGsyTmpZd0lpd2ljM1ZpSWpvaVFVTXdNbUk0TXpZNE5UQTFOR1U0T0RZeE1ETmxNak5rTWpjeE4ySTBaV1ZpWWlJc0ltVjRjQ0k2TVRRM056azVNVFkwTWl3aVozSmhiblJ6SWpwN0ltbGtaVzUwYVhSNUlqb2ljbVZoYkMxaGNIQWlMQ0p5ZEdNaU9uc2lZMjl1Wm1sbmRYSmhkR2x2Ymw5d2NtOW1hV3hsWDNOcFpDSTZJbFpUTldJMFpqQXlNbVkzTWpNeE1qbGlOV1JqTlRNM04yTTRaVEJpWkRNME9XSWlmWDE5Lm1PTUNOUzk5cTN4cS05bElPN0x6c003UUI1UTFtZGFfX3JQRWNSZzBGTUEnO1xuLy8gdmFyIGFjY2Vzc01hbmFnZXIgPSBuZXcgVHdpbGlvLkFjY2Vzc01hbmFnZXIoYWNjZXNzVG9rZW4pO1xuLy8gdmFyIGNsaWVudCA9IG5ldyBUd2lsaW8uQ29udmVyc2F0aW9ucy5DbGllbnQoYWNjZXNzTWFuYWdlcik7XG5cbi8vIGNsaWVudC5pbnZpdGVUb0NvbnZlcnNhdGlvbignU2FtZSBpZGVudGl0eSB0aGF0IHlvdSB1c2VkIHRvIGdlbmVyYXRlIHRoZSBmaXJzdCB0b2tlbicpLnRoZW4ob25JbnZpdGVBY2NlcHRlZCk7XG5cbihmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhclxuICAgICAgICAubW9kdWxlKCd2aWRlby5jb3JlLmRpcmVjdGl2ZXMnLCBbXSlcbiAgICAgICAgLmRpcmVjdGl2ZSgndHdpbGlvVmlkZW8nLCB0d2lsaW9WaWRlb0RpcmVjdGl2ZSk7XG5cbiAgICBmdW5jdGlvbiB0d2lsaW9WaWRlb0RpcmVjdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInR3aWxpby12aWRlby1tZWRpYS1jb250YWluZXJcIj48L2Rpdj4nLFxuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgICAgIG1lZGlhOiAnPScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCAkYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgc2NvcGUuJHdhdGNoKCdtZWRpYScsIGZ1bmN0aW9uIChuZXd2YWwsIG9sZHZhbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2NvcGUubWVkaWEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLm1lZGlhLmF0dGFjaChlbGVtZW50WzBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyXG4gICAgICAgIC5tb2R1bGUoJ3ZpZGVvLnZpZGVvY2hhdCcsIFtdKVxuICAgICAgICAuY29udHJvbGxlcignVmlkZW9DaGF0Q29udHJvbGxlcicsIFZpZGVvQ2hhdENvbnRyb2xsZXIpO1xuXG4gICAgVmlkZW9DaGF0Q29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZycsICd0b2tlblNlcnZpY2UnXTtcblxuICAgIGZ1bmN0aW9uIFZpZGVvQ2hhdENvbnRyb2xsZXIoJHNjb3BlLCAkbG9nLCB0b2tlblNlcnZpY2UpIHtcbiAgICAgICAgdmFyIHZtID0gdGhpcztcbiAgICAgICAgdmFyIGNvbnZlcnNhdGlvbnNDbGllbnQ7XG4gICAgICAgIHZhciBhY3RpdmVDb252ZXJzYXRpb247XG4gICAgICAgIHZhciB0b2tlbjtcbiAgICAgICAgdmFyIGlkZW50aXR5O1xuXG4gICAgICAgIHZtLmNsaWVudENvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICB2bS5sb2cgPSAnUHJlcGFyaW5nIHRvIGxpc3Rlbic7XG4gICAgICAgIHZtLmludml0ZVRvID0gJyc7XG4gICAgICAgIHZtLnJlbW90ZVBhcnRpY2lwYW50cyA9IHt9O1xuICAgICAgICBcbiAgICAgICAgdm0ucHJldmlld0NhbWVyYSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZtLnByZXZpZXdNZWRpYSA9IG5ldyBUd2lsaW8uQ29udmVyc2F0aW9ucy5Mb2NhbE1lZGlhKCk7XG4gICAgICAgICAgICBUd2lsaW8uQ29udmVyc2F0aW9ucy5nZXRVc2VyTWVkaWEoKS50aGVuKFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChtZWRpYVN0cmVhbSkge1xuXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS4kYXBwbHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdm0ucHJldmlld01lZGlhLmFkZFN0cmVhbShtZWRpYVN0cmVhbSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2cuZXJyb3IoJ1VuYWJsZSB0byBhY2Nlc3MgbG9jYWwgbWVkaWEnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uc2VuZEludml0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChhY3RpdmVDb252ZXJzYXRpb24pIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVDb252ZXJzYXRpb24uaW52aXRlKHZtLmludml0ZVRvKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7fTtcbiAgICAgICAgICAgICAgICBpZiAodm0ucHJldmlld01lZGlhKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxNZWRpYSA9IHZtLnByZXZpZXdNZWRpYTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udmVyc2F0aW9uc0NsaWVudC5pbnZpdGVUb0NvbnZlcnNhdGlvbih2bS5pbnZpdGVUbywgb3B0aW9ucykudGhlbihjb252ZXJzYXRpb25TdGFydGVkKS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5sb2cgPSAnVW5hYmxlIHRvIGNyZWF0ZSBjb252ZXJzYXRpb24nO1xuICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy5lcnJvcignVW5hYmxlIHRvIGNyZWF0ZSBjb252ZXJzYXRpb24nLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZtLnRvZ2dsZU11dGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodm0ucHJldmlld01lZGlhKSB7XG4gICAgICAgICAgICAgICAgdm0ucHJldmlld01lZGlhLm11dGUoISRzY29wZS5wcmV2aWV3TWVkaWEuaXNNdXRlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0udG9nZ2xlQ2FtZXJhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHZtLnByZXZpZXdNZWRpYSkge1xuICAgICAgICAgICAgICAgIHZtLnByZXZpZXdNZWRpYS5wYXVzZSghJHNjb3BlLnByZXZpZXdNZWRpYS5pc1BhdXNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgYWN0aXZhdGUoKTtcblxuICAgICAgICBmdW5jdGlvbiBhY3RpdmF0ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRUb2tlbigpLnRoZW4oZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5pbmZvKCdUb2tlbiBSZXRyaWV2ZWQ6ICcgKyB0b2tlbik7XG5cbiAgICAgICAgICAgICAgICB2YXIgYWNjZXNzTWFuYWdlciA9IG5ldyBUd2lsaW8uQWNjZXNzTWFuYWdlcih0b2tlbik7XG5cbiAgICAgICAgICAgICAgICAkbG9nLmxvZyhpZGVudGl0eSk7XG5cbiAgICAgICAgICAgICAgICBjb252ZXJzYXRpb25zQ2xpZW50ID0gbmV3IFR3aWxpby5Db252ZXJzYXRpb25zLkNsaWVudChhY2Nlc3NNYW5hZ2VyKTtcbiAgICAgICAgICAgICAgICBjb252ZXJzYXRpb25zQ2xpZW50Lmxpc3RlbigpLnRoZW4oY2xpZW50Q29ubmVjdGVkKS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5sb2cgPSAnQ291bGQgbm90IGNvbm5lY3QgdG8gVHdpbGlvOiAnICsgZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNvbnZlcnNhdGlvblN0YXJ0ZWQoY29udmVyc2F0aW9uKSB7XG4gICAgICAgICAgICAkc2NvcGUuJGFwcGx5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2bS5sb2cgPSAnSW4gYW4gYWN0aXZlIENvbnZlcnNhdGlvbic7XG4gICAgICAgICAgICAgICAgYWN0aXZlQ29udmVyc2F0aW9uID0gY29udmVyc2F0aW9uO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghdm0ucHJldmlld01lZGlhKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZtLnByZXZpZXdNZWRpYSA9IGNvbnZlcnNhdGlvbi5sb2NhbE1lZGlhO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBXaGVuIGEgcGFydGljaXBhbnQgam9pbnMsIGRyYXcgdGhlaXIgdmlkZW8gb24gc2NyZWVuXG4gICAgICAgICAgICBjb252ZXJzYXRpb24ub24oJ3BhcnRpY2lwYW50Q29ubmVjdGVkJywgZnVuY3Rpb24gKHBhcnRpY2lwYW50KSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2cubG9nKCdQYXJ0aWNpcGFudCBcIicgKyBwYXJ0aWNpcGFudC5pZGVudGl0eSArICdcIiBjb25uZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgdm0ubG9nID0gJ1BhcnRpY2lwYW50IFwiJyArIHBhcnRpY2lwYW50LmlkZW50aXR5ICsgJ1wiIGNvbm5lY3RlZCc7XG4gICAgICAgICAgICAgICAgICAgIHZtLnJlbW90ZVBhcnRpY2lwYW50c1twYXJ0aWNpcGFudC5zaWRdID0gcGFydGljaXBhbnQubWVkaWE7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gV2hlbiBhIHBhcnRpY2lwYW50IGRpc2Nvbm5lY3RzLCBub3RlIGluIGxvZ1xuICAgICAgICAgICAgY29udmVyc2F0aW9uLm9uKCdwYXJ0aWNpcGFudERpc2Nvbm5lY3RlZCcsIGZ1bmN0aW9uIChwYXJ0aWNpcGFudCkge1xuICAgICAgICAgICAgICAgICRzY29wZS4kYXBwbHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2bS5sb2cgPSAnUGFydGljaXBhbnQgXCInICsgcGFydGljaXBhbnQuaWRlbnRpdHkgKyAnXCIgZGlzY29ubmVjdGVkJztcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZtLnJlbW90ZVBhcnRpY2lwYW50c1twYXJ0aWNpcGFudC5zaWRdO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFdoZW4gdGhlIGNvbnZlcnNhdGlvbiBlbmRzLCBzdG9wIGNhcHR1cmluZyBsb2NhbCB2aWRlb1xuICAgICAgICAgICAgY29udmVyc2F0aW9uLm9uKCdkaXNjb25uZWN0ZWQnLCBmdW5jdGlvbiAoY29udmVyc2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZtLmxvZyA9ICdDb25uZWN0ZWQgdG8gVHdpbGlvLiBMaXN0ZW5pbmcgZm9yIGluY29taW5nIEludml0ZXMgYXMgXCInICsgY29udmVyc2F0aW9uc0NsaWVudC5pZGVudGl0eSArICdcIic7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB2bS5jbGllbnRDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjb252ZXJzYXRpb24ubG9jYWxNZWRpYS5zdG9wKCk7XG4gICAgICAgICAgICAgICAgY29udmVyc2F0aW9uLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICBhY3RpdmVDb252ZXJzYXRpb24gPSBudWxsO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gY2xpZW50Q29ubmVjdGVkKCkge1xuICAgICAgICAgICAgJHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdm0uY2xpZW50Q29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB2bS5sb2cgPSAnQ29ubmVjdGVkIHRvIFR3aWxpby4gTGlzdGVuaW5nIGZvciBpbmNvbWluZyBJbnZpdGVzIGFzIFwiJyArIGNvbnZlcnNhdGlvbnNDbGllbnQuaWRlbnRpdHkgKyAnXCInO1xuICAgICAgICAgICAgICAgICRsb2cubG9nKCdDb25uZWN0ZWQgdG8gVHdpbGlvLiBMaXN0ZW5pbmcgZm9yIGluY29taW5nIEludml0ZXMgYXMgXCInICsgY29udmVyc2F0aW9uc0NsaWVudC5pZGVudGl0eSArICdcIicpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbnNDbGllbnQub24oJ2ludml0ZScsIGZ1bmN0aW9uIChpbnZpdGUpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuJGFwcGx5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdm0ubG9nID0gJ0luY29taW5nIGludml0ZSBmcm9tOiAnICsgaW52aXRlLmZyb207XG4gICAgICAgICAgICAgICAgICAgIGludml0ZS5hY2NlcHQoKS50aGVuKGNvbnZlcnNhdGlvblN0YXJ0ZWQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRUb2tlbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0b2tlblNlcnZpY2UuZ2V0VG9rZW4oKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuID0gZGF0YS50b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgaWRlbnRpdHkgPSBkYXRhLmlkZW50aXR5O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KSgpO1xuIiwiLy9BdXRob3IgTXVyYWdpamltYW5hIFJpY2hhcmQgc3RyaW11cEBnbWFpbC5jb20gYmVhc3RhcjQ1N0BnbWFpbC5jb21cblxuICBhbmd1bGFyLm1vZHVsZSgnc3luYycpXG4gIC5jb250cm9sbGVyKCdNZXNzYWdlQ29udHJvbGxlcicsIGZ1bmN0aW9uICgkaHR0cCwkc2NvcGUsJHEsJHJvb3RTY29wZSkge1xuICAgICAgICQuYWpheFNldHVwKHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnWC1DU1JGLVRPS0VOJzogJCgnbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpLmF0dHIoJ2NvbnRlbnQnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIFxuICAgICAgICAgJHNjb3BlLm5hbWU9XCJNdXJhZ2lqaW1hbmFcIjtcbiAgICAgICAgIHZhciBwb3N0cz0kaHR0cC5nZXQoJHJvb3RTY29wZS5lbmRQb2ludCArICcvYXBpL3YxL3Bvc3QnKSxcbiAgICAgICAgICAgICBpbnN0aXR1dGlvbnM9JGh0dHAuZ2V0KCRyb290U2NvcGUuZW5kUG9pbnQgKyAnL2FwaS92MS9wb3N0Jyk7XG5cbiAgICAgICAgICAkcS5hbGwoW3Bvc3RzLGluc3RpdHV0aW9uc10pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICB2YXIgdG1wID0gW107XG4gICAgICAgICAgICBhbmd1bGFyLmZvckVhY2gocmVzdWx0LCBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICB0bXAucHVzaChyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdG1wO1xuICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24odG1wUmVzdWx0KSB7XG4gICAgICAgICAgICAgIC8vIHBvc3RzPXRtcFJlc3VsdDtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYW5ndWxhci50b0pzb24odG1wUmVzdWx0WzBdLCB0cnVlKSk7XG4gICAgICAgICAgICAkc2NvcGUucG9zdHMgPSB0bXBSZXN1bHRbMF07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAkKCcucG9zdC1pbicpLmF0d2hvKHtcbiAgICAgICAgICAgIGF0OiBcIkBcIixcbiAgICAgICAgICAgIGRhdGE6WydQZXRlcicsICdUb20nLCAnQW5uZSddLFxuXG4gICAgICAgICB9KTtcblxuICB9KTtcbiIsIlxuYW5ndWxhci5tb2R1bGUoJ3N5bmMnKVxuLmNvbnRyb2xsZXIoXCJUdXRvcmlhbE1vZGFsXCIsIGZ1bmN0aW9uKCRzY29wZSkge1xuXG4gICRzY29wZS5vcGVuID0gZnVuY3Rpb24oKSB7XG4gICAgJHNjb3BlLnNob3dNb2RhbCA9IHRydWU7XG4gIH07XG4gICRzY29wZS5vayA9IGZ1bmN0aW9uKCkge1xuICAgICRzY29wZS5zaG93TW9kYWwgPSBmYWxzZTtcbiAgfTtcblxuICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gICAgJHNjb3BlLnNob3dNb2RhbCA9IGZhbHNlO1xuICB9O1xuXG59KTtcblxuYW5ndWxhci5tb2R1bGUoJ3N5bmMnKVxuLmNvbnRyb2xsZXIoXCJTdHJpbWluTW9kYWxcIiwgZnVuY3Rpb24oJHNjb3BlKSB7XG5cbiAgJHNjb3BlLm9wZW4gPSBmdW5jdGlvbigpIHtcbiAgICAkc2NvcGUuc2hvd01vZGFsID0gdHJ1ZTtcbiAgfTtcbiAgJHNjb3BlLm9rID0gZnVuY3Rpb24oKSB7XG4gICAgJHNjb3BlLnNob3dNb2RhbCA9IGZhbHNlO1xuICB9O1xuXG4gICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgICAkc2NvcGUuc2hvd01vZGFsID0gZmFsc2U7XG4gIH07XG5cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
