const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
	content: {
		type: String,
		required: true,
        maxlength: 1500
	},
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	interest: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Interest',
	}],
	image: {
		type: String,
	},
});

module.exports = mongoose.model('Post', postSchema);