// // models/userModel.js
// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// }, { timestamps: true });

// const User = mongoose.model("User", userSchema);
// export default User;






//new 
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  authProvider: { type: String, default: "local" }, // 🔥 NEW: local or google
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;
