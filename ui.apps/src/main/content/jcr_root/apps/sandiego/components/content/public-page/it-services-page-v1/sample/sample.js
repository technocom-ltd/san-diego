
"use strict";
use(function () {
    var info = {};    
    info.title = properties["jcr:title"];
    info.fileName = properties["fileReference"];
    info.description = resource.properties["description"];    
    return info;
})