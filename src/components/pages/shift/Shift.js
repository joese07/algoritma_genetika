import { Link } from "react-router-dom";
import Sidebar from "../../partials/Sidebar";
import CreateShift from "./CreateShift";
import EditShift from "./EditShift";

function Shift() {
  return (
    <div>
      <main className="d-flex flex-nowrap">
        <Sidebar />
        <div className="b-example-divider b-example-vr" />
        <div className="container">
          <div className=" bg-light rounded-2 mt-3">
            <div className="container-fluid py-3">
              <h1 className="display-5 fw-bold">Halaman Shift</h1>
              <p className="col-md-8 fs-4">
                Klik tombol dibawah jika ingin langsung generate jadwal{" "}
              </p>
              <table className="table table-hover">
                <thead>
                  <tr style={{ textAlign: "center" }}>
                    <th scope="col">No</th>
                    <th scope="col">Kode Shift</th>
                    <th scope="col">Mulai</th>
                    <th scope="col">Selesai</th>
                    <th scope="col">Lokasi</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>S001</td>
                    <td>07.00</td>
                    <td>09.00</td>
                    <td>Planet</td>
                    <td>
                      <div className="d-flex justify-content-evenly">
                        <Link to="/anggota/detail">
                          <div className="btn btn-success btn-sm" role="button">
                            <i className="bi-eye-fill"></i> Lihat Detail
                          </div>
                        </Link>

                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#formEdit"
                          data-bs-whatever="@mdo"
                        >
                          Edit
                        </button>
                        <form
                          method="post"
                          action="/histories/<%= data.id %>?_method=DELETE"
                        >
                          <button
                            className="btn btn-danger btn-sm"
                            type="submit"
                            onclick="return confirm('apakah anda yakin hapus data ?');"
                          >
                            <i className="bi-trash-fill"></i> Hapus
                          </button>
                        </form>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>S002</td>
                    <td>09.00</td>
                    <td>11.00</td>
                    <td>Garden</td>
                    <td>
                      <div className="d-flex justify-content-evenly">
                        <Link to="/anggota/detail">
                          <div className="btn btn-success btn-sm" role="button">
                            <i className="bi-eye-fill"></i> Lihat Detail
                          </div>
                        </Link>

                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#formEdit"
                          data-bs-whatever="@mdo"
                        >
                          Edit
                        </button>
                        <form
                          method="post"
                          action="/histories/<%= data.id %>?_method=DELETE"
                        >
                          <button
                            className="btn btn-danger btn-sm"
                            type="submit"
                            onclick="return confirm('apakah anda yakin hapus data ?');"
                          >
                            <i className="bi-trash-fill"></i> Hapus
                          </button>
                        </form>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#formInput"
                data-bs-whatever="@mdo"
              >
                Buat Data shift
              </button>

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
                        Tambah Data Shift
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <EditShift />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="modal fade"
                id="formEdit"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Edit Data Shift
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <CreateShift />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="pt-3 mt-4 text-muted border-top">© 2022 dd</footer>
        </div>
      </main>
    </div>
  );
}

export default Shift;
