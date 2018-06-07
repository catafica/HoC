var mongoose = require('mongoose');

		mongoose.set('debug', true);
		mongoose.Promise = Promise;
		mongoose.connect('mongodb://localhost/items-api');

		mongoose.connection
			.once('open', () => {
				console.info('mongoose connection open');
			})
			.on('error', (error) => {
				console.warn('mongoose connection error', error);
			});

module.exports.Item = require('./item');
// if (module.exports.Item) {
// 	console.log('Item model imported..');
// };
