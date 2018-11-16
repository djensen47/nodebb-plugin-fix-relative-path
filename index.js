var winston = module.parent.require('winston');

var FixPath = {};

const TAG = '[plugins/fix-relative-path] ';

FixPath.parsePost = (data, callback) => {
  winston.verbose(TAG + JSON.stringify(data));
  callback(null)
};

module.exports = FixPath;
