
//dono code ko milane ke bad ka code hia best kam kar rha hia @@@@@@@@@@@@@@@@@@@
const express = require("express");
const router = express.Router();
const UserData = require("../models/UserData");

router.get("/:uid", async (req, res) => {
  try {
    const data = await UserData.findOne({ uid: req.params.uid });
    res.json(data || {});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/:uid", async (req, res) => {
  try {
    const { driveLinks, directLinks, summary } = req.body;
    let data = await UserData.findOneAndUpdate(
      { uid: req.params.uid },
      { driveLinks, directLinks, summary },
      { new: true, upsert: true }
    );
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
