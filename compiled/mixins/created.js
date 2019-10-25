"use strict";

var is_empty = require('../helpers/is-empty');

var registerVuexModule = require('../state/register-module');

module.exports = function (self) {
  if (self.vuex) {
    registerVuexModule(self);
  } else {
    self.limit = self.opts.perPage;
  }

  if (is_empty(self.opts.columnsDisplay) || typeof window === 'undefined') return;
  self.columnsDisplay = getColumnsDisplay(self.opts.columnsDisplay);
  window.addEventListener('resize', function () {
    self.windowWidth = window.innerWidth;
  }.bind(self));
};

function getColumnsDisplay(columnsDisplay) {
  var res = {};
  var range;
  var device;
  var operator;

  for (var column in columnsDisplay) {
    operator = getOperator(columnsDisplay[column]);

    try {
      device = getDevice(columnsDisplay[column]);
      range = getRange(device, operator);
      res[column] = range.concat([operator]);
    } catch (err) {
      console.warn('Unknown device ' + device);
    }
  }

  return res;
}

function getRange(device, operator) {
  var devices = {
    desktop: [1024, null],
    tablet: [480, 1024],
    mobile: [0, 480],
    tabletL: [768, 1024],
    tabletP: [480, 768],
    mobileL: [320, 480],
    mobileP: [0, 320]
  };

  switch (operator) {
    case 'min':
      return [devices[device][0], null];

    case 'max':
      return [0, devices[device][1]];

    default:
      return devices[device];
  }
}

function getOperator(val) {
  var pieces = val.split('_');
  if (['not', 'min', 'max'].indexOf(pieces[0]) > -1) return pieces[0];
  return false;
}

function getDevice(val) {
  var pieces = val.split('_');
  return pieces.length > 1 ? pieces[1] : pieces[0];
}