System.register(['./config-builder', 'aurelia-templating-resources', 'jquery', 'kendo.data.min', './common/constants', './common/decorators', './common/events'], function (_export) {
  'use strict';

  var KendoConfigBuilder, RepeatStrategyLocator, ArrayRepeatStrategy;

  _export('configure', configure);

  function configure(aurelia, configCallback) {
    var builder = aurelia.container.get(KendoConfigBuilder);

    if (configCallback !== undefined && typeof configCallback === 'function') {
      configCallback(builder);
    }

    var resources = builder.resources;

    if (resources.length > 0) {
      aurelia.globalResources(resources);
    }

    if (builder.registerRepeatStrategy) {
      var repeatStrategyLocator = aurelia.container.get(RepeatStrategyLocator);
      repeatStrategyLocator.addStrategy(function (items) {
        return items instanceof kendo.data.ObservableArray;
      }, new ArrayRepeatStrategy());
    }
  }

  return {
    setters: [function (_configBuilder) {
      KendoConfigBuilder = _configBuilder.KendoConfigBuilder;
    }, function (_aureliaTemplatingResources) {
      RepeatStrategyLocator = _aureliaTemplatingResources.RepeatStrategyLocator;
      ArrayRepeatStrategy = _aureliaTemplatingResources.ArrayRepeatStrategy;
    }, function (_jquery) {}, function (_kendoDataMin) {}, function (_commonConstants) {
      for (var _key in _commonConstants) {
        if (_key !== 'default') _export(_key, _commonConstants[_key]);
      }
    }, function (_commonDecorators) {
      for (var _key2 in _commonDecorators) {
        if (_key2 !== 'default') _export(_key2, _commonDecorators[_key2]);
      }
    }, function (_commonEvents) {
      for (var _key3 in _commonEvents) {
        if (_key3 !== 'default') _export(_key3, _commonEvents[_key3]);
      }
    }],
    execute: function () {}
  };
});