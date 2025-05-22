import React, { useState } from "react";
import { addDoc } from "firebase/firestore";

const AddLink = () => {
  const [form, setForm] = useState({ name: "", url: "", description: "" });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!form.name || !form.url) return;
    await addDoc(collectionRef, form);
    setForm({ name: "", url: "", description: "" });
  };
  return (
    <div>
      {/* Form */}
      <form
        onSubmit={handleAdd}
        className="bg-gray-800 p-6 rounded-xl mb-8 max-w-xl mx-auto space-y-4 shadow-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Website Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 rounded-md bg-gray-700 text-white placeholder-gray-400 outline-none"
        />
        <input
          type="url"
          name="url"
          placeholder="Website URL (https://...)"
          value={form.url}
          onChange={handleChange}
          className="w-full p-2 rounded-md bg-gray-700 text-white placeholder-gray-400 outline-none"
        />
        <input
          type="text"
          name="description"
          placeholder="Short Description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 rounded-md bg-gray-700 text-white placeholder-gray-400 outline-none"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded-md font-semibold"
        >
          ➕ Add Website
        </button>
      </form>
    </div>
  );
};

export default AddLink;
