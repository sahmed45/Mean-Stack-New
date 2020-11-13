const mongoose = require("mongoose");

//define a schema/ blueprint NOTE: id is not a part of the schema
const itemSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  itemCategory: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
});

//use the blueprint to create the model
// Parameters: (model_name, schema_to_use, collection_name)
//module.exports is used to allow external access to the model
module.exports = mongoose.model("Item", itemSchema, "Inventory");
//note capital S in the collection name
