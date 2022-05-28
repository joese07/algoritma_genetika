import Sidebar from "../../partials/Sidebar";
import { Link } from "react-router-dom";
import { gql, useMutation, useQuery } from "@apollo/client";

const getPembina = gql`
  query MyQuery {
    Data_Pembina {
      id
      nama
      tempat_lahir
      tanggal_lahir
      jenis_kelamin
      alamat_email
      no_telepon
      alamat
    }
  }
`;

const deletePembina = gql`
  mutation Delete($id: Int) {
    delete_Data_Pembina(where: { id: { _eq: $id } }) {
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
      affected_rows
    }
  }
`;

function Pembina() {
  // const [id, setId] = useState()
  const { data: dataPembina } = useQuery(getPembina);

  const [deleteData] = useMutation(deletePembina, {
    refetchQueries: [getPembina],
  });

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
                Klik tombol dibawah jika ingin langsung generate jadwal{" "}
              </p>
              <table className="table table-hover">
                <thead>
                  <tr style={{ textAlign: "center" }}>
                    <th scope="col">ID</th>
                    <th scope="col">Nama</th>
                    <th scope="col">No_Telepon</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody style={{ textAlign: "center" }}>
                  {dataPembina.Data_Pembina.map((data) => (
                    <tr>
                      <th>{data.id}</th>
                      <td>{data.nama}</td>
                      <td>{data.no_telepon}</td>
                      <td>{data.alamat_email}</td>
                      <td>
                        <div class="d-flex justify-content-evenly">
                          <Link to={`/pembina/detail/${data.id}`}>
                            <div class="btn btn-success btn-sm" role="button">
                              <i class="bi-eye-fill"></i> Lihat Detail
                            </div>
                          </Link>

                          <a
                            class="btn btn-primary btn-sm"
                            href="/histories/<%= data.id %>/edit"
                            role="button"
                          >
                            <i class="bi-pencil-fill"></i> Edit
                          </a>
                          <button
                            class="btn btn-danger btn-sm"
                            type="submit"
                            onClick={() => {
                              deleteData({ variables: { id: data.id } });
                            }}
                          >
                            <i class="bi-trash-fill"></i> Hapus
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Link to="/pembina/create">
                <button className="btn btn-primary">Tambah</button>
              </Link>
            </div>
          </div>

          <footer className="pt-3 mt-4 text-muted border-top">© 2022</footer>
        </div>
      </main>
    </div>
  );
}
export default Pembina;
