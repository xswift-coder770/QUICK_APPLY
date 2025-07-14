import UserData from '../models/UserData.js';

export const saveUserData = async (req, res) => {
  const { uid, name, driveLinks, directLinks, summary } = req.body;

  try {
    let user = await UserData.findOne({ uid });

    if (user) {
      // update only the dashboard-related fields
      user.name = name || user.name;
      user.driveLinks = driveLinks || user.driveLinks;
      user.directLinks = directLinks || user.directLinks;
      user.summary = summary || user.summary;
    } else {
      // create new user
      user = new UserData({ uid, name, driveLinks, directLinks, summary });
    }

    await user.save();
    res.status(200).json({ message: "User data saved", user });
  } catch (err) {
    console.error("Save error:", err);
    res.status(500).json({ error: "Failed to save user data" });
  }
};


// ✅ Get user data by UID
export const getUserData = async (req, res) => {
  const { uid } = req.params;

  try {
    const user = await UserData.findOne({ uid });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (err) {
    console.error("Fetch error:", err.message);
    res.status(500).json({ error: "Something went wrong while fetching" });
  }
};










 