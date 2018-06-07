var db = require('../models');

exports.getItems = (req, res) => {
	db.Item.find()
	.then(function (items) {
		res.json(items);
	}).catch(function (err) {
		res.send(err);
	})
}

exports.createItem = (req, res) => {
	db.Item.create(req.body)
	.then((newItem) => {
		res.send(newitem);
	})
	.catch((err) => {
		res.send(err);
	})
}

exports.getItem = (req, res) => {
	db.Item.findById(req.params.itemId)
	.then((foundItem) => {
		res.json(foundItem);
	})
}

exports.updateItem = (req, res) => {
	db.Item.findOneAndUpdate({_id: req.params.itemId}, req.body, {new: true})
		.then((item) => {
			res.json(item);
		})
		.catch((err) => {
			res.send(err);
		})
}

exports.deleteItem = (req, res) => {
	db.Item.remove({_id: req.params.itemId})
	.then(() => {
			res.json({message: 'item deleted'});
	})
	.catch((err) => {
		res.send(err);
	})
}

module.exports = exports;
