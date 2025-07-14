 
 

 

 import express from "express";
import {
  rephraseText,
  saveRephrasedSummary,
  getRephrasedSummaries,
  deleteRephrasedSummary,
} from "../controllers/aiController.js";  //ye sara core operations ke liye aiControllers.js file ka help le rhe hai 

const router = express.Router();

// POST: Generate AI Rephrased Text
router.post("/rephrase", rephraseText);

// POST: Save rephrased summary
router.post("/save", saveRephrasedSummary);

 
router.get("/get/:uid", getRephrasedSummaries);

// DELETE: Delete a specific summary by ID
router.delete("/delete/:id", deleteRephrasedSummary);

export default router;
