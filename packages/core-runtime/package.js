Package.describe({
  summary: "Core runtime to load packages and the app",
  version: '2.0.0-alpha300.6',
  documentation: null
});

Package.onUse(function (api) {
  // This package is linked differently since it sets up the runtime
  // the linker expects to exist.
  // Currently this package can not use any exports or ordered dependencies

  api.use('meteor', { unordered: true });
  api.addFiles('package-registry.js');
  api.addFiles('load-js-image.js');
});