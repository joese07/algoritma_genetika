import { Link } from "react-router-dom";
import Sidebar from "../../partials/Sidebar";
import CreateDataJadwal from "./create_jadwal";

function CreateJadwal() {
  return (    <>
    <main className="d-flex flex-nowrap">
      <Sidebar />
      <div className="b-example-divider b-example-vr" />
      <div className="container">
        <div className=" bg-light rounded-2 mt-3">
          <div className="container-fluid py-3">
            <h1 className="display-5 fw-bold">Halaman Data Permintaan Jadwal</h1>
            <p className="col-md-8 fs-4">
              Klik tombol dibawah jika ingin langsung generate jadwal
            </p>
            <table className="table table-hover">
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <th scope="col">No</th>
                  <th scope="col">Kode Permintaan Jadwal</th>
                  <th scope="col">Hari 1</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ textAlign: "center" }}>
                  <th scope="row">1</th>
                  <td>J001</td>
                  <td>K001</td>
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
                    <CreateDataJadwal />
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
                    {/* <CreateShift /> */}
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
export default CreateJadwal;
