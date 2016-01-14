/* global define */
define(['Modernizr'], function(Modernizr) {
  Modernizr.addTest('storage', function() {
    var storage = false;
    try {
        window.sessionStorage.setItem( 'storage', '' );
        window.sessionStorage.removeItem( 'storage' );
        storage = true;
    }
    catch(err) {
      window.sessionStorage = false;
      storage = false;
    }
    return storage;
  });
});
