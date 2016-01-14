/* global define */
define(['Modernizr'], function(Modernizr) {
  Modernizr.addTest('animationend', function(){
    var a,
        el = document.createElement( 'fakeelement' ),
        animation = {
          'animation':'animationend',
          'OAnimation':'oAnimationEnd',
          'MozAnimation':'animationend',
          'WebkitAnimation':'webkitAnimationEnd'
        };

    for( a in animation ){
      if( el.style[ a ] !== undefined ){
        return animation[ a ];
      }
    }
  });
});
