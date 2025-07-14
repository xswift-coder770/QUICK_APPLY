 



//chatgpt ka ai wala bnne se pahel ka hai ye 

// import mongoose from 'mongoose';

// const userDataSchema = new mongoose.Schema({
//   uid: { type: String, required: true, unique: true },
//   name: { type: String },
//   driveLinks: [{ label: String, value: String }],
//   directLinks: [{ label: String, value: String }],
//   summary: {
//     hire: String,
//     fit: String,
//     experience: String
//   }
// });

// const UserData = mongoose.model("UserData", userDataSchema);
// export default UserData;




 //ye ai integration se pahle tak acha kam kar rha tha @@@@@@@@@@
//  import mongoose from 'mongoose';

// const userDataSchema = new mongoose.Schema({
//   uid: { type: String, required: true, unique: true },
//   name: { type: String },
//   driveLinks: [{ label: String, value: String }],
//   directLinks: [{ label: String, value: String }],
//   summary: {
//     hire: String,
//     fit: String,
//     experience: String
//   },
//   aiSummaries: [
//     {
//       title: String,
//       content: String
//     }
//   ]
// });

// const UserData = mongoose.model("UserData", userDataSchema);
// export default UserData;


 //after integratin both project this is finall runnign code
 
// models/UserData.js @@@@@@
import mongoose from 'mongoose';

const userDataSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true },
  name: { type: String },
  driveLinks: [{ label: String, value: String }],
  directLinks: [{ label: String, value: String }],
  summary: {
    hire: String,
    fit: String,
    experience: String,
  },
  aiSummaries: [
    {
      title: String,
      content: String
    }
  ]  
});

const UserData = mongoose.model("UserData", userDataSchema);
export default UserData;
