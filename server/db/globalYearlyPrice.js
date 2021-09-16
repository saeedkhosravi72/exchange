"use strict";
exports.__esModule = true;
exports.GlobalYearlyPrice = void 0;
var mongoose = require("mongoose");
var globalYearlyPriceSchema = new mongoose.Schema({
    timeStamp: {
        type: Date
    },
    currencyId: {
        type: mongoose.ObjectId
    },
    price: {
        price: {
            type: Number
        },
        min: {
            type: Number
        },
        max: {
            type: Number
        }
    },
    volume: {
        type: Number
    }
});
// This functions will execute if the password field is modified.
// This method compares the password which is stored in database and
// the password which the user entered. It is used in Login.
exports.GlobalYearlyPrice = mongoose.model('GlobalYearlyPrice', globalYearlyPriceSchema);
