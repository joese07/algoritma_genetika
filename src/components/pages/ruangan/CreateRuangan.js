import Sidebar from "../../partials/Sidebar";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { Link } from "react-router-dom";
import useGetLokasi from "../../../graphql/GetLokasi";

const insertLokasi = gql` 
mutation Tambah_lokasi($alamat: String, $kode_lokasi: String, $nama_lokasi: String) {
  insert_Data_Lokasi(objects: {kode_lokasi: $kode_lokasi, nama_lokasi: $nama_lokasi, alamat: $alamat}) {
    returning {
      id
      kode_lokasi
      nama_lokasi
      alamat
    }
    affected_rows
  }
}`;

function CreateRuangan() {

  const[dataKodeLokasi, setKodelokasi] = useState("")
  const[dataNamaLokasi, setNamaLokasi] = useState("")
  const[dataAlamat, setAlamat] = useState("")
  const{dataGraphql} = useGetLokasi();
  const[Tambah_lokasi,{loading, data, error}] = useMutation(insertLokasi,
    {refetchQueries:[dataGraphql]});

  if(loading) return<div>Loading...</div>
  if(error)return<div>Ups.. ada yang error nih</div>
  if(data)return <div>Data Berhasil disimpan
    <button onClick={()=> window.location.reload()}>oke</button></div>;

  const handleKodeLokasi = (e) => {
    setKodelokasi(e.target.value)
  }

  const handleNamaLokasi = (e) => {
    setNamaLokasi(e.target.value)
  }

  const handleAlamat = (e) => {
    setAlamat(e.target.value)
  }

  const handleClickSubmit = () => {
    Tambah_lokasi({
      variables:{
        kode_lokasi: dataKodeLokasi,
        nama_lokasi:dataNamaLokasi,
        alamat: dataAlamat,
      },
    });
  };

  return (
    <>
      <main className="d-flex">
        <div className="container">
          <div className="card m-5">
            <div className="card-body">
              <form onSubmit={handleClickSubmit}>
                <div className="mb-3">
                  <label className="form-label">Kode Lokasi</label>
                  <input
                    type="text"
                    className="form-control"
                    name="kode_lokasi"
                    id="kode_lokasi"
                    onChange={handleKodeLokasi}
                    required
                  />
                  <div id="emailHelp" className="form-text">
                    pengisian kode ruangan menggunakan awalan R dan huruf
                    kapital, contoh <strong>' R001 '</strong>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Nama Lokasi</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nama_lokasi"
                    name="nama_lokasi"
                    onChange={handleNamaLokasi}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Alamat</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="alamat"
                    name="alamat"
                    onChange={handleAlamat}
                    required
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    required
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Dengan ini data yang saya masukkan telah benar dan sesuai
                    dengan data sebenarnya{" "}
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default CreateRuangan;
