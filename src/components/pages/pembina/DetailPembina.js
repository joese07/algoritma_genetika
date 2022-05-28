import Sidebar from "../../partials/Sidebar";
import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";


const selectPembina = gql`
query MyQuery($_eq: Int) {
  Data_Pembina(where: {id: {_eq: $_eq}}) {
    id
    nama
    tempat_lahir
    tanggal_lahir
    jenis_kelamin
    no_telepon
    alamat_email
    alamat
  }
}

`;

function DetailPembina() {

  const { data: dataPembina } = useQuery(selectPembina);
 
  return (
    <div>
      <main className="d-flex flex-nowrap">
        <Sidebar />
        <div className="b-example-divider b-example-vr" />
        <div className="container">
          <div className=" bg-light rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">Detail Pembina </h1>
              <p className="col-md-8 fs-4">Nama Pembina : </p>
              {dataPembina.Data_Pembina.map((data) => (
              <table className="table table-hover">
              
                <thead>
                  <tr>
                    <th scope="col">Nama Lengkap </th>
                    <td> : </td>
                    <td>{data.nama}</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Tempat Lahir </th>
                    <td> : </td>
                    <td>{data.tempat_lahir}</td>
                  </tr>
                  <tr>
                    <th scope="row">Tanggal Lahir</th>
                    <td> : </td>
                    <td>{data.tanggal_lahir}</td>
                  </tr>
                  <tr>
                    <th scope="row">Jenis Kelamin</th>
                    <td> : </td>
                    <td>{data.jenis_kelamin}</td>
                  </tr>
                  <tr>
                    <th scope="row">Alamat </th>
                    <td> : </td>
                    <td>{data.alamat}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">No telepon</th>
                    <td> : </td>
                    <td>{data.no_telepon}</td>
                  </tr>
                  <tr>
                    <th scope="row">Email </th>
                    <td> : </td>
                    <td>{data.alamat_email}</td>
                  </tr>
                  <tr>
                    <th scope="row">Jadwal </th>
                    <td> : </td>
                    <td>Kamis </td>
                  </tr>
                  
                </tbody>
              </table>
              
              ))}
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
