import { Sidebar } from "./components/Sidebar";
import "./app.css";
import {
  Dashboard,
  Guruhlar,
  Oquvchilar,
  Bugalteriya,
  Sozlamalar,
  Yordam,
} from "./pages";
import { Routes, BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboar" element={<Dashboard />} />
            <Route path="/guruhlar" element={<Guruhlar />} />
            <Route path="/oquvchilar" element={<Oquvchilar />} />
            <Route path="/bugalteriya" element={<Bugalteriya />} />
            <Route path="/sozlamalar" element={<Sozlamalar />} />
            <Route path="/yordam" element={<Yordam />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
}

export default App;
