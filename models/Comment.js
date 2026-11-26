const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
	text: {
		type: String,
		required: true
	},
	post: {
		type: Schema.Types.ObjectId,
		ref: 'Post',
		required: true
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true
	}
}, {
	timestamps: true
});

module.exports = mongoose.model('Comment', commentSchema);