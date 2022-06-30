import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import useGetShift from "../../../graphql/GetShift";

const insertShift = gql`
mutation Tambah_shift($kode_shift: String, $lokasi: String, $nama_shift: String, $waktu_mulai: String , $waktu_selesai: String) {
  insert_Data_Shift(objects: {kode_shift: $kode_shift, nama_shift: $nama_shift, waktu_mulai: $waktu_mulai, waktu_selesai: $waktu_selesai, lokasi: $lokasi}) {
    returning {
      id
      kode_shift
      nama_shift
      waktu_mulai
      waktu_selesai
      lokasi
    }
    affected_rows
  }
}
`;

function CreateShift() {
  const [dataKodeShift, setKodeShift] = useState("");
  const [dataNamaShift, setNamaShift] = useState("")
  const [dataMulai, setMulai] = useState("");
  const [dataSelesai, setSelesai] = useState("");
  const [dataLokasi, setLokasi] = useState("");
  const {dataGraphql}  = useGetShift();
  const [Tambah_shift, {loading, data, error}] = useMutation(insertShift,
    {refetchQueries:[dataGraphql],
    });
   
  if(loading) return<p>Loading...</p>;
  if(error) return  `Submmission Error ! {error.message}`;
  if(data) return<p>Data berasil disimpan...</p>

  const handleKodeShift = (e) => {
    setKodeShift(e.target.value)
  };

  const handleMulai = (e) => {
    setMulai(e.target.value)
  };

  const handleSelesai = (e) => {
    setSelesai(e.target.value)
  };

  const handleLokasi = (e) => {
    setLokasi(e.target.value)
  };

  const handleNamaShift = (e) => {
    setNamaShift(e.target.value)
  };

  const handleClickSubmit = () => {
    Tambah_shift({
      variables:{
        kode_shift: dataKodeShift,
        nama_shift: dataNamaShift,
        waktu_mulai: dataMulai,
        waktu_selesai: dataSelesai,
        lokasi: dataLokasi,
      },
    });
  };
  
  return (
    <>
      <main className="d-flex">
        <div className="card m-5">
          <div className="card-body">
            <form onSubmit={handleClickSubmit}>
              <div className="mb-3">
                <label className="form-label">Kode Shift</label>
                <input
                  type="text"
                  className="form-control"
                  name="kode_shift"
                  id="kode_shift"
                  onChange={handleKodeShift}
                />
                <div id="emailHelp" className="form-text">
                  pengisian kode shift menggunakan awalan S dan huruf kapital,
                  contoh <strong>' S001 '</strong>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Nama Shift</label>
                <input
                  type="text"
                  className="form-control"
                  id="nama_shift"
                  name="nama_shift"
                  onChange={handleNamaShift}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Mulai</label>
                <input
                  type="text"
                  className="form-control"
                  id="mulai"
                  name="mulai"
                  onChange={handleMulai}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Selesai</label>
                <input
                  type="text"
                  className="form-control"
                  id="selesai"
                  name="selesai"
                  onChange={handleSelesai}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Lokasi</label>
                <textarea
                  type="text"
                  className="form-control"
                  id="lokasi"
                  name="lokasi"
                  onChange={handleLokasi}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
export default CreateShift;
