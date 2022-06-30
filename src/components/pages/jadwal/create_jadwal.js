import Sidebar from "../../partials/Sidebar";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { Link } from "react-router-dom";

function CreateDataJadwal() {
  return (
    <>
      <main className="d-flex">        
          <div className="card m-5">
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Kode Permintaan Jadwal</label>
                  <input
                    type="text"
                    className="form-control"
                    name="kode_jadwal"
                    id="kode_jadwal"
                    required
                  />
                  <div id="emailHelp" className="form-text">
                    pengisian kode jadwal menggunakan awalan J dan huruf
                    kapital, contoh <strong>' J001 '</strong>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Nama Jadwal </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nama_lokasi"
                    name="nama_lokasi"
                    required
                  />
                </div>
                <div className="mb-3">  
                    <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
                </div>
                <div class="mb-3">
                    <label for="formFile" className="form-label">Default file input example</label>
                    <input className="form-control" type="file" id="formFile" />
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
      </main>
    </>
  );
}
export default CreateDataJadwal;
