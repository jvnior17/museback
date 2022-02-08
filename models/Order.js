const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
    {
        userId:{type: String, require: true },
        products: [
            {
                pruductId:{
                    type:String
                },
                quantity:{
                    type:Number,
                    default: 1,
                },
             },
        ],
    },

    {timestamps:true}
);

module.exports = mongoose.model("Order",OrderSchema)