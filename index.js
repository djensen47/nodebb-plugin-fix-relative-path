var winston = module.parent.require('winston');

var FixPath = {};

const TAG = '[plugins/fix-relative-path] ';
const verbose = (msg) => {
  winston.verbose(TAG+msg);
}

FixPath.parsePost = (data, callback) => {
  const post = data.postData;
  if (!!post['__imported_original_data__']) {
    post.content = post.content.replace(/((\[.*\])\((\/uploads\/.*)\))/gm, '$2(/forums/assets$3)');
  }
  callback(null, data);
};

module.exports = FixPath;
