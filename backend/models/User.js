const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {type:String,required:[true,"name required"]},
  email: {type:String,required:true},
  password: {type:String,requires:true},
});
const User = mongoose.model("users", userSchema);
module.exports = User;


/*const schema = new Schema({
    name: String,
    binary: Buffer,
    living: Boolean,
    updated: { type: Date, default: Date.now() },
    age: { type: Number, min: 18, max: 65, required: true },
    mixed: Schema.Types.Mixed,
    _someId: Schema.Types.ObjectId,
    array: [],
    ofString: [String], // You can also have an array of each of the other types too.
    nested: { stuff: { type: String, lowercase: true, trim: true } },
  });*/