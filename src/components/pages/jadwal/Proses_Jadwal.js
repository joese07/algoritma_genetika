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
  const randomName = dataPembina.sort(() => Math.random() - 0.5);
  const randomNameDua = dataPembina.sort(() => Math.random() - 0.5);

  // console.log(dataPembina);
  // const lengthDataPembina = dataPembina.length;
  // console.log(lengthDataPembina);
  const handleTester = () => {
    // const totalDataPembina = dataPembina.length;
    // const randomName = Math.floor(Math.random() * dataPembina.length);

    // const hasil = dataPembina[randomName]
    // console.log(dataPembina[randomName]);

    console.log(dataKromosom);
    console.log(randomName);

    // for (let randomName = 0; randomName < dataKromosom; randomName++) {
    //     console.log(dataPembina[randomName]);
    // }
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
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#prosesAlgoritma"
                  data-bs-whatever="@mdo"
                >
                  Pross Algoritma
                </button>
              </div>

              <div
                className="modal fade"
                id="prosesAlgoritma"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Data Kromosom
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <div className="mb-3">
                        <div className="table-responsive">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>kromosom / gen</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                                <th>5</th>
                                <th>6</th>
                                <th>7</th>
                                <th>8</th>
                                <th>9</th>
                                <th>10</th>
                                <th>11</th>
                                <th>12</th>
                                <th>13</th>
                                <th>14</th>
                                <th>15</th>
                                <th>16</th>
                                <th>17</th>
                                <th>18</th>
                                <th>19</th>
                                <th>20</th>
                                <th>21</th>
                                <th>22</th>
                                <th>23</th>
                                <th>24</th>
                              </tr>
                            </thead>

                            <tbody>
                              <tr>
                                <td>Kromosom 1</td>
                                {randomName.map((data) => (
                                  <td>{data}</td>
                                ))}
                              </tr>
                              <tr>
                                <td>Kromosom 2</td>
                                {randomNameDua.map((data) => (
                                  <td>{data}</td>
                                ))}
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>{" "}
                    </div>
                  </div>
                </div>
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
