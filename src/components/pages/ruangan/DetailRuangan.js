import Sidebar from "../../partials/Sidebar";
import { useParams } from "react-router";
import React from "react";
import useDataPembinaa from "../../../hooks/useDataPembinaa";
import { Link } from "react-router-dom";

function DetailRuangan() {
  return (
    <div>
      <main className="d-flex flex-nowrap">
        <Sidebar />
        <div className="b-example-divider b-example-vr" />
        <div className="container">
          <div className=" bg-light rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">Detail Ruangan </h1>
              <p className="col-md-8 fs-4">Nama Ruangan : </p>

              <table className="table table-hover">
                <tbody>
                  <tr>
                    <th scope="col">Kode Ruangan</th>
                    <td> : </td>
                    <td> R001 </td>
                  </tr>

                  <tr>
                    <th scope="row">Nama Ruangan</th>
                    <td> : </td>
                    <td> Planet </td>
                  </tr>
                  <tr>
                    <th scope="row">Alamat</th>
                    <td> : </td>
                    <td> Jakarta </td>
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

export default DetailRuangan;
