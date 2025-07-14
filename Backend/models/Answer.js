//ye ek collection me databse alag se bnaya hua hai backend me store krne ke kiye answer ko 

//isme ai ka files nhi hai  @@@@@@

import mongoose from 'mongoose';

const answerSchema = new mongoose.Schema({
  context: { type: String, required: true },
  generatedAnswer: { type: String, required: true },
  questionType: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Answer', answerSchema);

 