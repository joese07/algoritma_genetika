import Sidebar from "../../partials/Sidebar";
import { Link } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import CreatePembina from "./CreatePembina";
import useGetPembina from "../../../graphql/GetPembina";

const deletePembina = gql`
  mutation Delete($id: Int) {
    delete_Data_Pembina(where: { id: { _eq: $id } }) {
      affected_rows
      returning {
        id
        nama
        tempat_lahir
        tanggal_lahir
        jenis_kelamin
        no_telepon
        alamat_email
        alamat
      }
    }
  }
`;

function Pembina() {
  // const [id, setId] = useState()

  const { error, loading, data } = useGetPembina();
  if (loading) return <div>Spinner...</div>;
  if (error) return <div>something went wrong</div>;

  const dataPembina = data.Data_Pembina;

  return (
    <div>
      <main className="d-flex flex-nowrap">
        <Sidebar />
        <div className="b-example-divider b-example-vr" />
        <div className="container">
          <div className=" bg-light rounded-3 mt-3">
            <div className="container-fluid py-3">
              <h1 className="display-5 fw-bold">Halaman Data Pembina</h1>
              <p className="col-md-8 fs-4">
                Klik tombol tambah dibawah jika ingin langsung tambah data
                pembina
              </p>
              <table className="table table-hover">
                <thead>
                  <tr style={{ textAlign: "center" }}>
                    <th scope="col">No</th>
                    <th scope="col">ID</th>
                    <th scope="col">Nama</th>
                    <th scope="col">No_Telepon</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody style={{ textAlign: "center" }}>
                  {dataPembina.map((pembina, index) => (
                    <tr>
                      <th>{index + 1}</th>
                      <th>{pembina.id}</th>
                      <td>{pembina.nama}</td>
                      <td>{pembina.no_telepon}</td>
                      <td>{pembina.alamat_email}</td>
                      <td>
                        <div class="d-flex justify-content-evenly">
                          <Link to={`/pembina/detail/${pembina.id}`}>
                            <div class="btn btn-success btn-sm" role="button">
                              <i class="bi-eye-fill"></i> Lihat Detail
                            </div>
                          </Link>
                          <Link to={`/pembina/edit/${pembina.id}`}>
                            <div class="btn btn-primary btn-sm" role="button">
                              <i class="bi-pencil-fill"></i> Edit
                            </div>
                          </Link>
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
                Buat Data Pembina Baru
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
                        Input Data Baru
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <CreatePembina />
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
export default Pembina;
