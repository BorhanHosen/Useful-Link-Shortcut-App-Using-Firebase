import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

export default function EditLink() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", url: "", description: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLink = async () => {
      const docRef = doc(db, "websites", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setForm(docSnap.data());
      } else {
        alert("Link not found");
        navigate("/");
      }
      setLoading(false);
    };
    fetchLink();
  }, [id, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const docRef = doc(db, "websites", id);
    await updateDoc(docRef, form);
    navigate("/");
  };

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <form
      onSubmit={handleUpdate}
      className="bg-gray-800 p-6 rounded-xl max-w-xl mx-auto space-y-4 shadow-lg"
    >
      <h2 className="text-xl font-bold mb-2 text-white">✏️ Edit Website</h2>
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
        placeholder="Website URL"
        value={form.url}
        onChange={handleChange}
        className="w-full p-2 rounded-md bg-gray-700 text-white placeholder-gray-400"
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="w-full p-2 rounded-md bg-gray-700 text-white placeholder-gray-400"
      />
      <button
        type="submit"
        className="w-full bg-yellow-500 hover:bg-yellow-600 py-2 rounded-md font-semibold text-black"
      >
        💾 Update
      </button>
    </form>
  );
}
