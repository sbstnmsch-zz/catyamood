var
    _postcssNextProcessor = require('cssnext')(),
    _postcssCustomPropertiesProcessor = require('postcss-custom-properties')(),
    _postcssImportProcessor = require('postcss-import')(),
    _postcssNestedProcessor = require('postcss-nested')(),
    _postcssSvgProcessor = require('postcss-svg')({
      ei: { "defaults": "[fill]: white" }
    }),
    _autoprefixerProcessor = require('autoprefixer-core')({
      browsers: [
        'last 3 Android versions',
        'last 4 iOS versions',
        'last 5 Chrome versions',
        'last 8 ChromeAndroid versions',
        'last 4 ExplorerMobile versions',
        'last 5 FirefoxAndroid versions'
      ]
    }),
    _cssNanoProcessor = require('cssnano')();

module.exports = {
  default: {
    options: {
      map: false,
      processors: [
        _postcssCustomPropertiesProcessor,
        _postcssImportProcessor,
        _postcssNestedProcessor,
        _postcssSvgProcessor,
        _autoprefixerProcessor,
        _postcssNextProcessor
      ]
    },
    files: {
      '<%= paths.dist.stylesheets %>/catyamood.min.css':
        '<%= paths.src.stylesheets %>/index.css'
    }
  }
};
