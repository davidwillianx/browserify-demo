var $ = require('jquery');

var MyModule = (function(){

  var init = function(){
    console.log('initializing activity');
  }

  return {
    init: init
  };

})();

$('document').ready(MyModule.init());
