const mongoose=require('mongoose');

//The first step to creating a model is defining the schema for it. 
//Then, we'll need to register the model with Mongoose so that we can use it throughout our application.

const ContactSchema=mongoose.Schema({
    first_name:{
      type:String,
      required:true
    },
    last_name:{
      type:String,
      required:true
    },
    phone:{
        type:String,
        required:true
    }
});


//mongoose.model('model',Schema) is the syntax
const Contact=module.exports=mongoose.model('Contact',ContactSchema);