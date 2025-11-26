'use strict';
(self.webpackChunkContent = self.webpackChunkContent || []).push([
    [604],
    {
        160: function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            __webpack_require__.d(__webpack_exports__, {
                a: function () {
                    return IntlErrorCode;
                },
                b: function () {
                    return IntlError;
                },
                c: function () {
                    return IntlFormatError;
                },
                d: function () {
                    return InvalidConfigError;
                },
                e: function () {
                    return MessageFormatError;
                },
                f: function () {
                    return MissingDataError;
                },
                g: function () {
                    return MissingTranslationError;
                },
                h: function () {
                    return UnsupportedFormatterError;
                },
            });
            var IntlErrorCode,
                tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(635);
            !(function (IntlErrorCode) {
                (IntlErrorCode.FORMAT_ERROR = 'FORMAT_ERROR'),
                    (IntlErrorCode.UNSUPPORTED_FORMATTER = 'UNSUPPORTED_FORMATTER'),
                    (IntlErrorCode.INVALID_CONFIG = 'INVALID_CONFIG'),
                    (IntlErrorCode.MISSING_DATA = 'MISSING_DATA'),
                    (IntlErrorCode.MISSING_TRANSLATION = 'MISSING_TRANSLATION');
            })(IntlErrorCode || (IntlErrorCode = {}));
            var IntlError = (function (_super) {
                    function IntlError(code, message, exception) {
                        var _this = this,
                            err = exception
                                ? exception instanceof Error
                                    ? exception
                                    : new Error(String(exception))
                                : void 0;
                        return (
                            (_this =
                                _super.call(
                                    this,
                                    '[@formatjs/intl Error '
                                        .concat(code, '] ')
                                        .concat(message, ' \n')
                                        .concat(err ? '\n'.concat(err.message, '\n').concat(err.stack) : ''),
                                ) || this),
                            (_this.code = code),
                            'function' == typeof Error.captureStackTrace && Error.captureStackTrace(_this, IntlError),
                            _this
                        );
                    }
                    return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.b)(IntlError, _super), IntlError;
                })(Error),
                UnsupportedFormatterError = (function (_super) {
                    function UnsupportedFormatterError(message, exception) {
                        return _super.call(this, IntlErrorCode.UNSUPPORTED_FORMATTER, message, exception) || this;
                    }
                    return (
                        (0, tslib__WEBPACK_IMPORTED_MODULE_0__.b)(UnsupportedFormatterError, _super),
                        UnsupportedFormatterError
                    );
                })(IntlError),
                InvalidConfigError = (function (_super) {
                    function InvalidConfigError(message, exception) {
                        return _super.call(this, IntlErrorCode.INVALID_CONFIG, message, exception) || this;
                    }
                    return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.b)(InvalidConfigError, _super), InvalidConfigError;
                })(IntlError),
                MissingDataError = (function (_super) {
                    function MissingDataError(message, exception) {
                        return _super.call(this, IntlErrorCode.MISSING_DATA, message, exception) || this;
                    }
                    return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.b)(MissingDataError, _super), MissingDataError;
                })(IntlError),
                IntlFormatError = (function (_super) {
                    function IntlFormatError(message, locale, exception) {
                        return (
                            _super.call(
                                this,
                                IntlErrorCode.FORMAT_ERROR,
                                ''.concat(message, ' \nLocale: ').concat(locale, '\n'),
                                exception,
                            ) || this
                        );
                    }
                    return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.b)(IntlFormatError, _super), IntlFormatError;
                })(IntlError),
                MessageFormatError = (function (_super) {
                    function MessageFormatError(message, locale, descriptor, exception) {
                        var _this =
                            _super.call(
                                this,
                                ''
                                    .concat(message, ' \nMessageID: ')
                                    .concat(null == descriptor ? void 0 : descriptor.id, '\nDefault Message: ')
                                    .concat(null == descriptor ? void 0 : descriptor.defaultMessage, '\nDescription: ')
                                    .concat(null == descriptor ? void 0 : descriptor.description, ' \n'),
                                locale,
                                exception,
                            ) || this;
                        return (_this.descriptor = descriptor), _this;
                    }
                    return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.b)(MessageFormatError, _super), MessageFormatError;
                })(IntlFormatError),
                MissingTranslationError = (function (_super) {
                    function MissingTranslationError(descriptor, locale) {
                        var _this =
                            _super.call(
                                this,
                                IntlErrorCode.MISSING_TRANSLATION,
                                'Missing message: "'
                                    .concat(descriptor.id, '" for locale "')
                                    .concat(locale, '", using ')
                                    .concat(descriptor.defaultMessage ? 'default message' : 'id', ' as fallback.'),
                            ) || this;
                        return (_this.descriptor = descriptor), _this;
                    }
                    return (
                        (0, tslib__WEBPACK_IMPORTED_MODULE_0__.b)(MissingTranslationError, _super),
                        MissingTranslationError
                    );
                })(IntlError);
        },
        205: function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            function setTimeZoneInOptions(opts, timeZone) {
                return Object.keys(opts).reduce(function (all, k) {
                    return (all[k] = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.a)({ timeZone: timeZone }, opts[k])), all;
                }, {});
            }
            function deepMergeOptions(opts1, opts2) {
                var keys = Object.keys(
                    (0, tslib__WEBPACK_IMPORTED_MODULE_0__.a)(
                        (0, tslib__WEBPACK_IMPORTED_MODULE_0__.a)({}, opts1),
                        opts2,
                    ),
                );
                return keys.reduce(function (all, k) {
                    return (
                        (all[k] = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.a)(
                            (0, tslib__WEBPACK_IMPORTED_MODULE_0__.a)({}, opts1[k] || {}),
                            opts2[k] || {},
                        )),
                        all
                    );
                }, {});
            }
            function deepMergeFormatsAndSetTimeZone(f1, timeZone) {
                if (!timeZone) return f1;
                var mfFormats = intl_messageformat__WEBPACK_IMPORTED_MODULE_2__.a.formats;
                return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.a)(
                    (0, tslib__WEBPACK_IMPORTED_MODULE_0__.a)(
                        (0, tslib__WEBPACK_IMPORTED_MODULE_0__.a)({}, mfFormats),
                        f1,
                    ),
                    {
                        date: deepMergeOptions(
                            setTimeZoneInOptions(mfFormats.date, timeZone),
                            setTimeZoneInOptions(f1.date || {}, timeZone),
                        ),
                        time: deepMergeOptions(
                            setTimeZoneInOptions(mfFormats.time, timeZone),
                            setTimeZoneInOptions(f1.time || {}, timeZone),
                        ),
                    },
                );
            }
            function formatMessage(_a, state, messageDescriptor, values, opts) {
                var locale = _a.locale,
                    formats = _a.formats,
                    messages = _a.messages,
                    defaultLocale = _a.defaultLocale,
                    defaultFormats = _a.defaultFormats,
                    fallbackOnEmptyString = _a.fallbackOnEmptyString,
                    onError = _a.onError,
                    timeZone = _a.timeZone,
                    defaultRichTextElements = _a.defaultRichTextElements;
                void 0 === messageDescriptor && (messageDescriptor = { id: '' });
                var msgId = messageDescriptor.id,
                    defaultMessage = messageDescriptor.defaultMessage;
                (0, _formatjs_ecma402_abstract__WEBPACK_IMPORTED_MODULE_1__.a)(
                    !!msgId,
                    '[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue',
                );
                var id = String(msgId),
                    message = messages && Object.prototype.hasOwnProperty.call(messages, id) && messages[id];
                if (
                    Array.isArray(message) &&
                    1 === message.length &&
                    message[0].type === _formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_4__.a.literal
                )
                    return message[0].value;
                if (!values && message && 'string' == typeof message && !defaultRichTextElements)
                    return message.replace(/'\{(.*?)\}'/gi, '{$1}');
                if (
                    ((values = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.a)(
                        (0, tslib__WEBPACK_IMPORTED_MODULE_0__.a)({}, defaultRichTextElements),
                        values || {},
                    )),
                    (formats = deepMergeFormatsAndSetTimeZone(formats, timeZone)),
                    (defaultFormats = deepMergeFormatsAndSetTimeZone(defaultFormats, timeZone)),
                    !message)
                ) {
                    if (!1 === fallbackOnEmptyString && '' === message) return message;
                    if (
                        ((!defaultMessage || (locale && locale.toLowerCase() !== defaultLocale.toLowerCase())) &&
                            onError(new _error__WEBPACK_IMPORTED_MODULE_3__.g(messageDescriptor, locale)),
                        defaultMessage)
                    )
                        try {
                            var formatter = state.getMessageFormat(defaultMessage, defaultLocale, defaultFormats, opts);
                            return formatter.format(values);
                        } catch (e) {
                            return (
                                onError(
                                    new _error__WEBPACK_IMPORTED_MODULE_3__.e(
                                        'Error formatting default message for: "'.concat(
                                            id,
                                            '", rendering default message verbatim',
                                        ),
                                        locale,
                                        messageDescriptor,
                                        e,
                                    ),
                                ),
                                'string' == typeof defaultMessage ? defaultMessage : id
                            );
                        }
                    return id;
                }
                try {
                    formatter = state.getMessageFormat(
                        message,
                        locale,
                        formats,
                        (0, tslib__WEBPACK_IMPORTED_MODULE_0__.a)({ formatters: state }, opts || {}),
                    );
                    return formatter.format(values);
                } catch (e) {
                    onError(
                        new _error__WEBPACK_IMPORTED_MODULE_3__.e(
                            'Error formatting message: "'
                                .concat(id, '", using ')
                                .concat(defaultMessage ? 'default message' : 'id', ' as fallback.'),
                            locale,
                            messageDescriptor,
                            e,
                        ),
                    );
                }
                if (defaultMessage)
                    try {
                        formatter = state.getMessageFormat(defaultMessage, defaultLocale, defaultFormats, opts);
                        return formatter.format(values);
                    } catch (e) {
                        onError(
                            new _error__WEBPACK_IMPORTED_MODULE_3__.e(
                                'Error formatting the default message for: "'.concat(
                                    id,
                                    '", rendering message verbatim',
                                ),
                                locale,
                                messageDescriptor,
                                e,
                            ),
                        );
                    }
                return 'string' == typeof message ? message : 'string' == typeof defaultMessage ? defaultMessage : id;
            }
            __webpack_require__.d(__webpack_exports__, {
                a: function () {
                    return formatMessage;
                },
            });
            var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(635),
                _formatjs_ecma402_abstract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(672),
                intl_messageformat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(587),
                _error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(160),
                _formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(361);
        },
        361: function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            function isLiteralElement(el) {
                return el.type === TYPE.literal;
            }
            function isArgumentElement(el) {
                return el.type === TYPE.argument;
            }
            function isNumberElement(el) {
                return el.type === TYPE.number;
            }
            function isDateElement(el) {
                return el.type === TYPE.date;
            }
            function isTimeElement(el) {
                return el.type === TYPE.time;
            }
            function isSelectElement(el) {
                return el.type === TYPE.select;
            }
            function isPluralElement(el) {
                return el.type === TYPE.plural;
            }
            function isPoundElement(el) {
                return el.type === TYPE.pound;
            }
            function isTagElement(el) {
                return el.type === TYPE.tag;
            }
            function isNumberSkeleton(el) {
                return !(!el || 'object' != typeof el || el.type !== SKELETON_TYPE.number);
            }
            function isDateTimeSkeleton(el) {
                return !(!el || 'object' != typeof el || el.type !== SKELETON_TYPE.dateTime);
            }
            function parseDateTimeSkeleton(skeleton) {
                var result = {};
                return (
                    skeleton.replace(DATE_TIME_REGEX, function (match) {
                        var len = match.length;
                        switch (match[0]) {
                            case 'G':
                                result.era = 4 === len ? 'long' : 5 === len ? 'narrow' : 'short';
                                break;
                            case 'y':
                                result.year = 2 === len ? '2-digit' : 'numeric';
                                break;
                            case 'Y':
                            case 'u':
                            case 'U':
                            case 'r':
                                throw new RangeError('`Y/u/U/r` (year) patterns are not supported, use `y` instead');
                            case 'q':
                            case 'Q':
                                throw new RangeError('`q/Q` (quarter) patterns are not supported');
                            case 'M':
                            case 'L':
                                result.month = ['numeric', '2-digit', 'short', 'long', 'narrow'][len - 1];
                                break;
                            case 'w':
                            case 'W':
                                throw new RangeError('`w/W` (week) patterns are not supported');
                            case 'd':
                                result.day = ['numeric', '2-digit'][len - 1];
                                break;
                            case 'D':
                            case 'F':
                            case 'g':
                                throw new RangeError('`D/F/g` (day) patterns are not supported, use `d` instead');
                            case 'E':
                                result.weekday = 4 === len ? 'short' : 5 === len ? 'narrow' : 'short';
                                break;
                            case 'e':
                                if (len < 4) throw new RangeError('`e..eee` (weekday) patterns are not supported');
                                result.weekday = ['short', 'long', 'narrow', 'short'][len - 4];
                                break;
                            case 'c':
                                if (len < 4) throw new RangeError('`c..ccc` (weekday) patterns are not supported');
                                result.weekday = ['short', 'long', 'narrow', 'short'][len - 4];
                                break;
                            case 'a':
                                result.hour12 = !0;
                                break;
                            case 'b':
                            case 'B':
                                throw new RangeError('`b/B` (period) patterns are not supported, use `a` instead');
                            case 'h':
                                (result.hourCycle = 'h12'), (result.hour = ['numeric', '2-digit'][len - 1]);
                                break;
                            case 'H':
                                (result.hourCycle = 'h23'), (result.hour = ['numeric', '2-digit'][len - 1]);
                                break;
                            case 'K':
                                (result.hourCycle = 'h11'), (result.hour = ['numeric', '2-digit'][len - 1]);
                                break;
                            case 'k':
                                (result.hourCycle = 'h24'), (result.hour = ['numeric', '2-digit'][len - 1]);
                                break;
                            case 'j':
                            case 'J':
                            case 'C':
                                throw new RangeError(
                                    '`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead',
                                );
                            case 'm':
                                result.minute = ['numeric', '2-digit'][len - 1];
                                break;
                            case 's':
                                result.second = ['numeric', '2-digit'][len - 1];
                                break;
                            case 'S':
                            case 'A':
                                throw new RangeError('`S/A` (second) patterns are not supported, use `s` instead');
                            case 'z':
                                result.timeZoneName = len < 4 ? 'short' : 'long';
                                break;
                            case 'Z':
                            case 'O':
                            case 'v':
                            case 'V':
                            case 'X':
                            case 'x':
                                throw new RangeError(
                                    '`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead',
                                );
                        }
                        return '';
                    }),
                    result
                );
            }
            function parseNumberSkeletonFromString(skeleton) {
                if (0 === skeleton.length) throw new Error('Number skeleton cannot be empty');
                for (
                    var stringTokens = skeleton.split(regex_generated_WHITE_SPACE_REGEX).filter(function (x) {
                            return x.length > 0;
                        }),
                        tokens = [],
                        _i = 0,
                        stringTokens_1 = stringTokens;
                    _i < stringTokens_1.length;
                    _i++
                ) {
                    var stringToken = stringTokens_1[_i],
                        stemAndOptions = stringToken.split('/');
                    if (0 === stemAndOptions.length) throw new Error('Invalid number skeleton');
                    for (
                        var stem = stemAndOptions[0], options = stemAndOptions.slice(1), _a = 0, options_1 = options;
                        _a < options_1.length;
                        _a++
                    ) {
                        var option = options_1[_a];
                        if (0 === option.length) throw new Error('Invalid number skeleton');
                    }
                    tokens.push({ stem: stem, options: options });
                }
                return tokens;
            }
            function icuUnitToEcma(unit) {
                return unit.replace(/^(.*?)-/, '');
            }
            function parseSignificantPrecision(str) {
                var result = {};
                return (
                    'r' === str[str.length - 1]
                        ? (result.roundingPriority = 'morePrecision')
                        : 's' === str[str.length - 1] && (result.roundingPriority = 'lessPrecision'),
                    str.replace(SIGNIFICANT_PRECISION_REGEX, function (_, g1, g2) {
                        return (
                            'string' != typeof g2
                                ? ((result.minimumSignificantDigits = g1.length),
                                  (result.maximumSignificantDigits = g1.length))
                                : '+' === g2
                                  ? (result.minimumSignificantDigits = g1.length)
                                  : '#' === g1[0]
                                    ? (result.maximumSignificantDigits = g1.length)
                                    : ((result.minimumSignificantDigits = g1.length),
                                      (result.maximumSignificantDigits =
                                          g1.length + ('string' == typeof g2 ? g2.length : 0))),
                            ''
                        );
                    }),
                    result
                );
            }
            function parseSign(str) {
                switch (str) {
                    case 'sign-auto':
                        return { signDisplay: 'auto' };
                    case 'sign-accounting':
                    case '()':
                        return { currencySign: 'accounting' };
                    case 'sign-always':
                    case '+!':
                        return { signDisplay: 'always' };
                    case 'sign-accounting-always':
                    case '()!':
                        return { signDisplay: 'always', currencySign: 'accounting' };
                    case 'sign-except-zero':
                    case '+?':
                        return { signDisplay: 'exceptZero' };
                    case 'sign-accounting-except-zero':
                    case '()?':
                        return { signDisplay: 'exceptZero', currencySign: 'accounting' };
                    case 'sign-never':
                    case '+_':
                        return { signDisplay: 'never' };
                }
            }
            function parseConciseScientificAndEngineeringStem(stem) {
                var result;
                if (
                    ('E' === stem[0] && 'E' === stem[1]
                        ? ((result = { notation: 'engineering' }), (stem = stem.slice(2)))
                        : 'E' === stem[0] && ((result = { notation: 'scientific' }), (stem = stem.slice(1))),
                    result)
                ) {
                    var signDisplay = stem.slice(0, 2);
                    if (
                        ('+!' === signDisplay
                            ? ((result.signDisplay = 'always'), (stem = stem.slice(2)))
                            : '+?' === signDisplay && ((result.signDisplay = 'exceptZero'), (stem = stem.slice(2))),
                        !CONCISE_INTEGER_WIDTH_REGEX.test(stem))
                    )
                        throw new Error('Malformed concise eng/scientific notation');
                    result.minimumIntegerDigits = stem.length;
                }
                return result;
            }
            function parseNotationOptions(opt) {
                var signOpts = parseSign(opt);
                return signOpts || {};
            }
            function parseNumberSkeleton(tokens) {
                for (var result = {}, _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
                    var token = tokens_1[_i];
                    switch (token.stem) {
                        case 'percent':
                        case '%':
                            result.style = 'percent';
                            continue;
                        case '%x100':
                            (result.style = 'percent'), (result.scale = 100);
                            continue;
                        case 'currency':
                            (result.style = 'currency'), (result.currency = token.options[0]);
                            continue;
                        case 'group-off':
                        case ',_':
                            result.useGrouping = !1;
                            continue;
                        case 'precision-integer':
                        case '.':
                            result.maximumFractionDigits = 0;
                            continue;
                        case 'measure-unit':
                        case 'unit':
                            (result.style = 'unit'), (result.unit = icuUnitToEcma(token.options[0]));
                            continue;
                        case 'compact-short':
                        case 'K':
                            (result.notation = 'compact'), (result.compactDisplay = 'short');
                            continue;
                        case 'compact-long':
                        case 'KK':
                            (result.notation = 'compact'), (result.compactDisplay = 'long');
                            continue;
                        case 'scientific':
                            result = (0, tslib_es6.a)(
                                (0, tslib_es6.a)((0, tslib_es6.a)({}, result), { notation: 'scientific' }),
                                token.options.reduce(function (all, opt) {
                                    return (0, tslib_es6.a)((0, tslib_es6.a)({}, all), parseNotationOptions(opt));
                                }, {}),
                            );
                            continue;
                        case 'engineering':
                            result = (0, tslib_es6.a)(
                                (0, tslib_es6.a)((0, tslib_es6.a)({}, result), { notation: 'engineering' }),
                                token.options.reduce(function (all, opt) {
                                    return (0, tslib_es6.a)((0, tslib_es6.a)({}, all), parseNotationOptions(opt));
                                }, {}),
                            );
                            continue;
                        case 'notation-simple':
                            result.notation = 'standard';
                            continue;
                        case 'unit-width-narrow':
                            (result.currencyDisplay = 'narrowSymbol'), (result.unitDisplay = 'narrow');
                            continue;
                        case 'unit-width-short':
                            (result.currencyDisplay = 'code'), (result.unitDisplay = 'short');
                            continue;
                        case 'unit-width-full-name':
                            (result.currencyDisplay = 'name'), (result.unitDisplay = 'long');
                            continue;
                        case 'unit-width-iso-code':
                            result.currencyDisplay = 'symbol';
                            continue;
                        case 'scale':
                            result.scale = parseFloat(token.options[0]);
                            continue;
                        case 'integer-width':
                            if (token.options.length > 1)
                                throw new RangeError('integer-width stems only accept a single optional option');
                            token.options[0].replace(INTEGER_WIDTH_REGEX, function (_, g1, g2, g3, g4, g5) {
                                if (g1) result.minimumIntegerDigits = g2.length;
                                else {
                                    if (g3 && g4) throw new Error('We currently do not support maximum integer digits');
                                    if (g5) throw new Error('We currently do not support exact integer digits');
                                }
                                return '';
                            });
                            continue;
                    }
                    if (CONCISE_INTEGER_WIDTH_REGEX.test(token.stem)) result.minimumIntegerDigits = token.stem.length;
                    else if (FRACTION_PRECISION_REGEX.test(token.stem)) {
                        if (token.options.length > 1)
                            throw new RangeError('Fraction-precision stems only accept a single optional option');
                        token.stem.replace(FRACTION_PRECISION_REGEX, function (_, g1, g2, g3, g4, g5) {
                            return (
                                '*' === g2
                                    ? (result.minimumFractionDigits = g1.length)
                                    : g3 && '#' === g3[0]
                                      ? (result.maximumFractionDigits = g3.length)
                                      : g4 && g5
                                        ? ((result.minimumFractionDigits = g4.length),
                                          (result.maximumFractionDigits = g4.length + g5.length))
                                        : ((result.minimumFractionDigits = g1.length),
                                          (result.maximumFractionDigits = g1.length)),
                                ''
                            );
                        });
                        var opt = token.options[0];
                        'w' === opt
                            ? (result = (0, tslib_es6.a)((0, tslib_es6.a)({}, result), {
                                  trailingZeroDisplay: 'stripIfInteger',
                              }))
                            : opt &&
                              (result = (0, tslib_es6.a)((0, tslib_es6.a)({}, result), parseSignificantPrecision(opt)));
                    } else if (SIGNIFICANT_PRECISION_REGEX.test(token.stem))
                        result = (0, tslib_es6.a)((0, tslib_es6.a)({}, result), parseSignificantPrecision(token.stem));
                    else {
                        var signOpts = parseSign(token.stem);
                        signOpts && (result = (0, tslib_es6.a)((0, tslib_es6.a)({}, result), signOpts));
                        var conciseScientificAndEngineeringOpts = parseConciseScientificAndEngineeringStem(token.stem);
                        conciseScientificAndEngineeringOpts &&
                            (result = (0, tslib_es6.a)(
                                (0, tslib_es6.a)({}, result),
                                conciseScientificAndEngineeringOpts,
                            ));
                    }
                }
                return result;
            }
            function createLocation(start, end) {
                return { start: start, end: end };
            }
            function RE(s, flag) {
                return new RegExp(s, flag);
            }
            function _isAlpha(codepoint) {
                return (codepoint >= 97 && codepoint <= 122) || (codepoint >= 65 && codepoint <= 90);
            }
            function _isPotentialElementNameChar(c) {
                return (
                    45 === c ||
                    46 === c ||
                    (c >= 48 && c <= 57) ||
                    95 === c ||
                    (c >= 97 && c <= 122) ||
                    (c >= 65 && c <= 90) ||
                    183 == c ||
                    (c >= 192 && c <= 214) ||
                    (c >= 216 && c <= 246) ||
                    (c >= 248 && c <= 893) ||
                    (c >= 895 && c <= 8191) ||
                    (c >= 8204 && c <= 8205) ||
                    (c >= 8255 && c <= 8256) ||
                    (c >= 8304 && c <= 8591) ||
                    (c >= 11264 && c <= 12271) ||
                    (c >= 12289 && c <= 55295) ||
                    (c >= 63744 && c <= 64975) ||
                    (c >= 65008 && c <= 65533) ||
                    (c >= 65536 && c <= 983039)
                );
            }
            function _isWhiteSpace(c) {
                return (
                    (c >= 9 && c <= 13) || 32 === c || 133 === c || (c >= 8206 && c <= 8207) || 8232 === c || 8233 === c
                );
            }
            function _isPatternSyntax(c) {
                return (
                    (c >= 33 && c <= 35) ||
                    36 === c ||
                    (c >= 37 && c <= 39) ||
                    40 === c ||
                    41 === c ||
                    42 === c ||
                    43 === c ||
                    44 === c ||
                    45 === c ||
                    (c >= 46 && c <= 47) ||
                    (c >= 58 && c <= 59) ||
                    (c >= 60 && c <= 62) ||
                    (c >= 63 && c <= 64) ||
                    91 === c ||
                    92 === c ||
                    93 === c ||
                    94 === c ||
                    96 === c ||
                    123 === c ||
                    124 === c ||
                    125 === c ||
                    126 === c ||
                    161 === c ||
                    (c >= 162 && c <= 165) ||
                    166 === c ||
                    167 === c ||
                    169 === c ||
                    171 === c ||
                    172 === c ||
                    174 === c ||
                    176 === c ||
                    177 === c ||
                    182 === c ||
                    187 === c ||
                    191 === c ||
                    215 === c ||
                    247 === c ||
                    (c >= 8208 && c <= 8213) ||
                    (c >= 8214 && c <= 8215) ||
                    8216 === c ||
                    8217 === c ||
                    8218 === c ||
                    (c >= 8219 && c <= 8220) ||
                    8221 === c ||
                    8222 === c ||
                    8223 === c ||
                    (c >= 8224 && c <= 8231) ||
                    (c >= 8240 && c <= 8248) ||
                    8249 === c ||
                    8250 === c ||
                    (c >= 8251 && c <= 8254) ||
                    (c >= 8257 && c <= 8259) ||
                    8260 === c ||
                    8261 === c ||
                    8262 === c ||
                    (c >= 8263 && c <= 8273) ||
                    8274 === c ||
                    8275 === c ||
                    (c >= 8277 && c <= 8286) ||
                    (c >= 8592 && c <= 8596) ||
                    (c >= 8597 && c <= 8601) ||
                    (c >= 8602 && c <= 8603) ||
                    (c >= 8604 && c <= 8607) ||
                    8608 === c ||
                    (c >= 8609 && c <= 8610) ||
                    8611 === c ||
                    (c >= 8612 && c <= 8613) ||
                    8614 === c ||
                    (c >= 8615 && c <= 8621) ||
                    8622 === c ||
                    (c >= 8623 && c <= 8653) ||
                    (c >= 8654 && c <= 8655) ||
                    (c >= 8656 && c <= 8657) ||
                    8658 === c ||
                    8659 === c ||
                    8660 === c ||
                    (c >= 8661 && c <= 8691) ||
                    (c >= 8692 && c <= 8959) ||
                    (c >= 8960 && c <= 8967) ||
                    8968 === c ||
                    8969 === c ||
                    8970 === c ||
                    8971 === c ||
                    (c >= 8972 && c <= 8991) ||
                    (c >= 8992 && c <= 8993) ||
                    (c >= 8994 && c <= 9e3) ||
                    9001 === c ||
                    9002 === c ||
                    (c >= 9003 && c <= 9083) ||
                    9084 === c ||
                    (c >= 9085 && c <= 9114) ||
                    (c >= 9115 && c <= 9139) ||
                    (c >= 9140 && c <= 9179) ||
                    (c >= 9180 && c <= 9185) ||
                    (c >= 9186 && c <= 9254) ||
                    (c >= 9255 && c <= 9279) ||
                    (c >= 9280 && c <= 9290) ||
                    (c >= 9291 && c <= 9311) ||
                    (c >= 9472 && c <= 9654) ||
                    9655 === c ||
                    (c >= 9656 && c <= 9664) ||
                    9665 === c ||
                    (c >= 9666 && c <= 9719) ||
                    (c >= 9720 && c <= 9727) ||
                    (c >= 9728 && c <= 9838) ||
                    9839 === c ||
                    (c >= 9840 && c <= 10087) ||
                    10088 === c ||
                    10089 === c ||
                    10090 === c ||
                    10091 === c ||
                    10092 === c ||
                    10093 === c ||
                    10094 === c ||
                    10095 === c ||
                    10096 === c ||
                    10097 === c ||
                    10098 === c ||
                    10099 === c ||
                    10100 === c ||
                    10101 === c ||
                    (c >= 10132 && c <= 10175) ||
                    (c >= 10176 && c <= 10180) ||
                    10181 === c ||
                    10182 === c ||
                    (c >= 10183 && c <= 10213) ||
                    10214 === c ||
                    10215 === c ||
                    10216 === c ||
                    10217 === c ||
                    10218 === c ||
                    10219 === c ||
                    10220 === c ||
                    10221 === c ||
                    10222 === c ||
                    10223 === c ||
                    (c >= 10224 && c <= 10239) ||
                    (c >= 10240 && c <= 10495) ||
                    (c >= 10496 && c <= 10626) ||
                    10627 === c ||
                    10628 === c ||
                    10629 === c ||
                    10630 === c ||
                    10631 === c ||
                    10632 === c ||
                    10633 === c ||
                    10634 === c ||
                    10635 === c ||
                    10636 === c ||
                    10637 === c ||
                    10638 === c ||
                    10639 === c ||
                    10640 === c ||
                    10641 === c ||
                    10642 === c ||
                    10643 === c ||
                    10644 === c ||
                    10645 === c ||
                    10646 === c ||
                    10647 === c ||
                    10648 === c ||
                    (c >= 10649 && c <= 10711) ||
                    10712 === c ||
                    10713 === c ||
                    10714 === c ||
                    10715 === c ||
                    (c >= 10716 && c <= 10747) ||
                    10748 === c ||
                    10749 === c ||
                    (c >= 10750 && c <= 11007) ||
                    (c >= 11008 && c <= 11055) ||
                    (c >= 11056 && c <= 11076) ||
                    (c >= 11077 && c <= 11078) ||
                    (c >= 11079 && c <= 11084) ||
                    (c >= 11085 && c <= 11123) ||
                    (c >= 11124 && c <= 11125) ||
                    (c >= 11126 && c <= 11157) ||
                    11158 === c ||
                    (c >= 11159 && c <= 11263) ||
                    (c >= 11776 && c <= 11777) ||
                    11778 === c ||
                    11779 === c ||
                    11780 === c ||
                    11781 === c ||
                    (c >= 11782 && c <= 11784) ||
                    11785 === c ||
                    11786 === c ||
                    11787 === c ||
                    11788 === c ||
                    11789 === c ||
                    (c >= 11790 && c <= 11798) ||
                    11799 === c ||
                    (c >= 11800 && c <= 11801) ||
                    11802 === c ||
                    11803 === c ||
                    11804 === c ||
                    11805 === c ||
                    (c >= 11806 && c <= 11807) ||
                    11808 === c ||
                    11809 === c ||
                    11810 === c ||
                    11811 === c ||
                    11812 === c ||
                    11813 === c ||
                    11814 === c ||
                    11815 === c ||
                    11816 === c ||
                    11817 === c ||
                    (c >= 11818 && c <= 11822) ||
                    11823 === c ||
                    (c >= 11824 && c <= 11833) ||
                    (c >= 11834 && c <= 11835) ||
                    (c >= 11836 && c <= 11839) ||
                    11840 === c ||
                    11841 === c ||
                    11842 === c ||
                    (c >= 11843 && c <= 11855) ||
                    (c >= 11856 && c <= 11857) ||
                    11858 === c ||
                    (c >= 11859 && c <= 11903) ||
                    (c >= 12289 && c <= 12291) ||
                    12296 === c ||
                    12297 === c ||
                    12298 === c ||
                    12299 === c ||
                    12300 === c ||
                    12301 === c ||
                    12302 === c ||
                    12303 === c ||
                    12304 === c ||
                    12305 === c ||
                    (c >= 12306 && c <= 12307) ||
                    12308 === c ||
                    12309 === c ||
                    12310 === c ||
                    12311 === c ||
                    12312 === c ||
                    12313 === c ||
                    12314 === c ||
                    12315 === c ||
                    12316 === c ||
                    12317 === c ||
                    (c >= 12318 && c <= 12319) ||
                    12320 === c ||
                    12336 === c ||
                    64830 === c ||
                    64831 === c ||
                    (c >= 65093 && c <= 65094)
                );
            }
            function pruneLocation(els) {
                els.forEach(function (el) {
                    if ((delete el.location, isSelectElement(el) || isPluralElement(el)))
                        for (var k in el.options) delete el.options[k].location, pruneLocation(el.options[k].value);
                    else
                        (isNumberElement(el) && isNumberSkeleton(el.style)) ||
                        ((isDateElement(el) || isTimeElement(el)) && isDateTimeSkeleton(el.style))
                            ? delete el.style.location
                            : isTagElement(el) && pruneLocation(el.children);
                });
            }
            function parse(message, opts) {
                void 0 === opts && (opts = {}),
                    (opts = (0, tslib_es6.a)({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, opts));
                var result = new Parser(message, opts).parse();
                if (result.err) {
                    var error = SyntaxError(ErrorKind[result.err.kind]);
                    throw ((error.location = result.err.location), (error.originalMessage = result.err.message), error);
                }
                return (null == opts ? void 0 : opts.captureLocation) || pruneLocation(result.val), result.val;
            }
            __webpack_require__.d(__webpack_exports__, {
                a: function () {
                    return TYPE;
                },
                b: function () {
                    return isArgumentElement;
                },
                c: function () {
                    return isDateElement;
                },
                d: function () {
                    return isDateTimeSkeleton;
                },
                e: function () {
                    return isLiteralElement;
                },
                f: function () {
                    return isNumberElement;
                },
                g: function () {
                    return isNumberSkeleton;
                },
                h: function () {
                    return isPluralElement;
                },
                i: function () {
                    return isPoundElement;
                },
                j: function () {
                    return isSelectElement;
                },
                k: function () {
                    return isTagElement;
                },
                l: function () {
                    return isTimeElement;
                },
                m: function () {
                    return parse;
                },
            });
            var ErrorKind,
                TYPE,
                SKELETON_TYPE,
                tslib_es6 = __webpack_require__(635);
            !(function (ErrorKind) {
                (ErrorKind[(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE = 1)] = 'EXPECT_ARGUMENT_CLOSING_BRACE'),
                    (ErrorKind[(ErrorKind.EMPTY_ARGUMENT = 2)] = 'EMPTY_ARGUMENT'),
                    (ErrorKind[(ErrorKind.MALFORMED_ARGUMENT = 3)] = 'MALFORMED_ARGUMENT'),
                    (ErrorKind[(ErrorKind.EXPECT_ARGUMENT_TYPE = 4)] = 'EXPECT_ARGUMENT_TYPE'),
                    (ErrorKind[(ErrorKind.INVALID_ARGUMENT_TYPE = 5)] = 'INVALID_ARGUMENT_TYPE'),
                    (ErrorKind[(ErrorKind.EXPECT_ARGUMENT_STYLE = 6)] = 'EXPECT_ARGUMENT_STYLE'),
                    (ErrorKind[(ErrorKind.INVALID_NUMBER_SKELETON = 7)] = 'INVALID_NUMBER_SKELETON'),
                    (ErrorKind[(ErrorKind.INVALID_DATE_TIME_SKELETON = 8)] = 'INVALID_DATE_TIME_SKELETON'),
                    (ErrorKind[(ErrorKind.EXPECT_NUMBER_SKELETON = 9)] = 'EXPECT_NUMBER_SKELETON'),
                    (ErrorKind[(ErrorKind.EXPECT_DATE_TIME_SKELETON = 10)] = 'EXPECT_DATE_TIME_SKELETON'),
                    (ErrorKind[(ErrorKind.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11)] = 'UNCLOSED_QUOTE_IN_ARGUMENT_STYLE'),
                    (ErrorKind[(ErrorKind.EXPECT_SELECT_ARGUMENT_OPTIONS = 12)] = 'EXPECT_SELECT_ARGUMENT_OPTIONS'),
                    (ErrorKind[(ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13)] =
                        'EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE'),
                    (ErrorKind[(ErrorKind.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14)] =
                        'INVALID_PLURAL_ARGUMENT_OFFSET_VALUE'),
                    (ErrorKind[(ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR = 15)] = 'EXPECT_SELECT_ARGUMENT_SELECTOR'),
                    (ErrorKind[(ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16)] = 'EXPECT_PLURAL_ARGUMENT_SELECTOR'),
                    (ErrorKind[(ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17)] =
                        'EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT'),
                    (ErrorKind[(ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18)] =
                        'EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT'),
                    (ErrorKind[(ErrorKind.INVALID_PLURAL_ARGUMENT_SELECTOR = 19)] = 'INVALID_PLURAL_ARGUMENT_SELECTOR'),
                    (ErrorKind[(ErrorKind.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20)] =
                        'DUPLICATE_PLURAL_ARGUMENT_SELECTOR'),
                    (ErrorKind[(ErrorKind.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21)] =
                        'DUPLICATE_SELECT_ARGUMENT_SELECTOR'),
                    (ErrorKind[(ErrorKind.MISSING_OTHER_CLAUSE = 22)] = 'MISSING_OTHER_CLAUSE'),
                    (ErrorKind[(ErrorKind.INVALID_TAG = 23)] = 'INVALID_TAG'),
                    (ErrorKind[(ErrorKind.INVALID_TAG_NAME = 25)] = 'INVALID_TAG_NAME'),
                    (ErrorKind[(ErrorKind.UNMATCHED_CLOSING_TAG = 26)] = 'UNMATCHED_CLOSING_TAG'),
                    (ErrorKind[(ErrorKind.UNCLOSED_TAG = 27)] = 'UNCLOSED_TAG');
            })(ErrorKind || (ErrorKind = {})),
                (function (TYPE) {
                    (TYPE[(TYPE.literal = 0)] = 'literal'),
                        (TYPE[(TYPE.argument = 1)] = 'argument'),
                        (TYPE[(TYPE.number = 2)] = 'number'),
                        (TYPE[(TYPE.date = 3)] = 'date'),
                        (TYPE[(TYPE.time = 4)] = 'time'),
                        (TYPE[(TYPE.select = 5)] = 'select'),
                        (TYPE[(TYPE.plural = 6)] = 'plural'),
                        (TYPE[(TYPE.pound = 7)] = 'pound'),
                        (TYPE[(TYPE.tag = 8)] = 'tag');
                })(TYPE || (TYPE = {})),
                (function (SKELETON_TYPE) {
                    (SKELETON_TYPE[(SKELETON_TYPE.number = 0)] = 'number'),
                        (SKELETON_TYPE[(SKELETON_TYPE.dateTime = 1)] = 'dateTime');
                })(SKELETON_TYPE || (SKELETON_TYPE = {}));
            var _a,
                SPACE_SEPARATOR_REGEX = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
                DATE_TIME_REGEX =
                    /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g,
                regex_generated_WHITE_SPACE_REGEX = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i,
                FRACTION_PRECISION_REGEX = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
                SIGNIFICANT_PRECISION_REGEX = /^(@+)?(\+|#+)?[rs]?$/g,
                INTEGER_WIDTH_REGEX = /(\*)(0+)|(#+)(0+)|(0+)/g,
                CONCISE_INTEGER_WIDTH_REGEX = /^(0+)$/,
                SPACE_SEPARATOR_START_REGEX = new RegExp('^'.concat(SPACE_SEPARATOR_REGEX.source, '*')),
                SPACE_SEPARATOR_END_REGEX = new RegExp(''.concat(SPACE_SEPARATOR_REGEX.source, '*$')),
                hasNativeStartsWith = !!String.prototype.startsWith,
                hasNativeFromCodePoint = !!String.fromCodePoint,
                hasNativeFromEntries = !!Object.fromEntries,
                hasNativeCodePointAt = !!String.prototype.codePointAt,
                hasTrimStart = !!String.prototype.trimStart,
                hasTrimEnd = !!String.prototype.trimEnd,
                hasNativeIsSafeInteger = !!Number.isSafeInteger,
                isSafeInteger = hasNativeIsSafeInteger
                    ? Number.isSafeInteger
                    : function (n) {
                          return (
                              'number' == typeof n &&
                              isFinite(n) &&
                              Math.floor(n) === n &&
                              Math.abs(n) <= 9007199254740991
                          );
                      },
                REGEX_SUPPORTS_U_AND_Y = !0;
            try {
                var re = RE('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
                REGEX_SUPPORTS_U_AND_Y = 'a' === (null === (_a = re.exec('a')) || void 0 === _a ? void 0 : _a[0]);
            } catch (_) {
                REGEX_SUPPORTS_U_AND_Y = !1;
            }
            var matchIdentifierAtIndex,
                startsWith = hasNativeStartsWith
                    ? function (s, search, position) {
                          return s.startsWith(search, position);
                      }
                    : function (s, search, position) {
                          return s.slice(position, position + search.length) === search;
                      },
                fromCodePoint = hasNativeFromCodePoint
                    ? String.fromCodePoint
                    : function () {
                          for (var codePoints = [], _i = 0; _i < arguments.length; _i++) codePoints[_i] = arguments[_i];
                          for (var code, elements = '', length = codePoints.length, i = 0; length > i; ) {
                              if (((code = codePoints[i++]), code > 1114111))
                                  throw RangeError(code + ' is not a valid code point');
                              elements +=
                                  code < 65536
                                      ? String.fromCharCode(code)
                                      : String.fromCharCode(55296 + ((code -= 65536) >> 10), (code % 1024) + 56320);
                          }
                          return elements;
                      },
                fromEntries = hasNativeFromEntries
                    ? Object.fromEntries
                    : function (entries) {
                          for (var obj = {}, _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                              var _a = entries_1[_i],
                                  k = _a[0],
                                  v = _a[1];
                              obj[k] = v;
                          }
                          return obj;
                      },
                codePointAt = hasNativeCodePointAt
                    ? function (s, index) {
                          return s.codePointAt(index);
                      }
                    : function (s, index) {
                          var size = s.length;
                          if (!(index < 0 || index >= size)) {
                              var second,
                                  first = s.charCodeAt(index);
                              return first < 55296 ||
                                  first > 56319 ||
                                  index + 1 === size ||
                                  (second = s.charCodeAt(index + 1)) < 56320 ||
                                  second > 57343
                                  ? first
                                  : second - 56320 + ((first - 55296) << 10) + 65536;
                          }
                      },
                trimStart = hasTrimStart
                    ? function (s) {
                          return s.trimStart();
                      }
                    : function (s) {
                          return s.replace(SPACE_SEPARATOR_START_REGEX, '');
                      },
                trimEnd = hasTrimEnd
                    ? function (s) {
                          return s.trimEnd();
                      }
                    : function (s) {
                          return s.replace(SPACE_SEPARATOR_END_REGEX, '');
                      };
            if (REGEX_SUPPORTS_U_AND_Y) {
                var IDENTIFIER_PREFIX_RE_1 = RE('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
                matchIdentifierAtIndex = function (s, index) {
                    var _a;
                    IDENTIFIER_PREFIX_RE_1.lastIndex = index;
                    var match = IDENTIFIER_PREFIX_RE_1.exec(s);
                    return null !== (_a = match[1]) && void 0 !== _a ? _a : '';
                };
            } else
                matchIdentifierAtIndex = function (s, index) {
                    for (var match = []; ; ) {
                        var c = codePointAt(s, index);
                        if (void 0 === c || _isWhiteSpace(c) || _isPatternSyntax(c)) break;
                        match.push(c), (index += c >= 65536 ? 2 : 1);
                    }
                    return fromCodePoint.apply(void 0, match);
                };
            var Parser = (function () {
                function Parser(message, options) {
                    void 0 === options && (options = {}),
                        (this.message = message),
                        (this.position = { offset: 0, line: 1, column: 1 }),
                        (this.ignoreTag = !!options.ignoreTag),
                        (this.requiresOtherClause = !!options.requiresOtherClause),
                        (this.shouldParseSkeletons = !!options.shouldParseSkeletons);
                }
                return (
                    (Parser.prototype.parse = function () {
                        if (0 !== this.offset()) throw Error('parser can only be used once');
                        return this.parseMessage(0, '', !1);
                    }),
                    (Parser.prototype.parseMessage = function (nestingLevel, parentArgType, expectingCloseTag) {
                        for (var elements = []; !this.isEOF(); ) {
                            var char = this.char();
                            if (123 === char) {
                                var result = this.parseArgument(nestingLevel, expectingCloseTag);
                                if (result.err) return result;
                                elements.push(result.val);
                            } else {
                                if (125 === char && nestingLevel > 0) break;
                                if (35 !== char || ('plural' !== parentArgType && 'selectordinal' !== parentArgType)) {
                                    if (60 === char && !this.ignoreTag && 47 === this.peek()) {
                                        if (expectingCloseTag) break;
                                        return this.error(
                                            ErrorKind.UNMATCHED_CLOSING_TAG,
                                            createLocation(this.clonePosition(), this.clonePosition()),
                                        );
                                    }
                                    if (60 === char && !this.ignoreTag && _isAlpha(this.peek() || 0)) {
                                        result = this.parseTag(nestingLevel, parentArgType);
                                        if (result.err) return result;
                                        elements.push(result.val);
                                    } else {
                                        result = this.parseLiteral(nestingLevel, parentArgType);
                                        if (result.err) return result;
                                        elements.push(result.val);
                                    }
                                } else {
                                    var position = this.clonePosition();
                                    this.bump(),
                                        elements.push({
                                            type: TYPE.pound,
                                            location: createLocation(position, this.clonePosition()),
                                        });
                                }
                            }
                        }
                        return { val: elements, err: null };
                    }),
                    (Parser.prototype.parseTag = function (nestingLevel, parentArgType) {
                        var startPosition = this.clonePosition();
                        this.bump();
                        var tagName = this.parseTagName();
                        if ((this.bumpSpace(), this.bumpIf('/>')))
                            return {
                                val: {
                                    type: TYPE.literal,
                                    value: '<'.concat(tagName, '/>'),
                                    location: createLocation(startPosition, this.clonePosition()),
                                },
                                err: null,
                            };
                        if (this.bumpIf('>')) {
                            var childrenResult = this.parseMessage(nestingLevel + 1, parentArgType, !0);
                            if (childrenResult.err) return childrenResult;
                            var children = childrenResult.val,
                                endTagStartPosition = this.clonePosition();
                            if (this.bumpIf('</')) {
                                if (this.isEOF() || !_isAlpha(this.char()))
                                    return this.error(
                                        ErrorKind.INVALID_TAG,
                                        createLocation(endTagStartPosition, this.clonePosition()),
                                    );
                                var closingTagNameStartPosition = this.clonePosition(),
                                    closingTagName = this.parseTagName();
                                return tagName !== closingTagName
                                    ? this.error(
                                          ErrorKind.UNMATCHED_CLOSING_TAG,
                                          createLocation(closingTagNameStartPosition, this.clonePosition()),
                                      )
                                    : (this.bumpSpace(),
                                      this.bumpIf('>')
                                          ? {
                                                val: {
                                                    type: TYPE.tag,
                                                    value: tagName,
                                                    children: children,
                                                    location: createLocation(startPosition, this.clonePosition()),
                                                },
                                                err: null,
                                            }
                                          : this.error(
                                                ErrorKind.INVALID_TAG,
                                                createLocation(endTagStartPosition, this.clonePosition()),
                                            ));
                            }
                            return this.error(
                                ErrorKind.UNCLOSED_TAG,
                                createLocation(startPosition, this.clonePosition()),
                            );
                        }
                        return this.error(ErrorKind.INVALID_TAG, createLocation(startPosition, this.clonePosition()));
                    }),
                    (Parser.prototype.parseTagName = function () {
                        var startOffset = this.offset();
                        for (this.bump(); !this.isEOF() && _isPotentialElementNameChar(this.char()); ) this.bump();
                        return this.message.slice(startOffset, this.offset());
                    }),
                    (Parser.prototype.parseLiteral = function (nestingLevel, parentArgType) {
                        for (var start = this.clonePosition(), value = ''; ; ) {
                            var parseQuoteResult = this.tryParseQuote(parentArgType);
                            if (parseQuoteResult) value += parseQuoteResult;
                            else {
                                var parseUnquotedResult = this.tryParseUnquoted(nestingLevel, parentArgType);
                                if (parseUnquotedResult) value += parseUnquotedResult;
                                else {
                                    var parseLeftAngleResult = this.tryParseLeftAngleBracket();
                                    if (!parseLeftAngleResult) break;
                                    value += parseLeftAngleResult;
                                }
                            }
                        }
                        var location = createLocation(start, this.clonePosition());
                        return { val: { type: TYPE.literal, value: value, location: location }, err: null };
                    }),
                    (Parser.prototype.tryParseLeftAngleBracket = function () {
                        return this.isEOF() ||
                            60 !== this.char() ||
                            (!this.ignoreTag &&
                                ((codepoint = this.peek() || 0), _isAlpha(codepoint) || 47 === codepoint))
                            ? null
                            : (this.bump(), '<');
                        var codepoint;
                    }),
                    (Parser.prototype.tryParseQuote = function (parentArgType) {
                        if (this.isEOF() || 39 !== this.char()) return null;
                        switch (this.peek()) {
                            case 39:
                                return this.bump(), this.bump(), "'";
                            case 123:
                            case 60:
                            case 62:
                            case 125:
                                break;
                            case 35:
                                if ('plural' === parentArgType || 'selectordinal' === parentArgType) break;
                                return null;
                            default:
                                return null;
                        }
                        this.bump();
                        var codePoints = [this.char()];
                        for (this.bump(); !this.isEOF(); ) {
                            var ch = this.char();
                            if (39 === ch) {
                                if (39 !== this.peek()) {
                                    this.bump();
                                    break;
                                }
                                codePoints.push(39), this.bump();
                            } else codePoints.push(ch);
                            this.bump();
                        }
                        return fromCodePoint.apply(void 0, codePoints);
                    }),
                    (Parser.prototype.tryParseUnquoted = function (nestingLevel, parentArgType) {
                        if (this.isEOF()) return null;
                        var ch = this.char();
                        return 60 === ch ||
                            123 === ch ||
                            (35 === ch && ('plural' === parentArgType || 'selectordinal' === parentArgType)) ||
                            (125 === ch && nestingLevel > 0)
                            ? null
                            : (this.bump(), fromCodePoint(ch));
                    }),
                    (Parser.prototype.parseArgument = function (nestingLevel, expectingCloseTag) {
                        var openingBracePosition = this.clonePosition();
                        if ((this.bump(), this.bumpSpace(), this.isEOF()))
                            return this.error(
                                ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE,
                                createLocation(openingBracePosition, this.clonePosition()),
                            );
                        if (125 === this.char())
                            return (
                                this.bump(),
                                this.error(
                                    ErrorKind.EMPTY_ARGUMENT,
                                    createLocation(openingBracePosition, this.clonePosition()),
                                )
                            );
                        var value = this.parseIdentifierIfPossible().value;
                        if (!value)
                            return this.error(
                                ErrorKind.MALFORMED_ARGUMENT,
                                createLocation(openingBracePosition, this.clonePosition()),
                            );
                        if ((this.bumpSpace(), this.isEOF()))
                            return this.error(
                                ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE,
                                createLocation(openingBracePosition, this.clonePosition()),
                            );
                        switch (this.char()) {
                            case 125:
                                return (
                                    this.bump(),
                                    {
                                        val: {
                                            type: TYPE.argument,
                                            value: value,
                                            location: createLocation(openingBracePosition, this.clonePosition()),
                                        },
                                        err: null,
                                    }
                                );
                            case 44:
                                return (
                                    this.bump(),
                                    this.bumpSpace(),
                                    this.isEOF()
                                        ? this.error(
                                              ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE,
                                              createLocation(openingBracePosition, this.clonePosition()),
                                          )
                                        : this.parseArgumentOptions(
                                              nestingLevel,
                                              expectingCloseTag,
                                              value,
                                              openingBracePosition,
                                          )
                                );
                            default:
                                return this.error(
                                    ErrorKind.MALFORMED_ARGUMENT,
                                    createLocation(openingBracePosition, this.clonePosition()),
                                );
                        }
                    }),
                    (Parser.prototype.parseIdentifierIfPossible = function () {
                        var startingPosition = this.clonePosition(),
                            startOffset = this.offset(),
                            value = matchIdentifierAtIndex(this.message, startOffset),
                            endOffset = startOffset + value.length;
                        this.bumpTo(endOffset);
                        var endPosition = this.clonePosition(),
                            location = createLocation(startingPosition, endPosition);
                        return { value: value, location: location };
                    }),
                    (Parser.prototype.parseArgumentOptions = function (
                        nestingLevel,
                        expectingCloseTag,
                        value,
                        openingBracePosition,
                    ) {
                        var _a,
                            typeStartPosition = this.clonePosition(),
                            argType = this.parseIdentifierIfPossible().value,
                            typeEndPosition = this.clonePosition();
                        switch (argType) {
                            case '':
                                return this.error(
                                    ErrorKind.EXPECT_ARGUMENT_TYPE,
                                    createLocation(typeStartPosition, typeEndPosition),
                                );
                            case 'number':
                            case 'date':
                            case 'time':
                                this.bumpSpace();
                                var styleAndLocation = null;
                                if (this.bumpIf(',')) {
                                    this.bumpSpace();
                                    var styleStartPosition = this.clonePosition(),
                                        result = this.parseSimpleArgStyleIfPossible();
                                    if (result.err) return result;
                                    var style = trimEnd(result.val);
                                    if (0 === style.length)
                                        return this.error(
                                            ErrorKind.EXPECT_ARGUMENT_STYLE,
                                            createLocation(this.clonePosition(), this.clonePosition()),
                                        );
                                    var styleLocation = createLocation(styleStartPosition, this.clonePosition());
                                    styleAndLocation = { style: style, styleLocation: styleLocation };
                                }
                                var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
                                if (argCloseResult.err) return argCloseResult;
                                var location_1 = createLocation(openingBracePosition, this.clonePosition());
                                if (
                                    styleAndLocation &&
                                    startsWith(null == styleAndLocation ? void 0 : styleAndLocation.style, '::', 0)
                                ) {
                                    var skeleton = trimStart(styleAndLocation.style.slice(2));
                                    if ('number' === argType) {
                                        result = this.parseNumberSkeletonFromString(
                                            skeleton,
                                            styleAndLocation.styleLocation,
                                        );
                                        return result.err
                                            ? result
                                            : {
                                                  val: {
                                                      type: TYPE.number,
                                                      value: value,
                                                      location: location_1,
                                                      style: result.val,
                                                  },
                                                  err: null,
                                              };
                                    }
                                    if (0 === skeleton.length)
                                        return this.error(ErrorKind.EXPECT_DATE_TIME_SKELETON, location_1);
                                    style = {
                                        type: SKELETON_TYPE.dateTime,
                                        pattern: skeleton,
                                        location: styleAndLocation.styleLocation,
                                        parsedOptions: this.shouldParseSkeletons ? parseDateTimeSkeleton(skeleton) : {},
                                    };
                                    var type = 'date' === argType ? TYPE.date : TYPE.time;
                                    return {
                                        val: { type: type, value: value, location: location_1, style: style },
                                        err: null,
                                    };
                                }
                                return {
                                    val: {
                                        type:
                                            'number' === argType
                                                ? TYPE.number
                                                : 'date' === argType
                                                  ? TYPE.date
                                                  : TYPE.time,
                                        value: value,
                                        location: location_1,
                                        style:
                                            null !==
                                                (_a = null == styleAndLocation ? void 0 : styleAndLocation.style) &&
                                            void 0 !== _a
                                                ? _a
                                                : null,
                                    },
                                    err: null,
                                };
                            case 'plural':
                            case 'selectordinal':
                            case 'select':
                                var typeEndPosition_1 = this.clonePosition();
                                if ((this.bumpSpace(), !this.bumpIf(',')))
                                    return this.error(
                                        ErrorKind.EXPECT_SELECT_ARGUMENT_OPTIONS,
                                        createLocation(typeEndPosition_1, (0, tslib_es6.a)({}, typeEndPosition_1)),
                                    );
                                this.bumpSpace();
                                var identifierAndLocation = this.parseIdentifierIfPossible(),
                                    pluralOffset = 0;
                                if ('select' !== argType && 'offset' === identifierAndLocation.value) {
                                    if (!this.bumpIf(':'))
                                        return this.error(
                                            ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                                            createLocation(this.clonePosition(), this.clonePosition()),
                                        );
                                    this.bumpSpace();
                                    result = this.tryParseDecimalInteger(
                                        ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                                        ErrorKind.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE,
                                    );
                                    if (result.err) return result;
                                    this.bumpSpace(),
                                        (identifierAndLocation = this.parseIdentifierIfPossible()),
                                        (pluralOffset = result.val);
                                }
                                var optionsResult = this.tryParsePluralOrSelectOptions(
                                    nestingLevel,
                                    argType,
                                    expectingCloseTag,
                                    identifierAndLocation,
                                );
                                if (optionsResult.err) return optionsResult;
                                argCloseResult = this.tryParseArgumentClose(openingBracePosition);
                                if (argCloseResult.err) return argCloseResult;
                                var location_2 = createLocation(openingBracePosition, this.clonePosition());
                                return 'select' === argType
                                    ? {
                                          val: {
                                              type: TYPE.select,
                                              value: value,
                                              options: fromEntries(optionsResult.val),
                                              location: location_2,
                                          },
                                          err: null,
                                      }
                                    : {
                                          val: {
                                              type: TYPE.plural,
                                              value: value,
                                              options: fromEntries(optionsResult.val),
                                              offset: pluralOffset,
                                              pluralType: 'plural' === argType ? 'cardinal' : 'ordinal',
                                              location: location_2,
                                          },
                                          err: null,
                                      };
                            default:
                                return this.error(
                                    ErrorKind.INVALID_ARGUMENT_TYPE,
                                    createLocation(typeStartPosition, typeEndPosition),
                                );
                        }
                    }),
                    (Parser.prototype.tryParseArgumentClose = function (openingBracePosition) {
                        return this.isEOF() || 125 !== this.char()
                            ? this.error(
                                  ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE,
                                  createLocation(openingBracePosition, this.clonePosition()),
                              )
                            : (this.bump(), { val: !0, err: null });
                    }),
                    (Parser.prototype.parseSimpleArgStyleIfPossible = function () {
                        for (var nestedBraces = 0, startPosition = this.clonePosition(); !this.isEOF(); ) {
                            var ch = this.char();
                            switch (ch) {
                                case 39:
                                    this.bump();
                                    var apostrophePosition = this.clonePosition();
                                    if (!this.bumpUntil("'"))
                                        return this.error(
                                            ErrorKind.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,
                                            createLocation(apostrophePosition, this.clonePosition()),
                                        );
                                    this.bump();
                                    break;
                                case 123:
                                    (nestedBraces += 1), this.bump();
                                    break;
                                case 125:
                                    if (!(nestedBraces > 0))
                                        return {
                                            val: this.message.slice(startPosition.offset, this.offset()),
                                            err: null,
                                        };
                                    nestedBraces -= 1;
                                    break;
                                default:
                                    this.bump();
                            }
                        }
                        return { val: this.message.slice(startPosition.offset, this.offset()), err: null };
                    }),
                    (Parser.prototype.parseNumberSkeletonFromString = function (skeleton, location) {
                        var tokens = [];
                        try {
                            tokens = parseNumberSkeletonFromString(skeleton);
                        } catch (e) {
                            return this.error(ErrorKind.INVALID_NUMBER_SKELETON, location);
                        }
                        return {
                            val: {
                                type: SKELETON_TYPE.number,
                                tokens: tokens,
                                location: location,
                                parsedOptions: this.shouldParseSkeletons ? parseNumberSkeleton(tokens) : {},
                            },
                            err: null,
                        };
                    }),
                    (Parser.prototype.tryParsePluralOrSelectOptions = function (
                        nestingLevel,
                        parentArgType,
                        expectCloseTag,
                        parsedFirstIdentifier,
                    ) {
                        for (
                            var _a,
                                hasOtherClause = !1,
                                options = [],
                                parsedSelectors = new Set(),
                                selector = parsedFirstIdentifier.value,
                                selectorLocation = parsedFirstIdentifier.location;
                            ;

                        ) {
                            if (0 === selector.length) {
                                var startPosition = this.clonePosition();
                                if ('select' === parentArgType || !this.bumpIf('=')) break;
                                var result = this.tryParseDecimalInteger(
                                    ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                                    ErrorKind.INVALID_PLURAL_ARGUMENT_SELECTOR,
                                );
                                if (result.err) return result;
                                (selectorLocation = createLocation(startPosition, this.clonePosition())),
                                    (selector = this.message.slice(startPosition.offset, this.offset()));
                            }
                            if (parsedSelectors.has(selector))
                                return this.error(
                                    'select' === parentArgType
                                        ? ErrorKind.DUPLICATE_SELECT_ARGUMENT_SELECTOR
                                        : ErrorKind.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,
                                    selectorLocation,
                                );
                            'other' === selector && (hasOtherClause = !0), this.bumpSpace();
                            var openingBracePosition = this.clonePosition();
                            if (!this.bumpIf('{'))
                                return this.error(
                                    'select' === parentArgType
                                        ? ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
                                        : ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,
                                    createLocation(this.clonePosition(), this.clonePosition()),
                                );
                            var fragmentResult = this.parseMessage(nestingLevel + 1, parentArgType, expectCloseTag);
                            if (fragmentResult.err) return fragmentResult;
                            var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
                            if (argCloseResult.err) return argCloseResult;
                            options.push([
                                selector,
                                {
                                    value: fragmentResult.val,
                                    location: createLocation(openingBracePosition, this.clonePosition()),
                                },
                            ]),
                                parsedSelectors.add(selector),
                                this.bumpSpace(),
                                (_a = this.parseIdentifierIfPossible()),
                                (selector = _a.value),
                                (selectorLocation = _a.location);
                        }
                        return 0 === options.length
                            ? this.error(
                                  'select' === parentArgType
                                      ? ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR
                                      : ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                                  createLocation(this.clonePosition(), this.clonePosition()),
                              )
                            : this.requiresOtherClause && !hasOtherClause
                              ? this.error(
                                    ErrorKind.MISSING_OTHER_CLAUSE,
                                    createLocation(this.clonePosition(), this.clonePosition()),
                                )
                              : { val: options, err: null };
                    }),
                    (Parser.prototype.tryParseDecimalInteger = function (expectNumberError, invalidNumberError) {
                        var sign = 1,
                            startingPosition = this.clonePosition();
                        this.bumpIf('+') || (this.bumpIf('-') && (sign = -1));
                        for (var hasDigits = !1, decimal = 0; !this.isEOF(); ) {
                            var ch = this.char();
                            if (!(ch >= 48 && ch <= 57)) break;
                            (hasDigits = !0), (decimal = 10 * decimal + (ch - 48)), this.bump();
                        }
                        var location = createLocation(startingPosition, this.clonePosition());
                        return hasDigits
                            ? ((decimal *= sign),
                              isSafeInteger(decimal)
                                  ? { val: decimal, err: null }
                                  : this.error(invalidNumberError, location))
                            : this.error(expectNumberError, location);
                    }),
                    (Parser.prototype.offset = function () {
                        return this.position.offset;
                    }),
                    (Parser.prototype.isEOF = function () {
                        return this.offset() === this.message.length;
                    }),
                    (Parser.prototype.clonePosition = function () {
                        return { offset: this.position.offset, line: this.position.line, column: this.position.column };
                    }),
                    (Parser.prototype.char = function () {
                        var offset = this.position.offset;
                        if (offset >= this.message.length) throw Error('out of bound');
                        var code = codePointAt(this.message, offset);
                        if (void 0 === code)
                            throw Error('Offset '.concat(offset, ' is at invalid UTF-16 code unit boundary'));
                        return code;
                    }),
                    (Parser.prototype.error = function (kind, location) {
                        return { val: null, err: { kind: kind, message: this.message, location: location } };
                    }),
                    (Parser.prototype.bump = function () {
                        if (!this.isEOF()) {
                            var code = this.char();
                            10 === code
                                ? ((this.position.line += 1), (this.position.column = 1), (this.position.offset += 1))
                                : ((this.position.column += 1), (this.position.offset += code < 65536 ? 1 : 2));
                        }
                    }),
                    (Parser.prototype.bumpIf = function (prefix) {
                        if (startsWith(this.message, prefix, this.offset())) {
                            for (var i = 0; i < prefix.length; i++) this.bump();
                            return !0;
                        }
                        return !1;
                    }),
                    (Parser.prototype.bumpUntil = function (pattern) {
                        var currentOffset = this.offset(),
                            index = this.message.indexOf(pattern, currentOffset);
                        return index >= 0 ? (this.bumpTo(index), !0) : (this.bumpTo(this.message.length), !1);
                    }),
                    (Parser.prototype.bumpTo = function (targetOffset) {
                        if (this.offset() > targetOffset)
                            throw Error(
                                'targetOffset '
                                    .concat(targetOffset, ' must be greater than or equal to the current offset ')
                                    .concat(this.offset()),
                            );
                        for (targetOffset = Math.min(targetOffset, this.message.length); ; ) {
                            var offset = this.offset();
                            if (offset === targetOffset) break;
                            if (offset > targetOffset)
                                throw Error(
                                    'targetOffset '.concat(targetOffset, ' is at invalid UTF-16 code unit boundary'),
                                );
                            if ((this.bump(), this.isEOF())) break;
                        }
                    }),
                    (Parser.prototype.bumpSpace = function () {
                        for (; !this.isEOF() && _isWhiteSpace(this.char()); ) this.bump();
                    }),
                    (Parser.prototype.peek = function () {
                        if (this.isEOF()) return null;
                        var code = this.char(),
                            offset = this.offset(),
                            nextCode = this.message.charCodeAt(offset + (code >= 65536 ? 2 : 1));
                        return null != nextCode ? nextCode : null;
                    }),
                    Parser
                );
            })();
        },
        672: function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            function invariant(condition, message, Err) {
                if ((void 0 === Err && (Err = Error), !condition)) throw new Err(message);
            }
            __webpack_require__.d(__webpack_exports__, {
                a: function () {
                    return invariant;
                },
            });
        },
        683: function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            function filterProps(props, whitelist, defaults) {
                return (
                    void 0 === defaults && (defaults = {}),
                    whitelist.reduce(function (filtered, name) {
                        return (
                            name in props
                                ? (filtered[name] = props[name])
                                : name in defaults && (filtered[name] = defaults[name]),
                            filtered
                        );
                    }, {})
                );
            }
            function createIntlCache() {
                return {
                    dateTime: {},
                    number: {},
                    message: {},
                    relativeTime: {},
                    pluralRules: {},
                    list: {},
                    displayNames: {},
                };
            }
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
            function createFormatters(cache) {
                void 0 === cache &&
                    (cache = {
                        dateTime: {},
                        number: {},
                        message: {},
                        relativeTime: {},
                        pluralRules: {},
                        list: {},
                        displayNames: {},
                    });
                var RelativeTimeFormat = Intl.RelativeTimeFormat,
                    ListFormat = Intl.ListFormat,
                    DisplayNames = Intl.DisplayNames,
                    getDateTimeFormat = (0, _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__.a)(
                        function () {
                            for (var _a, args = [], _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                            return new ((_a = Intl.DateTimeFormat).bind.apply(
                                _a,
                                (0, tslib__WEBPACK_IMPORTED_MODULE_0__.d)([void 0], args, !1),
                            ))();
                        },
                        {
                            cache: createFastMemoizeCache(cache.dateTime),
                            strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__.b.variadic,
                        },
                    ),
                    getNumberFormat = (0, _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__.a)(
                        function () {
                            for (var _a, args = [], _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                            return new ((_a = Intl.NumberFormat).bind.apply(
                                _a,
                                (0, tslib__WEBPACK_IMPORTED_MODULE_0__.d)([void 0], args, !1),
                            ))();
                        },
                        {
                            cache: createFastMemoizeCache(cache.number),
                            strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__.b.variadic,
                        },
                    ),
                    getPluralRules = (0, _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__.a)(
                        function () {
                            for (var _a, args = [], _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                            return new ((_a = Intl.PluralRules).bind.apply(
                                _a,
                                (0, tslib__WEBPACK_IMPORTED_MODULE_0__.d)([void 0], args, !1),
                            ))();
                        },
                        {
                            cache: createFastMemoizeCache(cache.pluralRules),
                            strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__.b.variadic,
                        },
                    );
                return {
                    getDateTimeFormat: getDateTimeFormat,
                    getNumberFormat: getNumberFormat,
                    getMessageFormat: (0, _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__.a)(
                        function (message, locales, overrideFormats, opts) {
                            return new intl_messageformat__WEBPACK_IMPORTED_MODULE_1__.a(
                                message,
                                locales,
                                overrideFormats,
                                (0, tslib__WEBPACK_IMPORTED_MODULE_0__.a)(
                                    {
                                        formatters: {
                                            getNumberFormat: getNumberFormat,
                                            getDateTimeFormat: getDateTimeFormat,
                                            getPluralRules: getPluralRules,
                                        },
                                    },
                                    opts || {},
                                ),
                            );
                        },
                        {
                            cache: createFastMemoizeCache(cache.message),
                            strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__.b.variadic,
                        },
                    ),
                    getRelativeTimeFormat: (0, _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__.a)(
                        function () {
                            for (var args = [], _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                            return new (RelativeTimeFormat.bind.apply(
                                RelativeTimeFormat,
                                (0, tslib__WEBPACK_IMPORTED_MODULE_0__.d)([void 0], args, !1),
                            ))();
                        },
                        {
                            cache: createFastMemoizeCache(cache.relativeTime),
                            strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__.b.variadic,
                        },
                    ),
                    getPluralRules: getPluralRules,
                    getListFormat: (0, _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__.a)(
                        function () {
                            for (var args = [], _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                            return new (ListFormat.bind.apply(
                                ListFormat,
                                (0, tslib__WEBPACK_IMPORTED_MODULE_0__.d)([void 0], args, !1),
                            ))();
                        },
                        {
                            cache: createFastMemoizeCache(cache.list),
                            strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__.b.variadic,
                        },
                    ),
                    getDisplayNames: (0, _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__.a)(
                        function () {
                            for (var args = [], _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                            return new (DisplayNames.bind.apply(
                                DisplayNames,
                                (0, tslib__WEBPACK_IMPORTED_MODULE_0__.d)([void 0], args, !1),
                            ))();
                        },
                        {
                            cache: createFastMemoizeCache(cache.displayNames),
                            strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__.b.variadic,
                        },
                    ),
                };
            }
            function getNamedFormat(formats, type, name, onError) {
                var format,
                    formatType = formats && formats[type];
                if ((formatType && (format = formatType[name]), format)) return format;
                onError(new _error__WEBPACK_IMPORTED_MODULE_3__.h('No '.concat(type, ' format named: ').concat(name)));
            }
            __webpack_require__.d(__webpack_exports__, {
                a: function () {
                    return DEFAULT_INTL_CONFIG;
                },
                b: function () {
                    return createFormatters;
                },
                c: function () {
                    return createIntlCache;
                },
                d: function () {
                    return filterProps;
                },
                e: function () {
                    return getNamedFormat;
                },
            });
            var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(635),
                intl_messageformat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(587),
                _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(819),
                _error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(160),
                DEFAULT_INTL_CONFIG = {
                    formats: {},
                    messages: {},
                    timeZone: void 0,
                    defaultLocale: 'en',
                    defaultFormats: {},
                    fallbackOnEmptyString: !0,
                    onError: function (error) {
                        0;
                    },
                };
        },
        819: function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            function memoize(fn, options) {
                var cache = options && options.cache ? options.cache : cacheDefault,
                    serializer = options && options.serializer ? options.serializer : serializerDefault,
                    strategy = options && options.strategy ? options.strategy : strategyDefault;
                return strategy(fn, { cache: cache, serializer: serializer });
            }
            function monadic(fn, cache, serializer, arg) {
                var value,
                    cacheKey =
                        ((value = arg),
                        null == value || 'number' == typeof value || 'boolean' == typeof value ? arg : serializer(arg)),
                    computedValue = cache.get(cacheKey);
                return (
                    void 0 === computedValue &&
                        ((computedValue = fn.call(this, arg)), cache.set(cacheKey, computedValue)),
                    computedValue
                );
            }
            function variadic(fn, cache, serializer) {
                var args = Array.prototype.slice.call(arguments, 3),
                    cacheKey = serializer(args),
                    computedValue = cache.get(cacheKey);
                return (
                    void 0 === computedValue &&
                        ((computedValue = fn.apply(this, args)), cache.set(cacheKey, computedValue)),
                    computedValue
                );
            }
            function assemble(fn, context, strategy, cache, serialize) {
                return strategy.bind(context, fn, cache, serialize);
            }
            function strategyDefault(fn, options) {
                var strategy = 1 === fn.length ? monadic : variadic;
                return assemble(fn, this, strategy, options.cache.create(), options.serializer);
            }
            function ObjectWithoutPrototypeCache() {
                this.cache = Object.create(null);
            }
            __webpack_require__.d(__webpack_exports__, {
                a: function () {
                    return memoize;
                },
                b: function () {
                    return strategies;
                },
            });
            var serializerDefault = function () {
                return JSON.stringify(arguments);
            };
            (ObjectWithoutPrototypeCache.prototype.get = function (key) {
                return this.cache[key];
            }),
                (ObjectWithoutPrototypeCache.prototype.set = function (key, value) {
                    this.cache[key] = value;
                });
            var cacheDefault = {
                    create: function () {
                        return new ObjectWithoutPrototypeCache();
                    },
                },
                strategies = {
                    variadic: function (fn, options) {
                        return assemble(fn, this, variadic, options.cache.create(), options.serializer);
                    },
                    monadic: function (fn, options) {
                        return assemble(fn, this, monadic, options.cache.create(), options.serializer);
                    },
                };
        },
        842: function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            function getFormatter(_a, getNumberFormat, options) {
                var locale = _a.locale,
                    formats = _a.formats,
                    onError = _a.onError;
                void 0 === options && (options = {});
                var format = options.format,
                    defaults = (format && (0, utils.e)(formats, 'number', format, onError)) || {},
                    filteredOptions = (0, utils.d)(options, NUMBER_FORMAT_OPTIONS, defaults);
                return getNumberFormat(locale, filteredOptions);
            }
            function formatNumber(config, getNumberFormat, value, options) {
                void 0 === options && (options = {});
                try {
                    return getFormatter(config, getNumberFormat, options).format(value);
                } catch (e) {
                    config.onError(new error.b(error.a.FORMAT_ERROR, 'Error formatting number.', e));
                }
                return String(value);
            }
            function formatNumberToParts(config, getNumberFormat, value, options) {
                void 0 === options && (options = {});
                try {
                    return getFormatter(config, getNumberFormat, options).formatToParts(value);
                } catch (e) {
                    config.onError(new error.b(error.a.FORMAT_ERROR, 'Error formatting number.', e));
                }
                return [];
            }
            function relativeTime_getFormatter(_a, getRelativeTimeFormat, options) {
                var locale = _a.locale,
                    formats = _a.formats,
                    onError = _a.onError;
                void 0 === options && (options = {});
                var format = options.format,
                    defaults = (!!format && (0, utils.e)(formats, 'relative', format, onError)) || {},
                    filteredOptions = (0, utils.d)(options, RELATIVE_TIME_FORMAT_OPTIONS, defaults);
                return getRelativeTimeFormat(locale, filteredOptions);
            }
            function formatRelativeTime(config, getRelativeTimeFormat, value, unit, options) {
                void 0 === options && (options = {}), unit || (unit = 'second');
                var RelativeTimeFormat = Intl.RelativeTimeFormat;
                RelativeTimeFormat ||
                    config.onError(
                        new src_error.b(
                            'Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n',
                            src_error.a.MISSING_INTL_API,
                        ),
                    );
                try {
                    return relativeTime_getFormatter(config, getRelativeTimeFormat, options).format(value, unit);
                } catch (e) {
                    config.onError(new error.c('Error formatting relative time.', config.locale, e));
                }
                return String(value);
            }
            function dateTime_getFormatter(_a, type, getDateTimeFormat, options) {
                var locale = _a.locale,
                    formats = _a.formats,
                    onError = _a.onError,
                    timeZone = _a.timeZone;
                void 0 === options && (options = {});
                var format = options.format,
                    defaults = (0, tslib_es6.a)(
                        (0, tslib_es6.a)({}, timeZone && { timeZone: timeZone }),
                        format && (0, utils.e)(formats, type, format, onError),
                    ),
                    filteredOptions = (0, utils.d)(options, DATE_TIME_FORMAT_OPTIONS, defaults);
                return (
                    'time' !== type ||
                        filteredOptions.hour ||
                        filteredOptions.minute ||
                        filteredOptions.second ||
                        filteredOptions.timeStyle ||
                        filteredOptions.dateStyle ||
                        (filteredOptions = (0, tslib_es6.a)((0, tslib_es6.a)({}, filteredOptions), {
                            hour: 'numeric',
                            minute: 'numeric',
                        })),
                    getDateTimeFormat(locale, filteredOptions)
                );
            }
            function formatDate(config, getDateTimeFormat) {
                for (var _a = [], _i = 2; _i < arguments.length; _i++) _a[_i - 2] = arguments[_i];
                var value = _a[0],
                    _b = _a[1],
                    options = void 0 === _b ? {} : _b,
                    date = 'string' == typeof value ? new Date(value || 0) : value;
                try {
                    return dateTime_getFormatter(config, 'date', getDateTimeFormat, options).format(date);
                } catch (e) {
                    config.onError(new error.b(error.a.FORMAT_ERROR, 'Error formatting date.', e));
                }
                return String(date);
            }
            function formatTime(config, getDateTimeFormat) {
                for (var _a = [], _i = 2; _i < arguments.length; _i++) _a[_i - 2] = arguments[_i];
                var value = _a[0],
                    _b = _a[1],
                    options = void 0 === _b ? {} : _b,
                    date = 'string' == typeof value ? new Date(value || 0) : value;
                try {
                    return dateTime_getFormatter(config, 'time', getDateTimeFormat, options).format(date);
                } catch (e) {
                    config.onError(new error.b(error.a.FORMAT_ERROR, 'Error formatting time.', e));
                }
                return String(date);
            }
            function formatDateTimeRange(config, getDateTimeFormat) {
                for (var _a = [], _i = 2; _i < arguments.length; _i++) _a[_i - 2] = arguments[_i];
                var from = _a[0],
                    to = _a[1],
                    _b = _a[2],
                    options = void 0 === _b ? {} : _b,
                    timeZone = config.timeZone,
                    locale = config.locale,
                    onError = config.onError,
                    filteredOptions = (0, utils.d)(
                        options,
                        DATE_TIME_FORMAT_OPTIONS,
                        timeZone ? { timeZone: timeZone } : {},
                    );
                try {
                    return getDateTimeFormat(locale, filteredOptions).formatRange(from, to);
                } catch (e) {
                    onError(new error.b(error.a.FORMAT_ERROR, 'Error formatting date time range.', e));
                }
                return String(from);
            }
            function formatDateToParts(config, getDateTimeFormat) {
                for (var _a = [], _i = 2; _i < arguments.length; _i++) _a[_i - 2] = arguments[_i];
                var value = _a[0],
                    _b = _a[1],
                    options = void 0 === _b ? {} : _b,
                    date = 'string' == typeof value ? new Date(value || 0) : value;
                try {
                    return dateTime_getFormatter(config, 'date', getDateTimeFormat, options).formatToParts(date);
                } catch (e) {
                    config.onError(new error.b(error.a.FORMAT_ERROR, 'Error formatting date.', e));
                }
                return [];
            }
            function formatTimeToParts(config, getDateTimeFormat) {
                for (var _a = [], _i = 2; _i < arguments.length; _i++) _a[_i - 2] = arguments[_i];
                var value = _a[0],
                    _b = _a[1],
                    options = void 0 === _b ? {} : _b,
                    date = 'string' == typeof value ? new Date(value || 0) : value;
                try {
                    return dateTime_getFormatter(config, 'time', getDateTimeFormat, options).formatToParts(date);
                } catch (e) {
                    config.onError(new error.b(error.a.FORMAT_ERROR, 'Error formatting time.', e));
                }
                return [];
            }
            function formatPlural(_a, getPluralRules, value, options) {
                var locale = _a.locale,
                    onError = _a.onError;
                void 0 === options && (options = {}),
                    Intl.PluralRules ||
                        onError(
                            new src_error.b(
                                'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                                src_error.a.MISSING_INTL_API,
                            ),
                        );
                var filteredOptions = (0, utils.d)(options, PLURAL_FORMAT_OPTIONS);
                try {
                    return getPluralRules(locale, filteredOptions).select(value);
                } catch (e) {
                    onError(new error.c('Error formatting plural.', locale, e));
                }
                return 'other';
            }
            function generateToken(i) {
                return ''.concat(now, '_').concat(i, '_').concat(now);
            }
            function formatList(opts, getListFormat, values, options) {
                void 0 === options && (options = {});
                var results = formatListToParts(opts, getListFormat, values, options).reduce(function (all, el) {
                    var val = el.value;
                    return (
                        'string' != typeof val
                            ? all.push(val)
                            : 'string' == typeof all[all.length - 1]
                              ? (all[all.length - 1] += val)
                              : all.push(val),
                        all
                    );
                }, []);
                return 1 === results.length ? results[0] : results;
            }
            function formatListToParts(_a, getListFormat, values, options) {
                var locale = _a.locale,
                    onError = _a.onError;
                void 0 === options && (options = {});
                var ListFormat = Intl.ListFormat;
                ListFormat ||
                    onError(
                        new src_error.b(
                            'Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n',
                            src_error.a.MISSING_INTL_API,
                        ),
                    );
                var filteredOptions = (0, utils.d)(options, LIST_FORMAT_OPTIONS);
                try {
                    var richValues_1 = {},
                        serializedValues = values.map(function (v, i) {
                            if ('object' == typeof v) {
                                var id = generateToken(i);
                                return (richValues_1[id] = v), id;
                            }
                            return String(v);
                        });
                    return getListFormat(locale, filteredOptions)
                        .formatToParts(serializedValues)
                        .map(function (part) {
                            return 'literal' === part.type
                                ? part
                                : (0, tslib_es6.a)((0, tslib_es6.a)({}, part), {
                                      value: richValues_1[part.value] || part.value,
                                  });
                        });
                } catch (e) {
                    onError(new error.b(error.a.FORMAT_ERROR, 'Error formatting list.', e));
                }
                return values;
            }
            function formatDisplayName(_a, getDisplayNames, value, options) {
                var locale = _a.locale,
                    onError = _a.onError,
                    DisplayNames = Intl.DisplayNames;
                DisplayNames ||
                    onError(
                        new src_error.b(
                            'Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n',
                            src_error.a.MISSING_INTL_API,
                        ),
                    );
                var filteredOptions = (0, utils.d)(options, DISPLAY_NAMES_OPTONS);
                try {
                    return getDisplayNames(locale, filteredOptions).of(value);
                } catch (e) {
                    onError(new error.b(error.a.FORMAT_ERROR, 'Error formatting display name.', e));
                }
            }
            function verifyConfigMessages(config) {
                var messages, firstMessage;
                config.defaultRichTextElements &&
                    ((messages = config.messages || {}),
                    (firstMessage = messages ? messages[Object.keys(messages)[0]] : void 0),
                    'string' == typeof firstMessage) &&
                    console.warn(
                        '[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution',
                    );
            }
            function createIntl(config, cache) {
                var formatters = (0, utils.b)(cache),
                    resolvedConfig = (0, tslib_es6.a)((0, tslib_es6.a)({}, utils.a), config),
                    locale = resolvedConfig.locale,
                    defaultLocale = resolvedConfig.defaultLocale,
                    onError = resolvedConfig.onError;
                return (
                    locale
                        ? !Intl.NumberFormat.supportedLocalesOf(locale).length && onError
                            ? onError(
                                  new error.f(
                                      'Missing locale data for locale: "'
                                          .concat(locale, '" in Intl.NumberFormat. Using default locale: "')
                                          .concat(
                                              defaultLocale,
                                              '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details',
                                          ),
                                  ),
                              )
                            : !Intl.DateTimeFormat.supportedLocalesOf(locale).length &&
                              onError &&
                              onError(
                                  new error.f(
                                      'Missing locale data for locale: "'
                                          .concat(locale, '" in Intl.DateTimeFormat. Using default locale: "')
                                          .concat(
                                              defaultLocale,
                                              '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details',
                                          ),
                                  ),
                              )
                        : (onError &&
                              onError(
                                  new error.d(
                                      '"locale" was not configured, using "'.concat(
                                          defaultLocale,
                                          '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details',
                                      ),
                                  ),
                              ),
                          (resolvedConfig.locale = resolvedConfig.defaultLocale || 'en')),
                    verifyConfigMessages(resolvedConfig),
                    (0, tslib_es6.a)((0, tslib_es6.a)({}, resolvedConfig), {
                        formatters: formatters,
                        formatNumber: formatNumber.bind(null, resolvedConfig, formatters.getNumberFormat),
                        formatNumberToParts: formatNumberToParts.bind(null, resolvedConfig, formatters.getNumberFormat),
                        formatRelativeTime: formatRelativeTime.bind(
                            null,
                            resolvedConfig,
                            formatters.getRelativeTimeFormat,
                        ),
                        formatDate: formatDate.bind(null, resolvedConfig, formatters.getDateTimeFormat),
                        formatDateToParts: formatDateToParts.bind(null, resolvedConfig, formatters.getDateTimeFormat),
                        formatTime: formatTime.bind(null, resolvedConfig, formatters.getDateTimeFormat),
                        formatDateTimeRange: formatDateTimeRange.bind(
                            null,
                            resolvedConfig,
                            formatters.getDateTimeFormat,
                        ),
                        formatTimeToParts: formatTimeToParts.bind(null, resolvedConfig, formatters.getDateTimeFormat),
                        formatPlural: formatPlural.bind(null, resolvedConfig, formatters.getPluralRules),
                        formatMessage: message.a.bind(null, resolvedConfig, formatters),
                        formatList: formatList.bind(null, resolvedConfig, formatters.getListFormat),
                        formatListToParts: formatListToParts.bind(null, resolvedConfig, formatters.getListFormat),
                        formatDisplayName: formatDisplayName.bind(null, resolvedConfig, formatters.getDisplayNames),
                    })
                );
            }
            __webpack_require__.d(__webpack_exports__, {
                a: function () {
                    return createIntl;
                },
            });
            var tslib_es6 = __webpack_require__(635),
                utils = __webpack_require__(683),
                error = __webpack_require__(160),
                NUMBER_FORMAT_OPTIONS = [
                    'localeMatcher',
                    'style',
                    'currency',
                    'currencyDisplay',
                    'unit',
                    'unitDisplay',
                    'useGrouping',
                    'minimumIntegerDigits',
                    'minimumFractionDigits',
                    'maximumFractionDigits',
                    'minimumSignificantDigits',
                    'maximumSignificantDigits',
                    'compactDisplay',
                    'currencyDisplay',
                    'currencySign',
                    'notation',
                    'signDisplay',
                    'unit',
                    'unitDisplay',
                    'numberingSystem',
                ],
                src_error = __webpack_require__(732),
                RELATIVE_TIME_FORMAT_OPTIONS = ['numeric', 'style'],
                DATE_TIME_FORMAT_OPTIONS = [
                    'localeMatcher',
                    'formatMatcher',
                    'timeZone',
                    'hour12',
                    'weekday',
                    'era',
                    'year',
                    'month',
                    'day',
                    'hour',
                    'minute',
                    'second',
                    'timeZoneName',
                    'hourCycle',
                    'dateStyle',
                    'timeStyle',
                    'calendar',
                    'numberingSystem',
                ],
                PLURAL_FORMAT_OPTIONS = ['localeMatcher', 'type'],
                message = __webpack_require__(205),
                LIST_FORMAT_OPTIONS = ['localeMatcher', 'type', 'style'],
                now = Date.now(),
                DISPLAY_NAMES_OPTONS = ['localeMatcher', 'style', 'type', 'fallback'];
        },
    },
]);
