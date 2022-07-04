import { useState } from "react";

import useGetPembina from "../../../graphql/GetPembina";
import Sidebar from "../../partials/Sidebar";
import ProsesGenetika from "./ProsesGenetika";

function Prosesjadwal() {
  const [dataKromosom, setKromosom] = useState();
  const { error, loading, data } = useGetPembina();

  if (loading) return <div>Spinner...</div>;
  if (error) return <div>something went wrong</div>;

  const dataPembina = data.Data_Pembina.map((data) => {
    return `${data.nama} = ${data.kualitas}`;
  });

  console.log(dataPembina);

  const dataPembinaKualitas = data.Data_Pembina.map((data) => {
    return data.kualitas;
  });
  console.log(dataPembinaKualitas);

  const pembinaComplete = dataPembina + dataPembinaKualitas;
  console.log(pembinaComplete);

  const dataPembinaTiga = data.Data_Pembina.map(function (data) {
    return data.nama;
  });

  const dataPembinaEmpat = data.Data_Pembina.map(function (data) {
    return data.nama;
  });

  // Data Random kromosom 1
  let shuffled = dataPembina.sort(() => 0.5 - Math.random());
  console.log(shuffled);

  let looping = [];

  for (let j = 1; j <= 2; j++) {
    looping += shuffled;
  }

  let arr = looping.split(",");
  console.log(arr);

  //Data Random Kromosom 2
  let shuffledTwo = dataPembina.sort(() => 0.5 - Math.random());
  console.log(shuffled);

  let loopingTwo = [];

  for (let j = 1; j <= 2; j++) {
    loopingTwo += shuffledTwo;
  }

  let arrTwo = loopingTwo.split(",");
  console.log(arrTwo);

  //Data Random Kromosom 3
  let shuffledThree = dataPembina.sort(() => 0.5 - Math.random());
  console.log(shuffledThree);

  let loopingThree = [];

  for (let j = 1; j <= 2; j++) {
    loopingThree += shuffledThree;
  }

  let arrThree = loopingThree.split(",");
  console.log(arrThree);

  //Data Randmo Kromosom 4
  let shuffledFour = dataPembina.sort(() => 0.5 - Math.random());
  console.log(shuffledFour);

  let loopingFour = [];

  for (let j = 1; j <= 2; j++) {
    loopingFour += shuffledFour;
  }

  let arrFour = loopingFour.split(",");
  console.log(arrFour);

  //Data Random Kromosom 5
  let shuffledFive = dataPembina.sort(() => 0.5 - Math.random());

  console.log(shuffledFive);

  let loopingFive = [];

  for (let j = 1; j <= 2; j++) {
    loopingFive += shuffledFive;
  }

  let arrFive = loopingFive.split(",");
  console.log(arrFive);

  //Data Random Kromosom 6
  let shuffledSix = dataPembina.sort(() => 0.5 - Math.random());

  console.log(shuffledSix);

  let loopingSix = [];

  for (let j = 1; j <= 2; j++) {
    loopingSix += shuffledSix;
  }

  let arrSix = loopingSix.split(",");
  console.log(arrSix);

  //Data Random Kromosom 7
  let shuffledSeven = dataPembina.sort(() => 0.5 - Math.random());

  console.log(shuffledSeven);

  let loopingSeven = [];

  for (let j = 1; j <= 2; j++) {
    loopingSeven += shuffledSeven;
  }

  let arrSeven = loopingSeven.split(",");
  console.log(arrSeven);

  //Data kromosom 8
  let shuffledEight = dataPembina.sort(() => 0.5 - Math.random());

  console.log(shuffledEight);

  let loopingEight = [];

  for (let j = 1; j <= 2; j++) {
    loopingEight += shuffledEight;
  }

  let arrEight = loopingEight.split(",");
  console.log(arrEight);

  //Data kromosom 9
  let shuffledNine = dataPembina.sort(() => 0.5 - Math.random());

  console.log(shuffledNine);

  let loopingNine = [];

  for (let j = 1; j <= 2; j++) {
    loopingNine += shuffledNine;
  }

  let arrNine = loopingNine.split(",");
  console.log(arrNine);

  //Data kromosom 10
  let shuffledTen = dataPembina.sort(() => 0.5 - Math.random());

  console.log(shuffledTen);

  let loopingTen = [];

  for (let j = 1; j <= 2; j++) {
    loopingTen += shuffledTen;
  }

  let arrTen = loopingTen.split(",");
  console.log(arrTen);
  // console.log(dataPembinaDua);

  for (let i = 0; i < 24; i++) {
    let j = Math.floor(Math.random() * dataPembinaTiga.length);
    let temp = dataPembinaTiga[i];
    dataPembinaTiga[i] = dataPembinaTiga[j];
    dataPembinaTiga[j] = temp;
  }

  // console.log(dataPembinaTiga);

  for (let i = 0; i < 24; i++) {
    let j = Math.floor(Math.random() * dataPembinaEmpat.length);
    let temp = dataPembinaEmpat[i];
    dataPembinaEmpat[i] = dataPembinaEmpat[j];
    dataPembinaEmpat[j] = temp;
  }

  // console.log(dataPembinaEmpat);
  // const randomName = dataPembina.sort(() => Math.random() - 0.5);
  // const randomNameDua = dataPembina.sort(() => Math.random() - 0.5);

  // console.log(dataPembina);
  // const lengthDataPembina = dataPembina.length;
  // console.log(lengthDataPembina);
  const handleTester = () => {
    // const totalDataPembina = dataPembina.length;
    // const randomName = Math.floor(Math.random() * dataPembina.length);

    // const hasil = dataPembina[randomName]
    // console.log(dataPembina[randomName]);

    setKromosom(arr);

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
                <div className="modal-dialog modal-xl">
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
                          <table
                            className="table table-bordered"
                            id="dtHorizontalExample"
                          >
                            <thead>
                              <tr>
                                <th>Hari</th>
                                <th colSpan="3">Sabtu I</th>
                                <th colSpan="3">Minggu I</th>

                                <th colSpan="3">Sabtu II</th>
                                <th colSpan="3">Minggu II</th>
                                <th colSpan="3">Sabtu III</th>
                                <th colSpan="3">Minggu III</th>
                                <th colSpan="3">Sabtu IV</th>
                                <th colSpan="3">Minggu IV</th>
                                <th>Cadangan</th>
                              </tr>
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
                                <th>25</th>
                              </tr>
                            </thead>

                            <tbody>
                              <tr>
                                <th>Kromosom 1</th>
                                {arr.map((data) => (
                                  <td>{data}</td>
                                ))}
                              </tr>
                              <tr>
                                <th>Shift</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>Cadangan</th>
                              </tr>

                              <tr>
                                <th>Kromosom 2</th>
                                {arrTwo.map((data) => (
                                  <td>{data}</td>
                                ))}
                              </tr>
                              <tr>
                                <th>Shift</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>Cadangan</th>
                              </tr>

                              <tr>
                                <th>Kromosom 3</th>
                                {arrThree.map((data) => (
                                  <td>{data}</td>
                                ))}
                              </tr>
                              <tr>
                                <th>Shift</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>Cadangan</th>
                              </tr>

                              <tr>
                                <th>Kromosom 4</th>
                                {arrFour.map((data) => (
                                  <td>{data}</td>
                                ))}
                              </tr>
                              <tr>
                                <th>Shift</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>Cadangan</th>
                              </tr>
                              <tr>
                                <th>Kromosom 5</th>
                                {arrFive.map((data) => (
                                  <td>{data}</td>
                                ))}
                              </tr>
                              <tr>
                                <th>Shift</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>Cadangan</th>
                              </tr>
                              <tr>
                                <th>Kromosom 6</th>
                                {arrSix.map((data) => (
                                  <td>{data}</td>
                                ))}
                              </tr>
                              <tr>
                                <th>Shift</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>Cadangan</th>
                              </tr>
                              <tr>
                                <th>Kromosom 7</th>
                                {arrSeven.map((data) => (
                                  <td>{data}</td>
                                ))}
                              </tr>
                              <tr>
                                <th>Shift</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>Cadangan</th>
                              </tr>
                              <tr>
                                <th>Kromosom 8</th>
                                {arrEight.map((data) => (
                                  <td>{data}</td>
                                ))}
                              </tr>
                              <tr>
                                <th>Shift</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>Cadangan</th>
                              </tr>
                              <tr>
                                <th>Kromosom 9</th>
                                {arrNine.map((data) => (
                                  <td>{data}</td>
                                ))}
                              </tr>
                              <tr>
                                <th>Shift</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>Cadangan</th>
                              </tr>
                              <tr>
                                <th>Kromosom 10</th>
                                {arrTen.map((data) => (
                                  <td>{data}</td>
                                ))}
                              </tr>
                              <tr>
                                <th>Shift</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>Cadangan</th>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
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

export default Prosesjadwal;
