import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useParams } from "react-router";
import useDataPembina from "../../../hooks/useDataPembina";
import useDataPembinaa from "../../../hooks/useDataPembinaa";
import Sidebar from "../../partials/Sidebar";

function EditRuangan() {
  return (
    <>
      <main className="d-flex">
        <div className="container">
          <div className="card m-5">
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Kode Lokasi</label>
                  <input
                    type="text"
                    className="form-control"
                    name="kode_lokasi"
                    id="kode_lokasi"
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
export default EditRuangan;
