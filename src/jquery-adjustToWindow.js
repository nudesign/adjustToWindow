(function( $ ) {
  $.fn.adjustToWindow = function(options, element) {

    if (element === undefined) {
      element = window;
    }

    var settings = $.extend({
                              'centralizeW': true,
                              'centralizeH': true
                            }, options);
        
    return this.each(function (){

      var object = $(this);
    
      var iW = object.data('width') || object.width();
      var iH = object.data('height') || object.height();
      var iRatio = iW / iH;

      // if (iW === 0 || iH === 0) return;
    
      var wW = $(element).width();
      var wH = $(element).height();
      var wRatio = wW / wH;
    
      if (iRatio >= wRatio) {
        var nH = wH;
        var nW = Math.round(iRatio * nH);

        if (settings.centralizeW === true) {
          var mL = -Math.round(Math.abs(wW - nW) / 2);
        } else {
          mL = 0;
        }
        var mT = 0;
      } else {
        var nW = wW;
        var nH = Math.round(nW / iRatio);

        if (settings.centralizeH === true) {
          var mT = -Math.round(Math.abs(wH - nH) / 2);
        } else {
          mT = 0;
        }
        var mL = 0;
      }

      object.css({'width': nW, 'height': nH, 'margin-top': mT, 'margin-left': mL});
      
    });
  };
})( jQuery );
