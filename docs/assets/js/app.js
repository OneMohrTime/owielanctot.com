require('../css/app.scss');

//require('jquery')
//require('bootstrap')
//var hljs = require('highlightjs')
//
//hljs.initHighlightingOnLoad();

const jsAccordions = document.querySelectorAll('.js-Accordion');

jsAccordions.forEach(function(el, i) {
	i++
	let accordionID = 'accordion_' + i,
		accordion   = new Accordion({
			element: accordionID,
			openTab: 1,
			oneOpen: false
		});
});
