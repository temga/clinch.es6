"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
   This is separate ES6 plugin for Clinch processor
 */

var babel = require("babel-core");

var extension = '.js';

var processor = function processor(data, filename, cb) {
  var content = undefined;
  try {
    content = babel.transform(data, {
      "presets": ["es2015"],
      filename: filename
    });
  } catch (error) {
    return cb(error);
  }

  cb(null, content, true);
};

var clinch_es6 = exports.clinch_es6 = { extension: extension, processor: processor };
