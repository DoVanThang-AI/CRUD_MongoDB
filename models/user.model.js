const mongoose  = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        name: {
            type:String,
            required : [true,"pls enter name"]
        },
        age: {
            type: Number,
            required: [true,"pls enter age"]
        },
        wallet : {
            type: String,
            required: [true, "pls enter address"]
        }
    },
    {
        timestamps:true
    }
);

const Users = mongoose.model("Users", UserSchema);

module.exports = Users;