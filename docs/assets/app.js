(function () {
	'use strict';

	function _misc () {
	  var doc = document; // UA marking

	  var UA_LIST = ['iPhone', 'iPad', 'MQQBrowser', 'Android', 'MicroMessenger', 'Trident'];
	  var ua = navigator.userAgent;
	  var $html = doc.getElementsByTagName('html')[0];

	  for (var i = 0; i < UA_LIST.length; i++) {
	    var uaRegExp = new RegExp(UA_LIST[i]);

	    if (ua.match(uaRegExp)) {
	      $html.classList.add('ua-' + UA_LIST[i]);
	    }
	  }

	  if (ua.indexOf('Safari') !== -1 && ua.indexOf('Chrome') === -1) {
	    $html.classList.add('ua-Safari');
	  }

	  if (!('ontouchstart' in window)) {
	    $html.classList.add('ua-Pointer');
	  } // Enable the CSS `:active` interactions


	  doc.getElementsByTagName('body')[0].addEventListener('touchstart', function () {}, {
	    passive: true
	  });
	  doc.getElementsByTagName('main')[0].addEventListener('touchstart', function () {}, {
	    passive: true
	  }); // Twist HTML language
	  // doc.getElementsByTagName('html')[0].setAttribute('lang', 'en');
	}

	function viewIndex () {
	  var doc = document;
	  var win = window;
	  win.addEventListener('load', function () {
	    setTimeout(function () {
	      var $header = doc.querySelector('.header');
	      $header.classList.add('is-loaded');
	    }, 500);
	  });
	}

	var doc = document; // Misc

	_misc(); // Class

	var view = doc.querySelector('body').classList[0];

	switch (view) {
	  case 'index':
	    {
	      viewIndex();
	      break;
	    }
	}

}());
//# sourceMappingURL=app.js.map
