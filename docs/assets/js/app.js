require('../css/app.scss');

var userFeed = document.getElementById('instagramFeed');
userFeed = new Instafeed({
	clientId: '558a9f16dd7745319070bed32a890594',
	accessToken: '12939736.1677ed0.3304b83bdaa043be9acf5a5b7d348af5',
	//target: 'instafeed',
	template: '<a href="{{link}}" target="_blank" id="{{id}}" class="instagram__post"><img src="{{image}}" alt="{{caption}}" width="{{width}}" height="{{height}}" /></a>',
	get: 'user',
	userId: '12939736',
	limit: 5,
	resolution: 'standard_resolution'
});
userFeed.run();
