"use strict";
use(function () {
  var app = {};
  app.title = properties["jcr:title"];
  app.description = properties["jcr:description"];
  app.avatar = properties["fileReference"];
  app.qrCode = properties["qrFileReference"];
  app.link = properties["linkURL"];
  app.iosLink = properties["linkIOS"];
  app.androidLink = properties["linkAndroid"];

  return app;
})
