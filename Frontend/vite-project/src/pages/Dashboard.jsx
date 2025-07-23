 

//best 

import React, { useState, useEffect } from "react";
import GradientText from "../components/ui/GradientText";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { Copy } from "lucide-react";

const starBorder = "border border-[1px] border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.15)]";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const defaultDriveLinks = [
    { label: "LinkedIn", value: "" },
    { label: "GitHub Profile", value: "" },
    { label: "GitHub Repo", value: "" },
    { label: "Project Drive", value: "" },
    { label: "Resume Drive", value: "" },
  ];

  const defaultDirectLinks = [
    { label: "LinkedIn", value: "" },
    { label: "GitHub Profile", value: "" },
    { label: "GitHub Repo", value: "" },
    { label: "Live Project", value: "" },
    { label: "Resume", value: "" },
  ];

  const [googleDriveLinks, setGoogleDriveLinks] = useState(defaultDriveLinks);
  const [directLinks, setDirectLinks] = useState(defaultDirectLinks);
  const [summaries, setSummaries] = useState({
    hire: "",
    fit: "",
    experience: "",
  });

  useEffect(() => {
    if (user) {
      fetch(`https://quick-apply.onrender.com/api/userdata/${user.uid}`)
        .then((res) => res.json())
        .then((data) => {
          setGoogleDriveLinks(
            data?.driveLinks?.length
              ? [...defaultDriveLinks, ...data.driveLinks.filter(dl => !defaultDriveLinks.some(def => def.label === dl.label))]
              : defaultDriveLinks
          );
          setDirectLinks(
            data?.directLinks?.length
              ? [...defaultDirectLinks, ...data.directLinks.filter(dl => !defaultDirectLinks.some(def => def.label === dl.label))]
              : defaultDirectLinks
          );
          setSummaries(data?.summary || {
            hire: "",
            fit: "",
            experience: "",
          });
        })
        .catch((err) => console.error("Fetch error:", err));
    }
  }, [user]);

  const saveDataToBackend = () => {
    if (!user) return;

    fetch("https://quick-apply.onrender.com/api/userdata/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid: user.uid,
        name: user.displayName || "User",
        driveLinks: googleDriveLinks,
        directLinks: directLinks,
        summary: summaries,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Saved:", data);
        alert("Data saved successfully!");
      })
      .catch((err) => {
        console.error("Save error:", err);
        alert("Failed to save data.");
      });
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const renderLinks = (links, setLinks) =>
    links.map((item, index) => (
      <div key={index} className="flex items-center gap-2 mb-4">
        <span className="w-32 font-medium">{item.label}:</span>
        <input
          type="text"
          className="w-[13rem] p-2 rounded bg-gray-800 text-white border border-gray-600"
          value={item.value}
          onChange={(e) => {
            const updated = links.map((link, idx) =>
              idx === index ? { ...link, value: e.target.value } : link
            );
            setLinks(updated);
          }}
        />
        <button
          className="text-cyan-400 hover:text-white"
          onClick={() => copyToClipboard(item.value)}
        >
          <Copy size={18} />
        </button>
      </div>
    ));

  const addNewLink = (links, setLinks) => {
    setLinks([...links, { label: "Custom", value: "" }]);
  };

  return (
    <div className="min-h-screen bg-[#0a0a23] text-white p-6">
      <div
        className={`shadow-md bg-gray-900 px-6 py-4 rounded-md mb-6 flex justify-between items-center ${starBorder}`}
      >
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa"]}
          className="text-4xl font-bold"
        >
          Welcome, {user?.displayName || "User"}!
        </GradientText>

        <div className="flex gap-3">
          <button
            className={`bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-sm ${starBorder}`}
            onClick={() => navigate("/ai-rephrase")}
          >
            AI Rephrase
          </button>
          <button
            className={`bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-sm ${starBorder}`}
            onClick={() => navigate("/profile")}
          >
            View Profile
          </button>
          <button
            className={`bg-red-600 hover:bg-red-700 px-4 py-2 rounded-sm ${starBorder}`}
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-center mb-8">Your Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
        {/* Google Drive Links */}
        <section className={`bg-gray-900/70 backdrop-blur-md rounded-xl p-6 ${starBorder}`}>
          <h2 className="text-xl font-semibold mb-6 text-center">Google Drive Links</h2>
          {renderLinks(googleDriveLinks, setGoogleDriveLinks)}
          <button
            className={`mt-2 px-3 py-1 bg-cyan-600 hover:bg-cyan-700 rounded-sm ${starBorder}`}
            onClick={() => addNewLink(googleDriveLinks, setGoogleDriveLinks)}
          >
            + Add Link
          </button>
        </section>

        {/* Direct Links */}
        <section className={`bg-gray-900/70 backdrop-blur-md rounded-xl p-6 ${starBorder}`}>
          <h2 className="text-xl font-semibold mb-6 text-center">Direct Links</h2>
          {renderLinks(directLinks, setDirectLinks)}
          <button
            className={`mt-2 px-3 py-1 bg-cyan-600 hover:bg-cyan-700 rounded-sm ${starBorder}`}
            onClick={() => addNewLink(directLinks, setDirectLinks)}
          >
            + Add Link
          </button>
        </section>

        {/* Summary */}
        <section className={`bg-gray-900/70 backdrop-blur-md rounded-xl p-6 col-span-full ${starBorder}`}>
          <h2 className="text-xl font-semibold mb-6 text-center">Your Summary</h2>
          {[
            { key: "hire", label: "Why should we hire you?" },
            { key: "fit", label: "Why are you fit for this role?" },
            { key: "experience", label: "Tell us about your experience" },
          ].map(({ key, label }) => (
            <div key={key} className="mb-6">
              <label className="block mb-1 font-medium">{label}</label>
              <textarea
                rows="4"
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
                value={summaries[key]}
                onChange={(e) =>
                  setSummaries((prev) => ({
                    ...prev,
                    [key]: e.target.value,
                  }))
                }
              ></textarea>
              <button
                className="mt-2 text-cyan-400 hover:text-white"
                onClick={() => copyToClipboard(summaries[key])}
              >
                <Copy size={18} /> Copy
              </button>
            </div>
          ))}
        </section>
      </div>

      <div className="mt-10 flex justify-center">
        <button
          className={`px-6 py-2 bg-green-600 hover:bg-green-700 rounded-sm ${starBorder}`}
          onClick={saveDataToBackend}
        >
          Save All Data
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
