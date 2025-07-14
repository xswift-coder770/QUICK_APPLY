 



//after integrating both the projects
import mongoose from "mongoose";

const summarySchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  tone: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Summary", summarySchema);
