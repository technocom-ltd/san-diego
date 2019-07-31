"use strict";
use(function () {
  var app = {};
  app.title = properties["jcr:title"];
  app.description = properties["jcr:description"];
  app.avatar = properties["fileReference"];
  app.qrCode = properties["qrFileReference"];
  app.link = properties["linkURL"];
  app.iosLink = properties["linkIOS"];
  app.amazonLink = properties["linkAmazon"];
  app.androidLink = properties["linkAndroid"];
  app.isFavoriteApp = properties["isFavoriteApp"];
  return app;
})
