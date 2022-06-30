import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Index from "./components/pages/home/Index";
import Jadwal from "./components/pages/jadwal/Jadwal";
import Pembina from "./components/pages/pembina/Pembina";
import CreatePembina from "./components/pages/pembina/CreatePembina";

import Detail from "./components/pages/pembina/DetailPembina";

import EditPembina from "./components/pages/pembina/EditPembina";
import Shift from "./components/pages/shift/Shift";
import CreateShift from "./components/pages/shift/CreateShift";
import DetailShift from "./components/pages/shift/DetailShift";
import Ruangan from "./components/pages/ruangan/Ruangan";
import CreateRuangan from "./components/pages/ruangan/CreateRuangan";
import DetailRuangan from "./components/pages/ruangan/DetailRuangan";
import EditShift from "./components/pages/shift/EditShift";
import EditRuangan from "./components/pages/ruangan/EditRuangan";
import CreateJadwal from "./components/pages/jadwal/create";
import ProsesJadwal from "./components/pages/jadwal/Proses_Jadwal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jadwal" element={<Jadwal />} />
        <Route path="/pembina" element={<Pembina />} />
        <Route path="/pembina/create" element={<CreatePembina />} />
        <Route
          path="/pembina/detail/:id"
          element={<Detail />}
          component={Pembina}
        />
        <Route
          path="/pembina/edit/:id"
          element={<EditPembina />}
          component={Pembina}
        />
        <Route path="/shift" element={<Shift />} />
        <Route path="/shift/create" element={<CreateShift />} />
        <Route path="/shift/detail" element={<DetailShift />} />
        <Route path="/shift/edit/:id" element={<EditShift />} />
        <Route path="/ruangan" element={<Ruangan />} />
        <Route path="/ruangan/create" element={<CreateRuangan />} />
        <Route path="/ruangan/detail" element={<DetailRuangan />} />
        <Route path="/ruangan/edit/:id" element={<EditRuangan />} />
        <Route path="/create_jadwal" element={<CreateJadwal />} />
        <Route path="/jadwal_proses" element={<ProsesJadwal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
