import { Link } from "react-router-dom";
import Sidebar from "../../partials/Sidebar";

function DetailShift() {
  return (
    <div>
      <main className="d-flex flex-nowrap">
        <Sidebar />
        <div className="b-example-divider b-example-vr" />
        <div className="container">
          <div className=" bg-light rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">Detail Anggota </h1>
              <p className="col-md-8 fs-4">Nama Anggota : </p>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Nama Lengkap </th>
                    <td> : </td>
                    <td>Joese Rio Telysana</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Tempat Lahir </th>
                    <td> : </td>
                    <td>Jakarta</td>
                  </tr>
                  <tr>
                    <th scope="row">Tanggal Lahir</th>
                    <td> : </td>
                    <td>13 - 01 -1999</td>
                  </tr>
                  <tr>
                    <th scope="row">Jenis Kelamin</th>
                    <td> : </td>
                    <td>Laki - laki</td>
                  </tr>
                  <tr>
                    <th scope="row">Alamat </th>
                    <td> : </td>
                    <td>
                      JL Bhineka 2 No 1 Rt009/006 Cipinang Cempedak , Jakarta
                      Timur
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">No telepon</th>
                    <td> : </td>
                    <td>089630493838</td>
                  </tr>
                  <tr>
                    <th scope="row">Email </th>
                    <td> : </td>
                    <td>yohanesjoese@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">Jadwal </th>
                    <td> : </td>
                    <td>Kamis </td>
                  </tr>
                </tbody>
              </table>
              <Link to="/anggota">
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

export default DetailShift;
