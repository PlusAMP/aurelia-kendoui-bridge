'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridToolbar = undefined;

var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _constants = require('../common/constants');

var _decorators = require('../common/decorators');

var _templateGatherer = require('../common/template-gatherer');

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var GridToolbar = exports.GridToolbar = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'grid-toolbar'), _dec2 = (0, _decorators.generateBindables)('GridToolbarItem'), _dec3 = (0, _aureliaDependencyInjection.inject)(_templateGatherer.TemplateGatherer), _dec4 = (0, _aureliaTemplating.children)(_constants.constants.elementPrefix + 'template'), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
  function GridToolbar(templateGatherer) {
    _classCallCheck(this, GridToolbar);

    _initDefineProp(this, 'templates', _descriptor, this);

    this.templateGatherer = templateGatherer;
  }

  GridToolbar.prototype.beforeOptionsBuild = function beforeOptionsBuild() {
    this.templateGatherer.useTemplates(this, 'GridToolbarItem', this.templates);
  };

  return GridToolbar;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'templates', [_dec4], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
})), _class2)) || _class) || _class) || _class);