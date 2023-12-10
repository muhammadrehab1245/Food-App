const mongoose=require('mongoose')
const { Schema } = mongoose;

const SignupsSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique:true
      },
    fullname: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required:true,
      },
});
const SignupModel = mongoose.model('signup', SignupsSchema);
module.exports = SignupModel;