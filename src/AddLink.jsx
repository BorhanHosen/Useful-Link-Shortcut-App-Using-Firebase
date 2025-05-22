import { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function AddLink() {
  const [form, setForm] = useState({ name: "", url: "", description: "" });
  const navigate = useNavigate();
  const collectionRef = collection(db, "websites");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!form.name || !form.url) return;
    await addDoc(collectionRef, form);
    navigate("/"); // Go back to Home after adding
  };

  return (
    <form
      onSubmit={handleAdd}
      className="bg-gray-800 p-6 rounded-xl max-w-xl mx-auto space-y-4 shadow-lg"
    >
      <input
        type="text"
        name="name"
        placeholder="Website Name"
        value={form.name}
        onChange={handleChange}
        className="w-full p-2 rounded-md bg-gray-700 text-white placeholder-gray-400"
      />
      <input
        type="url"
        name="url"
        placeholder="Website URL (https://...)"
        value={form.url}
        onChange={handleChange}
        className="w-full p-2 rounded-md bg-gray-700 text-white placeholder-gray-400"
      />
      <input
        type="text"
        name="description"
        placeholder="Short Description"
        value={form.description}
        onChange={handleChange}
        className="w-full p-2 rounded-md bg-gray-700 text-white placeholder-gray-400"
      />
      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded-md font-semibold"
      >
        ➕ Add Website
      </button>
    </form>
  );
}
