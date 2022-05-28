import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Index from "./components/pages/home/Index";
import Jadwal from "./components/pages/jadwal/Jadwal";
import Pembina from "./components/pages/pembina/Pembina";
import CreatePembina from "./components/pages/pembina/CreatePembina";
import Anggota from "./components/pages/anggota/Anggota";
import CreateAnggota from "./components/pages/anggota/CreateAnggota";
import Detail from "./components/pages/pembina/DetailPembina";
import DetailAnggota from "./components/pages/anggota/DetailAnggota";
import { gql, useMutation, useQuery } from "@apollo/client";

const getPembina = gql`
query MyQuery {
  Data_Pembina {
    id
    nama
    tempat_lahir
    tanggal_lahir
    jenis_kelamin
    alamat_email
    no_telepon
    alamat
  }
}`;

const insertPembina = gql`
mutation InsertPembina(
  $alamat: String
  $alamat_email: String
  $jenis_kelamin: String
  $nama: String
  $no_telepon: String
  $tanggal_lahir: String
  $tempat_lahir: String
) {
  insert_Data_Pembina(
    objects: {
      nama: $nama
      tempat_lahir: $tempat_lahir
      tanggal_lahir: $tanggal_lahir
      jenis_kelamin: $jenis_kelamin
      alamat: $alamat
      no_telepon: $no_telepon
      alamat_email: $alamat_email
    }
  ) {
    affected_rows
  }
}`;
  
function App() {
  const {data:dataPembina} = useQuery(getPembina);
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jadwal" element={<Jadwal />} />
        <Route path="/pembina" element={<Pembina dataPembina={dataPembina} getPembina={getPembina}/>} />
        <Route path="/pembina/create" element={<CreatePembina getPembina/>} />
        <Route path="/pembina/detail" element={<Detail/>}/>
        <Route path="/anggota" element={<Anggota />} />
        <Route path="/anggota/create" element={<CreateAnggota />} />
        <Route path="/anggota/detail" element={<DetailAnggota />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
