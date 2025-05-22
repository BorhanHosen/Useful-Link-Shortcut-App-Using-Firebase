import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import AddLink from "./AddLink";
import EditLink from "./EditLink";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white p-6">
        <nav className="flex justify-center gap-6 mb-8 text-lg font-semibold">
          <Link to="/" className="hover:underline">
            🏠 Home
          </Link>
          <Link to="/add" className="hover:underline">
            ➕ Add Link
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddLink />} />
          <Route path="/edit/:id" element={<EditLink />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
