/*! For license information please see Content.js.LICENSE.txt */
define('Content', ['react', '@lumx/react', 'lumapps-sdk-js'], function (
    __WEBPACK_EXTERNAL_MODULE__959__,
    __WEBPACK_EXTERNAL_MODULE__482__,
    __WEBPACK_EXTERNAL_MODULE__441__,
) {
    return (function () {
        'use strict';
        function __webpack_require__(moduleId) {
            var cachedModule = __webpack_module_cache__[moduleId];
            if (void 0 !== cachedModule) return cachedModule.exports;
            var module = (__webpack_module_cache__[moduleId] = { exports: {} });
            return __webpack_modules__[moduleId](module, module.exports, __webpack_require__), module.exports;
        }
        var deferred,
            __webpack_modules__ = {
                71: function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
                    function mergeLiteral(parts) {
                        return parts.length < 2
                            ? parts
                            : parts.reduce(function (all, part) {
                                  var lastPart = all[all.length - 1];
                                  return (
                                      lastPart && lastPart.type === PART_TYPE.literal && part.type === PART_TYPE.literal
                                          ? (lastPart.value += part.value)
                                          : all.push(part),
                                      all
                                  );
                              }, []);
                    }
                    function isFormatXMLElementFn(el) {
                        return 'function' == typeof el;
                    }
                    function formatToParts(
                        els,
                        locales,
                        formatters,
                        formats,
                        values,
                        currentPluralValue,
                        originalMessage,
                    ) {
                        if (
                            1 === els.length &&
                            (0, _formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__.e)(els[0])
                        )
                            return [{ type: PART_TYPE.literal, value: els[0].value }];
                        for (var result = [], _i = 0, els_1 = els; _i < els_1.length; _i++) {
                            var el = els_1[_i];
                            if ((0, _formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__.e)(el))
                                result.push({ type: PART_TYPE.literal, value: el.value });
                            else if ((0, _formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__.i)(el))
                                'number' == typeof currentPluralValue &&
                                    result.push({
                                        type: PART_TYPE.literal,
                                        value: formatters.getNumberFormat(locales).format(currentPluralValue),
                                    });
                            else {
                                var varName = el.value;
                                if (!values || !(varName in values))
                                    throw new _error__WEBPACK_IMPORTED_MODULE_1__.e(varName, originalMessage);
                                var value = values[varName];
                                if ((0, _formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__.b)(el))
                                    (value && 'string' != typeof value && 'number' != typeof value) ||
                                        (value =
                                            'string' == typeof value || 'number' == typeof value ? String(value) : ''),
                                        result.push({
                                            type: 'string' == typeof value ? PART_TYPE.literal : PART_TYPE.object,
                                            value: value,
                                        });
                                else if ((0, _formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__.c)(el)) {
                                    var style =
                                        'string' == typeof el.style
                                            ? formats.date[el.style]
                                            : (0, _formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__.d)(
                                                    el.style,
                                                )
                                              ? el.style.parsedOptions
                                              : void 0;
                                    result.push({
                                        type: PART_TYPE.literal,
                                        value: formatters.getDateTimeFormat(locales, style).format(value),
                                    });
                                } else if ((0, _formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__.l)(el)) {
                                    style =
                                        'string' == typeof el.style
                                            ? formats.time[el.style]
                                            : (0, _formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__.d)(
                                                    el.style,
                                                )
                                              ? el.style.parsedOptions
                                              : void 0;
                                    result.push({
                                        type: PART_TYPE.literal,
                                        value: formatters.getDateTimeFormat(locales, style).format(value),
                                    });
                                } else if ((0, _formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__.f)(el)) {
                                    style =
                                        'string' == typeof el.style
                                            ? formats.number[el.style]
                                            : (0, _formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__.g)(
                                                    el.style,
                                                )
                                              ? el.style.parsedOptions
                                              : void 0;
                                    style && style.scale && (value *= style.scale || 1),
                                        result.push({
                                            type: PART_TYPE.literal,
                                            value: formatters.getNumberFormat(locales, style).format(value),
                                        });
                                } else {
                                    if ((0, _formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__.k)(el)) {
                                        var children = el.children,
                                            value_1 = el.value,
                                            formatFn = values[value_1];
                                        if (!isFormatXMLElementFn(formatFn))
                                            throw new _error__WEBPACK_IMPORTED_MODULE_1__.d(
                                                value_1,
                                                'function',
                                                originalMessage,
                                            );
                                        var parts = formatToParts(
                                                children,
                                                locales,
                                                formatters,
                                                formats,
                                                values,
                                                currentPluralValue,
                                            ),
                                            chunks = formatFn(
                                                parts.map(function (p) {
                                                    return p.value;
                                                }),
                                            );
                                        Array.isArray(chunks) || (chunks = [chunks]),
                                            result.push.apply(
                                                result,
                                                chunks.map(function (c) {
                                                    return {
                                                        type:
                                                            'string' == typeof c ? PART_TYPE.literal : PART_TYPE.object,
                                                        value: c,
                                                    };
                                                }),
                                            );
                                    }
                                    if ((0, _formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__.j)(el)) {
                                        var opt = el.options[value] || el.options.other;
                                        if (!opt)
                                            throw new _error__WEBPACK_IMPORTED_MODULE_1__.c(
                                                el.value,
                                                value,
                                                Object.keys(el.options),
                                                originalMessage,
                                            );
                                        result.push.apply(
                                            result,
                                            formatToParts(opt.value, locales, formatters, formats, values),
                                        );
                                    } else if (
                                        (0, _formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__.h)(el)
                                    ) {
                                        opt = el.options['='.concat(value)];
                                        if (!opt) {
                                            if (!Intl.PluralRules)
                                                throw new _error__WEBPACK_IMPORTED_MODULE_1__.b(
                                                    'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                                                    _error__WEBPACK_IMPORTED_MODULE_1__.a.MISSING_INTL_API,
                                                    originalMessage,
                                                );
                                            var rule = formatters
                                                .getPluralRules(locales, { type: el.pluralType })
                                                .select(value - (el.offset || 0));
                                            opt = el.options[rule] || el.options.other;
                                        }
                                        if (!opt)
                                            throw new _error__WEBPACK_IMPORTED_MODULE_1__.c(
                                                el.value,
                                                value,
                                                Object.keys(el.options),
                                                originalMessage,
                                            );
                                        result.push.apply(
                                            result,
                                            formatToParts(
                                                opt.value,
                                                locales,
                                                formatters,
                                                formats,
                                                values,
                                                value - (el.offset || 0),
                                            ),
                                        );
                                    } else;
                                }
                            }
                        }
                        return mergeLiteral(result);
                    }
                    __webpack_require__.d(__webpack_exports__, {
                        a: function () {
                            return PART_TYPE;
                        },
                        b: function () {
                            return formatToParts;
                        },
                        c: function () {
                            return isFormatXMLElementFn;
                        },
                    });
                    var PART_TYPE,
                        _formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(361),
                        _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(732);
                    !(function (PART_TYPE) {
                        (PART_TYPE[(PART_TYPE.literal = 0)] = 'literal'),
                            (PART_TYPE[(PART_TYPE.object = 1)] = 'object');
                    })(PART_TYPE || (PART_TYPE = {}));
                },
                72: function (__unused_webpack_module, exports) {
                    function z(a) {
                        if ('object' == typeof a && null !== a) {
                            var u = a.$$typeof;
                            switch (u) {
                                case c:
                                    switch (((a = a.type), a)) {
                                        case l:
                                        case m:
                                        case e:
                                        case g:
                                        case f:
                                        case p:
                                            return a;
                                        default:
                                            switch (((a = a && a.$$typeof), a)) {
                                                case k:
                                                case n:
                                                case t:
                                                case r:
                                                case h:
                                                    return a;
                                                default:
                                                    return u;
                                            }
                                    }
                                case d:
                                    return u;
                            }
                        }
                    }
                    function A(a) {
                        return z(a) === m;
                    }
                    var b = 'function' == typeof Symbol && Symbol.for,
                        c = b ? Symbol.for('react.element') : 60103,
                        d = b ? Symbol.for('react.portal') : 60106,
                        e = b ? Symbol.for('react.fragment') : 60107,
                        f = b ? Symbol.for('react.strict_mode') : 60108,
                        g = b ? Symbol.for('react.profiler') : 60114,
                        h = b ? Symbol.for('react.provider') : 60109,
                        k = b ? Symbol.for('react.context') : 60110,
                        l = b ? Symbol.for('react.async_mode') : 60111,
                        m = b ? Symbol.for('react.concurrent_mode') : 60111,
                        n = b ? Symbol.for('react.forward_ref') : 60112,
                        p = b ? Symbol.for('react.suspense') : 60113,
                        q = b ? Symbol.for('react.suspense_list') : 60120,
                        r = b ? Symbol.for('react.memo') : 60115,
                        t = b ? Symbol.for('react.lazy') : 60116,
                        v = b ? Symbol.for('react.block') : 60121,
                        w = b ? Symbol.for('react.fundamental') : 60117,
                        x = b ? Symbol.for('react.responder') : 60118,
                        y = b ? Symbol.for('react.scope') : 60119;
                    (exports.AsyncMode = l),
                        (exports.ConcurrentMode = m),
                        (exports.ContextConsumer = k),
                        (exports.ContextProvider = h),
                        (exports.Element = c),
                        (exports.ForwardRef = n),
                        (exports.Fragment = e),
                        (exports.Lazy = t),
                        (exports.Memo = r),
                        (exports.Portal = d),
                        (exports.Profiler = g),
                        (exports.StrictMode = f),
                        (exports.Suspense = p),
                        (exports.isAsyncMode = function (a) {
                            return A(a) || z(a) === l;
                        }),
                        (exports.isConcurrentMode = A),
                        (exports.isContextConsumer = function (a) {
                            return z(a) === k;
                        }),
                        (exports.isContextProvider = function (a) {
                            return z(a) === h;
                        }),
                        (exports.isElement = function (a) {
                            return 'object' == typeof a && null !== a && a.$$typeof === c;
                        }),
                        (exports.isForwardRef = function (a) {
                            return z(a) === n;
                        }),
                        (exports.isFragment = function (a) {
                            return z(a) === e;
                        }),
                        (exports.isLazy = function (a) {
                            return z(a) === t;
                        }),
                        (exports.isMemo = function (a) {
                            return z(a) === r;
                        }),
                        (exports.isPortal = function (a) {
                            return z(a) === d;
                        }),
                        (exports.isProfiler = function (a) {
                            return z(a) === g;
                        }),
                        (exports.isStrictMode = function (a) {
                            return z(a) === f;
                        }),
                        (exports.isSuspense = function (a) {
                            return z(a) === p;
                        }),
                        (exports.isValidElementType = function (a) {
                            return (
                                'string' == typeof a ||
                                'function' == typeof a ||
                                a === e ||
                                a === m ||
                                a === g ||
                                a === f ||
                                a === p ||
                                a === q ||
                                ('object' == typeof a &&
                                    null !== a &&
                                    (a.$$typeof === t ||
                                        a.$$typeof === r ||
                                        a.$$typeof === h ||
                                        a.$$typeof === k ||
                                        a.$$typeof === n ||
                                        a.$$typeof === w ||
                                        a.$$typeof === x ||
                                        a.$$typeof === y ||
                                        a.$$typeof === v))
                            );
                        }),
                        (exports.typeOf = z);
                },
                146: function (module, __unused_webpack_exports, __webpack_require__) {
                    function getStatics(component) {
                        return reactIs.isMemo(component)
                            ? MEMO_STATICS
                            : TYPE_STATICS[component.$$typeof] || REACT_STATICS;
                    }
                    var reactIs = __webpack_require__(404),
                        REACT_STATICS = {
                            childContextTypes: !0,
                            contextType: !0,
                            contextTypes: !0,
                            defaultProps: !0,
                            displayName: !0,
                            getDefaultProps: !0,
                            getDerivedStateFromError: !0,
                            getDerivedStateFromProps: !0,
                            mixins: !0,
                            propTypes: !0,
                            type: !0,
                        },
                        KNOWN_STATICS = {
                            name: !0,
                            length: !0,
                            prototype: !0,
                            caller: !0,
                            callee: !0,
                            arguments: !0,
                            arity: !0,
                        },
                        MEMO_STATICS = {
                            $$typeof: !0,
                            compare: !0,
                            defaultProps: !0,
                            displayName: !0,
                            propTypes: !0,
                            type: !0,
                        },
                        TYPE_STATICS = {};
                    (TYPE_STATICS[reactIs.ForwardRef] = {
                        $$typeof: !0,
                        render: !0,
                        defaultProps: !0,
                        displayName: !0,
                        propTypes: !0,
                    }),
                        (TYPE_STATICS[reactIs.Memo] = MEMO_STATICS);
                    var defineProperty = Object.defineProperty,
                        getOwnPropertyNames = Object.getOwnPropertyNames,
                        getOwnPropertySymbols = Object.getOwnPropertySymbols,
                        getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
                        getPrototypeOf = Object.getPrototypeOf,
                        objectPrototype = Object.prototype;
                    module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
                        if ('string' != typeof sourceComponent) {
                            if (objectPrototype) {
                                var inheritedComponent = getPrototypeOf(sourceComponent);
                                inheritedComponent &&
                                    inheritedComponent !== objectPrototype &&
                                    hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
                            }
                            var keys = getOwnPropertyNames(sourceComponent);
                            getOwnPropertySymbols && (keys = keys.concat(getOwnPropertySymbols(sourceComponent)));
                            for (
                                var targetStatics = getStatics(targetComponent),
                                    sourceStatics = getStatics(sourceComponent),
                                    i = 0;
                                i < keys.length;
                                ++i
                            ) {
                                var key = keys[i];
                                if (
                                    !(
                                        KNOWN_STATICS[key] ||
                                        (blacklist && blacklist[key]) ||
                                        (sourceStatics && sourceStatics[key]) ||
                                        (targetStatics && targetStatics[key])
                                    )
                                ) {
                                    var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                                    try {
                                        defineProperty(targetComponent, key, descriptor);
                                    } catch (e) {}
                                }
                            }
                        }
                        return targetComponent;
                    };
                },
                404: function (module, __unused_webpack_exports, __webpack_require__) {
                    module.exports = __webpack_require__(72);
                },
                441: function (module) {
                    module.exports = __WEBPACK_EXTERNAL_MODULE__441__;
                },
                482: function (module) {
                    module.exports = __WEBPACK_EXTERNAL_MODULE__482__;
                },
                587: function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
                    function createFastMemoizeCache(store) {
                        return {
                            create: function () {
                                return {
                                    get: function (key) {
                                        return store[key];
                                    },
                                    set: function (key, value) {
                                        store[key] = value;
                                    },
                                };
                            },
                        };
                    }
                    __webpack_require__.d(__webpack_exports__, {
                        a: function () {
                            return IntlMessageFormat;
                        },
                    });
                    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(635),
                        _formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(361),
                        _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(819),
                        _formatters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71),
                        IntlMessageFormat = (function () {
                            function IntlMessageFormat(message, locales, overrideFormats, opts) {
                                var defaultConfig,
                                    configs,
                                    cache,
                                    _this = this;
                                if (
                                    (void 0 === locales && (locales = IntlMessageFormat.defaultLocale),
                                    (this.formatterCache = { number: {}, dateTime: {}, pluralRules: {} }),
                                    (this.format = function (values) {
                                        var parts = _this.formatToParts(values);
                                        if (1 === parts.length) return parts[0].value;
                                        var result = parts.reduce(function (all, part) {
                                            return (
                                                all.length &&
                                                part.type === _formatters__WEBPACK_IMPORTED_MODULE_3__.a.literal &&
                                                'string' == typeof all[all.length - 1]
                                                    ? (all[all.length - 1] += part.value)
                                                    : all.push(part.value),
                                                all
                                            );
                                        }, []);
                                        return result.length <= 1 ? result[0] || '' : result;
                                    }),
                                    (this.formatToParts = function (values) {
                                        return (0, _formatters__WEBPACK_IMPORTED_MODULE_3__.b)(
                                            _this.ast,
                                            _this.locales,
                                            _this.formatters,
                                            _this.formats,
                                            values,
                                            void 0,
                                            _this.message,
                                        );
                                    }),
                                    (this.resolvedOptions = function () {
                                        return { locale: Intl.NumberFormat.supportedLocalesOf(_this.locales)[0] };
                                    }),
                                    (this.getAst = function () {
                                        return _this.ast;
                                    }),
                                    'string' == typeof message)
                                ) {
                                    if (((this.message = message), !IntlMessageFormat.__parse))
                                        throw new TypeError(
                                            'IntlMessageFormat.__parse must be set to process `message` of type `string`',
                                        );
                                    this.ast = IntlMessageFormat.__parse(message, {
                                        ignoreTag: null == opts ? void 0 : opts.ignoreTag,
                                    });
                                } else this.ast = message;
                                if (!Array.isArray(this.ast))
                                    throw new TypeError('A message must be provided as a String or AST.');
                                (this.formats =
                                    ((defaultConfig = IntlMessageFormat.formats),
                                    (configs = overrideFormats),
                                    configs
                                        ? Object.keys(defaultConfig).reduce(
                                              function (all, k) {
                                                  var c1, c2;
                                                  return (
                                                      (all[k] =
                                                          ((c1 = defaultConfig[k]),
                                                          (c2 = configs[k]),
                                                          c2
                                                              ? (0, tslib__WEBPACK_IMPORTED_MODULE_0__.a)(
                                                                    (0, tslib__WEBPACK_IMPORTED_MODULE_0__.a)(
                                                                        (0, tslib__WEBPACK_IMPORTED_MODULE_0__.a)(
                                                                            {},
                                                                            c1 || {},
                                                                        ),
                                                                        c2 || {},
                                                                    ),
                                                                    Object.keys(c1).reduce(function (all, k) {
                                                                        return (
                                                                            (all[k] = (0,
                                                                            tslib__WEBPACK_IMPORTED_MODULE_0__.a)(
                                                                                (0,
                                                                                tslib__WEBPACK_IMPORTED_MODULE_0__.a)(
                                                                                    {},
                                                                                    c1[k],
                                                                                ),
                                                                                c2[k] || {},
                                                                            )),
                                                                            all
                                                                        );
                                                                    }, {}),
                                                                )
                                                              : c1)),
                                                      all
                                                  );
                                              },
                                              (0, tslib__WEBPACK_IMPORTED_MODULE_0__.a)({}, defaultConfig),
                                          )
                                        : defaultConfig)),
                                    (this.locales = locales),
                                    (this.formatters =
                                        (opts && opts.formatters) ||
                                        ((cache = this.formatterCache),
                                        void 0 === cache && (cache = { number: {}, dateTime: {}, pluralRules: {} }),
                                        {
                                            getNumberFormat: (0, _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__.a)(
                                                function () {
                                                    for (var _a, args = [], _i = 0; _i < arguments.length; _i++)
                                                        args[_i] = arguments[_i];
                                                    return new ((_a = Intl.NumberFormat).bind.apply(
                                                        _a,
                                                        (0, tslib__WEBPACK_IMPORTED_MODULE_0__.d)([void 0], args, !1),
                                                    ))();
                                                },
                                                {
                                                    cache: createFastMemoizeCache(cache.number),
                                                    strategy:
                                                        _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__.b.variadic,
                                                },
                                            ),
                                            getDateTimeFormat: (0,
                                            _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__.a)(
                                                function () {
                                                    for (var _a, args = [], _i = 0; _i < arguments.length; _i++)
                                                        args[_i] = arguments[_i];
                                                    return new ((_a = Intl.DateTimeFormat).bind.apply(
                                                        _a,
                                                        (0, tslib__WEBPACK_IMPORTED_MODULE_0__.d)([void 0], args, !1),
                                                    ))();
                                                },
                                                {
                                                    cache: createFastMemoizeCache(cache.dateTime),
                                                    strategy:
                                                        _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__.b.variadic,
                                                },
                                            ),
                                            getPluralRules: (0, _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__.a)(
                                                function () {
                                                    for (var _a, args = [], _i = 0; _i < arguments.length; _i++)
                                                        args[_i] = arguments[_i];
                                                    return new ((_a = Intl.PluralRules).bind.apply(
                                                        _a,
                                                        (0, tslib__WEBPACK_IMPORTED_MODULE_0__.d)([void 0], args, !1),
                                                    ))();
                                                },
                                                {
                                                    cache: createFastMemoizeCache(cache.pluralRules),
                                                    strategy:
                                                        _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__.b.variadic,
                                                },
                                            ),
                                        }));
                            }
                            return (
                                Object.defineProperty(IntlMessageFormat, 'defaultLocale', {
                                    get: function () {
                                        return (
                                            IntlMessageFormat.memoizedDefaultLocale ||
                                                (IntlMessageFormat.memoizedDefaultLocale =
                                                    new Intl.NumberFormat().resolvedOptions().locale),
                                            IntlMessageFormat.memoizedDefaultLocale
                                        );
                                    },
                                    enumerable: !1,
                                    configurable: !0,
                                }),
                                (IntlMessageFormat.memoizedDefaultLocale = null),
                                (IntlMessageFormat.__parse =
                                    _formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_1__.m),
                                (IntlMessageFormat.formats = {
                                    number: {
                                        integer: { maximumFractionDigits: 0 },
                                        currency: { style: 'currency' },
                                        percent: { style: 'percent' },
                                    },
                                    date: {
                                        short: { month: 'numeric', day: 'numeric', year: '2-digit' },
                                        medium: { month: 'short', day: 'numeric', year: 'numeric' },
                                        long: { month: 'long', day: 'numeric', year: 'numeric' },
                                        full: { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' },
                                    },
                                    time: {
                                        short: { hour: 'numeric', minute: 'numeric' },
                                        medium: { hour: 'numeric', minute: 'numeric', second: 'numeric' },
                                        long: {
                                            hour: 'numeric',
                                            minute: 'numeric',
                                            second: 'numeric',
                                            timeZoneName: 'short',
                                        },
                                        full: {
                                            hour: 'numeric',
                                            minute: 'numeric',
                                            second: 'numeric',
                                            timeZoneName: 'short',
                                        },
                                    },
                                }),
                                IntlMessageFormat
                            );
                        })();
                },
                635: function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
                    function __extends(d, b) {
                        function __() {
                            this.constructor = d;
                        }
                        if ('function' != typeof b && null !== b)
                            throw new TypeError('Class extends value ' + String(b) + ' is not a constructor or null');
                        extendStatics(d, b),
                            (d.prototype = null === b ? Object.create(b) : ((__.prototype = b.prototype), new __()));
                    }
                    function __rest(s, e) {
                        var t = {};
                        for (var p in s)
                            Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0 && (t[p] = s[p]);
                        if (null != s && 'function' == typeof Object.getOwnPropertySymbols) {
                            var i = 0;
                            for (p = Object.getOwnPropertySymbols(s); i < p.length; i++)
                                e.indexOf(p[i]) < 0 &&
                                    Object.prototype.propertyIsEnumerable.call(s, p[i]) &&
                                    (t[p[i]] = s[p[i]]);
                        }
                        return t;
                    }
                    function __spreadArray(to, from, pack) {
                        if (pack || 2 === arguments.length)
                            for (var ar, i = 0, l = from.length; i < l; i++)
                                (!ar && i in from) ||
                                    (ar || (ar = Array.prototype.slice.call(from, 0, i)), (ar[i] = from[i]));
                        return to.concat(ar || Array.prototype.slice.call(from));
                    }
                    __webpack_require__.d(__webpack_exports__, {
                        a: function () {
                            return __assign;
                        },
                        b: function () {
                            return __extends;
                        },
                        c: function () {
                            return __rest;
                        },
                        d: function () {
                            return __spreadArray;
                        },
                    });
                    var extendStatics = function (d, b) {
                            return (
                                (extendStatics =
                                    Object.setPrototypeOf ||
                                    ({ __proto__: [] } instanceof Array &&
                                        function (d, b) {
                                            d.__proto__ = b;
                                        }) ||
                                    function (d, b) {
                                        for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
                                    }),
                                extendStatics(d, b)
                            );
                        },
                        __assign = function () {
                            return (
                                (__assign =
                                    Object.assign ||
                                    function (t) {
                                        for (var s, i = 1, n = arguments.length; i < n; i++)
                                            for (var p in ((s = arguments[i]), s))
                                                Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
                                        return t;
                                    }),
                                __assign.apply(this, arguments)
                            );
                        };
                    Object.create, Object.create, 'function' == typeof SuppressedError && SuppressedError;
                },
                732: function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
                    __webpack_require__.d(__webpack_exports__, {
                        a: function () {
                            return ErrorCode;
                        },
                        b: function () {
                            return FormatError;
                        },
                        c: function () {
                            return InvalidValueError;
                        },
                        d: function () {
                            return InvalidValueTypeError;
                        },
                        e: function () {
                            return MissingValueError;
                        },
                    });
                    var ErrorCode,
                        tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(635);
                    !(function (ErrorCode) {
                        (ErrorCode.MISSING_VALUE = 'MISSING_VALUE'),
                            (ErrorCode.INVALID_VALUE = 'INVALID_VALUE'),
                            (ErrorCode.MISSING_INTL_API = 'MISSING_INTL_API');
                    })(ErrorCode || (ErrorCode = {}));
                    var FormatError = (function (_super) {
                            function FormatError(msg, code, originalMessage) {
                                var _this = _super.call(this, msg) || this;
                                return (_this.code = code), (_this.originalMessage = originalMessage), _this;
                            }
                            return (
                                (0, tslib__WEBPACK_IMPORTED_MODULE_0__.b)(FormatError, _super),
                                (FormatError.prototype.toString = function () {
                                    return '[formatjs Error: '.concat(this.code, '] ').concat(this.message);
                                }),
                                FormatError
                            );
                        })(Error),
                        InvalidValueError = (function (_super) {
                            function InvalidValueError(variableId, value, options, originalMessage) {
                                return (
                                    _super.call(
                                        this,
                                        'Invalid values for "'
                                            .concat(variableId, '": "')
                                            .concat(value, '". Options are "')
                                            .concat(Object.keys(options).join('", "'), '"'),
                                        ErrorCode.INVALID_VALUE,
                                        originalMessage,
                                    ) || this
                                );
                            }
                            return (
                                (0, tslib__WEBPACK_IMPORTED_MODULE_0__.b)(InvalidValueError, _super), InvalidValueError
                            );
                        })(FormatError),
                        InvalidValueTypeError = (function (_super) {
                            function InvalidValueTypeError(value, type, originalMessage) {
                                return (
                                    _super.call(
                                        this,
                                        'Value for "'.concat(value, '" must be of type ').concat(type),
                                        ErrorCode.INVALID_VALUE,
                                        originalMessage,
                                    ) || this
                                );
                            }
                            return (
                                (0, tslib__WEBPACK_IMPORTED_MODULE_0__.b)(InvalidValueTypeError, _super),
                                InvalidValueTypeError
                            );
                        })(FormatError),
                        MissingValueError = (function (_super) {
                            function MissingValueError(variableId, originalMessage) {
                                return (
                                    _super.call(
                                        this,
                                        'The intl string context variable "'
                                            .concat(variableId, '" was not provided to the string "')
                                            .concat(originalMessage, '"'),
                                        ErrorCode.MISSING_VALUE,
                                        originalMessage,
                                    ) || this
                                );
                            }
                            return (
                                (0, tslib__WEBPACK_IMPORTED_MODULE_0__.b)(MissingValueError, _super), MissingValueError
                            );
                        })(FormatError);
                },
                959: function (module) {
                    module.exports = __WEBPACK_EXTERNAL_MODULE__959__;
                },
                970: function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
                    function utils_invariantIntlContext(intl) {
                        (0, utils.a)(
                            intl,
                            '[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.',
                        );
                    }
                    function shallowEqual(objA, objB) {
                        if (objA === objB) return !0;
                        if (!objA || !objB) return !1;
                        var aKeys = Object.keys(objA),
                            bKeys = Object.keys(objB),
                            len = aKeys.length;
                        if (bKeys.length !== len) return !1;
                        for (var i = 0; i < len; i++) {
                            var key = aKeys[i];
                            if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) return !1;
                        }
                        return !0;
                    }
                    function useIntl() {
                        var intl = external_react_.useContext(Context);
                        return utils_invariantIntlContext(intl), intl;
                    }
                    function FormattedMessage(props) {
                        var intl = useIntl(),
                            formatMessage = intl.formatMessage,
                            _a = intl.textComponent,
                            Text = void 0 === _a ? external_react_.Fragment : _a,
                            id = props.id,
                            description = props.description,
                            defaultMessage = props.defaultMessage,
                            values = props.values,
                            children = props.children,
                            _b = props.tagName,
                            Component = void 0 === _b ? Text : _b,
                            ignoreTag = props.ignoreTag,
                            descriptor = { id: id, description: description, defaultMessage: defaultMessage },
                            nodes = formatMessage(descriptor, values, { ignoreTag: ignoreTag });
                        return 'function' == typeof children
                            ? children(Array.isArray(nodes) ? nodes : [nodes])
                            : Component
                              ? external_react_.createElement(Component, null, external_react_.Children.toArray(nodes))
                              : external_react_.createElement(external_react_.Fragment, null, nodes);
                    }
                    function processIntlConfig(config) {
                        return {
                            locale: config.locale,
                            timeZone: config.timeZone,
                            fallbackOnEmptyString: config.fallbackOnEmptyString,
                            formats: config.formats,
                            textComponent: config.textComponent,
                            messages: config.messages,
                            defaultLocale: config.defaultLocale,
                            defaultFormats: config.defaultFormats,
                            onError: config.onError,
                            wrapRichTextChunksInFragment: config.wrapRichTextChunksInFragment,
                            defaultRichTextElements: config.defaultRichTextElements,
                        };
                    }
                    function assignUniqueKeysToFormatXMLElementFnArgument(values) {
                        return values
                            ? Object.keys(values).reduce(function (acc, k) {
                                  var formatXMLElementFn,
                                      v = values[k];
                                  return (
                                      (acc[k] = (0, formatters.c)(v)
                                          ? ((formatXMLElementFn = v),
                                            function (parts) {
                                                return formatXMLElementFn(external_react_.Children.toArray(parts));
                                            })
                                          : v),
                                      acc
                                  );
                              }, {})
                            : values;
                    }
                    function ownKeys(e, r) {
                        var t = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(e);
                            r &&
                                (o = o.filter(function (r) {
                                    return Object.getOwnPropertyDescriptor(e, r).enumerable;
                                })),
                                t.push.apply(t, o);
                        }
                        return t;
                    }
                    function _objectSpread(e) {
                        for (var r = 1; r < arguments.length; r++) {
                            var t = null != arguments[r] ? arguments[r] : {};
                            r % 2
                                ? ownKeys(Object(t), !0).forEach(function (r) {
                                      _defineProperty(e, r, t[r]);
                                  })
                                : Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                  : ownKeys(Object(t)).forEach(function (r) {
                                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                                    });
                        }
                        return e;
                    }
                    function _defineProperty(e, r, t) {
                        return (
                            (r = _toPropertyKey(r)) in e
                                ? Object.defineProperty(e, r, {
                                      value: t,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[r] = t),
                            e
                        );
                    }
                    function _toPropertyKey(t) {
                        var i = _toPrimitive(t, 'string');
                        return 'symbol' == typeof i ? i : i + '';
                    }
                    function _toPrimitive(t, r) {
                        if ('object' != typeof t || !t) return t;
                        var e = t[Symbol.toPrimitive];
                        if (void 0 !== e) {
                            var i = e.call(t, r || 'default');
                            if ('object' != typeof i) return i;
                            throw new TypeError('@@toPrimitive must return a primitive value.');
                        }
                        return ('string' === r ? String : Number)(t);
                    }
                    __webpack_require__.r(__webpack_exports__),
                        __webpack_require__.d(__webpack_exports__, {
                            Widget: function () {
                                return NotificationAwareWidget;
                            },
                        });
                    var external_react_ = __webpack_require__(959),
                        external_react_default = __webpack_require__.n(external_react_),
                        tslib_es6 = __webpack_require__(635),
                        IntlContext = (__webpack_require__(146), external_react_.createContext(null)),
                        IntlProvider = (IntlContext.Consumer, IntlContext.Provider),
                        Provider = IntlProvider,
                        Context = IntlContext,
                        utils = __webpack_require__(672),
                        src_utils = __webpack_require__(683),
                        DEFAULT_INTL_CONFIG = (0, tslib_es6.a)((0, tslib_es6.a)({}, src_utils.a), {
                            textComponent: external_react_.Fragment,
                        });
                    FormattedMessage.displayName = 'FormattedMessage';
                    var MemoizedFormattedMessage = external_react_.memo(
                        FormattedMessage,
                        function (prevProps, nextProps) {
                            var values = prevProps.values,
                                otherProps = (0, tslib_es6.c)(prevProps, ['values']),
                                nextValues = nextProps.values,
                                nextOtherProps = (0, tslib_es6.c)(nextProps, ['values']);
                            return shallowEqual(nextValues, values) && shallowEqual(otherProps, nextOtherProps);
                        },
                    );
                    MemoizedFormattedMessage.displayName = 'MemoizedFormattedMessage';
                    var message = MemoizedFormattedMessage,
                        src_message = __webpack_require__(205),
                        create_intl = __webpack_require__(842),
                        formatters = __webpack_require__(71),
                        formatMessage = function (config, formatters, descriptor, rawValues) {
                            for (var rest = [], _i = 4; _i < arguments.length; _i++) rest[_i - 4] = arguments[_i];
                            var values = assignUniqueKeysToFormatXMLElementFnArgument(rawValues),
                                chunks = src_message.a.apply(
                                    void 0,
                                    (0, tslib_es6.d)([config, formatters, descriptor, values], rest, !1),
                                );
                            return Array.isArray(chunks) ? external_react_.Children.toArray(chunks) : chunks;
                        },
                        createIntl = function (_a, cache) {
                            var rawDefaultRichTextElements = _a.defaultRichTextElements,
                                config = (0, tslib_es6.c)(_a, ['defaultRichTextElements']),
                                defaultRichTextElements =
                                    assignUniqueKeysToFormatXMLElementFnArgument(rawDefaultRichTextElements),
                                coreIntl = (0, create_intl.a)(
                                    (0, tslib_es6.a)(
                                        (0, tslib_es6.a)((0, tslib_es6.a)({}, DEFAULT_INTL_CONFIG), config),
                                        { defaultRichTextElements: defaultRichTextElements },
                                    ),
                                    cache,
                                );
                            return (0, tslib_es6.a)((0, tslib_es6.a)({}, coreIntl), {
                                formatMessage: formatMessage.bind(
                                    null,
                                    {
                                        locale: coreIntl.locale,
                                        timeZone: coreIntl.timeZone,
                                        formats: coreIntl.formats,
                                        defaultLocale: coreIntl.defaultLocale,
                                        defaultFormats: coreIntl.defaultFormats,
                                        messages: coreIntl.messages,
                                        onError: coreIntl.onError,
                                        defaultRichTextElements: defaultRichTextElements,
                                    },
                                    coreIntl.formatters,
                                ),
                            });
                        },
                        provider_IntlProvider = (function (_super) {
                            function IntlProvider() {
                                var _this = (null !== _super && _super.apply(this, arguments)) || this;
                                return (
                                    (_this.cache = (0, src_utils.c)()),
                                    (_this.state = {
                                        cache: _this.cache,
                                        intl: createIntl(processIntlConfig(_this.props), _this.cache),
                                        prevConfig: processIntlConfig(_this.props),
                                    }),
                                    _this
                                );
                            }
                            return (
                                (0, tslib_es6.b)(IntlProvider, _super),
                                (IntlProvider.getDerivedStateFromProps = function (props, _a) {
                                    var prevConfig = _a.prevConfig,
                                        cache = _a.cache,
                                        config = processIntlConfig(props);
                                    return shallowEqual(prevConfig, config)
                                        ? null
                                        : { intl: createIntl(config, cache), prevConfig: config };
                                }),
                                (IntlProvider.prototype.render = function () {
                                    return (
                                        utils_invariantIntlContext(this.state.intl),
                                        external_react_.createElement(
                                            Provider,
                                            { value: this.state.intl },
                                            this.props.children,
                                        )
                                    );
                                }),
                                (IntlProvider.displayName = 'IntlProvider'),
                                (IntlProvider.defaultProps = DEFAULT_INTL_CONFIG),
                                IntlProvider
                            );
                        })(external_react_.PureComponent),
                        provider = provider_IntlProvider,
                        react_ = __webpack_require__(482),
                        external_lumapps_sdk_js_ = __webpack_require__(441),
                        en_namespaceObject = JSON.parse(
                            '{"settings.time_of_day":"Time of the day","settings.font_size":"Font size","settings.coma_position":"Comma position","settings.coma_position.before":"Before the user name","settings.coma_position.after":"After the user name","hello":"Hello","welcome":"Welcome","good_morning":"Good Morning","good_afternoon":"Good Afternoon","good_evening":"Good Evening"}',
                        ),
                        fr_namespaceObject = JSON.parse(
                            '{"settings.time_of_day":"Moment de la journée","settings.font_size":"Taille de la police","settings.coma_position":"Position de la virgule","settings.coma_position.before":"Avant le nom de l\'utilisateur","settings.coma_position.after":"Après le nom de l\'utilisateur","hello":"Bonjour","welcome":"Bienvenue","good_morning":"Bonjour","good_afternoon":"Bonjour","good_evening":"Bonjour"}',
                        ),
                        de_namespaceObject = JSON.parse(
                            '{"settings.time_of_day":"Tageszeit","settings.font_size":"Schriftgröße","settings.coma_position":"Koma-Stellung","settings.coma_position.before":"Vor dem Benutzernamen","settings.coma_position.after":"Nach dem Benutzernamen","hello":"Guten Tag","welcome":"Willkommen","good_morning":"Guten Morgen","good_afternoon":"Guten Tag","good_evening":"Guten Abend"}',
                        ),
                        es_namespaceObject = JSON.parse(
                            '{"settings.time_of_day":"Hora del día","settings.font_size":"Tamaño de letra","settings.coma_position":"Posición de coma","settings.coma_position.before":"Antes del nombre de usuario","settings.coma_position.after":"Después del nombre de usuario","hello":"Hola","welcome":"Bienvenido","good_morning":"Buenos días","good_afternoon":"Buenas tardes","good_evening":"Buenas tardes"}',
                        ),
                        jp_namespaceObject = JSON.parse(
                            '{"settings.stime_of_day":"時間","settings.font_size":"文字サイズ","settings.coma_position":"昏睡状態","settings.coma_position.before":"ユーザー名の前に","settings.coma_position.after":"ユーザー名の後","hello":"こんにちは","welcome":"ようこそ","good_morning":"おはようございます","good_afternoon":"こんにちは","good_evening":"こんばんは"}',
                        ),
                        it_namespaceObject = JSON.parse(
                            '{"settings.time_of_day":"Moment de la journée","settings.font_size":"Dimensione del carattere","settings.coma_position":"Posizione di coma","settings.coma_position.before":"Prima del nome utente","settings.coma_position.after":"Dopo il nome dell\'utente","hello":"Ciao","welcome":"Benvenuto","good_morning":"Buongiorno","good_afternoon":"Buon pomeriggio","good_evening":"Buona sera"}',
                        ),
                        ch_namespaceObject = JSON.parse(
                            '{"settings.time_of_day":"一天中的时间","settings.font_size":"字体大小","settings.coma_position":"昏迷位置","settings.coma_position.before":"在用户名之前","settings.coma_position.after":"在用户名之后","hello":"你好","welcome":"欢迎","good_morning":"早上好","good_afternoon":"下午好","good_evening":"晚上好"}',
                        ),
                        nl_namespaceObject = JSON.parse(
                            '{"settings.time_of_day":"Tijd van de dag","settings.font_size":"Lettergrootte","settings.coma_position":"Comapositie","settings.coma_position.before":"Voor de gebruikersnaam","settings.coma_position.after":"Na de gebruikersnaam","hello":"Hallo","welcome":"welkom","good_morning":"Goedemorgen","good_afternoon":"Goedemiddag","good_evening":"Goedenavond"}',
                        ),
                        pt_namespaceObject = JSON.parse(
                            '{"settings.time_of_day":"Hora do dia","settings.font_size":"Tamanho da letra","settings.coma_position":"Posição de coma","settings.coma_position.before":"Antes do nome de utilizador","settings.coma_position.after":"Depois do nome de utilizador","hello":"Olá","welcome":"Bem-vindo(a)","good_morning":"Bom dia","good_afternoon":"Boa tarde","good_evening":"Boa noite"}',
                        ),
                        pt_br_namespaceObject = JSON.parse(
                            '{"settings.time_of_day":"Horário do dia","settings.font_size":"Tamanho da fonte","settings.coma_position":"Posição de coma","settings.coma_position.before":"Antes do nome de usuário","settings.coma_position.after":"Após o nome do usuário","hello":"Olá","welcome":"Bem-vindo(a)","good_morning":"Bom dia","good_afternoon":"Boa tarde","good_evening":"Boa noite"}',
                        ),
                        pl_namespaceObject = JSON.parse(
                            '{"settings.time_of_day":"Pora dnia","settings.font_size":"Rozmiar czcionki","settings.coma_position":"Pozycja śpiączki","settings.coma_position.before":"Przed nazwą użytkownika","settings.coma_position.after":"Po nazwie użytkownika","hello":"Witam","welcome":"Witamy","good_morning":"Dzień dobry","good_afternoon":"Dzień dobry","good_evening":"Dobry wieczór"}',
                        );
                    const Widget = (_ref) => {
                            let {
                                value: value = {},
                                globalValue: globalValue = {},
                                theme: theme = react_.Theme.light,
                            } = _ref;
                            const {
                                    displayWelcome: displayWelcome,
                                    fontSize: fontSize,
                                    comaPosition: comaPosition,
                                } = value,
                                { firstName: firstName } = (0, external_lumapps_sdk_js_.useCurrentUser)(),
                                hour = new Date().getHours();
                            let welcomeId = '';
                            welcomeId = hour < 12 ? 'good_morning' : hour < 18 ? 'good_afternoon' : 'good_evening';
                            return external_react_default().createElement(
                                'div',
                                {
                                    className: 'widget-welcome',
                                    style: _objectSpread(
                                        _objectSpread(
                                            {},
                                            {
                                                color: theme === react_.Theme.dark ? 'wihte' : 'black',
                                                fontSize: fontSize ? fontSize.value : 16,
                                            },
                                        ),
                                        {},
                                        { overflowWrap: 'anywhere' },
                                    ),
                                },
                                displayWelcome
                                    ? external_react_default().createElement(message, { id: welcomeId })
                                    : external_react_default().createElement(message, { id: 'welcome' }),
                                comaPosition && 'before' === comaPosition.value && ',',
                                external_react_default().createElement('span', null, ' ' + firstName),
                                !comaPosition || ('after' === comaPosition.value && ','),
                            );
                        },
                        NotificationAwareWidget = (props) => {
                            const { displayLanguage: displayLanguage } = (0, external_lumapps_sdk_js_.useLanguage)(),
                                messages = external_react_default().useMemo(
                                    () => ({
                                        en: en_namespaceObject,
                                        fr: fr_namespaceObject,
                                        de: de_namespaceObject,
                                        es: es_namespaceObject,
                                        jp: jp_namespaceObject,
                                        ja: jp_namespaceObject,
                                        it: it_namespaceObject,
                                        ch: ch_namespaceObject,
                                        nl: nl_namespaceObject,
                                        pl: pl_namespaceObject,
                                        pt: pt_namespaceObject,
                                        'pt-BR': pt_br_namespaceObject,
                                        'pt-br': pt_br_namespaceObject,
                                    }),
                                    [],
                                ),
                                lang = (0, external_react_.useMemo)(
                                    () =>
                                        Object.keys(messages).includes(displayLanguage.replace('_', '-'))
                                            ? displayLanguage.replace('_', '-')
                                            : 'en',
                                    [displayLanguage, messages],
                                );
                            return external_react_default().createElement(
                                provider,
                                { locale: lang, messages: messages[lang] },
                                external_react_default().createElement(
                                    external_lumapps_sdk_js_.NotificationsProvider,
                                    null,
                                    external_react_default().createElement(
                                        external_lumapps_sdk_js_.PredefinedErrorBoundary,
                                        null,
                                        external_react_default().createElement(Widget, props),
                                    ),
                                ),
                            );
                        };
                },
            },
            __webpack_module_cache__ = {};
        (__webpack_require__.m = __webpack_modules__),
            (deferred = []),
            (__webpack_require__.O = function (result, chunkIds, fn, priority) {
                if (!chunkIds) {
                    var notFulfilled = Infinity;
                    for (i = 0; i < deferred.length; i++) {
                        (chunkIds = deferred[i][0]), (fn = deferred[i][1]), (priority = deferred[i][2]);
                        for (var fulfilled = !0, j = 0; j < chunkIds.length; j++)
                            (!1 & priority || notFulfilled >= priority) &&
                            Object.keys(__webpack_require__.O).every(function (key) {
                                return __webpack_require__.O[key](chunkIds[j]);
                            })
                                ? chunkIds.splice(j--, 1)
                                : ((fulfilled = !1), priority < notFulfilled && (notFulfilled = priority));
                        if (fulfilled) {
                            deferred.splice(i--, 1);
                            var r = fn();
                            void 0 !== r && (result = r);
                        }
                    }
                    return result;
                }
                priority = priority || 0;
                for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--)
                    deferred[i] = deferred[i - 1];
                deferred[i] = [chunkIds, fn, priority];
            }),
            (__webpack_require__.n = function (module) {
                var getter =
                    module && module.__esModule
                        ? function () {
                              return module.default;
                          }
                        : function () {
                              return module;
                          };
                return __webpack_require__.d(getter, { a: getter }), getter;
            }),
            (__webpack_require__.d = function (exports, definition) {
                for (var key in definition)
                    __webpack_require__.o(definition, key) &&
                        !__webpack_require__.o(exports, key) &&
                        Object.defineProperty(exports, key, { enumerable: !0, get: definition[key] });
            }),
            (__webpack_require__.o = function (obj, prop) {
                return Object.prototype.hasOwnProperty.call(obj, prop);
            }),
            (__webpack_require__.r = function (exports) {
                'undefined' != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' }),
                    Object.defineProperty(exports, '__esModule', { value: !0 });
            }),
            (function () {
                var installedChunks = { 792: 0 };
                __webpack_require__.O.j = function (chunkId) {
                    return 0 === installedChunks[chunkId];
                };
                var webpackJsonpCallback = function (parentChunkLoadingFunction, data) {
                        var moduleId,
                            chunkId,
                            chunkIds = data[0],
                            moreModules = data[1],
                            runtime = data[2],
                            i = 0;
                        if (
                            chunkIds.some(function (id) {
                                return 0 !== installedChunks[id];
                            })
                        ) {
                            for (moduleId in moreModules)
                                __webpack_require__.o(moreModules, moduleId) &&
                                    (__webpack_require__.m[moduleId] = moreModules[moduleId]);
                            if (runtime) var result = runtime(__webpack_require__);
                        }
                        for (parentChunkLoadingFunction && parentChunkLoadingFunction(data); i < chunkIds.length; i++)
                            (chunkId = chunkIds[i]),
                                __webpack_require__.o(installedChunks, chunkId) &&
                                    installedChunks[chunkId] &&
                                    installedChunks[chunkId][0](),
                                (installedChunks[chunkId] = 0);
                        return __webpack_require__.O(result);
                    },
                    chunkLoadingGlobal = (self.webpackChunkContent = self.webpackChunkContent || []);
                chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0)),
                    (chunkLoadingGlobal.push = webpackJsonpCallback.bind(
                        null,
                        chunkLoadingGlobal.push.bind(chunkLoadingGlobal),
                    ));
            })();
        var __webpack_exports__ = __webpack_require__.O(void 0, [604], function () {
            return __webpack_require__(970);
        });
        return (__webpack_exports__ = __webpack_require__.O(__webpack_exports__)), __webpack_exports__;
    })();
});
