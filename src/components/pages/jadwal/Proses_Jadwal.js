import { useState } from "react";
import { Link } from "react-router-dom";
import useGetLokasi from "../../../graphql/GetLokasi";
import useGetPembina from "../../../graphql/GetPembina";
import Sidebar from "../../partials/Sidebar";
import ProsesGenetika from "./ProsesGenetika";

function Proses_jadwal() {
  const [dataKromosom, setKromosom] = useState();
  const { error, loading, data } = useGetPembina();

  if (loading) return <div>Spinner...</div>;
  if (error) return <div>something went wrong</div>;

  const dataPembina = data.Data_Pembina.map(function (data) {
    return data.nama;
  });

  console.log(dataPembina);

  const handleTester = () => {
    // const totalDataPembina = dataPembina.length;
    const randomName = Math.floor(Math.random() * dataPembina.length);

    console.log(dataPembina[randomName]);
    setKromosom(31 * 3);
    console.log(dataKromosom);

    for (let randomName = 0; randomName < dataKromosom; randomName++) {
      if (dataPembina[randomName] === undefined) {
        console.log("ulangi");
      } else {
        console.log(dataPembina[randomName]);
      }
    }
  };

  return (
    <>
      <main className="d-flex flex-nowrap">
        <Sidebar />
        <div className="b-example-divider b-example-vr" />
        <div className="container">
          <div className=" bg-light rounded-2 mt-3">
            <div className="container-fluid py-3">
              <h1 className="display-5 fw-bold">Proses Penjadwalan </h1>
              <p className="col-md-8 fs-4">
                Klik tombol dibawah jika ingin langsung generate jadwal{" "}
              </p>
              <div className="mb-3 col-sm-4">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Lokasi
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>-- Pilih Lokasi --</option>
                  <option value="Bandung">Bandung</option>
                  <option value="Jakarta">Jakarta</option>
                </select>
              </div>
              <div className="mb-3 col-sm-4">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Bulan
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>-- Pilih Bulan --</option>
                  <option value="Januari">Januari</option>
                  <option value="Februari">Februari</option>
                </select>
              </div>
              <div className="mb-3">
                <button className="btn btn-success" onClick={handleTester}>
                  Tester
                </button>
              </div>
              <div className="mt-4 d-flex justify-content-end mb-4">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#formInput"
                  data-bs-whatever="@mdo"
                >
                  Buat Jadwal
                </button>
              </div>

              <div
                className="modal fade"
                id="formInput"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Pengaturan Algoritma Genetika
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <ProsesGenetika />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="pt-3 mt-4 text-muted border-top">© 2022 dd</footer>
        </div>
      </main>
    </>
  );
}

export default Proses_jadwal;
