
//ye dono project ko integrate kar ke likha hua hai  this is ai part of backend  .



//ai routes wale file me iska use kye hai 
import dotenv from "dotenv";
dotenv.config();

import { CohereClient } from "cohere-ai";
import Summary from "../models/summaryModel.js";

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

// ✅ 1. Rephrase Text
export const rephraseText = async (req, res) => {
  try {
    const { prompt, tone } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required." });
    }

    // ✅ Custom prompt generation based on tone
    let systemPrompt;

    switch (tone) {
      case "why_hire":
        systemPrompt = `Rephrase this text without any extra phrases and explanations as a strong and confident answer to: "Why should we hire you?"\n\n"${prompt}"`;
        break;
      case "why_fit":
        systemPrompt = `Rephrase this text without any extra phrases and explanations  as a persuasive answer to: "Why are you the best fit for this role?"\n\n"${prompt}"`;
        break;
      case "experience":
        systemPrompt = `Rephrase this without any extra phrases and explanations as a formal experience summary suitable for interviews or resumes:\n\n"${prompt}"`;
        break;
      case "general":
      default:
        systemPrompt = `Rephrase the following text without any extra phrases and explanations in a professional and improved tone:\n\n"${prompt}"`;
        break;
    }

    const response = await cohere.generate({
      model: "command",
      prompt: systemPrompt,
      maxTokens: 300,
      temperature: 0.8,
    });

    const result = response.generations[0].text;
    res.status(200).json({ result });
  } catch (error) {
    console.error("Cohere Error:", error);
    res.status(500).json({ error: "Failed to rephrase with AI" });
  }
};

// ✅ 2. Save Rephrased Summary
export const saveRephrasedSummary = async (req, res) => {
  const { uid, content, tone } = req.body;

  if (!uid || !content || !tone) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const newSummary = await Summary.create({ uid, content, tone });
    res.status(201).json({ message: "Saved successfully", data: newSummary });
  } catch (err) {
    console.error("Save error:", err);
    res.status(500).json({ error: "Failed to save summary" });
  }
};

// ✅ 3. Fetch All Rephrased Summaries
export const getRephrasedSummaries = async (req, res) => {
  const { uid } = req.params;

  try {
    const summaries = await Summary.find({ uid }).sort({ createdAt: -1 });
    res.status(200).json({ summaries });
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ error: "Failed to fetch summaries" });
  }
};

// ✅ 4. Delete a Single Rephrased Summary
export const deleteRephrasedSummary = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Summary.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: "Summary not found" });
    }
    res.status(200).json({ message: "Summary deleted successfully" });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ error: "Failed to delete summary" });
  }
};
