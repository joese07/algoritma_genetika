import Sidebar from "../../partials/Sidebar";
import { useParams } from "react-router";
import React from "react";
import useDataPembinaa from "../../../hooks/useDataPembinaa";
import { Link } from "react-router-dom";


// const selectPembina = gql`
// query MyQuery($_eq: Int) {
//   Data_Pembina(where: {id: {_eq: $_eq}}) {
//     id
//     nama
//     tempat_lahir
//     tanggal_lahir
//     jenis_kelamin
//     no_telepon
//     alamat_email
//     alamat
//   }
// }

// `;

function DetailPembina() {

  const{id} = useParams();

  const {data, loading, error} = useDataPembinaa(id);

  console.log(
    error,
    loading,
    data.Data_Pembina.nama)

  if(error) return <div>something went wrong</div>
  if(loading) return<div>spiner</div>

  return (
    <div>
      <h3>hahahah</h3>
      <main className="d-flex flex-nowrap">
        <Sidebar />
        <div className="b-example-divider b-example-vr" />
        <div className="container">
          <div className=" bg-light rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">Detail Pembina </h1>
              <p className="col-md-8 fs-4">Nama Pembina : </p>
 
              <table className="table table-hover">
              
                <thead>
                  <tr>
                    <th scope="col">Nama Lengkap </th>
                    <td> : </td>
                    <td>{data.Data_Pembina.nama}</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Tempat Lahir </th>
                    <td> : </td>
                    <td>{data.Data_Pembina.tempat_lahir}</td>
                  </tr>
                  <tr>
                    <th scope="row">Tanggal Lahir</th>
                    <td> : </td>
                    <td>{data.Data_Pembina.tanggal_lahir}</td>
                  </tr>
                  <tr>
                    <th scope="row">Jenis Kelamin</th>
                    <td> : </td>
                    <td>{data.Data_Pembina.jenis_kelamin}</td>
                  </tr>
                  <tr>
                    <th scope="row">Alamat </th>
                    <td> : </td>
                    <td>{data.Data_Pembina.alamat}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">No telepon</th>
                    <td> : </td>
                    <td>{data.Data_Pembina.no_telepon}</td>
                  </tr>
                  <tr>
                    <th scope="row">Email </th>
                    <td> : </td>
                    <td>{data.Data_Pembina.alamat_email}</td>
                  </tr>
                  <tr>
                    <th scope="row">Jadwal </th>
                    <td> : </td>
                    <td>Kamis </td>
                  </tr>
                  
                </tbody>
              </table>
              
              <Link to="/pembina">
                <button className="btn btn-secondary">Kembali</button>
              </Link>
            </div>
          </div>

          <footer className="pt-3 mt-4 text-muted border-top">© 2022</footer>
        </div>
      </main>
    </div>
  );
}

export default DetailPembina;
