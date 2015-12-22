/**
   This is separate ES6 plugin for Clinch processor
 */

var babel = require("babel-core");

const extension = '.js';

let processor = (data, filename, cb) => {
  let content;
  try {
    content = babel.transform(data, {
      "presets": ["es2015"],
      filename : filename
    })
  }
  catch (error) {
    return cb(error)
  }

  cb(null, content, true);
};

export const clinch_es6 = {extension, processor};


