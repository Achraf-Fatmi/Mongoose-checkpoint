const mongoose = require ('mongoose');
const {Schema, model} = mongoose;


const PersonSchema= new Schema({
    name: {type:String, required:true},
    age: {type:Number},
    favoriteFood:[String] 
})

const PersonDB= model ('person', PersonSchema)

module.exports = PersonDB;