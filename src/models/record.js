const mongoose = require("mongoose")


const recordSchema =  new mongoose.Schema({
         amount:{
                  type:Number,
                  required:true


         },
         type:{
                  type:String,
                  enum:["income","expense"],
                  required:true,

         },
         category:{
         type:String,
         required:true,


         },
         date:{
                  type:Date,
                  deafult:Date.now

         },
         note:String,
         createdBy:{
          type:mongoose.Schema.Types.ObjectId,
          ref:"user"
         }
},{
         timestamps:true
})
module.exports = mongoose.model("record",recordSchema);
