 

 

//best  

import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { Copy, Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Aurora from "../components/ui/Aurora";
import "../components/ui/Aurora.css";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copiedText, setCopiedText] = useState("");
  const [summaryTitles, setSummaryTitles] = useState({
    hire: "Why should we hire you?",
    fit: "Why are you fit for this role?",
    experience: "Tell us about your experience",
  });
  const [editingTitle, setEditingTitle] = useState(null);

  const navigate = useNavigate();
  const uid = auth.currentUser?.uid;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(""), 2000);
  };

  const handleTitleChange = (key, newTitle) => {
    setSummaryTitles((prev) => ({ ...prev, [key]: newTitle }));
    setEditingTitle(null);
  };

  useEffect(() => {
    if (!uid) return;
    const fetchUserData = async () => {
      try {
       const res = await fetch(`https://quick-apply.onrender.com/api/userdata/${uid}`);
        const data = await res.json();
        setUserData(data);
      } catch (err) {
        console.error("Error fetching profile data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, [uid]);

  if (loading) {
    return <div className="text-white p-6">🔄 Loading your profile...</div>;
  }

  if (!userData) {
    return (
      <div className="text-white p-6">
        ❌ No profile data found. Please save your info in the Dashboard first.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d1b2a] text-white relative overflow-hidden">
      <Aurora />

      <div className="relative z-10 p-6">
        <div className="flex justify-end mb-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </button>
        </div>

        <h1 className="text-3xl font-bold mb-8 text-center">👤 Your Profile</h1>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            {/* ✅ DRIVE LINKS */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">🔗 Drive Links</h2>
              {userData.driveLinks?.map((link, index) => (
                <div key={index} className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="w-48 font-medium">{link.label}:</span>
                  <span className="text-cyan-400 bg-gray-900 p-2 rounded break-all w-full md:w-auto">
                    {link.value}
                  </span>
                  <button
                    onClick={() => copyToClipboard(link.value)}
                    className="text-cyan-300 hover:text-white"
                  >
                    <Copy size={18} />
                  </button>
                  {copiedText && copiedText === link.value && (
                    <span className="text-green-400 text-sm">Copied!</span>
                  )}
                </div>
              ))}
            </section>

            {/* ✅ DIRECT LINKS */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">🌐 Direct Links</h2>
              {userData.directLinks?.map((link, index) => (
                <div key={index} className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="w-48 font-medium">{link.label}:</span>
                  <span className="text-cyan-400 bg-gray-900 p-2 rounded break-all w-full md:w-auto">
                    {link.value}
                  </span>
                  <button
                    onClick={() => copyToClipboard(link.value)}
                    className="text-cyan-300 hover:text-white"
                  >
                    <Copy size={18} />
                  </button>
                  {copiedText && copiedText === link.value && (
                    <span className="text-green-400 text-sm">Copied!</span>
                  )}
                </div>
              ))}
            </section>

            {/* ✅ SUMMARY */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">📝 Summary</h2>
              {userData.summary && (
                <div className="grid gap-6">
                  {["hire", "fit", "experience"].map((key) => (
                    <div
                      key={key}
                      className="backdrop-blur-lg bg-white/10 border border-white/20 p-4 rounded-xl shadow-lg"
                    >
                      <div className="flex items-center justify-between mb-2">
                        {editingTitle === key ? (
                          <input
                            className="bg-transparent border-b border-white text-lg font-bold w-full outline-none"
                            value={summaryTitles[key]}
                            onChange={(e) => handleTitleChange(key, e.target.value)}
                            onBlur={() => setEditingTitle(null)}
                            autoFocus
                          />
                        ) : (
                          <h3
                            className="text-lg font-bold cursor-pointer"
                            onClick={() => setEditingTitle(key)}
                          >
                            {summaryTitles[key]}
                            <Pencil size={16} className="inline ml-2" />
                          </h3>
                        )}
                        <button
                          onClick={() => copyToClipboard(userData.summary[key])}
                          className="text-cyan-300 hover:text-white"
                        >
                          <Copy size={18} />
                        </button>
                      </div>
                      <p className="text-cyan-300 whitespace-pre-wrap">
                        {userData.summary[key]}
                      </p>
                      {copiedText && copiedText === userData.summary[key] && (
                        <p className="text-green-400 text-sm mt-1">Copied!</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
