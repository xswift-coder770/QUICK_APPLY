 










//best 


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Copy, Trash2 } from "lucide-react";

const AIRephrase = () => {
  const [prompt, setPrompt] = useState("");
  const [tone, setTone] = useState("professional");
  const [result, setResult] = useState("");
  const [uid, setUid] = useState("gaurav123");
  const [savedSummaries, setSavedSummaries] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchSummaries();
  }, []);

  const fetchSummaries = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/ai/get/${uid}`
      );
      setSavedSummaries(res.data.summaries);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  const handleRephrase = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/ai/rephrase`,
        { prompt, tone }
      );
      const cleaned = res.data.result.replace(/^(Here.*?:\s*)/i, "").trim();
      setResult(cleaned);
      setIsSaved(false);
    } catch (err) {
      console.error("Rephrase error:", err);
    }
  };

  const handleSave = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/ai/save`, {
        uid,
        tone,
        content: result,
      });
      alert("✅ Saved successfully!");
      fetchSummaries();
      setIsSaved(true);
    } catch (err) {
      console.error("Save error:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_BASE_URL}/api/ai/delete/${id}`
      );
      fetchSummaries();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => alert("📋 Copied to clipboard!"))
      .catch((err) => console.error("Copy failed", err));
  };

  return (
    <div className="min-h-screen bg-[#0d1b2a] text-white p-6 md:p-10">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-end mb-4">
          <button
            className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded shadow text-white font-semibold"
            onClick={() => navigate("/dashboard")}
          >
            🚀 Dashboard
          </button>
        </div>

        <h1 className="text-3xl font-bold mb-6 text-center">✨ AI Rephrase ✨</h1>

        <textarea
          className="w-full bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-xl mb-4 text-white placeholder-gray-300"
          rows={4}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your text here..."
        />

        {/* Fancy Dropdown with fixed background & text color */}
        <div className="relative mb-4">
          <select
            className="w-full appearance-none bg-white/10 text-gray-200 p-3 pr-10 rounded-xl border border-white/20 backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
          >
            <option style={{ backgroundColor: "#1e293b" }} value="hire">
              Why should we hire you?
            </option>
            <option style={{ backgroundColor: "#1e293b" }} value="fit">
              Why you're best fit?
            </option>
            <option style={{ backgroundColor: "#1e293b" }} value="experience">
              Tell me about your experience
            </option>
            <option style={{ backgroundColor: "#1e293b" }} value="general">
              General Rephrase
            </option>
          </select>

          {/* Dropdown icon */}
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-white">
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <button
          onClick={handleRephrase}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-600 hover:to-blue-600 transition text-white px-4 py-3 rounded-xl font-bold shadow-lg mb-4"
        >
          ⭐ Rephrase with AI
        </button>

        {result && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Rephrased Text:</h2>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-xl text-cyan-300 whitespace-pre-wrap">
              {result}
            </div>

            <div className="flex gap-3 mt-4">
              {!isSaved && (
                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-xl transition flex items-center gap-2"
                  onClick={handleSave}
                >
                  ⭐ Save
                </button>
              )}

              {isSaved && (
                <button
                  className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-4 py-2 rounded-xl transition flex items-center gap-2"
                  onClick={() => copyToClipboard(result)}
                >
                  <Copy size={18} /> Copy
                </button>
              )}
            </div>
          </div>
        )}

        {/* Saved Summaries */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">💾 Saved Summaries</h2>
          {savedSummaries.length === 0 && (
            <p className="text-gray-400">No saved summaries yet.</p>
          )}
          {savedSummaries.map((item) => (
            <div
              key={item._id}
              className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-xl mb-4"
            >
              <div className="flex justify-between mb-2 items-center">
                <span className="text-white font-bold capitalize">{item.tone}</span>
                <div className="flex gap-3">
                  <button
                    onClick={() => copyToClipboard(item.content)}
                    className="bg-cyan-600 hover:bg-cyan-700 px-3 py-1 rounded flex items-center gap-1 text-sm text-white"
                  >
                    <Copy size={16} /> Copy
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded flex items-center gap-1 text-sm text-white"
                  >
                    <Trash2 size={16} /> Delete
                  </button>
                </div>
              </div>
              <p className="text-cyan-200 whitespace-pre-wrap">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIRephrase;
