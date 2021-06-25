var App = (function () {
  'use strict';

  App.formElements = function( ){
    //Js Code
    $("#timestamp").datetimepicker( {
    	autoclose: true,
      format: 'yyyy-mm-ddThh:ii:ssZ',
    	componentIcon: '.s7-date',
    	navIcons: {
    		rightIcon: 's7-angle-right',
    		leftIcon: 's7-angle-left'
    	}
    });

    //Select2
    $(".select2").select2({
      width: '100%'
    });

    //Select2 tags
    $(".tags").select2({tags: true, width: '100%'});

    //Bootstrap Slider
    // $('.bslider').bootstrapSlider();

  };

  return App;
})(App || {});
