import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Index from "./components/pages/home/Index";
import Jadwal from "./components/pages/jadwal/Jadwal";
import Pembina from "./components/pages/pembina/Pembina";
import Anggota from "./components/pages/anggota/Anggota";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jadwal" element={<Jadwal />} />
        <Route path="/pembina" element={<Pembina />} />
        <Route path="/anggota" element={<Anggota />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
