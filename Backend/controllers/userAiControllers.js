 




// dono code ko intergate karne ke bad ka code hai best kam kar rha hia @@@@@@@@@@@@@@@@@@@

//core controles are here for datbase operation just like postman . yaha bhi POST GET DELETE methods use ho rha hai 


import UserData from '../models/UserData.js';



//userRoutes me isis file ka use kiyeh hai
//for saving summary




export const saveAIRephrasedSummary = async (req, res) => {
  const { uid, title, content } = req.body;
  try {
    const user = await UserData.findOne({ uid });
    if (!user) return res.status(404).json({ error: "User not found" });

    if (!user.aiSummaries) user.aiSummaries = [];

    user.aiSummaries.push({ title, content });
    await user.save();

    res.status(200).json({ message: "Summary saved", summaries: user.aiSummaries });
  } catch (err) {
    console.error("Save summary error:", err);
    res.status(500).json({ error: "Failed to save summary" });
  }
};






//for fetching summaries from backend
export const getAIRephrasedSummaries = async (req, res) => {
  try {
    const user = await UserData.findOne({ uid: req.params.uid });
    if (!user) return res.status(404).json({ error: "User not found" });

    res.status(200).json(user.aiSummaries || []);
  } catch (err) {
    console.error("Fetch summaries error:", err);
    res.status(500).json({ error: "Failed to get summaries" });
  }
};






//for deleteing the summarries
export const deleteAIRephrasedSummary = async (req, res) => {
  const { uid, summaryId } = req.params;
  try {
    const user = await UserData.findOne({ uid });
    if (!user) return res.status(404).json({ error: "User not found" });

    user.aiSummaries = user.aiSummaries.filter((_, i) => i != summaryId);
    await user.save();

    res.status(200).json({ message: "Deleted", summaries: user.aiSummaries });
  } catch (err) {
    console.error("Delete summary error:", err);
    res.status(500).json({ error: "Delete failed" });
  }
};






//for renaming the summaries

export const renameAIRephrasedSummary = async (req, res) => {
  const { uid, summaryId } = req.params;
  const { newTitle } = req.body;

  try {
    const user = await UserData.findOne({ uid });
    if (!user) return res.status(404).json({ error: "User not found" });

    if (user.aiSummaries && user.aiSummaries[summaryId]) {
      user.aiSummaries[summaryId].title = newTitle;
      await user.save();
    }

    res.status(200).json({ message: "Renamed", summaries: user.aiSummaries });
  } catch (err) {
    console.error("Rename summary error:", err);
    res.status(500).json({ error: "Rename failed" });

  }
};
