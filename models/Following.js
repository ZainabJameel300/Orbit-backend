const mongoose = require('mongoose');
const { Schema } = mongoose;

const FollowingSchema = new Schema({
	followers: [{ 
        type: Schema.Types.ObjectId, ref: 'User'
     }],
	followings: [{
         type: Schema.Types.ObjectId, ref: 'User' 
        }]
});

module.exports = mongoose.model('Following', FollowingSchema);