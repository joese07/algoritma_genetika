import {Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import Dashboard from './components/pages/dashboard/Dashboard';
import Index from "./components/pages/home/Index";
import Jadwal from "./components/pages/jadwal/Jadwal";
import Pembina from "./components/pages/pembina/Pembina";
import Anggota from "./components/pages/anggota/Anggota";

function App() {
  return (
    <div>
        {/* <Index /> */}
        {/* <Dashboard /> */}
        {/* <Jadwal /> */}
        {/* <Pembina/> */}
        <Anggota />

    </div>
    
    
  );
}

export default App;
