import Sidebar from "../../partials/Sidebar";
import { Link } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import CreateRuangan from "./CreateRuangan";
import useGetLokasi from "../../../graphql/GetLokasi";
import EditRuangan from "./EditRuangan";

function Ruangan() {
  const{data, loading, error} = useGetLokasi();
  if(loading) return <div>Loading...</div>
  if(error) return<div>Something went wrong...</div>

  const dataLokasi = data.Data_Lokasi


  return (
    <div>
      <main className="d-flex flex-nowrap">
        <Sidebar />
        <div className="b-example-divider b-example-vr" />
        <div className="container">
          <div className=" bg-light rounded-3 mt-3">
            <div className="container-fluid py-3">
              <h1 className="display-5 fw-bold">Halaman Data Ruangan</h1>
              <p className="col-md-8 fs-4">
                Klik tombol tambah dibawah jika ingin langsung tambah data shift
              </p>
              <table className="table table-hover">
                <thead>
                  <tr style={{ textAlign: "center" }}>
                    <th scope="col">No</th>
                    <th scope="col">Kode Ruangan</th>
                    <th scope="col">Nama Ruangan</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody style={{ textAlign: "center" }}>
                 {dataLokasi.map((lokasi, index)=>(
                  <tr>
                    <th>{index + 1 }</th>
                    <th>{lokasi.kode_lokasi}</th>
                    <td>{lokasi.nama_lokasi}</td>
                    <td>
                      <div class="d-flex justify-content-evenly">
                        <Link to={`/pembina/detail/:id`}>
                          <div class="btn btn-success btn-sm" role="button">
                            <i class="bi-eye-fill"></i> Lihat Detail
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
                        <button
                          class="btn btn-danger btn-sm"
                          type="submit"
                          // onClick={() => {
                          //   deleteData({ variables: { id: pembina.id } });
                          // }}
                        >
                          <i class="bi-trash-fill"></i> Hapus
                        </button>
                      </div>
                    </td>
                  </tr>
                  ))}
                </tbody>
              </table>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#formInput"
                data-bs-whatever="@mdo"
              >
                Buat Data Ruangan
              </button>
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
                        Edit Data Pembina
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <EditRuangan />
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
                        Input Data Ruangan Baru
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <CreateRuangan />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="pt-3 mt-4 text-muted border-top">© 2022</footer>
        </div>
      </main>
    </div>
  );
}
export default Ruangan;
