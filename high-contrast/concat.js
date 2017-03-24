var fileset = require('fileset'),
    buildify = require('buildify');

fileset([
    './src/styles.css',
    './src/app/**/*.css',
    './node_modules/bootstrap/dist/css/bootstrap.min.css',
    './node_modules/primeng/resources/primeng.min.css',
    './node_modules/primeng/resources/themes/omega/theme.css',
    './node_modules/loaders.css/loaders.min.css'
  ], function(err, files) {
  buildify()
    .concat(files)
    .save('high-contrast/all.css');
});