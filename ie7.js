/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'keativa-icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'kea-home': '&#xe601;',
		'kea-office': '&#xe602;',
		'kea-image': '&#xe603;',
		'kea-play': '&#xe604;',
		'kea-movie': '&#xe605;',
		'kea-toa': '&#xe606;',
		'kea-file': '&#xe607;',
		'kea-profile': '&#xe608;',
		'kea-file2': '&#xe609;',
		'kea-folder': '&#xe60a;',
		'kea-tag': '&#xe60b;',
		'kea-tags': '&#xe60c;',
		'kea-cart': '&#xe60d;',
		'kea-phone': '&#xe60e;',
		'kea-mobile': '&#xe60f;',
		'kea-comment': '&#xe610;',
		'kea-comments': '&#xe611;',
		'kea-user': '&#xe612;',
		'kea-users': '&#xe613;',
		'kea-search': '&#xe614;',
		'kea-leaf': '&#xe615;',
		'kea-list': '&#xe616;',
		'kea-globe': '&#xe617;',
		'kea-earth': '&#xe600;',
		'kea-link': '&#xe618;',
		'kea-thumbs-up': '&#xe619;',
		'kea-wondering': '&#xe61a;',
		'kea-question': '&#xe61b;',
		'kea-cancel-circle': '&#xe650;',
		'kea-checkmark-circle': '&#xe651;',
		'kea-checkmark': '&#xe652;',
		'kea-plus': '&#xe61c;',
		'kea-play2': '&#xe61d;',
		'kea-p-left': '&#xe61e;',
		'kea-p-center': '&#xe61f;',
		'kea-p-right': '&#xe620;',
		'kea-p-justify': '&#xe621;',
		'kea-code': '&#xe622;',
		'kea-feed': '&#xe653;',
		'kea-picassa': '&#xe654;',
		'kea-html5': '&#xe623;',
		'kea-html5-alt': '&#xe624;',
		'kea-css3': '&#xe625;',
		'kea-chrome': '&#xe626;',
		'kea-firefox': '&#xe627;',
		'kea-IE': '&#xe628;',
		'kea-opera': '&#xe629;',
		'kea-safari': '&#xe62a;',
		'kea-user2': '&#xe62b;',
		'kea-users2': '&#xe62c;',
		'kea-user-add': '&#xe62d;',
		'kea-vcard': '&#xe62e;',
		'kea-quote': '&#xe62f;',
		'kea-clock': '&#xe630;',
		'kea-brush': '&#xe631;',
		'kea-retweet': '&#xe632;',
		'kea-arrow-left': '&#xe633;',
		'kea-arrow-right': '&#xe634;',
		'kea-arrow-left2': '&#xe635;',
		'kea-arrow-down': '&#xe636;',
		'kea-arrow-up': '&#xe637;',
		'kea-arrow-right2': '&#xe638;',
		'kea-github': '&#xe639;',
		'kea-flickr': '&#xe63a;',
		'kea-vimeo': '&#xe63b;',
		'kea-twitter': '&#xe63c;',
		'kea-facebook': '&#xe63d;',
		'kea-googleplus': '&#xe63e;',
		'kea-pinterest': '&#xe63f;',
		'kea-tumblr': '&#xe640;',
		'kea-linkedin': '&#xe641;',
		'kea-dribbble': '&#xe642;',
		'kea-stumbleupon': '&#xe643;',
		'kea-lastfm': '&#xe644;',
		'kea-rdio': '&#xe645;',
		'kea-instagram': '&#xe646;',
		'kea-dropbox': '&#xe647;',
		'kea-evernote': '&#xe648;',
		'kea-skype': '&#xe649;',
		'kea-picasa': '&#xe64a;',
		'kea-soundcloud': '&#xe64b;',
		'kea-behance': '&#xe64c;',
		'kea-circles': '&#xe64d;',
		'kea-vk': '&#xe64e;',
		'kea-smashing': '&#xe64f;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/kea-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
