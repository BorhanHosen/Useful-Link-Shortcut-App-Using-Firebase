import { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";

export default function Home() {
  const [websites, setWebsites] = useState([]);
  const collectionRef = collection(db, "websites");

  useEffect(() => {
    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      setWebsites(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "websites", id));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {websites.map((site) => (
        <div
          key={site.id}
          className="bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-lg relative"
        >
          <h2 className="text-2xl font-bold">{site.name}</h2>
          <p className="text-gray-300 mt-2 text-sm">{site.description}</p>
          <a
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-medium"
          >
            Visit
          </a>
          <button
            onClick={() => handleDelete(site.id)}
            className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-sm px-2 py-1 rounded"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
