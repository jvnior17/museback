const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username:{type: String, require: true, Unique:true},
        email:{type: String, require: true, Unique:true},
        password:{type: String, require: true},
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    {timestamps:true}
);

module.exports = mongoose.model("User",UserSchema)